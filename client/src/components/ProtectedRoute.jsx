import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // If user is not authenticated, redirect them to the login page
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the child component (e.g., CreatePostPage)
  return children;
};

export default ProtectedRoute;