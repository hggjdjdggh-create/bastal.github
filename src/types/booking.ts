import { z } from "zod";

export const bookingRequestSchema = z.object({
  firstName: z.string().trim().min(1, "First name required").max(60, "Name too long"),
  partySize: z.enum(["1", "2", "3", "4", "5", "6+"] as const),
  preferredDate: z.string().min(1, "Date required"),
  preferredTime: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, "Invalid time format"),
  service: z.enum(["hammam", "massage", "wellness", "unsure"] as const),
  message: z.string().trim().max(500, "Message too long").optional().or(z.literal("")),
  // Honeypot
  website: z.string().max(0, "Spam detected"),
});

export type BookingRequestInput = z.infer<typeof bookingRequestSchema>;

export type BookingLocale = "fr" | "en" | "ar" | "nl" | "es";

// Build WhatsApp message from booking data
export function buildBookingWhatsAppMessage(
  input: BookingRequestInput,
  locale: BookingLocale
): string {
  const sanitize = (str: string) =>
    str.replace(/[\r\n\t]/g, " ").replace(/\s+/g, " ").trim();

  const firstName = sanitize(input.firstName);
  const message = input.message ? sanitize(input.message) : "";

  const serviceLabels: Record<BookingLocale, Record<string, string>> = {
    fr: {
      hammam: "Hammam",
      massage: "Massage",
      wellness: "Bien-être",
      unsure: "Je souhaite connaître les prestations disponibles",
    },
    en: {
      hammam: "Hammam",
      massage: "Massage",
      wellness: "Wellness",
      unsure: "I would like to know the available services",
    },
    ar: {
      hammam: "الحمام",
      massage: "التدليك",
      wellness: "العافية",
      unsure: "أود معرفة الخدمات المتاحة",
    },
    nl: {
      hammam: "Hammam",
      massage: "Massage",
      wellness: "Welzijn",
      unsure: "Ik wil graag de beschikbare diensten ontdekken",
    },
    es: {
      hammam: "Hammam",
      massage: "Masaje",
      wellness: "Bienestar",
      unsure: "Me gustaría conocer los servicios disponibles",
    },
  };

  const greetings: Record<BookingLocale, string> = {
    fr: "Bonjour Basalte Spa & Massage,",
    en: "Hello Basalte Spa & Massage,",
    ar: "مرحبا Basalte Spa & Massage,",
    nl: "Hallo Basalte Spa & Massage,",
    es: "Hola Basalte Spa & Massage,",
  };

  const intro: Record<BookingLocale, string> = {
    fr: "Je souhaite faire une demande de réservation.",
    en: "I would like to make a booking request.",
    ar: "أود تقديم طلب حجز.",
    nl: "Ik wil graag een reserveringsaanvraag indienen.",
    es: "Me gustaría hacer una solicitud de reserva.",
  };

  const labels: Record<BookingLocale, { name: string; party: string; date: string; time: string; service: string; message: string; thanks: string }> = {
    fr: { name: "Prénom", party: "Nombre de personnes", date: "Date souhaitée", time: "Heure souhaitée", service: "Prestation", message: "Message", thanks: "Merci." },
    en: { name: "Name", party: "Party size", date: "Preferred date", time: "Preferred time", service: "Service", message: "Message", thanks: "Thank you." },
    ar: { name: "الاسم", party: "عدد الأشخاص", date: "التاريخ المطلوب", time: "الوقت المطلوب", service: "الخدمة", message: "رسالة", thanks: "شكرا." },
    nl: { name: "Naam", party: "Aantal personen", date: "Gewenste datum", time: "Gewenst tijdstip", service: "Dienst", message: "Bericht", thanks: "Bedankt." },
    es: { name: "Nombre", party: "Número de personas", date: "Fecha preferida", time: "Hora preferida", service: "Servicio", message: "Mensaje", thanks: "Gracias." },
  };

  const l = labels[locale];
  const serviceName = serviceLabels[locale][input.service];

  let msg = `${greetings[locale]}\n\n${intro[locale]}\n\n`;
  msg += `${l.name} : ${firstName}\n`;
  msg += `${l.party} : ${input.partySize}\n`;
  msg += `${l.date} : ${input.preferredDate}\n`;
  msg += `${l.time} : ${input.preferredTime}\n`;
  msg += `${l.service} : ${serviceName}\n`;

  if (message) {
    msg += `\n${l.message} :\n${message}\n`;
  }

  msg += `\n${l.thanks}`;

  return msg;
}
