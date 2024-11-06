import { Lora, Playfair_Display, Poppins, Sacramento, Montserrat, Roboto } from 'next/font/google';
// import localFont from 'next/font/local';
// Montserrat
export const font = Lora({
  subsets: ['latin'],
  weight: ['700', '600', '500', '400'],
  display: 'swap',
  style: ['normal', 'italic'],
});

export const sacramentoFont = Sacramento({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  style: ['normal'],
  variable: '--sacramento-font',
});

export const montserratFont = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  style: ['normal', 'italic'],
  variable: '--montserrat',
});

export const robotoFont = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  style: ['normal', 'italic'],
  variable: '--roboto-font',
});

export const playFairDisplayFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  style: ['normal', 'italic'],
  variable: '--playFairDisplay-font',
});

export const adminFont = Poppins({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  style: ['normal'],
  variable: '--admin-font',
});
