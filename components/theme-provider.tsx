// components/theme-provider.tsx
'use client'; // This component MUST be a Client Component

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-theme';

// Correct way to get the props type for NextThemesProvider
type MyThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

// Or, if you prefer to use the imported type but spread the props correctly:
// type MyThemeProviderProps = ThemeProviderProps; // If this comes from next-themes/dist/types

export function ThemeProvider({ children, ...props }: MyThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
