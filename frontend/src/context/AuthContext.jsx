import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem('chat-user')) || null
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) return console.log('auth provider is not reachable');

  return auth;
};
