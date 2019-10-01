qvo.button.render({
  env: 'production',
  keys: {
    production: 'q1ds3WcAWLnDXLf6pF4RgQ'
  },
  amount: 7000,
  description: 'Donación 2 meses + gold devsChile',
  name: 'devsChile',
  image: 'https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2018-05-24/369823900965_0f2f2399791e3057cc72_132.png',
  onSuccess: function (response) {
    setTimeout(function() {
      window.alert('¡Pago Completado 😁!');
    }, 500);
  },
  onCancel: function () {
    window.alert('Usuario canceló el pago 🙁. Si tienes dudas en slack devsChile te podemos asesorar, canal #comunidad');
  },
  theme: {
    mainColor: '#111111',
    buttonColor: '#5CE6CD'
  },
}, '#qvo-button-container');
