import type { Metadata } from "next"
import "./globals.css"
import { MotionPreferences } from "@/components/MotionPreferences"

export const metadata: Metadata = {
  title: "Daaman Shah | Software Engineer",
  description:
    "Daaman Shah builds full-stack products, real-time systems, and applied AI applications. Software Engineer at Binghamton University; MS Computer Science, AI Track.",
  openGraph: {
    title: "Daaman Shah | Software Engineer",
    description: "Full-stack products, real-time systems, and applied AI. Explore engineering work, research, and a few side quests.",
    type: "website",
    url: "https://daamanshah.vercel.app/",
  },
  twitter: {
    card: "summary",
    title: "Daaman Shah | Software Engineer",
    description: "Full-stack products, real-time systems, and applied AI.",
  },
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
      <body><MotionPreferences>{children}</MotionPreferences></body>
    </html>
  )
}
