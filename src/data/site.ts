/**
 * site.ts — Contenido central de la landing JUCUM Palabra Viva.
 * Editar aquí el copy; los componentes lo consumen.
 *
 * ⚠️ Campos marcados TODO esperan datos reales de Felipe/el campus
 * (escuelas con fechas/requisitos, contacto público, dominio, form key).
 */

export const site = {
  name: "JUCUM Palabra Viva",
  legalName: "Juventud con una Misión — Palabra Viva",
  domain: "https://jucumpalabraviva.cl", // TODO confirmar dominio final
  tagline: "Que la Palabra de Dios llegue viva a cada persona.",
  city: "Temuco, La Araucanía",
  address: "Los Sauces 0505, Temuco, La Araucanía, Chile",

  // Contacto — TODO confirmar cuáles son públicos
  phoneDisplay: "+56 9 3326 6249",
  phoneRaw: "+56933266249",
  whatsapp: "+56933266249",
  whatsappMessage:
    "Hola JUCUM Palabra Viva, quiero saber más sobre las escuelas de formación bíblica.",
  email: "jucum.palabraviva@gmail.com",

  socials: {
    instagram: "https://www.instagram.com/jucumpalabraviva/",
    facebook: "https://www.facebook.com/p/JUCUM-Palabra-Viva-100069811966278/",
    youtube: "https://www.youtube.com/@jucumpalabraviva6679",
  },

  // Web3Forms — TODO pegar access key real
  formAccessKey: "REPLACE_WITH_WEB3FORMS_KEY",
} as const;

/** Franja de confianza / pertenencia */
export const trust = [
  { value: "JUCUM", label: "Parte de Juventud con una Misión (YWAM)" },
  { value: "U of N", label: "Universidad de las Naciones" },
  { value: "Temuco", label: "Base en La Araucanía, Chile" },
];

/**
 * Escuelas y formación — datos reales entregados por el cliente (2026-07-01).
 * ⚠️ POR CONFIRMAR con Felipe: el significado completo de las siglas (EDE, EFEB,
 * DBS, ELAD) y una descripción de 1 línea por escuela. Las descripciones abajo
 * son provisionales/genéricas para el demo — reemplazar por las reales.
 */
export const schoolGroups = [
  {
    label: "Escuelas internas",
    note: "Presenciales · formación a tiempo completo",
    items: [
      { title: "EDE", full: "Escuela de Entrenamiento y Discipulado", desc: "La escuela base de JUCUM: un tiempo intensivo para conocer a Dios, ser discipulado y descubrir tu llamado. (Detalle por confirmar)", tag: "Presencial" },
      { title: "EFEB", full: "Escuela de Fundamentos en Estudio Bíblico", desc: "Programa de 3 meses que forma discípulos en el estudio inductivo de la Biblia, capacitándolos para enseñar, predicar y liderar grupos pequeños con fidelidad a la Palabra de Dios.", tag: "Presencial" },
      { title: "DBS", full: "Escuela de Discipulado Bíblico", desc: "Una visión panorámica de las Escrituras que revela el plan de redención de Dios y establece principios bíblicos para el crecimiento espiritual y una vida centrada en Cristo.", tag: "Presencial", date: "Inicia 21 sep 2026" },
      { title: "EDA", full: "Escuela de Adoración", desc: "Forma adoradores íntegros, fundamentados en la Palabra: una adoración que trasciende la música y se vive con un carácter conforme a Cristo y un servicio con excelencia.", tag: "Presencial", date: "Inicia 7 mar 2027" },
    ],
  },
  {
    label: "Programas de verano",
    note: "Intensivos de temporada",
    items: [
      { title: "Escuela Misionera de Verano", full: "EMV", desc: "Conoce a Dios de manera más profunda y vive una experiencia misionera de 15 días que te capacita para compartir el evangelio en tu propio contexto de vida.", tag: "Verano", date: "17–30 ene 2027" },
      { title: "Campamento Bíblico", full: "", desc: "Días para encontrarte con la Palabra y con otros, en un ambiente de campamento.", tag: "Verano" },
    ],
  },
  {
    label: "Escuelas extensivas y seminarios",
    note: "Varias disponibles en línea",
    items: [
      { title: "Bethel", full: "Escuela Bíblica Online", desc: "Programa modular que estudia los libros de la Biblia con el método inductivo, con herramientas para comprender, interpretar y aplicar fielmente la Palabra desde cualquier lugar.", tag: "Online" },
      { title: "Seminario de Maestros de Escuela Bíblica Infantil", full: "", desc: "Herramientas para enseñar la Biblia a los niños con excelencia y amor.", tag: "Seminario" },
      { title: "Panorama Bíblico", full: "", desc: "Una mirada panorámica a toda la Biblia y su mensaje central.", tag: "Online" },
      { title: "Destino por Diseño", full: "", desc: "Descubre el propósito de Dios para tu vida y tus próximos pasos.", tag: "Taller" },
      { title: "Seminario Cronológico de la Biblia", full: "", desc: "Recorre la historia bíblica en orden, de principio a fin.", tag: "Online" },
      { title: "Seminario de Liderazgo Bíblico", full: "", desc: "Principios bíblicos para liderar y servir a otros.", tag: "Seminario" },
    ],
  },
];

