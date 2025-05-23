import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { useThemeStore } from '../store/useThemeStore';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { hackerStyle } = useThemeStore();
  
  useEffect(() => {
    // Apply dark mode by default
    const root = document.documentElement;
    
    // Always use dark mode
    root.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
    
    // Remove both hacker style classes first
    root.classList.remove('matrix-style', 'glitch-style');
    
    // Add the current hacker style class
    root.classList.add(`${hackerStyle}-style`);
  }, [hackerStyle]);

  return <>{children}</>;
}
