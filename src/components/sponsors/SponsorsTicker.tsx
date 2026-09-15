'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Sponsor } from '@/types';
import { Handshake, Sparkles, Award, Building, ExternalLink } from 'lucide-react';

export default function SponsorsTicker() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSponsors() {
      try {
        const res = await fetch('/api/sponsors');
        if (res.ok) {
          const data = await res.json();
          // Cargar exclusivamente los patrocinadores reales guardados en la base de datos
          setSponsors(data.sponsors || []);
        } else {
          setSponsors([]);
        }
      } catch (err) {
        console.error('Error cargando patrocinadores para el cintillo:', err);
        setSponsors([]);
      } finally {
        setLoading(false);
      }
    }
    loadSponsors();
  }, []);

  // Si no hay patrocinadores reales en base de datos o está cargando, no mostrar nada de ejemplo
  if (loading || sponsors.length === 0) {
    return null;
  }

  // Repetir los elementos reales para lograr un desplazamiento infinito continuo y suave
  const repeatCount = Math.max(4, Math.ceil(8 / sponsors.length));
  const displayItems = Array(repeatCount).fill(sponsors).flat();

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'oro':
        return <Sparkles size={11} color="#FACC15" />;
      case 'plata':
        return <Award size={11} color="#E2E8F0" />;
      default:
        return <Building size={11} color="#FDBA74" />;
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'oro':
        return '#FACC15';
      case 'plata':
        return '#E2E8F0';
      default:
        return '#FDBA74';
    }
  };

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
                  gap: '0.75rem',
                  padding: '0.5rem 1rem 0.5rem 0.65rem',
                  backgroundColor: 'rgba(18, 21, 30, 0.85)',
                  border: sponsor.tier === 'oro'
                    ? '1px solid rgba(234, 179, 8, 0.3)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '10px',
                  boxShadow: sponsor.tier === 'oro'
                    ? '0 0 14px rgba(234, 179, 8, 0.08)'
                    : '0 4px 12px rgba(0, 0, 0, 0.3)',
                  flexShrink: 0,
                  transition: 'all 0.2s ease',
                  cursor: hasLink ? 'pointer' : 'default',
                  textDecoration: 'none',
                }}
              >
                {/* Logo del Patrocinador */}
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '8px',
                    backgroundColor: '#0F121A',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.35rem',
                    overflow: 'hidden',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>

                {/* Datos del Patrocinador */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span
                      style={{
                        fontSize: '0.62rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: getTierColor(sponsor.tier),
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.2rem',
                      }}
                    >
                      {getTierIcon(sponsor.tier)}
                      {sponsor.tier}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: '#F7F8FA',
                      margin: '0.15rem 0 0',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {sponsor.name}
                  </p>
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
