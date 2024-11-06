import {
  createLocalizedPathnamesNavigation,
  createSharedPathnamesNavigation,
} from 'next-intl/navigation';
import { locales, pathnames, localePrefix } from './config';

export const { Link, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation({
  locales,
  // unknown link
  pathnames: pathnames as typeof pathnames & Record<string & {}, string>,
  localePrefix,
});

createSharedPathnamesNavigation({ locales, localePrefix });
