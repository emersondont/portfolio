import React, { createContext, useState } from 'react';

interface AppContextType {
  isEnglish: boolean;
  setIsEnglish: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialContext: AppContextType = {
  isEnglish: true,
  setIsEnglish: () => {},
};

export const AppContext = createContext<AppContextType>(initialContext);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <AppContext.Provider value={{ isEnglish, setIsEnglish }}>
      {children}
    </AppContext.Provider>
  );
};