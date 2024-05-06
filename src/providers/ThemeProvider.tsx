'use client';

import { ThemeProvider } from 'next-themes';
import { useState, useEffect, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Provider = ({ children }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default Provider;
