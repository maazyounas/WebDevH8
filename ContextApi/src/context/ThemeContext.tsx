import { createContext, useState, useContext } from 'react'

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeDataContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeDataContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const ThemeContext = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeDataContext.Provider value={{ theme, setTheme }}>
      <div className={`app-container ${theme}`}>
        {children}
      </div>
    </ThemeDataContext.Provider>
  )
}

export default ThemeContext
