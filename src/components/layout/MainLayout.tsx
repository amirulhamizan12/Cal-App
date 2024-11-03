import React from 'react';
import BottomNav from './BottomNav';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#191919]">
      <main className="pb-16 max-w-md mx-auto bg-gray-50 dark:bg-[#191919]">
        {children}
      </main>
      <BottomNav />
    </div>
  );
} 