import './globals.css'
import { Inter as FontSans } from "next/font/google"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { Metadata } from 'next'
import { dark } from '@clerk/themes'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'LiveDocs',
  description: 'Your collaborative editor'
}

export default function RootLayout({ children }: {children: ReactNode} ) {
  return (
    <ClerkProvider appearance={{baseTheme: dark, variables: {colorPrimary: "#3371FF", fontSize: '16px'}}}>
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  )
}
