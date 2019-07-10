/*jshint unused:false */

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

function openModalStickerNew() {
  tinyModal.openModal("#sticker_new", function() {
    document.querySelector("#btn-sticker");
  });
}

(function() {
  // print huemul in console
  /* jshint ignore:start */
  var huemulAscii = "                                 ;;;;;;   ;;;\n                                 @@@@@@   @@@\n                              ;;;+++@@@;;;+++;;;\n                              @@@;;;@@@@@@;;;@@@\n                              @@@;;;@@@@@@;;;@@@\n                              @@@;;;;;;;;;;;;@@@\n                                 @@@;;;@@@;;;;;;@@@\n                                 @@@;;;@@@;;;;;;@@@\n                                 @@@;;;;;;;;;;;;;;;@@@\n                                 @@@;;;;;;;;;;;;;;;@@@\n   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@;;;;;;;;;;;;;;;@@@@@@\n   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@;;;;;;;;;;;;;;;@@@@@@\n@@@......:;;;;;;;;;;;;;;;;;;;;;;;;;;;@@@@@@@@@\n@@@......:;;;;;;;;;;;;;;;;;;;;;;;;;;;@@@@@@@@@\n   @@@+;;;;;;;;;;;;;;;;;;;;;;;;;;;@@@\n   @@@+;;;;;;;;;;;;;;;;;;;;;;;;;;;@@@\n   @@@+;;;;;;;;;;;;;;;;;;;;;;;;@@@\n   @@@+;;;;;;;;;;;;;;;;;;;;;;;;@@@\n      ;@@+;;;;;;@@@@@@@@@;;;;;;@@@\n      ;@@+;;;;;;@@@@@@@@@;;;;;;@@@\n   @@@+;;;;;;@@@         @@@;;;@@@\n   @@@+;;;;;;@@@         @@@;;;@@@\n   @@@'..'@@@            @@@...@@@\n   @@@'..'@@@            @@@...@@@\n      ;@@;                  @@@\n      ;@@;                  @@@     RIP";
  console.log(huemulAscii);
  /* jshint ignore:end */


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
    while (a--) {
      b[a] = a;
    }
    return b;
  }
  function randomize(a,b,c,d) {
    c = a.length;
    while(c) {
      b = Math.random() * (--c+1)|0,d=a[c],a[c]=a[b],a[b]=d;
    }
  }

  var testimonios = document.querySelectorAll(".box-person");
  var totalElems = testimonios.length;
  var maxElems = 4;
  var hiddenElems = totalElems - maxElems;
  var rand = numberArray(totalElems);
  // apply
  randomize(rand);

  [].forEach.call(rand.slice(0, hiddenElems), function(i) {
    testimonios[i].classList.add("-hidden");
  });

})();
