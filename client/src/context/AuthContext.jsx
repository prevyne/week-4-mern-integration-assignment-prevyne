import React, { createContext, useReducer, useEffect, useMemo } from 'react';
import { authService } from '../services/api';

const initialState = {
  isAuthenticated: false,
  user: null,
  isLoading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
        isLoading: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        isLoading: false,
      };
    case 'LOGOUT':
      authService.logout();
      return { ...state, isAuthenticated: false, user: null, isLoading: false };
    default:
      return state;
  }
};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const user = authService.getCurrentUser();
    const token = localStorage.getItem('token');
    dispatch({
      type: 'INITIALIZE',
      payload: { isAuthenticated: !!token, user },
    });
  }, []);

  const contextValue = useMemo(() => ({ ...state, dispatch }), [state]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
