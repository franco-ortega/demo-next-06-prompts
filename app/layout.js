import Link from 'next/link';
import './globals.css';
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
        <header>
          <h1 className='text-xl text-gray-600 w-fit m-auto'>Header</h1>
          <nav className='w-fit m-auto text-blue-500'>
            <ul className='flex flex-row gap-2'>
              <li>
                <Link href={'/'}>Home</Link>
              </li>
              <li>
                <Link href={'/planets'}>Planets</Link>
              </li>
            </ul>
          </nav>
          <hr />
        </header>
        {children}
      </body>
    </html>
  );
}
