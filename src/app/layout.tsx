import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import type { ReactNode } from 'react'

import '@/app/globals.css'

const montserrat = Montserrat({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Hội Nhập Thời Đại',
  description: 'Nền tảng nội dung lấy cảm hứng từ TopCV, tập trung vào bài viết và CMS xuất bản.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={montserrat.variable} lang="vi">
      <body>{children}</body>
    </html>
  )
}
