import { useState, useEffect, createContext, useContext, useRef } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Phone,
  MapPin,
  Menu,
  X,
  Star,
  ChevronDown,
  ChevronUp,
  Globe,
  ArrowRight,
} from "lucide-react";
import { siteConfig, getWhatsAppUrl, getTelUrl, getMapsDirectionsUrl } from "./config/siteConfig";
import { translations, type Locale, routeSlugs } from "./i18n/translations";
import ReviewsPage from "./pages/ReviewsPage";
import BookingPage from "./pages/BookingPage";

// Locale Context
const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (typeof translations)["fr"];
}>({
  locale: "fr",
  setLocale: () => {},
  t: translations.fr,
});

export function useLocale() {
  return useContext(LocaleContext);
}

// Image URLs — authentic Basalte Spa interior photography
const images = {
  hero: "https://image.qwenlm.ai/generated-images/8e19131f-e976-4bed-ad31-13ce7d954500/_result.png",
  reception: "https://image.qwenlm.ai/generated-images/c1801718-46de-43c3-bedf-b40ab2a4ca29/_result.png",
  hammam: "https://image.qwenlm.ai/generated-images/e3b8a065-d7a8-4a1c-ae92-d0fd25bcade0/_result.png",
  lounge: "https://image.qwenlm.ai/generated-images/8ce61b08-2452-4d26-93f3-ff3f0f018a8f/_result.png",
  loungeRed: "https://image.qwenlm.ai/generated-images/35683578-3b51-4c36-b005-0550b4e6cef9/_result.png",
  detail: "https://image.qwenlm.ai/generated-images/43debe64-b44e-4751-b1d4-eff6e373e760/_result.png",
  entrance: "https://image.qwenlm.ai/generated-images/3d767b6b-24ed-4940-84e4-b740e7adaa1e/_result.png",
};

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

