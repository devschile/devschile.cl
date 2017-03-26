/*jshint unused:false */

(function() {

  // huemul sticker modal
  function openModal() {
    tinyModal.openModal("#unete", function() {
      document.querySelector("#heroku-unete").contentWindow.setTimeout("this.scrollTo(0, 200);",1);
    });
  }
  function openModalSticker() {
    tinyModal.openModal("#sticker", function() {
      document.querySelector("#btn-sticker");
    });
  }

  // typewritter fx
  // slogan y subtitulo
  TypeWritter.start({
    containerId: "title",
    extractClass: "typewrite",
    cursorClass: "cursor"
  });
  TypeWritter.start({
    containerId: "subtitle",
    extractClass: "typewrite",
    cursorClass: "cursor"
  });

  // testimonios / random
    // shuffle different numbers: http://stackoverflow.com/a/25984542/2148418
  function numberArray(a,b) {
    b = [];
    while (a--) b[a] = a;
    return b
  }
  function randomize(a,b,c,d) {
    c = a.length;
    while(c) b = Math.random() * (--c+1)|0,d=a[c],a[c]=a[b],a[b]=d
  }

  var testimonios = document.querySelectorAll('.box-person');
  var maxElems = 8;
  var rand = numberArray(maxElems);
  // apply
  randomize(rand);

  [].forEach.call(rand.slice(0,4), function(i) {
    testimonios[i].classList.add("-hidden");
  });

})();