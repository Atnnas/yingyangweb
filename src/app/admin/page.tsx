'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { User, UserRole, UserStatus } from '@/types';
import {
  Shield,
  ShieldAlert,
  ShieldCheck,
  UserPlus,
  Search,
  CheckCircle,
  XCircle,
  Clock,
  RefreshCw,
  Trash2,
  Lock,
  ArrowLeft,
  X,
  UserCheck,
  Award,
} from 'lucide-react';

export default function AdminPage() {
  const { user, isLoading: isAuthLoading, loginWithGoogle } = useAuth();

  const [users, setUsers] = useState<User[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | UserStatus>('all');
  const [roleFilter, setRoleFilter] = useState<'all' | UserRole>('all');

  // Modal para agregar usuario
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState<UserRole>('viewer');
  const [newStatus, setNewStatus] = useState<UserStatus>('active');
  const [newBelt, setNewBelt] = useState('Cinturón Blanco');
  const [newKyuDan, setNewKyuDan] = useState('9° Kyu');
  const [submitting, setSubmitting] = useState(false);
  const [actionMessage, setActionMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const fetchUsers = useCallback(async () => {
    setLoadingUsers(true);
    try {
      const res = await fetch('/api/admin/users');
      if (res.ok) {
        const data = await res.json();
        setUsers(data.users || []);
      } else {
        console.error('Error al obtener usuarios:', await res.text());
      }
    } catch (err) {
      console.error('Error de red al cargar usuarios:', err);
    } finally {
      setLoadingUsers(false);
    }
  }, []);

  useEffect(() => {
    if (user && user.role === 'administrator') {
      fetchUsers();
    }
  }, [user, fetchUsers]);

  // Actualizar rol o estado de un usuario
  const handleUpdateUser = async (id: string, email: string, updates: Partial<User>) => {
    try {
      const res = await fetch('/api/admin/users', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, email, ...updates }),
      });
      const data = await res.json();
      if (res.ok) {
        setActionMessage({ type: 'success', text: data.message || 'Usuario actualizado' });
        fetchUsers();
      } else {
        setActionMessage({ type: 'error', text: data.error || 'No se pudo actualizar el usuario' });
      }
    } catch (err) {
      console.error('Error al actualizar:', err);
      setActionMessage({ type: 'error', text: 'Error de conexión' });
    }
    setTimeout(() => setActionMessage(null), 4000);
  };

  // Eliminar usuario
  const handleDeleteUser = async (id: string, email: string, name: string) => {
    if (!confirm(`¿Estás seguro de que deseas eliminar permanentemente a ${name} (${email})?`)) {
      return;
    }
    try {
      const res = await fetch(`/api/admin/users?id=${encodeURIComponent(id)}&email=${encodeURIComponent(email)}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (res.ok) {
        setActionMessage({ type: 'success', text: 'Usuario eliminado de la base de datos' });
        fetchUsers();
      } else {
        setActionMessage({ type: 'error', text: data.error || 'No se pudo eliminar el usuario' });
      }
    } catch (err) {
      console.error('Error al eliminar:', err);
    }
    setTimeout(() => setActionMessage(null), 4000);
  };

  // Crear usuario manualmente
  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail.trim()) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/admin/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: newEmail.trim(),
          name: newName.trim() || 'Nuevo Usuario',
          role: newRole,
          status: newStatus,
          belt: newBelt,
          kyuDan: newKyuDan,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setActionMessage({ type: 'success', text: 'Usuario creado y pre-aprobado exitosamente' });
        setIsAddModalOpen(false);
        setNewEmail('');
        setNewName('');
        fetchUsers();
      } else {
        setActionMessage({ type: 'error', text: data.error || 'Error al crear usuario' });
      }
    } catch (err) {
      console.error('Error al crear usuario:', err);
      setActionMessage({ type: 'error', text: 'Error de conexión' });
    } finally {
      setSubmitting(false);
      setTimeout(() => setActionMessage(null), 4000);
    }
  };

  // Estado de carga inicial de autenticación
  if (isAuthLoading) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0B0C10' }}>
        <div style={{ textAlign: 'center', color: '#9FA6B8' }}>
          <RefreshCw size={36} className="spin-animation" style={{ color: '#8CA6F8', margin: '0 auto 1rem' }} />
          <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Verificando credenciales de acceso...</p>
        </div>
      </div>
    );
  }

  // Si el usuario no tiene rol administrator
  const isSuperAdmin = user?.email?.toLowerCase().includes('david.artavia.rodriguez@gmail.com') ||
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
          backgroundImage: 'radial-gradient(circle at top right, rgba(142, 35, 35, 0.12) 0%, transparent 60%)',
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

          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#F7F8FA', marginBottom: '1rem' }}>
            Acceso Exclusivo de Administrador
          </h1>

          <p style={{ color: '#9FA6B8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Esta sección es exclusiva para la administración del Dojo Ying Yang.
            {user ? (
              <span>
                {' '}Has iniciado sesión como <strong style={{ color: '#F7F8FA' }}>{user.email}</strong>, pero tu cuenta no posee el rol de <strong>administrator</strong>.
              </span>
            ) : (
              <span> Debes iniciar sesión con una cuenta de administrador autorizada.</span>
            )}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
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

  // Filtrado en memoria de usuarios
  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || u.status === statusFilter;
    const matchesRole = roleFilter === 'all' || u.role === roleFilter;
    return matchesSearch && matchesStatus && matchesRole;
  });

  const totalUsers = users.length;
  const pendingUsersCount = users.filter((u) => u.status === 'pending').length;
  const adminUsersCount = users.filter((u) => u.role === 'administrator').length;
  const activeStudentsCount = users.filter((u) => u.status === 'active' && u.role !== 'administrator').length;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0B0C10', padding: '2.5rem 1rem 5rem' }}>
      <div className="container-dojo">
        {/* Notificación de acciones */}
        {actionMessage && (
          <div
            style={{
              position: 'fixed',
              top: '90px',
              right: '20px',
              zIndex: 100,
              padding: '1rem 1.4rem',
              borderRadius: '8px',
              backgroundColor: actionMessage.type === 'success' ? '#143823' : '#3F1212',
              border: `1px solid ${actionMessage.type === 'success' ? '#22C55E' : '#EF4444'}`,
              color: '#F7F8FA',
              boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              fontSize: '0.9rem',
              animation: 'fadeIn 0.2s ease',
            }}
          >
            {actionMessage.type === 'success' ? <CheckCircle size={18} color="#22C55E" /> : <XCircle size={18} color="#EF4444" />}
            <span>{actionMessage.text}</span>
          </div>
        )}

        {/* Encabezado Superior */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2.5rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.4rem' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.2rem 0.6rem',
                  backgroundColor: 'rgba(35, 52, 107, 0.3)',
                  border: '1px solid rgba(140, 166, 248, 0.4)',
                  borderRadius: '20px',
                  color: '#8CA6F8',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                <ShieldCheck size={14} /> Panel Administrativo
              </span>
              <span style={{ fontSize: '0.8rem', color: '#9FA6B8' }}>Colección: <strong>Users</strong></span>
            </div>

            <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#F7F8FA', lineHeight: 1.15 }}>
              Control de Usuarios & Permisos
            </h1>
            <p style={{ color: '#9FA6B8', fontSize: '0.95rem', marginTop: '0.4rem' }}>
              Administrador en sesión: <strong style={{ color: '#F7F8FA' }}>{user.name}</strong> ({user.email})
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={fetchUsers}
              disabled={loadingUsers}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1rem',
                backgroundColor: '#161922',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '6px',
                color: '#F7F8FA',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 600,
              }}
            >
              <RefreshCw size={15} className={loadingUsers ? 'spin-animation' : ''} />
              Actualizar
            </button>

            <button
              onClick={() => setIsAddModalOpen(true)}
              className="btn-martial-primary"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.25rem',
                fontSize: '0.85rem',
              }}
            >
              <UserPlus size={16} /> Agregar Usuario
            </button>
          </div>
        </div>

        {/* Métricas / KPIs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2.5rem',
          }}
        >
          <div className="card-sumi" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '8px',
                backgroundColor: 'rgba(35, 52, 107, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <UserCheck size={22} color="#8CA6F8" />
            </div>
            <div>
              <p style={{ fontSize: '0.78rem', color: '#9FA6B8', fontWeight: 600, textTransform: 'uppercase' }}>Total Usuarios</p>
              <p style={{ fontSize: '1.6rem', fontWeight: 900, color: '#F7F8FA' }}>{totalUsers}</p>
            </div>
          </div>

          <div
            className="card-sumi"
            style={{
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              border: pendingUsersCount > 0 ? '1px solid rgba(234, 179, 8, 0.4)' : undefined,
              backgroundColor: pendingUsersCount > 0 ? 'rgba(234, 179, 8, 0.05)' : undefined,
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '8px',
                backgroundColor: 'rgba(234, 179, 8, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Clock size={22} color="#EAB308" />
            </div>
            <div>
              <p style={{ fontSize: '0.78rem', color: '#EAB308', fontWeight: 700, textTransform: 'uppercase' }}>
                Pendientes de Aprobación
              </p>
              <p style={{ fontSize: '1.6rem', fontWeight: 900, color: '#F7F8FA' }}>{pendingUsersCount}</p>
            </div>
          </div>

          <div className="card-sumi" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '8px',
                backgroundColor: 'rgba(147, 51, 234, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Shield size={22} color="#C084FC" />
            </div>
            <div>
              <p style={{ fontSize: '0.78rem', color: '#9FA6B8', fontWeight: 600, textTransform: 'uppercase' }}>Administradores</p>
              <p style={{ fontSize: '1.6rem', fontWeight: 900, color: '#F7F8FA' }}>{adminUsersCount}</p>
            </div>
          </div>

          <div className="card-sumi" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '8px',
                backgroundColor: 'rgba(142, 35, 35, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Award size={22} color="#E55353" />
            </div>
            <div>
              <p style={{ fontSize: '0.78rem', color: '#9FA6B8', fontWeight: 600, textTransform: 'uppercase' }}>Alumnos Activos</p>
              <p style={{ fontSize: '1.6rem', fontWeight: 900, color: '#F7F8FA' }}>{activeStudentsCount}</p>
            </div>
          </div>
        </div>

        {/* Barra de Búsqueda y Filtros */}
        <div
          className="card-sumi"
          style={{
            padding: '1rem 1.25rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          {/* Buscador */}
          <div style={{ position: 'relative', flex: '1', minWidth: '240px' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9FA6B8' }} />
            <input
              type="text"
              placeholder="Buscar por nombre o correo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.6rem 1rem 0.6rem 2.4rem',
                backgroundColor: '#12151E',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '6px',
                color: '#F7F8FA',
                fontSize: '0.85rem',
                outline: 'none',
              }}
            />
          </div>

          {/* Filtro de Estado */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.8rem', color: '#9FA6B8', marginRight: '0.2rem' }}>Estado:</span>
            {(['all', 'pending', 'active', 'blocked'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                style={{
                  padding: '0.4rem 0.75rem',
                  borderRadius: '4px',
                  border: '1px solid',
                  borderColor: statusFilter === st ? '#8CA6F8' : 'rgba(255, 255, 255, 0.08)',
                  backgroundColor: statusFilter === st ? 'rgba(35, 52, 107, 0.35)' : '#161922',
                  color: statusFilter === st ? '#F7F8FA' : '#9FA6B8',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                }}
              >
                {st === 'all' ? 'Todos' : st === 'pending' ? 'Pendientes' : st === 'active' ? 'Activos' : 'Bloqueados'}
              </button>
            ))}
          </div>

          {/* Filtro de Rol */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.8rem', color: '#9FA6B8', marginRight: '0.2rem' }}>Rol:</span>
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value as 'all' | UserRole)}
              style={{
                padding: '0.45rem 0.8rem',
                backgroundColor: '#12151E',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '6px',
                color: '#F7F8FA',
                fontSize: '0.82rem',
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              <option value="all">Todos los roles</option>
              <option value="administrator">Administrator</option>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
              <option value="student">Student</option>
            </select>
          </div>
        </div>

        {/* Tabla de Usuarios */}
        <div className="card-sumi" style={{ overflow: 'hidden', padding: 0 }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#141722', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <th style={{ padding: '0.9rem 1.25rem', color: '#9FA6B8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase' }}>Usuario</th>
                  <th style={{ padding: '0.9rem 1rem', color: '#9FA6B8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase' }}>Rol Asignado</th>
                  <th style={{ padding: '0.9rem 1rem', color: '#9FA6B8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase' }}>Estado</th>
                  <th style={{ padding: '0.9rem 1rem', color: '#9FA6B8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase' }}>Grado / Karate</th>
                  <th style={{ padding: '0.9rem 1rem', color: '#9FA6B8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase' }}>Último Acceso</th>
                  <th style={{ padding: '0.9rem 1.25rem', color: '#9FA6B8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', textAlign: 'right' }}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan={6} style={{ padding: '3rem 1rem', textAlign: 'center', color: '#9FA6B8' }}>
                      {loadingUsers ? 'Cargando usuarios desde MongoDB Atlas...' : 'No se encontraron usuarios con los filtros seleccionados.'}
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((u) => {
                    const isSelf = u.email.toLowerCase() === user.email.toLowerCase();
                    const isMainAdmin = u.email.toLowerCase().includes('david.artavia.rodriguez@gmail.com') ||
                      u.email.toLowerCase().includes('davidartaviarodriguez@gmail.com');

                    return (
                      <tr
                        key={u.id || u.email}
                        style={{
                          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                          backgroundColor: u.status === 'pending' ? 'rgba(234, 179, 8, 0.03)' : 'transparent',
                          transition: 'background-color 0.15s ease',
                        }}
                      >
                        {/* Avatar y Usuario */}
                        <td style={{ padding: '1rem 1.25rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                            <div
                              style={{
                                width: '38px',
                                height: '38px',
                                borderRadius: '50%',
                                backgroundColor: isMainAdmin ? '#8E2323' : '#23346B',
                                color: '#FFF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 700,
                                fontSize: '0.85rem',
                                overflow: 'hidden',
                                flexShrink: 0,
                              }}
                            >
                              {u.avatar ? (
                                <Image src={u.avatar} alt={u.name} width={38} height={38} style={{ objectFit: 'cover' }} />
                              ) : (
                                u.name.charAt(0).toUpperCase()
                              )}
                            </div>
                            <div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                <span style={{ fontWeight: 700, color: '#F7F8FA' }}>{u.name}</span>
                                {isMainAdmin && (
                                  <span
                                    style={{
                                      fontSize: '0.62rem',
                                      padding: '0.1rem 0.4rem',
                                      backgroundColor: 'rgba(142, 35, 35, 0.3)',
                                      border: '1px solid rgba(184, 49, 49, 0.5)',
                                      color: '#FF9E9E',
                                      borderRadius: '4px',
                                      fontWeight: 700,
                                    }}
                                  >
                                    SUPER ADMIN
                                  </span>
                                )}
                              </div>
                              <span style={{ fontSize: '0.78rem', color: '#9FA6B8', display: 'block' }}>{u.email}</span>
                            </div>
                          </div>
                        </td>

                        {/* Rol */}
                        <td style={{ padding: '1rem' }}>
                          <select
                            disabled={isMainAdmin}
                            value={u.role}
                            onChange={(e) => handleUpdateUser(u.id, u.email, { role: e.target.value as UserRole })}
                            style={{
                              padding: '0.35rem 0.6rem',
                              backgroundColor: '#12151E',
                              border: '1px solid rgba(255, 255, 255, 0.12)',
                              borderRadius: '4px',
                              color: u.role === 'administrator' ? '#C084FC' : u.role === 'editor' ? '#60A5FA' : u.role === 'student' ? '#F87171' : '#9FA6B8',
                              fontWeight: 700,
                              fontSize: '0.78rem',
                              cursor: isMainAdmin ? 'not-allowed' : 'pointer',
                              outline: 'none',
                            }}
                          >
                            <option value="administrator">administrator</option>
                            <option value="editor">editor</option>
                            <option value="viewer">viewer</option>
                            <option value="student">student</option>
                          </select>
                        </td>

                        {/* Estado */}
                        <td style={{ padding: '1rem' }}>
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.3rem',
                              padding: '0.25rem 0.6rem',
                              borderRadius: '4px',
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              backgroundColor:
                                u.status === 'active'
                                  ? 'rgba(34, 197, 94, 0.15)'
                                  : u.status === 'pending'
                                  ? 'rgba(234, 179, 8, 0.18)'
                                  : 'rgba(239, 68, 68, 0.15)',
                              color:
                                u.status === 'active'
                                  ? '#4ADE80'
                                  : u.status === 'pending'
                                  ? '#FACC15'
                                  : '#F87171',
                              border: `1px solid ${
                                u.status === 'active'
                                  ? 'rgba(34, 197, 94, 0.3)'
                                  : u.status === 'pending'
                                  ? 'rgba(234, 179, 8, 0.4)'
                                  : 'rgba(239, 68, 68, 0.3)'
                              }`,
                            }}
                          >
                            {u.status === 'active' && <CheckCircle size={12} />}
                            {u.status === 'pending' && <Clock size={12} />}
                            {u.status === 'blocked' && <XCircle size={12} />}
                            {u.status}
                          </span>
                        </td>

                        {/* Karate / Cinturón */}
                        <td style={{ padding: '1rem' }}>
                          <span style={{ fontSize: '0.82rem', color: '#F7F8FA', fontWeight: 600, display: 'block' }}>
                            {u.belt}
                          </span>
                          <span style={{ fontSize: '0.72rem', color: '#9FA6B8' }}>{u.kyuDan} • {u.classesAttended} clases</span>
                        </td>

                        {/* Último Acceso */}
                        <td style={{ padding: '1rem', color: '#9FA6B8', fontSize: '0.78rem' }}>
                          {u.lastLogin ? new Date(u.lastLogin).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }) : 'Sin registros'}
                        </td>

                        {/* Acciones */}
                        <td style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem' }}>
                            {/* Botón rápido de aprobación */}
                            {u.status === 'pending' && (
                              <button
                                onClick={() => handleUpdateUser(u.id, u.email, { status: 'active' })}
                                title="Aprobar y habilitar acceso al Dojo"
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '0.3rem',
                                  padding: '0.35rem 0.75rem',
                                  backgroundColor: '#15803D',
                                  border: '1px solid #22C55E',
                                  borderRadius: '4px',
                                  color: '#FFF',
                                  fontSize: '0.78rem',
                                  fontWeight: 700,
                                  cursor: 'pointer',
                                }}
                              >
                                <CheckCircle size={13} /> Aprobar
                              </button>
                            )}

                            {/* Botón suspender / reactivar */}
                            {u.status === 'active' && !isMainAdmin && (
                              <button
                                onClick={() => handleUpdateUser(u.id, u.email, { status: 'blocked' })}
                                title="Suspender usuario"
                                style={{
                                  padding: '0.35rem 0.6rem',
                                  backgroundColor: 'rgba(239, 68, 68, 0.15)',
                                  border: '1px solid rgba(239, 68, 68, 0.3)',
                                  borderRadius: '4px',
                                  color: '#F87171',
                                  fontSize: '0.75rem',
                                  cursor: 'pointer',
                                }}
                              >
                                Suspender
                              </button>
                            )}

                            {u.status === 'blocked' && !isMainAdmin && (
                              <button
                                onClick={() => handleUpdateUser(u.id, u.email, { status: 'active' })}
                                title="Reactivar usuario"
                                style={{
                                  padding: '0.35rem 0.6rem',
                                  backgroundColor: 'rgba(34, 197, 94, 0.15)',
                                  border: '1px solid rgba(34, 197, 94, 0.3)',
                                  borderRadius: '4px',
                                  color: '#4ADE80',
                                  fontSize: '0.75rem',
                                  cursor: 'pointer',
                                }}
                              >
                                Reactivar
                              </button>
                            )}

                            {/* Botón eliminar */}
                            {!isMainAdmin && !isSelf && (
                              <button
                                onClick={() => handleDeleteUser(u.id, u.email, u.name)}
                                title="Eliminar usuario permanentemente"
                                style={{
                                  padding: '0.4rem',
                                  background: 'transparent',
                                  border: 'none',
                                  color: '#9FA6B8',
                                  cursor: 'pointer',
                                  borderRadius: '4px',
                                }}
                              >
                                <Trash2 size={15} />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* MODAL: Agregar Usuario */}
      {isAddModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 110,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
        >
          <div
            className="card-sumi"
            style={{
              maxWidth: '480px',
              width: '100%',
              padding: '2rem',
              position: 'relative',
              boxShadow: '0 25px 50px rgba(0,0,0,0.8)',
            }}
          >
            <button
              onClick={() => setIsAddModalOpen(false)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'none',
                border: 'none',
                color: '#9FA6B8',
                cursor: 'pointer',
              }}
            >
              <X size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <UserPlus size={22} color="#8CA6F8" />
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#F7F8FA' }}>Agregar Usuario</h2>
            </div>
            <p style={{ color: '#9FA6B8', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              Pre-autoriza a un alumno o miembro. Al iniciar sesión con Google con este correo, entrará con los permisos configurados.
            </p>

            <form onSubmit={handleCreateUser} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#F7F8FA', marginBottom: '0.35rem' }}>
                  Correo Electrónico (Gmail de acceso) *
                </label>
                <input
                  type="email"
                  required
                  placeholder="ejemplo@gmail.com"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    backgroundColor: '#12151E',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '6px',
                    color: '#F7F8FA',
                    fontSize: '0.88rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#F7F8FA', marginBottom: '0.35rem' }}>
                  Nombre Completo
                </label>
                <input
                  type="text"
                  placeholder="Nombre del alumno o instructor"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    backgroundColor: '#12151E',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '6px',
                    color: '#F7F8FA',
                    fontSize: '0.88rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#F7F8FA', marginBottom: '0.35rem' }}>
                    Nivel de Rol *
                  </label>
                  <select
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value as UserRole)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      backgroundColor: '#12151E',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '6px',
                      color: '#F7F8FA',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                  >
                    <option value="student">student (Alumno)</option>
                    <option value="viewer">viewer (Lector)</option>
                    <option value="editor">editor (Editor)</option>
                    <option value="administrator">administrator (Admin)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#F7F8FA', marginBottom: '0.35rem' }}>
                    Estado Inicial *
                  </label>
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value as UserStatus)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      backgroundColor: '#12151E',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '6px',
                      color: '#F7F8FA',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                  >
                    <option value="active">active (Habilitado)</option>
                    <option value="pending">pending (Pendiente)</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#F7F8FA', marginBottom: '0.35rem' }}>
                    Cinturón
                  </label>
                  <select
                    value={newBelt}
                    onChange={(e) => setNewBelt(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      backgroundColor: '#12151E',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '6px',
                      color: '#F7F8FA',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                  >
                    <option value="Cinturón Blanco">Cinturón Blanco</option>
                    <option value="Cinturón Amarillo">Cinturón Amarillo</option>
                    <option value="Cinturón Naranja">Cinturón Naranja</option>
                    <option value="Cinturón Verde">Cinturón Verde</option>
                    <option value="Cinturón Azul">Cinturón Azul</option>
                    <option value="Cinturón Marrón">Cinturón Marrón</option>
                    <option value="Cinturón Negro">Cinturón Negro</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#F7F8FA', marginBottom: '0.35rem' }}>
                    Grado Kyu / Dan
                  </label>
                  <input
                    type="text"
                    placeholder="9° Kyu, 1° Dan, etc."
                    value={newKyuDan}
                    onChange={(e) => setNewKyuDan(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      backgroundColor: '#12151E',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '6px',
                      color: '#F7F8FA',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem' }}>
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  style={{
                    padding: '0.65rem 1.25rem',
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '6px',
                    color: '#9FA6B8',
                    cursor: 'pointer',
                    fontSize: '0.88rem',
                  }}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-martial-primary"
                  style={{ padding: '0.65rem 1.5rem', fontSize: '0.88rem' }}
                >
                  {submitting ? 'Guardando...' : 'Guardar Usuario'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Animación Spin */}
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
