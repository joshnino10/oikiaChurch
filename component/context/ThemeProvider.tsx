import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { darkTheme, lightTheme } from './themes';

type Theme = typeof lightTheme;

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isReady: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'APP_THEME';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, changeTheme] = useState<Theme>(lightTheme);
  const [isReady, setIsReady] = useState(false);

  // 🔹 Load saved theme
  useEffect(() => {
    (async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(STORAGE_KEY);
        if (savedTheme === 'dark') {
          changeTheme(darkTheme);
        } else {
          changeTheme(lightTheme);
        }
      } catch (e) {
        console.warn('Failed to load theme');
      } finally {
        setIsReady(true);
      }
    })();
  }, []);

  // 🔹 Save theme
  const persistTheme = async (theme: Theme) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, theme.mode);
    } catch (e) {
      console.warn('Failed to save theme');
    }
  };

  const toggleTheme = async () => {
    changeTheme(prev => {
      const nextTheme = prev.mode === 'light' ? darkTheme : lightTheme;
      persistTheme(nextTheme);
      return nextTheme;
    });
  };

  const setTheme = (theme: Theme) => {
    changeTheme(theme);
    persistTheme(theme);
  };

  if (!isReady) return null; // or splash screen

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, setTheme, isReady }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
