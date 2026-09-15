export type UserRole = 'administrator' | 'editor' | 'viewer' | 'student';
export type UserStatus = 'active' | 'pending' | 'blocked';

export interface User {
  id: string;
  _id?: string;
  name: string;
  email: string;
  avatar?: string;
  belt: string;
  beltColor: string;
  kyuDan: string;
  role: UserRole;
  status: UserStatus;
  joinedDate: string;
  classesAttended: number;
  approvedAt?: string;
  approvedBy?: string;
  lastLogin?: string | Date;
}

export type SocialPlatform = 'instagram' | 'facebook' | 'youtube' | 'official';

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  platform: SocialPlatform;
  category: 'torneo' | 'examen' | 'seminario' | 'comunidad';
  date: string;
  author: string;
  socialHandle: string;
  url: string;
  likes: number;
  commentsCount: number;
  featured?: boolean;
  tags: string[];
}

export interface Discipline {
  id: string;
  title: string;
  subtitle: string;
  kanji: string;
  description: string;
  ageRange: string;
  intensity: 'Media' | 'Media - Alta' | 'Alta' | 'Competición';
  features: string[];
  scheduleSnippet: string;
  badgeColor: 'ying' | 'yang' | 'neutral';
}

export interface ScheduleClass {
  id: string;
  day: 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes' | 'Sábado';
  time: string;
  title: string;
  level: 'Todos los niveles' | 'Infantil' | 'Principiantes' | 'Avanzados / Cintas Negras' | 'Kumite Deportivo';
  instructor: string;
  tag: 'ying' | 'yang' | 'neutral';
}
