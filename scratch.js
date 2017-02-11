var posE = document.getElementById(config.name),
    posWt = window.scrollY,
    vh = window.innerHeight,
    posWb = posWt + vh,
    posTar = posE.y - 40;
    vis;

if ((posE.y > posWt) && (posE.y < posWb)) {
  window.scroll({top: posTar, behavior: "smooth"});
}
}, 300);
