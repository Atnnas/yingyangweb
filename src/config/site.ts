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

  // Información de Contacto y Ubicación
  contact: {
    phone: '+52 (55) 1234-5678',
    whatsappNumber: '525512345678',
    whatsappDefaultMessage:
      'Hola Sensei! Me gustaría solicitar información sobre las clases y horarios en el Dojo Ying Yang.',
    email: 'contacto@dojoyingyang.com',
    address: 'Av. de las Artes Marciales #108, Col. Tradición, Zona Centro',
    addressNote: 'Estacionamiento privado para alumnos y familiares.',
    schedule: {
      weekdays: 'Lunes a Viernes: 15:30 - 21:30 hrs',
      saturdays: 'Sábados: 08:00 - 13:30 hrs',
    },
    facilityArea: '180 m² de tatami reglamentario y zona de preparación física',
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
