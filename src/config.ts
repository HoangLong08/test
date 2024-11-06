import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'vi'] as const;

export const pathnames = {
  '/': {
    en: '/',
    vi: '/',
  },
  '/custom-tailoring': {
    en: '/custom-tailoring',
    vi: '/custom-tailoring',
  },
  '/list-catalogs': {
    en: '/list-catalogs',
    vi: '/list-catalogs',
  },
  '/tailoring-guide': {
    en: '/tailoring-guide',
    vi: '/tailoring-guide',
  },
  '/news': {
    en: '/news',
    vi: '/news',
  },
  '/about-us': {
    en: '/about-us',
    vi: '/about-us',
  },
  '/about-us/store-location': {
    en: '/about-us/store-location',
    vi: '/about-us/store-location',
  },

  '/activation-account': {
    en: '/activation-account',
    vi: '/activation-account',
  },
  '/checkout/cart': {
    en: '/checkout/cart',
    vi: '/checkout/cart',
  },
  '/checkout/payment': {
    en: '/checkout/payment',
    vi: '/checkout/payment',
  },
  '/checkout/request-payment': {
    en: '/checkout/request-payment',
    vi: '/checkout/request-payment',
  },
  '/contact-us': {
    en: '/contact-us',
    vi: '/contact-us',
  },
  '/faqs': {
    en: '/faqs',
    vi: '/faqs',
  },
  '/profile': {
    en: '/profile',
    vi: '/profile',
  },
  '/reset-password': {
    en: '/reset-password',
    vi: '/reset-password',
  },
  '/search': {
    en: '/search',
    vi: '/search',
  },
  '/tracking-order': {
    en: '/tracking-order',
    vi: '/tracking-order',
  },
  '/unsubscription': {
    en: '/unsubscription',
    vi: '/unsubscription',
  },
  '/about-us/[slug]': {
    en: '/about-us/[slug]',
    vi: '/about-us/[slug]',
  },
  '/news/[slug]': {
    en: '/news/[slug]',
    vi: '/news/[slug]',
  },
  '/catalogs/[catalogId]': {
    en: '/catalogs/[catalogId]',
    vi: '/catalogs/[catalogId]',
  },
  '/catalogs/[catalogId]/detail/[slug]': {
    en: '/catalogs/[catalogId]/detail/[slug]',
    vi: '/catalogs/[catalogId]/detail/[slug]',
  },
  '/[detail-product-slug]': {
    en: '/[detail-product-slug]',
    vi: '/[detail-product-slug]',
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`undefined
export const localePrefix = 'always';

export type AppPathnames = keyof typeof pathnames;
