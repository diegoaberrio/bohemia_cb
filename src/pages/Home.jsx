import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Gift,
  HeartHandshake,
  Image as ImageIcon,
  Menu,
  MessageCircle,
  Palette,
  PenTool,
  ShieldCheck,
  Sparkles,
  Wand2,
  X,
} from "lucide-react";
import { siteData } from "../data/siteData";

const featuredIcons = [Gift, Palette, Sparkles, Gift, Palette, Sparkles];
const processIcons = [MessageCircle, PenTool, Wand2, ShieldCheck];
const trustIcons = [HeartHandshake, ShieldCheck, Sparkles, Palette];
const occasionIcons = [
  Gift,
  Sparkles,
  HeartHandshake,
  Gift,
  Palette,
  MessageCircle,
];
const heroStatIcons = [HeartHandshake, Palette, ShieldCheck];

function InstagramIcon({ size = 16, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-3.37-3.37 4 4 0 0 1 3.37 3.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function SectionHeader({ eyebrow, title, text, icon }) {
  const HeaderIcon = icon || Sparkles;

  return (
    <div className="section-header section-reveal">
      <span className="section-eyebrow">
        <HeaderIcon size={14} strokeWidth={2} className="inline-icon" />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Home() {
  const {
    brand,
    hero,
    featuredProducts,
    gallery,
    process,
    trustPoints,
    trustBlock,
    occasions,
    finalCta,
    footer,
    contactLinks,
  } = siteData;

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTrustImage, setActiveTrustImage] = useState(null);
  const [activeGalleryImage, setActiveGalleryImage] = useState(null);

  const trustMedia = useMemo(() => trustBlock.media || [], [trustBlock.media]);
  const galleryMedia = useMemo(() => gallery || [], [gallery]);

  const activeTrustIndex = trustMedia.findIndex(
    (item) =>
      item?.image?.src === activeTrustImage?.image?.src ||
      item?.src === activeTrustImage?.src
  );

  const activeGalleryIndex = galleryMedia.findIndex(
    (item) => item?.image?.src === activeGalleryImage?.image?.src
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 700) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openPrevTrustImage = () => {
    if (!trustMedia.length) return;
    const prevIndex =
      activeTrustIndex <= 0 ? trustMedia.length - 1 : activeTrustIndex - 1;
    setActiveTrustImage(trustMedia[prevIndex]);
  };

  const openNextTrustImage = () => {
    if (!trustMedia.length) return;
    const nextIndex =
      activeTrustIndex >= trustMedia.length - 1 ? 0 : activeTrustIndex + 1;
    setActiveTrustImage(trustMedia[nextIndex]);
  };

  const openPrevGalleryImage = () => {
    if (!galleryMedia.length) return;
    const prevIndex =
      activeGalleryIndex <= 0 ? galleryMedia.length - 1 : activeGalleryIndex - 1;
    setActiveGalleryImage(galleryMedia[prevIndex]);
  };

  const openNextGalleryImage = () => {
    if (!galleryMedia.length) return;
    const nextIndex =
      activeGalleryIndex >= galleryMedia.length - 1 ? 0 : activeGalleryIndex + 1;
    setActiveGalleryImage(galleryMedia[nextIndex]);
  };

  useEffect(() => {
    if (!activeTrustImage && !activeGalleryImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveTrustImage(null);
        setActiveGalleryImage(null);
        return;
      }

      if (activeTrustImage) {
        if (event.key === "ArrowLeft") openPrevTrustImage();
        if (event.key === "ArrowRight") openNextTrustImage();
      }

      if (activeGalleryImage) {
        if (event.key === "ArrowLeft") openPrevGalleryImage();
        if (event.key === "ArrowRight") openNextGalleryImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [
    activeTrustImage,
    activeGalleryImage,
    activeTrustIndex,
    activeGalleryIndex,
  ]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="container topbar-shell">
          <div className="topbar-inner">
            <a href="#inicio" className="brand-mark" onClick={closeMenu}>
              <span className="brand-dot" aria-hidden="true" />
              <div className="brand-copy">
                <strong>{brand.name}</strong>
                <span>{brand.tagline}</span>
              </div>
            </a>

            <button
              type="button"
              className={`menu-toggle ${menuOpen ? "is-active" : ""}`}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? (
                <X size={18} strokeWidth={2.2} aria-hidden="true" />
              ) : (
                <Menu size={18} strokeWidth={2.2} aria-hidden="true" />
              )}
            </button>

            <nav className="topnav" aria-label="Navegación principal">
              <a href="#productos">Qué hacemos</a>
              <a href="#galeria">Galería</a>
              <a href="#proceso">Cómo pedir</a>
              <a
                href={contactLinks.whatsapp.href}
                className="topnav-cta"
                target="_blank"
                rel="noreferrer"
                aria-label={`Escribir por WhatsApp a ${brand.name}`}
              >
                <MessageCircle
                  size={16}
                  strokeWidth={2}
                  className="inline-icon"
                />
                Contactar
              </a>
            </nav>
          </div>

          <div
            id="mobile-navigation"
            className={`mobile-nav-panel ${menuOpen ? "is-open" : ""}`}
            hidden={!menuOpen}
          >
            <nav className="mobile-nav" aria-label="Navegación móvil">
              <a href="#productos" onClick={closeMenu}>
                <Sparkles size={16} strokeWidth={2} className="inline-icon" />
                Qué hacemos
              </a>
              <a href="#galeria" onClick={closeMenu}>
                <ImageIcon size={16} strokeWidth={2} className="inline-icon" />
                Galería
              </a>
              <a href="#proceso" onClick={closeMenu}>
                <PenTool size={16} strokeWidth={2} className="inline-icon" />
                Cómo pedir
              </a>
              <a href="#ocasiones" onClick={closeMenu}>
                <Gift size={16} strokeWidth={2} className="inline-icon" />
                Ocasiones
              </a>
              <a href="#confianza" onClick={closeMenu}>
                <ShieldCheck
                  size={16}
                  strokeWidth={2}
                  className="inline-icon"
                />
                Confianza
              </a>
              <a
                href={contactLinks.instagram.href}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                aria-label={`Ir al Instagram de ${brand.name}`}
              >
                <InstagramIcon size={16} className="inline-icon" />
                Instagram
              </a>
              <a
                href={contactLinks.whatsapp.href}
                className="mobile-nav-cta"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                aria-label={`Escribir por WhatsApp a ${brand.name}`}
              >
                <MessageCircle
                  size={17}
                  strokeWidth={2}
                  className="inline-icon"
                />
                {contactLinks.whatsapp.label}
              </a>
            </nav>
          </div>
        </div>
      </header>

      <section className="hero-section" id="inicio" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy hero-reveal">
            <span className="hero-badge">
              <Sparkles size={14} strokeWidth={2} className="inline-icon" />
              {hero.badge}
            </span>

            <h1 id="hero-title">{hero.title}</h1>
            <p className="hero-text">{hero.text}</p>
            <p className="hero-support">{hero.support}</p>

            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href={brand.primaryCta.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Escribir por WhatsApp a ${brand.name}`}
              >
                <MessageCircle
                  size={18}
                  strokeWidth={2}
                  className="inline-icon"
                />
                {brand.primaryCta.label}
              </a>

              <a
                className="btn btn-secondary"
                href={contactLinks.instagram.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver Instagram de ${brand.name}`}
              >
                <InstagramIcon size={18} className="inline-icon" />
                {contactLinks.instagram.label}
              </a>
            </div>

            <div className="hero-trust-strip" aria-label="Señales de confianza">
              <span>
                <HeartHandshake
                  size={15}
                  strokeWidth={2}
                  className="inline-icon"
                />
                Atención 1 a 1 para tu idea
              </span>
              <span>
                <Palette size={15} strokeWidth={2} className="inline-icon" />
                Personalización con identidad
              </span>
              <span>
                <MessageCircle
                  size={15}
                  strokeWidth={2}
                  className="inline-icon"
                />
                Pedido ágil por WhatsApp
              </span>
            </div>

            <ul className="hero-stats" aria-label="Datos clave de la marca">
              {hero.stats.map((item, index) => {
                const Icon = heroStatIcons[index % heroStatIcons.length];

                return (
                  <li key={item.label} className="card-lift">
                    <div className="hero-stat-icon" aria-hidden="true">
                      <Icon size={16} strokeWidth={2} className="icon-glyph" />
                    </div>
                    <div className="hero-stat-copy">
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="hero-visual hero-visual-stable hero-reveal hero-reveal-delay">
            <div className="hero-card hero-card-main">
              <img
                src={hero.image?.src}
                alt={hero.image?.alt || brand.name}
                className="hero-card-image"
                loading="eager"
              />
              <div className="hero-card-overlay" aria-hidden="true" />

              <span className="chip">
                <Sparkles size={14} strokeWidth={2} className="inline-icon" />
                Creativo · handmade · personalizado
              </span>

              <h3>{brand.tagline}</h3>
              <p>{brand.description}</p>

              <div className="hero-card-note">
                <span aria-hidden="true" />
                <p>
                  Ideal para regalos con intención y pedidos con personalidad
                  real.
                </p>
              </div>
            </div>

            <div className="hero-side-cards">
              <div className="hero-card hero-card-floating hero-card-floating-static card-lift">
                <span className="mini-label">
                  <Gift size={14} strokeWidth={2} className="inline-icon" />
                  Regalos con intención
                </span>
                <p>
                  Detalles únicos para sorprender, celebrar o regalar con
                  identidad.
                </p>
              </div>

              <div className="hero-card hero-card-floating hero-card-floating-static card-lift">
                <span className="mini-label">
                  <Wand2 size={14} strokeWidth={2} className="inline-icon" />
                  Hecho a tu estilo
                </span>
                <p>Pedidos pensados contigo, no como una compra genérica.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block" id="productos" aria-labelledby="productos-title">
        <div className="container">
          <SectionHeader
            eyebrow="Qué hacemos"
            title="Personalizamos productos que transmiten emoción, estilo e identidad"
            text="Bohemia CB está hecha para quienes quieren regalar mejor, comunicar algo especial o convertir una idea en un detalle visualmente cuidado."
            icon={Sparkles}
          />

          <div className="cards-grid section-stagger">
            {featuredProducts.map((item, index) => {
              const Icon = featuredIcons[index % featuredIcons.length];

              return (
                <article className="info-card card-lift" key={item.title}>
                  <div className="icon-wrap" aria-hidden="true">
                    <Icon size={18} strokeWidth={2} className="icon-glyph" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="section-block section-soft"
        id="galeria"
        aria-labelledby="galeria-title"
      >
        <div className="container">
          <SectionHeader
            eyebrow="Galería / muestra"
            title="Una muestra pensada para hacer visible el valor del trabajo"
            text="La galería no está como decoración. Está diseñada para ayudar a imaginar el resultado, elevar la confianza y facilitar la decisión de escribir."
            icon={ImageIcon}
          />

          <div className="gallery-grid gallery-grid-thumbs section-stagger">
            {gallery.map((item, index) => (
              <article
                className="gallery-card gallery-card-editorial card-lift"
                key={item.title}
              >
                <button
                  type="button"
                  className={`gallery-thumb-button gallery-media gallery-media-${
                    (index % 4) + 1
                  }`}
                  onClick={() => setActiveGalleryImage(item)}
                  aria-label={`Abrir imagen de galería ${index + 1}: ${item.title}`}
                >
                  <div className="gallery-media-overlay" aria-hidden="true" />
                  <img
                    src={item.image?.src}
                    alt={item.image?.alt || item.title}
                    className="gallery-image"
                    loading="lazy"
                  />
                </button>

                <div className="gallery-content">
                  <p className="gallery-category">
                    <Sparkles
                      size={13}
                      strokeWidth={2}
                      className="inline-icon"
                    />
                    {item.category}
                  </p>
                  <h3>{item.title}</h3>
                  <p>
                    Una referencia visual pensada para inspirar ideas, estilos y
                    regalos con más intención.
                  </p>
                  <a
                    href={contactLinks.whatsapp.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Pedir por WhatsApp algo parecido a ${item.title}`}
                  >
                    Quiero algo así
                    <ArrowRight
                      size={16}
                      strokeWidth={2}
                      className="inline-icon"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block" id="proceso" aria-labelledby="proceso-title">
        <div className="container">
          <SectionHeader
            eyebrow="Cómo pedir"
            title="Un proceso sencillo para que pedir no se sienta complicado"
            text="Reducimos fricción con una ruta clara: idea, definición, creación y entrega. Así la persona entiende rápido qué hacer después."
            icon={PenTool}
          />

          <div className="process-grid section-stagger">
            {process.map((item, index) => {
              const Icon = processIcons[index % processIcons.length];

              return (
                <article className="process-card card-lift" key={item.step}>
                  <div className="process-card-top">
                    <span className="process-step">{item.step}</span>
                    <div className="icon-wrap icon-wrap-soft" aria-hidden="true">
                      <Icon size={18} strokeWidth={2} className="icon-glyph" />
                    </div>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="section-block section-soft"
        id="confianza"
        aria-labelledby="confianza-title"
      >
        <div className="container">
          <SectionHeader
            eyebrow="Confianza"
            title="Una marca pensada para quienes valoran el detalle y la cercanía"
            text="La propuesta de Bohemia CB no es vender por vender. Es crear algo cuidado, bonito y con sentido para quien lo encarga y para quien lo recibe."
            icon={ShieldCheck}
          />

          <div className="trust-layout">
            <div className="trust-points section-stagger">
              {trustPoints.map((item, index) => {
                const Icon = trustIcons[index % trustIcons.length];

                return (
                  <article className="trust-card card-lift" key={item.title}>
                    <div className="icon-wrap" aria-hidden="true">
                      <Icon size={18} strokeWidth={2} className="icon-glyph" />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <aside className="testimonial-card card-lift trust-aside-strong">
              <span className="section-eyebrow">
                <HeartHandshake
                  size={14}
                  strokeWidth={2}
                  className="inline-icon"
                />
                Por qué da confianza
              </span>

              {trustBlock.media?.length > 0 && (
                <div className="trust-gallery-inline">
                  {trustBlock.media.map((mediaItem, index) => (
                    <button
                      type="button"
                      key={mediaItem.src || index}
                      className="trust-thumb-button"
                      onClick={() => setActiveTrustImage(mediaItem)}
                      aria-label={`Abrir prueba social ${index + 1}`}
                    >
                      <img
                        src={mediaItem.src}
                        alt={mediaItem.alt || `Prueba social ${index + 1}`}
                        className="trust-thumb-image"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}

              <h3>{trustBlock.title}</h3>
              <p>{trustBlock.text}</p>

              <ul>
                {trustBlock.bullets.map((item) => (
                  <li key={item}>
                    <ShieldCheck
                      size={14}
                      strokeWidth={2}
                      className="trust-bullet-icon"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-block" id="ocasiones" aria-labelledby="ocasiones-title">
        <div className="container">
          <SectionHeader
            eyebrow="Ocasiones de compra"
            title="Pensado para momentos que merecen algo más personal"
            text="Este bloque ayuda a que la visita se vea comprando: cumpleaños, pareja, fechas especiales, eventos o detalles para una marca."
            icon={Gift}
          />

          <div className="occasion-tags section-stagger">
            {occasions.map((item, index) => {
              const Icon = occasionIcons[index % occasionIcons.length];

              return (
                <span className="occasion-pill card-lift" key={item}>
                  <Icon size={15} strokeWidth={2} className="inline-icon" />
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-block cta-section" id="contacto" aria-labelledby="cta-title">
        <div className="container">
          <div className="cta-panel cta-panel-strong section-reveal">
            {finalCta.media?.[0]?.src && (
              <div className="cta-media">
                <img
                  src={finalCta.media[0].src}
                  alt={finalCta.media[0].alt || finalCta.title}
                  className="cta-image"
                  loading="lazy"
                />
              </div>
            )}

            <div className="cta-copy">
              <span className="section-eyebrow">
                <Sparkles size={14} strokeWidth={2} className="inline-icon" />
                CTA final
              </span>
              <h2 id="cta-title">{finalCta.title}</h2>
              <p>{finalCta.text}</p>
              <small className="cta-note">{finalCta.note}</small>
            </div>

            <div className="cta-actions-wrap">
              <div className="cta-actions">
                <a
                  className="btn btn-primary"
                  href={finalCta.button.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Escribir por WhatsApp a ${brand.name}`}
                >
                  <MessageCircle
                    size={18}
                    strokeWidth={2}
                    className="inline-icon"
                  />
                  {finalCta.button.label}
                </a>

                <a
                  className="btn btn-ghost"
                  href={contactLinks.instagram.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver Instagram de ${brand.name}`}
                >
                  <InstagramIcon size={18} className="inline-icon" />
                  {contactLinks.instagram.label}
                </a>
              </div>

              <p className="cta-microcopy cta-microcopy-strong">
                <MessageCircle
                  size={15}
                  strokeWidth={2}
                  className="inline-icon"
                />
                Cuéntanos tu idea y te orientamos en el pedido sin
                complicaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {activeTrustImage && (
        <div
          className="trust-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de prueba social"
          onClick={() => setActiveTrustImage(null)}
        >
          <div
            className="trust-lightbox-dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="trust-lightbox-close"
              aria-label="Cerrar imagen"
              onClick={() => setActiveTrustImage(null)}
            >
              <X size={18} strokeWidth={2.2} aria-hidden="true" />
            </button>

            {trustMedia.length > 1 && (
              <>
                <button
                  type="button"
                  className="trust-lightbox-nav trust-lightbox-nav-prev"
                  aria-label="Ver imagen anterior"
                  onClick={openPrevTrustImage}
                >
                  <ArrowLeft size={20} strokeWidth={2.2} aria-hidden="true" />
                </button>

                <button
                  type="button"
                  className="trust-lightbox-nav trust-lightbox-nav-next"
                  aria-label="Ver imagen siguiente"
                  onClick={openNextTrustImage}
                >
                  <ArrowRight size={20} strokeWidth={2.2} aria-hidden="true" />
                </button>
              </>
            )}

            <img
              src={activeTrustImage.src}
              alt={activeTrustImage.alt || "Prueba social ampliada"}
              className="trust-lightbox-image"
            />

            {trustMedia.length > 1 && activeTrustIndex >= 0 && (
              <div className="trust-lightbox-counter">
                {activeTrustIndex + 1} / {trustMedia.length}
              </div>
            )}
          </div>
        </div>
      )}

      {activeGalleryImage && (
        <div
          className="trust-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de imagen de galería"
          onClick={() => setActiveGalleryImage(null)}
        >
          <div
            className="trust-lightbox-dialog gallery-lightbox-dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="trust-lightbox-close"
              aria-label="Cerrar imagen"
              onClick={() => setActiveGalleryImage(null)}
            >
              <X size={18} strokeWidth={2.2} aria-hidden="true" />
            </button>

            {galleryMedia.length > 1 && (
              <>
                <button
                  type="button"
                  className="trust-lightbox-nav trust-lightbox-nav-prev"
                  aria-label="Ver imagen anterior"
                  onClick={openPrevGalleryImage}
                >
                  <ArrowLeft size={20} strokeWidth={2.2} aria-hidden="true" />
                </button>

                <button
                  type="button"
                  className="trust-lightbox-nav trust-lightbox-nav-next"
                  aria-label="Ver imagen siguiente"
                  onClick={openNextGalleryImage}
                >
                  <ArrowRight size={20} strokeWidth={2.2} aria-hidden="true" />
                </button>
              </>
            )}

            <img
              src={activeGalleryImage.image?.src}
              alt={activeGalleryImage.image?.alt || activeGalleryImage.title}
              className="trust-lightbox-image"
            />

            <div className="gallery-lightbox-meta">
              <p className="gallery-lightbox-category">
                {activeGalleryImage.category}
              </p>
              <h3>{activeGalleryImage.title}</h3>
            </div>

            {galleryMedia.length > 1 && activeGalleryIndex >= 0 && (
              <div className="trust-lightbox-counter">
                {activeGalleryIndex + 1} / {galleryMedia.length}
              </div>
            )}
          </div>
        </div>
      )}

      <footer className="site-footer">
        <div className="container footer-row">
          <div>
            <strong>{brand.name}</strong>
            <p>{footer.claim}</p>
          </div>

          <div className="footer-contact">
            <span>{footer.contactLabel}</span>
            <div className="footer-contact-links">
              <a
                href={contactLinks.whatsapp.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Escribir por WhatsApp a ${brand.name}`}
              >
                <MessageCircle
                  size={16}
                  strokeWidth={2}
                  className="inline-icon"
                />
                {contactLinks.whatsapp.display}
              </a>
              <a
                href={contactLinks.instagram.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ir al Instagram de ${brand.name}`}
              >
                <InstagramIcon size={16} className="inline-icon" />
                {contactLinks.instagram.display}
              </a>
            </div>

            <a
              href="https://www.diegoincode.com"
              target="_blank"
              rel="noreferrer"
              className="footer-signature"
              aria-label="Ir a diegoincode.com"
            >
              Web by diegoincode.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;