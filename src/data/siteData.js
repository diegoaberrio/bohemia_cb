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
    title: "Detalles personalizados que se sienten tuyos desde el primer vistazo.",
    text:
      "En Bohemia CB transformamos ideas, emociones y momentos especiales en productos personalizados con una estética creativa, cercana y diferente.",
    support:
      "Ideal para regalos con intención, fechas especiales, pareja, eventos o marcas que buscan un detalle con personalidad propia.",
    image: {
      src: cloudinaryAssets.hero.main,
      alt: "Producto personalizado destacado de Bohemia CB",
    },
    stats: [
      { label: "Te guiamos en tu idea", value: "Atención 1 a 1" },
      { label: "Nada genérico", value: "Diseños a medida" },
      { label: "Cobertura principal", value: "Área metropolitana" },
    ],
  },

  featuredProducts: [
    {
      title: "Mugs y tazas",
      text:
        "Piezas con personalidad para regalar, celebrar o acompañar el día a día con un diseño pensado para emocionar.",
    },
    {
      title: "Termos y botellas",
      text:
        "Opciones útiles y visuales que combinan practicidad, detalle e identidad en un solo producto.",
    },
    {
      title: "Camisetas",
      text:
        "Diseños creados para expresar recuerdos, ideas, mensajes o conceptos con un estilo auténtico.",
    },
    {
      title: "Regalos personalizados",
      text:
        "Detalles hechos para sorprender de verdad y conectar con quien los recibe desde algo más personal.",
    },
    {
      title: "Packs personalizados",
      text:
        "Combinaciones con mayor presencia visual, ideales para regalar, celebrar o entregar algo todavía más especial.",
    },
  ],

  gallery: [
    {
      title: "Diseños que cuentan historias",
      category: "Personalización creativa",
      image: {
        src: cloudinaryAssets.gallery[0].src,
        alt: "Diseño personalizado creativo de Bohemia CB",
      },
    },
    {
      title: "Detalles para fechas especiales",
      category: "Regalos con intención",
      image: {
        src: cloudinaryAssets.gallery[1].src,
        alt: "Regalo personalizado para fecha especial de Bohemia CB",
      },
    },
    {
      title: "Piezas con estética bohemia",
      category: "Identidad visual propia",
      image: {
        src: cloudinaryAssets.gallery[2].src,
        alt: "Producto con estética bohemia y diseño personalizado",
      },
    },
    {
      title: "Ideas hechas realidad",
      category: "Encargos a medida",
      image: {
        src: cloudinaryAssets.gallery[3].src,
        alt: "Encargo personalizado realizado por Bohemia CB",
      },
    },
    {
      title: "Detalles con acabado especial",
      category: "Diseño con intención",
      image: {
        src: cloudinaryAssets.gallery[4].src,
        alt: "Detalle personalizado con acabado especial de Bohemia CB",
      },
    },
    {
      title: "Regalos que se sienten únicos",
      category: "Piezas memorables",
      image: {
        src: cloudinaryAssets.gallery[5].src,
        alt: "Regalo personalizado único de Bohemia CB",
      },
    },
  ],

  process: [
    {
      step: "01",
      title: "Nos cuentas tu idea",
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
      text:
        "Acordamos la entrega o el envío según el tipo de pedido, la zona y el tiempo necesario para hacerlo bien.",
      media: {
        type: "video",
        src: cloudinaryAssets.process[3].src,
        alt: "Video del paso 4 del proceso de pedido de Bohemia CB",
      },
    },
  ],

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

  occasions: [
    "Cumpleaños",
    "Regalos personales",
    "Parejas",
    "Fechas especiales",
    "Eventos",
    "Emprendimientos o marcas",
  ],

  finalCta: {
    title: "Si ya tienes una idea, este es el mejor momento para empezar.",
    text:
      "Escríbenos, cuéntanos lo que imaginas y te ayudamos a convertirlo en un detalle único, especial y hecho con intención.",
    note:
      "Respuesta cercana, orientación en tu pedido y acompañamiento desde el inicio.",
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
  },

  footer: {
    claim: "Diseño, emoción y personalidad en cada detalle.",
    contactLabel: "Pedidos por WhatsApp e Instagram",
    contactValue: "@bohemia_cb · +57 311 377 2151",
  },
};