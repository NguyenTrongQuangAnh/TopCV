import Link from 'next/link'

import { BrandLogo } from '@/components/site/BrandLogo'
import { Container } from '@/components/site/Container'

const footerColumns = [
  {
    title: 'Về nền tảng',
    items: [
      { label: 'Trang chủ', href: '/' },
      { label: 'Thư viện bài viết', href: '/articles' },
      { label: 'Tìm kiếm nội dung', href: '/search' },
      { label: 'Chủ đề nổi bật', href: '/#categories' },
    ],
  },
  {
    title: 'Chuyên mục',
    items: [
      { label: 'Phát triển sự nghiệp', href: '/categories/career-growth' },
      { label: 'Tìm việc thông minh', href: '/categories/job-search' },
      { label: 'Kỹ năng công việc', href: '/categories/work-skills' },
      { label: 'Góc nhìn thị trường', href: '/categories/market-insights' },
    ],
  },
  {
    title: 'Khám phá',
    items: [
      { label: 'Bài viết nổi bật', href: '/articles' },
      { label: 'Xu hướng mới nhất', href: '/search?q=xu huong' },
      { label: 'Kỹ năng cần thiết', href: '/search?q=ky nang' },
      { label: 'Cẩm nang nghề nghiệp', href: '/search?q=su nghiep' },
    ],
  },
  {
    title: 'CMS',
    items: [
      { label: 'Đăng nhập quản trị', href: '/admin' },
      { label: 'Quản lý bài viết', href: '/admin/collections/articles' },
      { label: 'Quản lý chuyên mục', href: '/admin/collections/categories' },
      { label: 'Kho media', href: '/admin/collections/media' },
    ],
  },
]

export const Footer = () => {
  return (
    <footer className="border-t border-brand-100 bg-ink text-white">
      <Container className="py-14">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.45fr_repeat(4,1fr)]">
          <div className="max-w-md">
            <div className="mb-4">
              <BrandLogo compact dark />
            </div>
            <p className="text-sm leading-7 text-white/70">
              Nền tảng nội dung và CMS xuất bản bài viết, được thiết kế theo nhịp thị giác gần với TopCV nhưng tập
              trung hoàn toàn vào trải nghiệm đọc, khám phá chủ đề và quản trị blog.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-white/70">
              <p>Email: toasoan@hoinhapthoidai.vn</p>
              <p>Hotline: 1900 6868</p>
              <p>CMS: xuất bản, lưu nháp, SEO và media trong một nơi</p>
            </div>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">{column.title}</p>
              <div className="space-y-3 text-sm text-white/75">
                {column.items.map((item) => (
                  <Link className="block transition hover:text-white" href={item.href} key={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Hội Nhập Thời Đại. Giao diện nội dung lấy cảm hứng từ cấu trúc portal tuyển dụng hiện đại.</p>
          <div className="flex flex-wrap gap-4">
            <Link className="transition hover:text-white" href="/articles">
              Bài viết mới
            </Link>
            <Link className="transition hover:text-white" href="/search">
              Tìm kiếm
            </Link>
            <Link className="transition hover:text-white" href="/admin">
              Quản trị CMS
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
