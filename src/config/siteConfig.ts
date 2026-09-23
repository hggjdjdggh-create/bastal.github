export const siteConfig = {
  name: "Basalte Spa & Massage",
  city: "Tanger",
  country: "Maroc",
  phone: "+212606160165",
  displayPhone: "06 06 16 01 65",
  address: "P5X3+7G, Tanger, Maroc",
  googleRating: 4.8,
  googleReviews: 283,
  whatsapp: "212606160165",
  whatsappDefaultMessage:
    "Bonjour Basalte Spa & Massage, je souhaite avoir des informations sur vos prestations et vos disponibilités.",
  openingHours: {
    // Structured, per-day hours — complete and verify with the owner before publishing
    // Only 11:00 opening time is currently confirmed from Google data
  },
  googleMapsUrl: "", // Add the official Google Business Profile / Maps URL once confirmed
  socialLinks: {
    // Add only officially confirmed profile URLs
  },
} as const;

export function getWhatsAppUrl(message?: string): string {
  const msg = message || siteConfig.whatsappDefaultMessage;
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export function getTelUrl(): string {
  return `tel:${siteConfig.phone}`;
}

export function getMapsDirectionsUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`;
}
