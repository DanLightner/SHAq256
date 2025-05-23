import type { ReactNode } from 'react';
import { ThemeToggle } from '../components/ThemeToggle';
import { useThemeStore } from '../store/useThemeStore';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { hackerStyle } = useThemeStore();

  return (
    <div className={`min-h-screen w-full p-6 transition-colors ${hackerStyle}-bg bg-background-dark text-white`}>
      <ThemeToggle />
      
      <div className="container mx-auto py-12 flex justify-center items-center text-center">
        {children}
      </div>
      
      <footer className="text-center mt-12 py-4 text-sm text-gray-400">
        <div className="flex flex-col items-center justify-center w-full">
          <p className="text-center w-full">SHAq256 Team • <span className="cursor-blink">root@ctf:~#</span> • {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
