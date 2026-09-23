import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, ArrowRight, Calendar, Clock, Users, Check } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "../config/siteConfig";
import { useLocale } from "../App";
import { bookingRequestSchema, buildBookingWhatsAppMessage, type BookingLocale } from "../types/booking";
import { routeSlugs } from "../i18n/translations";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

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

// Hero Section
function BookingHero() {
  const { t } = useLocale();

  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-background-alt overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 start-10 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-10 end-10 w-96 h-96 rounded-full bg-secondary blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xs sm:text-sm tracking-[0.2em] uppercase text-accent mb-6"
        >
          {t.bookingPage?.hero?.eyebrow || "RÉSERVATION"}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-6 leading-tight"
        >
          {t.bookingPage?.hero?.title || "Demande de réservation"}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.bookingPage?.hero?.description || "Remplissez le formulaire ci-dessous et nous vous contacterons pour confirmer votre réservation."}
        </motion.p>
      </div>
    </section>
  );
}

// Booking Form
function BookingForm() {
  const { t, locale } = useLocale();
  const [formData, setFormData] = useState({
    firstName: "",
    partySize: "",
    preferredDate: "",
    preferredTime: "",
    service: "",
    message: "",
    website: "", // honeypot
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Honeypot check
    if (formData.website.length > 0) {
      return; // Silent rejection for bots
    }

    // Validate with Zod
    const result = bookingRequestSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const issues = (result.error as any).issues || (result.error as any).errors || [];
      issues.forEach((issue: any) => {
        const field = issue.path?.[0] as string;
        if (field === "website") return;
        if (field) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    // Build WhatsApp message
    const message = buildBookingWhatsAppMessage(result.data, locale as BookingLocale);
    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Show success message
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-16 sm:py-24 bg-background-alt">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-background border border-border-light rounded-2xl p-8 sm:p-12"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cta-whatsapp/10 flex items-center justify-center">
              <Check size={32} className="text-cta-whatsapp" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl text-primary mb-4">
              {t.bookingPage?.form?.success?.title || "Votre demande a été préparée."}
            </h2>
            <p className="text-text-muted leading-relaxed">
              {t.bookingPage?.form?.success?.message || "Veuillez l'envoyer sur WhatsApp afin que Basalte confirme la disponibilité."}
            </p>
            <div className="mt-8">
              <a
                href={`/${locale}/${routeSlugs.reviews[locale as keyof typeof routeSlugs.reviews]}`}
                className="inline-flex items-center gap-2 text-accent hover:text-accent-light text-sm font-medium transition-colors"
              >
                {t.bookingPage?.crossLink?.reviews || "Vous avez déjà visité Basalte ? Partagez votre expérience"}
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24 bg-background-alt">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="bg-background border border-border-light rounded-2xl p-6 sm:p-10">
            <h2 className="font-heading text-2xl sm:text-3xl text-primary mb-8 text-center">
              {t.bookingPage?.form?.title || "Demande de réservation"}
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Honeypot - hidden from users */}
              <div className="absolute left-[-9999px]" aria-hidden="true">
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              </div>

              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-2">
                  {t.bookingPage?.form?.firstNameLabel || "Prénom"} <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder={t.bookingPage?.form?.firstNamePlaceholder || "Votre prénom"}
                  maxLength={60}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-primary placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
                {errors.firstName && <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>}
              </div>

              {/* Party Size */}
              <div>
                <label htmlFor="partySize" className="block text-sm font-medium text-primary mb-2">
                  <Users size={16} className="inline me-2" />
                  {t.bookingPage?.form?.partySizeLabel || "Nombre de personnes"} <span className="text-accent">*</span>
                </label>
                <select
                  id="partySize"
                  name="partySize"
                  value={formData.partySize}
                  onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all min-h-[44px]"
                >
                  <option value="">{t.bookingPage?.form?.partySizePlaceholder || "Sélectionnez"}</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6+">6+</option>
                </select>
                {errors.partySize && <p className="text-sm text-red-600 mt-1">{errors.partySize}</p>}
              </div>

              {/* Date */}
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-primary mb-2">
                  <Calendar size={16} className="inline me-2" />
                  {t.bookingPage?.form?.dateLabel || "Date souhaitée"} <span className="text-accent">*</span>
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all min-h-[44px]"
                />
                {errors.preferredDate && <p className="text-sm text-red-600 mt-1">{errors.preferredDate}</p>}
              </div>

              {/* Time */}
              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-primary mb-2">
                  <Clock size={16} className="inline me-2" />
                  {t.bookingPage?.form?.timeLabel || "Heure souhaitée"} <span className="text-accent">*</span>
                </label>
                <input
                  type="time"
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all min-h-[44px]"
                />
                {errors.preferredTime && <p className="text-sm text-red-600 mt-1">{errors.preferredTime}</p>}
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-primary mb-2">
                  {t.bookingPage?.form?.serviceLabel || "Prestation souhaitée"} <span className="text-accent">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all min-h-[44px]"
                >
                  <option value="">{t.bookingPage?.form?.servicePlaceholder || "Sélectionnez"}</option>
                  <option value="hammam">{t.services?.hammam?.title || "Hammam"}</option>
                  <option value="massage">{t.services?.massage?.title || "Massage"}</option>
                  <option value="wellness">{t.services?.wellness?.title || "Bien-être"}</option>
                  <option value="unsure">{t.bookingPage?.form?.serviceUnsure || "Je souhaite connaître les prestations disponibles"}</option>
                </select>
                {errors.service && <p className="text-sm text-red-600 mt-1">{errors.service}</p>}
              </div>

              {/* Message (optional) */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  {t.bookingPage?.form?.messageLabel || "Message (facultatif)"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => {
                    if (e.target.value.length <= 500) {
                      setFormData({ ...formData, message: e.target.value });
                    }
                  }}
                  placeholder={t.bookingPage?.form?.messagePlaceholder || "Informations complémentaires..."}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-primary placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                />
                <div className="flex items-center justify-between mt-2">
                  {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
                  <p className="text-xs text-text-light ms-auto">
                    {formData.message.length} / 500
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-cta-whatsapp hover:bg-cta-whatsapp-dark text-white py-4 rounded-full text-base font-medium transition-all duration-200 min-h-[44px] flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                {t.bookingPage?.form?.submit || "Demander une réservation sur WhatsApp"}
              </button>

              {/* Privacy notice */}
              <p className="text-xs text-text-light text-center leading-relaxed">
                {t.bookingPage?.form?.privacy || "Nous utilisons uniquement les informations nécessaires pour traiter votre demande."}
              </p>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// Cross-link to Reviews
function CrossLinkToReviews() {
  const { t, locale } = useLocale();

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <p className="text-text-muted text-base sm:text-lg mb-6">
            {t.bookingPage?.crossLink?.text || "Vous avez déjà visité Basalte ?"}
          </p>
          <a
            href={`/${locale}/${routeSlugs.reviews[locale as keyof typeof routeSlugs.reviews]}`}
            className="inline-flex items-center gap-2 text-accent hover:text-accent-light text-base font-medium transition-colors"
          >
            {t.bookingPage?.crossLink?.reviews || "Partagez votre expérience"}
            <ArrowRight size={18} />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

// Main Booking Page
export default function BookingPage() {
  return (
    <main>
      <BookingHero />
      <BookingForm />
      <CrossLinkToReviews />
    </main>
  );
}
