'use client'

import Link from 'next/link'

import type { MockJobCategory } from '@/lib/mock-data'

import { Container } from '@/components/site/Container'

type IndustryCard = {
  title: string
  count: string
  icon: string
}

type FeatureCard = {
  title: string
  description: string
  cta: string
  href: string
  visual: string
}

const fallbackIndustries: IndustryCard[] = [
  { title: 'Kinh doanh - Bán hàng', count: '13.522 việc làm', icon: '$' },
  { title: 'Marketing - PR - Quảng cáo', count: '9.384 việc làm', icon: 'PR' },
  { title: 'Chăm sóc khách hàng (Customer Service)', count: '3.356 việc làm', icon: 'CS' },
  { title: 'Nhân sự - Hành chính - Pháp chế', count: '4.390 việc làm', icon: 'HR' },
  { title: 'Công nghệ Thông tin', count: '2.811 việc làm', icon: 'IT' },
  { title: 'Tài chính - Ngân hàng - Bảo hiểm', count: '1.383 việc làm', icon: 'TC' },
  { title: 'Bất động sản', count: '502 việc làm', icon: 'BDS' },
  { title: 'Kế toán - Kiểm toán - Thuế', count: '9.148 việc làm', icon: 'KT' },
]

const personalBrandCards: FeatureCard[] = [
  {
    title: 'TopCV Profile',
    description:
      'TopCV Profile là hồ sơ số năng lực giúp bạn xây dựng thương hiệu cá nhân, thể hiện thế mạnh của bản thân thông qua việc định hình học vấn, kinh nghiệm, dự án, kỹ năng của mình.',
    cta: 'Tạo Profile',
    href: '/admin',
    visual: 'profile',
  },
  {
    title: 'CV Builder 2.0',
    description:
      'Một chiếc CV chuyên nghiệp sẽ giúp bạn gây ấn tượng với nhà tuyển dụng và tăng khả năng vượt qua vòng lọc CV.',
    cta: 'Tạo CV ngay',
    href: '/admin',
    visual: 'cv',
  },
]

const selfDiscoveryCards: FeatureCard[] = [
  {
    title: 'Trắc nghiệm tính cách MBTI',
    description:
      'Kết quả trắc nghiệm MBTI chỉ ra cách bạn nhận thức thế giới xung quanh và ra quyết định trong cuộc sống, từ đó giúp bạn có thêm thông tin để lựa chọn nghề nghiệp chính xác hơn.',
    cta: 'Khám phá ngay',
    href: '/search?q=mbti',
    visual: 'brain',
  },
  {
    title: 'Trắc nghiệm đa trí thông minh MI',
    description:
      'Trả lời câu hỏi “Bạn có trí thông minh nổi trội trong lĩnh vực nào?”, từ đó bạn có thể hiểu bản thân mình hơn và đưa ra các quyết định nghề nghiệp phù hợp.',
    cta: 'Khám phá ngay',
    href: '/search?q=mi',
    visual: 'mind',
  },
]

const VisualBlock = ({ kind }: { kind: FeatureCard['visual'] }) => {
  if (kind === 'profile') {
    return (
      <div className="relative h-[92px] w-[126px]">
        <div className="absolute inset-x-7 bottom-2 h-10 rounded-[10px] bg-[linear-gradient(180deg,#dff7e6,#f7fffa)] shadow-[0_10px_24px_rgba(34,197,94,0.18)]" />
        <div className="absolute left-8 top-3 h-[58px] w-[42px] rounded-[12px] border border-[#9ddfb1] bg-white" />
        <div className="absolute left-[72px] top-5 h-[40px] w-[30px] rounded-full bg-[#61c274]" />
        <div className="absolute left-[59px] top-[38px] h-[28px] w-[56px] rounded-[14px] border border-[#9fdfb1] bg-[#effbf3]" />
        <div className="absolute left-[18px] top-6 h-[54px] w-[82px] skew-x-[-28deg] border border-[#d1f1db]" />
      </div>
    )
  }

  if (kind === 'cv') {
    return (
      <div className="relative h-[92px] w-[126px]">
        <div className="absolute bottom-3 left-[26px] h-[22px] w-[62px] rounded-[8px] bg-[#8fd3a2]" />
        <div className="absolute bottom-5 left-[38px] h-[46px] w-[54px] skew-y-[-12deg] rounded-[8px] bg-[linear-gradient(180deg,#dff8e7,#f7fffa)] shadow-[0_12px_22px_rgba(34,197,94,0.18)]" />
        <div className="absolute bottom-[28px] left-[52px] h-[46px] w-[54px] skew-y-[-12deg] rounded-[8px] bg-[linear-gradient(180deg,#a7e1b5,#ddf7e5)]" />
        <div className="absolute bottom-[42px] left-[66px] h-[46px] w-[54px] skew-y-[-12deg] rounded-[8px] bg-white shadow-[0_12px_22px_rgba(34,197,94,0.18)]" />
        <div className="absolute bottom-[55px] left-[82px] text-[18px] font-bold text-[#4caf63]">CV</div>
      </div>
    )
  }

  if (kind === 'brain') {
    return (
      <div className="relative h-[92px] w-[126px]">
        <div className="absolute bottom-2 left-[26px] h-[54px] w-[74px] rounded-[18px] bg-[linear-gradient(180deg,#dff7e6,#f6fffa)] shadow-[0_10px_24px_rgba(34,197,94,0.18)]" />
        <div className="absolute left-[60px] top-[12px] h-[44px] w-[48px] rounded-[18px] bg-[#62c374]" />
        <div className="absolute left-[44px] top-[18px] h-[28px] w-[22px] rounded-full bg-[#7ad18a]" />
        <div className="absolute left-[98px] top-[30px] h-[4px] w-[16px] rounded-full bg-[#62c374]" />
        <div className="absolute left-[24px] top-[48px] h-[4px] w-[16px] rounded-full bg-[#62c374]" />
        <div className="absolute left-[74px] top-[6px] h-[4px] w-[10px] rounded-full bg-[#62c374]" />
      </div>
    )
  }

  return (
    <div className="relative h-[92px] w-[126px]">
      <div className="absolute bottom-2 left-[34px] h-[54px] w-[54px] rounded-full bg-[linear-gradient(180deg,#dff7e6,#f6fffa)] shadow-[0_10px_24px_rgba(34,197,94,0.18)]" />
      <div className="absolute left-[58px] top-[10px] h-[54px] w-[26px] rounded-[16px] bg-[#6ac77c]" />
      <div className="absolute left-[44px] top-[30px] h-[24px] w-[40px] rounded-full bg-[#7dd38d]" />
      <div className="absolute left-[84px] top-[22px] h-[20px] w-[20px] rounded-full bg-[#8ddd9b]" />
      <div className="absolute left-[72px] top-[60px] h-[14px] w-[14px] rounded-full bg-[#58b86c]" />
    </div>
  )
}

