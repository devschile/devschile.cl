<template>
  <main class="container">
    <div class="row">
      <div class="column-12 column-center text-center">
        <h1>devsChile</h1>
        <h2 class="typewrite">
          <vue-typer
            text="Los mejores devs de Chile juntos en Slack"
            erase-style="backspace"
            :erase-delay="30"
          ></vue-typer>
        </h2>
        <hr />
        <div class="box-btn_inscribete">
          <a :href="inviteLink" class="btn">¡Únete!</a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column-5">
        <div class="text-center">
          <SlackAscii />
        </div>
      </div>
      <div class="column-4 column-push-2 gutter-top-xsmall">
        <div class="vertical-centered-text vertical-middle">
          <p>
            <b>devsChile</b> es más que un grupo de Slack: es una comunidad de
            diseñadores y desarrolladores web que se juntan a comentar, ayudar,
            sugerir y reclamar de su día-a-día. Canales como <b>#backend</b>,
            <b>#cultura</b>, <b>#frontend</b>, <b>#lifehacks</b>,
            <b>#trabajos</b>, <b>#ux</b> y por supuesto <b>#random</b> son
            algunos de los que puedes ingresar, aportar y hasta procrastinar un
            rato mientras dure tu <i>Pomodoro</i>.
          </p>
        </div>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="column-4 column-push-2 gutter-top-xsmall">
        <div class="vertical-centered-text vertical-tall">
          <p>
            <b>devsChile</b> hospeda a los organizadores del famoso evento
            <a href="https://www.beerjs.cl/">BeerJS</a>, y sus usuarios siempre
            son privilegiados con el primer anuncio oficial de una nueva edición
            y de poder inscribirse 1 dia antes que por otros medios.
          </p>
        </div>
      </div>
      <div class="column-5 column-push-2">
        <div class="text-center">
          <BeerJSAscii />
        </div>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="column-8">
        <div class="text-center">
          <HuemulAscii />
        </div>
      </div>
      <div class="column-4 gutter-top-xsmall">
        <div class="vertical-centered-text vertical-middle">
          <p>
            Tenemos al mejor <i>Hubot</i> de todos los Slacks:
            <a href="https://github.com/devschile/huemul" target="_blank"
              >Huemul</a
            >
            nos acompaña todos los días y su grupo de apoyo no se cansa de
            hacerle mejoras. Únete y conócelo, crea nuevas funcionalidades y
            apóyanos en su desarrollo en el canal
            <a href="https://devschile.slack.com/messages/huemul-devs"
              >#huemul-devs</a
            >.
          </p>
        </div>
      </div>
    </div>
    <hr />
    <div class="row text-center">
      <div class="column-6">
        <h3 id="donations"><span>¡Donaciones!</span></h3>
        <p>
          Tu donación de irá en directa mantención de la cuenta del VPS que
          mantiene a nuestro bot y otros servicios
          <img
            src="https://emoji.slack-edge.com/T0R6F3YAX/devschile/451c6509496ff3b9.png"
            width="20"
          />. Además serás miembro gold
          <img
            src="https://emoji.slack-edge.com/T0R6F3YAX/monea/9251827c776c00c6.gif"
            title="gold"
          />
          por <b>2 meses</b> con múltiples beneficios en la comunidad.
        </p>
        <a
          target="_blank"
          href="https://app.reveniu.com/checkout-custom-link/X6wYvaeZJ4RDFJFKEF93bTBEUOXhTUVV"
        >
          <button
            style="
              padding: 0.75rem 32px;
              color: white;
              background-color: #336dff;
              border: 1px solid #336dff;
              font-size: 16px;
              border-radius: 5px;
              width: 109px;
            "
          >
            Donar
          </button>
        </a>
      </div>
      <div class="column-6">
        <h3><span>Donación por suscripción</span></h3>
        <p>
          Ya podemos crear suscripciones para donaciones mensuales por
          <b>$3.500</b> y puedes darlo de baja cuando solicites. Además de ser
          miembro gold por la duración de tu suscripción, si estás suscrito por
          3 meses, recibirás
          <a href="#" @click.prevent="$modal.show('sticker')">stickers</a> de
          devsChile.
        </p>
        <a
          target="_blank"
          href="https://app.reveniu.com/checkout-custom-link/HoDXmOVFfxFG27ntANhYqZdAEvzovm3G"
        >
          <button
            style="
              padding: 0.75rem 32px;
              color: white;
              background-color: #336dff;
              border: 1px solid #336dff;
              font-size: 16px;
              border-radius: 5px;
              width: 118px;
            "
          >
            Unirse
          </button>
        </a>
      </div>
    </div>
    <hr />
    <Testimonies />
    <hr />
    <div class="row">
      <div class="column-12 column-center text-center">
        © Copyright 2016 ~ {{ new Date().getFullYear() }}
        <a
          href="https://github.com/orgs/devschile/teams/org/members"
          target="_blank"
        >
          devsChile Core Team </a
        >. Lea nuestro
        <a href="http://devschile.github.io/codigo-de-conducta/" target="_blank"
          >CoC</a
        >. License:
        <a
          href="https://gist.githubusercontent.com/juanbrujo/36fa4d629b49f900252e/raw/d383b5bef4c99f038f2b1305a7d1f592b6f64a2d/DWTFYWTPL"
          target="_blank"
          >DWTFYWTPL</a
        >. <br />Contacto:
        <a href="mailto:huemul@devschile.cl">huemul@devschile.cl</a>
      </div>
    </div>
    <Modals />
  </main>
</template>

