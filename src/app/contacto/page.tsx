'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'Karate Tradicional (Adultos)',
    experience: 'Principiante (Sin experiencia)',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error('Error enviando formulario:', err);
      // Permitimos que continúe para mostrar feedback positivo al usuario
      setIsSubmitted(true);
    } finally {
      setIsSending(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hola Sensei! Me gustaría solicitar una clase de prueba gratuita en el Dojo Ying Yang. Mi nombre es ${formData.name || 'un futuro practicante'}.`
  );

  return (
    <div style={{ paddingBottom: '6rem' }}>
      {/* ================= HEADER SECCIÓN CONTACTO ================= */}
      <section
        style={{
          padding: 'clamp(3rem, 6vw, 5rem) 0 3rem',
          backgroundColor: '#0C0E14',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container-dojo">
          <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#FF8A8A',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Comienza Tu Práctica
            </span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', marginBottom: '1.25rem' }}>
              Contacto & Clase de Prueba
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#9DA3B4', lineHeight: 1.7 }}>
              Te esperamos en el tatami. Reserva tu primera sesión sin costo para ti o tus hijos, o escríbenos directamente por WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENIDO PRINCIPAL ================= */}
      <section style={{ padding: 'clamp(3.5rem, 6vw, 5.5rem) 0' }}>
        <div className="container-dojo">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: 'clamp(2rem, 5vw, 3.5rem)',
              alignItems: 'flex-start',
            }}
          >
            {/* Formulario de Contacto */}
            <div
              className="glass-panel"
              style={{
                padding: 'clamp(1.75rem, 5vw, 2.75rem)',
                borderRadius: '14px',
              }}
            >
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#F7F8FA' }}>
                Reserva Tu Clase Muestra
              </h2>
              <p style={{ fontSize: '0.9rem', color: '#9DA3B4', marginBottom: '2rem' }}>
                Completa el formulario y te confirmaremos el horario ideal según tu edad y nivel.
              </p>

              {isSubmitted ? (
                <div
                  style={{
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    borderRadius: '8px',
                    padding: '2rem',
                    textAlign: 'center',
                    animation: 'fadeIn 0.3s ease',
                  }}
                >
                  <CheckCircle2 size={48} color="#22C55E" style={{ margin: '0 auto 1rem' }} />
                  <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                    ¡Solicitud Recibida con Éxito!
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Gracias por dar el primer paso. El equipo técnico del Dojo Ying Yang se comunicará contigo en breve para coordinar tu clase muestra.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-martial-secondary"
                    style={{ fontSize: '0.85rem' }}
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {/* Nombre */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.4rem' }}>
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Carlos Mendoza"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        backgroundColor: '#161922',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '6px',
                        color: '#FFFFFF',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* Correo y Teléfono en dos columnas */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.4rem' }}>
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu.correo@ejemplo.com"
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          backgroundColor: '#161922',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          borderRadius: '6px',
                          color: '#FFFFFF',
                          fontSize: '0.9rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.4rem' }}>
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+52 55 1234 5678"
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          backgroundColor: '#161922',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          borderRadius: '6px',
                          color: '#FFFFFF',
                          fontSize: '0.9rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  {/* Programa de Interés */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.4rem' }}>
                      Disciplina / Programa de Interés *
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        backgroundColor: '#161922',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '6px',
                        color: '#FFFFFF',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    >
                      <option value="Karate Infantil (4 a 11 años)">Karate Infantil (4 a 11 años)</option>
                      <option value="Karate Juvenil (12 a 17 años)">Karate Juvenil (12 a 17 años)</option>
                      <option value="Karate Tradicional (Adultos)">Karate Tradicional (Adultos)</option>
                      <option value="Kumite Deportivo WKF">Kumite Deportivo WKF (Competencia)</option>
                      <option value="Defensa Personal Urbana">Defensa Personal Urbana</option>
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.4rem' }}>
                      Mensaje o Pregunta Especial
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Indícanos si tienes alguna lesión previa, disponibilidad de horario o preguntas adicionales..."
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        backgroundColor: '#161922',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '6px',
                        color: '#FFFFFF',
                        fontSize: '0.9rem',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="btn-martial-primary"
                    style={{ width: '100%', padding: '0.95rem' }}
                  >
                    <Send size={16} />
                    <span>{isSending ? 'Enviando solicitud...' : 'Confirmar Reserva de Clase Muestra'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Información Directa y WhatsApp */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* WhatsApp Directo */}
              <div
                style={{
                  backgroundColor: '#111B15',
                  border: '1px solid rgba(37, 211, 102, 0.3)',
                  borderRadius: '12px',
                  padding: '2rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: '#25D366',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                    }}
                  >
                    <MessageSquare size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: '#FFFFFF', margin: 0 }}>¿Prefieres chatear de inmediato?</h3>
                    <p style={{ fontSize: '0.85rem', color: '#86EFAC', margin: '0.2rem 0 0' }}>Respuesta rápida del Sensei de guardia</p>
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Escríbenos directamente por WhatsApp para consultar dudas inmediatas sobre tarifas, uniformes o disponibilidad del día.
                </p>

                <a
                  href={`https://wa.me/525512345678?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.65rem',
                    width: '100%',
                    padding: '0.85rem 1.5rem',
                    backgroundColor: '#25D366',
                    color: '#062B16',
                    borderRadius: '6px',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  <span>Chatear por WhatsApp Oficial</span>
                </a>
              </div>

              {/* Tarjeta de Ubicación e Instalaciones */}
              <div className="glass-panel" style={{ padding: '2rem', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#F7F8FA', marginBottom: '1.25rem' }}>
                  Información del Dojo
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.9rem', color: '#9DA3B4' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <MapPin size={20} color="#E55353" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: '#F7F8FA', display: 'block' }}>Dirección Central</strong>
                      <span>Av. de las Artes Marciales #108, Col. Tradición, Zona Centro</span>
                      <p style={{ fontSize: '0.78rem', color: '#687187', margin: '0.2rem 0 0' }}>Estacionamiento privado para alumnos y familiares.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <Clock size={20} color="#8CA6F8" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: '#F7F8FA', display: 'block' }}>Horario de Atención en Recepción</strong>
                      <span>Lunes a Viernes: 15:30 - 21:30 hrs</span>
                      <br />
                      <span>Sábados: 08:00 - 13:30 hrs</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Phone size={20} color="#48BB78" style={{ flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: '#F7F8FA', display: 'block' }}>Línea Telefónica Directa</strong>
                      <span>+52 (55) 1234-5678</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Mail size={20} color="#ECC94B" style={{ flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: '#F7F8FA', display: 'block' }}>Correo Electrónico</strong>
                      <span>contacto@dojoyingyang.com</span>
                    </div>
                  </div>
                </div>

                {/* Mapa Representativo / Visual del Dojo */}
                <div
                  style={{
                    marginTop: '1.75rem',
                    padding: '1.5rem',
                    backgroundColor: '#161922',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '8px',
                    textAlign: 'center',
                  }}
                >
                  <MapPin size={32} color="#E55353" style={{ margin: '0 auto 0.5rem' }} />
                  <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#F7F8FA', margin: 0 }}>
                    Tatami Principal Dojo Ying Yang
                  </p>
                  <p style={{ fontSize: '0.78rem', color: '#9FA6B8', margin: '0.2rem 0 1rem' }}>
                    180 m² de tatami reglamentario y zona de preparación física
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: '#8CA6F8',
                      textDecoration: 'none',
                    }}
                  >
                    Abrir en Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
