/*jshint unused:false */

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

// Type Writter fx
// slogan
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
