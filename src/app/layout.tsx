import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'

import './globals.css'
import scss from './layout.module.scss'

import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: 'FocalPoint',
  description: 'Generated by create next app',
}

const inter = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${scss.container}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
