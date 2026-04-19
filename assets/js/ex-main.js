/* lista climas */
const climas = {
  soleado: { texto: "soleado", icono: "fa-sun" },
  nublado: { texto: "nublado", icono: "fa-cloud" },
  chubascos: { texto: "chubascos", icono: "fa-cloud-rain" },
  granizo: { texto: "granizo", icono: "fa-cloud-meatball" },
  tormenta: { texto: "tormenta", icono: "fa-cloud-bolt" },
  nocheDespejada: { texto: "noche despejada", icono: "fa-moon" },
  nocheNublada: { texto: "noche nublada", icono: "fa-cloud-moon" },
  nocheChubascos: { texto: "noche lluviosa", icono: "fa-cloud-moon-rain" },
};

/* lista regiones */
const regiones = [
  /* ── 0 ── Arica y Parinacota */
  {
    id: 0,
    nombreRegion: "Arica y Parinacota",
    ciudadCapital: "Arica",
    img: "img-region-1.jpg",
    descripcion:
      "Arica es conocida como la Ciudad de la Eterna Primavera gracias a su clima cálido y estable durante todo el año. Ubicada en el extremo norte de Chile, limita con Perú y Bolivia, lo que le otorga una rica diversidad cultural andina. Su costa ofrece playas de aguas tranquilas, ideales para el surf y el descanso. El Valle de Azapa, cercano a la ciudad, alberga el museo arqueológico más importante del norte grande.",
    tempMinima: 14,
    tempMaxima: 31,
    tempActual: 27,
    estadoClimatico: climas.soleado,
    viento: 18,
    humedad: 72,
    pronostico: [
      {
        dia: "lunes",
        siglas: "lun",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 14,
        tempMax: 30,
      },
      {
        dia: "martes",
        siglas: "mar",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 15,
        tempMax: 31,
      },
      {
        dia: "miercoles",
        siglas: "mie",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 13,
        tempMax: 28,
      },
      {
        dia: "jueves",
        siglas: "jue",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 14,
        tempMax: 30,
      },
      {
        dia: "viernes",
        siglas: "vie",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 15,
        tempMax: 31,
      },
      {
        dia: "sabado",
        siglas: "sab",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 14,
        tempMax: 29,
      },
      {
        dia: "domingo",
        siglas: "dom",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 15,
        tempMax: 30,
      },
    ],
  },

  /* ── 1 ── Tarapacá */
  {
    id: 1,
    nombreRegion: "Tarapacá",
    ciudadCapital: "Iquique",
    img: "img-region-2.jpg",
    descripcion:
      "Iquique es una ciudad portuaria vibrante, famosa por su zona franca conocida como Zofri y sus extensas playas de arena dorada. Rodeada por el desierto de Atacama y el océano Pacífico, ofrece paisajes de gran contraste y belleza. La ciudad fue escenario de importantes batallas durante la Guerra del Pacífico, historia que se respira en su casco histórico. Es también un destino destacado para el parapente y los deportes acuáticos.",
    tempMinima: 12,
    tempMaxima: 27,
    tempActual: 23,
    estadoClimatico: climas.soleado,
    viento: 24,
    humedad: 68,
    pronostico: [
      {
        dia: "lunes",
        siglas: "lun",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 13,
        tempMax: 27,
      },
      {
        dia: "martes",
        siglas: "mar",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 12,
        tempMax: 26,
      },
      {
        dia: "miercoles",
        siglas: "mie",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 12,
        tempMax: 25,
      },
      {
        dia: "jueves",
        siglas: "jue",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 13,
        tempMax: 27,
      },
      {
        dia: "viernes",
        siglas: "vie",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 12,
        tempMax: 26,
      },
      {
        dia: "sabado",
        siglas: "sab",
        climaDia: climas.nublado,
        climaNoche: climas.nocheDespejada,
        tempMin: 12,
        tempMax: 25,
      },
      {
        dia: "domingo",
        siglas: "dom",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 13,
        tempMax: 27,
      },
    ],
  },

  /* ── 2 ── Antofagasta */
  {
    id: 2,
    nombreRegion: "Antofagasta",
    ciudadCapital: "Antofagasta",
    img: "img-region-3.jpg",
    descripcion:
      "Antofagasta es el corazón minero de Chile, sede de las mayores reservas de cobre y litio del mundo. Su paisaje desértico es uno de los más áridos del planeta, con una belleza austera y sorprendente. La ciudad combina la actividad industrial con un borde costero moderno y animado. Cerca de ella se encuentran maravillas naturales como la Mano del Desierto y el Valle de la Luna en San Pedro de Atacama.",
    tempMinima: 10,
    tempMaxima: 26,
    tempActual: 21,
    estadoClimatico: climas.nublado,
    viento: 31,
    humedad: 62,
    pronostico: [
      {
        dia: "lunes",
        siglas: "lun",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 10,
        tempMax: 24,
      },
      {
        dia: "martes",
        siglas: "mar",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 11,
        tempMax: 26,
      },
      {
        dia: "miercoles",
        siglas: "mie",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 10,
        tempMax: 25,
      },
      {
        dia: "jueves",
        siglas: "jue",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 10,
        tempMax: 23,
      },
      {
        dia: "viernes",
        siglas: "vie",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 11,
        tempMax: 26,
      },
      {
        dia: "sabado",
        siglas: "sab",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 11,
        tempMax: 25,
      },
      {
        dia: "domingo",
        siglas: "dom",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 10,
        tempMax: 24,
      },
    ],
  },

  /* ── 3 ── Atacama */
  {
    id: 3,
    nombreRegion: "Atacama",
    ciudadCapital: "Copiapó",
    img: "img-region-4.jpg",
    descripcion:
      "Copiapó es una ciudad enclavada en el corazón del desierto de Atacama, rodeada de montañas y quebradas de singular belleza. Es conocida por ser la capital de la minería chilena y por el rescate de los 33 mineros en 2010, un hecho que conmovió al mundo. El desierto florido, fenómeno que ocurre cada ciertos años tras lluvias inusuales, transforma sus alrededores en un tapiz de colores. El río Copiapó atraviesa la ciudad y otorga un contraste verde en medio del árido paisaje.",
    tempMinima: 5,
    tempMaxima: 29,
    tempActual: 24,
    estadoClimatico: climas.soleado,
    viento: 15,
    humedad: 38,
    pronostico: [
      {
        dia: "lunes",
        siglas: "lun",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 5,
        tempMax: 28,
      },
      {
        dia: "martes",
        siglas: "mar",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 6,
        tempMax: 29,
      },
      {
        dia: "miercoles",
        siglas: "mie",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 5,
        tempMax: 26,
      },
      {
        dia: "jueves",
        siglas: "jue",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 6,
        tempMax: 29,
      },
      {
        dia: "viernes",
        siglas: "vie",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 5,
        tempMax: 28,
      },
      {
        dia: "sabado",
        siglas: "sab",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 6,
        tempMax: 30,
      },
      {
        dia: "domingo",
        siglas: "dom",
        climaDia: climas.nublado,
        climaNoche: climas.nocheDespejada,
        tempMin: 5,
        tempMax: 27,
      },
    ],
  },

  /* ── 4 ── Coquimbo */
  {
    id: 4,
    nombreRegion: "Coquimbo",
    ciudadCapital: "La Serena",
    img: "img-region-5.jpg",
    descripcion:
      "La Serena es una de las ciudades más antiguas de Chile, con una arquitectura colonial que le da un carácter histórico único. Su extensa playa y avenida del mar son el atractivo principal durante la temporada estival. La región de Coquimbo alberga algunos de los observatorios astronómicos más importantes del mundo gracias a sus cielos despejados. El Valle de Elqui, famoso por sus viñedos y pisco, añade un atractivo turístico y cultural de primer nivel.",
    tempMinima: 8,
    tempMaxima: 28,
    tempActual: 22,
    estadoClimatico: climas.soleado,
    viento: 22,
    humedad: 55,
    pronostico: [
      {
        dia: "lunes",
        siglas: "lun",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 8,
        tempMax: 27,
      },
      {
        dia: "martes",
        siglas: "mar",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 9,
        tempMax: 28,
      },
      {
        dia: "miercoles",
        siglas: "mie",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 8,
        tempMax: 25,
      },
      {
        dia: "jueves",
        siglas: "jue",
        climaDia: climas.chubascos,
        climaNoche: climas.nocheChubascos,
        tempMin: 7,
        tempMax: 22,
      },
      {
        dia: "viernes",
        siglas: "vie",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 8,
        tempMax: 24,
      },
      {
        dia: "sabado",
        siglas: "sab",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 8,
        tempMax: 27,
      },
      {
        dia: "domingo",
        siglas: "dom",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 9,
        tempMax: 28,
      },
    ],
  },

  /* ── 5 ── Valparaíso */
  {
    id: 5,
    nombreRegion: "Valparaíso",
    ciudadCapital: "Valparaíso",
    img: "img-region-6.jpg",
    descripcion:
      "Valparaíso es una ciudad Patrimonio de la Humanidad declarada por la UNESCO, famosa por sus coloridos cerros y su bohemia cultural. Sus ascensores históricos conectan el plan de la ciudad con los barrios altos llenos de arte callejero y restaurantes. El puerto es uno de los más importantes de la costa del Pacífico sudamericano y le da un carácter cosmopolita. La ciudad fue hogar del poeta Pablo Neruda y sigue siendo fuente de inspiración para artistas de todo Chile.",
    tempMinima: 7,
    tempMaxima: 26,
    tempActual: 20,
    estadoClimatico: climas.nublado,
    viento: 35,
    humedad: 70,
    pronostico: [
      {
        dia: "lunes",
        siglas: "lun",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 7,
        tempMax: 24,
      },
      {
        dia: "martes",
        siglas: "mar",
        climaDia: climas.chubascos,
        climaNoche: climas.nocheChubascos,
        tempMin: 6,
        tempMax: 20,
      },
      {
        dia: "miercoles",
        siglas: "mie",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 7,
        tempMax: 22,
      },
      {
        dia: "jueves",
        siglas: "jue",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 8,
        tempMax: 25,
      },
      {
        dia: "viernes",
        siglas: "vie",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 8,
        tempMax: 26,
      },
      {
        dia: "sabado",
        siglas: "sab",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 7,
        tempMax: 23,
      },
      {
        dia: "domingo",
        siglas: "dom",
        climaDia: climas.chubascos,
        climaNoche: climas.nocheChubascos,
        tempMin: 6,
        tempMax: 19,
      },
    ],
  },

  /* ── 6 ── Libertador General Bernardo O'Higgins */
  {
    id: 6,
    nombreRegion: "Libertador General Bernardo O'Higgins",
    ciudadCapital: "Rancagua",
    img: "img-region-7.jpg",
    descripcion:
      "Rancagua es la capital de una región conocida como la despensa agrícola de Chile, con extensos viñedos y campos frutícolas. La ciudad guarda una historia profunda ligada a la Batalla de Rancagua de 1814, episodio clave de la independencia. El Estadio El Teniente es famoso por ser uno de los más altos del mundo ubicado en la mina de cobre homónima cercana. Sus termas y reservas naturales, como el Parque Nacional Las Palmas, atraen a los amantes de la naturaleza.",
    tempMinima: 4,
    tempMaxima: 30,
    tempActual: 25,
    estadoClimatico: climas.soleado,
    viento: 12,
    humedad: 45,
    pronostico: [
      {
        dia: "lunes",
        siglas: "lun",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 4,
        tempMax: 29,
      },
      {
        dia: "martes",
        siglas: "mar",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 5,
        tempMax: 30,
      },
      {
        dia: "miercoles",
        siglas: "mie",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 4,
        tempMax: 26,
      },
      {
        dia: "jueves",
        siglas: "jue",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 5,
        tempMax: 29,
      },
      {
        dia: "viernes",
        siglas: "vie",
        climaDia: climas.chubascos,
        climaNoche: climas.nocheChubascos,
        tempMin: 3,
        tempMax: 22,
      },
      {
        dia: "sabado",
        siglas: "sab",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 4,
        tempMax: 25,
      },
      {
        dia: "domingo",
        siglas: "dom",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 5,
        tempMax: 29,
      },
    ],
  },

  /* ── 7 ── Maule */
  {
    id: 7,
    nombreRegion: "Maule",
    ciudadCapital: "Talca",
    img: "img-region-8.jpg",
    descripcion:
      "Talca es una ciudad tranquila y ordenada que sirve de puerta de entrada a la prolífica zona vitivinícola del Maule. Sus viñedos producen algunos de los vinos más reconocidos de Chile, especialmente el Carménère y el Cabernet Sauvignon. La ciudad sufrió grandes daños en el terremoto de 2010 y desde entonces ha experimentado una notable reconstrucción urbana. El río Maule y las lagunas cercanas son destinos naturales muy visitados por los habitantes de la región.",
    tempMinima: 3,
    tempMaxima: 29,
    tempActual: 24,
    estadoClimatico: climas.soleado,
    viento: 10,
    humedad: 50,
    pronostico: [
      {
        dia: "lunes",
        siglas: "lun",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 4,
        tempMax: 28,
      },
      {
        dia: "martes",
        siglas: "mar",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 3,
        tempMax: 29,
      },
      {
        dia: "miercoles",
        siglas: "mie",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 3,
        tempMax: 25,
      },
      {
        dia: "jueves",
        siglas: "jue",
        climaDia: climas.chubascos,
        climaNoche: climas.nocheChubascos,
        tempMin: 2,
        tempMax: 20,
      },
      {
        dia: "viernes",
        siglas: "vie",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 3,
        tempMax: 23,
      },
      {
        dia: "sabado",
        siglas: "sab",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 4,
        tempMax: 27,
      },
      {
        dia: "domingo",
        siglas: "dom",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 4,
        tempMax: 28,
      },
    ],
  },

  /* ── 8 ── Ñuble */
  {
    id: 8,
    nombreRegion: "Ñuble",
    ciudadCapital: "Chillán",
    img: "img-region-9.jpg",
    descripcion:
      "Chillán es la ciudad natal del prócer Bernardo O'Higgins y uno de los íconos históricos del centro-sur de Chile. Es famosa por su mercado artesanal, uno de los más grandes y coloridos del país, donde se puede encontrar artesanía mapuche y gastronomía local. Las termas de Chillán y el centro de ski del mismo nombre, ubicados en la cordillera, son destinos turísticos de renombre internacional. Su clima templado y lluvioso da paso a una naturaleza exuberante en las zonas rurales de la región.",
    tempMinima: 2,
    tempMaxima: 28,
    tempActual: 22,
    estadoClimatico: climas.nublado,
    viento: 14,
    humedad: 58,
    pronostico: [
      {
        dia: "lunes",
        siglas: "lun",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 2,
        tempMax: 26,
      },
      {
        dia: "martes",
        siglas: "mar",
        climaDia: climas.chubascos,
        climaNoche: climas.nocheChubascos,
        tempMin: 1,
        tempMax: 19,
      },
      {
        dia: "miercoles",
        siglas: "mie",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 2,
        tempMax: 22,
      },
      {
        dia: "jueves",
        siglas: "jue",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 3,
        tempMax: 27,
      },
      {
        dia: "viernes",
        siglas: "vie",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 3,
        tempMax: 28,
      },
      {
        dia: "sabado",
        siglas: "sab",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 2,
        tempMax: 24,
      },
      {
        dia: "domingo",
        siglas: "dom",
        climaDia: climas.chubascos,
        climaNoche: climas.nocheChubascos,
        tempMin: 1,
        tempMax: 18,
      },
    ],
  },

  /* ── 9 ── Biobío */
  {
    id: 9,
    nombreRegion: "Biobío",
    ciudadCapital: "Concepción",
    img: "img-region-10.jpg",
    descripcion:
      "Concepción es la segunda ciudad más grande de Chile y el motor industrial y universitario del sur del país. Ubicada a orillas del río Biobío, posee una escena cultural muy activa con numerosos teatros, museos y festivales. La región es conocida por sus bosques nativos, playas del Pacífico y el Carbón de Lota, patrimonio minero de Chile. Su clima templado y lluvioso le da una vegetación frondosa que contrasta con la intensa actividad urbana.",
    tempMinima: 2,
    tempMaxima: 27,
    tempActual: 21,
    estadoClimatico: climas.nublado,
    viento: 20,
    humedad: 65,
    pronostico: [
      {
        dia: "lunes",
        siglas: "lun",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 2,
        tempMax: 24,
      },
      {
        dia: "martes",
        siglas: "mar",
        climaDia: climas.chubascos,
        climaNoche: climas.nocheChubascos,
        tempMin: 1,
        tempMax: 18,
      },
      {
        dia: "miercoles",
        siglas: "mie",
        climaDia: climas.tormenta,
        climaNoche: climas.nocheChubascos,
        tempMin: 0,
        tempMax: 15,
      },
      {
        dia: "jueves",
        siglas: "jue",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 1,
        tempMax: 20,
      },
      {
        dia: "viernes",
        siglas: "vie",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 2,
        tempMax: 25,
      },
      {
        dia: "sabado",
        siglas: "sab",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 2,
        tempMax: 26,
      },
      {
        dia: "domingo",
        siglas: "dom",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 1,
        tempMax: 22,
      },
    ],
  },

  /* ── 10 ── La Araucanía */
  {
    id: 10,
    nombreRegion: "La Araucanía",
    ciudadCapital: "Temuco",
    img: "img-region-11.jpg",
    descripcion:
      "Temuco es el corazón de la región de La Araucanía y la capital espiritual del pueblo mapuche, la etnia originaria más grande de Chile. La ciudad es un importante centro comercial del sur, con mercados donde se puede apreciar artesanía, gastronomía y cultura mapuche. Rodeada de volcanes, lagos y ríos de aguas cristalinas, la región ofrece paisajes patagónicos de gran belleza. El Parque Nacional Conguillío, con su volcán Llaima y lagunas de colores, es uno de los más visitados del país.",
    tempMinima: 1,
    tempMaxima: 26,
    tempActual: 19,
    estadoClimatico: climas.nublado,
    viento: 16,
    humedad: 70,
    pronostico: [
      {
        dia: "lunes",
        siglas: "lun",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 1,
        tempMax: 22,
      },
      {
        dia: "martes",
        siglas: "mar",
        climaDia: climas.chubascos,
        climaNoche: climas.nocheChubascos,
        tempMin: 0,
        tempMax: 16,
      },
      {
        dia: "miercoles",
        siglas: "mie",
        climaDia: climas.tormenta,
        climaNoche: climas.nocheChubascos,
        tempMin: -1,
        tempMax: 13,
      },
      {
        dia: "jueves",
        siglas: "jue",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 0,
        tempMax: 18,
      },
      {
        dia: "viernes",
        siglas: "vie",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 1,
        tempMax: 24,
      },
      {
        dia: "sabado",
        siglas: "sab",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 2,
        tempMax: 25,
      },
      {
        dia: "domingo",
        siglas: "dom",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 1,
        tempMax: 21,
      },
    ],
  },

  /* ── 11 ── Los Ríos */
  {
    id: 11,
    nombreRegion: "Los Ríos",
    ciudadCapital: "Valdivia",
    img: "img-region-12.jpg",
    descripcion:
      "Valdivia es una ciudad universitaria y fluvial, bañada por los ríos Calle-Calle, Cruces y Valdivia que confluyen en su centro. Fundada por españoles en el siglo XVI, conserva una fuerte influencia alemana visible en su arquitectura y gastronomía. El Mercado Fluvial es famoso por sus lobos de mar que conviven con los pescadores locales. La región es conocida por sus lluviosos bosques valdivisanos, considerados un ecosistema único en el planeta.",
    tempMinima: 0,
    tempMaxima: 25,
    tempActual: 17,
    estadoClimatico: climas.chubascos,
    viento: 18,
    humedad: 78,
    pronostico: [
      {
        dia: "lunes",
        siglas: "lun",
        climaDia: climas.chubascos,
        climaNoche: climas.nocheChubascos,
        tempMin: 0,
        tempMax: 16,
      },
      {
        dia: "martes",
        siglas: "mar",
        climaDia: climas.tormenta,
        climaNoche: climas.nocheChubascos,
        tempMin: -1,
        tempMax: 13,
      },
      {
        dia: "miercoles",
        siglas: "mie",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 0,
        tempMax: 18,
      },
      {
        dia: "jueves",
        siglas: "jue",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 1,
        tempMax: 20,
      },
      {
        dia: "viernes",
        siglas: "vie",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 1,
        tempMax: 23,
      },
      {
        dia: "sabado",
        siglas: "sab",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 2,
        tempMax: 24,
      },
      {
        dia: "domingo",
        siglas: "dom",
        climaDia: climas.chubascos,
        climaNoche: climas.nocheChubascos,
        tempMin: 0,
        tempMax: 17,
      },
    ],
  },

  /* ── 12 ── Los Lagos */
  {
    id: 12,
    nombreRegion: "Los Lagos",
    ciudadCapital: "Puerto Montt",
    img: "img-region-13.jpg",
    descripcion:
      "Puerto Montt es la puerta de entrada a la Patagonia chilena y el principal puerto del sur del país. Rodeada de volcanes como el Osorno y el Calbuco, y de lagos de aguas azul profundo, la ciudad ofrece paisajes de gran espectacularidad. Su feria artesanal de Angelmó es famosa por la gastronomía marina y las artesanías en madera y lana. Desde Puerto Montt parten los transbordadores que conectan el continente con la isla de Chiloé y las rutas al sur.",
    tempMinima: -1,
    tempMaxima: 22,
    tempActual: 15,
    estadoClimatico: climas.chubascos,
    viento: 27,
    humedad: 82,
    pronostico: [
      {
        dia: "lunes",
        siglas: "lun",
        climaDia: climas.chubascos,
        climaNoche: climas.nocheChubascos,
        tempMin: -1,
        tempMax: 14,
      },
      {
        dia: "martes",
        siglas: "mar",
        climaDia: climas.tormenta,
        climaNoche: climas.nocheChubascos,
        tempMin: -2,
        tempMax: 11,
      },
      {
        dia: "miercoles",
        siglas: "mie",
        climaDia: climas.granizo,
        climaNoche: climas.nocheChubascos,
        tempMin: -2,
        tempMax: 10,
      },
      {
        dia: "jueves",
        siglas: "jue",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: -1,
        tempMax: 15,
      },
      {
        dia: "viernes",
        siglas: "vie",
        climaDia: climas.nublado,
        climaNoche: climas.nocheDespejada,
        tempMin: 0,
        tempMax: 18,
      },
      {
        dia: "sabado",
        siglas: "sab",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 0,
        tempMax: 21,
      },
      {
        dia: "domingo",
        siglas: "dom",
        climaDia: climas.chubascos,
        climaNoche: climas.nocheChubascos,
        tempMin: -1,
        tempMax: 15,
      },
    ],
  },

  /* ── 13 ── Aysén */
  {
    id: 13,
    nombreRegion: "Aysén del Gral. Carlos Ibáñez del Campo",
    ciudadCapital: "Coyhaique",
    img: "img-region-14.jpg",
    descripcion:
      "Coyhaique es la capital más austral de Chile continental y la puerta de entrada a la región más salvaje del país. Rodeada de montañas, estepas y ríos de aguas turquesas, es un paraíso para el ecoturismo y la pesca con mosca. La Carretera Austral, una de las rutas más espectaculares del mundo, atraviesa la región conectando comunidades aisladas. El Parque Nacional Laguna San Rafael, con su glaciar que desemboca en el mar, es una maravilla natural única en el planeta.",
    tempMinima: -2,
    tempMaxima: 20,
    tempActual: 13,
    estadoClimatico: climas.nublado,
    viento: 33,
    humedad: 75,
    pronostico: [
      {
        dia: "lunes",
        siglas: "lun",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: -2,
        tempMax: 16,
      },
      {
        dia: "martes",
        siglas: "mar",
        climaDia: climas.chubascos,
        climaNoche: climas.nocheChubascos,
        tempMin: -2,
        tempMax: 12,
      },
      {
        dia: "miercoles",
        siglas: "mie",
        climaDia: climas.granizo,
        climaNoche: climas.nocheChubascos,
        tempMin: -2,
        tempMax: 10,
      },
      {
        dia: "jueves",
        siglas: "jue",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: -1,
        tempMax: 14,
      },
      {
        dia: "viernes",
        siglas: "vie",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: -1,
        tempMax: 18,
      },
      {
        dia: "sabado",
        siglas: "sab",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 0,
        tempMax: 19,
      },
      {
        dia: "domingo",
        siglas: "dom",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: -1,
        tempMax: 15,
      },
    ],
  },

  /* ── 14 ── Magallanes */
  {
    id: 14,
    nombreRegion: "Magallanes y de la Antártica Chilena",
    ciudadCapital: "Punta Arenas",
    img: "img-region-15.jpg",
    descripcion:
      "Punta Arenas es la ciudad más austral del mundo con más de 100.000 habitantes y la capital de la región más extensa de Chile. Ubicada a orillas del Estrecho de Magallanes, posee un clima frío, ventoso y extremo durante casi todo el año. Su centro histórico muestra la prosperidad de fines del siglo XIX, cuando la ciudad era paso obligado entre los océanos Atlántico y Pacífico. El Parque Nacional Torres del Paine, considerado la octava maravilla del mundo, se encuentra en esta región.",
    tempMinima: -2,
    tempMaxima: 16,
    tempActual: 10,
    estadoClimatico: climas.nublado,
    viento: 58,
    humedad: 80,
    pronostico: [
      {
        dia: "lunes",
        siglas: "lun",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: -2,
        tempMax: 13,
      },
      {
        dia: "martes",
        siglas: "mar",
        climaDia: climas.granizo,
        climaNoche: climas.nocheChubascos,
        tempMin: -2,
        tempMax: 10,
      },
      {
        dia: "miercoles",
        siglas: "mie",
        climaDia: climas.tormenta,
        climaNoche: climas.nocheChubascos,
        tempMin: -2,
        tempMax: 8,
      },
      {
        dia: "jueves",
        siglas: "jue",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: -1,
        tempMax: 12,
      },
      {
        dia: "viernes",
        siglas: "vie",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: -1,
        tempMax: 13,
      },
      {
        dia: "sabado",
        siglas: "sab",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 0,
        tempMax: 15,
      },
      {
        dia: "domingo",
        siglas: "dom",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: -1,
        tempMax: 12,
      },
    ],
  },

  /* ── 15 ── Metropolitana (al final según lo solicitado) */
  {
    id: 15,
    nombreRegion: "Metropolitana de Santiago",
    ciudadCapital: "Santiago",
    img: "img-region-16.jpg",
    descripcion:
      "Santiago es la capital de Chile y una de las metrópolis más modernas e importantes de Latinoamérica, con más de siete millones de habitantes. Rodeada por la majestuosa Cordillera de los Andes al oriente y la Cordillera de la Costa al poniente, ofrece una postal única de montañas nevadas en días despejados. La ciudad concentra los principales centros culturales, financieros y gubernamentales del país, conviviendo barrios históricos con rascacielos ultramodernos.",
    tempMinima: 9,
    tempMaxima: 33,
    tempActual: 28,
    estadoClimatico: climas.soleado,
    viento: 20,
    humedad: 42,
    pronostico: [
      {
        dia: "lunes",
        siglas: "lun",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 9,
        tempMax: 32,
      },
      {
        dia: "martes",
        siglas: "mar",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 10,
        tempMax: 33,
      },
      {
        dia: "miercoles",
        siglas: "mie",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 9,
        tempMax: 28,
      },
      {
        dia: "jueves",
        siglas: "jue",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 10,
        tempMax: 31,
      },
      {
        dia: "viernes",
        siglas: "vie",
        climaDia: climas.chubascos,
        climaNoche: climas.nocheChubascos,
        tempMin: 7,
        tempMax: 22,
      },
      {
        dia: "sabado",
        siglas: "sab",
        climaDia: climas.nublado,
        climaNoche: climas.nocheNublada,
        tempMin: 8,
        tempMax: 25,
      },
      {
        dia: "domingo",
        siglas: "dom",
        climaDia: climas.soleado,
        climaNoche: climas.nocheDespejada,
        tempMin: 9,
        tempMax: 30,
      },
    ],
  },
];

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

