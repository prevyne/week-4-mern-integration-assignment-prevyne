import React, { createContext, useReducer, useEffect } from 'react';
import { authService } from '../services/api';

// Get initial state from localStorage
const user = authService.getCurrentUser();
const token = localStorage.getItem('token');

const initialState = {
  isAuthenticated: !!token,
  user: user,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case 'LOGOUT':
      // The logout logic is now in authService
      authService.logout();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};