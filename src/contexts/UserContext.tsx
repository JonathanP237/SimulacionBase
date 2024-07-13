import React, { createContext, useState, useContext } from 'react';

type UserData = {
  userType: string;
  userId: string;
  // Otros datos relevantes
};

type UserContextType = {
  userData: UserData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
};

const UserContext = createContext<UserContextType>({
  userData: null,
  setUserData: () => {},
});

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
