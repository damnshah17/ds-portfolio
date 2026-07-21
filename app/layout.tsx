import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Daaman Shah | Portfolio",
  description:
    "Portfolio of Daaman Shah, a computer science graduate student building full-stack software, AI systems, and product-focused projects.",
  icons: {
    icon: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}