'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
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

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Sincronizar usuario de NextAuth con nuestro estado de aplicación
  useEffect(() => {
    if (session?.user) {
      const authUser: User = {
        id: (session.user as Record<string, unknown>).id as string || session.user.email || 'usr_google',
        name: session.user.name || 'Alumno',
        email: session.user.email || '',
        avatar: session.user.image || undefined,
        belt: ((session.user as Record<string, unknown>).belt as string) || 'Cinturón Blanco',
        beltColor: '#FFFFFF',
        kyuDan: ((session.user as Record<string, unknown>).kyuDan as string) || '9° Kyu',
        role: ((session.user as Record<string, unknown>).role as 'student' | 'instructor' | 'admin') || 'student',
        joinedDate: 'Registrado',
        classesAttended: ((session.user as Record<string, unknown>).classesAttended as number) || 0,
      };
      setUser(authUser);
    } else if (status === 'unauthenticated') {
      setUser(null);
    }
  }, [session, status]);

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  const loginWithGoogle = async () => {
    try {
      // Iniciar el flujo de OAuth 2.0 oficial de Google
      await signIn('google', { callbackUrl: window.location.href });
    } catch (err) {
      console.error('Error al iniciar sesión con Google:', err);
    }
  };

  const logout = () => {
    setUser(null);
    signOut({ callbackUrl: '/' });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading: status === 'loading',
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
