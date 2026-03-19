'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import type { SiteArticle } from '@/lib/content'
import type { MockJobCategory } from '@/lib/mock-data'
import { vietnamProvinces } from '@/lib/vietnam-provinces'

import { Container } from '@/components/site/Container'

type SearchHeroProps = {
  featuredArticle: SiteArticle
  categories: MockJobCategory[]
}

const fallbackCategoryLabels = [
  'Kinh doanh - Bán hàng',
  'Marketing - PR - Quảng cáo',
  'Chăm sóc khách hàng',
  'Nhân sự - Hành chính - Pháp chế',
  'Công nghệ Thông tin',
  'Tài chính - Ngân hàng - Bảo hiểm',
]

const allLocations = ['Toàn quốc', ...vietnamProvinces]

export const SearchHero = ({ featuredArticle, categories }: SearchHeroProps) => {
  const [isLocationOpen, setIsLocationOpen] = useState(false)
  const [locationQuery, setLocationQuery] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [directoryPage, setDirectoryPage] = useState(1)
  const locationRef = useRef<HTMLDivElement | null>(null)

  const filteredLocations = allLocations.filter((location) =>
    location.toLocaleLowerCase('vi').includes(locationQuery.trim().toLocaleLowerCase('vi')),
  )
  const directories = categories.length ? categories : fallbackCategoryLabels.map((name, index) => ({
    id: `fallback-${index + 1}`,
    name,
    slug: name,
    description: '',
    iconLabel: '',
    jobsLabel: '',
    featuredOrder: index + 1,
    accent: '#f41822',
  }))
  const directoryPages = Math.max(1, Math.ceil(directories.length / 6))
  const visibleCategories = directories.slice((directoryPage - 1) * 6, directoryPage * 6)

  useEffect(() => {
    if (directoryPage > directoryPages) {
      setDirectoryPage(directoryPages)
    }
  }, [directoryPage, directoryPages])

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!locationRef.current?.contains(event.target as Node)) {
        setIsLocationOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLocationOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const mediaArtBackground =
    "linear-gradient(120deg, rgba(244, 24, 34, 0.06), rgba(255, 255, 255, 0.02)), url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 740 320'><rect width='740' height='320' fill='%23243a40'/><rect x='366' y='0' width='374' height='320' fill='%23596f73'/><rect x='406' y='20' width='294' height='198' rx='8' fill='%23485d61'/><rect x='422' y='34' width='122' height='164' rx='4' fill='%2378959d'/><rect x='558' y='34' width='126' height='164' rx='4' fill='%23354a4e'/><rect x='0' y='0' width='366' height='320' fill='url(%23g)'/><polygon points='266,26 334,160 264,292 228,292 298,160 228,26' fill='%23f41822' opacity='0.58'/><polygon points='252,48 307,160 250,270 236,270 293,160 236,48' fill='%23b11920' opacity='0.68'/><circle cx='508' cy='144' r='58' fill='%2324373b'/><rect x='430' y='232' width='260' height='58' rx='16' fill='%23cababa' opacity='0.9'/><rect x='430' y='232' width='260' height='58' rx='16' fill='url(%23g2)' opacity='0.46'/><rect x='564' y='0' width='176' height='320' fill='url(%23g3)' opacity='0.68'/><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop stop-color='%23152125'/><stop offset='1' stop-color='%231c3d41'/></linearGradient><linearGradient id='g2' x1='0' y1='0' x2='1' y2='1'><stop stop-color='%23ffe1e4'/><stop offset='1' stop-color='%23b65a63'/></linearGradient><linearGradient id='g3' x1='0' y1='0' x2='1' y2='1'><stop stop-color='%230f1517' stop-opacity='0'/><stop offset='1' stop-color='%230f1517' stop-opacity='0.7'/></linearGradient></defs></svg>\")"

  return (
    <section className="topcv-hero relative overflow-hidden bg-[linear-gradient(180deg,#1a2e31_0%,#223d40_44%,#53161c_100%)] pb-[22px] pt-[6px]">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[19vw] min-w-[124px] bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[19vw] min-w-[124px] bg-[linear-gradient(225deg,rgba(136,0,0,0.06),transparent_60%)]" />
      <div className="pointer-events-none absolute left-[-126px] top-[66px] hidden h-[286px] w-[286px] rotate-45 border border-white/10 lg:block" />
      <div className="pointer-events-none absolute right-[-142px] top-[48px] hidden h-[326px] w-[326px] rotate-45 border border-white/10 lg:block" />

      <Container className="px-0 sm:px-0 lg:px-0">
        <div className="mx-auto max-w-[1088px] px-4 sm:px-6 lg:px-0">
          <h1 className="text-center text-[20px] font-bold leading-none text-[#ffd9dc] lg:text-[24px]">
            TopCV - Tạo CV, Tìm việc làm, Tuyển dụng hiệu quả
          </h1>

          <form
            action="/search"
            className="mt-[22px] rounded-full bg-white p-[6px] shadow-[0_20px_54px_rgba(8,23,20,0.22)] lg:ml-0 lg:mr-auto lg:w-[1088px]"
          >
            <div className="flex flex-col gap-2 lg:min-h-[52px] lg:flex-row lg:items-center lg:gap-0">
              <div className="flex-1 px-4 py-3 lg:border-r lg:border-slate-200 lg:px-[14px] lg:py-0">
                <input
                  aria-label="Từ khóa"
                  className="h-full w-full border-0 bg-transparent text-[15px] text-slate-700 outline-none placeholder:text-[#98a2b3]"
                  name="q"
                  placeholder="Vị trí tuyển dụng, tên công ty"
                  type="search"
                />
              </div>

              <div className="relative lg:min-w-[278px]" ref={locationRef}>
                <input name="location" type="hidden" value={selectedLocation} />
                <button
                  aria-expanded={isLocationOpen}
                  aria-haspopup="listbox"
                  className="flex w-full items-center gap-3 px-4 py-3 text-slate-600 lg:min-h-[52px] lg:border-r lg:border-slate-200 lg:px-[18px] lg:py-0"
                  onClick={() => setIsLocationOpen((value) => !value)}
                  type="button"
                >
                  <span className="text-[16px]">⌖</span>
                  <span className={`text-[15px] font-medium ${selectedLocation ? 'text-slate-700' : 'text-[#344054]'}`}>
                    {selectedLocation || 'Địa điểm'}
                  </span>
                  <span className="ml-auto text-[11px] text-slate-400">⌄</span>
                </button>

                {isLocationOpen ? (
                  <div className="absolute left-0 right-0 top-[calc(100%+10px)] z-40 overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_28px_70px_rgba(15,23,42,0.18)]">
                    <div className="border-b border-slate-100 p-3">
                      <input
                        aria-label="Tìm tỉnh thành"
                        className="h-11 w-full rounded-[14px] border border-slate-200 px-4 text-[14px] text-slate-700 outline-none transition focus:border-brand-400"
                        onChange={(event) => setLocationQuery(event.target.value)}
                        placeholder="Tra cứu tỉnh thành"
                        type="search"
                        value={locationQuery}
                      />
                    </div>
                    <div className="max-h-[280px] overflow-y-auto py-2">
                      {filteredLocations.length ? (
                        filteredLocations.map((location) => (
                          <button
                            className={`flex w-full items-center px-4 py-3 text-left text-[14px] transition hover:bg-brand-50 hover:text-brand-700 ${
                              selectedLocation === location ? 'bg-brand-50 font-semibold text-brand-700' : 'text-slate-700'
                            }`}
                            key={location}
                            onClick={() => {
                              setSelectedLocation(location === 'Toàn quốc' ? '' : location)
                              setLocationQuery('')
                              setIsLocationOpen(false)
                            }}
                            type="button"
                          >
                            {location}
                          </button>
                        ))
                      ) : (
                        <div className="px-4 py-4 text-[14px] text-slate-500">Không tìm thấy tỉnh thành phù hợp.</div>
                      )}
                    </div>
                  </div>
                ) : null}
              </div>

              <button
                className="inline-flex h-[40px] items-center justify-center gap-2 rounded-full bg-brand-500 px-9 text-[15px] font-semibold text-white transition hover:bg-brand-600 lg:mr-[1px] lg:min-w-[176px]"
                type="submit"
              >
                <span className="text-[16px]">⌕</span>
                <span>Tìm kiếm</span>
              </button>
            </div>
          </form>

          <div className="mt-[24px] grid gap-[10px] lg:ml-0 lg:mr-auto lg:w-[1088px] lg:grid-cols-[312px_766px]">
            <div className="rounded-[18px] bg-white shadow-card">
              <div className="space-y-0 px-[18px] py-[10px]">
                {visibleCategories.map((item) => (
                  <Link
                    className="flex min-h-[34px] items-center justify-between rounded-xl px-[2px] py-[6px] text-[15px] font-medium text-slate-700 transition hover:bg-slate-50 hover:text-brand-600"
                    href={`/search?q=${encodeURIComponent(item.name)}`}
                    key={item.id}
                  >
                    <span className="truncate pr-3">{item.name}</span>
                    <span className="text-[23px] font-light leading-none text-slate-300">›</span>
                  </Link>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 px-[18px] py-[10px] text-[13px] text-slate-500">
                <span className="font-medium">
                  {directoryPage}/{directoryPages}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-[20px] leading-none text-slate-300 disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={directoryPage <= 1}
                    onClick={() => setDirectoryPage((currentPage) => Math.max(1, currentPage - 1))}
                    type="button"
                  >
                    ‹
                  </button>
                  <button
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-400 text-[20px] leading-none text-brand-600 disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={directoryPage >= directoryPages}
                    onClick={() => setDirectoryPage((currentPage) => Math.min(directoryPages, currentPage + 1))}
                    type="button"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>

            <div className="grid gap-[10px]">
              <div className="overflow-hidden rounded-[18px] bg-[linear-gradient(135deg,#10292b_0%,#15373a_46%,#4f171c_100%)] shadow-card">
                <div className="grid min-h-[160px] gap-0 md:grid-cols-[322px_444px]">
                  <div className="relative px-[22px] py-[18px] text-white">
                    <div className="pointer-events-none absolute right-4 top-4 h-[80px] w-[80px] rounded-full bg-[radial-gradient(circle,rgba(244,24,34,0.18),transparent_70%)]" />
                    <div className="absolute left-[246px] top-[0] hidden h-full w-[58px] lg:block">
                      <div className="absolute left-2 top-[18px] h-[122px] w-[34px] skew-x-[-35deg] bg-[repeating-linear-gradient(180deg,rgba(244,24,34,0.42)_0,rgba(244,24,34,0.42)_3px,transparent_3px,transparent_7px)] opacity-70" />
                    </div>
                    <p className="max-w-[210px] text-[24px] font-bold leading-[1.12]">Tiếp lợi thế, nối thành công</p>
                    <p className="mt-3 max-w-[214px] text-[15px] font-medium leading-[1.55] text-white/78">
                      TopCV - Hệ sinh thái nhân sự tiên phong ứng dụng công nghệ tại Việt Nam
                    </p>
                    <div className="absolute right-[14px] top-1/2 hidden h-[58px] w-[58px] -translate-y-1/2 items-center justify-center rounded-full bg-white/18 text-[28px] text-white backdrop-blur md:flex">
                      ▶
                    </div>
                  </div>

                  <div
                    className="relative min-h-[160px] bg-cover bg-center"
                    style={{
                      backgroundImage: mediaArtBackground,
                    }}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,25,27,0.06),rgba(11,25,27,0.0))]" />
                    <div className="absolute bottom-[8px] right-[14px] rounded-[16px] bg-[rgba(177,25,32,0.22)] px-3 py-1.5 text-right text-[14px] font-bold italic leading-4 text-[#ffe4e6] backdrop-blur">
                      Welcome
                      <br />
                      onboard!
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 rounded-[18px] bg-[linear-gradient(90deg,rgba(31,50,46,0.96),rgba(99,26,34,0.84)_68%,rgba(177,25,32,0.56)_100%)] px-[18px] py-[12px] text-white shadow-card md:min-h-[88px] md:grid-cols-[1.26fr_1fr_106px] md:items-center">
                <div>
                  <p className="text-[16px] font-bold leading-none">
                    <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded bg-brand-500/30 text-[11px] font-bold">▣</span>
                    Thị trường việc làm hôm nay <span className="text-brand-300">18/03/2026</span>
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[13px] font-semibold text-white/88">
                    <span className="rounded-full bg-white/10 px-3 py-1.5">Việc làm đang tuyển: 67.988</span>
                    <span className="rounded-full bg-white/10 px-3 py-1.5">Việc làm mới hôm nay: 5.226</span>
                  </div>
                </div>
                <div className="rounded-[16px] bg-white/10 px-4 py-3 text-[13px] leading-6 text-white/80">
                  Bài viết nổi bật: {featuredArticle.title}
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex h-[68px] w-[68px] flex-col items-center justify-center rounded-[18px] bg-white/10 text-center backdrop-blur">
                    <span className="text-[18px] font-bold text-brand-200">AI</span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">JOB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
