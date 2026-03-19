import Link from 'next/link'

import { VpaHeaderLogo } from '@/components/site/VpaHeaderLogo'

const navItems = [
  {
    label: 'Việc làm',
    href: '/articles',
    children: [
      { label: 'Tìm việc làm', href: '/articles' },
      { label: 'Việc làm đã lưu', href: '/search?q=viec-lam-da-luu' },
      { label: 'Việc làm đã ứng tuyển', href: '/search?q=viec-lam-da-ung-tuyen' },
      { label: 'Việc làm phù hợp', href: '/search?q=viec-lam-phu-hop' },
    ],
  },
  {
    label: 'Ứng viên',
    href: '/search?q=ung-vien',
    children: [
      { label: 'Tuyển dụng', href: '/search?q=tuyen-dung' },
      { label: 'Ứng tuyển', href: '/search?q=ung-tuyen' },
    ],
  },
  { label: 'Diễn đàn', href: '/search?q=dien-dan' },
]

export const Header = () => {
  return (
    <>
      <div className="h-[3px] bg-[#2f3940]" />
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
        <div className="flex min-h-[58px] w-full items-center px-[16px] sm:px-[20px] xl:px-[22px]">
          <div className="flex min-h-[58px] w-[188px] shrink-0 items-center">
            <VpaHeaderLogo />
          </div>
          <nav className="ml-[20px] hidden items-center gap-[30px] text-[15px] font-semibold text-[#344054] xl:flex">
            {navItems.map((item) => (
              <div className="group relative" key={item.href}>
                <Link
                  className="inline-flex items-center gap-1.5 whitespace-nowrap leading-none transition hover:text-brand-700"
                  href={item.href}
                >
                  <span>{item.label}</span>
                  <span className="translate-y-[1px] text-[10px] text-slate-400">⌄</span>
                </Link>

                {item.children?.length ? (
                  <div className="pointer-events-none absolute left-0 top-full z-40 pt-4 opacity-0 transition duration-150 group-hover:pointer-events-auto group-hover:opacity-100">
                    <div className="min-w-[220px] overflow-hidden rounded-[18px] border border-slate-200 bg-white py-2 shadow-[0_18px_48px_rgba(15,23,42,0.12)]">
                      {item.children.map((child) => (
                        <Link
                          className="flex items-center px-4 py-3 text-[14px] font-medium text-slate-700 transition hover:bg-brand-50 hover:text-brand-700"
                          href={child.href}
                          key={child.href}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
          <div className="ml-auto flex shrink-0 items-center gap-[12px]">
            <Link
              className="hidden h-[34px] min-w-[90px] items-center justify-center rounded-full border border-brand-500 px-4 text-[12px] font-semibold text-brand-600 transition hover:bg-brand-50 lg:inline-flex"
              href="/search?q=dang-ky"
            >
              Đăng ký
            </Link>
            <Link
              className="inline-flex h-[34px] min-w-[88px] items-center justify-center rounded-full bg-brand-500 px-4 text-[12px] font-semibold text-white transition hover:bg-brand-600"
              href="/admin"
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
