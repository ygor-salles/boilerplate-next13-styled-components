'use client';

import { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

import { theme } from '@styles/constants';
import { GlobalStyle } from '@styles/global';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