const FeatureCardBlock = ({ card }: { card: FeatureCard }) => (
  <article className="grid min-h-[106px] items-center gap-4 rounded-[10px] bg-[linear-gradient(90deg,#effbf3_0%,#f5fdf8_100%)] px-4 py-3 shadow-[0_10px_24px_rgba(25,149,83,0.06)] sm:grid-cols-[1fr_130px]">
    <div>
      <h3 className="text-[15px] font-bold text-[#24364f]">{card.title}</h3>
      <p className="mt-1 max-w-[390px] text-[11px] leading-[1.55] text-slate-600">{card.description}</p>
      <Link
        className="mt-3 inline-flex h-[24px] items-center rounded-[4px] bg-brand-500 px-3 text-[11px] font-semibold text-white transition hover:bg-brand-600"
        href={card.href}
      >
        {card.cta} →
      </Link>
    </div>
    <div className="flex justify-end">
      <VisualBlock kind={card.visual} />
    </div>
  </article>
)

type CareerGrowthShowcaseProps = {
  jobCategories?: MockJobCategory[]
}

export const CareerGrowthShowcase = ({ jobCategories = [] }: CareerGrowthShowcaseProps) => {
  const industries =
    jobCategories.length > 0
      ? jobCategories.slice(0, 8).map((item) => ({
          title: item.name,
          count: item.jobsLabel,
          icon: item.iconLabel,
        }))
      : fallbackIndustries

  return (
    <section className="bg-white py-9">
      <Container>
        <div className="mx-auto max-w-[610px]">
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-[16px] font-bold text-brand-500">Top ngành nghề nổi bật</h2>
                <p className="mt-1 text-[10px] text-slate-500">
                  Bạn muốn tìm việc mới? Xem danh sách việc làm{' '}
                  <Link className="font-semibold text-brand-500 underline" href="/articles">
                    tại đây
                  </Link>
                </p>
              </div>
              <div className="flex items-center gap-1.5 pt-1">
                <button className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-200 text-[12px] text-slate-300" type="button">
                  ‹
                </button>
                <button className="flex h-5 w-5 items-center justify-center rounded-full border border-brand-400 text-[12px] text-brand-500" type="button">
                  ›
                </button>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-4">
              {industries.map((item) => (
                <article
                  className="rounded-[8px] bg-[#f4f6f8] px-3 py-4 text-center shadow-[inset_0_0_0_1px_rgba(15,23,42,0.02)]"
                  key={item.title}
                >
                  <div className="mx-auto flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[linear-gradient(180deg,#e8fff0,#ffffff)] text-[15px] font-black text-brand-500 shadow-[0_8px_20px_rgba(34,197,94,0.14)]">
                    {item.icon}
                  </div>
                  <h3 className="mt-3 min-h-[32px] text-[11px] font-semibold leading-[1.35] text-slate-700">{item.title}</h3>
                  <p className="mt-1 text-[10px] font-medium text-brand-500">{item.count}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <h2 className="text-[16px] font-bold text-brand-500">Cùng TopCV xây dựng thương hiệu cá nhân</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {personalBrandCards.map((card) => (
                <FeatureCardBlock card={card} key={card.title} />
              ))}
            </div>
          </div>

          <div className="mt-7">
            <h2 className="text-[16px] font-bold text-brand-500">Thấu hiểu bản thân - Nâng tầm giá trị</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {selfDiscoveryCards.map((card) => (
                <FeatureCardBlock card={card} key={card.title} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
