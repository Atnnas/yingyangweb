'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import {
  ShieldCheck,
  Users,
  CalendarCheck,
  ArrowLeft,
  RefreshCw,
  Lock,
} from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user, isLoading: isAuthLoading, loginWithGoogle } = useAuth();

  // 1. Estado de carga de autenticación
  if (isAuthLoading) {
    return (
      <div
        style={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0B0C10',
        }}
      >
        <div style={{ textAlign: 'center', color: '#9FA6B8' }}>
          <RefreshCw
            size={36}
            className="spin-animation"
            style={{ color: '#8CA6F8', margin: '0 auto 1rem' }}
          />
          <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>
            Verificando credenciales de acceso...
          </p>
        </div>
        <style jsx>{`
          .spin-animation {
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  // 2. Verificación de permisos de Administrador o Super Administrador
  const isSuperAdmin =
    user?.email?.toLowerCase().includes('david.artavia.rodriguez@gmail.com') ||
    user?.email?.toLowerCase().includes('davidartaviarodriguez@gmail.com');

  if (!user || (user.role !== 'administrator' && !isSuperAdmin)) {
    return (
      <div
        style={{
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 1rem',
          backgroundColor: '#0B0C10',
          backgroundImage:
            'radial-gradient(circle at top right, rgba(142, 35, 35, 0.12) 0%, transparent 60%)',
        }}
      >
        <div
          className="card-sumi"
          style={{
            maxWidth: '520px',
            width: '100%',
            textAlign: 'center',
            padding: '3rem 2.2rem',
            border: '1px solid rgba(142, 35, 35, 0.3)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
          }}
        >
          <div
            style={{
              width: '74px',
              height: '74px',
              borderRadius: '50%',
              backgroundColor: 'rgba(142, 35, 35, 0.15)',
              border: '2px solid rgba(184, 49, 49, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
            }}
          >
            <Lock size={36} color="#E55353" />
          </div>

          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#E55353',
              display: 'block',
              marginBottom: '0.5rem',
            }}
          >
            Área Restringida
          </span>

          <h1
            style={{
              fontSize: '1.8rem',
              fontWeight: 800,
              color: '#F7F8FA',
              marginBottom: '1rem',
            }}
          >
            Acceso Exclusivo de Administrador
          </h1>

          <p
            style={{
              color: '#9FA6B8',
              fontSize: '0.95rem',
              lineHeight: 1.6,
              marginBottom: '2rem',
            }}
          >
            Esta sección es exclusiva para la administración del Dojo Ying Yang.
            {user ? (
              <span>
                {' '}
                Has iniciado sesión como{' '}
                <strong style={{ color: '#F7F8FA' }}>{user.email}</strong>, pero tu
                cuenta no posee el rol de <strong>administrator</strong>.
              </span>
            ) : (
              <span>
                {' '}
                Debes iniciar sesión con una cuenta de administrador autorizada.
              </span>
            )}
          </p>

          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}
          >
            {!user ? (
              <button
                onClick={loginWithGoogle}
                className="btn-martial-primary"
                style={{ width: '100%', padding: '0.85rem', fontSize: '0.95rem' }}
              >
                Iniciar Sesión con Google
              </button>
            ) : null}

            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                color: '#9FA6B8',
                textDecoration: 'none',
                fontSize: '0.9rem',
                padding: '0.75rem',
              }}
            >
              <ArrowLeft size={16} /> Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Rutas activas en tabs
  const isUsersActive =
    pathname === '/admin/users' || pathname === '/admin';
  const isAttendanceActive = pathname?.startsWith('/admin/attendance');

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0B0C10',
        display: 'flex',
      }}
    >
      {/* ============================================================ */}
      {/* SIDEBAR / CONTROL DE TABS IZQUIERDO CON ENLACES A SUBRUTAS   */}
      {/* ============================================================ */}
      <aside
        style={{
          width: '260px',
          backgroundColor: '#0F121A',
          borderRight: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
          position: 'sticky',
          top: '76px',
          height: 'calc(100vh - 76px)',
          padding: '1.5rem 1rem',
          zIndex: 40,
        }}
      >
        {/* Marca de Dojo Admin */}
        <div
          style={{
            paddingBottom: '1.25rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '1.25rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
            }}
          >
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                backgroundColor: '#23346B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(140, 166, 248, 0.3)',
              }}
            >
              <ShieldCheck size={18} color="#8CA6F8" />
            </div>
            <div>
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 900,
                  color: '#F7F8FA',
                  letterSpacing: '0.04em',
                }}
              >
                ADMIN DOJO
              </span>
              <span
                style={{
                  display: 'block',
                  fontSize: '0.68rem',
                  color: '#9FA6B8',
                  textTransform: 'uppercase',
                }}
              >
                Ying Yang System
              </span>
            </div>
          </div>
        </div>

        {/* Navegación de Tabs por Rutas */}
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            flex: 1,
          }}
        >
          {/* Tab 1: /admin/users */}
          <Link
            href="/admin/users"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.85rem 1rem',
              borderRadius: '8px',
              border: isUsersActive
                ? '1px solid rgba(140, 166, 248, 0.4)'
                : '1px solid transparent',
              backgroundColor: isUsersActive
                ? 'rgba(35, 52, 107, 0.45)'
                : 'transparent',
              color: isUsersActive ? '#F7F8FA' : '#9FA6B8',
              fontSize: '0.9rem',
              fontWeight: isUsersActive ? 700 : 500,
              textDecoration: 'none',
              transition: 'all 0.15s ease',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <Users
                size={18}
                color={isUsersActive ? '#8CA6F8' : '#9FA6B8'}
              />
              <span>Usuarios</span>
            </div>
          </Link>

          {/* Tab 2: /admin/attendance */}
          <Link
            href="/admin/attendance"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.85rem 1rem',
              borderRadius: '8px',
              border: isAttendanceActive
                ? '1px solid rgba(140, 166, 248, 0.4)'
                : '1px solid transparent',
              backgroundColor: isAttendanceActive
                ? 'rgba(35, 52, 107, 0.45)'
                : 'transparent',
              color: isAttendanceActive ? '#F7F8FA' : '#9FA6B8',
              fontSize: '0.9rem',
              fontWeight: isAttendanceActive ? 700 : 500,
              textDecoration: 'none',
              transition: 'all 0.15s ease',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <CalendarCheck
                size={18}
                color={isAttendanceActive ? '#8CA6F8' : '#9FA6B8'}
              />
              <span>Asistencia</span>
            </div>
          </Link>
        </nav>

        {/* Footer del Sidebar */}
        <div
          style={{
            paddingTop: '1rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#9FA6B8',
              textDecoration: 'none',
              fontSize: '0.82rem',
              padding: '0.5rem 0.6rem',
              borderRadius: '6px',
              transition: 'color 0.15s',
            }}
          >
            <ArrowLeft size={15} /> Volver a Página Web
          </Link>
        </div>
      </aside>

      {/* Contenido Dinámico de la Subruta */}
      <main
        style={{
          flex: 1,
          padding: '2.5rem 2rem 5rem',
          overflowY: 'auto',
          minWidth: 0,
        }}
      >
        {children}
      </main>
    </div>
  );
}
