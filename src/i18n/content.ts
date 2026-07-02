/**
 * content.ts — Contenido de la landing en 3 idiomas (ES / EN / PT).
 * Fuente única de verdad para todo el copy traducible.
 * Los datos NO traducibles (teléfono, email, redes, dirección) están en ../data/site.ts
 */

export const langs = ["es", "en", "pt"] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = "es";
export const langLabels: Record<Lang, string> = { es: "ES", en: "EN", pt: "PT" };

/** Prefija una ruta absoluta ("/...") con el locale (es = sin prefijo). */
export function localizePath(path: string, lang: Lang): string {
  const clean = path === "/" ? "" : path;
  return lang === defaultLang ? path : `/${lang}${clean}` || `/${lang}`;
}

/** Detecta el idioma desde la URL (/en/... o /pt/...). */
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split("/").filter(Boolean)[0];
  return (langs as readonly string[]).includes(seg) ? (seg as Lang) : defaultLang;
}

export const content = {
  es: {
    meta: {
      title: "JUCUM Palabra Viva — Formación bíblica en Temuco",
      description: "Campus de JUCUM en Temuco: escuelas de discipulado bíblico y traducción oral de la Biblia para llevar la Palabra viva desde La Araucanía a las naciones.",
    },
    nav: { quienes: "Quiénes somos", escuelas: "Escuelas", mision: "La misión", servir: "Servir", blog: "Blog", devocionales: "Devocionales", contacto: "Contacto", postula: "Postula" },
    blogUI: { blogTitle: "Blog", blogSubtitle: "Historias, novedades y enseñanzas de la vida en el campus.", devoTitle: "Devocionales", devoSubtitle: "Alimenta tu día con la Palabra de Dios.", readMore: "Leer más", back: "← Volver", empty: "Pronto publicaremos contenido aquí.", published: "Publicado el" },
    hero: {
      eyebrow: "Aprende con nosotros",
      titlePre: "Estudia la Palabra", titleEm: "con quienes la viven", titlePost: ".",
      subtitle: "Formación bíblica en el corazón de La Araucanía: escuelas, programas de verano y seminarios para conocer a Dios, ser discipulado y servir a las naciones.",
      cta1: "Encuentra tu escuela", cta2: "Conócenos",
      annotation: "Una escuela para cada etapa",
      cats: [
        { title: "Escuelas internas", badge: "4", note: "Presenciales" },
        { title: "Programas de verano", badge: "2", note: "Intensivos" },
        { title: "Seminarios y cursos", badge: "6", note: "En línea" },
        { title: "Asesorías UofN", badge: "U of N", note: "Universidad de las Naciones" },
      ],
    },
    trust: [
      { value: "JUCUM", label: "Parte de Juventud con una Misión (YWAM)" },
      { value: "U of N", label: "Universidad de las Naciones" },
      { value: "Temuco", label: "Base en La Araucanía, Chile" },
    ],
    about: {
      eyebrow: "Quiénes somos",
      heading: "Creemos en el poder transformador de la Biblia.",
      body: "Somos una base de <b>Juventud con una Misión</b> en Temuco. Formamos, traducimos y enseñamos las Escrituras para que lleguen, vivas y comprensibles, a cada persona y cada pueblo —desde La Araucanía hasta las naciones.",
      features: ["Estudio bíblico a fondo", "Discipulado y comunidad", "Traducción oral de la Biblia", "Formación intercultural", "Escuelas presenciales y en línea", "Enraizados en La Araucanía"],
      cta: "Ver escuelas",
    },
    schools: {
      eyebrow: "Nuestras escuelas",
      heading: "Formación para cada etapa de tu camino.",
      sub: "Escuelas internas, programas de verano y seminarios —presenciales y en línea— para conocer la Biblia a fondo y prepararte para servir.",
      soon: "<b>Próximamente:</b> duración, requisitos y valores.",
      soonLink: "Escríbenos",
      soonAfter: "por los cupos disponibles.",
      groups: [
        { label: "Escuelas internas", note: "Presenciales · formación a tiempo completo", items: [
          { title: "EDE", full: "Escuela de Entrenamiento y Discipulado", desc: "La escuela base de JUCUM: un tiempo intensivo para conocer a Dios, ser discipulado y descubrir tu llamado.", tag: "Presencial" },
          { title: "EFEB", full: "Escuela de Fundamentos en Estudio Bíblico", desc: "Programa de 3 meses que forma discípulos en el estudio inductivo de la Biblia, capacitándolos para enseñar, predicar y liderar grupos pequeños con fidelidad a la Palabra.", tag: "Presencial" },
          { title: "DBS", full: "Escuela de Discipulado Bíblico", desc: "Una visión panorámica de las Escrituras que revela el plan de redención de Dios y establece principios para una vida centrada en Cristo.", tag: "Presencial", date: "Inicia 21 sep 2026" },
          { title: "EDA", full: "Escuela de Adoración", desc: "Forma adoradores íntegros: una adoración que trasciende la música y se vive con carácter conforme a Cristo y servicio con excelencia.", tag: "Presencial", date: "Inicia 7 mar 2027" },
        ]},
        { label: "Programas de verano", note: "Intensivos de temporada", items: [
          { title: "Escuela Misionera de Verano", full: "EMV", desc: "Conoce a Dios de manera más profunda y vive una experiencia misionera de 15 días que te capacita para compartir el evangelio en tu propio contexto.", tag: "Verano", date: "17–30 ene 2027" },
          { title: "Campamento Bíblico", full: "", desc: "Días para encontrarte con la Palabra y con otros, en un ambiente de campamento.", tag: "Verano" },
        ]},
        { label: "Escuelas extensivas y seminarios", note: "Varias disponibles en línea", items: [
          { title: "Bethel", full: "Escuela Bíblica Online", desc: "Programa modular que estudia los libros de la Biblia con el método inductivo, para comprender, interpretar y aplicar la Palabra desde cualquier lugar.", tag: "Online" },
          { title: "Seminario de Maestros de Escuela Bíblica Infantil", full: "", desc: "Herramientas para enseñar la Biblia a los niños con excelencia y amor.", tag: "Seminario" },
          { title: "Panorama Bíblico", full: "", desc: "Una mirada panorámica a toda la Biblia y su mensaje central.", tag: "Online" },
          { title: "Destino por Diseño", full: "", desc: "Descubre el propósito de Dios para tu vida y tus próximos pasos.", tag: "Taller" },
          { title: "Seminario Cronológico de la Biblia", full: "", desc: "Recorre la historia bíblica en orden, de principio a fin.", tag: "Online" },
          { title: "Seminario de Liderazgo Bíblico", full: "", desc: "Principios bíblicos para liderar y servir a otros.", tag: "Seminario" },
        ]},
      ],
    },
    uofn: {
      eyebrow: "Universidad de las Naciones",
      intro: "JUCUM Palabra Viva es parte de la Universidad de las Naciones (U of N), la red de formación de JUCUM presente en todo el mundo. Nuestras escuelas se enmarcan en su modelo académico, y ofrecemos apoyo para tu camino formativo.",
      offerings: [
        { title: "Asesorías académicas", desc: "Te orientamos para elegir tu ruta de escuelas y cursos dentro de la Universidad de las Naciones, según tu llamado y tus tiempos." },
        { title: "Talleres UofN", desc: "Talleres y cursos cortos en distintas áreas de formación bíblica y misional, abiertos a la comunidad." },
      ],
      cta: "Consulta por asesorías y talleres",
    },
    stats: {
      eyebrow: "Nuestra misión en números", heading: "Hacia el fin de la pobreza bíblica.",
      body: "Que cada persona y cada pueblo pueda escuchar la Palabra de Dios en un idioma y un formato que comprenda —en su propia voz.",
      playLabel: "Conoce el campus",
      items: [ { num: "10+", label: "Escuelas, programas y seminarios" }, { num: "3", label: "Idiomas de trabajo (ES · PT · EN)" }, { num: "5", label: "Áreas de ministerio" } ],
    },
    team: { eyebrow: "Nuestro equipo", heading: "Personas al servicio de la Palabra.", sub: "Un equipo internacional que forma, traduce y acompaña.", note: "* Estamos completando esta sección con las fotos y nombres reales del equipo.",
      members: [ { name: "Por confirmar", role: "Dirección de la base" }, { name: "Por confirmar", role: "Coordinación de escuelas" }, { name: "Por confirmar", role: "Equipo de traducción oral" } ] },
    mission: {
      eyebrow: "Desde La Araucanía a las naciones", heading: "La misión que nos mueve.",
      body: "Queremos despertar a la Iglesia al poder de la Palabra y entrenar a los creyentes para vivirla y compartirla —para que la verdad de Dios transforme primero cada vida y, desde ahí, cada familia, comunidad y pueblo.",
      cards: [
        { title: "Traducción oral de la Biblia", desc: "No todas las culturas se relacionan con la Palabra por el texto escrito. Formamos equipos que traducen la Biblia de forma oral, para que los pueblos de tradición oral la reciban en su propia lengua y su propia voz." },
        { title: "Arraigados en nuestra tierra", desc: "Un trabajo que comienza aquí, junto a los pueblos de La Araucanía, y se extiende hacia las naciones. Servimos con respeto, cercanía y esperanza." },
      ],
      sphEyebrow: "Una Iglesia que deja huella", sphHeading: "Discipular las 7 esferas de la sociedad.",
      sphBody: "Creemos que la Palabra transforma cada área de la vida. Formamos creyentes que influyen, con el evangelio, en los espacios donde Dios los pone.",
      spheres: ["Familia", "Iglesia", "Educación", "Gobierno", "Medios de comunicación", "Arte y entretención", "Economía y negocios"],
    },
    testimonials: { eyebrow: "Testimonios", heading: "Vidas que la Palabra transformó.", note: "* Testimonios de ejemplo — pronto publicaremos historias reales de nuestros estudiantes.",
      items: [ { quote: "Aquí la Biblia dejó de ser un libro lejano y se volvió parte de mi vida diaria.", name: "Estudiante", role: "Testimonio de ejemplo" }, { quote: "Encontré comunidad, formación y un propósito claro para servir.", name: "Estudiante", role: "Testimonio de ejemplo" }, { quote: "Aprender a estudiar las Escrituras por mí mismo cambió mi manera de ver todo.", name: "Estudiante", role: "Testimonio de ejemplo" } ] },
    ctaBanner: { heading: "Da el paso: fórmate en la Palabra.", sub: "Escríbenos y conversemos tu próximo paso. Sin compromiso.", whatsapp: "Escríbenos por WhatsApp", ver: "Ver escuelas" },
    contact: {
      eyebrow: "Conversemos", heading: "Estamos para acompañarte.", sub: "Cuéntanos en qué momento estás y qué buscas. Te respondemos a la brevedad.",
      form: { name: "Nombre", email: "Email", phone: "Teléfono", interest: "Me interesa",
        interestOptions: ["Una escuela de formación", "Estudio bíblico en línea", "Servir en la base (voluntario/staff)", "Apoyar / orar por la misión", "Traer formación a mi iglesia", "Otro"],
        message: "Mensaje", submit: "Enviar mensaje", hint: "Te responderemos lo antes posible.",
        sending: "Enviando…", sent: "Mensaje enviado ✓",
        ok: "¡Gracias! Recibimos tu mensaje y te responderemos a la brevedad.", err: "No pudimos enviar tu mensaje. Escríbenos por WhatsApp, por favor." },
    },
    footer: { navHeading: "Navegación", contactHeading: "Contacto", followHeading: "Síguenos", partOf: "Parte de JUCUM / YWAM y la Universidad de las Naciones.", rights: "Todos los derechos reservados.", madeBy: "Hecho por" },
    servir: {
      metaTitle: "Formas de servir — JUCUM Palabra Viva",
      metaDesc: "Voluntario, Staff de Temporada y Staff de Tiempo Completo: distintas formas de servir en nuestra base misionera en Temuco.",
      eyebrow: "Únete a la misión", heading: "Formas de servir en nuestra base misionera.",
      intro: "Creemos que cada persona puede ser parte de lo que Dios está haciendo a través de las misiones. Por eso ofrecemos distintas oportunidades para servir, según la disponibilidad, el llamado y la etapa de cada uno.",
      reqLabel: "Requisitos:",
      tiers: [
        { title: "Voluntario", desc: "Si deseas apoyar por un período de tiempo, puedes servir como voluntario colaborando en las diferentes áreas y actividades de la base misionera. Es una excelente oportunidad para aportar con tus dones, conocer de cerca la vida misionera y servir junto al equipo en las necesidades diarias.", requisitos: [] },
        { title: "Voluntariado en Equipo", desc: "Invitamos a equipos de JUCUM, iglesias, organizaciones y fundaciones cristianas a servir juntos durante un tiempo determinado en una base misionera o en una ciudad. Los equipos participan en proyectos de impacto comunitario, evangelismo, apoyo a ministerios, actividades prácticas y otras iniciativas según las necesidades del lugar. Es una oportunidad para fortalecer la unidad, poner los dones al servicio de otros y compartir el amor de Jesús de manera práctica, mientras se bendice y transforma la comunidad anfitriona.", requisitos: [] },
        { title: "Staff de Temporada", desc: "Dirigido a quienes han completado la Escuela de Discipulado y Entrenamiento (EDE) y desean servir por un tiempo determinado. Podrás apoyar en el desarrollo de una escuela específica, un proyecto ministerial o una iniciativa especial, contribuyendo activamente a la visión de la base.", requisitos: ["Haber completado exitosamente la Escuela de Discipulado y Entrenamiento (EDE)."] },
        { title: "Staff de Tiempo Completo", desc: "Para quienes desean comprometerse de manera más permanente con la base, sirviendo en las diferentes áreas ministeriales, formando parte del equipo y desarrollando la visión de largo plazo. Un espacio para crecer en liderazgo, discipulado y ministerio mientras inviertes en la formación de otros.", requisitos: ["Haber completado exitosamente la Escuela de Discipulado y Entrenamiento (EDE).", "Comprometerse a servir por un período mínimo de 2 años."] },
      ],
      cta: "Quiero servir", back: "← Volver al inicio",
    },
    gracias: { title: "¡Gracias! — JUCUM Palabra Viva", heading: "¡Gracias por escribirnos!", body: "Recibimos tu mensaje y te responderemos a la brevedad. Que la Palabra de Dios te acompañe mientras tanto.", back: "Volver al inicio" },
  },

  en: {
    meta: {
      title: "JUCUM Palabra Viva — Bible training in Temuco",
      description: "A YWAM campus in Temuco, Chile: discipleship and Bible schools plus oral Bible translation, bringing the living Word from La Araucanía to the nations.",
    },
    nav: { quienes: "About us", escuelas: "Schools", mision: "The mission", servir: "Serve", blog: "Blog", devocionales: "Devotionals", contacto: "Contact", postula: "Apply" },
    blogUI: { blogTitle: "Blog", blogSubtitle: "Stories, news and teachings from life on campus.", devoTitle: "Devotionals", devoSubtitle: "Feed your day with the Word of God.", readMore: "Read more", back: "← Back", empty: "We'll publish content here soon.", published: "Published on" },
    hero: {
      eyebrow: "Learn with us",
      titlePre: "Study the Word", titleEm: "with those who live it", titlePost: ".",
      subtitle: "Bible training in the heart of La Araucanía: schools, summer programs and seminars to know God, be discipled and serve the nations.",
      cta1: "Find your school", cta2: "About us",
      annotation: "A school for every stage",
      cats: [
        { title: "Resident schools", badge: "4", note: "On-site" },
        { title: "Summer programs", badge: "2", note: "Intensive" },
        { title: "Seminars & courses", badge: "6", note: "Online" },
        { title: "UofN guidance", badge: "U of N", note: "University of the Nations" },
      ],
    },
    trust: [
      { value: "YWAM", label: "Part of Youth With A Mission" },
      { value: "U of N", label: "University of the Nations" },
      { value: "Temuco", label: "Based in La Araucanía, Chile" },
    ],
    about: {
      eyebrow: "About us",
      heading: "We believe in the transforming power of the Bible.",
      body: "We are a <b>Youth With A Mission</b> base in Temuco. We train, translate and teach the Scriptures so they reach every person and people —alive and understandable— from La Araucanía to the nations.",
      features: ["In-depth Bible study", "Discipleship & community", "Oral Bible translation", "Cross-cultural training", "On-site & online schools", "Rooted in La Araucanía"],
      cta: "See schools",
    },
    schools: {
      eyebrow: "Our schools",
      heading: "Training for every stage of your journey.",
      sub: "Resident schools, summer programs and seminars —on-site and online— to know the Bible deeply and get ready to serve.",
      soon: "<b>Coming soon:</b> duration, requirements and fees.",
      soonLink: "Write to us",
      soonAfter: "about available spots.",
      groups: [
        { label: "Resident schools", note: "On-site · full-time training", items: [
          { title: "EDE", full: "Discipleship Training School", desc: "YWAM's foundational school: an intensive time to know God, be discipled and discover your calling.", tag: "On-site" },
          { title: "EFEB", full: "School of Bible Study Foundations", desc: "A 3-month program that forms disciples in the inductive study of the Bible, equipping them to teach, preach and lead small groups faithfully.", tag: "On-site" },
          { title: "DBS", full: "Bible Discipleship School", desc: "A panoramic vision of the Scriptures that reveals God's plan of redemption and lays principles for a Christ-centered life.", tag: "On-site", date: "Starts Sep 21, 2026" },
          { title: "EDA", full: "School of Worship", desc: "Forms whole-hearted worshipers: worship that goes beyond music and is lived out with Christlike character and excellent service.", tag: "On-site", date: "Starts Mar 7, 2027" },
        ]},
        { label: "Summer programs", note: "Seasonal intensives", items: [
          { title: "Summer Missionary School", full: "EMV", desc: "Know God more deeply and live a 15-day missionary experience that equips you to share the gospel in your own context.", tag: "Summer", date: "Jan 17–30, 2027" },
          { title: "Bible Camp", full: "", desc: "Days to encounter the Word and one another in a camp setting.", tag: "Summer" },
        ]},
        { label: "Extension schools & seminars", note: "Several available online", items: [
          { title: "Bethel", full: "Online Bible School", desc: "A modular program that studies the books of the Bible with the inductive method, to understand, interpret and apply the Word from anywhere.", tag: "Online" },
          { title: "Children's Bible Teachers Seminar", full: "", desc: "Tools to teach the Bible to children with excellence and love.", tag: "Seminar" },
          { title: "Bible Overview", full: "", desc: "A panoramic look at the whole Bible and its central message.", tag: "Online" },
          { title: "Destiny by Design", full: "", desc: "Discover God's purpose for your life and your next steps.", tag: "Workshop" },
          { title: "Chronological Bible Seminar", full: "", desc: "Walk through the biblical story in order, from beginning to end.", tag: "Online" },
          { title: "Bible Leadership Seminar", full: "", desc: "Biblical principles to lead and serve others.", tag: "Seminar" },
        ]},
      ],
    },
    uofn: {
      eyebrow: "University of the Nations",
      intro: "JUCUM Palabra Viva is part of the University of the Nations (U of N), YWAM's global training network. Our schools follow its academic model, and we offer support for your training journey.",
      offerings: [
        { title: "Academic guidance", desc: "We help you choose your path of schools and courses within the University of the Nations, according to your calling and season." },
        { title: "UofN workshops", desc: "Short workshops and courses in different areas of biblical and missional training, open to the community." },
      ],
      cta: "Ask about guidance & workshops",
    },
    stats: {
      eyebrow: "Our mission in numbers", heading: "Toward the end of Bible poverty.",
      body: "That every person and people may hear the Word of God in a language and format they understand —in their own voice.",
      playLabel: "Meet the campus",
      items: [ { num: "10+", label: "Schools, programs & seminars" }, { num: "3", label: "Working languages (ES · PT · EN)" }, { num: "5", label: "Areas of ministry" } ],
    },
    team: { eyebrow: "Our team", heading: "People at the service of the Word.", sub: "An international team that trains, translates and walks alongside.", note: "* We are completing this section with the team's real photos and names.",
      members: [ { name: "To be confirmed", role: "Base leadership" }, { name: "To be confirmed", role: "Schools coordination" }, { name: "To be confirmed", role: "Oral translation team" } ] },
    mission: {
      eyebrow: "From La Araucanía to the nations", heading: "The mission that moves us.",
      body: "We want to awaken the Church to the power of the Word and train believers to live it and share it —so that God's truth transforms each life first, and from there, every family, community and people.",
      cards: [
        { title: "Oral Bible translation", desc: "Not every culture relates to the Word through written text. We form teams that translate the Bible orally, so oral-tradition peoples receive it in their own language and voice." },
        { title: "Rooted in our land", desc: "A work that begins here, alongside the peoples of La Araucanía, and reaches out to the nations. We serve with respect, closeness and hope." },
      ],
      sphEyebrow: "A Church that leaves a mark", sphHeading: "Discipling the 7 spheres of society.",
      sphBody: "We believe the Word transforms every area of life. We form believers who influence, with the gospel, the places where God puts them.",
      spheres: ["Family", "Church", "Education", "Government", "Media", "Arts & entertainment", "Economy & business"],
    },
    testimonials: { eyebrow: "Testimonies", heading: "Lives the Word transformed.", note: "* Sample testimonies — we will soon publish real stories from our students.",
      items: [ { quote: "Here the Bible stopped being a distant book and became part of my daily life.", name: "Student", role: "Sample testimony" }, { quote: "I found community, training and a clear purpose to serve.", name: "Student", role: "Sample testimony" }, { quote: "Learning to study the Scriptures myself changed the way I see everything.", name: "Student", role: "Sample testimony" } ] },
    ctaBanner: { heading: "Take the step: be trained in the Word.", sub: "Write to us and let's talk about your next step. No commitment.", whatsapp: "Message us on WhatsApp", ver: "See schools" },
    contact: {
      eyebrow: "Let's talk", heading: "We're here to walk with you.", sub: "Tell us where you are and what you're looking for. We'll reply shortly.",
      form: { name: "Name", email: "Email", phone: "Phone", interest: "I'm interested in",
        interestOptions: ["A training school", "Online Bible study", "Serving at the base (volunteer/staff)", "Supporting / praying for the mission", "Bringing training to my church", "Other"],
        message: "Message", submit: "Send message", hint: "We'll get back to you as soon as possible.",
        sending: "Sending…", sent: "Message sent ✓",
        ok: "Thank you! We received your message and will reply shortly.", err: "We couldn't send your message. Please write to us on WhatsApp." },
    },
    footer: { navHeading: "Navigation", contactHeading: "Contact", followHeading: "Follow us", partOf: "Part of YWAM and the University of the Nations.", rights: "All rights reserved.", madeBy: "Made by" },
    servir: {
      metaTitle: "Ways to serve — JUCUM Palabra Viva",
      metaDesc: "Volunteer, Seasonal Staff and Full-Time Staff: different ways to serve at our missionary base in Temuco.",
      eyebrow: "Join the mission", heading: "Ways to serve at our missionary base.",
      intro: "We believe every person can be part of what God is doing through missions. That's why we offer different opportunities to serve, according to each one's availability, calling and season.",
      reqLabel: "Requirements:",
      tiers: [
        { title: "Volunteer", desc: "If you'd like to help for a period of time, you can serve as a volunteer, collaborating in the base's different areas and activities. It's a great opportunity to contribute your gifts, get to know missionary life up close and serve alongside the team in daily needs.", requisitos: [] },
        { title: "Team Volunteering", desc: "We invite teams from YWAM, churches, organizations and Christian foundations to serve together for a set time at a missionary base or in a city. Teams take part in community-impact projects, evangelism, ministry support, practical activities and other initiatives according to the needs of the place. It's an opportunity to strengthen unity, put gifts at the service of others and share the love of Jesus in a practical way, while blessing and transforming the host community.", requisitos: [] },
        { title: "Seasonal Staff", desc: "For those who have completed the Discipleship Training School (EDE) and want to serve for a set period. You'll help develop a specific school, a ministry project or a special initiative, actively contributing to the base's vision.", requisitos: ["Have successfully completed the Discipleship Training School (EDE)."] },
        { title: "Full-Time Staff", desc: "For those who want a more permanent commitment to the base, serving in the different ministry areas, becoming part of the team and developing its long-term vision. A place to grow in leadership, discipleship and ministry while investing in others.", requisitos: ["Have successfully completed the Discipleship Training School (EDE).", "Commit to serve for a minimum of 2 years."] },
      ],
      cta: "I want to serve", back: "← Back to home",
    },
    gracias: { title: "Thank you! — JUCUM Palabra Viva", heading: "Thank you for writing!", body: "We received your message and will reply shortly. May the Word of God be with you in the meantime.", back: "Back to home" },
  },

  pt: {
    meta: {
      title: "JUCUM Palabra Viva — Formação bíblica em Temuco",
      description: "Uma base da JOCUM em Temuco, Chile: escolas de discipulado e estudo bíblico, além de tradução oral da Bíblia, levando a Palavra viva desde La Araucanía às nações.",
    },
    nav: { quienes: "Quem somos", escuelas: "Escolas", mision: "A missão", servir: "Servir", blog: "Blog", devocionales: "Devocionais", contacto: "Contato", postula: "Inscreva-se" },
    blogUI: { blogTitle: "Blog", blogSubtitle: "Histórias, novidades e ensinos da vida no campus.", devoTitle: "Devocionais", devoSubtitle: "Alimente seu dia com a Palavra de Deus.", readMore: "Ler mais", back: "← Voltar", empty: "Em breve publicaremos conteúdo aqui.", published: "Publicado em" },
    hero: {
      eyebrow: "Aprenda conosco",
      titlePre: "Estude a Palavra", titleEm: "com quem a vive", titlePost: ".",
      subtitle: "Formação bíblica no coração de La Araucanía: escolas, programas de verão e seminários para conhecer a Deus, ser discipulado e servir às nações.",
      cta1: "Encontre sua escola", cta2: "Conheça-nos",
      annotation: "Uma escola para cada etapa",
      cats: [
        { title: "Escolas internas", badge: "4", note: "Presenciais" },
        { title: "Programas de verão", badge: "2", note: "Intensivos" },
        { title: "Seminários e cursos", badge: "6", note: "Online" },
        { title: "Assessorias UofN", badge: "U of N", note: "Universidade das Nações" },
      ],
    },
    trust: [
      { value: "JOCUM", label: "Parte da Jovens Com Uma Missão" },
      { value: "U of N", label: "Universidade das Nações" },
      { value: "Temuco", label: "Base em La Araucanía, Chile" },
    ],
    about: {
      eyebrow: "Quem somos",
      heading: "Cremos no poder transformador da Bíblia.",
      body: "Somos uma base da <b>Jovens Com Uma Missão</b> em Temuco. Formamos, traduzimos e ensinamos as Escrituras para que cheguem, vivas e compreensíveis, a cada pessoa e cada povo —desde La Araucanía até as nações.",
      features: ["Estudo bíblico aprofundado", "Discipulado e comunidade", "Tradução oral da Bíblia", "Formação intercultural", "Escolas presenciais e online", "Enraizados em La Araucanía"],
      cta: "Ver escolas",
    },
    schools: {
      eyebrow: "Nossas escolas",
      heading: "Formação para cada etapa do seu caminho.",
      sub: "Escolas internas, programas de verão e seminários —presenciais e online— para conhecer a Bíblia a fundo e se preparar para servir.",
      soon: "<b>Em breve:</b> duração, requisitos e valores.",
      soonLink: "Escreva para nós",
      soonAfter: "sobre as vagas disponíveis.",
      groups: [
        { label: "Escolas internas", note: "Presenciais · formação em tempo integral", items: [
          { title: "EDE", full: "Escola de Treinamento e Discipulado", desc: "A escola base da JOCUM: um tempo intensivo para conhecer a Deus, ser discipulado e descobrir seu chamado.", tag: "Presencial" },
          { title: "EFEB", full: "Escola de Fundamentos em Estudo Bíblico", desc: "Programa de 3 meses que forma discípulos no estudo indutivo da Bíblia, capacitando-os para ensinar, pregar e liderar pequenos grupos com fidelidade à Palavra.", tag: "Presencial" },
          { title: "DBS", full: "Escola de Discipulado Bíblico", desc: "Uma visão panorâmica das Escrituras que revela o plano de redenção de Deus e estabelece princípios para uma vida centrada em Cristo.", tag: "Presencial", date: "Início 21 set 2026" },
          { title: "EDA", full: "Escola de Adoração", desc: "Forma adoradores íntegros: uma adoração que transcende a música e se vive com caráter conforme Cristo e serviço com excelência.", tag: "Presencial", date: "Início 7 mar 2027" },
        ]},
        { label: "Programas de verão", note: "Intensivos de temporada", items: [
          { title: "Escola Missionária de Verão", full: "EMV", desc: "Conheça a Deus de forma mais profunda e viva uma experiência missionária de 15 dias que te capacita a compartilhar o evangelho no seu contexto.", tag: "Verão", date: "17–30 jan 2027" },
          { title: "Acampamento Bíblico", full: "", desc: "Dias para se encontrar com a Palavra e com outros, num ambiente de acampamento.", tag: "Verão" },
        ]},
        { label: "Escolas extensivas e seminários", note: "Várias disponíveis online", items: [
          { title: "Bethel", full: "Escola Bíblica Online", desc: "Programa modular que estuda os livros da Bíblia com o método indutivo, para compreender, interpretar e aplicar a Palavra de qualquer lugar.", tag: "Online" },
          { title: "Seminário de Professores de Escola Bíblica Infantil", full: "", desc: "Ferramentas para ensinar a Bíblia às crianças com excelência e amor.", tag: "Seminário" },
          { title: "Panorama Bíblico", full: "", desc: "Um olhar panorâmico sobre toda a Bíblia e sua mensagem central.", tag: "Online" },
          { title: "Destino por Design", full: "", desc: "Descubra o propósito de Deus para sua vida e seus próximos passos.", tag: "Oficina" },
          { title: "Seminário Cronológico da Bíblia", full: "", desc: "Percorra a história bíblica em ordem, do princípio ao fim.", tag: "Online" },
          { title: "Seminário de Liderança Bíblica", full: "", desc: "Princípios bíblicos para liderar e servir aos outros.", tag: "Seminário" },
        ]},
      ],
    },
    uofn: {
      eyebrow: "Universidade das Nações",
      intro: "JUCUM Palabra Viva faz parte da Universidade das Nações (U of N), a rede de formação da JOCUM presente no mundo todo. Nossas escolas seguem seu modelo acadêmico, e oferecemos apoio para o seu caminho de formação.",
      offerings: [
        { title: "Assessoria acadêmica", desc: "Ajudamos você a escolher seu caminho de escolas e cursos dentro da Universidade das Nações, conforme seu chamado e seu tempo." },
        { title: "Oficinas UofN", desc: "Oficinas e cursos curtos em diferentes áreas de formação bíblica e missionária, abertos à comunidade." },
      ],
      cta: "Consulte sobre assessorias e oficinas",
    },
    stats: {
      eyebrow: "Nossa missão em números", heading: "Rumo ao fim da pobreza bíblica.",
      body: "Que cada pessoa e cada povo possa ouvir a Palavra de Deus num idioma e formato que compreenda —na sua própria voz.",
      playLabel: "Conheça o campus",
      items: [ { num: "10+", label: "Escolas, programas e seminários" }, { num: "3", label: "Idiomas de trabalho (ES · PT · EN)" }, { num: "5", label: "Áreas de ministério" } ],
    },
    team: { eyebrow: "Nossa equipe", heading: "Pessoas a serviço da Palavra.", sub: "Uma equipe internacional que forma, traduz e acompanha.", note: "* Estamos completando esta seção com as fotos e nomes reais da equipe.",
      members: [ { name: "A confirmar", role: "Direção da base" }, { name: "A confirmar", role: "Coordenação de escolas" }, { name: "A confirmar", role: "Equipe de tradução oral" } ] },
    mission: {
      eyebrow: "De La Araucanía às nações", heading: "A missão que nos move.",
      body: "Queremos despertar a Igreja para o poder da Palavra e treinar os crentes para vivê-la e compartilhá-la —para que a verdade de Deus transforme primeiro cada vida e, a partir daí, cada família, comunidade e povo.",
      cards: [
        { title: "Tradução oral da Bíblia", desc: "Nem toda cultura se relaciona com a Palavra pelo texto escrito. Formamos equipes que traduzem a Bíblia de forma oral, para que os povos de tradição oral a recebam na sua própria língua e voz." },
        { title: "Enraizados na nossa terra", desc: "Um trabalho que começa aqui, junto aos povos de La Araucanía, e se estende às nações. Servimos com respeito, proximidade e esperança." },
      ],
      sphEyebrow: "Uma Igreja que deixa marca", sphHeading: "Discipular as 7 esferas da sociedade.",
      sphBody: "Cremos que a Palavra transforma cada área da vida. Formamos crentes que influenciam, com o evangelho, os espaços onde Deus os coloca.",
      spheres: ["Família", "Igreja", "Educação", "Governo", "Meios de comunicação", "Arte e entretenimento", "Economia e negócios"],
    },
    testimonials: { eyebrow: "Testemunhos", heading: "Vidas que a Palavra transformou.", note: "* Testemunhos de exemplo — em breve publicaremos histórias reais dos nossos alunos.",
      items: [ { quote: "Aqui a Bíblia deixou de ser um livro distante e passou a fazer parte do meu dia a dia.", name: "Aluno", role: "Testemunho de exemplo" }, { quote: "Encontrei comunidade, formação e um propósito claro para servir.", name: "Aluno", role: "Testemunho de exemplo" }, { quote: "Aprender a estudar as Escrituras por conta própria mudou minha forma de ver tudo.", name: "Aluno", role: "Testemunho de exemplo" } ] },
    ctaBanner: { heading: "Dê o passo: forme-se na Palavra.", sub: "Escreva para nós e vamos conversar sobre seu próximo passo. Sem compromisso.", whatsapp: "Fale conosco no WhatsApp", ver: "Ver escolas" },
    contact: {
      eyebrow: "Vamos conversar", heading: "Estamos aqui para caminhar com você.", sub: "Conte-nos em que momento está e o que procura. Respondemos em breve.",
      form: { name: "Nome", email: "Email", phone: "Telefone", interest: "Tenho interesse em",
        interestOptions: ["Uma escola de formação", "Estudo bíblico online", "Servir na base (voluntário/staff)", "Apoiar / orar pela missão", "Levar formação à minha igreja", "Outro"],
        message: "Mensagem", submit: "Enviar mensagem", hint: "Responderemos o quanto antes.",
        sending: "Enviando…", sent: "Mensagem enviada ✓",
        ok: "Obrigado! Recebemos sua mensagem e responderemos em breve.", err: "Não conseguimos enviar sua mensagem. Fale conosco no WhatsApp, por favor." },
    },
    footer: { navHeading: "Navegação", contactHeading: "Contato", followHeading: "Siga-nos", partOf: "Parte da JOCUM / YWAM e da Universidade das Nações.", rights: "Todos os direitos reservados.", madeBy: "Feito por" },
    servir: {
      metaTitle: "Formas de servir — JUCUM Palabra Viva",
      metaDesc: "Voluntário, Staff de Temporada e Staff de Tempo Integral: diferentes formas de servir na nossa base missionária em Temuco.",
      eyebrow: "Junte-se à missão", heading: "Formas de servir na nossa base missionária.",
      intro: "Cremos que cada pessoa pode fazer parte do que Deus está fazendo através das missões. Por isso oferecemos diferentes oportunidades de servir, conforme a disponibilidade, o chamado e a etapa de cada um.",
      reqLabel: "Requisitos:",
      tiers: [
        { title: "Voluntário", desc: "Se você deseja ajudar por um período, pode servir como voluntário, colaborando nas diferentes áreas e atividades da base missionária. É uma excelente oportunidade de contribuir com seus dons, conhecer de perto a vida missionária e servir junto à equipe nas necessidades diárias.", requisitos: [] },
        { title: "Voluntariado em Equipe", desc: "Convidamos equipes da JOCUM, igrejas, organizações e fundações cristãs a servir juntas por um tempo determinado em uma base missionária ou em uma cidade. As equipes participam de projetos de impacto comunitário, evangelismo, apoio a ministérios, atividades práticas e outras iniciativas conforme as necessidades do lugar. É uma oportunidade de fortalecer a unidade, colocar os dons a serviço dos outros e compartilhar o amor de Jesus de forma prática, enquanto se abençoa e transforma a comunidade anfitriã.", requisitos: [] },
        { title: "Staff de Temporada", desc: "Para quem concluiu a Escola de Treinamento e Discipulado (EDE) e deseja servir por um tempo determinado. Você poderá ajudar no desenvolvimento de uma escola específica, um projeto ministerial ou uma iniciativa especial, contribuindo ativamente para a visão da base.", requisitos: ["Ter concluído com êxito a Escola de Treinamento e Discipulado (EDE)."] },
        { title: "Staff de Tempo Integral", desc: "Para quem deseja um compromisso mais permanente com a base, servindo nas diferentes áreas ministeriais, fazendo parte da equipe e desenvolvendo a visão de longo prazo. Um espaço para crescer em liderança, discipulado e ministério enquanto investe na formação de outros.", requisitos: ["Ter concluído com êxito a Escola de Treinamento e Discipulado (EDE).", "Comprometer-se a servir por um período mínimo de 2 anos."] },
      ],
      cta: "Quero servir", back: "← Voltar ao início",
    },
    gracias: { title: "Obrigado! — JUCUM Palabra Viva", heading: "Obrigado por escrever!", body: "Recebemos sua mensagem e responderemos em breve. Que a Palavra de Deus te acompanhe enquanto isso.", back: "Voltar ao início" },
  },
} as const;

export type Content = (typeof content)[Lang];
export const getContent = (lang: Lang): Content => content[lang];
