'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Trophy,
  Award,
  Medal,
  Globe2,
  Flame,
  Shield,
  Target,
  Zap,
  CheckCircle2,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  GraduationCap,
  Users,
  Compass,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

type PalmaresCategory = 'all' | 'world' | 'continental' | 'national' | 'seminars';

interface PalmaresItem {
  title: string;
  category: 'world' | 'continental' | 'national' | 'seminars';
  location?: string;
  badge: string;
  badgeColor: 'gold' | 'silver' | 'bronze' | 'blue' | 'red';
  subtitle: string;
  description: string;
  highlight?: string;
}

export default function NosotrosPage() {
  const [activeTab, setActiveTab] = useState<PalmaresCategory>('all');

  const palmaresItems: PalmaresItem[] = [
    // Circuito Mundial & Oficial WKF
    {
      title: 'Clasificatorio Mundial WKF',
      category: 'world',
      location: 'París, Francia',
      badge: 'Selección Nacional',
      badgeColor: 'blue',
      subtitle: 'Representante Oficial de Costa Rica',
      description:
        'Participación oficial vistiendo los colores patrios de Costa Rica en el evento clasificatorio mundial de la máxima rectora del karate internacional (WKF).',
      highlight: 'París, Francia',
    },
    {
      title: 'Karate 1 - Series A',
      category: 'world',
      location: 'Salzburgo, Austria',
      badge: 'Top 30 del Mundo',
      badgeColor: 'gold',
      subtitle: 'Circuito Mundial de Alta Competencia WKF',
      description:
        'Ubicación destacada entre los mejores 30 competidores del planeta en la parada de la prestigiosa Karate 1 Series A.',
      highlight: 'Salzburgo, Austria',
    },
    {
      title: 'Campeonato Mundial Senior WKF',
      category: 'world',
      location: 'Circuito WKF',
      badge: 'Top 40 Mundial',
      badgeColor: 'gold',
      subtitle: 'Campeonato Mundial Absoluto WKF',
      description:
        'Ubicación entre los mejores 40 competidores del mundo en la máxima categoría senior de Kumite internacional.',
      highlight: 'Top 40 Global',
    },
    {
      title: 'Campeonato Panamericano WKF',
      category: 'world',
      location: 'América',
      badge: 'Puesto 18 Continental',
      badgeColor: 'blue',
      subtitle: 'Clasificación en Torneo Continental Oficial',
      description:
        'Desempeño destacado a nivel continental oficial frente a los mejores exponentes marciales del continente americano.',
      highlight: 'Puesto 18',
    },

    // Internacional & Continental
    {
      title: 'Panamericano Universitario (FISU America)',
      category: 'continental',
      badge: 'Medalla de Plata',
      badgeColor: 'silver',
      subtitle: 'Subcampeón Panamericano Universitario',
      description:
        'Subcampeón continental en representación universitaria y nacional, alcanzando la medalla de plata panamericana.',
      highlight: 'Subcampeón Panamericano',
    },
    {
      title: 'OPEN Internacional de Panamá',
      category: 'continental',
      badge: 'Medalla de Oro',
      badgeColor: 'gold',
      subtitle: 'Campeón Absoluto de Categoría Kumite',
      description:
        'Conquista del primer lugar del podio y medalla de oro internacional en combate kumite individual.',
      highlight: 'Campeón Internacional',
    },
    {
      title: 'Torneo Internacional WSKF',
      category: 'continental',
      badge: 'Campeón de Estilo',
      badgeColor: 'gold',
      subtitle: 'Competencia Internacional de Estilo',
      description:
        'Campeón indiscutido en torneo internacional avalado por la World Shotokan Karate-Do Federation.',
      highlight: 'Medalla de Oro',
    },
    {
      title: 'Centroamericano Estudiantil',
      category: 'continental',
      badge: 'Medalla de Plata',
      badgeColor: 'silver',
      subtitle: 'Subcampeón Regional Estudiantil',
      description:
        'Medalla de plata y subcampeonato en la máxima cita deportiva estudiantil de la región centroamericana.',
      highlight: 'Subcampeón Regional',
    },
    {
      title: 'Campeonato Centroamericano CONDEKA',
      category: 'continental',
      badge: 'Medalla de Bronce',
      badgeColor: 'bronze',
      subtitle: 'Podio Regional Centroamericano',
      description:
        'Tercer lugar y medalla de bronce frente a las delegaciones nacionales de la región Centroamericana.',
      highlight: 'Podio CONDEKA',
    },

    // Dominio Regional & Nacional
    {
      title: 'Centroamericano YI SIN MUN',
      category: 'national',
      badge: 'Pentacampeón (5x)',
      badgeColor: 'gold',
      subtitle: '5 Veces Campeón Regional Consecutivo',
      description:
        'Dominio absoluto durante cinco ediciones consecutivas como monarca invicto del torneo centroamericano de la escuela.',
      highlight: '5 Títulos',
    },
    {
      title: 'Torneo Nacional YI SIN MUN',
      category: 'national',
      badge: 'Tetracampeón (4x)',
      badgeColor: 'gold',
      subtitle: '4 Veces Campeón Nacional',
      description:
        'Tetracampeón en los torneos nacionales oficiales de la prestigiosa Escuela de Karate Do YI SIN MUN.',
      highlight: '4 Títulos',
    },
    {
      title: 'Torneo Universitario UCR Occidente',
      category: 'national',
      badge: 'Bicampeón (2x)',
      badgeColor: 'blue',
      subtitle: '2 Veces Campeón Regional',
      description:
        'Monarca bicampeón del torneo competitivo de la Universidad de Costa Rica Sede Occidente.',
      highlight: '2 Títulos',
    },

    // Capacitación Técnica Internacional
    {
      title: 'Seminario Internacional de Alto Rendimiento',
      category: 'seminars',
      badge: 'Capacitación Élite',
      badgeColor: 'red',
      subtitle: 'Impartido por Junior Lefevre & Georgios Tzanos',
      description:
        'Formación técnica de primer nivel impartida directamente por dos leyendas vivientes del karate mundial: Junior Lefevre (Campeón Mundial y Europeo) y Georgios Tzanos (Campeón de Juegos Mundiales y multicampeón europeo).',
      highlight: 'Técnica Mundialista',
    },
  ];

  const filteredPalmares =
    activeTab === 'all'
      ? palmaresItems
      : palmaresItems.filter((item) => item.category === activeTab);

  const getBadgeStyles = (color: PalmaresItem['badgeColor']) => {
    switch (color) {
      case 'gold':
        return {
          bg: 'rgba(234, 179, 8, 0.12)',
          border: 'rgba(234, 179, 8, 0.4)',
          text: '#FACC15',
        };
      case 'silver':
        return {
          bg: 'rgba(226, 232, 240, 0.12)',
          border: 'rgba(203, 213, 225, 0.4)',
          text: '#E2E8F0',
        };
      case 'bronze':
        return {
          bg: 'rgba(249, 115, 22, 0.12)',
          border: 'rgba(249, 115, 22, 0.4)',
          text: '#FB923C',
        };
      case 'blue':
        return {
          bg: 'rgba(59, 130, 246, 0.12)',
          border: 'rgba(140, 166, 248, 0.4)',
          text: '#8CA6F8',
        };
      case 'red':
        return {
          bg: 'rgba(239, 68, 68, 0.12)',
          border: 'rgba(239, 68, 68, 0.4)',
          text: '#F87171',
        };
    }
  };

  return (
    <div style={{ paddingBottom: '6rem', position: 'relative' }}>
      {/* ================= HERO SENSEI KEYLOR SPOTLIGHT ================= */}
      <section
        style={{
          position: 'relative',
          padding: 'clamp(3.5rem, 7vw, 6rem) 0 clamp(3rem, 5vw, 4.5rem)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'linear-gradient(180deg, #090B10 0%, #0D1017 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Glows de ambientación marcial */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '10%',
            width: '45vw',
            height: '45vw',
            background: 'radial-gradient(circle, rgba(57, 79, 154, 0.22) 0%, transparent 70%)',
            pointerEvents: 'none',
            filter: 'blur(70px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-15%',
            right: '5%',
            width: '40vw',
            height: '40vw',
            background: 'radial-gradient(circle, rgba(184, 49, 49, 0.2) 0%, transparent 70%)',
            pointerEvents: 'none',
            filter: 'blur(70px)',
          }}
        />

        <div className="container-dojo" style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 0.85fr)',
              gap: 'clamp(2.5rem, 5vw, 5rem)',
              alignItems: 'center',
            }}
            className="hero-sensei-grid"
          >
            {/* Columna Izquierda: Información de Élite & Perfil */}
            <div>
              {/* Badge de Selección Nacional */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.45rem 1rem',
                  borderRadius: '30px',
                  backgroundColor: 'rgba(35, 52, 107, 0.3)',
                  border: '1px solid rgba(140, 166, 248, 0.35)',
                  marginBottom: '1.25rem',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '9px',
                    height: '9px',
                    borderRadius: '50%',
                    backgroundColor: '#0056B3',
                    boxShadow: '0 0 10px #8CA6F8',
                  }}
                />
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#8CA6F8',
                  }}
                >
                  🇨🇷 Seleccionado Nacional • Costa Rica (FECOKA / WKF)
                </span>
              </div>

              {/* Título Principal */}
              <h1
                style={{
                  fontSize: 'clamp(2.4rem, 5.2vw, 4.2rem)',
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem',
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                }}
              >
                Sensei Keylor{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #8CA6F8 0%, #E55353 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Alfaro Fonseca
                </span>
              </h1>

              {/* Subtítulos de Título y Grado Técnico */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.5rem',
                }}
              >
                <span
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#FACC15',
                    backgroundColor: 'rgba(250, 204, 21, 0.1)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(250, 204, 21, 0.25)',
                  }}
                >
                  🥋 Cinto Negro 1º Dan
                </span>
                <span
                  style={{
                    fontSize: '0.9rem',
                    color: '#CBD5E1',
                    fontWeight: 600,
                  }}
                >
                  Atleta de Alto Rendimiento (Kumite)
                </span>
                <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
                <span
                  style={{
                    fontSize: '0.9rem',
                    color: '#9FA6B8',
                  }}
                >
                  Instructor & Founder Dojo Ying Yang
                </span>
              </div>

              {/* Declaración de Perfil Profesional (Cita del Sensei) */}
              <div
                style={{
                  position: 'relative',
                  backgroundColor: 'rgba(18, 21, 29, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '1.5rem 1.75rem',
                  marginBottom: '2rem',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '20px',
                    backgroundColor: '#1E2330',
                    padding: '0 0.6rem',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#8CA6F8',
                    borderRadius: '4px',
                    border: '1px solid rgba(140, 166, 248, 0.3)',
                  }}
                >
                  Perfil Profesional
                </div>
                <p
                  style={{
                    fontSize: '1.02rem',
                    color: '#D1D5DB',
                    lineHeight: 1.75,
                    fontStyle: 'normal',
                    margin: 0,
                  }}
                >
                  &ldquo;Atleta de alto rendimiento con <strong>9 años de experiencia competitiva</strong> en Karate Do (modalidad Kumite) y seleccionado nacional de Costa Rica. Cuento con un registro de <strong>más de 300 medallas internacionales y nacionales</strong>. Actualmente enfocado en el circuito mundial WKF / Series A, combinando la alta competencia con la instrucción formativa en el Dojo Ying Yang.&rdquo;
                </p>
              </div>

              {/* Botones de acción / Conexión */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    siteConfig.contact.whatsappDefaultMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-martial-primary"
                  style={{ padding: '0.85rem 1.85rem', gap: '0.65rem' }}
                >
                  <Phone size={18} />
                  <span>Contactar al Sensei (+506 8344-8684)</span>
                </a>
                <Link
                  href="/contacto"
                  className="btn-martial-secondary"
                  style={{ padding: '0.85rem 1.75rem', gap: '0.65rem' }}
                >
                  <span>Conocer el Dojo</span>
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta Insignia Sensei / Credencial Marcial */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <div
                style={{
                  width: '100%',
                  maxWidth: '460px',
                  background: 'linear-gradient(150deg, rgba(22, 26, 36, 0.95) 0%, rgba(12, 14, 19, 0.98) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '20px',
                  padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                  boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.8), 0 0 45px rgba(35, 52, 107, 0.25)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Ribbon Cinto Negro */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '1.25rem',
                    marginBottom: '1.5rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Shield size={18} color="#8CA6F8" />
                    <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.12em', color: '#9FA6B8', textTransform: 'uppercase' }}>
                      Credencial Oficial
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      backgroundColor: '#11141C',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '4px',
                      color: '#F7F8FA',
                      letterSpacing: '0.08em',
                    }}
                  >
                    FECOKA • WKF
                  </span>
                </div>

                {/* Emblema Central del Dojo */}
                <div
                  style={{
                    width: '140px',
                    height: '140px',
                    margin: '0 auto 1.25rem',
                    position: 'relative',
                    filter: 'drop-shadow(0 8px 20px rgba(0, 0, 0, 0.6))',
                  }}
                >
                  <Image
                    src={siteConfig.logos.primary}
                    alt={`Emblema ${siteConfig.brand.name}`}
                    fill
                    sizes="140px"
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>

                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 900,
                      color: '#FFFFFF',
                      marginBottom: '0.35rem',
                      letterSpacing: '0.04em',
                    }}
                  >
                    KEYLOR ALFARO FONSECA
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#8CA6F8', fontWeight: 700, margin: 0 }}>
                    Cinto Negro 1º Dan • Kumite Specialist
                  </p>
                  <p style={{ fontSize: '0.78rem', color: '#9FA6B8', margin: '0.25rem 0 0' }}>
                    Escuela YI SIN MUN / Dojo Ying Yang
                  </p>
                </div>

                {/* Datos de Contacto y Ubicación Rápida */}
                <div
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.35)',
                    borderRadius: '10px',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem',
                    fontSize: '0.82rem',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#D1D5DB' }}>
                    <MapPin size={16} color="#E55353" style={{ flexShrink: 0 }} />
                    <span>Alajuela, Costa Rica</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#D1D5DB' }}>
                    <Phone size={16} color="#8CA6F8" style={{ flexShrink: 0 }} />
                    <span>+506 8344-8684 / +506 8748-1179</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#D1D5DB' }}>
                    <Mail size={16} color="#FACC15" style={{ flexShrink: 0 }} />
                    <span style={{ wordBreak: 'break-all' }}>alfarokeylor44@gmail.com</span>
                  </div>
                </div>

                {/* Cinturón visual negro con rayas rojas/doradas de honor */}
                <div
                  style={{
                    marginTop: '1.25rem',
                    height: '8px',
                    borderRadius: '4px',
                    background: 'linear-gradient(90deg, #111 0%, #222 75%, #FACC15 75%, #FACC15 80%, #111 80%, #E55353 90%, #111 100%)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BARRA DE IMPACTO COMPETITIVO (RÉCORD) ================= */}
      <section
        style={{
          padding: 'clamp(2.5rem, 5vw, 4rem) 0',
          backgroundColor: '#07080B',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container-dojo">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {/* Tarjeta 1: Medallero General */}
            <div
              style={{
                backgroundColor: 'rgba(25, 29, 40, 0.65)',
                border: '1px solid rgba(250, 204, 21, 0.3)',
                borderRadius: '12px',
                padding: '1.5rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                <Trophy size={20} color="#FACC15" />
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#FACC15', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Récord Competitivo
                </span>
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1, marginBottom: '0.5rem' }}>
                +300
              </div>
              <p style={{ fontSize: '0.82rem', color: '#9FA6B8', margin: '0 0 1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Medallas Totales Oficiales
              </p>
              {/* Desglose de Medallas Oro, Plata, Bronce */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: '0.5rem',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  textAlign: 'center',
                }}
              >
                <div style={{ backgroundColor: 'rgba(250, 204, 21, 0.08)', padding: '0.4rem 0.2rem', borderRadius: '6px' }}>
                  <span style={{ display: 'block', fontSize: '1.1rem', fontWeight: 900, color: '#FACC15' }}>250</span>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#FDE047', textTransform: 'uppercase' }}>Oro 🥇</span>
                </div>
                <div style={{ backgroundColor: 'rgba(203, 213, 225, 0.08)', padding: '0.4rem 0.2rem', borderRadius: '6px' }}>
                  <span style={{ display: 'block', fontSize: '1.1rem', fontWeight: 900, color: '#E2E8F0' }}>30</span>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#CBD5E1', textTransform: 'uppercase' }}>Plata 🥈</span>
                </div>
                <div style={{ backgroundColor: 'rgba(249, 115, 22, 0.08)', padding: '0.4rem 0.2rem', borderRadius: '6px' }}>
                  <span style={{ display: 'block', fontSize: '1.1rem', fontWeight: 900, color: '#FB923C' }}>20</span>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#FDBA74', textTransform: 'uppercase' }}>Bronce 🥉</span>
                </div>
              </div>
            </div>

            {/* Tarjeta 2: Años de Trayectoria */}
            <div
              style={{
                backgroundColor: 'rgba(25, 29, 40, 0.65)',
                border: '1px solid rgba(140, 166, 248, 0.3)',
                borderRadius: '12px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                  <Sparkles size={20} color="#8CA6F8" />
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#8CA6F8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Experiencia Élite
                  </span>
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1, marginBottom: '0.5rem' }}>
                  9 Años
                </div>
                <p style={{ fontSize: '0.85rem', color: '#9FA6B8', margin: 0 }}>
                  Trayectoria deportiva activa en Karate Do competitivo y Kumite de alto rendimiento.
                </p>
              </div>
              <div
                style={{
                  marginTop: '1.25rem',
                  fontSize: '0.75rem',
                  color: '#CBD5E1',
                  backgroundColor: 'rgba(57, 79, 154, 0.2)',
                  padding: '0.4rem 0.75rem',
                  borderRadius: '6px',
                  display: 'inline-block',
                }}
              >
                Atleta en activo en el circuito mundial WKF
              </div>
            </div>

            {/* Tarjeta 3: Top 30 Mundial WKF */}
            <div
              style={{
                backgroundColor: 'rgba(25, 29, 40, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                  <Globe2 size={20} color="#38BDF8" />
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#38BDF8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Karate 1 Series A
                  </span>
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1, marginBottom: '0.5rem' }}>
                  Top 30
                </div>
                <p style={{ fontSize: '0.85rem', color: '#9FA6B8', margin: 0 }}>
                  Salzburgo, Austria • Ubicación estelar entre los 30 mejores karatecas en circuito mundial WKF.
                </p>
              </div>
              <div
                style={{
                  marginTop: '1.25rem',
                  fontSize: '0.75rem',
                  color: '#38BDF8',
                  backgroundColor: 'rgba(56, 189, 248, 0.1)',
                  padding: '0.4rem 0.75rem',
                  borderRadius: '6px',
                }}
              >
                Top 40 en Campeonato Mundial Senior WKF
              </div>
            </div>

            {/* Tarjeta 4: Dominio Regional y Nacional */}
            <div
              style={{
                backgroundColor: 'rgba(25, 29, 40, 0.65)',
                border: '1px solid rgba(229, 83, 83, 0.3)',
                borderRadius: '12px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                  <Flame size={20} color="#E55353" />
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#E55353', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Hegemonía Regional
                  </span>
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1, marginBottom: '0.5rem' }}>
                  5x Campeón
                </div>
                <p style={{ fontSize: '0.85rem', color: '#9FA6B8', margin: 0 }}>
                  Pentacampeón Centroamericano y Tetracampeón Nacional Escuela YI SIN MUN.
                </p>
              </div>
              <div
                style={{
                  marginTop: '1.25rem',
                  fontSize: '0.75rem',
                  color: '#FF8A8A',
                  backgroundColor: 'rgba(229, 83, 83, 0.1)',
                  padding: '0.4rem 0.75rem',
                  borderRadius: '6px',
                }}
              >
                Puesto 18 Panamericano WKF
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= APTITUDES & VALORES MARCIALES (LOS 4 PILARES) ================= */}
      <section style={{ padding: 'clamp(3.5rem, 6vw, 5.5rem) 0' }}>
        <div className="container-dojo">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 800,
                color: '#8CA6F8',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.5rem',
              }}
            >
              Filosofía de Instrucción & Combate
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '1rem', color: '#FFFFFF' }}>
              Aptitudes & Valores Formativos
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#9FA6B8', lineHeight: 1.7 }}>
              En el <strong>Dojo Ying Yang</strong>, la experiencia en la élite mundial se traduce en una metodología pedagógica rigurosa y humana, donde cada alumno forja su carácter bajo cuatro pilares inquebrantables.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1.75rem',
            }}
          >
            {/* Pilar 1 */}
            <div
              style={{
                backgroundColor: 'rgba(18, 21, 29, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '2rem 1.75rem',
                position: 'relative',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(229, 83, 83, 0.15)',
                  border: '1px solid rgba(229, 83, 83, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <Zap size={24} color="#E55353" />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#F7F8FA', marginBottom: '0.75rem' }}>
                Alto Rendimiento & Combate
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#9FA6B8', lineHeight: 1.65, margin: 0 }}>
                Dominio exhaustivo del Kumite contemporáneo WKF. Timing milimétrico, anticipación (Sen no sen), explosividad controlada y acondicionamiento neuromuscular de clase mundial.
              </p>
            </div>

            {/* Pilar 2 */}
            <div
              style={{
                backgroundColor: 'rgba(18, 21, 29, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '2rem 1.75rem',
                position: 'relative',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(57, 79, 154, 0.2)',
                  border: '1px solid rgba(140, 166, 248, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <Target size={24} color="#8CA6F8" />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#F7F8FA', marginBottom: '0.75rem' }}>
                Disciplina & Enfoque Táctico
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#9FA6B8', lineHeight: 1.65, margin: 0 }}>
                Lectura milimétrica del oponente y manejo estratégico de la distancia (Maai). La mente fría del Ying combinada con la contundencia resolutiva del Yang.
              </p>
            </div>

            {/* Pilar 3 */}
            <div
              style={{
                backgroundColor: 'rgba(18, 21, 29, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '2rem 1.75rem',
                position: 'relative',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(250, 204, 21, 0.12)',
                  border: '1px solid rgba(250, 204, 21, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <Shield size={24} color="#FACC15" />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#F7F8FA', marginBottom: '0.75rem' }}>
                Resiliencia Competitiva
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#9FA6B8', lineHeight: 1.65, margin: 0 }}>
                Templanza inquebrantable forjada en torneos mundiales en París, Austria y Panamericanos. Enseñar al estudiante a convertir la adversidad en impulso y fortaleza interior.
              </p>
            </div>

            {/* Pilar 4 */}
            <div
              style={{
                backgroundColor: 'rgba(18, 21, 29, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '2rem 1.75rem',
                position: 'relative',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(168, 85, 247, 0.15)',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <Users size={24} color="#C084FC" />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#F7F8FA', marginBottom: '0.75rem' }}>
                Liderazgo & Mentoría
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#9FA6B8', lineHeight: 1.65, margin: 0 }}>
                Compromiso directo del Sensei con cada alumno, guiando desde las bases infantiles hasta la preparación de cinturones negros con atención personalizada y ejemplo constante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PALMARÉS E HITOS COMPETITIVOS (INTERACTIVO) ================= */}
      <section
        style={{
          padding: 'clamp(3.5rem, 6vw, 5.5rem) 0',
          backgroundColor: '#090B10',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container-dojo">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 800,
                color: '#FACC15',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.5rem',
              }}
            >
              Registro Histórico Oficial
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '1rem', color: '#FFFFFF' }}>
              Palmarés e Hitos Competitivos
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#9FA6B8', lineHeight: 1.7 }}>
              Una trayectoria deportiva de alto calibre que respalda con hechos la calidad y seriedad marcial que se vive en el Dojo Ying Yang.
            </p>
          </div>

          {/* Selector / Filtro por Categorías */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.65rem',
              marginBottom: '3rem',
            }}
          >
            {[
              { id: 'all', label: 'Todos los Hitos' },
              { id: 'world', label: '🌍 Circuito Mundial WKF' },
              { id: 'continental', label: '🌎 Internacional & Continental' },
              { id: 'national', label: '🥋 Hegemonía Nacional (5x & 4x)' },
              { id: 'seminars', label: '🎓 Capacitación Élite Mundial' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as PalmaresCategory)}
                  style={{
                    padding: '0.65rem 1.25rem',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    borderRadius: '8px',
                    border: isActive
                      ? '1px solid rgba(140, 166, 248, 0.8)'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                    backgroundColor: isActive ? 'rgba(35, 52, 107, 0.6)' : 'rgba(18, 21, 29, 0.6)',
                    color: isActive ? '#FFFFFF' : '#9FA6B8',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isActive ? '0 4px 15px rgba(35, 52, 107, 0.35)' : 'none',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Cuadrícula de Hitos */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '1.5rem',
            }}
          >
            {filteredPalmares.map((item, index) => {
              const badgeStyle = getBadgeStyles(item.badgeColor);
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: 'rgba(18, 21, 29, 0.75)',
                    border: '1px solid rgba(255, 255, 255, 0.09)',
                    borderRadius: '12px',
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div>
                    {/* Header de la Tarjeta con Badges */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.5rem',
                        marginBottom: '1rem',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          padding: '0.3rem 0.65rem',
                          borderRadius: '4px',
                          backgroundColor: badgeStyle.bg,
                          border: `1px solid ${badgeStyle.border}`,
                          color: badgeStyle.text,
                        }}
                      >
                        {item.badge}
                      </span>
                      {item.location && (
                        <span
                          style={{
                            fontSize: '0.75rem',
                            color: '#94A3B8',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                          }}
                        >
                          <MapPin size={13} color="#8CA6F8" />
                          {item.location}
                        </span>
                      )}
                    </div>

                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        marginBottom: '0.35rem',
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: '#8CA6F8',
                        marginBottom: '0.85rem',
                      }}
                    >
                      {item.subtitle}
                    </p>
                    <p style={{ fontSize: '0.88rem', color: '#9FA6B8', lineHeight: 1.65, margin: 0 }}>
                      {item.description}
                    </p>
                  </div>

                  {item.highlight && (
                    <div
                      style={{
                        marginTop: '1.25rem',
                        paddingTop: '0.85rem',
                        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '0.78rem',
                      }}
                    >
                      <span style={{ color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Hito Competitivo
                      </span>
                      <span style={{ fontWeight: 800, color: '#F7F8FA' }}>{item.highlight}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CAPACITACIÓN CON LEYENDAS MUNDIALES ================= */}
      <section style={{ padding: 'clamp(3.5rem, 6vw, 5rem) 0' }}>
        <div className="container-dojo">
          <div
            style={{
              backgroundColor: 'linear-gradient(135deg, rgba(25, 29, 40, 0.9) 0%, rgba(14, 16, 22, 0.95) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '16px',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
                gap: '2.5rem',
                alignItems: 'center',
              }}
              className="seminar-grid"
            >
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '20px',
                    backgroundColor: 'rgba(239, 68, 68, 0.15)',
                    border: '1px solid rgba(239, 68, 68, 0.35)',
                    marginBottom: '1rem',
                  }}
                >
                  <GraduationCap size={16} color="#F87171" />
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#F87171', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Capacitación Técnica Internacional
                  </span>
                </div>
                <h3 style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.2rem)', color: '#FFFFFF', marginBottom: '1rem' }}>
                  Seminario Internacional de Alto Rendimiento
                </h3>
                <p style={{ fontSize: '1rem', color: '#9FA6B8', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  La técnica y metodología que Sensei Keylor imparte en el dojo ha sido perfeccionada y certificada directamente con campeones mundiales de karate:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <CheckCircle2 size={20} color="#8CA6F8" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: '#FFFFFF', fontSize: '1rem' }}>Junior Lefevre:</strong>
                      <span style={{ color: '#9FA6B8', fontSize: '0.92rem', marginLeft: '0.35rem' }}>
                        Campeón Mundial y múltiple Campeón Europeo de Karate. Una de las mentes técnicas más influyentes del Kumite global.
                      </span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <CheckCircle2 size={20} color="#E55353" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: '#FFFFFF', fontSize: '1rem' }}>Georgios Tzanos:</strong>
                      <span style={{ color: '#9FA6B8', fontSize: '0.92rem', marginLeft: '0.35rem' }}>
                        Campeón de los Juegos Mundiales y multicampeón europeo de Kumite, referente indiscutible de potencia y velocidad táctica.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recuadro de Garantía de Calidad Marcial */}
              <div
                style={{
                  backgroundColor: 'rgba(11, 13, 18, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '2rem',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(250, 204, 21, 0.12)',
                    border: '1px solid rgba(250, 204, 21, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem',
                  }}
                >
                  <Award size={32} color="#FACC15" />
                </div>
                <h4 style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                  Pedagogía de Nivel Mundial
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#9FA6B8', lineHeight: 1.6, margin: '0 0 1.25rem' }}>
                  No improvisamos. Cada plan de clase en el Dojo Ying Yang tiene fundamento biomecánico y táctico avalado por las máximas figuras del deporte olímpico.
                </p>
                <div
                  style={{
                    display: 'inline-block',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#8CA6F8',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Escuela YI SIN MUN & Dojo Ying Yang
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION FINAL ================= */}
      <section style={{ padding: 'clamp(2rem, 4vw, 3rem) 0' }}>
        <div className="container-dojo">
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(35, 52, 107, 0.35) 0%, rgba(142, 35, 35, 0.35) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '20px',
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ maxWidth: '720px', margin: '0 auto' }}>
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: '#FACC15',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '0.75rem',
                }}
              >
                Inicia Tu Formación con un Seleccionado Nacional
              </span>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  marginBottom: '1.25rem',
                }}
              >
                ¿Listo para Superar tus Límites en el Tatami?
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#CBD5E1', lineHeight: 1.7, marginBottom: '2.25rem' }}>
                Clases para niños, jóvenes y adultos. Desde iniciación marcial formativa hasta preparación para torneos de alto rendimiento con Sensei Keylor Alfaro.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '1.25rem',
                }}
              >
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    'Hola Sensei Keylor! Me gustaría agendar una clase de prueba y solicitar información de horarios en el Dojo Ying Yang.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-martial-primary"
                  style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}
                >
                  <Phone size={18} />
                  <span>Agendar Clase de Prueba por WhatsApp</span>
                </a>
                <Link
                  href="/contacto"
                  className="btn-martial-secondary"
                  style={{ padding: '0.95rem 2rem', fontSize: '1rem' }}
                >
                  <span>Ver Horarios & Ubicación</span>
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 960px) {
          .hero-sensei-grid,
          .seminar-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
