'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  subscription: 'free' | 'premium';
  freeTierLimits: {
    videosWatched: number;
    songsPlayed: number;
    gamesPlayed: number;
  };
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUsage: (type: 'video' | 'music' | 'game') => void;
  canAccessContent: (type: 'video' | 'music' | 'game') => boolean;
  upgradeSubscription: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data
const MOCK_USERS = [
  {
    id: '1',
    email: 'test@example.com',
    password: 'test123',
    subscription: 'free' as const,
    freeTierLimits: {
      videosWatched: 0,
      songsPlayed: 0,
      gamesPlayed: 0,
    },
  },
];

const FREE_TIER_LIMITS = {
  videos: 3,
  songs: 5,
  games: 2,
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    const mockUser = MOCK_USERS.find(u => u.email === email && u.password === password);

    if (mockUser) {
      const userWithoutPassword = { ...mockUser };
      delete (userWithoutPassword as any).password;
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateUsage = (type: 'video' | 'music' | 'game') => {
    if (!user) return;

    const updatedUser = { ...user };
    if (type === 'video') {
      updatedUser.freeTierLimits.videosWatched += 1;
    } else if (type === 'music') {
      updatedUser.freeTierLimits.songsPlayed += 1;
    } else if (type === 'game') {
      updatedUser.freeTierLimits.gamesPlayed += 1;
    }

    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const canAccessContent = (type: 'video' | 'music' | 'game'): boolean => {
    if (!user) return false;

    if (user.subscription === 'premium') return true;

    // Check free tier limits
    if (type === 'video') {
      return user.freeTierLimits.videosWatched < FREE_TIER_LIMITS.videos;
    } else if (type === 'music') {
      return user.freeTierLimits.songsPlayed < FREE_TIER_LIMITS.songs;
    } else if (type === 'game') {
      return user.freeTierLimits.gamesPlayed < FREE_TIER_LIMITS.games;
    }

    return false;
  };

  const upgradeSubscription = () => {
    if (!user) return;

    const updatedUser = { ...user, subscription: 'premium' as const };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      updateUsage,
      canAccessContent,
      upgradeSubscription,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { FREE_TIER_LIMITS };
