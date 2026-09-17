'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Menu, X, LogIn, LogOut, Award, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { user, openAuthModal, logout } = useAuth();

  const isSuperAdmin = !!user?.email && siteConfig.superAdminEmails.some(
    (adminEmail) => user.email?.toLowerCase().includes(adminEmail.toLowerCase())
  );

  const isAdmin = !!user && (
    (user.role === 'administrator' && user.status === 'active') ||
    isSuperAdmin
  );

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Noticias & Redes', href: '/noticias' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const closeMobile = () => setIsMobileMenuOpen(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(11, 12, 16, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="container-dojo"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px',
        }}
      >
        {/* Marca / Logo */}
        <Link
          href="/"
          onClick={closeMobile}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              overflow: 'hidden',
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 80%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src={siteConfig.logos.primary}
              alt={siteConfig.brand.name}
              width={42}
              height={42}
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <div>
            <span
              style={{
                display: 'block',
                fontSize: '1.2rem',
                fontWeight: 900,
                letterSpacing: '0.08em',
                lineHeight: 1.1,
                color: '#F7F8FA',
              }}
            >
              {siteConfig.brand.headerDisplay.prefix}{' '}
              <span style={{ color: siteConfig.brand.headerDisplay.color1 }}>
                {siteConfig.brand.headerDisplay.accent1}
              </span>{' '}
              <span style={{ color: siteConfig.brand.headerDisplay.color2 }}>
                {siteConfig.brand.headerDisplay.accent2}
              </span>
            </span>
            <span
              style={{
                display: 'block',
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.22em',
                color: '#9FA6B8',
                textTransform: 'uppercase',
              }}
            >
              {siteConfig.brand.tagline}
            </span>
          </div>
        </Link>

        {/* Navegación Desktop */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.75rem',
          }}
          className="md-flex"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: isActive ? '#F7F8FA' : '#9DA3B4',
                  position: 'relative',
                  padding: '0.5rem 0',
                  transition: 'color 0.2s ease',
                }}
              >
                {link.name}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      background: 'linear-gradient(90deg, var(--color-ying-light) 0%, var(--color-yang-light) 100%)',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Acciones de Usuario (Desktop) */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1rem',
          }}
          className="md-flex"
        >
          {user ? (
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.4rem 0.85rem 0.4rem 0.45rem',
                  backgroundColor: '#191D28',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '30px',
                  color: '#F7F8FA',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                }}
              >
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: isAdmin ? '#8E2323' : '#23346B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    overflow: 'hidden',
                    flexShrink: 0,
                    border: '1.5px solid rgba(255, 255, 255, 0.25)',
                  }}
                >
                  {user.avatar ? (
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      width={30}
                      height={30}
                      unoptimized
                      referrerPolicy="no-referrer"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    user.name.charAt(0).toUpperCase()
                  )}
                </div>
                <span style={{ fontWeight: 600 }}>{user.name.split(' ')[0]}</span>
                <span
                  style={{
                    fontSize: '0.65rem',
                    padding: '0.15rem 0.45rem',
                    backgroundColor: isAdmin ? 'rgba(147, 51, 234, 0.25)' : 'rgba(142, 35, 35, 0.3)',
                    border: `1px solid ${isAdmin ? 'rgba(192, 132, 252, 0.4)' : 'rgba(184, 49, 49, 0.5)'}`,
                    color: isAdmin ? '#C084FC' : '#FF9E9E',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                  }}
                >
                  {isAdmin ? 'ADMIN' : user.kyuDan}
                </span>
              </button>

              {/* Menú Desplegable Usuario */}
              {isUserDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '110%',
                    right: 0,
                    width: '280px',
                    backgroundColor: '#161922',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '8px',
                    padding: '0.85rem',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                    zIndex: 60,
                  }}
                >
                  <div style={{ paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          backgroundColor: isAdmin ? '#8E2323' : '#23346B',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.9rem',
                          fontWeight: 700,
                          overflow: 'hidden',
                          flexShrink: 0,
                          border: '1.5px solid rgba(255, 255, 255, 0.2)',
                        }}
                      >
                        {user.avatar ? (
                          <Image
                            src={user.avatar}
                            alt={user.name}
                            width={40}
                            height={40}
                            unoptimized
                            referrerPolicy="no-referrer"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        ) : (
                          user.name.charAt(0).toUpperCase()
                        )}
                      </div>
                      <div style={{ overflow: 'hidden' }}>
                        <p style={{ fontSize: '0.88rem', fontWeight: 700, color: '#F7F8FA', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {user.name}
                        </p>
                        <p style={{ fontSize: '0.72rem', color: '#9FA6B8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {user.email}
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.4rem', fontSize: '0.76rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#E2E8F0', fontWeight: 600 }}>
                        <Award size={14} color="#ECC94B" />
                        <span>{user.kyuDan || user.belt || 'Sin grado'}</span>
                      </div>
                      <span style={{ fontSize: '0.7rem', color: '#9FA6B8' }}>{user.classesAttended || 0} clases</span>
                    </div>

                    {user.status === 'pending' && (
                      <div
                        style={{
                          marginTop: '0.6rem',
                          padding: '0.45rem 0.65rem',
                          backgroundColor: 'rgba(234, 179, 8, 0.12)',
                          border: '1px solid rgba(234, 179, 8, 0.3)',
                          borderRadius: '6px',
                          fontSize: '0.72rem',
                          color: '#FACC15',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                        }}
                      >
                        <Clock size={13} /> Cuenta en espera de aprobación
                      </div>
                    )}
                  </div>

                  {isAdmin && (
                    <Link
                      href="/admin"
                      onClick={() => setIsUserDropdownOpen(false)}
                      className="admin-badge-btn"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem 0.85rem',
                        marginTop: '0.65rem',
                        background: 'linear-gradient(135deg, rgba(35, 52, 107, 0.55) 0%, rgba(16, 21, 38, 0.85) 100%)',
                        border: '1px solid rgba(140, 166, 248, 0.35)',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                        <div
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            backgroundColor: 'rgba(140, 166, 248, 0.16)',
                            border: '1px solid rgba(140, 166, 248, 0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <ShieldCheck size={18} color="#8CA6F8" />
                        </div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                            <span
                              style={{
                                fontSize: '0.82rem',
                                fontWeight: 700,
                                color: '#F7F8FA',
                                lineHeight: 1.2,
                              }}
                            >
                              Panel de Administración
                            </span>
                            <span
                              style={{
                                fontSize: '0.58rem',
                                fontWeight: 800,
                                letterSpacing: '0.06em',
                                padding: '0.1rem 0.35rem',
                                backgroundColor: 'rgba(192, 132, 252, 0.2)',
                                border: '1px solid rgba(192, 132, 252, 0.4)',
                                color: '#C084FC',
                                borderRadius: '4px',
                                textTransform: 'uppercase',
                              }}
                            >
                              ADMIN
                            </span>
                          </div>
                          <span
                            style={{
                              display: 'block',
                              fontSize: '0.68rem',
                              color: '#9FA6B8',
                              fontWeight: 500,
                              marginTop: '0.15rem',
                            }}
                          >
                            Gestión general del dojo
                          </span>
                        </div>
                      </div>
                      <ChevronRight size={16} color="#8CA6F8" style={{ opacity: 0.85, flexShrink: 0 }} />
                    </Link>
                  )}

                  <button
                    onClick={() => {
                      logout();
                      setIsUserDropdownOpen(false);
                    }}
                    style={{
                      width: '100%',
                      marginTop: '0.65rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 0.4rem',
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#F87171',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      borderRadius: '4px',
                    }}
                  >
                    <LogOut size={14} /> Cerrar Sesión
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={openAuthModal}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.6rem 1.15rem',
                backgroundColor: 'rgba(35, 52, 107, 0.25)',
                border: '1px solid rgba(57, 79, 154, 0.5)',
                borderRadius: '4px',
                color: '#F7F8FA',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {/* Google G icon */}
              <svg width="15" height="15" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.26 21.36 7.35 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.97 0 12s.46 3.84 1.26 5.42l4.02-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
              Acceso Alumnos
            </button>
          )}
        </div>

        {/* Botón Menú Móvil */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md-hidden"
          style={{
            background: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '6px',
            color: '#F7F8FA',
            padding: '0.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Abrir menú de navegación"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú Drawer Móvil */}
      {isMobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#0F1118',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            animation: 'fadeIn 0.2s ease',
          }}
          className="md-hidden"
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMobile}
                  style={{
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: isActive ? 800 : 500,
                    color: isActive ? '#8CA6F8' : '#D1D5DB',
                    padding: '0.6rem 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', paddingTop: '0.5rem' }}>
            {user ? (
              <div
                style={{
                  padding: '0.85rem',
                  backgroundColor: '#191D28',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: isAdmin ? '#8E2323' : '#23346B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      overflow: 'hidden',
                      flexShrink: 0,
                      border: '1.5px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    {user.avatar ? (
                      <Image
                        src={user.avatar}
                        alt={user.name}
                        width={38}
                        height={38}
                        unoptimized
                        referrerPolicy="no-referrer"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      user.name.charAt(0).toUpperCase()
                    )}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, color: '#F7F8FA', lineHeight: 1.2 }}>{user.name}</p>
                    <p style={{ fontSize: '0.78rem', color: '#8CA6F8', fontWeight: 600 }}>{user.kyuDan || user.belt}</p>
                  </div>
                </div>

                {user.status === 'pending' && (
                  <p style={{ fontSize: '0.72rem', color: '#FACC15', marginTop: '0.5rem' }}>
                    <Clock size={12} style={{ display: 'inline', marginRight: '4px' }} /> En espera de aprobación
                  </p>
                )}

                {isAdmin && (
                  <Link
                    href="/admin"
                    onClick={closeMobile}
                    className="admin-badge-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 0.85rem',
                      marginTop: '0.75rem',
                      background: 'linear-gradient(135deg, rgba(35, 52, 107, 0.55) 0%, rgba(16, 21, 38, 0.85) 100%)',
                      border: '1px solid rgba(140, 166, 248, 0.35)',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(140, 166, 248, 0.16)',
                          border: '1px solid rgba(140, 166, 248, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <ShieldCheck size={18} color="#8CA6F8" />
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                          <span
                            style={{
                              fontSize: '0.84rem',
                              fontWeight: 700,
                              color: '#F7F8FA',
                              lineHeight: 1.2,
                            }}
                          >
                            Panel de Administración
                          </span>
                          <span
                            style={{
                              fontSize: '0.58rem',
                              fontWeight: 800,
                              letterSpacing: '0.06em',
                              padding: '0.1rem 0.35rem',
                              backgroundColor: 'rgba(192, 132, 252, 0.2)',
                              border: '1px solid rgba(192, 132, 252, 0.4)',
                              color: '#C084FC',
                              borderRadius: '4px',
                              textTransform: 'uppercase',
                            }}
                          >
                            ADMIN
                          </span>
                        </div>
                        <span
                          style={{
                            display: 'block',
                            fontSize: '0.68rem',
                            color: '#9FA6B8',
                            fontWeight: 500,
                            marginTop: '0.15rem',
                          }}
                        >
                          Gestión general del dojo
                        </span>
                      </div>
                    </div>
                    <ChevronRight size={16} color="#8CA6F8" style={{ opacity: 0.85, flexShrink: 0 }} />
                  </Link>
                )}

                <button
                  onClick={() => {
                    logout();
                    closeMobile();
                  }}
                  style={{
                    marginTop: '0.65rem',
                    background: 'none',
                    border: 'none',
                    color: '#F87171',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  <LogOut size={16} /> Cerrar Sesión
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  closeMobile();
                  openAuthModal();
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem',
                  backgroundColor: '#1C2438',
                  border: '1px solid rgba(57, 79, 154, 0.6)',
                  borderRadius: '4px',
                  color: '#F7F8FA',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                <LogIn size={18} /> Iniciar Sesión con Google
              </button>
            )}
          </div>
        </div>
      )}

      {/* Media Queries y Efectos */}
      <style jsx global>{`
        .admin-badge-btn:hover {
          background: linear-gradient(135deg, rgba(48, 71, 146, 0.75) 0%, rgba(22, 30, 56, 0.95) 100%) !important;
          border-color: rgba(140, 166, 248, 0.6) !important;
          box-shadow: 0 6px 20px rgba(35, 52, 107, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15) !important;
          transform: translateY(-1px);
        }
        @media (min-width: 768px) {
          .md-flex {
            display: flex !important;
          }
          .md-hidden {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .md-flex {
            display: none !important;
          }
          .md-hidden {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
