<script setup lang="ts">
const testimonies = [
	{
		name: '@rcarmonad',
		image: 'rcarmonad.png',
		testimony: 'casi termina conmigo por llevarla a ver esa peli',
	},
	{
		name: '@marcos',
		image: 'marcos.png',
		testimony: 'si, antes me mandaba una completa',
	},
	{
		name: '@catuga',
		image: 'catuga.png',
		testimony: 'pagarle a la empresa por tenerme',
	},
	{
		name: '@felipeegas',
		image: 'felipeegas.png',
		testimony: 'hacelo vo mimo dijo el joncenter',
	},
	{
		name: '@livercake',
		image: 'livercake.png',
		testimony: 'me patió porque me demoraba mucho en llegar a su casa',
	},
	{
		name: '@keldor',
		image: 'keldor.png',
		testimony: 'los token son equivalente a las fichas de pulperia',
	},
	{
		name: '@davidlaym',
		image: 'davidlaym.png',
		testimony: 'fake till you make it',
	},
	{
		name: '@rob.stlhrt',
		image: 'robstlhrt.png',
		testimony: 'Nunca es tarde para buscar pega como COBOL Jr',
	},
	{
		name: '@vforvicente',
		image: 'vforvicente.png',
		testimony: 'scrum esta muerto y lo mataron los scrum masters',
	},
	{
		name: '@jorgeepunan',
		image: 'jorge.png',
		testimony: 'cámbiense antes que los echen',
	},
	{
		name: '@alex',
		image: 'alex.png',
		testimony: 'Nah, soy cachero profesional. de cachos, no de cachas',
	},
	{
		name: '@raerpo',
		image: 'raerpo.png',
		testimony:
            'una vez estaba vendiendo una bicicleta y me dijeron que me daban la mitad porque era como de playa y la playa estaba lejos 😞',
	},
	{
		name: '@fabian',
		image: 'fabian.png',
		testimony: 'tirense un dato de fonos bluetooth con cablecito',
	},
];

const uniqueTestimonies = new Set<typeof testimonies[0]>();
while (uniqueTestimonies.size < 4) {
	uniqueTestimonies.add(testimonies[Math.floor(Math.random() * testimonies.length)]);
}

const selectedTestimonies = Array.from(uniqueTestimonies);
</script>

<template>
  <div>
    <h2
      class="mb-6 text-2xl text-white"
    >
      <span class="border-b border-white px-3 py-1">Testimonios</span>
    </h2>
    <div
      v-if="selectedTestimonies.length > 0"
      class="grid grid-cols-4 font-mono"
    >
      <div
        v-for="(item, idx) in selectedTestimonies"
        :key="idx"
      >
        <img
          :src="`/${item.image}`"
          :alt="item.name"
          class="mx-auto mb-4 max-w-[50%] rounded-full border-4 border-white"
        >
        <p>
          <span class="font-bold">{{ item.name }}</span>: <i>"{{ item.testimony }}"</i>
        </p>
      </div>
    </div>
  </div>
</template>

