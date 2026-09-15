import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Award, Compass, HeartHandshake, CheckCircle2, ChevronRight, UserCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nosotros | Dojo de Karate Ying Yang',
  description: 'Conoce la historia, linaje marcial, instructores y normas de etiqueta de nuestro dojo de karate.',
};

export default function NosotrosPage() {
  const instructors = [
    {
      name: 'Shihan Kenzo Takahashi',
      title: 'Director Técnico & Fundador',
      dan: 'Cinturón Negro 6° Dan',
      experience: '35+ Años de Práctica',
      specialty: 'Katas Superiores, Filosofía & Bunkai',
      badgeColor: '#111827',
      bio: 'Formado directamente en artes marciales tradicionales. Ha dedicado su vida a preservar la esencia marcial original, formando a más de 38 cinturones negros y jueces internacionales.'
    },
    {
      name: 'Sensei Roberto Morales',
      title: 'Entrenador Jefe de Kumite',
      dan: 'Cinturón Negro 4° Dan',
      experience: '18 Años de Práctica',
      specialty: 'Kumite Deportivo WKF & Preparación Atlética',
      badgeColor: '#B83131',
      bio: 'Ex-competidor internacional y medallista Panamericano. Combina la ciencia del entrenamiento deportivo contemporáneo con la contundencia del karate de combate.'
    },
    {
      name: 'Sensei Laura Silva',
      title: 'Coordinadora de Karate Formativo & Infantil',
      dan: 'Cinturón Negro 3er Dan',
      experience: '14 Años de Práctica',
      specialty: 'Psicomotricidad Infantil & Arbitraje Federado',
      badgeColor: '#394F9A',
      bio: 'Especialista en pedagogía deportiva y desarrollo infantil. Guía a los más pequeños en la incorporación de hábitos de orden, disciplina y seguridad en sí mismos.'
    }
  ];

  const dojoRules = [
    {
      num: '01',
      title: 'Saludo de Respeto (Rei)',
      desc: 'Saludar con una reverencia respetuosa al entrar y salir del tatami, reconociendo el espacio sagrado de superación.'
    },
    {
      num: '02',
      title: 'Cuidado del Karategi',
      desc: 'El uniforme blanco debe estar siempre limpio, presentable y con el cinturón correctamente atado como reflejo de orden interno.'
    },
    {
      num: '03',
      title: 'Puntualidad & Presencia',
      desc: 'Llegar 10 minutos antes del inicio de la sesión para preparar el cuerpo y despejar la mente del estrés exterior.'
    },
    {
      num: '04',
      title: 'Vínculo Senpai - Kohai',
      desc: 'Los alumnos avanzados guían y cuidan con paciencia a los principiantes; los novatos responden con escucha y humildad.'
    }
  ];

  return (
    <div style={{ paddingBottom: '5rem' }}>
      {/* ================= HERO NOSOTROS ================= */}
      <section
        style={{
          padding: 'clamp(3rem, 6vw, 5rem) 0 3rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          backgroundColor: '#0C0E14',
          position: 'relative',
        }}
      >
        <div className="container-dojo">
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#8CA6F8',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Linaje, Historia & Tradición
            </span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', marginBottom: '1.25rem' }}>
              Sobre el Dojo Ying Yang
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#9DA3B4', lineHeight: 1.7 }}>
              Nacimos con el firme propósito de ser más que una academia deportiva: un santuario donde cada alumno descubre su máximo potencial físico y cultiva una mente inquebrantable.
            </p>
          </div>
        </div>
      </section>

      {/* ================= HISTORIA & LINAJE ================= */}
      <section style={{ padding: 'clamp(3.5rem, 7vw, 5.5rem) 0' }}>
        <div className="container-dojo">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FF8A8A', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                Nuestra Génesis
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', marginBottom: '1.25rem' }}>
                El Principio del Equilibrio
              </h2>
              <p style={{ fontSize: '1rem', color: '#9DA3B4', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Fundado hace más de dos décadas, el <strong>Dojo Ying Yang</strong> toma su nombre del principio universal de la complementariedad. Creemos que la fuerza bruta sin control mental es destructiva, y que la calma sin capacidad de respuesta es vulnerable.
              </p>
              <p style={{ fontSize: '1rem', color: '#9DA3B4', lineHeight: 1.7, marginBottom: '2rem' }}>
                Nuestro método entrena al practicante en ambos polos: el <strong>Ying</strong> (la serenidad, el esquive elástico, la estrategia fría y la compasión) y el <strong>Yang</strong> (la explosividad del impacto, la decisión implacable y el coraje frente al reto).
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div style={{ padding: '1.25rem', backgroundColor: '#131620', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '8px' }}>
                  <Award size={24} color="#8CA6F8" style={{ marginBottom: '0.5rem' }} />
                  <h4 style={{ fontSize: '1.1rem', margin: 0, color: '#F7F8FA' }}>Afiliación Oficial</h4>
                  <p style={{ fontSize: '0.82rem', color: '#9DA3B4', margin: '0.35rem 0 0' }}>Reconocidos por federaciones nacionales e internacionales de Karate Do.</p>
                </div>
                <div style={{ padding: '1.25rem', backgroundColor: '#131620', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '8px' }}>
                  <Shield size={24} color="#FF8A8A" style={{ marginBottom: '0.5rem' }} />
                  <h4 style={{ fontSize: '1.1rem', margin: 0, color: '#F7F8FA' }}>Espacio Seguro</h4>
                  <p style={{ fontSize: '0.82rem', color: '#9DA3B4', margin: '0.35rem 0 0' }}>Ambiente familiar con protocolos estrictos de cuidado y cero tolerancia al abuso.</p>
                </div>
              </div>
            </div>

            {/* Ilustración de Marca con Logo y Marco Ceremonial */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '100%',
                  maxWidth: '440px',
                  backgroundColor: '#11141C',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '16px',
                  padding: '2.5rem',
                  textAlign: 'center',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
                }}
              >
                <div
                  style={{
                    width: '160px',
                    height: '160px',
                    margin: '0 auto 1.5rem',
                    position: 'relative',
                  }}
                >
                  <Image
                    src="/images/logos/Logo_Blanco_Transparente.png"
                    alt="Emblema Dojo Ying Yang"
                    fill
                    sizes="160px"
                    style={{ objectFit: 'contain' }}
                  />
                </div>

                <h3 style={{ fontSize: '1.3rem', color: '#F7F8FA', marginBottom: '0.5rem' }}>
                  Uniformes & Grados Certificados
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#9DA3B4', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Todos los cinturones y grados emitidos en nuestro dojo están avalados con certificado de autenticidad y registro de linaje.
                </p>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    fontSize: '0.8rem',
                    color: '#CBD5E1',
                  }}
                >
                  <span style={{ padding: '0.35rem 0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px' }}>
                    Kata
                  </span>
                  <span style={{ padding: '0.35rem 0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px' }}>
                    Kumite
                  </span>
                  <span style={{ padding: '0.35rem 0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px' }}>
                    Bunkai
                  </span>
                  <span style={{ padding: '0.35rem 0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px' }}>
                    Kihon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CUADRO DE PROFESORES ================= */}
      <section
        style={{
          padding: 'clamp(4rem, 8vw, 6rem) 0',
          backgroundColor: '#0A0C11',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div className="container-dojo">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#8CA6F8', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
              Maestros & Formadores
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', marginBottom: '1rem' }}>
              Nuestro Cuadro Técnico
            </h2>
            <p style={{ fontSize: '1rem', color: '#9DA3B4' }}>
              Instructores certificados con trayectoria comprobada y vocación de enseñanza para todas las edades.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '2rem',
            }}
          >
            {instructors.map((prof) => (
              <div
                key={prof.name}
                className="glass-panel"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: `4px solid ${prof.badgeColor === '#111827' ? '#FFFFFF' : prof.badgeColor}`,
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        backgroundColor: '#191E2C',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#F7F8FA',
                      }}
                    >
                      <UserCheck size={26} />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.25rem 0.65rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: '#F7F8FA',
                      }}
                    >
                      <Award size={14} color="#ECC94B" />
                      <span>{prof.dan.split(' ')[2] || 'DAN'}</span>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', color: '#F7F8FA', marginBottom: '0.25rem' }}>
                    {prof.name}
                  </h3>
                  <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#8CA6F8', marginBottom: '0.25rem' }}>
                    {prof.title}
                  </p>
                  <p style={{ fontSize: '0.78rem', color: '#E2E8F0', marginBottom: '1.25rem' }}>
                    {prof.dan} • {prof.experience}
                  </p>

                  <p style={{ fontSize: '0.9rem', color: '#9DA3B4', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {prof.bio}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    fontSize: '0.8rem',
                    color: '#CBD5E1',
                  }}
                >
                  <strong style={{ color: '#F7F8FA' }}>Especialidad:</strong> {prof.specialty}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CÓDIGO DE ETIQUETA ================= */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="container-dojo">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FF8A8A', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
              Protocolo en el Tatami
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
              Código de Etiqueta & Respeto
            </h2>
            <p style={{ fontSize: '1rem', color: '#9DA3B4' }}>
              El karate comienza con el respeto y concluye con el respeto. Estas son las normas que rigen la vida en nuestro dojo:
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '1.5rem',
            }}
          >
            {dojoRules.map((rule) => (
              <div
                key={rule.title}
                style={{
                  backgroundColor: '#12151E',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '1.1rem', color: '#F7F8FA', margin: 0 }}>{rule.title}</h4>
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'rgba(140, 166, 248, 0.5)', letterSpacing: '0.05em' }}>
                    {rule.num}
                  </span>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#9DA3B4', lineHeight: 1.6, margin: 0 }}>
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link href="/contacto" className="btn-martial-primary" style={{ padding: '0.9rem 2.25rem' }}>
              <span>Ven a Conocer Nuestras Instalaciones</span>
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
