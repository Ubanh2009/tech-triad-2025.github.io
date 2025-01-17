import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import React from 'react'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'WorkWise',
  description: 'Procurement Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
        />
      </head>
      <body className={`${montserrat.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}>
        {children}
      </body>
    </html>
  )
}
