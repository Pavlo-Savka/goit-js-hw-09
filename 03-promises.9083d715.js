function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var l=r("7Y9D8");const u=document.querySelector(".form"),a=(e,n)=>new Promise(((t,o)=>{setTimeout((()=>{Math.random()>.3?t(`Fulfilled promise  ${e} in ${n}ms`):o(`Rejected promise ${e} in ${n}ms`)}),n)}));u.addEventListener("submit",(function(n){n.preventDefault();const t=parseInt(u.delay.value),o=u.step.value,r=u.amount.value;for(i=0;i<r;i+=1)a(i+1,o*i+t).then((n=>{e(l).Notify.success(n)})).catch((n=>{e(l).Notify.failure(n)}))}));
//# sourceMappingURL=03-promises.9083d715.js.map
