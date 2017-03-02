// huemul sticker modal
function openModal() {
  tinyModal.openModal("#unete", function(){
    document.getElementById("heroku-unete").contentWindow.setTimeout("this.scrollTo(0, 200);",1);
  });
}
function openModalSticker() {
  tinyModal.openModal("#sticker", function(){
    document.getElementById("btn-sticker");
  });
}

/* jshint ignore:start */
var huemulAscii = "                                 ;;;;;;   ;;;\n                                 @@@@@@   @@@\n                              ;;;+++@@@;;;+++;;;\n                              @@@;;;@@@@@@;;;@@@\n                              @@@;;;@@@@@@;;;@@@\n                              @@@;;;;;;;;;;;;@@@\n                                 @@@;;;@@@;;;;;;@@@\n                                 @@@;;;@@@;;;;;;@@@\n                                 @@@;;;;;;;;;;;;;;;@@@\n                                 @@@;;;;;;;;;;;;;;;@@@\n   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@;;;;;;;;;;;;;;;@@@@@@\n   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@;;;;;;;;;;;;;;;@@@@@@\n@@@......:;;;;;;;;;;;;;;;;;;;;;;;;;;;@@@@@@@@@\n@@@......:;;;;;;;;;;;;;;;;;;;;;;;;;;;@@@@@@@@@\n   @@@+;;;;;;;;;;;;;;;;;;;;;;;;;;;@@@\n   @@@+;;;;;;;;;;;;;;;;;;;;;;;;;;;@@@\n   @@@+;;;;;;;;;;;;;;;;;;;;;;;;@@@\n   @@@+;;;;;;;;;;;;;;;;;;;;;;;;@@@\n      ;@@+;;;;;;@@@@@@@@@;;;;;;@@@\n      ;@@+;;;;;;@@@@@@@@@;;;;;;@@@\n   @@@+;;;;;;@@@         @@@;;;@@@\n   @@@+;;;;;;@@@         @@@;;;@@@\n   @@@'..'@@@            @@@...@@@\n   @@@'..'@@@            @@@...@@@\n      ;@@;                  @@@\n      ;@@;                  @@@";
console.log(huemulAscii);
/* jshint ignore:end */
// Type Writter fx
// slogan
TypeWritter.start({
  containerId: 'title',
  extractClass: 'typewrite',
  cursorClass: 'cursor'
});
