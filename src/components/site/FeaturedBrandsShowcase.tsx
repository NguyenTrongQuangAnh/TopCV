'use client'

import { useMemo, useState } from 'react'

import type { MockProCompany } from '@/lib/mock-data'

import { Container } from '@/components/site/Container'

type FeaturedBrandsShowcaseProps = {
  companies: MockProCompany[]
}

const brandTabs: MockProCompany['category'][] = [
  'Tất cả',
  'Ngân hàng',
  'Bất động sản',
  'Xây dựng',
  'IT - Phần mềm',
  'Tài chính',
  'Bán lẻ - Hàng tiêu dùng - FMCG',
  'Sản xuất',
]

export const FeaturedBrandsShowcase = ({ companies }: FeaturedBrandsShowcaseProps) => {
  const [activeTab, setActiveTab] = useState<MockProCompany['category']>('Tất cả')

  const filteredCompanies = useMemo(() => {
    if (activeTab === 'Tất cả') {
      return companies
    }

    return companies.filter((company) => company.category === activeTab)
  }, [activeTab, companies])

  const featuredCompany =
    filteredCompanies.find((company) => company.featured) ?? filteredCompanies[0] ?? companies.find((company) => company.featured) ?? companies[0]

  const gridCompanies = filteredCompanies.filter((company) => company.id !== featuredCompany?.id).slice(0, 9)

  return (
    <section className="bg-[#f7f7f8] py-10">
      <Container>
        <div className="mx-auto max-w-[860px] overflow-hidden rounded-[18px] border border-[#efe5d3] bg-white shadow-[0_16px_50px_rgba(35,35,35,0.06)]">
          <div className="relative overflow-hidden bg-[linear-gradient(90deg,#5d4b0b_0%,#8a6f13_48%,#b78a25_100%)] px-6 py-7 text-white">
            <div className="absolute inset-y-0 right-0 w-[54%] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.26),transparent_58%)]" />
            <div className="absolute right-4 top-5 hidden h-[104px] w-[230px] rotate-[-9deg] gap-3 lg:grid lg:grid-cols-4">
              {['VJ', 'VH', 'HP', 'VT', 'PTI', 'ADT', 'DS', 'CT'].map((logo, index) => (
                <div
                  className="flex h-[48px] items-center justify-center rounded-[12px] border border-white/35 bg-white/88 text-[11px] font-black text-slate-600 shadow-[0_10px_24px_rgba(51,39,0,0.18)]"
                  key={`${logo}-${index}`}
                >
                  {logo}
                </div>
              ))}
            </div>
            <div className="relative z-10 max-w-[360px]">
              <h2 className="text-[17px] font-bold">Thương hiệu lớn tiêu biểu</h2>
              <p className="mt-2 text-[13px] font-semibold text-white/95">
                Hàng trăm thương hiệu lớn tiêu biểu đang tuyển dụng trên TopCV Pro
              </p>
            </div>
            <div className="absolute left-[48%] top-[56px] z-10 rounded-full bg-[#ffbf66] px-4 py-1.5 text-[13px] font-semibold text-[#6f4300] shadow-[0_10px_20px_rgba(72,45,0,0.18)]">
              Pro Company
            </div>
            <div className="absolute left-[46%] top-0 h-full w-[22px] bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,241,194,0.9)_45%,rgba(255,255,255,0))] blur-[3px]" />
          </div>

          <div className="px-4 pb-4 pt-3">
            <div className="flex flex-wrap items-center gap-2">
              {brandTabs.map((tab) => {
                const active = activeTab === tab

                return (
                  <button
                    className={`rounded-full px-4 py-2 text-[13px] font-medium transition ${
                      active ? 'bg-[#9c7418] text-white' : 'bg-[#f3f5f7] text-slate-700 hover:bg-[#ebeef2]'
                    }`}
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    type="button"
                  >
                    {tab}
                  </button>
                )
              })}
              <div className="ml-auto flex items-center gap-2">
                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ead8b2] text-[#a2771b]" type="button">
                  ‹
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ead8b2] text-[#a2771b]" type="button">
                  ›
                </button>
              </div>
            </div>

            <div className="relative mt-4">
              <button className="absolute -left-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-400 shadow-[0_8px_24px_rgba(15,23,42,0.12)] lg:flex" type="button">
                ‹
              </button>
              <button className="absolute -right-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-400 shadow-[0_8px_24px_rgba(15,23,42,0.12)] lg:flex" type="button">
                ›
              </button>

              <div className="grid gap-3 lg:grid-cols-[264px_1fr_1fr] lg:auto-rows-[118px]">
                {featuredCompany ? (
                  <article className="relative overflow-hidden rounded-[16px] bg-[linear-gradient(180deg,rgba(72,56,7,0.9),rgba(52,43,9,0.86))] text-white lg:row-span-3">
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(61,49,10,0.12),rgba(37,32,10,0.74)),url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 420%22><rect width=%22300%22 height=%22420%22 fill=%22%234f4316%22/><polygon points=%220,420 80,120 145,120 95,420%22 fill=%22%23715d23%22 opacity=%220.78%22/><polygon points=%2280,420 160,60 215,60 173,420%22 fill=%22%2358441d%22 opacity=%220.88%22/><polygon points=%22155,420 228,150 300,150 260,420%22 fill=%22%2378682d%22 opacity=%220.72%22/></svg>')] bg-cover bg-center" />
                    <div className="relative z-10 flex min-h-full flex-col items-center justify-center px-8 py-9 text-center">
                      <div
                        className="flex h-[90px] w-[90px] items-center justify-center rounded-[10px] border border-white/30 bg-white text-[28px] font-black shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
                        style={{ color: featuredCompany.logoAccent }}
                      >
                        {featuredCompany.logoText}
                      </div>
                      <h3 className="mt-5 text-[18px] font-bold leading-[1.35]">{featuredCompany.name}</h3>
                      <p className="mt-1 text-[15px] text-white/80">{featuredCompany.industry}</p>
                      <div className="mt-4 rounded-full bg-black/30 px-4 py-2 text-[14px] font-semibold">
                        {featuredCompany.jobsCount} việc làm
                      </div>
                      <div className="mt-4 rounded-full bg-[#ffbf66] px-4 py-2 text-[13px] font-semibold text-[#6f4300]">
                        {featuredCompany.featuredTagline ?? 'Pro Company'}
                      </div>
                      <button className="mt-3 rounded-full bg-white px-5 py-2 text-[14px] font-semibold text-slate-700 shadow-[0_8px_20px_rgba(0,0,0,0.18)]" type="button">
                        + Theo dõi
                      </button>
                    </div>
                  </article>
                ) : null}

                {gridCompanies.map((company, index) => {
                  const placeBottomRow = index >= 6

                  return (
                    <article
                      className={`rounded-[16px] border border-[#f3b64c] bg-white px-3 py-3 shadow-[0_8px_24px_rgba(15,23,42,0.04)] ${
                        placeBottomRow ? '' : ''
                      }`}
                      key={company.id}
                    >
                      <div className="flex gap-3">
                        <div
                          className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[8px] border border-slate-200 bg-white text-[14px] font-black"
                          style={{ color: company.logoAccent }}
                        >
                          {company.logoText}
                        </div>
                        <div className="min-w-0">
                          <h3 className="max-h-[42px] overflow-hidden text-[13px] font-bold uppercase leading-[1.4] text-slate-700">
                            {company.name}
                          </h3>
                          <p className="mt-1 text-[12px] text-slate-500">{company.industry}</p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-[13px] text-slate-600">
                        <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-slate-300 text-[10px]">▣</span>
                        <span>{company.jobsCount} việc làm</span>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button className="text-left text-[14px] font-semibold text-[#8c650f]" type="button">
                Tìm hiểu thêm về TopCV Pro?
              </button>
              <button className="inline-flex items-center gap-2 self-start rounded-full bg-[#ffedc9] px-5 py-3 text-[14px] font-semibold text-[#7d5600] sm:self-auto" type="button">
                Truy cập TopCV
                <span className="rounded-full bg-[#ffbf66] px-2 py-0.5 text-[11px] font-bold text-[#6f4300]">Pro</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
