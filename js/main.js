/* ========= MENÚ HAMBURGUESA ========= */
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

if (abrir && nav) {
  abrir.addEventListener("click", () => {
    nav.classList.add("visible");
  });
}

if (cerrar && nav) {
  cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
  });
}


/* ========= FLECHA HACIA ARRIBA ========= */
const btnArriba = document.getElementById('btnArriba');

if (btnArriba) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      btnArriba.style.display = 'block';
    } else {
      btnArriba.style.display = 'none';
    }
  });

  btnArriba.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}



/* ========= CARRITO DE COMPRAS ========= */

document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".boton");
  const cantidadCarritoSpan = document.getElementById("cantidad-carrito");
  const listaCarrito = document.getElementById("lista-carrito");
  const totalCarrito = document.getElementById("total-carrito");
  const carritoContenedor = document.getElementById("carrito");
  const btnVerCarrito = document.getElementById("ver-carrito");
  const btnVaciarCarrito = document.getElementById("vaciar-carrito");

  let carrito = [];

  function agregarAlCarrito(nombre, precio) {
    const index = carrito.findIndex(item => item.nombre === nombre);
    if (index > -1) {
      carrito[index].cantidad++;
    } else {
      carrito.push({ nombre, precio, cantidad: 1 });
    }
    actualizarCarrito();
  }

  function actualizarCarrito() {
    listaCarrito.innerHTML = "";
    let total = 0;
    let cantidadTotal = 0;

    carrito.forEach((item, index) => {
      const subtotal = item.precio * item.cantidad;
      total += subtotal;
      cantidadTotal += item.cantidad;

      const li = document.createElement("li");
      li.textContent = `${item.nombre} x ${item.cantidad} — $${subtotal.toLocaleString("es-AR")}`;

      // Botón eliminar producto
      const btnEliminar = document.createElement("button");
      btnEliminar.textContent = "Eliminar";
      btnEliminar.style.marginLeft = "10px";
      btnEliminar.addEventListener("click", () => {
        carrito.splice(index, 1);
        actualizarCarrito();
      });

      li.appendChild(btnEliminar);
      listaCarrito.appendChild(li);
    });

    cantidadCarritoSpan.textContent = cantidadTotal;
    totalCarrito.textContent = total.toLocaleString("es-AR");
  }

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const nombre = boton.dataset.nombre;
      const precio = parseInt(boton.dataset.precio);
      agregarAlCarrito(nombre, precio);
      /* carritoContenedor.style.display = "block"; */
    });
  });

  btnVerCarrito.addEventListener("click", () => {
    carritoContenedor.style.display =
      carritoContenedor.style.display === "none" || carritoContenedor.style.display === ""
        ? "block"
        : "none";
  });

  btnVaciarCarrito.addEventListener("click", () => {
    carrito = [];
    actualizarCarrito();
    carritoContenedor.style.display = "none";
  });

  actualizarCarrito();
});