/* funciones */
function pronosticoHTML(region) {
  // para buscar el indice del elemento donde el nombre de los dias coincida
  const indiceDiaHoyRegion = region.pronostico.findIndex(
    (dia) => dia.dia === nombreDiaHoy,
  );

  const pronosticoRotado = [
    ...region.pronostico.slice(indiceDiaHoyRegion + 1),
    ...region.pronostico.slice(0, indiceDiaHoyRegion + 1),
  ];

  let vistaClass = "";
  if (body.classList.contains("body--detail")) {
    vistaClass = "forecast__list-item--detail";
  } else {
    vistaClass = "forecast__list-item--home";
  }

  return pronosticoRotado
    .map((dia) => {
      return `
    <li class="forecast__list-item ${vistaClass} list-group-item">
      <p class="forecast__day mb-0">${dia.siglas}</p>
      <div class="forecast__climates">
        <i class="fa-solid ${dia.climaDia.icono} tc-primary" title="${dia.climaDia.texto}"></i> /
        <i class="fa-solid ${dia.climaNoche.icono} tc-primary" title="${dia.climaNoche.texto}"></i>
      </div>
      <p class="forecast__temperatures mb-0">${dia.tempMin}°/${dia.tempMax}°</p>
    </li>
    `;
    })
    .join("");
}

