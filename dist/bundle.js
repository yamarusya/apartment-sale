(()=>{var e={50:()=>{"use strict";(async()=>{let e=await fetch("https://603e38c548171b0017b2ecf7.mockapi.io/homes");(await e.json()).forEach((e=>{if(e.title.includes("")){var t=document.createElement("div");t.innerHTML=`\n      <a href="card.html">\n      <img src="https://via.placeholder.com/379x175/${Math.random().toString(16).slice(2,8)}/000000?text=${e.title}">\n      <div class="${n=e.type,"IndependentLiving"===n?"living":"otherLiving"}">${e.type}</div>\n      <h3>${e.title}</h3>\n      <p>${e.address}</p>\n      <p>New properties for sale from ${e.price}</p></a>`,my_div=document.getElementById("cards"),t.className="card",my_div.append(t)}var n}))})()},893:e=>{let t=document.getElementById("input");document.body.onload=function(){my_div=document.getElementById("cards")},document.createElement("div"),document.onload=function(){};const n=document.querySelector("input");n.addEventListener("keyup",(function(){my_div=document.getElementById("cards"),console.log(my_div),my_div.querySelectorAll("div").forEach((function(e){e.innerHTML.includes(t.value)?(console.log(e),e.className="card"):e.className="card2"}))})),console.log(n),document.querySelector("button").addEventListener("click",(function(){console.log("!")})),e.exports=function(){}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(50),n(893)})()})();