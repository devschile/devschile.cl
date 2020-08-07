<template>
  <div class="modals">
    <modal
      name="unete"
      :adaptive="true"
      width="80%"
      height="auto"
      :maxHeight="600"
      :maxWidth="800"
      :minHeight="600"
    >
      <div class="wrap-modal">
        <iframe class="heroku-unete" src="https://unete-2019.herokuapp.com/" width="100%" height="500px" frameborder="0"></iframe>
      </div>
    </modal>
    <modal
      name="sticker"
      :adaptive="true"
      width="80%"
      height="auto"
      :maxHeight="600"
      :maxWidth="800"
      :minHeight="600"
    >
      <div class="wrap-modal">
        <img src="https://i.imgur.com/tKU2Hkx.jpg" alt="Stickers Huemul" class="sticker">
      </div>
    </modal>
    <modal
      name="kushki"
      :adaptive="true"
      :width="500"
      :height="420"
      :maxHeight="600"
      :maxWidth="800"
      :minHeight="450"
      :scrollable="false"
    >
      <div class="wrap-modal">
        <iframe class="kushki-pay" src="../../kushki/index.html" width="100%" height="420" frameborder="0"></iframe>
      </div>
    </modal>
  </div>
</template>