function imprimirFecha(fecha) {
  const fechaLiteral = fecha
    .toLocaleDateString("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .replace(",", "");

  // para imprimir la fecha con la primera letra en mayusculas
  return fechaLiteral[0].toUpperCase() + fechaLiteral.slice(1);
}

function imprimirPronombre(id) {
  if ([6, 7, 8, 9].includes(id)) return "del";
  if (id === 15) return "";
  return "de";
}

function renderHero() {
  const rm = regiones[15];

  let html = `
  <div class="container">
    <div class="row">
      <div class="col-md-10 offset-md-1">
        <div class="row d-flex flex-md-row g-3">
          <div class="col-md-6">
            <article class="card p-4 hero-card">
              <div class="row g-2">
                <div class="col-12">
                  <div class="hero-card__inner-card p-2 align-items-start">
                    <h2 class="fw-bolder mb-1">
                      <i class="fa-solid fa-location-dot tc-primary"></i>
                      <span>${rm.ciudadCapital}</span>
                    </h2>
                    <h2 class="hero-card__region">
                      Región ${imprimirPronombre(rm.id)} ${rm.nombreRegion}
                    </h2>
                  </div>
                </div>
                <div class="col-6 col-lg-5">
                  <div class="hero-card__inner-card">
                    <div class="ms-1">
                      <h1 class="display-2 fw-bold text-body-emphasis lh-1 mb-2">
                        <span class="tc-accent">${rm.tempActual}°</span>
                      </h1>
                      <h3 class="ms-1 text-body-emphasis">
                        <span>${rm.tempMinima}°</span> / <span>${rm.tempMaxima}°</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-lg-4">
                  <div class="hero-card__inner-card gap-3 h-100">
                    <i
                      class="fa-solid ${rm.estadoClimatico.icono} display-1 tc-primary"
                    ></i>
                    <p class="mb-0">
                      <span class="badge bgc-accent"
                        >${rm.estadoClimatico.texto}</span
                      >
                    </p>
                  </div>
                </div>

                <div class="col-12 text-center text-md-start">
                  <h4 class="hero-card__date">${imprimirFecha(hoy)}*</h4>
                  <button type="button" id="btn-hero" class="btn hero-card__btn-action btn-lg"  data-id="${rm.id}">Ver detalles</button>
                </div>
              </div>
            </article>
          </div>

          <div class="col-md-6">
            <article>
              <div class="card p-3 mb-3 hero-card">
                <h5 class="mb-0">Pronóstico siguientes 7 días</h5>
              </div>
              <div class="card p-4 hero-card">
                <ul class="list-group forecast">
                  ${pronosticoHTML(rm)}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;

  heroSection.innerHTML = html;

  const btnHero = document.querySelector("#btn-hero");

  btnHero.addEventListener("click", () => {
    mostrarDetalle(Number(btnHero.dataset.id));
  });
}

function renderCards() {
  // tecnica del profe con .forEach() para renderizar, concadenando cada elemento a un string vacio
  let html = "";

  regiones.forEach((region) => {
    html += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <article class="card regions-card" data-id="${region.id}">
        <img
          src="./assets/img/${region.img}"
          class="regions-card__image object-fit-cover"
          alt="${region.ciudadCapital}"
        />
        <div class="card-body">
          <h3 class="card-title h5">
            <i class="fa-solid fa-location-dot tc-primary"></i> 
            ${region.ciudadCapital}
          </h3>
          <h2
            class="display-5 fw-bold text-body-emphasis lh-1 mb-2 d-flex justify-content-between align-items-baseline"
          >
            <span class="tc-accent">${region.tempActual}°</span>
            <i
              class="fa-solid ${region.estadoClimatico.icono} display-6 tc-primary mt-3"
            ></i>
          </h2>
          <p
            class="ms-1 mb-0 d-flex justify-content-between align-items-baseline"
          >
            <span>${region.tempMinima}°/${region.tempMaxima}°</span>
            <span class="badge bgc-accent">${region.estadoClimatico.texto}</span>
          </p>
        </div>
      </article>
    </div>
    `;
  });

  regionesContainer.innerHTML = html;
}

