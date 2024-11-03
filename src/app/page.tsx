import React from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Hello 👋</h1>
          <p className="text-gray-600 dark:text-gray-300">Let's track your nutrition</p>
        </div>
        <ThemeToggle />
      </div>

      {/* Today's Summary */}
      <div className="bg-white dark:bg-dark-100 rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4">Today's Summary</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-dark-50 p-4 rounded-xl">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">1,200</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Calories</p>
          </div>
          <div className="bg-green-50 dark:bg-dark-50 p-4 rounded-xl">
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">6</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Items Tracked</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
        <div className="grid gap-4">
          <Link
            href="/scan"
            className="bg-blue-500 text-white p-4 rounded-xl flex items-center justify-between hover:bg-blue-600 transition-colors"
          >
            <span className="font-semibold">Scan Food</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Recent Scans */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4">Recent Scans</h2>
        <div className="space-y-4">
          <div className="bg-white dark:bg-dark-100 p-4 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-gray-100 dark:bg-dark-50 rounded-lg"></div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-50">Last Scanned Item</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">No items scanned yet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 