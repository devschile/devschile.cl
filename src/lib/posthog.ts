type PostHogClient = typeof import('posthog-js').default;
type EventProperties = Record<string, unknown>;

const apiKey = import.meta.env.VITE_POSTHOG_KEY;

// El proyecto de PostHog es el mismo para todos los sitios de devsChile, así
// que el host tiene un valor por defecto y solo la key es obligatoria: es una
// variable menos que configurar en Coolify.
const apiHost = import.meta.env.VITE_POSTHOG_HOST ?? 'https://us.i.posthog.com';

let client: PostHogClient | undefined;

// Eventos disparados antes de que el chunk de posthog termine de cargar. Se
// guardan y se envían apenas el cliente está listo.
const pending: Array<[string, EventProperties | undefined]> = [];

async function load() {
  const { default: posthog } = await import('posthog-js');

  posthog.init(apiKey!, {
    api_host: apiHost,
    person_profiles: 'identified_only',
    respect_dnt: true,
  });

  // El proyecto es compartido con los otros sitios (pegas, tienda, log...).
  // Se etiqueta cada evento con site='devschile.cl' para poder filtrar sin
  // depender de `$host`, igual que en `tienda`.
  posthog.register({ site: 'devschile.cl' });

  posthog.startExceptionAutocapture({
    capture_unhandled_errors: true,
    capture_unhandled_rejections: true,
    capture_console_errors: false,
  });

  client = posthog;

  for (const [event, properties] of pending.splice(0)) {
    posthog.capture(event, properties);
  }
}

// posthog-js pesa ~290 kB sin comprimir, más del doble que todo el resto del
// sitio. Se carga como chunk aparte y en idle para no retrasar el primer
// render de una landing que es, básicamente, texto.
//
// Sin key no se carga nada: este repo es público y no trae `.env`, así que
// `yarn dev` tiene que funcionar sin configurar analytics — mismo criterio
// que el plugin de `devschile-horoscopo`.
if (apiKey) {
  if ('requestIdleCallback' in globalThis) {
    requestIdleCallback(() => void load(), { timeout: 2000 });
  } else {
    setTimeout(() => void load(), 0);
  }
}

/**
 * Envuelve `posthog.capture` para que los componentes no tengan que
 * preocuparse de si PostHog está configurado o de si ya terminó de cargar.
 */
export function capture(event: string, properties?: EventProperties) {
  if (!apiKey) return;

  if (client) {
    client.capture(event, properties);
  } else {
    pending.push([event, properties]);
  }
}
