import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { getDatabase } from '@/lib/mongodb';

// Detección automática de URL para Vercel y localhost
const getNextAuthUrl = () => {
  if (process.env.NEXTAUTH_URL) return process.env.NEXTAUTH_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'http://localhost:3000';
};

// Asegurar que NEXTAUTH_URL esté seteado para NextAuth
if (!process.env.NEXTAUTH_URL) {
  process.env.NEXTAUTH_URL = getNextAuthUrl();
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {
        if (user.email) {
          const db = await getDatabase();
          const usersCol = db.collection('users');
          await usersCol.updateOne(
            { email: user.email },
            {
              $set: {
                name: user.name,
                avatar: user.image,
                lastLogin: new Date(),
              },
              $setOnInsert: {
                googleId: user.id || account?.providerAccountId,
                email: user.email,
                belt: 'Cinturón Blanco',
                beltColor: '#FFFFFF',
                kyuDan: '9° Kyu',
                role: 'student',
                joinedDate: new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' }),
                classesAttended: 0,
              },
            },
            { upsert: true }
          );
        }
      } catch (err) {
        console.error('Error guardando usuario de Google en MongoDB:', err);
      }
      return true;
    },
    async session({ session }) {
      try {
        if (session.user?.email) {
          const db = await getDatabase();
          const dbUser = await db.collection('users').findOne({ email: session.user.email });
          if (dbUser) {
            (session.user as Record<string, unknown>).belt = dbUser.belt || 'Cinturón Blanco';
            (session.user as Record<string, unknown>).kyuDan = dbUser.kyuDan || '9° Kyu';
            (session.user as Record<string, unknown>).role = dbUser.role || 'student';
            (session.user as Record<string, unknown>).classesAttended = dbUser.classesAttended || 0;
          }
        }
      } catch (err) {
        console.error('Error enriqueciendo sesión con MongoDB:', err);
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || 'dojo_yingyang_auth_super_secret_key_88921471',
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
