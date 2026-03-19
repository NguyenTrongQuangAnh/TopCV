import type { ReactNode } from 'react'

import { Footer } from '@/components/site/Footer'
import { Header } from '@/components/site/Header'

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
