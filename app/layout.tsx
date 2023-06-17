import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MyMobile',
  description: 'Trusted mobile network',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ` min-w-[320px] h-screen flex flex-col`}>{children}</body>
    </html>
  )
}
