'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { SunIcon } from '@/components/icons/sun';
import { CrescentMoonIcon } from '@/components/icons/crescent-moon';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDarkMode = currentTheme === 'dark';

  const toggleThemeMode = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="ml-auto cursor-pointer" title={`${isDarkMode ? 'Light' : 'Dark'} Mode`} onClick={toggleThemeMode}>
      {isDarkMode && <SunIcon />}
      {!isDarkMode && <CrescentMoonIcon />}
    </div>
  );
};

export { ThemeSwitcher };
