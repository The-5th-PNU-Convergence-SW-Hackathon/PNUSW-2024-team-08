import React, { createContext, useState, useContext } from 'react';

// UserContext 생성
const UserContext = createContext();

// UserProvider 컴포넌트
export const UserProvider = ({ children }) => {
  const [userRole, setUserRole] = useState('visitor');

  return (
    <UserContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </UserContext.Provider>
  );
};

// useUser 커스텀 훅
export const useUser = () => {
  return useContext(UserContext);
};
