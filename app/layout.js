import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { SiteFooter } from '@/components/site-footer'
import { FloatingCTA } from '@/components/floating-cta'
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'StudyGlobal - Your Gateway to International Education',
  description: 'Find your perfect study abroad program with AI-powered recommendations',
  keywords: 'study abroad, international education, university search, study programs, education abroad',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <SiteFooter />
            <FloatingCTA />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}