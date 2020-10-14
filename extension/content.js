if(window.location.host == "fun.codelearn.cat" && window.location.pathname.substr(0, 7) == "/karel/"){
var s = document.createElement("script");
s.src = "https://karellevelcreator.glitch.me/helper.js";
document.body.appendChild(s);
var c = document.createElement("script");
c.src = "https://karellevelcreator.glitch.me/creator.js";
document.body.appendChild(c);
}