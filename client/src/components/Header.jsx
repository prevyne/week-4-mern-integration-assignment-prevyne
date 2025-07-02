import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Header = () => {
  const { isAuthenticated, dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MERN Blog
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link to="/" className="text-gray-600 hover:text-blue-500">
              Home
            </Link>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/create-post" className="text-gray-600 hover:text-blue-500">
                  Create Post
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-blue-500">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;