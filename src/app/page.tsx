'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { ChevronRight, Users, Droplets, Flame } from 'lucide-react';

export default function HomePage() {
  const { openAuthModal } = useAuth();

  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: 'calc(100vh - 76px)', display: 'flex', alignItems: 'center' }}>
      {/* ================= HERO SECTION (PANTALLA COMPLETA) ================= */}
      <section
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 'clamp(2rem, 4vw, 3.5rem)',
          paddingBottom: 'clamp(2.5rem, 5vw, 4rem)',
          position: 'relative',
        }}
      >
        <div className="container-dojo" style={{ width: '100%' }}>
          <div
            className="hero-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.85fr)',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'clamp(2.5rem, 5vw, 6rem)',
              width: '100%',
            }}
          >
            {/* Columna Izquierda: Texto y Acciones */}
            <div style={{ maxWidth: '780px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.45rem 1rem',
                  borderRadius: '30px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#CBD5E1',
                  marginBottom: '1.5rem',
                }}
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#E55353' }} />
                <span>Dojo Tradicional & Deportivo • Linaje Marcial</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.4rem, 5.2vw, 4.5rem)',
                  lineHeight: 1.06,
                  fontWeight: 900,
                  letterSpacing: '0.02em',
                  marginBottom: '1.5rem',
                }}
              >
                DISCIPLINA, PODER <br />
                <span
                  style={{
                    background: 'linear-gradient(90deg, #8CA6F8 0%, #FFFFFF 50%, #FF8A8A 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Y EQUILIBRIO
                </span>
              </h1>

              <p
                style={{
                  fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                  lineHeight: 1.7,
                  color: '#9DA3B4',
                  maxWidth: '680px',
                  marginBottom: '2.25rem',
                }}
              >
                Forjamos mente, cuerpo y espíritu a través del Karate Do. Descubre la armonía entre la serenidad reflexiva del <strong>Ying</strong> y la fuerza contundente del <strong>Yang</strong>.
              </p>

              {/* Botones de Acción */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  alignItems: 'center',
                }}
              >
                <Link href="/contacto" className="btn-martial-primary">
                  <span>Clase Muestra Sin Costo</span>
                  <ChevronRight size={18} />
                </Link>

                <button
                  onClick={openAuthModal}
                  className="btn-martial-secondary"
                >
                  <Users size={18} />
                  <span>Portal Alumnos</span>
                </button>
              </div>

              {/* Badges Rápidos / Trayectoria */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'clamp(1.2rem, 3vw, 2.5rem)',
                  marginTop: '2.5rem',
                  paddingTop: '2rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div>
                  <p style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 900, color: '#F7F8FA', margin: 0, lineHeight: 1 }}>+25</p>
                  <p style={{ fontSize: '0.78rem', color: '#9FA6B8', margin: '0.35rem 0 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Años de Trayectoria</p>
                </div>
                <div style={{ width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
                <div>
                  <p style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 900, color: '#8CA6F8', margin: 0, lineHeight: 1 }}>38+</p>
                  <p style={{ fontSize: '0.78rem', color: '#9FA6B8', margin: '0.35rem 0 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Cinturones Negros</p>
                </div>
                <div style={{ width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
                <div>
                  <p style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 900, color: '#FF8A8A', margin: 0, lineHeight: 1 }}>140+</p>
                  <p style={{ fontSize: '0.78rem', color: '#9FA6B8', margin: '0.35rem 0 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Alumnos Activos</p>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta Glassmorphic con el Logo Oficial */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
              }}
            >
              <div
                style={{
                  width: '100%',
                  maxWidth: '520px',
                  background: 'linear-gradient(145deg, rgba(25, 29, 40, 0.75) 0%, rgba(13, 14, 18, 0.95) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '16px',
                  padding: 'clamp(2rem, 4vw, 3rem)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 60px rgba(35, 52, 107, 0.25)',
                  position: 'relative',
                  overflow: 'hidden',
                  textAlign: 'center',
                }}
              >
                {/* Kanji de Fondo en Marca de Agua */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '14rem',
                    fontWeight: 900,
                    color: 'rgba(255, 255, 255, 0.02)',
                    userSelect: 'none',
                    pointerEvents: 'none',
                    fontFamily: 'serif',
                  }}
                >
                  空手
                </div>

                {/* Símbolo Central: Logo Oficial */}
                <div
                  style={{
                    width: 'clamp(180px, 30vw, 250px)',
                    height: 'clamp(180px, 30vw, 250px)',
                    margin: '0 auto 1.5rem',
                    position: 'relative',
                    filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.5))',
                  }}
                >
                  <Image
                    src="/images/logos/Logo_Blanco_Color_Transparente.png"
                    alt="Logo Insignia Dojo Ying Yang"
                    fill
                    sizes="(max-width: 768px) 200px, 250px"
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>

                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 900,
                    letterSpacing: '0.1em',
                    marginBottom: '0.5rem',
                    color: '#F7F8FA',
                  }}
                >
                  陰陽空手道場
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#9FA6B8', margin: '0 auto 1.5rem', maxWidth: '360px', lineHeight: 1.5 }}>
                  El arte de vencer sin luchar y la firmeza del golpe que nace de la calma interior.
                </p>

                {/* Dualidad Ying Yang Badges */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                  <div
                    style={{
                      padding: '0.85rem',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(35, 52, 107, 0.25)',
                      border: '1px solid rgba(57, 79, 154, 0.4)',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#8CA6F8', fontWeight: 700, fontSize: '0.85rem' }}>
                      <Droplets size={16} />
                      <span>YING (陰)</span>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: '#9FA6B8', margin: '0.3rem 0 0' }}>
                      Técnica, defensa, fluidez, concentración y autocontrol.
                    </p>
                  </div>

                  <div
                    style={{
                      padding: '0.85rem',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(142, 35, 35, 0.25)',
                      border: '1px solid rgba(184, 49, 49, 0.4)',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#FF8A8A', fontWeight: 700, fontSize: '0.85rem' }}>
                      <Flame size={16} />
                      <span>YANG (陽)</span>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: '#9FA6B8', margin: '0.3rem 0 0' }}>
                      Impacto, potencia, espíritu indomable y resolución.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media query para grid responsivo */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
