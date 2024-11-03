import React from 'react';

export default function HistoryPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Scan History</h1>
      
      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white dark:bg-dark-100 p-4 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-gray-100 dark:bg-dark-50 rounded-lg"></div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-gray-50">Chicken Salad</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">350 calories</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 