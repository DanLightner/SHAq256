import { useThemeStore } from '../store/useThemeStore';

export function ThemeToggle() {
  const { hackerStyle, toggleHackerStyle } = useThemeStore();
  
  return (
    <div className="fixed top-4 right-4 flex gap-2">
      {/* Hacker Style Toggle Button */}
      <button
        onClick={toggleHackerStyle}
        className="p-2 rounded-full bg-gray-800 text-green-400 transition-colors"
        aria-label={`Switch to ${hackerStyle === 'matrix' ? 'glitch' : 'matrix'} style`}
      >
        {hackerStyle === 'matrix' ? (
          // Icon for glitch mode
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v6m0 12v2M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M2 12h6m8 0h6M4.93 19.07l4.24-4.24m5.66-5.66l4.24-4.24"></path>
          </svg>
        ) : (
          // Icon for matrix mode
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="18" rx="2" ry="2"></rect>
            <line x1="8" y1="10" x2="16" y2="10"></line>
            <line x1="8" y1="14" x2="16" y2="14"></line>
            <line x1="8" y1="18" x2="16" y2="18"></line>
          </svg>
        )}
      </button>
    </div>
  );
}
