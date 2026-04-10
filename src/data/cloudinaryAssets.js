const cloudName = "df9rzvrkj";
const landingSlug = "bohemia-cb";

const cld = (publicId) =>
  `https://res.cloudinary.com/${cloudName}/image/upload/q_auto,f_auto/${publicId}`;

const cldVideo = (publicId) =>
  `https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_auto/${publicId}.mp4`;

export const cloudinaryAssets = {
  cloudName,
  landingSlug,

  branding: {
    favicon: cld(`${landingSlug}_favicon`),
  },

  hero: {
    main: cld(`${landingSlug}_hero_main`),
  },

  gallery: [
    {
      id: `${landingSlug}_gallery_01`,
      src: cld(`${landingSlug}_gallery_01`),
    },
    {
      id: `${landingSlug}_gallery_02`,
      src: cld(`${landingSlug}_gallery_02`),
    },
    {
      id: `${landingSlug}_gallery_03`,
      src: cld(`${landingSlug}_gallery_03`),
    },
    {
      id: `${landingSlug}_gallery_04`,
      src: cld(`${landingSlug}_gallery_04`),
    },
    {
      id: `${landingSlug}_gallery_05`,
      src: cld(`${landingSlug}_gallery_05`),
    },
    {
      id: `${landingSlug}_gallery_06`,
      src: cld(`${landingSlug}_gallery_06`),
    },
  ],

  trust: [
    {
      id: `${landingSlug}_trust_01`,
      src: cld(`${landingSlug}_trust_01`),
    },
    {
      id: `${landingSlug}_trust_02_m7lb5w`,
      src: cld(`${landingSlug}_trust_02_m7lb5w`),
    },
    {
      id: `${landingSlug}_trust_03`,
      src: cld(`${landingSlug}_trust_03`),
    },
  ],

  process: [
    {
      id: `${landingSlug}_process_01`,
      src: cldVideo(`${landingSlug}_process_01`),
    },
    {
      id: `${landingSlug}_process_02`,
      src: cldVideo(`${landingSlug}_process_02`),
    },
    {
      id: `${landingSlug}_process_03`,
      src: cldVideo(`${landingSlug}_process_03`),
    },
    {
      id: `${landingSlug}_process_04`,
      src: cldVideo(`${landingSlug}_process_04`),
    },
  ],

  cta: [
    {
      id: `${landingSlug}_cta_01`,
      src: cld(`${landingSlug}_cta_01`),
    },
    {
      id: `${landingSlug}_cta_02`,
      src: cld(`${landingSlug}_cta_02`),
    },
  ],
};