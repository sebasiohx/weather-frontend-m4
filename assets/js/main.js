/* referencias DOM */
const body = document.querySelector("body");
const formularioBusqueda = document.querySelector("#formBusqueda");
const inputBusqueda = document.querySelector("#inputBusqueda");
const heroSection = document.querySelector("#hero-section");
const vistaHome = document.querySelector("#vista-home");
const regionesContainer = document.querySelector("#regiones-container");
const vistaDetalle = document.querySelector("#vista-detalle");
const detalleContainer = document.querySelector("#detalle-container");
const pronosticoDetalle = document.querySelector("#pronostico-detalle");
const botonesHome = document.querySelectorAll(".btn-home");

/* variables globales */
const diasSemana = [
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
];
const hoy = new Date();
// para detectar que dia de la semana es hoy
const nombreDiaHoy = diasSemana[hoy.getDay()];

/**
 * Funcion para crear una card
 * @param {Object} ciudad
 */
function crearCard(ciudad) {
  // <div class="col-12 col-sm-6 col-md-4 col-lg-3">
  const col = document.createElement("div");
  col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

  // <article class="card regions-card" data-id="0">
  const article = document.createElement("article");
  article.className = "card regions-card";
  article.dataset.id = ciudad.id;

  // <img src="..." class="..." alt="...">
  const img = document.createElement("img");
  img.src = `./assets/img/${ciudad.img}`;
  img.className = "regions-card__image object-fit-cover";
  img.alt = ciudad.nombreCiudad;

  // <div class="card-body">
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  // <h3 class="card-title h5">
  const h3 = document.createElement("h3");
  h3.className = "card-title h5";

  // <i class="fa-solid fa-location-dot tc-primary">
  const iconoUbicacion = document.createElement("i");
  iconoUbicacion.className = "fa-solid fa-location-dot tc-primary";

  // Texto del nombre de la ciudad
  const nombreCiudad = document.createTextNode(` ${ciudad.nombreCiudad}`);

  h3.append(iconoUbicacion);
  h3.append(nombreCiudad);

  // <h2 class="display-5 fw-bold ...">
  const h2 = document.createElement("h2");
  h2.className =
    "regions-card__current-climate display-5 text-body-emphasis mb-2";

  // <span class="tc-accent">27°</span>
  const spanTemperatura = document.createElement("span");
  spanTemperatura.className = "tc-accent";
  spanTemperatura.textContent = `${ciudad.tempActual}°`;

  // <i class="fa-solid fa-sun display-6 tc-primary mt-3">
  const iconoClima = document.createElement("i");
  iconoClima.className = `fa-solid ${ciudad.estadoClimaticoActual.icono} display-6 tc-primary mt-3`;

  h2.append(spanTemperatura);
  h2.append(iconoClima);

  // <p class="ms-1 mb-0 ...">
  const p = document.createElement("p");
  p.className = "regions-card__min-max ms-1 mb-0";

  // <span>16°/32°</span>
  const spanRango = document.createElement("span");
  spanRango.textContent = `${ciudad.tempMinima}°/${ciudad.tempMaxima}°`;

  // <span class="badge bgc-accent">soleado</span>
  const spanEstado = document.createElement("span");
  spanEstado.className = "badge bgc-accent";
  spanEstado.textContent = ciudad.estadoClimaticoActual.texto;

  p.append(spanRango);
  p.append(spanEstado);

  // Ensamblar todo
  cardBody.append(h3);
  cardBody.append(h2);
  cardBody.append(p);

  article.append(img);
  article.append(cardBody);

  col.append(article);

  return col;
}

/**
 * Funcion para renderizar el listado de cards
 * @param {Array} ciudades
 */
function renderizarCards(ciudades) {
  ciudades.forEach((ciudad) => {
    const card = crearCard(ciudad);
    regionesContainer.append(card);
  });
}

/**
 * Funcion para buscar la ciudad y renderizar las cards correspondientes
 */
function buscarCiudad() {
  const textoInput = inputBusqueda.value.trim().toLowerCase();

  const listaFiltrada = regionesChile.filter((region) =>
    region.nombreCiudad.toLowerCase().includes(textoInput),
  );

  regionesContainer.textContent = ""; // para resetear el listado

  if (listaFiltrada.length === 0) {
    const mensajeSinResultado = document.createElement("h3");
    mensajeSinResultado.textContent = `No se encontraron resultados para "${inputBusqueda.value}"`;
    regionesContainer.append(mensajeSinResultado);
    return;
  }

  renderizarCards(listaFiltrada);
}

formularioBusqueda.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!inputBusqueda.value) {
    console.error("Ingrese una ciudad válida");
    inputBusqueda.classList.add("nav-weather__input--error");
    return;
  } else {
    inputBusqueda.classList.remove("nav-weather__input--error");
  }

  vistaHome.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  buscarCiudad();
});

// evento para que al dejar el input vacio se vuelvan a renderizar todas las cards
inputBusqueda.addEventListener("input", (e) => {
  if (!inputBusqueda.value) {
    regionesContainer.textContent = "";
    renderizarCards(regionesChile);
  }
});

renderizarCards(regionesChile);
