import { useEffect } from 'react';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Set dark mode permanently
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  return <>{children}</>;
};