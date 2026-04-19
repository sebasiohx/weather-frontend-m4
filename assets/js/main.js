/* referencias DOM */
const body = document.querySelector("body");
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

function renderCards() {
  // tecnica del profe con .forEach() para renderizar, concadenando cada elemento a un string vacio
  let html = "";

  regionesChile.forEach((region) => {
    html += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <article class="card regions-card" data-id="${region.id}">
        <img
          src="./assets/img/${region.img}"
          class="regions-card__image object-fit-cover"
          alt="${region.nombreCiudad}"
        />
        <div class="card-body">
          <h3 class="card-title h5">
            <i class="fa-solid fa-location-dot tc-primary"></i> 
            ${region.nombreCiudad}
          </h3>
          <h2
            class="display-5 fw-bold text-body-emphasis lh-1 mb-2 d-flex justify-content-between align-items-baseline"
          >
            <span class="tc-accent">${region.tempActual}°</span>
            <i
              class="fa-solid ${region.estadoClimaticoActual.icono} display-6 tc-primary mt-3"
            ></i>
          </h2>
          <p
            class="ms-1 mb-0 d-flex justify-content-between align-items-baseline"
          >
            <span>${region.tempMinima}°/${region.tempMaxima}°</span>
            <span class="badge bgc-accent">${region.estadoClimaticoActual.texto}</span>
          </p>
        </div>
      </article>
    </div>
    `;
  });

  regionesContainer.innerHTML = html;
}

renderCards();