function renderDetalle(id) {
  const region = regiones.find((r) => r.id === id);

  if (!region) {
    detalleContainer.innerHTML = "<h2>No se encontró la región</h2>";
    return;
  }

  detalleContainer.innerHTML = `
  <div class="detail-header mb-4">
    <div class="row">
      <div class="col-md-6">
        <img
          src="./assets/img/${region.img}"
          class="detail-view__image object-fit-cover mb-4 mb-md-0 rounded"
          alt="${region.ciudadCapital}"
        />
      </div>
      <div class="col-md-6">
        <h2 class="fw-bolder mb-1">
          <i class="fa-solid fa-location-dot tc-primary"></i> ${region.ciudadCapital}
        </h2>
        <h5 class="detail-view__region">Región ${imprimirPronombre(region.id)} ${region.nombreRegion}</h5>
        <p class="detail-view__description mb-0">
          ${region.descripcion}
        </p>
      </div>
    </div>
  </div>
  <div class="detalle-data">
    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <div class="row">
          <div class="col-md-6">
            <p class="detail-view__subtitle mb-2">Temperatura actual</p>
            <h3
              class="display-3 fw-bold lh-1 mb-2 d-flex justify-content-between align-items-baseline"
            >
              <span class="tc-primary">${region.tempActual}°</span>
              <i class="fa-solid ${region.estadoClimatico.icono} display-5 mt-3"></i>
            </h3>
            <div
              class="ms-1 mb-0 d-flex align-items-baseline justify-content-between"
            >
              <p>
                <i class="fa-solid fa-arrow-down"></i>
                ${region.tempMinima}° /
                <i class="fa-solid fa-arrow-up"></i>
                ${region.tempMaxima}°
              </p>
              <p>
                <span class="badge bgc-primary tc-accent">${region.estadoClimatico.texto}</span>
              </p>
            </div>
          </div>
          <div
            class="col-md-6 d-flex flex-row flex-md-column justify-content-between"
          >
            <div class="detalle-viento">
              <h5><i class="fa-solid fa-wind"></i> Viento</h5>
              <p>${region.viento} km/h</p>
            </div>
            <div class="detalle-humedad">
              <h5><i class="fa-solid fa-water"></i> Humedad</h5>
              <p>${region.humedad}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <p class="detail-view__subtitle text-center mt-2">
          Pronóstico siguientes 7 días
        </p>
        <ul id="pronostico-detalle" class="list-group forecast">
          ${pronosticoHTML(region)}
        </ul>
      </div>
    </div>
  </div>
  `;
}

