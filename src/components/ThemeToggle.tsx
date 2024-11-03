'use client';

import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="relative inline-flex h-[33px] w-[55px] items-center rounded-full bg-gray-200 p-1 transition-colors duration-200 dark:bg-dark-50"
      aria-label="Toggle dark mode"
    >
      {/* Toggle Thumb/Circle */}
      <span
        className={`flex h-[25px] w-[25px] items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-200 ${
          isDarkMode ? 'translate-x-[22px]' : 'translate-x-0'
        }`}
      >
        {/* Icons */}
        {isDarkMode ? (
          <svg className="h-4 w-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        ) : (
          <svg className="h-4 w-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </span>
    </button>
  );
} 