'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/types';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Usuario de demostración para visualización inmediata del sistema
const DEMO_STUDENT: User = {
  id: 'usr_google_88319',
  name: 'Kenji Morales',
  email: 'kenji.morales@gmail.com',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
  belt: 'Cinturón Marrón',
  beltColor: '#6E4720',
  kyuDan: '1er Kyu',
  role: 'student',
  joinedDate: 'Marzo 2024',
  classesAttended: 84,
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Recuperar sesión guardada localmente
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('dojo_yingyang_user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (e) {
      console.error('Error al cargar sesión local:', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);
    // Simulación del flujo de autenticación con Google OAuth
    await new Promise((resolve) => setTimeout(resolve, 800));
    setUser(DEMO_STUDENT);
    try {
      localStorage.setItem('dojo_yingyang_user', JSON.stringify(DEMO_STUDENT));
      // Sincronizar perfil con MongoDB
      await fetch('/api/auth/sync-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(DEMO_STUDENT),
      });
    } catch (e) {
      console.error('Error al persistir sesión o sincronizar con MongoDB:', e);
    }
    setIsLoading(false);
    closeAuthModal();
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem('dojo_yingyang_user');
    } catch (e) {
      console.error('Error al remover sesión:', e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthModalOpen,
        openAuthModal,
        closeAuthModal,
        loginWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
}