function mostrarDetalle(id) {
  renderDetalle(id);
  let forecastListItem = document.querySelectorAll(".forecast__list-item");

  heroSection.classList.add("d-none");
  vistaHome.classList.add("d-none");
  vistaDetalle.classList.remove("d-none");
  body.classList.replace("body--home", "body--detail");
  forecastListItem.forEach((item) =>
    item.classList.replace(
      "forecast__list-item--home",
      "forecast__list-item--detail",
    ),
  );

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function mostrarHome() {
  let forecastListItem = document.querySelectorAll(".forecast__list-item");

  heroSection.classList.remove("d-none");
  vistaHome.classList.remove("d-none");
  vistaDetalle.classList.add("d-none");
  body.classList.replace("body--detail", "body--home");
  forecastListItem.forEach((item) =>
    item.classList.replace(
      "forecast__list-item--detail",
      "forecast__list-item--home",
    ),
  );

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

regionesContainer.addEventListener("click", (event) => {
  const card = event.target.closest(".regions-card");

  // guardian
  if (!card) {
    return;
  }

  const idRegion = Number(card.dataset.id);
  mostrarDetalle(idRegion);
});

botonesHome.forEach((btn) => {
  btn.addEventListener("click", mostrarHome);
});

renderHero();
renderCards();
