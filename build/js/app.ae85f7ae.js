!function(){"use strict";var e,t={3211:function(e,t,n){n(1539),n(4747),n(8309),n(4553),n(561);var r=document.querySelector(".new-item-btn"),i=document.querySelector("ul"),o=[{id:0,checked:!1,name:"wypij 3 kawy i nie umrzyj"},{id:1,checked:!1,name:"skończ stylowanie"},{id:2,checked:!1,name:"dorzuć JS"}],c=function(e){e.forEach((function(t){var n=document.createElement("li");i.appendChild(n);var r=document.createElement("div");r.classList.add("input-wrapper"),n.appendChild(r);var o=document.createElement("input");o.classList.add("checkbox"),o.setAttribute("type","checkbox"),r.appendChild(o);var c=document.createElement("p");c.classList.add("description"),c.textContent=t.name,r.appendChild(c);var a=document.createElement("button");a.classList.add("delete"),a.textContent="X",a.addEventListener("click",(function(){var r=e.findIndex((function(e){return e.id===t.id}));e.splice(r,1),n.remove(),console.log(e)})),n.appendChild(a)}))};r.addEventListener("click",(function(){var e=document.createElement("input");e.classList.add("new-item-input"),e.type="text",e.placeholder="Enter new task",r.parentNode.replaceChild(e,r),e.addEventListener("keyup",(function(t){var n=e.value,i=!o.some((function(e){return e.name===n}));13===t.keyCode&&""!==n&&i?(o.push({id:o[o.length-1].id+1,checked:!1,name:n}),c([o[o.length-1]]),e.parentNode.replaceChild(r,e)):i?""===n&&alert("enter new task"):alert("do not enter same tasks")}))})),c(o)}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=function(t,n,i,o){if(!n){var c=1/0;for(l=0;l<e.length;l++){n=e[l][0],i=e[l][1],o=e[l][2];for(var a=!0,u=0;u<n.length;u++)(!1&o||c>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(a=!1,o<c&&(c=o));if(a){e.splice(l--,1);var d=i();void 0!==d&&(t=d)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,i,o]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,c=n[0],a=n[1],u=n[2],d=0;if(c.some((function(t){return 0!==e[t]}))){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(u)var l=u(r)}for(t&&t(n);d<c.length;d++)o=c[d],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(l)},n=self.webpackChunkwebpack_starter=self.webpackChunkwebpack_starter||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var i=r.O(void 0,[364],(function(){return r(3211)}));i=r.O(i)}();
//# sourceMappingURL=app.ae85f7ae.js.map