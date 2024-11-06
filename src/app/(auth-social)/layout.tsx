import React from 'react';
import { ReduxProvider } from '@/store/provider';
import AuthProvider from '@/lib/AuthProvider';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang="vi">
    <body>
      <ReduxProvider>
        <AuthProvider> {children}</AuthProvider>
      </ReduxProvider>
    </body>
  </html>
);

export default Layout;
