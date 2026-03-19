'use client'

import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'

import { buildJobHref } from '@/lib/jobs'
import type { MockJob } from '@/lib/mock-data'
import { vietnamProvinces } from '@/lib/vietnam-provinces'

import { Container } from '@/components/site/Container'

type BestJobsShowcaseProps = {
  jobs: MockJob[]
}

const JOBS_PER_PAGE = 12

const quickFilters = [
  { label: 'Ngẫu Nhiên', value: 'random' },
  { label: 'Hà Nội', value: 'Hà Nội' },
  { label: 'Thành phố Hồ Chí Minh (cũ)', value: 'Thành phố Hồ Chí Minh (cũ)' },
  { label: 'Miền Bắc', value: 'mien-bac' },
  { label: 'Miền Nam', value: 'mien-nam' },
] as const

const availableLocations = [
  'Tất cả địa điểm',
  'Hà Nội',
  'Hồ Chí Minh (mới)',
  'Thành phố Hồ Chí Minh (cũ)',
  'Đà Nẵng',
  ...vietnamProvinces,
]

const badgeStyles: Record<string, string> = {
  HOT: 'bg-[#ef4444] text-white',
  'NỔI BẬT': 'bg-[#f59e0b] text-white',
  TOP: 'bg-[#22c55e] text-white',
}

