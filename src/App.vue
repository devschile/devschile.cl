<script setup lang="ts">
import { ref } from 'vue';
import SlackAscii from './components/SlackAscii.vue';
import BeerJSAscii from './components/BeerJSAscii.vue';
import HuemulAscii from './components/HuemulAscii.vue';
import Testimonies from './components/Testimonies.vue';
import { Dialog, DialogPanel } from '@headlessui/vue';

const isStickersOpen = ref(false);
const inviteLink = 'https://join.slack.com/t/devschile/shared_invite/zt-28po3lsc2-XZd7gJzd_sKl6RJqnYqFkw';
</script>

<template>
  <div class="container mx-auto px-4 py-20 text-center text-gray-300 md:px-0">
    <h1 class="mb-4 text-4xl text-white">
      devsChile
    </h1>
    <p>Los mejores devs de Chile juntos en Slack</p>
    <hr class="my-8 opacity-20">
    
    <div class="grid gap-16 md:grid-cols-12 mt-8">
      <div class="flex items-center justify-center text-left font-mono leading-tight md:col-span-4 md:col-start-2 flex-col">
        <p>
          <b>devsChile</b> es más que un grupo de Slack: es una comunidad de
          diseñadores y desarrolladores web que se juntan a comentar, ayudar,
          sugerir y reclamar de su día-a-día. Canales como <b>#backend</b>,
          <b>#cultura</b>, <b>#frontend</b>, <b>#lifehacks</b>,
          <b>#trabajos</b>, <b>#ux</b> y por supuesto <b>#random</b> son
          algunos de los que puedes ingresar, aportar y hasta procrastinar un
          rato mientras dure tu <i>Pomodoro</i>.
        </p>
        <p>
          <a
            class="mb-8 mt-8 bg-teal-400 text-xl uppercase text-white inline-block"
            style="text-shadow: 1px 1px #555; padding: 1rem 2rem;"
            :href="inviteLink"
          >
            ¡Únete!
          </a>
        </p>
    </div>
      <div class="mb-4 md:col-span-6 md:col-start-7 md:mb-0">
        <SlackAscii class="mb-4 md:col-span-6 md:mb-0" />
      </div>
    </div>
    <hr class="my-8 opacity-20">
    <div class="grid gap-16 md:grid-cols-12">
      <BeerJSAscii class="mb-4 md:col-span-6 md:mb-0" />
      <div class="flex items-center justify-center text-left font-mono leading-tight md:col-span-4 md:col-start-8">
        <p>
          <b>devsChile</b> hospeda a los organizadores del famoso evento
          <a
            class="text-teal-400 underline"
            href="https://www.beerjs.cl/"
          >BeerJS</a>, y sus usuarios siempre
          son privilegiados con el primer anuncio oficial de una nueva edición
          y de poder inscribirse 1 dia antes que por otros medios.
        </p>
      </div>
    </div>
    <hr class="my-8 opacity-20">
    <div class="grid gap-16 md:grid-cols-12">
      <div class="flex items-center justify-center text-left font-mono leading-tight md:col-span-4 md:col-start-2">
        <p>
          Tenemos al mejor <i>Hubot</i> de todos los Slacks:
          <a
            href="https://github.com/devschile/huemul"
            class="text-teal-400 underline"
            target="_blank"
          >Huemul</a>
          nos acompaña todos los días y su grupo de apoyo no se cansa de
          hacerle mejoras. Únete y conócelo, crea nuevas funcionalidades y
          apóyanos en su desarrollo en el canal
          <a
            href="https://devschile.slack.com/messages/huemul-devs"
            class="text-teal-400 underline"
          >#huemul-devs</a>.
        </p>
      </div>
      <div class="mb-4 md:col-span-6 md:col-start-7 md:mb-0">
        <HuemulAscii />
      </div>
    </div>
    <hr class="my-8 opacity-20">
    <div class="grid gap-16 md:grid-cols-2">
      <div>
        <h2
          id="donations"
          class="mb-6 text-2xl text-white"
        >
          <span class="border-b border-white px-3 py-1">¡Donaciones!</span>
        </h2>
        <p class="mb-4">
          Tu donación de irá en directa mantención de la cuenta del VPS que
          mantiene a nuestro bot y otros servicios
          <img
            src="/huemul.png"
            width="20"
            class="inline-block"
          >. Además serás miembro gold
          <img
            src="/gold.gif"
            title="gold"
            class="inline-block"
          >
          por <b>2 meses</b> con múltiples beneficios en la comunidad.
        </p>
        <a
          class="bg-teal-400 px-4 py-2 text-xl uppercase text-white inline-block"
          target="_blank"
          href="https://app.reveniu.com/checkout-custom-link/X6wYvaeZJ4RDFJFKEF93bTBEUOXhTUVV"
          style="text-shadow: 1px 1px #555; padding: 1rem 2rem;"
        >
          Donar
        </a>
      </div>
      <div>
        <h3 class="mb-6 text-2xl text-white">
          <span class="border-b border-white px-3 py-1">Donación por suscripción</span>
        </h3>
        <p class="mb-4">
          Ya podemos crear suscripciones para donaciones mensuales por
          <b>$3.500</b> y puedes darlo de baja cuando quieras. Además de ser
          miembro gold por la duración de tu suscripción, si estás suscrito por
          3 meses, recibirás
          <button
            type="button"
            class="text-teal-400 underline"
            @click="isStickersOpen = true"
          >
            stickers
          </button> de
          devsChile.
        </p>
        <a
          class="bg-teal-400 px-4 py-2 text-xl uppercase text-white inline-block"
          target="_blank"
          href="https://app.reveniu.com/checkout-custom-link/HoDXmOVFfxFG27ntANhYqZdAEvzovm3G"
          style="text-shadow: 1px 1px #555; padding: 1rem 2rem;"
        >
          Unirse
        </a>
      </div>
    </div>
    <hr class="my-8 opacity-20">
    <Testimonies />
    <hr class="my-8 opacity-20">
    <div class="text-center font-mono text-sm">
      © Copyright 2016 ~ {{ new Date().getFullYear() }}
      <a
        href="https://github.com/orgs/devschile/teams/org/members"
        target="_blank"
        class="text-teal-400 underline"
      >devsChile Core Team</a>. Lea nuestro
      <a
        href="http://devschile.github.io/codigo-de-conducta/"
        target="_blank"
        class="text-teal-400 underline"
      >CoC</a>. License:
      <a
        href="https://gist.githubusercontent.com/juanbrujo/36fa4d629b49f900252e/raw/d383b5bef4c99f038f2b1305a7d1f592b6f64a2d/DWTFYWTPL"
        target="_blank"
        class="text-teal-400 underline"
      >DWTFYWTPL</a>. <br>Contacto:
      <a
        href="mailto:huemul@devschile.cl"
        class="text-teal-400 underline"
      >huemul@devschile.cl</a>
    </div>
  </div>
  <Dialog
    :open="isStickersOpen"
    class="relative z-50"
    @close="isStickersOpen = !isStickersOpen"
  >
    <div class="fixed inset-0 flex items-center justify-center p-4">
      <DialogPanel class="w-full max-w-4xl rounded bg-white">
        <img src="/stickers.jpg">
      </DialogPanel>
    </div>
  </Dialog>
</template>

<style scoped>
.reveniu-button {
  padding: 0.75rem 32px;
  color: white;
  background-color: #336dff;
  border: 1px solid #336dff;
  font-size: 16px;
  border-radius: 5px;
  width: 118px;
}
</style>
