const items = [
  {
    id: "1",
    title: "L'Interdit EDP - 80ml ",
    img: "https://elbalconar.vtexassets.com/arquivos/ids/162196-500-auto?v=1769789364&width=500&height=auto&aspect=true",
    brand: "Givenchy",
    description:
      "L'Interdit Eau de Parfum Intense de Givenchy, una fragancia sorprendentemente suave. Impulsivamente cruda. Givenchy te lleva a lo más profundo de lo prohibido con esta fragancia para mujer. El azahar radiante y oscuro con una sobredosis de nardo, choca con la vainilla de cuero más negra y voluptuosa, junto con una pizca de sésamo salado y tostado. Una mezcla embriagadora de vetiver y pachulí desvela notas de madera profunda y oscura para un toque refinado de alta costura que perdura.",
    price: 53000,
    stock: 10,
    category: "femeninas",
  },
  {
    id: "2",
    title: "CH EDT - 30ml",
    img: "https://elbalconar.vtexassets.com/arquivos/ids/158395-500-auto?v=1769727036&width=500&height=auto&aspect=true",
    brand: "Carolina Herrera",
    description:
      "CH de Carolina Herrera es una fragancia de la familia olfativa Ámbar Floral para Mujeres. CH se lanzó en 2007. CH fue creada por Olivier Cresp y Rosendo Mateu. Las Notas de Salida son fruta tropical, bergamota, toronja (pomelo), limón de Amalfi (lima de Amalfi) y notas acuáticas; las Notas de Corazón son praliné, canela, flor del naranjo africano, jazmín y tintura de rosas; las Notas de Fondo son gamuza, pachulí, madera de cachemira, sándalo, almizcle, cedro de Virginia y ámbar.",
    price: 25900,
    stock: 10,
    category: "femeninas",
  },
  {
    id: "3",
    title: "J'adore EDP - 100ml",
    img: "https://elbalconar.vtexassets.com/arquivos/ids/158708-500-auto?v=1769726994&width=500&height=auto&aspect=true",
    brand: "Dior",
    description:
      "J'adore eau de parfum es el gran floral femenino de Dior. Un bouquet minuciosamente elaborado, como una flor hecha a medida. La esencia de ylang-ylang con notas florales afrutadas y la esencia de Rosa Damascena de Turquía se mezclan con un excepcional dúo de Jazmín Grandiflorum de Grasse y Jazmín Sambac de la India, de una sensualidad afrutada y voluptuosa. «J'adore es un perfume extraordinario que capaz de seducir con facilidad manteniendo una impronta original. Carnal, sin ser abrumadora. Es una composición que reconcilia los contrarios y que, con notas florales icónicas, logra un conjunto atractivo, novedoso y misterioso. J'adore inventa una flor que no existe.»",
    price: 54700,
    stock: 10,
    category: "femeninas",
  },
  {
    id: "4",
    title: "La vie est Belle EDP - 75ml",
    img: "https://elbalconar.vtexassets.com/arquivos/ids/159161/3605532612690_1.jpg?v=1769795434",
    brand: "Lancôme",
    description:
      "Comparte tu felicidad con esta majestuosa reinterpretación de una fragancia que captura la luminosidad de la esencia de magnolia. Haz tu vida incluso más hermosa con la fragancia femenina de Lancôme, La Vie est Belle. Personificado por Julia Roberts, La Vie est Belle es una declaración universal de la belleza de la vida. Una marca olfativa esencia de perfume única creada por tres líderes perfumistas de Francia, La Vie est Belle presenta un nuevo lenguaje olfativo con preciosos ingredientes. ",
    price: 58000,
    stock: 10,
    category: "femeninas",
  },
  {
    id: "5",
    title: "Idôle EDP - 75ml",
    img: "https://elbalconar.vtexassets.com/arquivos/ids/157799-1200-auto?v=638064438919570000&width=1200&height=auto&aspect=true",
    brand: "Lancôme",
    description:
      "Para las que sueñan en grande; una nueva generación de mujeres conquistadoras, fuertes y empoderadas. A las líderes del mañana, gloriosas y luminosas, que encienden la llama del éxito e iluminan el camino para las demás. Para las nuevas Idôles, que iluminan con audacia el camino para las demás. A aquellas, cuya aura irradia éxito y grandeza, inspirando la Idôle que reside dentro de cada una de nosotras. Ahora es tu momento, enciende este rayo de luz y conviértete en una Idôle.",
    price: 50500,
    stock: 10,
    category: "femeninas",
  },
  {
    id: "6",
    title: "Base de Maquillaje",
    img: "https://elbalconar.vtexassets.com/arquivos/ids/159701-800-auto?v=638072487431230000&width=800&height=auto&aspect=true",
    brand: "Lancôme",
    description:
      "Sin retoques - 24H efecto mate - Cobertura total FPS 16 Descubrí una base de maquillaje que dura todo el día con Teint Idole Ultra Wear, la primera base líquida de 24 horas de Lancôme*. Con Teint Idole Ultra Wear lográ una piel perfecta y uniforme, con una textura fresca y un acabado suave. No necesita retocarse para una cobertura perfecta todo el día. Disponible en 20 tonos. ",
    price: 21690,
    stock: 10,
    category: "maquillajes",
  },
  {
    id: "7",
    title: "Invictus Victory EDP",
    img: "https://elbalconar.vtexassets.com/arquivos/ids/202402-800-auto?v=638176871571200000&width=800&height=auto&aspect=true",
    brand: "Paco Rabanne",
    description:
      "El eau de parfum extreme Invictus Victory de Paco Rabanne provoca un auténtico choque de sentidos. En este intenso duelo, dos fuerzas se desafían: frescura y sensualidad. Paco Rabanne reúne dos asociaciones exclusivas para garantizar un efecto de larga duración. Una declaración de intenciones sorprendente con un suplemento de frescura: la vivacidad del limón recubierta por un todopoderoso incienso.",
    price: 62950,
    stock: 10,
    category: "masculinas",
  },
  {
    id: "8",
    title: "Scandal Pour Homme EDT",
    img: "https://elbalconar.vtexassets.com/arquivos/ids/187681-800-auto?v=638127638635770000&width=800&height=auto&aspect=true",
    brand: "Jean Paul Gaultier",
    description:
      "Scandal Pour Homme de Jean Paul Gaultier es una fragancia de la familia olfativa Ámbar Amaderada para Hombres. Scandal Pour Homme se lanzó en 2021. Scandal Pour Homme fue creada por Quentin Bisch, Christophe Raynaud y Natalie Gracia-Cetto. Las Notas de Salida son esclarea y mandarina; las Notas de Corazón son caramelo y haba tonka; la Nota de Fondo es vetiver.",
    price: 41250,
    stock: 10,
    category: "masculinas",
  },
  {
    id: "9",
    title: "212 VIP Men Black EDP",
    img: "https://elbalconar.vtexassets.com/arquivos/ids/211306-800-auto?v=638188038118170000&width=800&height=auto&aspect=true",
    brand: "Carolina Herrera",
    description:
      "Una nueva definición de INCREÍBLE, 212 VIP BLACK es una explosiva fragancia picante, creada por Carolina Herrera para desafiar, inspirar y ser el alma de la fiesta. 212 VIP Black hará que seas el centro de atención. Es sensual y adictiva; un aura elegante que te empodera para ser el alma de la fiesta.",
    price: 52700,
    stock: 10,
    category: "masculinas",
  },
  {
    id: "10",
    title: "Sauvage Eau de Parfum",
    img: "https://elbalconar.vtexassets.com/arquivos/ids/158848-800-auto?v=638064775569670000&width=800&height=auto&aspect=true",
    brand: "Dior",
    description:
      "El frescor potente de Sauvage exhala nuevas facetas sensuales y misteriosas, renovando ampliamente la firma con una composición virtuosa. La Bergamota de Calabria, siempre tan chispeante y jugosa, incorpora nuevas notas especiadas, aportándole profundidad y sensualidad. Por su parte, la estela amaderada y ambarina del Ambroxan® se envuelve en un absoluto de Vainilla de Papúa Nueva Guinea, con acentos ahumados que aportan masculinidad.",
    price: 81000,
    stock: 10,
    category: "masculinas",
  },
  {
    id: "11",
    title: "Rubor Blush Subtil",
    img: "https://elbalconar.vtexassets.com/arquivos/ids/159746-800-auto?v=638072495133130000&width=800&height=auto&aspect=true",
    brand: "Lancôme",
    description:
      "Blush Subtil es un rúbor de larga duración muy fino y ligero disponible en distintos colores. Es ideal para lograr un look natural y color de larga duración. Adecuado para todo tipo de pieles.",
    price: 19600,
    stock: 10,
    category: "maquillajes",
  },
  {
    id: "12",
    title: "Forever Skin Glow",
    img: "https://elbalconar.vtexassets.com/arquivos/ids/162135-800-auto?v=638088510927100000&width=800&height=auto&aspect=true",
    brand: "Dior",
    description:
      "BENEFICIOS Dior Forever Skin Glow proporciona a la tez 24 horas* de luminosidad y alta perfección, sin efecto máscara. Al instante, el rostro se alisa e ilumina. Día tras día, este fondo de maquillaje concentrado en tratamiento floral mejora visiblemente la calidad de la piel. En solo 1 semana, la piel está visiblemente más hidratada y repulpada**. En solo 1 mes, la piel está más bella y más luminosa**. * Test instrumental con 20 mujeres. ** Hidratación: test de consumidor con 106 mujeres. Belleza y luminosidad: test de autoevaluación mediante cuestionario con 31 mujeres. FÓRMULA El fondo de maquillaje Dior Forever Skin Glow está formulado con pigmentos de origen mineral que se adaptan al tono natural de la piel y garantizan el mantenimiento del color durante 24 horas",
    price: 19900,
    stock: 10,
    category: "maquillajes",
  },
];

export const bringData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 20);
  });
};

export const getCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items.filter((item) => item.category === categoryId));
    }, 20);
  });
};

export const getBrand = (brand) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items.filter((item) => item.brand === brand));
    }, 20);
  });
};

export const getItemId = (itemId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items.find((item) => item.id === itemId));
    }, 20);
  });
};
