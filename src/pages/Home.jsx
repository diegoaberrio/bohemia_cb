import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
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

function FloatingMagic({ density = "normal" }) {
  return (
    <div
      className={`magic-floating-icons magic-floating-icons--${density}`}
      aria-hidden="true"
    >
      <span className="magic-floating-icons__item magic-floating-icons__item--1">
        <Sparkles size={14} strokeWidth={2} />
      </span>
      <span className="magic-floating-icons__item magic-floating-icons__item--2">
        <Gift size={14} strokeWidth={2} />
      </span>
      <span className="magic-floating-icons__item magic-floating-icons__item--3">
        <Palette size={14} strokeWidth={2} />
      </span>
      <span className="magic-floating-icons__item magic-floating-icons__item--4">
        <HeartHandshake size={14} strokeWidth={2} />
      </span>
      <span className="magic-floating-icons__item magic-floating-icons__item--5">
        <MessageCircle size={14} strokeWidth={2} />
      </span>
    </div>
  );
}

function SectionAccordion({
  id,
  kicker,
  title,
  closedHint,
  openHint,
  icon: Icon = Sparkles,
  isOpen,
  onToggle,
  children,
}) {
  return (
    <div className="section-accordion-shell bohemia-accordion-shell">
      <button
        type="button"
        className="section-accordion-trigger"
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        onClick={onToggle}
      >
        <span className="section-accordion-trigger__ambient" aria-hidden="true" />
        <FloatingMagic density="soft" />

        <span className="section-accordion-trigger__copy">
          <span className="section-kicker section-eyebrow">
            <Icon size={14} strokeWidth={2} className="inline-icon" />
            {kicker}
          </span>
          <span className="section-accordion-trigger__title">{title}</span>
          <span className="section-accordion-trigger__hint">
            {isOpen ? openHint : closedHint}
          </span>
        </span>

        <span className="section-accordion-trigger__visual">
          <span className="section-accordion-trigger__shine" />
          <span className="section-accordion-trigger__orbit" />
          <span className="section-accordion-trigger__icon">
            <Icon size={32} strokeWidth={1.8} />
          </span>
          <span className="section-accordion-trigger__toggle">
            {isOpen ? "−" : "+"}
          </span>
        </span>
      </button>

      <div
        id={`${id}-content`}
        className={`bohemia-accordion-content ${isOpen ? "is-open" : ""}`}
      >
        <div className="section-accordion-content__inner">{children}</div>
      </div>
    </div>
  );
}

