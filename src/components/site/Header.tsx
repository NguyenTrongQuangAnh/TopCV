import Link from 'next/link'

import { VpaHeaderLogo } from '@/components/site/VpaHeaderLogo'

const navItems = [
  { label: 'Việc làm', href: '/articles' },
  { label: 'Ứng viên', href: '/search?q=ung-vien' },
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
              <Link className="inline-flex items-center gap-1.5 whitespace-nowrap leading-none transition hover:text-brand-700" href={item.href} key={item.href}>
                <span>{item.label}</span>
                <span className="translate-y-[1px] text-[10px] text-slate-400">⌄</span>
              </Link>
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
