import { Space_Grotesk } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"
import type React from "react"
import localFont from "next/font/local"

const supplyFont = localFont({
  src: "../font/Supply-Regular.ttf",
  variable: "--font-supply",
})

// Configure Space Grotesk with all weights you need
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Flexiple Clone",
  description: "Hire .NET Developers: Affordable, Dedicated .NET Experts in 72 hours",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${supplyFont.variable}`}>
      <body className={spaceGrotesk.className}>
        <div>{children}</div>
      </body>
    </html>
  )
}

