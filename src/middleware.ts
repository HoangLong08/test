import createMiddleware from 'next-intl/middleware';
// import { NextRequest } from 'next/server';
import { pathnames, locales, localePrefix } from './config';

export default createMiddleware({
  defaultLocale: 'en',
  locales,
  pathnames,
  localePrefix,
});

export const config = {
  matcher: [
    // '/((?!api|_next|paypal|_vercel|.*\\..*).*)',

    // '/((?!api|_next/static|Montserrat|Roboto|login-with-facebook|login-with-google|_next/image|admin|sitemap|favicon.ico|apple-touch-icon.png|images|favicon.svg|favicon.ico|icons|manifest).*)',
    '/',
    '/(vi|en)/:path*',
  ],
};
