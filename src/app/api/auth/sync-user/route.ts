import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { User } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const user: User = await request.json();

    if (!user || !user.email) {
      return NextResponse.json({ error: 'Datos de usuario incompletos' }, { status: 400 });
    }

    const uri = process.env.MONGODB_URI || '';
    if (uri && !uri.includes('<TU_PASSWORD>')) {
      try {
        const db = await getDatabase();
        const collection = db.collection('users');

        // Upsert usuario por email o Google ID
        await collection.updateOne(
          { email: user.email },
          {
            $set: {
              name: user.name,
              avatar: user.avatar,
              belt: user.belt,
              kyuDan: user.kyuDan,
              role: user.role || 'student',
              lastLogin: new Date(),
            },
            $setOnInsert: {
              id: user.id,
              joinedDate: new Date(),
              classesAttended: 0,
            },
          },
          { upsert: true }
        );

        return NextResponse.json({ success: true, message: 'Usuario sincronizado con MongoDB' });
      } catch (dbErr) {
        console.error('Error sincronizando usuario en MongoDB:', dbErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Modo demo activo: configura tu contraseña en .env.local para persistir usuarios en Atlas',
    });
  } catch (err: unknown) {
    const error = err as Error;
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
