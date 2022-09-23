import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js";
function ocultar () { //código a ejecutar; 
  document.getElementById("cronosInfo").addEventListener("click", style.opacity = o);
}

const mood = document.querySelector(".caos");

mood.addEventListener("mouseover", (e) => {
  mood.classList.add("anime");
});
const planeta = document.querySelector(".tierra");

planeta.addEventListener("click", (e) => {
  planeta.classList.add("tie");
});

const moon = document.querySelector(".luna");

moon.addEventListener("click", (e) => {
  moon.classList.add("lu");
});

const star = document.querySelector(".estrellas");

star.addEventListener("mouseover", (e) => {
  star.classList.add("fugaz");
});
const are = document.querySelector("#nubes");
const are2 = document.querySelector("#Gea");
const are3 = document.querySelector("#grieta");

are3.addEventListener("click", (e) => {
  are.classList.toggle("cssNube");
  are2.classList.toggle("cssGea");
  are3.classList.toggle("roto");
});
const image = document.querySelector(".heca-quieto");
image.addEventListener("click", (e) => {
  e.target.src = "./capitulos/hecatonquiros.gif";
  image.classList.toggle('cssMove');
});
const atrapar = document.querySelector(".atrapar");
atrapar.addEventListener("click", (e) => {
  e.target.src = "./capitulos/pricioneros.gif";

});
const fantasmita = document.querySelector(".fantasmita");
fantasmita.addEventListener("click", (e) => {
  e.target.src = "./capitulos/fantasmita.gif";

});
const lau_cap_1 = document.querySelector(".lau_cap_1");
lau_cap_1.addEventListener("click", (e) => {
  e.target.src = "./capitulos/LAU_CAPITULO_1.gif";

});
const golpe = document.querySelector(".golpe");
golpe.addEventListener("click", (e) => {
  e.target.src = "./capitulos/golpe.gif";

});
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  grabCursor: false,
  allowTouchMove: false,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// mouseout - mouseover - click - funciones del addEventlistner  (slaider comcic swiperjs.com) ejemplo mibanxico

const sara = document.querySelector("#character-15")
const sarita = document.querySelector(".saraInfo")

sara.addEventListener('click', (e) => {
  sara.classList.toggle('cssPersonajes');
  sarita.classList.toggle('cssShow');
})
const duvian = document.querySelector("#character-16")
const duvi = document.querySelector(".duvianInfo")

duvian.addEventListener('click', (e) => {
  duvian.classList.toggle('cssPersonajes');
  duvi.classList.toggle('cssShow');
})
const laura = document.querySelector("#character-17")
const lau = document.querySelector(".lauraInfo")

laura.addEventListener('click', (e) => {
  laura.classList.toggle('cssPersonajes');
  lau.classList.toggle('cssShow');
})
const show = document.querySelector("#character-1")
const hide = document.querySelector(".caosInfo")

show.addEventListener('click', (e) => {
  show.classList.toggle('cssPersonajes');
  hide.classList.toggle('cssShow');
})

const show2 = document.querySelector("#character-2")
const hide2 = document.querySelector(".geaInfo")

show2.addEventListener('click', (e) => {
  show2.classList.toggle('cssPersonajes');
  hide2.classList.toggle('cssShow');
})

const show3 = document.querySelector("#character-3")
const hide3 = document.querySelector(".uranoInfo")

show3.addEventListener('click', (e) => {
  show3.classList.toggle('cssPersonajes');
  hide3.classList.toggle('cssShow');
})

const show4 = document.querySelector("#character-4")
const hide4 = document.querySelector(".titanesInfo")

show4.addEventListener('click', (e) => {
  show4.classList.toggle('cssPersonajes');
  hide4.classList.toggle('cssShow');
})

const show5 = document.querySelector("#character-5")
const hide5 = document.querySelector(".hecaInfo")

show5.addEventListener('click', (e) => {
  show5.classList.toggle('cssPersonajes');
  hide5.classList.toggle('cssShow');
})

const show6 = document.querySelector("#character-6")
const hide6 = document.querySelector(".ciclopesInfo")

show6.addEventListener('click', (e) => {
  show6.classList.toggle('cssPersonajes');
  hide6.classList.toggle('cssShow');
})
const show7 = document.querySelector("#character-7")
const hide7 = document.querySelector(".cronosInfo")

show7.addEventListener('click', (e) => {
  show7.classList.toggle('cssPersonajes');
  hide7.classList.toggle('cssShow');
})

const show8 = document.querySelector("#character-8")
const hide8 = document.querySelector(".reaInfo")

show8.addEventListener('click', (e) => {
  show8.classList.toggle('cssPersonajes');
  hide8.classList.toggle('cssShow');
})

const show9 = document.querySelector("#character-9")
const hide9 = document.querySelector(".zeusInfo")

show9.addEventListener('click', (e) => {
  show9.classList.toggle('cssPersonajes');
  hide9.classList.toggle('cssShow');
})
const show10 = document.querySelector("#character-10")
const hide10 = document.querySelector(".poseidonInfo")

show10.addEventListener('click', (e) => {
  show10.classList.toggle('cssPersonajes');
  hide10.classList.toggle('cssShow');
})

const show11 = document.querySelector("#character-11")
const hide11 = document.querySelector(".hadesInfo")

show11.addEventListener('click', (e) => {
  show11.classList.toggle('cssPersonajes');
  hide11.classList.toggle('cssShow');
})

const show12 = document.querySelector("#character-12")
const hide12 = document.querySelector(".heraInfo")

show12.addEventListener('click', (e) => {
  show12.classList.toggle('cssPersonajes');
  hide12.classList.toggle('cssShow');
})
const show13 = document.querySelector("#character-13")
const hide13 = document.querySelector(".hestiaInfo")

show13.addEventListener('click', (e) => {
  show13.classList.toggle('cssPersonajes');
  hide13.classList.toggle('cssShow');
})

const show14 = document.querySelector("#character-14")
const hide14 = document.querySelector(".demeterInfo")

show14.addEventListener('click', (e) => {
  show14.classList.toggle('cssPersonajes');
  hide14.classList.toggle('cssShow');
})
