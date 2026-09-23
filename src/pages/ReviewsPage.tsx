import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, MessageCircle, ArrowRight, Check } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "../config/siteConfig";
import { useLocale } from "../App";
import { reviewFormSchema, type CustomerReview } from "../types/review";

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

// Star Rating Component
function StarRating({
  value,
  onChange,
  error,
}: {
  value: number;
  onChange: (rating: number) => void;
  error?: string;
}) {
  const { t } = useLocale();
  const [hovered, setHovered] = useState(0);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-primary mb-2">
        {t.reviewsPage.form.ratingLabel} <span className="text-accent">*</span>
      </label>
      <div className="flex items-center gap-1" role="radiogroup" aria-label={t.reviewsPage.form.ratingLabel}>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            role="radio"
            aria-checked={value === star}
            aria-label={`${star} ${star === 1 ? "étoile" : "étoiles"}`}
            onClick={() => onChange(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            className="p-1 transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          >
            <Star
              size={32}
              className={`transition-colors ${
                star <= (hovered || value)
                  ? "fill-amber-400 text-amber-400"
                  : "text-border"
              }`}
            />
          </button>
        ))}
      </div>
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}

// Hero Section
function ReviewsHero() {
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
          {t.reviewsPage.hero.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-6 leading-tight"
        >
          {t.reviewsPage.hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.reviewsPage.hero.description}
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          href="#review-form"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-200"
        >
          {t.reviewsPage.hero.cta}
          <ArrowRight size={18} />
        </motion.a>
      </div>
    </section>
  );
}

