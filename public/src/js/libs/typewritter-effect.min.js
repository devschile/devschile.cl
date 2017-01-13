/**
 * typewritter-effect
 * v0.0.3
 * built: Mon, 27 Jun 2016 14:26:56 GMT
 * git: https://github.com/ndaidong/typewritter
 * author: @ndaidong
 * License: MIT
**/
;(function(e,a){var b=window||{};b.define&&b.define.amd?b.define([],a):b.exports?b.exports=a():b[e]=a()})("TypeWritter",function(){var e=function(a){var b=a.extractClass,c=a.cursorClass,f=void 0===a.sentences?[]:a.sentences;a=document.getElementById(a.containerId);if(!a)throw Error("containerId does not exist!");b=a.querySelectorAll("."+b);if(b.length)for(var d=0;d<b.length;d++){var e=b[d].textContent;0<e.length&&f.push(e)}if(!f.length)throw Error("sentences could not be empty!");a.innerHTML="";b=
document.createElement("SPAN");a.appendChild(b);d=document.createElement("SPAN");d.className=c;d.innerHTML="|";a.appendChild(d);this.sentences=f;this.el=b;this.typingTimer=null;this.currLetter=-1;this.currSentence=0;return this};e.prototype.clearBack=function(){var a=this,b=a.sentences,c=a.typingTimer,f=a.currLetter,d=a.currSentence,e=a.el;c&&clearTimeout(c);c=b[d];b=20*Math.random()+10;0<=f?(f--,c=c.substring(0,f),e.innerHTML=c,c=setTimeout(function(){a.clearBack()},b)):(d++,c=setTimeout(function(){a.writeNext()},
b));this.currLetter=f;this.currSentence=d;this.typingTimer=c;return this};e.prototype.writeNext=function(){var a=this,b=a.sentences,c=a.typingTimer,f=a.currLetter,d=a.currSentence,e=a.el,g=b.length;if(0===g)return!1;c&&clearTimeout(c);d>=g&&(d=0);b=b[d];c=b.split("").length;f<c?(f++,b=b.substring(0,f),e.innerHTML=b,c=setTimeout(function(){a.writeNext()},100*Math.random()+50)):c=setTimeout(function(){a.clearBack()},3E3);this.currLetter=f;this.currSentence=d;this.typingTimer=c;return this};e.prototype.stop=
function(){this.typingTimer&&clearTimeout(this.typingTimer);this.currLetter=-1;this.currSentence=0;this.typingTimer=null;return this};return{start:function(a){return(new e({containerId:a.containerId,extractClass:a.extractClass,cursorClass:a.cursorClass,sentences:a.sentences})).stop().writeNext()}}});