import React from 'react';

export function Card({ children, className = '' }) {
  return (
    <div className={`bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl rounded-xl p-6 transition-all duration-300 border border-transparent dark:border-gray-700/50 ${className}`}>
      {children}
    </div>
  );
}