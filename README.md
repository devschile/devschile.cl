# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Variables de entorno

Copia `.env.example` a `.env` y complétalo. En producción se configuran en
Coolify (`coolify.devschile.cl` → `devschile/devschile.cl` → Environment
Variables), no se commitean.

Ojo: Vite inlinea las `VITE_*` en el bundle **en tiempo de build**, así que en
Coolify tienen que estar marcadas como *Build Variable*. Si solo son runtime,
el build las ve vacías y la variable queda como `undefined` sin error visible.

| Variable | Obligatoria | Descripción |
| --- | --- | --- |
| `VITE_SLACK_INVITE_LINK` | Sí | Link de invitación al Slack (botón "¡Únete!"). |
| `VITE_POSTHOG_KEY` | No | Project token de PostHog. Sin esta variable no se carga analytics. |
| `VITE_POSTHOG_HOST` | No | Por defecto `https://us.i.posthog.com`. |

## Analytics

Usamos [PostHog](https://posthog.com/), el mismo proyecto compartido con los
demás sitios de devsChile (`pegas`, `tienda`, `log`, ...). Cada evento se
etiqueta con `site='devschile.cl'` para poder filtrar sin depender de `$host`.

`posthog-js` se carga en un chunk aparte y en idle, para no retrasar el primer
render: el bundle principal queda igual que sin analytics.

Además del pageview automático, se registran:

- `slack_invite_clicked` — click en el botón "¡Únete!".
- `gold_checkout_started` — click en cualquiera de los dos CTA de gold, con las
  propiedades `plan` (`recurrente` / `pago-unico`) y `provider`.

Para agregar eventos, usa el helper `capture()` de `src/lib/posthog.ts`: es un
no-op si PostHog no está configurado y encola los eventos disparados antes de
que el chunk termine de cargar.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