// Google Reviews Section
function GoogleReviewsSection() {
  const { t } = useLocale();
  const hasGoogleUrl = siteConfig.googleMapsUrl.length > 0;

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center bg-background-alt border border-border-light rounded-2xl p-8 sm:p-12">
            <p className="text-sm text-text-muted uppercase tracking-wider mb-4">
              {t.reviewsPage.googleReviews.title}
            </p>
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className={i < 5 ? "fill-amber-400 text-amber-400" : "text-border"}
                />
              ))}
            </div>
            <p className="font-heading text-3xl sm:text-4xl text-primary mb-2">
              {t.reviewsPage.googleReviews.rating}
            </p>
            <p className="text-text-muted text-sm mb-6">
              {t.reviewsPage.googleReviews.count}
            </p>
            {hasGoogleUrl && (
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
              >
                {t.reviewsPage.googleReviews.button}
                <ArrowRight size={14} />
              </a>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// Review Form Section
function ReviewForm() {
  const { t, locale } = useLocale();
  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    comment: "",
    consent: false,
    website: "", // honeypot
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate with Zod
    const result = reviewFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const issues = (result.error as any).issues || (result.error as any).errors || [];
      issues.forEach((issue: any) => {
        const field = issue.path?.[0] as string;
        if (field === "website") return; // ignore honeypot
        if (field) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    // Honeypot check
    if (formData.website.length > 0) {
      return; // Silent rejection for bots
    }

    setIsSubmitting(true);

    // Simulate API call (in production, this would be a real API endpoint)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Create review object (ready for backend integration)
    const review: CustomerReview = {
      id: crypto.randomUUID(),
      name: formData.name.trim() || undefined,
      rating: formData.rating as 1 | 2 | 3 | 4 | 5,
      comment: formData.comment.trim(),
      locale: locale,
      consentToPublish: formData.consent,
      status: "pending", // Always pending until approved
      createdAt: new Date().toISOString(),
    };

    // In production: await api.submitReview(review);
    console.log("Review submitted (pending moderation):", review);

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="review-form" className="py-16 sm:py-24 bg-background-alt">
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
              {t.reviewsPage.form.success.title}
            </h2>
            <p className="text-text-muted leading-relaxed">
              {t.reviewsPage.form.success.message}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="review-form" className="py-16 sm:py-24 bg-background-alt">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="bg-background border border-border-light rounded-2xl p-6 sm:p-10">
            <h2 className="font-heading text-2xl sm:text-3xl text-primary mb-8 text-center">
              {t.reviewsPage.form.title}
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

              {/* Rating */}
              <StarRating
                value={formData.rating}
                onChange={(rating) => setFormData({ ...formData, rating })}
                error={errors.rating}
              />

              {/* Name (optional) */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                  {t.reviewsPage.form.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.reviewsPage.form.namePlaceholder}
                  maxLength={50}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-primary placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
              </div>

              {/* Comment */}
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-primary mb-2">
                  {t.reviewsPage.form.commentLabel} <span className="text-accent">*</span>
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={(e) => {
                    if (e.target.value.length <= 500) {
                      setFormData({ ...formData, comment: e.target.value });
                    }
                  }}
                  placeholder={t.reviewsPage.form.commentPlaceholder}
                  rows={5}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-primary placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                />
                <div className="flex items-center justify-between mt-2">
                  {errors.comment && (
                    <p className="text-sm text-red-600">{errors.comment}</p>
                  )}
                  <p className="text-xs text-text-light ms-auto">
                    {formData.comment.length} / 500
                  </p>
                </div>
              </div>

              {/* Consent */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 w-5 h-5 rounded border-border text-accent focus:ring-accent focus:ring-2 cursor-pointer"
                  />
                  <span className="text-sm text-text-muted leading-relaxed group-hover:text-primary transition-colors">
                    {t.reviewsPage.form.consentLabel} <span className="text-accent">*</span>
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-sm text-red-600 mt-2 ms-8">{errors.consent}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-light disabled:bg-primary/50 text-white py-4 rounded-full text-base font-medium transition-all duration-200 min-h-[44px] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    {t.reviewsPage.form.submit}
                    <ArrowRight size={18} />
                  </>
                )}
              </button>

              {/* Privacy notice */}
              <p className="text-xs text-text-light text-center leading-relaxed">
                {t.reviewsPage.form.privacy}
              </p>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// Approved Reviews Section
function ApprovedReviewsSection() {
  const { t } = useLocale();

  // In production, this would fetch approved reviews from the backend
  const approvedReviews: CustomerReview[] = [];

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="font-heading text-2xl sm:text-3xl text-primary text-center mb-12">
            {t.reviewsPage.approvedReviews.title}
          </h2>
        </AnimatedSection>

        {approvedReviews.length === 0 ? (
          <AnimatedSection>
            <p className="text-center text-text-muted italic">
              {t.reviewsPage.approvedReviews.empty}
            </p>
          </AnimatedSection>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {approvedReviews.map((review, i) => (
              <AnimatedSection key={review.id} delay={i * 0.1}>
                <div className="bg-background-alt border border-border-light rounded-2xl p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        className={j < review.rating ? "fill-amber-400 text-amber-400" : "text-border"}
                      />
                    ))}
                  </div>
                  {review.name && (
                    <p className="text-sm font-medium text-primary mb-2">{review.name}</p>
                  )}
                  <p className="text-text-muted text-sm leading-relaxed italic">
                    «{review.comment}»
                  </p>
                  <p className="text-xs text-text-light mt-3">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// Final CTA
function ReviewsFinalCTA() {
  const { t } = useLocale();

  return (
    <section className="py-16 sm:py-24 bg-primary text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-4">
            {t.reviewsPage.finalCta.title}
          </h2>
          <p className="text-white/70 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            {t.reviewsPage.finalCta.description}
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cta-whatsapp hover:bg-cta-whatsapp-dark text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-200 shadow-lg"
          >
            <MessageCircle size={20} />
            {t.reviewsPage.finalCta.button}
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

// Main Reviews Page
export default function ReviewsPage() {
  return (
    <main>
      <ReviewsHero />
      <GoogleReviewsSection />
      <ReviewForm />
      <ApprovedReviewsSection />
      <ReviewsFinalCTA />
    </main>
  );
}
