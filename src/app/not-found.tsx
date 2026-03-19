import Link from 'next/link'

import { Container } from '@/components/site/Container'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center py-16">
      <Container>
        <div className="rounded-[36px] border border-brand-100 bg-white p-10 text-center shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">404</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink">Không tìm thấy trang bạn cần.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Bạn có thể quay lại trang chủ, duyệt thư viện bài viết hoặc mở CMS nếu đang muốn quản trị nội dung.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link className="rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700" href="/">
              Trang chủ
            </Link>
            <Link className="rounded-full border border-brand-200 px-5 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50" href="/articles">
              Bài viết
            </Link>
          </div>
        </div>
      </Container>
    </main>
  )
}