export const BestJobsShowcase = ({ jobs }: BestJobsShowcaseProps) => {
  const [activeFilter, setActiveFilter] = useState<(typeof quickFilters)[number]['value']>('random')
  const [selectedLocation, setSelectedLocation] = useState('Tất cả địa điểm')
  const [locationQuery, setLocationQuery] = useState('')
  const [isLocationOpen, setIsLocationOpen] = useState(false)
  const [rotationIndex, setRotationIndex] = useState(0)
  const [page, setPage] = useState(1)
  const locationRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!locationRef.current?.contains(event.target as Node)) {
        setIsLocationOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
    }
  }, [])

  const filteredLocations = availableLocations.filter((location) =>
    location.toLocaleLowerCase('vi').includes(locationQuery.trim().toLocaleLowerCase('vi')),
  )

  const visibleJobs = useMemo(() => {
    const filtered = jobs.filter((job) => {
      if (selectedLocation !== 'Tất cả địa điểm') {
        const normalizedSelected = selectedLocation === 'Thành phố Hồ Chí Minh (cũ)' ? 'Hồ Chí Minh (mới)' : selectedLocation
        if (job.location !== normalizedSelected) {
          return false
        }
      }

      if (activeFilter === 'random') {
        return true
      }

      if (activeFilter === 'mien-bac' || activeFilter === 'mien-nam') {
        return job.region === activeFilter
      }

      const normalizedFilter = activeFilter === 'Thành phố Hồ Chí Minh (cũ)' ? 'Hồ Chí Minh (mới)' : activeFilter
      return job.location === normalizedFilter
    })

    if (activeFilter !== 'random' || filtered.length <= 1) {
      return filtered
    }

    const offset = rotationIndex % filtered.length
    return [...filtered.slice(offset), ...filtered.slice(0, offset)]
  }, [activeFilter, jobs, rotationIndex, selectedLocation])

  const totalPages = Math.max(1, Math.ceil(visibleJobs.length / JOBS_PER_PAGE))
  const paginatedJobs = useMemo(
    () => visibleJobs.slice((page - 1) * JOBS_PER_PAGE, page * JOBS_PER_PAGE),
    [page, visibleJobs],
  )

  useEffect(() => {
    setPage(1)
  }, [activeFilter, selectedLocation, rotationIndex])

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages)
    }
  }, [page, totalPages])

  return (
    <section className="border-t-2 border-brand-500 bg-[#f3f5f7] py-8">
      <Container>
        <div className="mx-auto max-w-[1040px]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                <h2 className="text-[23px] font-bold tracking-tight text-brand-500">Việc làm tốt nhất</h2>
                <div className="inline-flex items-center gap-2 text-[12px] font-bold uppercase text-slate-700">
                  <span className="rounded-full border border-brand-300 px-2 py-0.5 text-[11px] text-brand-600">Đề xuất bởi</span>
                  <span className="text-[20px] leading-none text-brand-700">TOPPYAI</span>
                </div>
              </div>
              <div className="flex items-center gap-4 self-end text-[14px]">
                <button className="font-medium text-slate-700 transition hover:text-brand-700" type="button">
                  Xem tất cả
                </button>
                <div className="flex items-center gap-2">
                  <button className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-400 text-brand-500" type="button">
                    ‹
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-400 text-brand-500" type="button">
                    ›
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <div className="relative w-full lg:w-[250px]" ref={locationRef}>
                <button
                  className="flex h-[36px] w-full items-center gap-2 rounded-[6px] border border-slate-300 bg-white px-3 text-[14px] text-slate-700"
                  onClick={() => setIsLocationOpen((value) => !value)}
                  type="button"
                >
                  <span className="text-slate-400">☰</span>
                  <span className="text-slate-400">Lọc theo:</span>
                  <span className="font-medium text-slate-700">{selectedLocation === 'Tất cả địa điểm' ? 'Địa điểm' : selectedLocation}</span>
                  <span className="ml-auto text-slate-500">⌄</span>
                </button>

                {isLocationOpen ? (
                  <div className="absolute left-0 top-[calc(100%+8px)] z-30 w-full overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                    <div className="border-b border-slate-100 p-3">
                      <input
                        className="h-10 w-full rounded-[10px] border border-slate-200 px-3 text-[14px] outline-none focus:border-brand-400"
                        onChange={(event) => setLocationQuery(event.target.value)}
                        placeholder="Tra cứu tỉnh thành"
                        type="search"
                        value={locationQuery}
                      />
                    </div>
                    <div className="max-h-[240px] overflow-y-auto py-2">
                      {filteredLocations.map((location) => (
                        <button
                          className={`block w-full px-4 py-2.5 text-left text-[14px] transition hover:bg-brand-50 ${
                            selectedLocation === location ? 'bg-brand-50 font-semibold text-brand-700' : 'text-slate-700'
                          }`}
                          key={location}
                          onClick={() => {
                            setSelectedLocation(location)
                            setLocationQuery('')
                            setIsLocationOpen(false)
                          }}
                          type="button"
                        >
                          {location}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-400 text-brand-500"
                  type="button"
                >
                  ‹
                </button>
                {quickFilters.map((filter) => {
                  const active = activeFilter === filter.value

                  return (
                    <button
                      className={`rounded-full px-4 py-2 text-[14px] font-medium transition ${
                        active ? 'bg-brand-500 text-white' : 'bg-[#e9edf2] text-slate-700 hover:bg-[#dfe5ec]'
                      }`}
                      key={filter.value}
                      onClick={() => {
                        setActiveFilter(filter.value)
                        if (filter.value === 'random') {
                          setRotationIndex((value) => value + 3)
                        }
                      }}
                      type="button"
                    >
                      {filter.label}
                    </button>
                  )
                })}
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-400 text-brand-500"
                  type="button"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-[6px] border border-[#8bb6ff] bg-[#f6faff] px-3 py-2 text-[14px] text-slate-700">
              <span className="text-[#7c99ff]">✦</span>
              <span>
                <strong>Gợi ý:</strong> Di chuột vào tiêu đề việc làm để xem thêm thông tin chi tiết
              </span>
              <button className="ml-auto text-slate-400" type="button">
                ×
              </button>
            </div>

            {visibleJobs.length ? (
              <div className="grid gap-4 lg:grid-cols-3">
                {paginatedJobs.map((job) => (
                  <Link
                    className={`rounded-[14px] border bg-white px-3 py-3 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] ${
                      job.highlighted ? 'border-[#7ad266] bg-[#f6fff5]' : 'border-slate-200'
                    }`}
                    href={buildJobHref(job)}
                    key={job.id}
                  >
                    <div className="flex gap-3">
                      <div
                        className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[8px] border border-slate-200 bg-white text-[13px] font-bold"
                        style={{ color: job.logoAccent }}
                      >
                        {job.logoText}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex flex-wrap items-center gap-1.5">
                          {(job.badges ?? []).map((badge) => (
                            <span
                              className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold uppercase ${badgeStyles[badge] ?? 'bg-slate-100 text-slate-700'}`}
                              key={badge}
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                        <h3 className="max-h-[40px] overflow-hidden text-[14px] font-semibold leading-5 text-[#19315a]">{job.title}</h3>
                        <p className="mt-1 truncate text-[11px] uppercase tracking-[0.02em] text-slate-500">{job.company}</p>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-3">
                      <div className="flex min-w-0 flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[#f3f5f8] px-2.5 py-1 text-[12px] text-slate-700">{job.salary}</span>
                        <span className="truncate rounded-full bg-[#f3f5f8] px-2.5 py-1 text-[12px] text-slate-700">{job.location}</span>
                      </div>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-400 text-brand-500">
                        ♡
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="rounded-[16px] border border-dashed border-slate-300 bg-white px-5 py-10 text-center text-[14px] text-slate-500">
                Chưa có thẻ việc làm mẫu cho bộ lọc này. Hãy chọn địa điểm hoặc khu vực khác.
              </div>
            )}

            <div className="flex items-center justify-center gap-4 pt-2 text-[14px] text-slate-500">
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-400 text-brand-500 disabled:cursor-not-allowed disabled:border-slate-200 disabled:text-slate-300"
                disabled={page <= 1}
                onClick={() => setPage((currentPage) => Math.max(1, currentPage - 1))}
                type="button"
              >
                ‹
              </button>
              <span>
                <strong className="text-brand-600">{page}</strong> / {totalPages} trang
              </span>
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-400 text-brand-500 disabled:cursor-not-allowed disabled:border-slate-200 disabled:text-slate-300"
                disabled={page >= totalPages}
                onClick={() => setPage((currentPage) => Math.min(totalPages, currentPage + 1))}
                type="button"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