<script>
import HuemulAscii from "../components/HuemulAscii";
import BeerJSAscii from "../components/BeerJSAscii";
import SlackAscii from "../components/SlackAscii";
import Testimonies from "../components/Testimonies";
import Modals from "../components/Modals";

import Vue from "vue";
import VueTyperPlugin from "vue-typer";
import VModal from "vue-js-modal";

Vue.use(VueTyperPlugin);
Vue.use(VModal);

export default {
  name: "Home",
  data() {
    return {
      inviteLink:
        "https://join.slack.com/t/devschile/shared_invite/zt-1l3wsju9h-cwzlACHkCkSor_mywTsLcw",
    };
  },
  components: {
    HuemulAscii,
    BeerJSAscii,
    SlackAscii,
    Testimonies,
    Modals,
  },
  methods: {
    printInConsole() {
      /* eslint-disable */
      const huemulAscii =
        "                                 ;;;;;;   ;;;\n                                 @@@@@@   @@@\n                              ;;;+++@@@;;;+++;;;\n                              @@@;;;@@@@@@;;;@@@\n                              @@@;;;@@@@@@;;;@@@\n                              @@@;;;;;;;;;;;;@@@\n                                 @@@;;;@@@;;;;;;@@@\n                                 @@@;;;@@@;;;;;;@@@\n                                 @@@;;;;;;;;;;;;;;;@@@\n                                 @@@;;;;;;;;;;;;;;;@@@\n   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@;;;;;;;;;;;;;;;@@@@@@\n   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@;;;;;;;;;;;;;;;@@@@@@\n@@@......:;;;;;;;;;;;;;;;;;;;;;;;;;;;@@@@@@@@@\n@@@......:;;;;;;;;;;;;;;;;;;;;;;;;;;;@@@@@@@@@\n   @@@+;;;;;;;;;;;;;;;;;;;;;;;;;;;@@@\n   @@@+;;;;;;;;;;;;;;;;;;;;;;;;;;;@@@\n   @@@+;;;;;;;;;;;;;;;;;;;;;;;;@@@\n   @@@+;;;;;;;;;;;;;;;;;;;;;;;;@@@\n      ;@@+;;;;;;@@@@@@@@@;;;;;;@@@\n      ;@@+;;;;;;@@@@@@@@@;;;;;;@@@\n   @@@+;;;;;;@@@         @@@;;;@@@\n   @@@+;;;;;;@@@         @@@;;;@@@\n   @@@'..'@@@            @@@...@@@\n   @@@'..'@@@            @@@...@@@\n      ;@@;                  @@@\n      ;@@;                  @@@     RIP";
      /* eslint-enable */
      console.log(huemulAscii);
    },
  },
  created: function () {
    this.printInConsole();
  },
};
</script>

<style lang="scss">
@import "../assets/css/normalize.min.css";
@import "../assets/scss/all";

html {
  overflow-x: hidden;
}

body {
  background: #100a1c;
  background-image: -webkit-radial-gradient(
      50% 30% ellipse at center top,
      #201e40 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    -webkit-radial-gradient(60% 50% ellipse at center bottom, #261226 0%, #100a1c
          100%);
  background-image: radial-gradient(
      50% 30% ellipse at center top,
      #201e40 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    radial-gradient(60% 50% ellipse at center bottom, #261226 0%, #100a1c 100%);
  background-attachment: fixed;
  color: $font;
  font-size: 1.1em;
}

body,
pre,
code {
  font-family: $primary-fontfamily;
}

h1,
h2,
h3 {
  font-family: $title;
}

h1,
h2,
h3,
pre,
code {
  color: #fff;
  font-weight: normal;
}

code {
  background-color: rgba(255, 255, 255, 0.15);
}

a {
  color: $link;

  &:hover {
    text-decoration: none;
  }
}

.text-center {
  text-align: center;
}

main {
  padding: 3em 1.5em;
}

h1 {
  font-size: 2.2em;
}

h2 {
  font-size: 1.8em;
}

h3 {
  font-size: 1.3em;

  span {
    display: inline-block;
    border-bottom: 1px solid #fff;
    padding: 0.2em 0.8em;
  }
}

hr {
  opacity: 0.2;
  margin: 2em auto;
  width: 100%;
}

.box-btn_inscribete {
  margin: 4em 0;
}

.btn {
  display: inline-block;
  padding: 0.6em 1em;
  color: #fff;
  background-color: $link;
  border: 0;
  text-decoration: none;
  text-transform: uppercase;
  font-family: $button;
  cursor: pointer;
  font-size: 1.2em;
  text-shadow: 1px 1px #555;

  &.btn-donar {
    padding: 0.3em 1em;
    font-size: 0.9em;
    border-radius: 10px;
  }
}

.vertical-tall {
  height: 60vmin;
}

.vertical-middle {
  height: 40vmin;
}

.vertical-centered-text {
  display: table;
  > p {
    display: table-cell;
    vertical-align: middle;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1024px;
  }
}

.box-person {
  .box-avatar {
    .avatar {
      max-width: 50%;
      border-radius: 50%;
      border: 5px solid $font;
    }
  }
  .box-testimony {
    .who {
      font-weight: bold;
    }
  }
  .-hidden {
    display: none;
  }
}

.wrap-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  max-height: 100vh;
  background: url(https://i.imgur.com/AkZ15K5.gif) center center no-repeat;

  img {
    display: block;
    max-width: 100%;
  }
}

.vue-typer {
  .custom.char {
    color: white;
    font-family: Monaco;
    font-size: 0.6em;
  }

  .custom.caret {
    background-color: white;
  }
}
</style>