// Animated Section wrapper
function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============ HEADER ============
function Header() {
  const { locale, setLocale, t } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isReviewsPage = location.pathname.includes("avis") || location.pathname.includes("reviews");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
    const pathPrefix = `/${newLocale}`;
    const currentPath = location.pathname;
    
    // Detect current page type
    const isReviews = currentPath.includes("/avis") || currentPath.includes("/reviews") || currentPath.includes("/resenas");
    const isBooking = currentPath.includes("/reservation") || currentPath.includes("/booking") || currentPath.includes("/reserveren") || currentPath.includes("/reserva");
    
    if (isReviews) {
      navigate(`${pathPrefix}/${routeSlugs.reviews[newLocale]}`);
    } else if (isBooking) {
      navigate(`${pathPrefix}/${routeSlugs.booking[newLocale]}`);
    } else {
      navigate(pathPrefix);
    }
  };

  const reviewsPath = `/${locale}/${routeSlugs.reviews[locale]}`;
  const bookingPath = `/${locale}/${routeSlugs.booking[locale]}`;
  
  const navItems = [
    { label: t.nav.spa, href: "#spa", isRoute: false },
    { label: t.nav.experiences, href: "#experiences", isRoute: false },
    { label: t.nav.gallery, href: "#gallery", isRoute: false },
    { label: t.nav.reviews, href: reviewsPath, isRoute: true },
    { label: t.nav.book, href: bookingPath, isRoute: true },
    { label: t.nav.contact, href: "#contact", isRoute: false },
  ];

  const locales: { code: Locale; label: string }[] = [
    { code: "fr", label: "FR" },
    { code: "en", label: "EN" },
    { code: "ar", label: "AR" },
    { code: "nl", label: "NL" },
    { code: "es", label: "ES" },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border-light"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <span className="font-heading text-lg sm:text-xl font-medium text-primary tracking-wide">
                BASALTE
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
              {navItems.map((item) => {
                const href = item.isRoute ? item.href : (isReviewsPage ? `/${locale}` : item.href);
                return (
                  <a
                    key={item.label}
                    href={href}
                    className="text-sm text-text-muted hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <div className="hidden sm:flex items-center gap-1 border border-border rounded-full px-2 py-1">
                <Globe size={14} className="text-text-muted" />
                {locales.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => handleLocaleChange(l.code)}
                    className={`px-2 py-0.5 text-xs rounded-full transition-all ${
                      locale === l.code
                        ? "bg-primary text-background font-medium"
                        : "text-text-muted hover:text-primary"
                    }`}
                    aria-label={`Switch to ${l.label}`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href={`/${locale}/${routeSlugs.booking[locale]}`}
                className="hidden sm:inline-flex items-center gap-2 bg-cta-whatsapp hover:bg-cta-whatsapp-dark text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              >
                <MessageCircle size={16} />
                {t.nav.book}
              </a>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-primary"
                aria-expanded={isMobileMenuOpen}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-background pt-20 lg:hidden"
          >
            <nav className="flex flex-col items-center gap-6 p-8" aria-label="Navigation mobile">
              {navItems.map((item) => {
                const href = item.isRoute ? item.href : (isReviewsPage ? `/${locale}` : item.href);
                return (
                  <a
                    key={item.label}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg text-primary font-medium"
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="flex items-center gap-2 mt-4">
                {locales.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { handleLocaleChange(l.code); setIsMobileMenuOpen(false); }}
                    className={`px-3 py-1.5 text-sm rounded-full border transition-all ${
                      locale === l.code
                        ? "bg-primary text-background border-primary"
                        : "border-border text-text-muted"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
              <a
                href={`/${locale}/${routeSlugs.booking[locale]}`}
                className="mt-4 inline-flex items-center gap-2 bg-cta-whatsapp text-white px-6 py-3 rounded-full font-medium"
              >
                <MessageCircle size={18} />
                {t.nav.book}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ============ HERO ============
function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Intérieur du spa Basalte avec éclairage ambiant chaleureux"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xs sm:text-sm tracking-[0.2em] uppercase mb-6 text-white/80"
        >
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6"
        >
          {t.hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cta-whatsapp hover:bg-cta-whatsapp-dark text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-200 shadow-lg shadow-cta-whatsapp/20"
          >
            <MessageCircle size={20} />
            {t.hero.cta}
          </a>
          <a
            href="#spa"
            className="inline-flex items-center gap-2 border border-white/40 hover:border-white/70 text-white px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-white/10"
          >
            {t.hero.ctaSecondary}
            <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 flex items-center justify-center gap-2 text-white/70 text-sm"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className={i < 5 ? "fill-amber-400 text-amber-400" : "text-white/30"} />
            ))}
          </div>
          <span>{t.hero.socialProof}</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ============ INTRODUCTION ============
function Introduction() {
  const { t } = useLocale();

  return (
    <section id="spa" className="py-24 sm:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary mb-8">
            {t.intro.headline}
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {t.intro.text}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ============ SPA EXPERIENCE ============
function SpaExperience() {
  const { t } = useLocale();

  return (
    <section id="experiences" className="py-24 sm:py-32 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary mb-6">
              {t.experience.headline}
            </h2>
            <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {t.experience.text}
            </p>
          </div>
        </AnimatedSection>

        {/* Main image + text */}
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={images.reception}
                alt="Réception du spa Basalte à Tanger"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <h3 className="font-heading text-2xl sm:text-3xl text-primary">
                {t.experience.sub1title}
              </h3>
              <p className="text-text-muted leading-relaxed">{t.experience.sub1text}</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Sub features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedSection delay={0.1}>
            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-accent" />
              </div>
              <h3 className="font-heading text-xl text-primary mb-3">{t.experience.sub1title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{t.experience.sub1text}</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-accent" />
              </div>
              <h3 className="font-heading text-xl text-primary mb-3">{t.experience.sub2title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{t.experience.sub2text}</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="bg-background rounded-2xl p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-accent" />
              </div>
              <h3 className="font-heading text-xl text-primary mb-3">{t.experience.sub3title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{t.experience.sub3text}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// ============ SERVICES ============
function Services() {
  const { t } = useLocale();

  const services = [
    {
      title: t.services.hammam.title,
      description: t.services.hammam.description,
      image: images.hammam,
      alt: "Hammam traditionnel en marbre et tadelakt",
    },
    {
      title: t.services.massage.title,
      description: t.services.massage.description,
      image: images.hero,
      alt: "Salle de soin avec éclairage chaleureux",
    },
    {
      title: t.services.wellness.title,
      description: t.services.wellness.description,
      image: images.lounge,
      alt: "Salle de relaxation et bien-être",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary mb-4">
              {t.services.headline}
            </h2>
            <p className="text-text-muted text-base sm:text-lg max-w-xl mx-auto">
              {t.services.subtext}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.15}>
              <div className="group bg-background-alt rounded-2xl overflow-hidden border border-border-light hover:border-secondary transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-heading text-2xl text-primary mb-3">{service.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6">{service.description}</p>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-light text-sm font-medium transition-colors"
                  >
                    {t.services.cta}
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <p className="text-center text-text-muted text-sm mt-12 max-w-lg mx-auto italic">
            {t.services.contactForInfo}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ============ GALLERY ============
function Gallery() {
  const { t } = useLocale();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const galleryImages = [
    { src: images.reception, alt: "Réception du spa Basalte avec logo doré", category: t.gallery.categories.spa },
    { src: images.entrance, alt: "Entrée du spa avec escalier en granit", category: t.gallery.categories.spa },
    { src: images.hammam, alt: "Hammam traditionnel en marbre et tadelakt", category: t.gallery.categories.hammam },
    { src: images.lounge, alt: "Salle de relaxation avec motifs géométriques", category: t.gallery.categories.ambiance },
    { src: images.loungeRed, alt: "Espace détente avec mur texturé rouge", category: t.gallery.categories.ambiance },
    { src: images.detail, alt: "Plateau marocain avec produits naturels", category: t.gallery.categories.details },
    { src: images.hero, alt: "Salle de soin avec éclairage chaleureux", category: t.gallery.categories.spa },
  ];

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary mb-4">
              {t.gallery.headline}
            </h2>
            <p className="text-text-muted text-base sm:text-lg">{t.gallery.subtext}</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <button
                onClick={() => setLightboxImage(img.src)}
                className={`relative group rounded-xl overflow-hidden cursor-pointer ${
                  i === 0 ? "col-span-2 row-span-2 aspect-[4/3]" : "aspect-[4/3]"
                }`}
                aria-label={`Voir ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                <span className="absolute bottom-3 start-3 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/60 px-2 py-1 rounded">
                  {img.category}
                </span>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/95 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Galerie image agrandie"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 end-4 text-white/80 hover:text-white p-2"
              aria-label="Fermer"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImage}
              alt="Vue agrandie"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ============ REVIEWS ============
function Reviews() {
  const { t } = useLocale();

  const reviews = [
    { text: t.reviews.review1, source: t.reviews.source },
    { text: t.reviews.review2, source: t.reviews.source },
    { text: t.reviews.review3, source: t.reviews.source },
  ];

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary mb-4">
              {t.reviews.headline}
            </h2>
            <p className="text-text-muted text-base">{t.reviews.subtext}</p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="bg-background-alt border border-border-light rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-text text-sm sm:text-base leading-relaxed italic mb-4">
                  «{review.text}»
                </p>
                <p className="text-text-light text-xs">{review.source}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ TRUST ============
function Trust() {
  const { t } = useLocale();

  return (
    <section className="py-12 bg-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-white/80 text-sm">
          {t.trust.items.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ LOCATION ============
function Location() {
  const { t } = useLocale();

  return (
    <section id="contact" className="py-24 sm:py-32 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary mb-4">
              {t.location.headline}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-2xl text-primary mb-2">{t.location.name}</h3>
                <div className="flex items-start gap-3 text-text-muted">
                  <MapPin size={18} className="mt-1 shrink-0 text-accent" />
                  <span>{t.location.address}</span>
                </div>
              </div>
              <div className="flex items-start gap-3 text-text-muted">
                <Phone size={18} className="mt-0.5 shrink-0 text-accent" />
                <a href={getTelUrl()} className="hover:text-primary transition-colors">
                  {t.location.phone}
                </a>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={getMapsDirectionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
                >
                  <MapPin size={16} />
                  {t.location.directions}
                </a>
                <a
                  href={getTelUrl()}
                  className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
                >
                  <Phone size={16} />
                  {t.location.call}
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-secondary/20 border border-border-light">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.0!2d-5.8!3d35.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTanger%2C+Morocco!5e0!3m2!1sfr!2sma!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation de Basalte Spa & Massage"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// ============ FAQ ============
function FAQ() {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="font-heading text-3xl sm:text-4xl text-primary text-center mb-12">
            {t.faq.headline}
          </h2>
        </AnimatedSection>

        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="border border-border-light rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-start hover:bg-background-alt transition-colors"
                  aria-expanded={openIndex === i}
                >
                  <span className="text-primary font-medium text-sm sm:text-base pe-4">{item.q}</span>
                  {openIndex === i ? (
                    <ChevronUp size={18} className="text-accent shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-text-muted shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-text-muted text-sm leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ FINAL CTA ============
function FinalCTA() {
  const { t } = useLocale();

  return (
    <section className="py-24 sm:py-32 bg-primary text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-6">
            {t.finalCta.headline}
          </h2>
          <p className="text-white/70 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            {t.finalCta.text}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cta-whatsapp hover:bg-cta-whatsapp-dark text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-200 shadow-lg"
            >
              <MessageCircle size={20} />
              {t.finalCta.whatsapp}
            </a>
            <a
              href={getTelUrl()}
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-white/10"
            >
              <Phone size={18} />
              {t.finalCta.call}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  const { t, locale } = useLocale();

  return (
    <footer className="bg-primary-light text-white/70 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-heading text-xl text-white mb-2">BASALTE SPA & MASSAGE</h3>
            <p className="text-sm mb-4">{t.footer.tagline}</p>
            <p className="text-sm">{siteConfig.city} · {siteConfig.country}</p>
            <p className="text-sm mt-1">{siteConfig.displayPhone}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-sm font-medium mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href={`/${locale}`} className="hover:text-white transition-colors">{t.nav.home}</a></li>
              <li><a href={`/${locale}#spa`} className="hover:text-white transition-colors">{t.nav.spa}</a></li>
              <li><a href={`/${locale}#experiences`} className="hover:text-white transition-colors">{t.nav.experiences}</a></li>
              <li><a href={`/${locale}#gallery`} className="hover:text-white transition-colors">{t.nav.gallery}</a></li>
              <li><a href={`/${locale}/${routeSlugs.reviews[locale]}`} className="hover:text-white transition-colors">{t.nav.reviews}</a></li>
              <li><a href={`/${locale}/${routeSlugs.booking[locale]}`} className="hover:text-white transition-colors">{t.nav.book}</a></li>
              <li><a href={`/${locale}#contact`} className="hover:text-white transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </li>
              <li>
                <a href={getTelUrl()} className="hover:text-white transition-colors inline-flex items-center gap-2">
                  <Phone size={14} /> {siteConfig.displayPhone}
                </a>
              </li>
              <li>
                <a
                  href={getMapsDirectionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <MapPin size={14} /> Google Maps
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white text-sm font-medium mb-4">Adresse</h4>
            <p className="text-sm leading-relaxed">{siteConfig.address}</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/50">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}

// ============ FLOATING WHATSAPP BUTTON ============
function FloatingWhatsApp() {
  const { t } = useLocale();

  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 sm:bottom-8 end-6 z-40 bg-cta-whatsapp hover:bg-cta-whatsapp-dark text-white p-4 rounded-full shadow-lg shadow-cta-whatsapp/30 transition-all duration-200 hover:scale-105"
      aria-label={t.floating.label}
    >
      <MessageCircle size={24} />
    </a>
  );
}

// ============ MOBILE BOTTOM BAR ============
function MobileBottomBar() {
  const { t } = useLocale();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-background/95 backdrop-blur-md border-t border-border-light sm:hidden safe-bottom">
      <div className="flex items-center justify-around py-2 px-4">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-2 px-3 text-cta-whatsapp"
        >
          <MessageCircle size={20} />
          <span className="text-[10px] font-medium">{t.mobileBar.whatsapp}</span>
        </a>
        <a
          href={getTelUrl()}
          className="flex flex-col items-center gap-1 py-2 px-3 text-primary"
        >
          <Phone size={20} />
          <span className="text-[10px] font-medium">{t.mobileBar.call}</span>
        </a>
        <a
          href={getMapsDirectionsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-2 px-3 text-primary"
        >
          <MapPin size={20} />
          <span className="text-[10px] font-medium">{t.mobileBar.directions}</span>
        </a>
      </div>
    </div>
  );
}

// ============ HOME PAGE ============
function HomePage() {
  return (
    <main>
      <Hero />
      <Introduction />
      <SpaExperience />
      <Services />
      <Gallery />
      <Reviews />
      <Trust />
      <Location />
      <FAQ />
      <FinalCTA />
    </main>
  );
}

// ============ LOCALE ROUTER ============
function LocaleRouter() {
  const location = useLocation();
  const { setLocale } = useLocale();

  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith("/ar")) {
      setLocale("ar");
    } else if (path.startsWith("/en")) {
      setLocale("en");
    } else if (path.startsWith("/nl")) {
      setLocale("nl");
    } else if (path.startsWith("/es")) {
      setLocale("es");
    } else {
      setLocale("fr");
    }
  }, [location.pathname, setLocale]);

  return null;
}

// ============ MAIN APP ============
export default function App() {
  const [locale, setLocale] = useState<Locale>(() => {
    const path = window.location.pathname;
    if (path.startsWith("/ar")) return "ar";
    if (path.startsWith("/en")) return "en";
    if (path.startsWith("/nl")) return "nl";
    if (path.startsWith("/es")) return "es";
    return "fr";
  });

  const t = translations[locale] as (typeof translations)["fr"];
  const dir = locale === "ar" ? "rtl" : "ltr";
  const lang = locale === "ar" ? "ar" : locale === "en" ? "en" : locale === "nl" ? "nl" : locale === "es" ? "es" : "fr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      <BrowserRouter>
        <LocaleRouter />
        <div className="min-h-screen bg-background" dir={dir}>
          <Header />
          <Routes>
            {/* Home routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/fr" element={<HomePage />} />
            <Route path="/en" element={<HomePage />} />
            <Route path="/ar" element={<HomePage />} />
            <Route path="/nl" element={<HomePage />} />
            <Route path="/es" element={<HomePage />} />
            
            {/* Reviews routes */}
            <Route path="/avis" element={<ReviewsPage />} />
            <Route path="/fr/avis" element={<ReviewsPage />} />
            <Route path="/en/reviews" element={<ReviewsPage />} />
            <Route path="/ar/reviews" element={<ReviewsPage />} />
            <Route path="/nl/reviews" element={<ReviewsPage />} />
            <Route path="/es/resenas" element={<ReviewsPage />} />
            
            {/* Booking routes */}
            <Route path="/reservation" element={<BookingPage />} />
            <Route path="/fr/reservation" element={<BookingPage />} />
            <Route path="/en/booking" element={<BookingPage />} />
            <Route path="/ar/reservation" element={<BookingPage />} />
            <Route path="/nl/reserveren" element={<BookingPage />} />
            <Route path="/es/reserva" element={<BookingPage />} />
            
            {/* Fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
          <FloatingWhatsApp />
          <MobileBottomBar />
        </div>
      </BrowserRouter>
    </LocaleContext.Provider>
  );
}
