!function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var e,d=document.querySelector("body"),r=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");o.setAttribute("disabled","disabled"),r.addEventListener("click",(function(){r.setAttribute("disabled","disabled"),o.removeAttribute("disabled"),d.style.backgroundColor=t(),e=setInterval((function(){d.style.backgroundColor=t()}),1e3)})),o.addEventListener("click",(function(){r.removeAttribute("disabled"),o.setAttribute("disabled","disabled"),clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.483b689e.js.map