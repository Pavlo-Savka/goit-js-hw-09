!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("6JpON"),c=function(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t("Fulfilled promise  ".concat(e," in ").concat(n,"ms")):o("Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))},f=document.querySelector(".form"),l=0,a=0;f.addEventListener("submit",(function(n){for(n.preventDefault(),f.delay.value,l=f.step.value,a=f.amount.value,i=0;i<a;i+=1)c(i+1,l).then((function(n){e(u).Notify.success(n)})).catch((function(n){e(u).Notify.failure(n)}))}))}();
//# sourceMappingURL=03-promises.9d1101e5.js.map
