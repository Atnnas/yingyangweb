'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import {
  Shield,
  Award,
  Zap,
  Users,
  ChevronRight,
  Clock,
  Calendar,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Flame,
  Droplets,
  Compass
} from 'lucide-react';

export default function HomePage() {
  const { openAuthModal } = useAuth();
  const [activeScheduleDay, setActiveScheduleDay] = useState<'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes' | 'Sábado'>('Lunes');

  const disciplines = [
    {
      title: 'Karate Infantil',
      subtitle: 'Little Warriors (4 a 11 años)',
      kanji: '少年空手',
      description: 'Desarrolla disciplina, psicomotricidad, enfoque y respeto mutuo en un ambiente seguro, divertido y con valores marciales.',
      intensity: 'Media',
      theme: 'ying',
      features: [
        'Desarrollo de coordinación y reflejos',
        'Fomento de la disciplina escolar y en casa',
        'Técnicas anti-bullying y autoconfianza',
        'Grupos reducidos con instructores dedicados'
      ],
      schedule: 'Lun, Mié y Vie • 16:30 - 17:30'
    },
    {
      title: 'Karate Tradicional',
      subtitle: 'Katas & Bunkai (Juveniles y Adultos)',
      kanji: '伝統空手',
      description: 'El corazón del arte marcial de Okinawa. Estudio profundo de formas (Katas), aplicaciones reales de combate y fortalecimiento mental.',
      intensity: 'Media - Alta',
      theme: 'yang',
      features: [
        'Técnicas depuradas de golpeo y bloqueo',
        'Defensa personal práctica y eficaz',
        'Filosofía Bushido y respiración consciente',
        'Apto desde principiantes hasta avanzados'
      ],
      schedule: 'Lun, Mié y Vie • 19:00 - 20:30'
    },
    {
      title: 'Kumite Deportivo',
      subtitle: 'Alta Competencia (WKF)',
      kanji: '組手競技',
      description: 'Entrenamiento táctico y atlético de máxima intensidad para atletas interesados en torneos oficiales y ranking nacional e internacional.',
      intensity: 'Competición',
      theme: 'yang',
      features: [
        'Estrategia de combate por puntos WKF',
        'Velocidad de reacción y desplazamientos',
        'Acondicionamiento físico de alto rendimiento',
        'Participación en copas y campeonatos'
      ],
      schedule: 'Mar y Jue • 19:30 - 21:30 | Sáb • 09:00'
    },
    {
      title: 'Defensa Personal & Forma',
      subtitle: 'Control & Reacción Rápida',
      kanji: '護身術',
      description: 'Técnicas instintivas de escape, neutralización rápida ante agresiones comunes y acondicionamiento cardiovascular integral.',
      intensity: 'Media - Alta',
      theme: 'ying',
      features: [
        'Neutralización de agarres y amenazas',
        'Conciencia situacional y manejo del pánico',
        'Acondicionamiento físico funcional',
        'Sin límite de edad ni experiencia previa'
      ],
      schedule: 'Mar y Jue • 18:00 - 19:15'
    }
  ];

  const beltStages = [
    { color: '#FFFFFF', name: 'Blanco', kyu: '9° Kyu', desc: 'Pureza, inicio de la senda' },
    { color: '#EAB308', name: 'Amarillo', kyu: '8° Kyu', desc: 'Primer destello de técnica' },
    { color: '#F97316', name: 'Naranja', kyu: '7° Kyu', desc: 'Fortalecimiento de la postura' },
    { color: '#22C55E', name: 'Verde', kyu: '6° Kyu', desc: 'Crecimiento y fluidez' },
    { color: '#3B82F6', name: 'Azul', kyu: '5° y 4° Kyu', desc: 'Control y madurez técnica' },
    { color: '#854D0E', name: 'Marrón', kyu: '3° al 1er Kyu', desc: 'Solidez marcial previa al Dan' },
    { color: '#111827', name: 'Negro', kyu: '1er Dan+', desc: 'Maestría y verdadero comienzo', isBlack: true }
  ];

  const scheduleData: Record<string, Array<{ time: string; title: string; level: string; sensei: string; badge: 'ying' | 'yang' }>> = {
    Lunes: [
      { time: '16:30 - 17:30', title: 'Karate Infantil Iniciación', level: 'Blanco a Naranja', sensei: 'Sensei Roberto M.', badge: 'ying' },
      { time: '17:45 - 18:45', title: 'Karate Juvenil Formativo', level: 'Verde a Marrón', sensei: 'Sensei Roberto M.', badge: 'ying' },
      { time: '19:00 - 20:30', title: 'Karate Tradicional & Katas', level: 'Adultos Todos los niveles', sensei: 'Shihan Takahashi', badge: 'yang' },
      { time: '20:30 - 21:30', title: 'Entrenamiento Libre / Bunkai', level: 'Cinturones Avanzados', sensei: 'Instructores Dan', badge: 'yang' }
    ],
    Martes: [
      { time: '17:00 - 18:00', title: 'Fundamentos Técnicos (Kihon)', level: 'Todos los niveles', sensei: 'Sensei Laura S.', badge: 'ying' },
      { time: '18:15 - 19:30', title: 'Defensa Personal Urbana', level: 'Jóvenes y Adultos', sensei: 'Sensei Roberto M.', badge: 'ying' },
      { time: '19:45 - 21:30', title: 'Kumite Deportivo de Élite', level: 'Competidores y Grados Dan', sensei: 'Shihan Takahashi', badge: 'yang' }
    ],
    Miércoles: [
      { time: '16:30 - 17:30', title: 'Karate Infantil Psicomotriz', level: 'Niños 4 a 10 años', sensei: 'Sensei Laura S.', badge: 'ying' },
      { time: '17:45 - 18:45', title: 'Karate Juvenil Avanzado', level: 'Azul a Marrón', sensei: 'Sensei Roberto M.', badge: 'ying' },
      { time: '19:00 - 20:30', title: 'Karate Tradicional & Respiración', level: 'Adultos', sensei: 'Shihan Takahashi', badge: 'yang' }
    ],
    Jueves: [
      { time: '17:30 - 18:45', title: 'Kihon & Potencia Marcial', level: 'Intermedios', sensei: 'Sensei Laura S.', badge: 'ying' },
      { time: '19:00 - 20:30', title: 'Kumite Táctico & Desplazamientos', level: 'Competencia', sensei: 'Shihan Takahashi', badge: 'yang' },
      { time: '20:30 - 21:30', title: 'Preparación Física Marcial', level: 'General', sensei: 'Sensei Roberto M.', badge: 'yang' }
    ],
    Viernes: [
      { time: '16:30 - 17:30', title: 'Clase de Integración Infantil', level: 'Infantil General', sensei: 'Sensei Laura S.', badge: 'ying' },
      { time: '18:00 - 19:30', title: 'Clínica de Katas Superiores', level: 'Marrón y Negro', sensei: 'Shihan Takahashi', badge: 'yang' },
      { time: '19:30 - 21:00', title: 'Sparring Marcial Controlado', level: 'Adultos', sensei: 'Cuadro Técnico', badge: 'yang' }
    ],
    Sábado: [
      { time: '08:30 - 10:00', title: 'Entrenamiento Matutino de Cinturones Negros', level: 'Grados Dan', sensei: 'Shihan Takahashi', badge: 'yang' },
      { time: '10:15 - 11:30', title: 'Taller de Exámenes de Grado', level: 'Aspirantes a Ascenso', sensei: 'Tribunal Técnico', badge: 'ying' },
      { time: '11:45 - 13:00', title: 'Clase Abierta para Familias & Prueba', level: 'Abierto al Público', sensei: 'Sensei Roberto M.', badge: 'ying' }
    ]
  };

  const dojoKunItems = [
    { kanji: '一、人格完成に努むること', spanish: 'Perfeccionar el carácter personal y cultivar la rectitud de espíritu.' },
    { kanji: '一、誠の道を守ること', spanish: 'Ser leal, sincero y honesto en todas las acciones de la vida.' },
    { kanji: '一、努力の精神を養うこと', spanish: 'Fomentar el esfuerzo continuo y la superación personal sin rendirse.' },
    { kanji: '一、礼儀を重んずること', spanish: 'Respetar a los demás y practicar siempre la cortesía y la humildad.' },
    { kanji: '一、血気の勇を戒むること', spanish: 'Abstenerse de conductas violentas y dominar el ímpetu irracional.' }
  ];

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* ================= HERO SECTION ================= */}
      <section
        style={{
          minHeight: 'calc(90vh - 76px)',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 'clamp(2.5rem, 6vw, 4.5rem)',
          paddingBottom: 'clamp(3rem, 7vw, 5.5rem)',
          position: 'relative',
        }}
      >
        <div className="container-dojo">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
              alignItems: 'center',
              gap: 'clamp(2rem, 5vw, 4rem)',
            }}
          >
            {/* Texto y Acciones */}
            <div>
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
                  fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)',
                  lineHeight: 1.08,
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
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  lineHeight: 1.7,
                  color: '#9DA3B4',
                  maxWidth: '580px',
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

              {/* Badges Rápidos */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                  marginTop: '2.5rem',
                  paddingTop: '2rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div>
                  <p style={{ fontSize: '1.75rem', fontWeight: 900, color: '#F7F8FA', margin: 0, lineHeight: 1 }}>+25</p>
                  <p style={{ fontSize: '0.78rem', color: '#9FA6B8', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Años de Trayectoria</p>
                </div>
                <div style={{ width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
                <div>
                  <p style={{ fontSize: '1.75rem', fontWeight: 900, color: '#8CA6F8', margin: 0, lineHeight: 1 }}>38+</p>
                  <p style={{ fontSize: '0.78rem', color: '#9FA6B8', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Cinturones Negros</p>
                </div>
                <div style={{ width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
                <div>
                  <p style={{ fontSize: '1.75rem', fontWeight: 900, color: '#FF8A8A', margin: 0, lineHeight: 1 }}>140+</p>
                  <p style={{ fontSize: '0.78rem', color: '#9FA6B8', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Alumnos Activos</p>
                </div>
              </div>
            </div>

            {/* Composición Visual Central con el Logo Oficial */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              {/* Tarjeta Glassmorphic con el Logo del Dojo */}
              <div
                style={{
                  width: '100%',
                  maxWidth: '480px',
                  background: 'linear-gradient(145deg, rgba(25, 29, 40, 0.75) 0%, rgba(13, 14, 18, 0.95) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '16px',
                  padding: 'clamp(2rem, 5vw, 3rem)',
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
                    width: 'clamp(180px, 35vw, 240px)',
                    height: 'clamp(180px, 35vw, 240px)',
                    margin: '0 auto 1.5rem',
                    position: 'relative',
                    filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.5))',
                  }}
                >
                  <Image
                    src="/images/logos/Logo_Blanco_Color_Transparente.png"
                    alt="Logo Insignia Dojo Ying Yang"
                    fill
                    sizes="(max-width: 768px) 200px, 240px"
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
                <p style={{ fontSize: '0.88rem', color: '#9FA6B8', margin: '0 auto 1.5rem', maxWidth: '340px' }}>
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

      {/* ================= FILOSOFÍA DEL SÍMBOLO ================= */}
      <section
        style={{
          padding: 'clamp(4rem, 8vw, 6rem) 0',
          backgroundColor: '#0E1017',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          position: 'relative',
        }}
      >
        <div className="container-dojo">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#8CA6F8',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.5rem',
              }}
            >
              Identidad & Simbología
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', marginBottom: '1rem' }}>
              El Significado de Nuestro Emblema
            </h2>
            <p style={{ fontSize: '1rem', color: '#9DA3B4' }}>
              Cada trazo de nuestro logotipo encierra los tres pilares milenarios del camino del karateka:
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '2rem',
            }}
          >
            {/* Elemento 1 */}
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(35, 52, 107, 0.3)',
                  border: '1px solid rgba(57, 79, 154, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#8CA6F8',
                  marginBottom: '1.25rem',
                }}
              >
                <Compass size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem' }}>El Ensō (Círculo Zen)</h3>
              <p style={{ fontSize: '0.9rem', color: '#9DA3B4', lineHeight: 1.6 }}>
                El trazo circular que enmarca todo representa el infinito, la perfección inacabada y la mente despejada (*Mushin*). Nos recuerda que el aprendizaje nunca termina.
              </p>
            </div>

            {/* Elemento 2 */}
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F7F8FA',
                  marginBottom: '1.25rem',
                }}
              >
                <Shield size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem' }}>El Cráter de Impacto</h3>
              <p style={{ fontSize: '0.9rem', color: '#9DA3B4', lineHeight: 1.6 }}>
                La formación rocosa simboliza el arraigo, la estabilidad de las posturas básicas (*Dachi*) y la capacidad inquebrantable de resistir ante los embates de la vida.
              </p>
            </div>

            {/* Elemento 3 */}
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(142, 35, 35, 0.3)',
                  border: '1px solid rgba(184, 49, 49, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FF8A8A',
                  marginBottom: '1.25rem',
                }}
              >
                <Zap size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem' }}>El Lago Taijitu</h3>
              <p style={{ fontSize: '0.9rem', color: '#9DA3B4', lineHeight: 1.6 }}>
                El agua en el centro adopta la forma del Yin Yang: nada es puramente blando ni puramente duro. La técnica verdadera es adaptable como el agua y contundente como el relámpago.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROGRAMAS / DISCIPLINAS ================= */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6.5rem) 0', position: 'relative' }}>
        <div className="container-dojo">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#FF8A8A',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.5rem',
              }}
            >
              Programas Marciales
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', marginBottom: '1rem' }}>
              Encuentra Tu Camino en el Tatami
            </h2>
            <p style={{ fontSize: '1rem', color: '#9DA3B4' }}>
              Planes de formación diseñados para cada etapa de la vida, desde pequeños guerreros hasta competidores y adultos.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '2rem',
            }}
          >
            {disciplines.map((item) => (
              <div
                key={item.title}
                className="glass-panel"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '2rem',
                  borderTop: item.theme === 'yang' ? '3px solid #E55353' : '3px solid #4F6BFF',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', color: '#9DA3B4', textTransform: 'uppercase' }}>
                        {item.subtitle}
                      </span>
                      <h3 style={{ fontSize: '1.4rem', marginTop: '0.25rem', color: '#F7F8FA' }}>{item.title}</h3>
                    </div>
                    <span style={{ fontSize: '1.5rem', fontWeight: 900, color: 'rgba(255, 255, 255, 0.15)' }}>
                      {item.kanji}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: '#9DA3B4', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {item.description}
                  </p>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', color: '#CBD5E1', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                      Beneficios Clave:
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {item.features.map((feat) => (
                        <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#9DA3B4' }}>
                          <CheckCircle2 size={15} color={item.theme === 'yang' ? '#E55353' : '#4F6BFF'} style={{ flexShrink: 0 }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      padding: '0.75rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '6px',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      fontSize: '0.8rem',
                      color: '#CBD5E1',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <Clock size={15} color="#E2E8F0" />
                    <span>{item.schedule}</span>
                  </div>

                  <Link
                    href="/contacto"
                    className="btn-martial-secondary"
                    style={{ width: '100%', fontSize: '0.85rem', padding: '0.7rem 1rem' }}
                  >
                    Agendar Clase
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ESCALA DE CINTURONES ================= */}
      <section
        style={{
          padding: 'clamp(3.5rem, 6vw, 5rem) 0',
          backgroundColor: '#090A0D',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div className="container-dojo">
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 2.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', marginBottom: '0.5rem' }}>
              El Camino de los Cinturones
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#9DA3B4' }}>
              En el Dojo Ying Yang cada grado representa una conquista sobre uno mismo.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '1rem',
            }}
          >
            {beltStages.map((b) => (
              <div
                key={b.name}
                style={{
                  backgroundColor: '#12141C',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  padding: '1.25rem 0.85rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.65rem',
                }}
              >
                {/* Visualización del Cinturón con su nudo */}
                <div
                  style={{
                    width: '100%',
                    height: '14px',
                    backgroundColor: b.color,
                    borderRadius: '2px',
                    border: b.isBlack ? '1px solid #374151' : '1px solid rgba(0,0,0,0.2)',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.4)',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '10px',
                      height: '18px',
                      backgroundColor: b.color,
                      border: '1px solid rgba(0,0,0,0.3)',
                    }}
                  />
                </div>

                <div>
                  <p style={{ fontSize: '0.95rem', fontWeight: 800, color: '#F7F8FA', margin: 0 }}>{b.name}</p>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#8CA6F8', margin: '0.15rem 0' }}>{b.kyu}</p>
                  <p style={{ fontSize: '0.7rem', color: '#9DA3B4', margin: 0 }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HORARIOS INTERACTIVOS ================= */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6.5rem) 0' }}>
        <div className="container-dojo">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#8CA6F8',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.5rem',
              }}
            >
              Planifica Tu Entrenamiento
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', marginBottom: '1rem' }}>
              Horarios Semanales del Dojo
            </h2>
            <p style={{ fontSize: '1rem', color: '#9DA3B4' }}>
              Selecciona un día de la semana para explorar las sesiones de entrenamiento dirigidas por nuestros maestros.
            </p>
          </div>

          {/* Selector de Días */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem',
              marginBottom: '2.5rem',
            }}
          >
            {(['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'] as const).map((day) => {
              const isActive = activeScheduleDay === day;
              return (
                <button
                  key={day}
                  onClick={() => setActiveScheduleDay(day)}
                  style={{
                    padding: '0.65rem 1.4rem',
                    borderRadius: '6px',
                    border: isActive ? '1px solid #4F6BFF' : '1px solid rgba(255, 255, 255, 0.1)',
                    backgroundColor: isActive ? 'rgba(35, 52, 107, 0.6)' : '#141722',
                    color: isActive ? '#FFFFFF' : '#9DA3B4',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Lista de Clases del Día Seleccionado */}
          <div
            style={{
              maxWidth: '860px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {scheduleData[activeScheduleDay]?.map((c, i) => (
              <div
                key={i}
                className="glass-panel"
                style={{
                  padding: '1.25rem 1.75rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', minWidth: '220px' }}>
                  <div
                    style={{
                      padding: '0.5rem 0.85rem',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: '#F7F8FA',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <Clock size={15} color="#8CA6F8" />
                    <span>{c.time}</span>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '1.1rem', margin: 0, color: '#F7F8FA' }}>{c.title}</h4>
                    <p style={{ fontSize: '0.8rem', color: '#9DA3B4', margin: '0.2rem 0 0' }}>
                      Nivel: <strong style={{ color: '#E2E8F0' }}>{c.level}</strong>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <span style={{ fontSize: '0.85rem', color: '#9DA3B4' }}>
                    Instructor: <strong style={{ color: '#FFFFFF' }}>{c.sensei}</strong>
                  </span>
                  <Link
                    href="/contacto"
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: c.badge === 'yang' ? '#FF8A8A' : '#8CA6F8',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                    }}
                  >
                    <span>Reservar</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DOJO KUN ================= */}
      <section
        style={{
          padding: 'clamp(4rem, 8vw, 6rem) 0',
          backgroundColor: '#0A0C11',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div className="container-dojo">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FF8A8A', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
              Código de Honor
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '0.85rem' }}>
              Dojo Kun (道場訓)
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#9DA3B4' }}>
              Los cinco preceptos que recitamos y aplicamos al final de cada entrenamiento en el tatami.
            </p>
          </div>

          <div
            style={{
              maxWidth: '820px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {dojoKunItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#12151F',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem',
                    fontWeight: 900,
                    color: idx % 2 === 0 ? '#8CA6F8' : '#FF8A8A',
                    flexShrink: 0,
                  }}
                >
                  {idx + 1}
                </div>
                <div>
                  <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F7F8FA', margin: 0 }}>
                    {item.spanish}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: '#687187', margin: '0.2rem 0 0', fontFamily: 'serif' }}>
                    {item.kanji}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section
        style={{
          padding: 'clamp(4.5rem, 9vw, 7rem) 0',
          background: 'linear-gradient(180deg, #0A0C11 0%, #131724 100%)',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div className="container-dojo">
          <div
            style={{
              maxWidth: '680px',
              margin: '0 auto',
              backgroundColor: 'rgba(18, 22, 32, 0.9)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '16px',
              padding: 'clamp(2rem, 6vw, 3.5rem)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
            }}
          >
            <Sparkles size={32} color="#E55353" style={{ margin: '0 auto 1rem' }} />
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
              Tu Camino Marcial Comienza Hoy
            </h2>
            <p style={{ fontSize: '1rem', color: '#9DA3B4', lineHeight: 1.6, marginBottom: '2rem' }}>
              No importa tu edad ni tu condición física actual. En el Dojo Ying Yang te guiaremos paso a paso con respeto, seguridad y constancia. La primera clase es completamente gratis.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              <Link href="/contacto" className="btn-martial-primary" style={{ padding: '0.9rem 2rem' }}>
                Solicitar Clase Muestra Gratuita
              </Link>
              <Link href="/nosotros" className="btn-martial-secondary" style={{ padding: '0.9rem 2rem' }}>
                Conocer al Sensei
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
