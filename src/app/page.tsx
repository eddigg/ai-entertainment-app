'use client';

import { useAuth } from '@/context/AuthContext';
import LoginForm from '@/components/LoginForm';
import ContentTabs from '@/components/ContentTabs';

export default function Home() {
  const { user } = useAuth();

  if (!user) {
    return <LoginForm />;
  }

  return <ContentTabs />;
}