/**
 * Equipo — PLACEHOLDER. ⚠️ Reemplazar con personas reales (nombre, rol, foto en
 * /public/fotos/equipo/). Mientras, mostramos las áreas del equipo, sin inventar personas.
 */
export const team = [
  { name: "Por confirmar", role: "Dirección de la base" },
  { name: "Por confirmar", role: "Coordinación de escuelas" },
  { name: "Por confirmar", role: "Equipo de traducción oral" },
];

/**
 * Testimonios — PLACEHOLDER. ⚠️ Reemplazar con testimonios reales de estudiantes.
 */
export const testimonials = [
  { quote: "Aquí la Biblia dejó de ser un libro lejano y se volvió parte de mi vida diaria.", name: "Estudiante", role: "Testimonio de ejemplo" },
  { quote: "Encontré comunidad, formación y un propósito claro para servir.", name: "Estudiante", role: "Testimonio de ejemplo" },
  { quote: "Aprender a estudiar las Escrituras por mí mismo cambió mi manera de ver todo.", name: "Estudiante", role: "Testimonio de ejemplo" },
];

/** Universidad de las Naciones — oferta académica del campus */
export const uofn = {
  intro:
    "JUCUM Palabra Viva es parte de la Universidad de las Naciones (U of N), la red de formación de JUCUM presente en todo el mundo. Nuestras escuelas se enmarcan en su modelo académico, y ofrecemos apoyo para tu camino formativo.",
  offerings: [
    { title: "Asesorías académicas", desc: "Te orientamos para elegir tu ruta de escuelas y cursos dentro de la Universidad de las Naciones, según tu llamado y tus tiempos." },
    { title: "Talleres UofN", desc: "Talleres y cursos cortos en distintas áreas de formación bíblica y misional, abiertos a la comunidad." },
  ],
};

/** Las 7 esferas de la sociedad (concepto JUCUM) */
export const spheres = [
  "Familia",
  "Iglesia",
  "Educación",
  "Gobierno",
  "Medios de comunicación",
  "Arte y entretención",
  "Economía y negocios",
];

/** Pilares de la visión */
export const visionPillars = [
  {
    title: "Traducir",
    body: "Formamos equipos de traducción oral de la Biblia para pueblos de tradición oral y comunidades menos alcanzadas, para que escuchen las Escrituras en su propia voz.",
  },
  {
    title: "Formar",
    body: "Capacitamos a creyentes en la Palabra, capaces de multiplicar lo aprendido y de sumarse a la tarea de terminar con la pobreza bíblica.",
  },
  {
    title: "Enseñar",
    body: "Ofrecemos entrenamiento bíblico sólido en lo local, institucional, internacional e intercultural, allí donde haga falta.",
  },
];

/** Pasos para dar el primer paso */
export const steps = [
  {
    title: "Escríbenos",
    body: "Cuéntanos en qué momento estás y qué buscas. Conversamos sin compromiso.",
  },
  {
    title: "Elige tu escuela",
    body: "Te ayudamos a encontrar la formación que calza con tu llamado y tu tiempo.",
  },
  {
    title: "Fórmate",
    body: "Vive un tiempo de estudio, comunidad y práctica en la Palabra.",
  },
  {
    title: "Envía y multiplica",
    body: "Lleva lo aprendido a tu iglesia, tu ciudad y a las naciones.",
  },
];
