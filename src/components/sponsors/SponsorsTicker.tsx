'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Sponsor } from '@/types';
import { Handshake, ExternalLink } from 'lucide-react';

export default function SponsorsTicker() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSponsors() {
      try {
        const res = await fetch('/api/sponsors');
        if (res.ok) {
          const data = await res.json();
          setSponsors(data.sponsors || []);
        } else {
          setSponsors([]);
        }
      } catch (err) {
        console.error('Error cargando patrocinadores:', err);
        setSponsors([]);
      } finally {
        setLoading(false);
      }
    }
    loadSponsors();
  }, []);

  // Si no hay patrocinadores guardados en la BD o está cargando, no mostrar nada
  if (loading || sponsors.length === 0) {
    return null;
  }

  // ============================================================
  // CASO 1: HAY UN SOLO PATROCINADOR -> MOSTRAR EL LOGO EN GRANDE
  // SIN EL DISTINTIVO DE SI ES ORO / PLATA / BRONCE
  // ============================================================
  if (sponsors.length === 1) {
    const sp = sponsors[0];
    const hasLink = !!sp.websiteUrl;

    const singleContent = (
      <div
        className="single-sponsor-card"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '1.25rem',
          padding: '0.85rem 1.5rem',
          backgroundColor: 'rgba(18, 21, 30, 0.9)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
          transition: 'all 0.25s ease',
          maxWidth: '100%',
        }}
      >
        {/* Logotipo en Grande */}
        <div
          style={{
            height: 'clamp(55px, 8vw, 75px)',
            maxWidth: 'clamp(140px, 22vw, 220px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <img
            src={sp.logo}
            alt={sp.name}
            style={{
              maxHeight: '100%',
              maxWidth: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.6))',
            }}
          />
        </div>

        {/* Nombre del Patrocinador y leyenda oficial */}
        <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.1)', paddingLeft: '1.25rem' }}>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
              fontWeight: 900,
              color: '#F7F8FA',
              margin: 0,
              letterSpacing: '0.04em',
              lineHeight: 1.2,
            }}
          >
            {sp.name}
          </p>
          <span
            style={{
              fontSize: '0.72rem',
              color: '#9FA6B8',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Patrocinador Oficial del Dojo
          </span>
        </div>
      </div>
    );

    return (
      <div
        style={{
          marginTop: '2.5rem',
          paddingTop: '1.75rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          position: 'relative',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '0.85rem',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div
              style={{
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                backgroundColor: 'rgba(35, 52, 107, 0.35)',
                border: '1px solid rgba(140, 166, 248, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Handshake size={12} color="#8CA6F8" />
            </div>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#8CA6F8',
              }}
            >
              Patrocinador Oficial
            </span>
          </div>

          <Link
            href="/contacto"
            style={{
              fontSize: '0.72rem',
              color: '#9FA6B8',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              transition: 'color 0.15s',
            }}
          >
            <span>Sé un patrocinador</span>
            <ExternalLink size={10} />
          </Link>
        </div>

        {hasLink ? (
          <a
            href={sp.websiteUrl?.startsWith('http') ? sp.websiteUrl : `https://${sp.websiteUrl}`}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            {singleContent}
          </a>
        ) : (
          singleContent
        )}

        <style jsx>{`
          .single-sponsor-card:hover {
            border-color: rgba(140, 166, 248, 0.4);
            box-shadow: 0 10px 30px rgba(35, 52, 107, 0.35);
            transform: translateY(-2px);
          }
        `}</style>
      </div>
    );
  }

  // ============================================================
  // CASO 2: HAY DOS O MÁS PATROCINADORES -> CINTILLO CONTINUO
  // DESPLAZÁNDOSE DE DERECHA A IZQUIERDA
  // ============================================================
  const repeatCount = Math.max(4, Math.ceil(8 / sponsors.length));
  const displayItems = Array(repeatCount).fill(sponsors).flat();

  return (
    <div
      style={{
        marginTop: '2.5rem',
        paddingTop: '1.75rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Encabezado del Cintillo */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div
            style={{
              width: '22px',
              height: '22px',
              borderRadius: '50%',
              backgroundColor: 'rgba(35, 52, 107, 0.35)',
              border: '1px solid rgba(140, 166, 248, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Handshake size={12} color="#8CA6F8" />
          </div>
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 800,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#8CA6F8',
            }}
          >
            Patrocinadores & Alianzas Oficiales
          </span>
        </div>

        <Link
          href="/contacto"
          style={{
            fontSize: '0.72rem',
            color: '#9FA6B8',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem',
            transition: 'color 0.15s',
          }}
        >
          <span>Sé un patrocinador</span>
          <ExternalLink size={10} />
        </Link>
      </div>

      {/* Contenedor del Ticker Marquee con Desvanecimiento Lateral */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          padding: '0.4rem 0',
          maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
        }}
      >
        <div className="marquee-track">
          {displayItems.map((sponsor, idx) => {
            const hasLink = !!sponsor.websiteUrl;
            const content = (
              <div
                key={`${sponsor.id || sponsor.name}-${idx}`}
                className="sponsor-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.6rem 1.25rem 0.6rem 0.75rem',
                  backgroundColor: 'rgba(18, 21, 30, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.35)',
                  flexShrink: 0,
                  transition: 'all 0.2s ease',
                  cursor: hasLink ? 'pointer' : 'default',
                  textDecoration: 'none',
                }}
              >
                {/* Logo del Patrocinador */}
                <div
                  style={{
                    height: '48px',
                    maxWidth: '120px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.25rem',
                    overflow: 'hidden',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>

                {/* Nombre del Patrocinador */}
                <div>
                  <p
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 800,
                      color: '#F7F8FA',
                      margin: 0,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {sponsor.name}
                  </p>
                  <span style={{ fontSize: '0.68rem', color: '#9FA6B8', textTransform: 'uppercase' }}>
                    Patrocinador Oficial
                  </span>
                </div>
              </div>
            );

            return hasLink ? (
              <a
                key={`link-${sponsor.id || sponsor.name}-${idx}`}
                href={sponsor.websiteUrl?.startsWith('http') ? sponsor.websiteUrl : `https://${sponsor.websiteUrl}`}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none', display: 'block' }}
              >
                {content}
              </a>
            ) : (
              <div key={`div-${sponsor.id || sponsor.name}-${idx}`}>
                {content}
              </div>
            );
          })}
        </div>
      </div>

      {/* Animación del Ticker de Derecha a Izquierda */}
      <style jsx>{`
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          width: max-content;
          animation: scrollRightToLeft 28s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .sponsor-card:hover {
          transform: translateY(-2px);
          border-color: rgba(140, 166, 248, 0.45);
          box-shadow: 0 6px 18px rgba(35, 52, 107, 0.35);
        }

        @keyframes scrollRightToLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
