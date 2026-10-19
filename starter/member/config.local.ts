// member/config.local.ts — generado por `forja init`. Edítalo cuando quieras.
// NUNCA se sobrescribe al actualizar el bot.

export const memberConfig = {
  businessName: "Adverse Studio",
  botName: "Asistente de Adverse Studio",
  language: "es" as "es" | "en" | "pt",
  tier: "free" as "free" | "pro",
  timezone: "America/Guatemala",
  // Moneda con la que el bot habla de precios ($ | € | R$). El bot la lee de
  // aquí si no la cambiaste en el panel (setting bot_currency manda si existe).
  currency: "Q",
  contactEmail: "",
};
export type MemberConfig = typeof memberConfig;

// Los precios NO van en `services` (se renderiza con "$" y entraría en cada
// respuesta): viven en customFields.politicaDePrecios y en la base de
// conocimiento (member/base-conocimiento-adverse-studio.md → panel Conocimiento).
export const businessConfig = {
  hours:
    "Jorge atiende de lunes a viernes de 8:00 a 18:00 y sábados de 8:00 a 12:00 (hora de Guatemala). " +
    "Auditorías gratuitas: lunes a viernes, inicio a las 10:00, 11:00, 12:00, 15:00 o 16:00. Domingos nadie del equipo está disponible.",
  services: [] as { name: string; price: number }[],
  location:
    "Ciudad de Guatemala. La atención es virtual (Google Meet o llamada de WhatsApp). " +
    "Oficina con cita previa: 24 Avenida 17-03, zona 10, Edificio Veinti4. No hay atención sin cita.",
  paymentMethods: [] as string[],
  contactPhone: "WhatsApp +502 5100-9334 (wa.me/50251009334) · PBX +502 2292-5448",
  customFields: {
    queHacemos:
      "Estudio boutique de estrategia digital: ayudamos a negocios a conseguir y cerrar más clientes con estrategia digital, " +
      "embudos de venta, marketing digital y contenido, automatización, CRM e inteligencia artificial aplicada al negocio. " +
      "Somos un estudio, no una agencia: primero diagnosticamos, después construimos.",
    servicios:
      "Estrategia digital, redes sociales, pauta digital (Meta, Google y TikTok Ads), desarrollo web, UX/UI, SEO y AIO, " +
      "producción audiovisual, branding, agentes de IA, CRM y automatización, inteligencia de negocios y email marketing.",
    politicaDePrecios:
      "No des precios de entrada. Explica el servicio y lleva a la auditoría gratuita. Solo si la persona insiste en pedir precio, " +
      "da el precio 'desde' de la base de conocimiento (en quetzales, IVA incluido) y aclara que la inversión exacta sale de la auditoría. " +
      "Nunca precio final, cotización ni descuentos.",
    auditoriaGratuita:
      "Sesión de diagnóstico sin costo ni compromiso que hace Jorge Alcain personalmente por Google Meet o llamada de WhatsApp. " +
      "Agenda en línea: calendar.app.google/st5SeMmn3ypLfWPr5",
    contacto:
      "Correo info@adversestudio.com · Sitio adversestudio.com · Portafolio adversestudio.com/portafolio · " +
      "Instagram @adversestudio · Facebook facebook.com/adversestudio",
    tono: "cordial, directo y seguro, en español de Guatemala, trato de usted; máximo 4 líneas, una pregunta y un emoji por mensaje",
  } as Record<string, string>,
};

import type { CommentFunnel } from "../src/channels/comment-funnel";
export const commentFunnels: CommentFunnel[] = [];

export const catalog: { name: string; price: number; description?: string; sku?: string }[] = [];
