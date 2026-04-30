import { cloudinaryAssets } from "./cloudinaryAssets";

const whatsappNumber = "573113772151";
const whatsappMessage =
  "Hola, vengo de la web de Bohemia CB y quiero crear un pedido personalizado con su estilo. Me gustaría recibir información y orientación para mi idea.";

const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export const siteData = {
  contactLinks: {
    whatsapp: {
      label: "Hablemos por WhatsApp",
      href: whatsappHref,
      display: "+57 311 377 2151",
    },
    instagram: {
      label: "Ver Instagram",
      href:
        "https://www.instagram.com/bohemia_cb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      display: "@bohemia_cb",
    },
  },

  nav: [
    { label: "Productos", href: "#productos" },
    { label: "Galería", href: "#galeria" },
    { label: "Proceso", href: "#proceso" },
    { label: "Confianza", href: "#confianza" },
  ],

  brand: {
    name: "Bohemia CB",
    tagline: "Productos personalizados con alma",
    description:
      "Creamos detalles personalizados que mezclan diseño, emoción e identidad para que cada regalo se sienta especial, auténtico y hecho con intención.",
    primaryCta: {
      label: "Cuéntanos tu idea",
      href: whatsappHref,
    },
    secondaryCta: {
      label: "Ver ejemplos",
      href: "#galeria",
    },
  },

  hero: {
    badge: "Diseños personalizados con identidad",
    eyebrow: "Regalos personalizados · hechos con intención",
    title: "Detalles personalizados que se sienten tuyos desde el primer vistazo.",
    text:
      "En Bohemia CB transformamos ideas, emociones y momentos especiales en productos personalizados con una estética creativa, cercana y diferente.",
    support:
      "Ideal para regalos con intención, fechas especiales, pareja, eventos o marcas que buscan un detalle con personalidad propia.",
    primaryCta: {
      label: "Cuéntanos tu idea",
      href: whatsappHref,
    },
    secondaryCta: {
      label: "Ver ejemplos reales",
      href: "#galeria",
    },
    image: {
      src: cloudinaryAssets.hero.main,
      alt: "Producto personalizado destacado de Bohemia CB",
    },
    badges: [
      "Diseños a medida",
      "Atención cercana",
      "Regalos con intención",
    ],
    stats: [
      { label: "Te guiamos en tu idea", value: "Atención 1 a 1" },
      { label: "Nada genérico", value: "Diseños a medida" },
      { label: "Cobertura principal", value: "Área metropolitana" },
    ],
    trustLine: [
      "Pedido guiado por WhatsApp",
      "Piezas personalizadas según ocasión",
      "Estilo bohemio, creativo y cercano",
    ],
    accordion: [
      {
        id: "idea",
        title: "Tienes una idea, pero no sabes cómo aterrizarla",
        text:
          "Nos cuentas para quién es el detalle, qué quieres transmitir y qué estilo imaginas. Te ayudamos a convertir esa idea en un pedido claro y especial.",
      },
      {
        id: "producto",
        title: "Elegimos el producto que mejor encaja",
        text:
          "Según la ocasión, el mensaje y el uso, te orientamos entre mugs, termos, camisetas, packs o regalos personalizados.",
      },
      {
        id: "diseno",
        title: "Creamos algo con identidad propia",
        text:
          "La intención no es entregar un producto genérico, sino una pieza que se sienta pensada para esa persona, marca o momento.",
      },
      {
        id: "pedido",
        title: "Coordinamos detalles y entrega",
        text:
          "Definimos personalización, tiempos, zona de entrega y todo lo necesario para que el proceso sea claro desde el primer mensaje.",
      },
    ],
    assetHint: {
      title: "Asset recomendado para Hero",
      description:
        "Ideal: foto o video vertical con un producto protagonista, fondo cálido, textura artesanal y una composición que transmita regalo, emoción y detalle personalizado.",
      suggestedItems: [
        "Producto estrella en primer plano",
        "Video corto mostrando acabado",
        "Composición tipo regalo",
      ],
    },
  },

  proofStrip: [
    "Diseños pensados para emocionar",
    "Pedido acompañado desde el primer mensaje",
    "Productos útiles, bonitos y con personalidad",
    "Detalles para regalar algo que sí se sienta especial",
  ],

  featuredProducts: [
    {
      title: "Mugs y tazas",
      text:
        "Piezas con personalidad para regalar, celebrar o acompañar el día a día con un diseño pensado para emocionar.",
      cta: "Quiero personalizar una taza",
    },
    {
      title: "Termos y botellas",
      text:
        "Opciones útiles y visuales que combinan practicidad, detalle e identidad en un solo producto.",
      cta: "Quiero un termo personalizado",
    },
    {
      title: "Camisetas",
      text:
        "Diseños creados para expresar recuerdos, ideas, mensajes o conceptos con un estilo auténtico.",
      cta: "Quiero una camiseta personalizada",
    },
    {
      title: "Regalos personalizados",
      text:
        "Detalles hechos para sorprender de verdad y conectar con quien los recibe desde algo más personal.",
      cta: "Quiero un regalo especial",
    },
    {
      title: "Packs personalizados",
      text:
        "Combinaciones con mayor presencia visual, ideales para regalar, celebrar o entregar algo todavía más especial.",
      cta: "Quiero armar un pack",
    },
  ],

  productsSection: {
    kicker: "Qué podemos crear",
    title: "Productos personalizados para regalar algo con más intención",
    intro:
      "Cada pieza se piensa según la ocasión, el mensaje y la persona que la va a recibir. La idea no es solo poner un nombre o una frase: es crear un detalle que tenga sentido.",
    closedHint: "Toca para ver productos personalizados",
    openHint: "Ocultar productos",
  },

  featuredService: {
    kicker: "Pedido destacado",
    title: "Regalos personalizados que nacen de una idea real",
    description:
      "El pedido más especial no siempre empieza con un producto definido. A veces empieza con una historia, una persona, una fecha o una emoción. En Bohemia CB te ayudamos a convertir eso en una pieza personalizada con sentido.",
    bullets: [
      "Te escuchamos para entender la intención del regalo",
      "Te orientamos sobre producto, estilo y personalización",
      "Cuidamos que el resultado se sienta único y coherente",
      "Coordinamos los detalles para que el pedido avance claro",
    ],
    cta: {
      label: "Quiero crear un regalo personalizado",
      href: whatsappHref,
    },
  },

  gallerySection: {
    kicker: "Muestra real",
    title: "Ideas, acabados y detalles que ayudan a imaginar tu pedido",
    intro:
      "La galería no está solo para mirar productos bonitos. Está para que veas posibilidades, estilos, combinaciones y formas de convertir una idea en algo tangible.",
    closedHint: "Toca para ver la galería",
    openHint: "Ocultar galería",
  },

  gallery: [
    {
      title: "Diseños que cuentan historias",
      category: "Personalización creativa",
      text:
        "Piezas que nacen de una idea, una emoción o un mensaje que merece sentirse propio.",
      image: {
        src: cloudinaryAssets.gallery[0].src,
        alt: "Diseño personalizado creativo de Bohemia CB",
      },
    },
    {
      title: "Detalles para fechas especiales",
      category: "Regalos con intención",
      text:
        "Opciones pensadas para cumpleaños, aniversarios, celebraciones y momentos que merecen un detalle distinto.",
      image: {
        src: cloudinaryAssets.gallery[1].src,
        alt: "Regalo personalizado para fecha especial de Bohemia CB",
      },
    },
    {
      title: "Piezas con estética bohemia",
      category: "Identidad visual propia",
      text:
        "Diseños cálidos, creativos y con una personalidad visual que se aleja de lo genérico.",
      image: {
        src: cloudinaryAssets.gallery[2].src,
        alt: "Producto con estética bohemia y diseño personalizado",
      },
    },
    {
      title: "Ideas hechas realidad",
      category: "Encargos a medida",
      text:
        "Pedidos personalizados que parten de una conversación y se convierten en una pieza concreta.",
      image: {
        src: cloudinaryAssets.gallery[3].src,
        alt: "Encargo personalizado realizado por Bohemia CB",
      },
    },
    {
      title: "Detalles con acabado especial",
      category: "Diseño con intención",
      text:
        "Acabados, composición y cuidado visual para que el regalo se perciba trabajado y especial.",
      image: {
        src: cloudinaryAssets.gallery[4].src,
        alt: "Detalle personalizado con acabado especial de Bohemia CB",
      },
    },
    {
      title: "Regalos que se sienten únicos",
      category: "Piezas memorables",
      text:
        "Detalles creados para que quien los reciba sienta que hubo intención, cuidado y personalidad.",
      image: {
        src: cloudinaryAssets.gallery[5].src,
        alt: "Regalo personalizado único de Bohemia CB",
      },
    },
  ],

  processSection: {
    kicker: "Cómo funciona",
    title: "Un proceso sencillo para convertir tu idea en un detalle especial",
    intro:
      "Queremos que pedir algo personalizado se sienta fácil, claro y acompañado. Por eso el proceso empieza con una conversación y avanza paso a paso.",
    closedHint: "Toca para ver el proceso",
    openHint: "Ocultar proceso",
  },

  process: [
    {
      step: "01",
      title: "Nos cuentas tu idea",
      short: "Primer mensaje",
      text:
        "Escríbenos por WhatsApp y cuéntanos qué quieres personalizar, para quién es y qué estilo tienes en mente.",
      media: {
        type: "video",
        src: cloudinaryAssets.process[0].src,
        alt: "Video del paso 1 del proceso de pedido de Bohemia CB",
      },
    },
    {
      step: "02",
      title: "Definimos el pedido",
      short: "Producto y diseño",
      text:
        "Te orientamos con el diseño, el tipo de producto, el nivel de personalización y los detalles más importantes.",
      media: {
        type: "video",
        src: cloudinaryAssets.process[1].src,
        alt: "Video del paso 2 del proceso de pedido de Bohemia CB",
      },
    },
    {
      step: "03",
      title: "Creamos tu pieza",
      short: "Manos a la obra",
      text:
        "Desarrollamos tu pedido con atención, cuidado y una ejecución pensada para que el resultado se vea realmente especial.",
      media: {
        type: "video",
        src: cloudinaryAssets.process[2].src,
        alt: "Video del paso 3 del proceso de pedido de Bohemia CB",
      },
    },
    {
      step: "04",
      title: "Coordinamos la entrega",
      short: "Entrega clara",
      text:
        "Acordamos la entrega o el envío según el tipo de pedido, la zona y el tiempo necesario para hacerlo bien.",
      media: {
        type: "video",
        src: cloudinaryAssets.process[3].src,
        alt: "Video del paso 4 del proceso de pedido de Bohemia CB",
      },
    },
  ],

  trustSection: {
    kicker: "Por qué confiar",
    title: "Personalización cercana, clara y pensada con cuidado",
    intro:
      "La confianza aparece cuando sientes que tu pedido importa. Por eso cuidamos la comunicación, el detalle y la intención detrás de cada pieza.",
    closedHint: "Toca para ver razones de confianza",
    openHint: "Ocultar confianza",
  },

  trustPoints: [
    {
      title: "Atención cercana y humana",
      text:
        "Cada pedido se acompaña de forma real, con comunicación directa y una experiencia más personal.",
    },
    {
      title: "Diseños con identidad",
      text:
        "No hacemos solo productos bonitos: creamos detalles que transmiten algo y se sienten únicos.",
    },
    {
      title: "Trabajo a medida",
      text:
        "Adaptamos cada pedido según la ocasión, el estilo, la intención y el tipo de producto.",
    },
  ],

  trustBlock: {
    title: "Más que personalización: una experiencia cuidada de principio a fin",
    text:
      "Bohemia CB está pensada para personas que valoran el detalle, la cercanía y la diferencia entre un producto cualquiera y un regalo que realmente dice algo.",
    bullets: [
      "Proceso claro desde el primer mensaje",
      "Pedidos pensados según cada ocasión",
      "Espacio preparado para reseñas y pruebas sociales reales",
    ],
    media: [
      {
        src: cloudinaryAssets.trust[0].src,
        alt: "Reseña o prueba social de cliente de Bohemia CB",
      },
      {
        src: cloudinaryAssets.trust[1].src,
        alt: "Testimonio visual de cliente de Bohemia CB",
      },
      {
        src: cloudinaryAssets.trust[2].src,
        alt: "Captura de confianza o experiencia positiva de cliente",
      },
    ],
  },

  occasionsSection: {
    kicker: "Cuándo regalar",
    title: "Para momentos donde un detalle genérico no alcanza",
    intro:
      "Bohemia CB funciona muy bien cuando quieres regalar algo útil, bonito y con una intención clara detrás.",
  },

  occasions: [
    "Cumpleaños",
    "Regalos personales",
    "Parejas",
    "Fechas especiales",
    "Eventos",
    "Emprendimientos o marcas",
  ],

  objectionsSection: {
    kicker: "Dudas frecuentes",
    title: "Resuelve tus dudas antes de pedir algo personalizado",
    closedHint: "Toca para ver respuestas rápidas",
    openHint: "Ocultar dudas",
  },

  objections: [
    {
      question: "¿Puedo pedir algo si todavía no tengo clara la idea?",
      answer:
        "Sí. Puedes escribirnos con una idea inicial, una ocasión o una persona en mente. Te ayudamos a aterrizar el pedido y elegir una opción que tenga sentido.",
    },
    {
      question: "¿Los productos son totalmente personalizados?",
      answer:
        "Cada pedido se adapta según el producto, el diseño, la ocasión y el nivel de personalización posible. La idea es que el resultado no se sienta genérico.",
    },
    {
      question: "¿Cómo sé qué producto elegir?",
      answer:
        "Te orientamos según el uso, el presupuesto, la intención del regalo y el estilo que quieras transmitir.",
    },
    {
      question: "¿Cómo se coordina la entrega?",
      answer:
        "La entrega o envío se acuerda directamente según el tipo de pedido, la zona y los tiempos necesarios para realizarlo bien.",
    },
  ],

  finalCta: {
    title: "Si ya tienes una idea, este es el mejor momento para empezar.",
    text:
      "Escríbenos, cuéntanos lo que imaginas y te ayudamos a convertirlo en un detalle único, especial y hecho con intención.",
    note:
      "Respuesta cercana, orientación en tu pedido y acompañamiento desde el inicio.",
    support: [
      "Puedes escribir aunque tu idea todavía no esté completamente definida",
      "Te orientamos sobre producto, diseño, tiempos y entrega",
      "Pedido personalizado con comunicación directa por WhatsApp",
    ],
    media: [
      {
        src: cloudinaryAssets.cta[0].src,
        alt: "Imagen de cierre con producto personalizado de Bohemia CB",
      },
      {
        src: cloudinaryAssets.cta[1].src,
        alt: "Composición visual de cierre de Bohemia CB",
      },
    ],
    button: {
      label: "Cuéntanos tu idea",
      href: whatsappHref,
    },
    secondaryButton: {
      label: "Ver Instagram",
      href:
        "https://www.instagram.com/bohemia_cb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  },

  assetHints: {
    hero: {
      title: "Hero principal",
      description:
        "Producto estrella, composición cálida o video corto mostrando el acabado personalizado.",
    },
    products: {
      title: "Productos destacados",
      description:
        "Fotos de mugs, termos, camisetas, packs y regalos personalizados con buena luz y estilo coherente.",
    },
    gallery: {
      title: "Galería comercial",
      description:
        "Imágenes reales que ayuden al visitante a imaginar su propio pedido personalizado.",
    },
    process: {
      title: "Proceso de pedido",
      description:
        "Videos cortos mostrando conversación, diseño, creación y entrega del producto.",
    },
    trust: {
      title: "Confianza",
      description:
        "Reseñas, capturas de clientes, pedidos entregados, empaques y pruebas sociales reales.",
    },
    cta: {
      title: "Cierre visual",
      description:
        "Imagen emocional o composición final que invite a escribir por WhatsApp y empezar el pedido.",
    },
  },

  footer: {
    claim: "Diseño, emoción y personalidad en cada detalle.",
    contactLabel: "Pedidos por WhatsApp e Instagram",
    contactValue: "@bohemia_cb · +57 311 377 2151",
  },
};