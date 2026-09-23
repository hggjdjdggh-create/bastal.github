export type Locale = "fr" | "en" | "ar" | "nl" | "es";

// Route slugs per locale for i18n routing
export const routeSlugs = {
  reviews: { fr: "avis", en: "reviews", ar: "reviews", nl: "reviews", es: "resenas" },
  booking: { fr: "reservation", en: "booking", ar: "reservation", nl: "reserveren", es: "reserva" },
} as const;

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
    // Booking Page
    bookingPage: {
      hero: {
        eyebrow: "RÉSERVATION",
        title: "Demande de réservation",
        description: "Remplissez le formulaire ci-dessous. Votre demande sera envoyée sur WhatsApp pour que Basalte confirme la disponibilité.",
      },
      form: {
        title: "Demande de réservation",
        firstNameLabel: "Prénom",
        firstNamePlaceholder: "Votre prénom",
        partySizeLabel: "Nombre de personnes",
        partySizePlaceholder: "Sélectionnez",
        dateLabel: "Date souhaitée",
        timeLabel: "Heure souhaitée",
        serviceLabel: "Prestation souhaitée",
        servicePlaceholder: "Sélectionnez",
        serviceUnsure: "Je souhaite connaître les prestations disponibles",
        messageLabel: "Message (facultatif)",
        messagePlaceholder: "Informations complémentaires...",
        submit: "Demander une réservation sur WhatsApp",
        privacy: "Nous utilisons uniquement les informations nécessaires pour traiter votre demande.",
        success: {
          title: "Votre demande a été préparée.",
          message: "Veuillez l'envoyer sur WhatsApp afin que Basalte confirme la disponibilité.",
        },
      },
      crossLink: {
        text: "Vous avez déjà visité Basalte ?",
        reviews: "Partagez votre expérience",
      },
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
    bookingPage: {
      hero: {
        eyebrow: "BOOKING",
        title: "Booking request",
        description: "Fill out the form below. Your request will be sent via WhatsApp for Basalte to confirm availability.",
      },
      form: {
        title: "Booking request",
        firstNameLabel: "First name",
        firstNamePlaceholder: "Your first name",
        partySizeLabel: "Party size",
        partySizePlaceholder: "Select",
        dateLabel: "Preferred date",
        timeLabel: "Preferred time",
        serviceLabel: "Service",
        servicePlaceholder: "Select",
        serviceUnsure: "I would like to know the available services",
        messageLabel: "Message (optional)",
        messagePlaceholder: "Additional information...",
        submit: "Request a booking on WhatsApp",
        privacy: "We only use the information necessary to process your request.",
        success: {
          title: "Your request has been prepared.",
          message: "Please send it via WhatsApp so Basalte can confirm availability.",
        },
      },
      crossLink: {
        text: "Have you already visited Basalte?",
        reviews: "Share your experience",
      },
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
      book: "حجز",
    },
    bookingPage: {
      hero: {
        eyebrow: "حجز",
        title: "طلب الحجز",
        description: "املأ النموذج أدناه. سيتم إرسال طلبك عبر واتساب لتأكيد Basalte للتوفر.",
      },
      form: {
        title: "طلب الحجز",
        firstNameLabel: "الاسم الأول",
        firstNamePlaceholder: "اسمك الأول",
        partySizeLabel: "عدد الأشخاص",
        partySizePlaceholder: "اختر",
        dateLabel: "التاريخ المطلوب",
        timeLabel: "الوقت المطلوب",
        serviceLabel: "الخدمة",
        servicePlaceholder: "اختر",
        serviceUnsure: "أود معرفة الخدمات المتاحة",
        messageLabel: "رسالة (اختياري)",
        messagePlaceholder: "معلومات إضافية...",
        submit: "طلب الحجز عبر واتساب",
        privacy: "نستخدم فقط المعلومات الضرورية لمعالجة طلبكم.",
        success: {
          title: "تم إعداد طلبكم.",
          message: "يرجى إرساله عبر واتساب لتأكيد Basalte للتوفر.",
        },
      },
      crossLink: {
        text: "هل زرتم Basalte من قبل؟",
        reviews: "شاركنا تجربتكم",
      },
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
  nl: {
    nav: {
      home: "Home",
      spa: "De Spa",
      experiences: "Ervaringen",
      gallery: "Galerij",
      reviews: "Reviews",
      contact: "Contact",
      book: "Reserveren",
    },
    bookingPage: {
      hero: {
        eyebrow: "RESERVEREN",
        title: "Reserveringsaanvraag",
        description: "Vul het onderstaande formulier in. Uw aanvraag wordt via WhatsApp verzonden zodat Basalte de beschikbaarheid kan bevestigen.",
      },
      form: {
        title: "Reserveringsaanvraag",
        firstNameLabel: "Voornaam",
        firstNamePlaceholder: "Uw voornaam",
        partySizeLabel: "Aantal personen",
        partySizePlaceholder: "Selecteer",
        dateLabel: "Gewenste datum",
        timeLabel: "Gewenst tijdstip",
        serviceLabel: "Dienst",
        servicePlaceholder: "Selecteer",
        serviceUnsure: "Ik wil graag de beschikbare diensten ontdekken",
        messageLabel: "Bericht (optioneel)",
        messagePlaceholder: "Aanvullende informatie...",
        submit: "Reservering aanvragen via WhatsApp",
        privacy: "We gebruiken alleen de informatie die nodig is om uw aanvraag te verwerken.",
        success: {
          title: "Uw aanvraag is voorbereid.",
          message: "Stuur deze via WhatsApp zodat Basalte de beschikbaarheid kan bevestigen.",
        },
      },
      crossLink: {
        text: "Heeft u Basalte al bezocht?",
        reviews: "Deel uw ervaring",
      },
    },
    reviewsPage: {
      hero: {
        eyebrow: "UW ERVARING TELT",
        title: "Deel uw ervaring bij Basalte",
        description: "Uw feedback helpt ons uw ervaring continu te verbeteren en stelt toekomstige bezoekers in staat Basalte Spa & Massage beter te ontdekken.",
        cta: "Review plaatsen",
      },
      googleReviews: {
        title: "Google Reviews",
        rating: "4.8 / 5",
        count: "283 Google reviews",
        button: "Bekijk Google reviews",
      },
      form: {
        title: "Hoe was uw bezoek?",
        ratingLabel: "Uw beoordeling",
        ratingError: "Selecteer een beoordeling",
        nameLabel: "Uw voornaam",
        namePlaceholder: "Uw voornaam",
        commentLabel: "Uw ervaring",
        commentPlaceholder: "Vertel ons iets over uw ervaring bij Basalte...",
        commentError: "Beschrijf uw ervaring (minimaal 10 tekens)",
        commentMaxLength: "Maximaal 500 tekens",
        consentLabel: "Ik sta Basalte Spa & Massage toe deze review op hun website te publiceren.",
        consentError: "U moet toestemming geven voor publicatie",
        submit: "Review versturen",
        privacy: "We gebruiken alleen de informatie die nodig is om uw review te verwerken.",
        success: {
          title: "Bedankt voor uw feedback.",
          message: "Uw review is ontvangen en wordt gecontroleerd voordat deze wordt gepubliceerd.",
        },
      },
      approvedReviews: {
        title: "Reviews gedeeld met Basalte",
        empty: "Nog geen goedgekeurde reviews.",
      },
      finalCta: {
        title: "Wilt u Basalte ontdekken?",
        description: "Neem direct contact met ons op voor onze diensten en beschikbaarheid.",
        button: "Contact via WhatsApp",
      },
    },
    hero: {
      eyebrow: "BASALTE SPA & MASSAGE · TANGER",
      headline: "Een moment van welzijn, voor u ontworpen.",
      subtext: "Ontdek een ontspanningservaring in een elegante en rustgevende setting in Tanger.",
      cta: "Reserveer via WhatsApp",
      ctaSecondary: "Ontdek de spa",
      socialProof: "★ 4.8 / 5 · 283 Google reviews",
    },
    intro: {
      headline: "Neem de tijd om uzelf te hervinden.",
      text: "Basalte Spa & Massage is een plek gewijd aan ontspanning, welzijn en zelfzorg. In een verfijnde en warme setting nodigen we u uit om te vertragen, adem te halen, en uzelf een moment te gunnen dat volledig van u is.",
    },
    experience: {
      headline: "Een complete zintuiglijke ervaring",
      text: "Elk detail is ontworpen om uw zintuigen te wekken: de zachtheid van het licht, de warmte van de steen, de rustgevende stilte van de ruimtes. Een plek waar de tijd stilstaat.",
      sub1title: "Rust & Privacy",
      sub1text: "Ruimtes ontworpen voor uw absolute rust.",
      sub2title: "Traditie & Moderniteit",
      sub2text: "De traditionele hammam in een eigentijdse, verfijnde setting.",
      sub3title: "Zorg & Aandacht",
      sub3text: "Een team dat aandacht heeft voor uw comfort en welzijn.",
    },
    services: {
      headline: "Onze Ervaringen",
      subtext: "Momenten van ontspanning en verzorging, afgestemd op uw wensen.",
      hammam: {
        title: "Hammam",
        description: "Een traditionele ervaring van ontspanning en zuivering in een authentieke setting.",
      },
      massage: {
        title: "Massage",
        description: "Een ontspannende massage in een kalme en rustgevende omgeving.",
      },
      wellness: {
        title: "Welzijn",
        description: "Holistische welzijnservaringen voor lichaam en geest.",
      },
      contactForInfo: "Neem contact met ons op via WhatsApp voor beschikbare diensten en prijzen.",
      cta: "Beschikbaarheid navragen",
    },
    gallery: {
      headline: "Galerij",
      subtext: "Ontdek de Basalte wereld.",
      categories: {
        spa: "De Spa",
        hammam: "Hammam",
        ambiance: "Sfeer",
        details: "Details",
      },
    },
    reviews: {
      headline: "Wat onze klanten zeggen",
      subtext: "4.8 / 5 · 283 Google reviews",
      review1: "So happy to have finally found a hammam I love in Tanger! Clean, modern, comfortable, all the staff was very friendly, precise and accommodating - and not pushy.",
      review2: "The standard was incredible! Beautiful rooms & such high quality of services...",
      review3: "A place I return to every time I travel to Tangier from Spain. Consistently excellent.",
      viewAll: "Bekijk alle Google reviews",
      source: "Google reviews",
    },
    trust: {
      items: [
        "4.8 / 5 · 283 Google reviews",
        "Tanger, Marokko",
        "Direct boeken",
        "WhatsApp contact",
      ],
    },
    location: {
      headline: "Vind ons in Tanger",
      name: "Basalte Spa & Massage",
      address: "P5X3+7G, Tanger, Marokko",
      phone: "06 06 16 01 65",
      directions: "Routebeschrijving",
      call: "Bellen",
    },
    faq: {
      headline: "Veelgestelde vragen",
      items: [
        {
          q: "Hoe kan ik reserveren?",
          a: "Neem direct contact op met Basalte via WhatsApp of telefoon.",
        },
        {
          q: "Waar is Basalte Spa & Massage gevestigd?",
          a: "Basalte Spa & Massage is gevestigd in Tanger, Marokko.",
        },
        {
          q: "Hoe kan ik de beschikbare diensten ontdekken?",
          a: "Neem direct contact op met de spa voor actuele diensten, beschikbaarheid en prijzen.",
        },
        {
          q: "Hoe kom ik bij de spa?",
          a: "Gebruik Google Maps voor routebeschrijving.",
        },
      ],
    },
    finalCta: {
      headline: "Uw moment van ontspanning begint hier.",
      text: "Een vraag, beschikbaarheid of reservering? Neem direct contact op met Basalte Spa & Massage.",
      whatsapp: "WhatsApp",
      call: "Bellen",
    },
    footer: {
      tagline: "Spa · Hammam · Massage · Welzijn",
      copyright: "© Basalte Spa & Massage.",
    },
    mobileBar: {
      whatsapp: "WhatsApp",
      call: "Bellen",
      directions: "Route",
    },
    floating: {
      label: "Contact via WhatsApp",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      spa: "El Spa",
      experiences: "Experiencias",
      gallery: "Galería",
      reviews: "Opiniones",
      contact: "Contacto",
      book: "Reservar",
    },
    bookingPage: {
      hero: {
        eyebrow: "RESERVA",
        title: "Solicitud de reserva",
        description: "Complete el formulario a continuación. Su solicitud se enviará por WhatsApp para que Basalte confirme la disponibilidad.",
      },
      form: {
        title: "Solicitud de reserva",
        firstNameLabel: "Nombre",
        firstNamePlaceholder: "Su nombre",
        partySizeLabel: "Número de personas",
        partySizePlaceholder: "Seleccione",
        dateLabel: "Fecha preferida",
        timeLabel: "Hora preferida",
        serviceLabel: "Servicio",
        servicePlaceholder: "Seleccione",
        serviceUnsure: "Me gustaría conocer los servicios disponibles",
        messageLabel: "Mensaje (opcional)",
        messagePlaceholder: "Información adicional...",
        submit: "Solicitar reserva por WhatsApp",
        privacy: "Solo utilizamos la información necesaria para procesar su solicitud.",
        success: {
          title: "Su solicitud ha sido preparada.",
          message: "Envíela por WhatsApp para que Basalte confirme la disponibilidad.",
        },
      },
      crossLink: {
        text: "¿Ya ha visitado Basalte?",
        reviews: "Comparta su experiencia",
      },
    },
    reviewsPage: {
      hero: {
        eyebrow: "SU EXPERIENCIA CUENTA",
        title: "Comparta su experiencia en Basalte",
        description: "Sus comentarios nos ayudan a mejorar continuamente su experiencia y permiten a futuros visitantes descubrir mejor Basalte Spa & Massage.",
        cta: "Dejar una opinión",
      },
      googleReviews: {
        title: "Opiniones de Google",
        rating: "4.8 / 5",
        count: "283 opiniones de Google",
        button: "Ver opiniones de Google",
      },
      form: {
        title: "¿Cómo fue su visita?",
        ratingLabel: "Su calificación",
        ratingError: "Seleccione una calificación",
        nameLabel: "Su nombre",
        namePlaceholder: "Su nombre",
        commentLabel: "Su experiencia",
        commentPlaceholder: "Cuéntenos algo sobre su experiencia en Basalte...",
        commentError: "Describa su experiencia (mínimo 10 caracteres)",
        commentMaxLength: "Máximo 500 caracteres",
        consentLabel: "Autorizo a Basalte Spa & Massage a publicar esta opinión en su sitio web.",
        consentError: "Debe autorizar la publicación de su opinión",
        submit: "Enviar mi opinión",
        privacy: "Solo utilizamos la información necesaria para procesar su opinión.",
        success: {
          title: "Gracias por sus comentarios.",
          message: "Hemos recibido su reseña y la revisaremos antes de publicarla.",
        },
      },
      approvedReviews: {
        title: "Opiniones compartidas con Basalte",
        empty: "Aún no hay opiniones aprobadas.",
      },
      finalCta: {
        title: "¿Desea descubrir Basalte?",
        description: "Contáctenos directamente para conocer nuestros servicios y disponibilidad.",
        button: "Contactar por WhatsApp",
      },
    },
    hero: {
      eyebrow: "BASALTE SPA & MASSAGE · TÁNGER",
      headline: "Un momento de bienestar, pensado para usted.",
      subtext: "Descubra una experiencia de relajación en un entorno elegante y relajante en Tánger.",
      cta: "Reservar por WhatsApp",
      ctaSecondary: "Descubrir el spa",
      socialProof: "★ 4.8 / 5 · 283 opiniones de Google",
    },
    intro: {
      headline: "Tómese el tiempo para reencontrarse.",
      text: "Basalte Spa & Massage es un lugar dedicado a la relajación, el bienestar y el cuidado personal. En un entorno refinado y cálido, le invitamos a desacelerar, respirar y regalarse un momento completamente suyo.",
    },
    experience: {
      headline: "Una experiencia sensorial completa",
      text: "Cada detalle ha sido pensado para despertar sus sentidos: la suavidad de la luz, el calor de la piedra, el silencio relajante de los espacios. Un lugar donde el tiempo se detiene.",
      sub1title: "Calma & Privacidad",
      sub1text: "Espacios diseñados para su tranquilidad absoluta.",
      sub2title: "Tradición & Modernidad",
      sub2text: "El hammam tradicional en un entorno contemporáneo y refinado.",
      sub3title: "Cuidado & Atención",
      sub3text: "Un equipo atento a su comodidad y bienestar.",
    },
    services: {
      headline: "Nuestras Experiencias",
      subtext: "Momentos de relajación y cuidado, adaptados a sus deseos.",
      hammam: {
        title: "Hammam",
        description: "Una experiencia tradicional de relajación y purificación en un entorno auténtico.",
      },
      massage: {
        title: "Masaje",
        description: "Un masaje relajante en un ambiente calmado y relajante.",
      },
      wellness: {
        title: "Bienestar",
        description: "Experiencias de bienestar holístico para cuerpo y mente.",
      },
      contactForInfo: "Contáctenos por WhatsApp para conocer los servicios disponibles y precios.",
      cta: "Consultar disponibilidad",
    },
    gallery: {
      headline: "Galería",
      subtext: "Descubra el universo Basalte.",
      categories: {
        spa: "El Spa",
        hammam: "Hammam",
        ambiance: "Ambiente",
        details: "Detalles",
      },
    },
    reviews: {
      headline: "Lo que dicen nuestros clientes",
      subtext: "4.8 / 5 · 283 opiniones de Google",
      review1: "So happy to have finally found a hammam I love in Tanger! Clean, modern, comfortable, all the staff was very friendly, precise and accommodating - and not pushy.",
      review2: "The standard was incredible! Beautiful rooms & such high quality of services...",
      review3: "A place I return to every time I travel to Tangier from Spain. Consistently excellent.",
      viewAll: "Ver todas las opiniones de Google",
      source: "Opiniones de Google",
    },
    trust: {
      items: [
        "4.8 / 5 · 283 opiniones de Google",
        "Tánger, Marruecos",
        "Reserva directa",
        "Contacto WhatsApp",
      ],
    },
    location: {
      headline: "Encuéntrenos en Tánger",
      name: "Basalte Spa & Massage",
      address: "P5X3+7G, Tánger, Marruecos",
      phone: "06 06 16 01 65",
      directions: "Cómo llegar",
      call: "Llamar",
    },
    faq: {
      headline: "Preguntas frecuentes",
      items: [
        {
          q: "¿Cómo puedo reservar?",
          a: "Contacte directamente con Basalte por WhatsApp o teléfono.",
        },
        {
          q: "¿Dónde se encuentra Basalte Spa & Massage?",
          a: "Basalte Spa & Massage se encuentra en Tánger, Marruecos.",
        },
        {
          q: "¿Cómo puedo conocer los servicios disponibles?",
          a: "Contacte directamente con el spa para conocer los servicios, disponibilidad y precios actuales.",
        },
        {
          q: "¿Cómo llegar al spa?",
          a: "Use Google Maps para obtener indicaciones.",
        },
      ],
    },
    finalCta: {
      headline: "Su momento de relajación comienza aquí.",
      text: "¿Una pregunta, disponibilidad o reserva? Contacte directamente con Basalte Spa & Massage.",
      whatsapp: "WhatsApp",
      call: "Llamar",
    },
    footer: {
      tagline: "Spa · Hammam · Masaje · Bienestar",
      copyright: "© Basalte Spa & Massage.",
    },
    mobileBar: {
      whatsapp: "WhatsApp",
      call: "Llamar",
      directions: "Ruta",
    },
    floating: {
      label: "Contactar por WhatsApp",
    },
  },
} as const;

export type TranslationKeys = typeof translations.fr;
