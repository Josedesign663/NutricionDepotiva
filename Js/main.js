

/* Esto corresponde al menu hamburguesa */

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})




/* flecha hacia arriba */
const btn = document.getElementById('btnArriba');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
});

// Función para volver arriba
btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});