import React, { useState, useEffect, createContext, ReactNode } from 'react';

interface ContextValue {
  theme: string;
  toggleTheme: () => void;
}

interface ContextProps {
  children?: ReactNode;
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/37023
// romenkova commented on Dec 26, 2020
export const ThemeContext = createContext(null) as React.Context<any>;

function ThemeContextProvider({ children }: ContextProps) {
  const darkTheme = 'dark';
  const lightTheme = 'light';

  const [theme, setThemeData] = useState(() => {
    const themeLocalStorage = localStorage.getItem('theme');
    return themeLocalStorage ? themeLocalStorage : 'light';
  });

  const toggleTheme = () => {
    if (theme === lightTheme) {
      setThemeData(darkTheme);
      localStorage.setItem('theme', darkTheme);
    } else {
      setThemeData(lightTheme);
      localStorage.setItem('theme', lightTheme);
    }
  };

  const contextValue: ContextValue = { theme, toggleTheme };

  // Set default light theme
  useEffect(() => {
    if (!theme) {
      localStorage.setItem('theme', darkTheme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={theme === lightTheme ? 'wrapper' : 'wrapper dark-theme'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
