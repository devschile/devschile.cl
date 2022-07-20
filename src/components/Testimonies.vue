<template>
  <div class="row">
    <div class="column-12 column-center text-center">
      <div id="subtitle">
        <h1>
          <vue-typer text="Testimonios"></vue-typer>
        </h1>
      </div>
    </div>
    <div
      class="column-12 column-center text-center gutter-top"
      v-if="selectedTestimonies.length > 0"
    >
      <div
        class="box-person column-3"
        v-for="item in selectedTestimonies"
        :key="item.id"
      >
        <div class="box-avatar">
          <img :src="item.image" :alt="item.name" class="avatar" />
        </div>
        <div class="box-testimony">
          <p class="testimony">
            <span class="who">{{ item.name }}</span
            >: <i>"{{ item.testimony }}"</i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testimonies",
  data() {
    return {
      testimonies: [
        {
          name: "@rcarmonad",
          image: "https://i.imgur.com/frPjcpY.png",
          testimony: "casi termina conmigo por llevarla a ver esa peli",
        },
        {
          name: "@marcos",
          image: "https://i.imgur.com/3bQ47Fw.png",
          testimony: "si, antes me mandaba una completa",
        },
        {
          name: "@catuga",
          image: "https://i.imgur.com/ipzlj75.png",
          testimony: "pagarle a la empresa por tenerme",
        },
        {
          name: "@felipeegas",
          image: "https://i.imgur.com/6nvHomE.png",
          testimony: "hacelo vo mimo dijo el joncenter",
        },
        {
          name: "@livercake",
          image: "https://i.imgur.com/PWKj2iO.png",
          testimony: "me patió porque me demoraba mucho en llegar a su casa",
        },
        {
          name: "@keldor",
          image: "https://i.imgur.com/VBbKhWi.png",
          testimony: "los token son equivalente a las fichas de pulperia",
        },
        {
          name: "@davidlaym",
          image: "https://i.imgur.com/N5jbzHu.png",
          testimony: "fake till you make it",
        },
        {
          name: "@rob.stlhrt",
          image: "https://i.imgur.com/Ven97dG.png",
          testimony: "Nunca es tarde para buscar pega como COBOL Jr",
        },
        {
          name: "@vforvicente",
          image: "https://i.imgur.com/31PYFWD.png",
          testimony: "scrum esta muerto y lo mataron los scrum masters",
        },
        {
          name: "@jorgeepunan",
          image: "https://i.imgur.com/9jvfE8l.png",
          testimony: "cámbiense antes que los echen",
        },
        {
          name: "@alex",
          image: "https://i.imgur.com/Xte8zZD.png",
          testimony: "Nah, soy cachero profesional. de cachos, no de cachas",
        },
        {
          name: "@raerpo",
          image: "https://i.imgur.com/SCIwDvY.png",
          testimony:
            "una vez estaba vendiendo una bicicleta y me dijeron que me daban la mitad porque era como de playa y la playa estaba lejos 😞",
        },
        {
          name: "@fabian",
          image: "https://i.imgur.com/2ac9P9m.png",
          testimony: "tirense un dato de fonos bluetooth con cablecito",
        },
      ],
      selectedTestimonies: [],
    };
  },
  methods: {
    randomTestimonies() {
      function numberArray(a, b) {
        b = [];
        while (a--) {
          b[a] = a;
        }
        return b;
      }
      function randomize(a, b, c, d) {
        c = a.length;
        /* eslint-disable */
        while (c) {
          b = Math.random() * (--c + 1) | 0, d = a[c], a[c] = a[b], a[b] = d
        }
        /* eslint-enable */
      }

      const testimonios = this.testimonies;
      const totalElems = testimonios.length;
      const maxElems = 4;
      const rand = numberArray(totalElems);

      randomize(rand);

      testimonios.forEach.call(rand.slice(0, maxElems), (i) => {
        this.selectedTestimonies.push(testimonios[i]);
      });
    },
  },
  created: function () {
    this.randomTestimonies();
  },
};
</script>
