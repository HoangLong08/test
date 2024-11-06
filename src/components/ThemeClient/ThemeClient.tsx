'use client';

import React, { createContext, useMemo } from 'react';

export const ThemeClient = createContext<{
  backgroundColor: string;
  textColor: string;
  mobileHeaderLogo: string;
  desktopHeaderLogo: string;
  brandStatement: string;
  footerLogo: string;
}>({
  backgroundColor: '',
  textColor: '',
  mobileHeaderLogo: '',
  desktopHeaderLogo: '',
  brandStatement: '',
  footerLogo: '',
});

function ThemeClientContext({
  children,
  backgroundColor,
  textColor,
  mobileHeaderLogo,
  desktopHeaderLogo,
  brandStatement,
  footerLogo,
}: Readonly<{
  children: React.ReactNode;
  backgroundColor: string;
  textColor: string;
  mobileHeaderLogo: string;
  desktopHeaderLogo: string;
  brandStatement: string;
  footerLogo: string;
}>) {
  const contextValue = useMemo(
    () => ({
      backgroundColor,
      textColor,
      mobileHeaderLogo,
      desktopHeaderLogo,
      brandStatement,
      footerLogo,
    }),
    [backgroundColor, textColor, mobileHeaderLogo, desktopHeaderLogo, brandStatement, footerLogo]
  );

  return <ThemeClient.Provider value={contextValue}>{children}</ThemeClient.Provider>;
}

export default ThemeClientContext;
