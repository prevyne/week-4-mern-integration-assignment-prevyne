import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import { Button } from './Button';

export function Navbar({ currentPage, setCurrentPage }) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navLinks = [
        { id: 'tasks', label: 'Task Manager' },
        { id: 'api', label: 'API Data' }
    ];
    return (
        <nav className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-md sticky top-0 z-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className="font-bold text-xl text-blue-600 dark:text-blue-400">ReactDash</span>
                        <div className="hidden md:block ml-10">
                            <div className="flex items-baseline space-x-4">
                                {navLinks.map(link => (
                                    <button
                                        key={link.id}
                                        onClick={() => setCurrentPage(link.id)}
                                        className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === link.id ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                    >
                                        {link.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Button onClick={toggleTheme} variant="secondary" className="text-lg">
                        {theme === 'light' ? '🌙' : '☀️'}
                    </Button>
                </div>
            </div>
        </nav>
    );
}