import Link from 'next/link';
import './globals.css';
import Header from '@/components/Header';
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NextJS Demo',
  description: 'Demo for NextJS 13.4',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
      // className={inter.className}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
