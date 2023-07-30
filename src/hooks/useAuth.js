import { React, createContext, useContext, useMemo, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUserSession, removeUserSession, getUser } from '../utils/AuthService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUser());
  const navigate = useNavigate();

  const login = useCallback(async (data) => { // Wrap login in useCallback
    setUser(data.user);
    setUserSession(data.token, data.user, data.permission);
    navigate('/', { replace: true });
  }, [navigate]); // Add any other dependencies used inside login function here

  const logout = useCallback(async () => {
    setUser(null);
    removeUserSession();
    navigate('/login', { replace: true });
  }, [navigate]); 

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout], // Include login and logout in the dependency array
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
