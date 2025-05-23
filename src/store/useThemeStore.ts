import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type HackerStyle = 'matrix' | 'glitch';

interface ThemeState {
  hackerStyle: HackerStyle;
  toggleHackerStyle: () => void;
  setHackerStyle: (style: HackerStyle) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      hackerStyle: 'matrix', // Default hacker style
      toggleHackerStyle: () => set((state) => ({
        hackerStyle: state.hackerStyle === 'matrix' ? 'glitch' : 'matrix'
      })),
      setHackerStyle: (hackerStyle) => set({ hackerStyle }),
    }),
    {
      name: 'theme-storage', // Name for localStorage key
    }
  )
);
