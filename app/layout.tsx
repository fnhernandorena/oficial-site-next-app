import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '  |  NicoDev Site',
  description: 'Francisco Nicolas Hernandorena Oficial Site',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <head><link rel="canonical" href="https://oficial-site-next-app.vercel.app/" /></head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
