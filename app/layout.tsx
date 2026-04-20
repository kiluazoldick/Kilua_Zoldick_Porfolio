import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from './i18n/language-provider'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'Kilua Zoldick — Front-End Developer & Founder',
  description:
    'Portfolio of Kilua Zoldick — Front-End Developer, UI/UX Designer and Founder of Zoldick Entreprise. Based in Douala, Cameroon.',
  keywords: [
    'Kilua Zoldick',
    'Front-End Developer',
    'UI/UX Designer',
    'Zoldick Entreprise',
    'CorrigeTesCours',
    'Next.js',
    'Cameroon developer',
  ],
  authors: [{ name: 'Kilua Zoldick' }],
  openGraph: {
    title: 'Kilua Zoldick — Front-End Developer & Founder',
    description:
      'Front-End Developer, UI/UX Designer and CEO of Zoldick Entreprise. I design and build modern web products.',
    type: 'website',
  },
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <LanguageProvider>
            <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
              <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
                <Header />
                {children}
                <Footer />
              </div>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
