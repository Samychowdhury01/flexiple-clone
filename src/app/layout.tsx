import type { Metadata } from "next"
import { PT_Sans } from "next/font/google"
import "./globals.css"
import type React from "react"

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={ptSans.variable}>
      <body className="font-sans antialiased">
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}

