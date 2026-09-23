export type Locale = "fr" | "en" | "ar";

export const translations = {
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      spa: "Le Spa",
      experiences: "Expériences",
      gallery: "Galerie",
      reviews: "Avis",
      contact: "Contact",
      book: "Réserver",
    },
    // Reviews Page
    reviewsPage: {
      hero: {
        eyebrow: "VOTRE EXPÉRIENCE COMPTE",
        title: "Partagez votre expérience chez Basalte",
        description: "Votre retour nous aide à améliorer continuellement votre expérience et permet à nos futurs visiteurs de mieux découvrir Basalte Spa & Massage.",
        cta: "Laisser un avis",
      },
      googleReviews: {
        title: "Avis Google",
        rating: "4.8 / 5",
        count: "283 avis Google",
        button: "Voir les avis Google",
      },
      form: {
        title: "Comment s'est passée votre visite ?",
        ratingLabel: "Votre note",
        ratingError: "Veuillez sélectionner une note",
        nameLabel: "Votre prénom",
        namePlaceholder: "Votre prénom",
        commentLabel: "Votre expérience",
        commentPlaceholder: "Partagez quelques mots sur votre expérience chez Basalte...",
        commentError: "Veuillez décrire votre expérience (minimum 10 caractères)",
        commentMaxLength: "500 caractères maximum",
        consentLabel: "J'autorise Basalte Spa & Massage à publier cet avis sur son site internet.",
        consentError: "Vous devez autoriser la publication de votre avis",
        submit: "Envoyer mon avis",
        privacy: "Nous utilisons uniquement les informations nécessaires au traitement de votre avis.",
        success: {
          title: "Merci pour votre retour.",
          message: "Votre avis a bien été reçu. Il sera vérifié avant toute publication.",
        },
      },
      approvedReviews: {
        title: "Avis partagés avec Basalte",
        empty: "Aucun avis approuvé pour le moment.",
      },
      finalCta: {
        title: "Vous souhaitez découvrir Basalte ?",
        description: "Contactez-nous directement pour connaître nos prestations et disponibilités.",
        button: "Nous contacter sur WhatsApp",
      },
    },
    // Hero
    hero: {
      eyebrow: "BASALTE SPA & MASSAGE · TANGER",
      headline: "Un moment de bien-être, pensé pour vous.",
      subtext: "Découvrez une expérience de détente dans un cadre élégant et apaisant à Tanger.",
      cta: "Réserver sur WhatsApp",
      ctaSecondary: "Découvrir le spa",
      socialProof: "★ 4.8 / 5 · 283 avis Google",
    },
    // Introduction
    intro: {
      headline: "Prenez le temps de vous retrouver.",
      text: "Basalte Spa & Massage est un lieu dédié à la détente, au bien-être et au soin de soi. Dans un cadre raffiné et chaleureux, nous vous invitons à ralentir, à respirer, et à vous offrir un moment rien qu'à vous.",
    },
    // Experience
    experience: {
      headline: "Une expérience sensorielle complète",
      text: "Chaque détail a été pensé pour éveiller vos sens : la douceur de la lumière, la chaleur de la pierre, le silence apaisant des espaces. Un lieu où le temps suspend son cours.",
      sub1title: "Calme & Intimité",
      sub1text: "Des espaces conçus pour votre tranquillité absolue.",
      sub2title: "Tradition & Modernité",
      sub2text: "Le hammam traditionnel dans un cadre contemporain et épuré.",
      sub3title: "Soin & Attention",
      sub3text: "Une équipe attentive à votre confort et votre bien-être.",
    },
    // Services
    services: {
      headline: "Nos Expériences",
      subtext: "Des moments de détente et de soin, adaptés à vos envies.",
      hammam: {
        title: "Hammam",
        description: "Une expérience traditionnelle de relaxation et de purification dans un cadre authentique.",
      },
      massage: {
        title: "Massage",
        description: "Un massage relaxant dans un environnement calme et apaisant.",
      },
      wellness: {
        title: "Bien-être",
        description: "Des expériences de bien-être global pour le corps et l'esprit.",
      },
      contactForInfo: "Contactez-nous sur WhatsApp pour découvrir les prestations disponibles et les tarifs.",
      cta: "Demander les disponibilités",
    },
    // Gallery
    gallery: {
      headline: "Galerie",
      subtext: "Découvrez l'univers Basalte.",
      categories: {
        spa: "Le Spa",
        hammam: "Hammam",
        ambiance: "Ambiance",
        details: "Détails",
      },
    },
    // Reviews
    reviews: {
      headline: "Ce que disent nos clients",
      subtext: "4.8 / 5 · 283 avis Google",
      review1: "So happy to have finally found a hammam I love in Tanger! Clean, modern, comfortable, all the staff was very friendly, precise and accommodating - and not pushy.",
      review2: "The standard was incredible! Beautiful rooms & such high quality of services...",
      review3: "A place I return to every time I travel to Tangier from Spain. Consistently excellent.",
      viewAll: "Voir tous les avis Google",
      source: "Avis Google",
    },
    // Trust
    trust: {
      items: [
        "4.8 / 5 · 283 avis Google",
        "Tanger, Maroc",
        "Réservation directe",
        "Contact WhatsApp",
      ],
    },
    // Location
    location: {
      headline: "Retrouvez-nous à Tanger",
      name: "Basalte Spa & Massage",
      address: "P5X3+7G, Tanger, Maroc",
      phone: "06 06 16 01 65",
      directions: "Itinéraire",
      call: "Appeler",
    },
    // FAQ
    faq: {
      headline: "Questions fréquentes",
      items: [
        {
          q: "Comment réserver ?",
          a: "Contactez Basalte directement sur WhatsApp ou par téléphone.",
        },
        {
          q: "Où se trouve Basalte Spa & Massage ?",
          a: "Basalte Spa & Massage se trouve à Tanger, Maroc.",
        },
        {
          q: "Comment connaître les prestations disponibles ?",
          a: "Contactez directement le spa pour connaître les prestations, disponibilités et tarifs actuels.",
        },
        {
          q: "Comment venir au spa ?",
          a: "Utilisez Google Maps pour obtenir l'itinéraire.",
        },
      ],
    },
    // Final CTA
    finalCta: {
      headline: "Votre moment de détente commence ici.",
      text: "Une question, une disponibilité ou une réservation ? Contactez directement Basalte Spa & Massage.",
      whatsapp: "WhatsApp",
      call: "Appeler",
    },
    // Footer
    footer: {
      tagline: "Spa · Hammam · Massage · Bien-être",
      copyright: "© Basalte Spa & Massage.",
    },
    // Mobile bar
    mobileBar: {
      whatsapp: "WhatsApp",
      call: "Appeler",
      directions: "Itinéraire",
    },
    // Floating button
    floating: {
      label: "Contacter sur WhatsApp",
    },
  },
  en: {
    nav: {
      home: "Home",
      spa: "The Spa",
      experiences: "Experiences",
      gallery: "Gallery",
      reviews: "Reviews",
      contact: "Contact",
      book: "Book Now",
    },
    reviewsPage: {
      hero: {
        eyebrow: "YOUR EXPERIENCE MATTERS",
        title: "Share your experience at Basalte",
        description: "Your feedback helps us continually improve the experience and helps future guests discover Basalte Spa & Massage.",
        cta: "Leave a review",
      },
      googleReviews: {
        title: "Google Reviews",
        rating: "4.8 / 5",
        count: "283 Google reviews",
        button: "View Google reviews",
      },
      form: {
        title: "How was your visit?",
        ratingLabel: "Your rating",
        ratingError: "Please select a rating",
        nameLabel: "Your first name",
        namePlaceholder: "Your first name",
        commentLabel: "Your experience",
        commentPlaceholder: "Tell us a few words about your experience at Basalte...",
        commentError: "Please describe your experience (minimum 10 characters)",
        commentMaxLength: "500 characters maximum",
        consentLabel: "I allow Basalte Spa & Massage to publish this review on its website.",
        consentError: "You must authorize the publication of your review",
        submit: "Submit my review",
        privacy: "We only use the information necessary to process your review.",
        success: {
          title: "Thank you for your feedback.",
          message: "Your review has been received and will be checked before publication.",
        },
      },
      approvedReviews: {
        title: "Reviews shared with Basalte",
        empty: "No approved reviews yet.",
      },
      finalCta: {
        title: "Would you like to discover Basalte?",
        description: "Contact us directly to learn about our services and availability.",
        button: "Contact us on WhatsApp",
      },
    },
    hero: {
      eyebrow: "BASALTE SPA & MASSAGE · TANGIER",
      headline: "A moment of wellness, designed for you.",
      subtext: "Discover a relaxation experience in an elegant and soothing setting in Tangier.",
      cta: "Book on WhatsApp",
      ctaSecondary: "Discover the spa",
      socialProof: "★ 4.8 / 5 · 283 Google reviews",
    },
    intro: {
      headline: "Take the time to reconnect with yourself.",
      text: "Basalte Spa & Massage is a place dedicated to relaxation, wellness, and self-care. In a refined and warm setting, we invite you to slow down, breathe, and offer yourself a moment that is entirely yours.",
    },
    experience: {
      headline: "A complete sensory experience",
      text: "Every detail has been designed to awaken your senses: the softness of the light, the warmth of the stone, the soothing silence of the spaces. A place where time stands still.",
      sub1title: "Calm & Privacy",
      sub1text: "Spaces designed for your absolute tranquility.",
      sub2title: "Tradition & Modernity",
      sub2text: "The traditional hammam in a contemporary, refined setting.",
      sub3title: "Care & Attention",
      sub3text: "A team attentive to your comfort and well-being.",
    },
    services: {
      headline: "Our Experiences",
      subtext: "Moments of relaxation and care, tailored to your desires.",
      hammam: {
        title: "Hammam",
        description: "A traditional experience of relaxation and purification in an authentic setting.",
      },
      massage: {
        title: "Massage",
        description: "A relaxing massage in a calm and soothing environment.",
      },
      wellness: {
        title: "Wellness",
        description: "Holistic wellness experiences for body and mind.",
      },
      contactForInfo: "Contact us on WhatsApp to discover available services and pricing.",
      cta: "Check availability",
    },
    gallery: {
      headline: "Gallery",
      subtext: "Discover the Basalte universe.",
      categories: {
        spa: "The Spa",
        hammam: "Hammam",
        ambiance: "Ambiance",
        details: "Details",
      },
    },
    reviews: {
      headline: "What our clients say",
      subtext: "4.8 / 5 · 283 Google reviews",
      review1: "So happy to have finally found a hammam I love in Tanger! Clean, modern, comfortable, all the staff was very friendly, precise and accommodating - and not pushy.",
      review2: "The standard was incredible! Beautiful rooms & such high quality of services...",
      review3: "A place I return to every time I travel to Tangier from Spain. Consistently excellent.",
      viewAll: "View all Google reviews",
      source: "Google reviews",
    },
    trust: {
      items: [
        "4.8 / 5 · 283 Google reviews",
        "Tangier, Morocco",
        "Direct booking",
        "WhatsApp contact",
      ],
    },
    location: {
      headline: "Find us in Tangier",
      name: "Basalte Spa & Massage",
      address: "P5X3+7G, Tangier, Morocco",
      phone: "06 06 16 01 65",
      directions: "Directions",
      call: "Call",
    },
    faq: {
      headline: "Frequently asked questions",
      items: [
        {
          q: "How to book?",
          a: "Contact Basalte directly on WhatsApp or by phone.",
        },
        {
          q: "Where is Basalte Spa & Massage located?",
          a: "Basalte Spa & Massage is located in Tangier, Morocco.",
        },
        {
          q: "How to find out about available services?",
          a: "Contact the spa directly to learn about current services, availability, and pricing.",
        },
        {
          q: "How to get to the spa?",
          a: "Use Google Maps to get directions.",
        },
      ],
    },
    finalCta: {
      headline: "Your moment of relaxation starts here.",
      text: "A question, availability, or booking? Contact Basalte Spa & Massage directly.",
      whatsapp: "WhatsApp",
      call: "Call",
    },
    footer: {
      tagline: "Spa · Hammam · Massage · Wellness",
      copyright: "© Basalte Spa & Massage.",
    },
    mobileBar: {
      whatsapp: "WhatsApp",
      call: "Call",
      directions: "Directions",
    },
    floating: {
      label: "Contact on WhatsApp",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      spa: "المنتجع",
      experiences: "التجارب",
      gallery: "المعرض",
      reviews: "التقييمات",
      contact: "اتصل بنا",
      book: "احجز الآن",
    },
    reviewsPage: {
      hero: {
        eyebrow: "تجربتكم تهمنا",
        title: "شاركنا تجربتك في Basalte",
        description: "يساعدنا رأيكم على تحسين تجربتكم باستمرار، كما يساعد الزوار الجدد على اكتشاف Basalte Spa & Massage.",
        cta: "أضف تقييمك",
      },
      googleReviews: {
        title: "تقييمات جوجل",
        rating: "4.8 / 5",
        count: "283 تقييم على جوجل",
        button: "عرض تقييمات جوجل",
      },
      form: {
        title: "كيف كانت تجربتكم؟",
        ratingLabel: "تقييمكم",
        ratingError: "يرجى اختيار تقييم",
        nameLabel: "الاسم الأول",
        namePlaceholder: "الاسم الأول",
        commentLabel: "تجربتكم",
        commentPlaceholder: "شاركنا بعض الكلمات عن تجربتكم في Basalte...",
        commentError: "يرجى وصف تجربتكم (10 أحرف على الأقل)",
        commentMaxLength: "500 حرف كحد أقصى",
        consentLabel: "أوافق على نشر هذا التقييم على الموقع الإلكتروني لـ Basalte Spa & Massage.",
        consentError: "يجب الموافقة على نشر تقييمكم",
        submit: "إرسال تقييمي",
        privacy: "نستخدم فقط المعلومات الضرورية لمعالجة تقييمكم.",
        success: {
          title: "شكرًا لكم على تقييمكم.",
          message: "تم استلام تقييمكم وسيتم التحقق منه قبل نشره.",
        },
      },
      approvedReviews: {
        title: "تقييمات مشتركة مع Basalte",
        empty: "لا توجد تقييمات معتمدة حتى الآن.",
      },
      finalCta: {
        title: "هل ترغبون في اكتشاف Basalte؟",
        description: "تواصلوا معنا مباشرة لمعرفة خدماتنا وتوفرنا.",
        button: "تواصلوا معنا عبر واتساب",
      },
    },
    hero: {
      eyebrow: "بالت سبا آند ماساج · طنجة",
      headline: "لحظة من الرفاهية، مصممة خصيصاً لك.",
      subtext: "اكتشف تجربة استرخاء في إطار أنيق ومهدئ بطنجة.",
      cta: "احجز عبر واتساب",
      ctaSecondary: "اكتشف المنتجع",
      socialProof: "★ 4.8 / 5 · 283 تقييم على جوجل",
    },
    intro: {
      headline: "خذ وقتك للعودة إلى ذاتك.",
      text: "بالت سبا آند ماساج هو مكان مخصص للاسترخاء والعناية بالذات. في إطار راقٍ ودافئ، ندعوك للتباطؤ والتنفس ومنح نفسك لحظة خاصة بك.",
    },
    experience: {
      headline: "تجربة حسية متكاملة",
      text: "كل تفصيل صُمم لإيقاظ حواسك: نعومة الإضاءة، دفء الحجر، هدوء المساحات. مكان يتوقف فيه الزمن.",
      sub1title: "هدوء وخصوصية",
      sub1text: "مساحات مصممة لراحتك المطلقة.",
      sub2title: "تقاليد وحداثة",
      sub2text: "الحمام التقليدي في إطار عصري وأنيق.",
      sub3title: "اهتمام وعناية",
      sub3text: "فريق يهتم براحتك ورفاهيتك.",
    },
    services: {
      headline: "تجاربنا",
      subtext: "لحظات من الاسترخاء والعناية، مصممة حسب رغباتك.",
      hammam: {
        title: "الحمام",
        description: "تجربة تقليدية للاسترخاء والتطهير في إطار أصيل.",
      },
      massage: {
        title: "التدليك",
        description: "تدليك مريح في بيئة هادئة ومطمئنة.",
      },
      wellness: {
        title: "العافية",
        description: "تجارب عافية شاملة للجسد والعقل.",
      },
      contactForInfo: "تواصل معنا عبر واتساب لمعرفة الخدمات المتاحة والأسعار.",
      cta: "استفسر عن المواعيد",
    },
    gallery: {
      headline: "المعرض",
      subtext: "اكتشف عالم بالت.",
      categories: {
        spa: "المنتجع",
        hammam: "الحمام",
        ambiance: "الأجواء",
        details: "التفاصيل",
      },
    },
    reviews: {
      headline: "ماذا يقول عملاؤنا",
      subtext: "4.8 / 5 · 283 تقييم على جوجل",
      review1: "So happy to have finally found a hammam I love in Tanger! Clean, modern, comfortable, all the staff was very friendly, precise and accommodating - and not pushy.",
      review2: "The standard was incredible! Beautiful rooms & such high quality of services...",
      review3: "A place I return to every time I travel to Tangier from Spain. Consistently excellent.",
      viewAll: "عرض جميع التقييمات على جوجل",
      source: "تقييمات جوجل",
    },
    trust: {
      items: [
        "4.8 / 5 · 283 تقييم على جوجل",
        "طنجة، المغرب",
        "حجز مباشر",
        "تواصل عبر واتساب",
      ],
    },
    location: {
      headline: "زورنا في طنجة",
      name: "بالت سبا آند ماساج",
      address: "P5X3+7G, طنجة، المغرب",
      phone: "06 06 16 01 65",
      directions: "الاتجاهات",
      call: "اتصل",
    },
    faq: {
      headline: "أسئلة شائعة",
      items: [
        {
          q: "كيف أحجز؟",
          a: "تواصل مع بالت مباشرة عبر واتساب أو الهاتف.",
        },
        {
          q: "أين يقع بالت سبا آند ماساج؟",
          a: "يقع بالت سبا آند ماساج في طنجة، المغرب.",
        },
        {
          q: "كيف أعرف الخدمات المتاحة؟",
          a: "تواصل مع المنتجع مباشرة لمعرفة الخدمات المتاحة والأسعار.",
        },
        {
          q: "كيف أصل إلى المنتجع؟",
          a: "استخدم خرائط جوجل للحصول على الاتجاهات.",
        },
      ],
    },
    finalCta: {
      headline: "لحظة استرخائك تبدأ هنا.",
      text: "سؤال، استفسار عن المواعيد أو حجز؟ تواصل مع بالت سبا آند ماساج مباشرة.",
      whatsapp: "واتساب",
      call: "اتصل",
    },
    footer: {
      tagline: "سبا · حمام · تدليك · عافية",
      copyright: "© بالت سبا آند ماساج.",
    },
    mobileBar: {
      whatsapp: "واتساب",
      call: "اتصل",
      directions: "الاتجاهات",
    },
    floating: {
      label: "تواصل عبر واتساب",
    },
  },
} as const;

export type TranslationKeys = typeof translations.fr;
