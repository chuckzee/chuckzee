import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chuck Zimmerman\'s Portfolio',
  description: 'A portfolio site I built with NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap&family=Anton" rel="stylesheet"/>
      <body>{children}</body>
    </html>
  )
}
