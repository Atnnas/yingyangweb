import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Clock, Mail, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#07080B',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        marginTop: '6rem',
        paddingTop: '4rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container-dojo">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Columna 1: Dojo & Filosofía */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src="/images/logos/Logo_Blanco_Transparente.png"
                  alt="Logo Dojo Ying Yang"
                  width={36}
                  height={36}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 900, color: '#FFFFFF', letterSpacing: '0.06em' }}>
                DOJO <span style={{ color: '#8CA6F8' }}>YING</span> <span style={{ color: '#E55353' }}>YANG</span>
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#9DA3B4', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Formando carácter, disciplina y excelencia física y mental a través del camino del Karate Do tradicional y deportivo.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '6px',
                  backgroundColor: '#141722',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#CBD5E1',
                  transition: 'all 0.2s',
                }}
                aria-label="Instagram Dojo Ying Yang"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '6px',
                  backgroundColor: '#141722',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#CBD5E1',
                  transition: 'all 0.2s',
                }}
                aria-label="Facebook Dojo Ying Yang"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '6px',
                  backgroundColor: '#141722',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#CBD5E1',
                  transition: 'all 0.2s',
                }}
                aria-label="YouTube Dojo Ying Yang"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#F7F8FA', marginBottom: '1.25rem', letterSpacing: '0.08em' }}>
              Navegación
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
              <li>
                <Link href="/" style={{ color: '#9DA3B4', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Inicio & Programas
                </Link>
              </li>
              <li>
                <Link href="/nosotros" style={{ color: '#9DA3B4', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Historia & Senseis
                </Link>
              </li>
              <li>
                <Link href="/noticias" style={{ color: '#9DA3B4', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Noticias & Redes Sociales
                </Link>
              </li>
              <li>
                <Link href="/contacto" style={{ color: '#9DA3B4', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Ubicación & Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Dojo Kun (Principios del Dojo) */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#F7F8FA', marginBottom: '1.25rem', letterSpacing: '0.08em' }}>
              Dojo Kun (道場訓)
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#9DA3B4' }}>
              <p style={{ margin: 0 }}>• Perfeccionar el carácter personal.</p>
              <p style={{ margin: 0 }}>• Ser leal y mantener el camino de la sinceridad.</p>
              <p style={{ margin: 0 }}>• Cultivar el espíritu de superación constante.</p>
              <p style={{ margin: 0 }}>• Honrar los principios de la cortesía y el respeto.</p>
              <p style={{ margin: 0 }}>• Abstenerse de la conducta violenta.</p>
            </div>
          </div>

          {/* Columna 4: Datos de Contacto */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#F7F8FA', marginBottom: '1.25rem', letterSpacing: '0.08em' }}>
              Ubicación & Horarios
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem', color: '#9DA3B4' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <MapPin size={18} color="#E55353" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Instalaciones Centrales del Dojo, Área de Tatami Oficial</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Clock size={18} color="#8CA6F8" style={{ flexShrink: 0 }} />
                <span>Lun a Vie: 16:00 - 21:30 | Sáb: 08:00 - 13:00</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={18} color="#48BB78" style={{ flexShrink: 0 }} />
                <span>WhatsApp / Informes directos</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Mail size={18} color="#ECC94B" style={{ flexShrink: 0 }} />
                <span>contacto@dojoyingyang.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Barra inferior de Copyright */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.8rem',
            color: '#676E80',
          }}
        >
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} Dojo de Karate Ying Yang. Todos los derechos reservados.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Shield size={14} /> Sistema con Google Security OAuth
            </span>
            <span>Libro de Marca Oficial</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
