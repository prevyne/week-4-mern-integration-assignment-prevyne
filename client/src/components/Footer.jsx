import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 mt-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} React Mastery. All rights reserved.</p>
        <p className="text-sm mt-1">Built with React, Tailwind CSS, and ❤️</p>
      </div>
    </footer>
  );
}