function RevealCard({
  eyebrow,
  title,
  text,
  icon: Icon = Sparkles,
  isOpen,
  onToggle,
  cta,
}) {
  return (
    <article className={`magic-reveal-card ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="magic-reveal-card__button"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className="magic-reveal-card__icon-wrap">
          <span className="magic-reveal-card__orbit" />
          <Icon size={18} strokeWidth={2} />
        </span>

        <span className="magic-reveal-card__copy">
          {eyebrow && <small>{eyebrow}</small>}
          <strong>{title}</strong>
          <span>{isOpen ? "Detalle activo" : "Toca para ver más"}</span>
        </span>

        <span className="magic-reveal-card__toggle">{isOpen ? "−" : "+"}</span>
      </button>

      <div className={`bohemia-reveal-content ${isOpen ? "is-open" : ""}`}>
        <p>{text}</p>

        {cta && (
          <a
            className="bohemia-reveal-cta"
            href={cta.href}
            target={cta.external ? "_blank" : undefined}
            rel={cta.external ? "noreferrer" : undefined}
          >
            {cta.icon}
            {cta.label}
            <ArrowRight size={15} strokeWidth={2} className="inline-icon" />
          </a>
        )}
      </div>
    </article>
  );
}

function Home() {
  const {
    brand,
    hero,
    featuredProducts,
    productsSection,
    featuredService,
    gallerySection,
    gallery,
    processSection,
    process,
    trustSection,
    trustPoints,
    trustBlock,
    occasionsSection,
    occasions,
    objectionsSection,
    objections,
    finalCta,
    footer,
    contactLinks,
    proofStrip,
  } = siteData;

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTrustImage, setActiveTrustImage] = useState(null);
  const [activeGalleryImage, setActiveGalleryImage] = useState(null);

  const [openHeroItem, setOpenHeroItem] = useState(0);
  const [openProductCard, setOpenProductCard] = useState(0);
  const [openProcessCard, setOpenProcessCard] = useState(0);
  const [openTrustCard, setOpenTrustCard] = useState(0);
  const [openObjectionCard, setOpenObjectionCard] = useState(0);

  const [openSections, setOpenSections] = useState({
    products: false,
    gallery: false,
    process: false,
    trust: false,
    occasions: false,
    objections: false,
  });

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

  const heroAccordionItems = hero.accordion || [
    {
      title: "Cuéntanos tu idea",
      text: "Nos escribes por WhatsApp y te ayudamos a convertir tu idea en un pedido personalizado.",
    },
    {
      title: "Elegimos producto y estilo",
      text: "Te orientamos para que el producto, el diseño y el mensaje tengan sentido.",
    },
    {
      title: "Creamos algo especial",
      text: "Desarrollamos una pieza cuidada, útil y con personalidad propia.",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 700) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

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

  const toggleSection = (key) => {
    setOpenSections((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

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
              <a href="#productos">Productos</a>
              <a href="#galeria">Galería</a>
              <a href="#proceso">Cómo pedir</a>
              <a href="#confianza">Confianza</a>
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
                Productos
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

      <section className="hero-section hero-section-wow" id="inicio" aria-labelledby="hero-title">
        <div className="container hero-wow-stack">
          <div className="hero-headline-row hero-headline-row-bohemia hero-reveal">
            <FloatingMagic density="soft" />

            <div className="hero-headline-row__copy">
              <span className="hero-badge">
                <Sparkles size={14} strokeWidth={2} className="inline-icon" />
                {hero.eyebrow || hero.badge}
              </span>

              <h1 id="hero-title">{hero.title}</h1>
              <p className="hero-text">{hero.text}</p>
            </div>

            <div className="hero-headline-row__actions">
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
                  href={brand.secondaryCta.href}
                >
                  <ImageIcon size={18} strokeWidth={2} className="inline-icon" />
                  {brand.secondaryCta.label}
                </a>
              </div>

              <div className="hero-badges-row" aria-label="Ventajas principales">
                {(hero.badges || []).map((badge) => (
                  <span className="chip" key={badge}>
                    <Sparkles size={13} strokeWidth={2} className="inline-icon" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-grid hero-experience-grid">
            <div className="hero-copy hero-reveal">
              <div className="hero-card hero-card-main hero-card-main-wow">
                <FloatingMagic density="mini" />

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
              <div className="hero-magic-panel-bohemia">
                <span className="mini-label">
                  <Wand2 size={14} strokeWidth={2} className="inline-icon" />
                  Del mensaje a la pieza final
                </span>

                <h2>Tu idea puede convertirse en un regalo con alma.</h2>

                <div className="hero-mini-accordion">
                  {heroAccordionItems.map((item, index) => {
                    const isOpen = openHeroItem === index;

                    return (
                      <article
                        className={`hero-mini-accordion__item ${
                          isOpen ? "is-open" : ""
                        }`}
                        key={item.id || item.title}
                      >
                        <button
                          type="button"
                          className="hero-mini-accordion__button"
                          aria-expanded={isOpen}
                          onClick={() =>
                            setOpenHeroItem((current) =>
                              current === index ? -1 : index
                            )
                          }
                        >
                          <span className="hero-mini-accordion__icon">
                            <Gift size={16} strokeWidth={2} />
                          </span>
                          <strong>{item.title}</strong>
                          <ChevronDown
                            size={17}
                            strokeWidth={2}
                            className="hero-mini-accordion__chevron"
                            aria-hidden="true"
                          />
                        </button>

                        <div
                          className={`hero-mini-accordion__content ${
                            isOpen ? "is-open" : ""
                          }`}
                        >
                          <p>{item.text}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>

                <div className="hero-trust-strip" aria-label="Señales de confianza">
                  {(hero.trustLine || []).map((item) => (
                    <span key={item}>
                      <ShieldCheck
                        size={15}
                        strokeWidth={2}
                        className="inline-icon"
                      />
                      {item}
                    </span>
                  ))}
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
          </div>

          {proofStrip?.length > 0 && (
            <div className="proof-strip-bohemia" aria-label="Mensajes clave">
              {proofStrip.map((item) => (
                <span className="proof-pill-bohemia" key={item}>
                  <Sparkles size={14} strokeWidth={2} className="inline-icon" />
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-block section-accordion" id="productos">
        <div className="container">
          <SectionAccordion
            id="productos"
            kicker={productsSection?.kicker || "Qué hacemos"}
            title={
              productsSection?.title ||
              "Personalizamos productos que transmiten emoción, estilo e identidad"
            }
            closedHint={productsSection?.closedHint || "Toca para ver productos"}
            openHint={productsSection?.openHint || "Ocultar productos"}
            icon={Gift}
            isOpen={openSections.products}
            onToggle={() => toggleSection("products")}
          >
            <SectionHeader
              eyebrow="Productos con intención"
              title="Elige una base y la convertimos en algo más personal"
              text={productsSection?.intro}
              icon={Palette}
            />

            <div className="magic-reveal-grid magic-reveal-grid--three">
              {featuredProducts.map((item, index) => {
                const Icon = featuredIcons[index % featuredIcons.length];

                return (
                  <RevealCard
                    key={item.title}
                    eyebrow={`Producto ${index + 1}`}
                    title={item.title}
                    text={item.text}
                    icon={Icon}
                    isOpen={openProductCard === index}
                    onToggle={() =>
                      setOpenProductCard((current) =>
                        current === index ? -1 : index
                      )
                    }
                    cta={{
                      label: item.cta || "Quiero algo así",
                      href: contactLinks.whatsapp.href,
                      external: true,
                      icon: (
                        <MessageCircle
                          size={15}
                          strokeWidth={2}
                          className="inline-icon"
                        />
                      ),
                    }}
                  />
                );
              })}
            </div>
          </SectionAccordion>
        </div>
      </section>

      <section className="section-block section-soft section-accordion" id="galeria">
        <div className="container">
          <SectionAccordion
            id="galeria"
            kicker={gallerySection?.kicker || "Galería"}
            title={
              gallerySection?.title ||
              "Una muestra pensada para hacer visible el valor del trabajo"
            }
            closedHint={gallerySection?.closedHint || "Toca para ver la galería"}
            openHint={gallerySection?.openHint || "Ocultar galería"}
            icon={ImageIcon}
            isOpen={openSections.gallery}
            onToggle={() => toggleSection("gallery")}
          >
            <SectionHeader
              eyebrow="Inspiración real"
              title="Mira acabados, estilos y posibilidades para tu pedido"
              text={gallerySection?.intro}
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
                      {item.text ||
                        "Una referencia visual pensada para inspirar ideas, estilos y regalos con más intención."}
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
          </SectionAccordion>
        </div>
      </section>

      {featuredService && (
        <section className="section-block section-accordion">
          <div className="container">
            <SectionAccordion
              id="pedido-destacado"
              kicker={featuredService.kicker}
              title={featuredService.title}
              closedHint="Toca para ver cómo aterrizamos tu idea"
              openHint="Ocultar pedido destacado"
              icon={Wand2}
              isOpen={openSections.featured}
              onToggle={() => toggleSection("featured")}
            >
              <div className="featured-bohemia-panel">
                <div>
                  <span className="mini-label">
                    <HeartHandshake
                      size={14}
                      strokeWidth={2}
                      className="inline-icon"
                    />
                    Pedido guiado
                  </span>
                  <h2>{featuredService.title}</h2>
                  <p>{featuredService.description}</p>

                  <a
                    className="btn btn-primary featured-bohemia-cta"
                    href={featuredService.cta.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle
                      size={18}
                      strokeWidth={2}
                      className="inline-icon"
                    />
                    {featuredService.cta.label}
                  </a>
                </div>

                <div className="featured-bohemia-list">
                  {featuredService.bullets.map((item, index) => (
                    <div className="featured-bohemia-item card-lift" key={item}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionAccordion>
          </div>
        </section>
      )}

      <section className="section-block section-accordion" id="proceso">
        <div className="container">
          <SectionAccordion
            id="proceso"
            kicker={processSection?.kicker || "Cómo pedir"}
            title={
              processSection?.title ||
              "Un proceso sencillo para que pedir no se sienta complicado"
            }
            closedHint={processSection?.closedHint || "Toca para ver el proceso"}
            openHint={processSection?.openHint || "Ocultar proceso"}
            icon={PenTool}
            isOpen={openSections.process}
            onToggle={() => toggleSection("process")}
          >
            <SectionHeader
              eyebrow="Paso a paso"
              title="De la idea inicial al detalle personalizado"
              text={processSection?.intro}
              icon={PenTool}
            />

            <div className="process-grid section-stagger">
              {process.map((item, index) => {
                const Icon = processIcons[index % processIcons.length];
                const isOpen = openProcessCard === index;

                return (
                  <article
                    className={`process-card card-lift ${
                      isOpen ? "is-open" : ""
                    }`}
                    key={item.step}
                  >
                    {item.media?.type === "video" && item.media?.src && (
                      <button
                        type="button"
                        className="process-video-frame process-video-button"
                        onClick={() =>
                          setOpenProcessCard((current) =>
                            current === index ? -1 : index
                          )
                        }
                        aria-expanded={isOpen}
                      >
                        <video
                          className="process-video"
                          src={item.media.src}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          aria-label={item.media.alt || item.title}
                        />
                        <span className="process-video-badge">
                          {isOpen ? "Ocultar detalle" : "Ver detalle"}
                        </span>
                      </button>
                    )}

                    <button
                      type="button"
                      className="process-card-top process-card-trigger"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenProcessCard((current) =>
                          current === index ? -1 : index
                        )
                      }
                    >
                      <span className="process-step">{item.step}</span>
                      <div className="icon-wrap icon-wrap-soft" aria-hidden="true">
                        <Icon size={18} strokeWidth={2} className="icon-glyph" />
                      </div>
                    </button>

                    <h3>{item.title}</h3>
                    <p className="process-card-short">{item.short}</p>

                    <div className={`bohemia-reveal-content ${isOpen ? "is-open" : ""}`}>
                      <p>{item.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </SectionAccordion>
        </div>
      </section>

      <section className="section-block section-soft section-accordion" id="confianza">
        <div className="container">
          <SectionAccordion
            id="confianza"
            kicker={trustSection?.kicker || "Confianza"}
            title={
              trustSection?.title ||
              "Una marca pensada para quienes valoran el detalle y la cercanía"
            }
            closedHint={trustSection?.closedHint || "Toca para ver confianza"}
            openHint={trustSection?.openHint || "Ocultar confianza"}
            icon={ShieldCheck}
            isOpen={openSections.trust}
            onToggle={() => toggleSection("trust")}
          >
            <SectionHeader
              eyebrow="Compra con tranquilidad"
              title="Cercanía, intención y claridad en cada pedido"
              text={trustSection?.intro}
              icon={ShieldCheck}
            />

            <div className="trust-layout">
              <div className="magic-reveal-grid">
                {trustPoints.map((item, index) => {
                  const Icon = trustIcons[index % trustIcons.length];

                  return (
                    <RevealCard
                      key={item.title}
                      eyebrow={`Razón ${index + 1}`}
                      title={item.title}
                      text={item.text}
                      icon={Icon}
                      isOpen={openTrustCard === index}
                      onToggle={() =>
                        setOpenTrustCard((current) =>
                          current === index ? -1 : index
                        )
                      }
                    />
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
          </SectionAccordion>
        </div>
      </section>

      <section className="section-block section-accordion" id="ocasiones">
        <div className="container">
          <SectionAccordion
            id="ocasiones"
            kicker={occasionsSection?.kicker || "Ocasiones"}
            title={
              occasionsSection?.title ||
              "Pensado para momentos que merecen algo más personal"
            }
            closedHint="Toca para ver ocasiones"
            openHint="Ocultar ocasiones"
            icon={Gift}
            isOpen={openSections.occasions}
            onToggle={() => toggleSection("occasions")}
          >
            <SectionHeader
              eyebrow="Cuándo regalar"
              title="Ayuda a imaginar el momento de compra"
              text={occasionsSection?.intro}
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
          </SectionAccordion>
        </div>
      </section>

      {objections?.length > 0 && (
        <section className="section-block section-soft section-accordion">
          <div className="container">
            <SectionAccordion
              id="dudas"
              kicker={objectionsSection?.kicker || "Dudas frecuentes"}
              title={
                objectionsSection?.title ||
                "Resuelve tus dudas antes de pedir algo personalizado"
              }
              closedHint={objectionsSection?.closedHint || "Toca para ver dudas"}
              openHint={objectionsSection?.openHint || "Ocultar dudas"}
              icon={HeartHandshake}
              isOpen={openSections.objections}
              onToggle={() => toggleSection("objections")}
            >
              <div className="magic-reveal-grid">
                {objections.map((item, index) => (
                  <RevealCard
                    key={item.question}
                    eyebrow={`Duda ${index + 1}`}
                    title={item.question}
                    text={item.answer}
                    icon={index % 2 === 0 ? MessageCircle : ShieldCheck}
                    isOpen={openObjectionCard === index}
                    onToggle={() =>
                      setOpenObjectionCard((current) =>
                        current === index ? -1 : index
                      )
                    }
                    cta={{
                      label: "Resolverlo por WhatsApp",
                      href: contactLinks.whatsapp.href,
                      external: true,
                      icon: (
                        <MessageCircle
                          size={15}
                          strokeWidth={2}
                          className="inline-icon"
                        />
                      ),
                    }}
                  />
                ))}
              </div>
            </SectionAccordion>
          </div>
        </section>
      )}

      <section className="section-block cta-section" id="contacto" aria-labelledby="cta-title">
        <div className="container">
          <div className="cta-panel cta-panel-strong section-reveal cta-panel-bohemia">
            <FloatingMagic density="soft" />

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
                Empecemos tu pedido
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

              <div className="cta-support-list">
                {(finalCta.support || [finalCta.note]).map((item) => (
                  <p className="cta-microcopy cta-microcopy-strong" key={item}>
                    <ShieldCheck
                      size={15}
                      strokeWidth={2}
                      className="inline-icon"
                    />
                    {item}
                  </p>
                ))}
              </div>
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