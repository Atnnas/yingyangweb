/**
 * =======================================================================
 * CONFIGURACIÓN CENTRAL DEL SITIO / PLANTILLA (SITE CONFIG)
 * =======================================================================
 * Para adaptar esta plataforma a un nuevo cliente o dojo, solo debes
 * modificar los valores de este archivo y reemplazar las imágenes de logos en
 * `/public/images/logos/`.
 */

export const siteConfig = {
  // Identidad y Nombre de la Academia / Dojo
  brand: {
    name: 'Dojo Ying Yang',
    shortName: 'Ying Yang',
    tagline: 'Karate Do • Tradición & Poder',
    discipline: 'Karate Do Tradicional & Kumite Deportivo WKF',
    description:
      'Dojo oficial de Karate Do tradicional y de alta competencia. Formación marcial, valores de disciplina, karate infantil, juvenil y adultos.',
    // Desglose para el header con colores diferenciados
    headerDisplay: {
      prefix: 'DOJO',
      accent1: 'YING',
      accent2: 'YANG',
      color1: '#8CA6F8', // Color celeste/ying
      color2: '#E55353', // Color rojo/yang
    },
  },

  // Rutas de logotipos oficiales (ubicados en /public/images/logos/)
  logos: {
    primary: '/images/logos/Logo_Blanco_Color_Transparente.png',
    white: '/images/logos/Logo_Blanco_Transparente.png',
    black: '/images/logos/Logo_Negro_Transparente.png',
    color: '/images/logos/Logo_Color_Transparente.png',
  },

  // Sensei & Dirección Técnica
  founder: {
    name: 'Sensei Keylor Alfaro Fonseca',
    title: 'Instructor & Founder Dojo Ying Yang',
    rank: 'Cinto Negro 1º Dan',
    affiliation: 'Seleccionado Nacional de Costa Rica (FECOKA / WKF)',
    modality: 'Karate Do (Kumite)',
    school: 'Escuela YI SIN MUN / Dojo Ying Yang',
  },

  // Información de Contacto y Ubicación Oficial
  contact: {
    phone: '+506 8344-8684 / +506 8748-1179',
    phones: ['+506 8344-8684', '+506 8748-1179'],
    whatsappNumber: '50683448684',
    whatsappDefaultMessage:
      'Hola Sensei Keylor! Me gustaría solicitar información sobre las clases y entrenamientos en el Dojo Ying Yang.',
    email: 'alfarokeylor44@gmail.com',
    address: 'Alajuela, Costa Rica',
    addressNote: 'Dojo oficial de Karate Do tradicional y alta competencia Kumite.',
    schedule: {
      weekdays: 'Lunes a Viernes: 15:30 - 21:30 hrs',
      saturdays: 'Sábados: 08:00 - 13:30 hrs',
    },
    facilityArea: 'Tatami reglamentario y zona de preparación física de alto rendimiento',
    mapsUrl: 'https://maps.google.com',
  },

  // Redes Sociales Oficiales
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
  },

  // Cuentas de Super Administrador con acceso maestro inmediato
  superAdminEmails: [
    'david.artavia.rodriguez@gmail.com',
    'davidartaviarodriguez@gmail.com',
  ],
};

export type SiteConfig = typeof siteConfig;
