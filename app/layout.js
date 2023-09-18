import './globals.css'
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Header from './Header';

export const metadata = {
  title: 'Fruit Shop',
  description: 'Hyperinflated fruit store - best prices 2033',
}

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={'min-h-screen flex flex-col relative ' + inter.className}>
        <Header />
        <div className='flex-1'>
          {children}
        </div>
        <footer className='flex flex-wrap items-center justify-center border-t border-solid border-slate-300 p-4 md:p-8'>
          <Link href='https://instagram.com/' target='_blank'>
            <i className='fa-brands fa-instagram text-slate-700 hover:text-slate-500 cursor-pointer text-2xl sm:text-3xl md:text-4xl'></i>
          </Link>
        </footer>
        <div id='portal'></div>
      </body>
    </html>
  )
}
