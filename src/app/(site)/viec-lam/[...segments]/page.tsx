import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Container } from '@/components/site/Container'
import { buildJobHref } from '@/lib/jobs'
import { getJobBySlugOrId, getRelatedJobs } from '@/lib/jobs-api'

export const dynamic = 'force-dynamic'

type JobDetailPageProps = {
  params: Promise<{
    segments: string[]
  }>
}

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-[16px] bg-[#f7f9fc] px-4 py-4">
    <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-slate-400">{label}</p>
    <p className="mt-2 text-[15px] font-semibold text-slate-700">{value}</p>
  </div>
)

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { segments } = await params
  const slug = segments?.[0]
  const rawId = segments?.[1]

  if (!slug) {
    notFound()
  }

  const job = await getJobBySlugOrId(slug, rawId)

  if (!job) {
    notFound()
  }

  const relatedJobs = await getRelatedJobs(job, 6)

  return (
    <main className="bg-[#f4f6fb] pb-20 pt-6">
      <Container>
        <div className="mx-auto max-w-[1180px]">
          <div className="flex flex-wrap items-center gap-2 text-[13px] text-slate-500">
            <Link className="transition hover:text-brand-700" href="/">
              Trang chủ
            </Link>
            <span>/</span>
            <span>Việc làm tốt nhất</span>
            <span>/</span>
            <span className="text-slate-700">{job.title}</span>
          </div>

          <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1fr)_330px]">
            <section className="space-y-6">
              <div className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.06)] sm:p-7">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div
                    className="flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-[18px] border border-slate-200 bg-white text-[24px] font-black shadow-[0_12px_26px_rgba(15,23,42,0.06)]"
                    style={{ color: job.logoAccent }}
                  >
                    {job.logoText}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      {(job.badges ?? []).map((badge) => (
                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase ${
                            badge === 'HOT'
                              ? 'bg-[#ef4444] text-white'
                              : badge === 'TOP'
                                ? 'bg-[#22c55e] text-white'
                                : 'bg-[#f59e0b] text-white'
                          }`}
                          key={badge}
                        >
                          {badge}
                        </span>
                      ))}
                      <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-bold uppercase text-brand-700">
                        Mã tin {job.displayId}
                      </span>
                    </div>
                    <h1 className="max-w-4xl text-[28px] font-bold leading-[1.25] text-[#183153]">{job.title}</h1>
                    <p className="mt-2 text-[16px] font-semibold text-slate-600">{job.company}</p>
                    <div className="mt-3 flex flex-wrap gap-3 text-[13px] text-slate-500">
                      <span>Đăng ngày {job.postedAt}</span>
                      <span>Hạn nộp hồ sơ {job.deadline}</span>
                      <span>{job.quantity}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="inline-flex h-12 items-center justify-center rounded-full bg-brand-500 px-6 text-[15px] font-semibold text-white transition hover:bg-brand-600" type="button">
                    Ứng tuyển ngay
                  </button>
                  <button className="inline-flex h-12 items-center justify-center rounded-full border border-brand-300 bg-white px-6 text-[15px] font-semibold text-brand-700 transition hover:bg-brand-50" type="button">
                    Lưu tin
                  </button>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  <InfoItem label="Mức lương" value={job.salary} />
                  <InfoItem label="Địa điểm" value={job.location} />
                  <InfoItem label="Kinh nghiệm" value={job.experience} />
                  <InfoItem label="Cấp bậc" value={job.level} />
                  <InfoItem label="Hình thức" value={job.workplace} />
                  <InfoItem label="Học vấn" value={job.education} />
                  <InfoItem label="Số lượng tuyển" value={job.quantity} />
                  <InfoItem label="Thời gian làm việc" value={job.workingTime} />
                </div>
              </div>

              <div className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.05)] sm:p-7">
                <h2 className="text-[20px] font-bold text-[#183153]">Chi tiết tin tuyển dụng</h2>
                <div className="mt-6 space-y-7">
                  <section>
                    <h3 className="text-[17px] font-bold text-[#19315a]">Mô tả công việc</h3>
                    <ul className="mt-3 space-y-3 text-[15px] leading-7 text-slate-700">
                      {job.description.map((item) => (
                        <li className="flex gap-3" key={item}>
                          <span className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-[17px] font-bold text-[#19315a]">Yêu cầu ứng viên</h3>
                    <ul className="mt-3 space-y-3 text-[15px] leading-7 text-slate-700">
                      {job.requirements.map((item) => (
                        <li className="flex gap-3" key={item}>
                          <span className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-[#4f46e5]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-[17px] font-bold text-[#19315a]">Quyền lợi</h3>
                    <ul className="mt-3 space-y-3 text-[15px] leading-7 text-slate-700">
                      {job.benefits.map((item) => (
                        <li className="flex gap-3" key={item}>
                          <span className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-[#f59e0b]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-[17px] font-bold text-[#19315a]">Kỹ năng</h3>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {job.skillTags.map((skill) => (
                        <span className="rounded-full bg-[#eef5ff] px-4 py-2 text-[14px] font-medium text-[#24548f]" key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="text-[17px] font-bold text-[#19315a]">Địa điểm làm việc</h3>
                    <div className="mt-3 rounded-[18px] border border-slate-200 bg-[#f8fafc] px-4 py-4 text-[15px] leading-7 text-slate-700">
                      <p>{job.address}</p>
                      <p className="mt-2">Thời gian làm việc: {job.workingTime}</p>
                    </div>
                  </section>
                </div>
              </div>

              <div className="rounded-[22px] border border-[#dfeafe] bg-[#f8fbff] p-5 text-[14px] leading-7 text-slate-600">
                <p className="font-semibold text-[#24548f]">Lưu ý khi ứng tuyển</p>
                <p className="mt-1">
                  Hãy chuẩn bị CV cập nhật, đọc kỹ yêu cầu công việc và đảm bảo thông tin ứng tuyển khớp với vị trí để tăng khả năng phản hồi.
                </p>
              </div>

              <div className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.05)] sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-[20px] font-bold text-[#183153]">Việc làm liên quan</h2>
                  <Link className="text-[14px] font-semibold text-brand-700 transition hover:text-brand-800" href="/">
                    Quay lại danh sách
                  </Link>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {relatedJobs.map((relatedJob) => (
                    <Link
                      className="rounded-[18px] border border-slate-200 bg-white px-4 py-4 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_16px_30px_rgba(15,23,42,0.06)]"
                      href={buildJobHref(relatedJob)}
                      key={relatedJob.id}
                    >
                      <h3 className="text-[16px] font-semibold leading-6 text-[#19315a]">{relatedJob.title}</h3>
                      <p className="mt-2 text-[13px] uppercase text-slate-500">{relatedJob.company}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-[#f3f5f8] px-3 py-1 text-[12px] text-slate-700">{relatedJob.salary}</span>
                        <span className="rounded-full bg-[#f3f5f8] px-3 py-1 text-[12px] text-slate-700">{relatedJob.location}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            <aside className="space-y-6">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.06)]">
                  <div
                    className="flex h-[84px] w-[84px] items-center justify-center rounded-[18px] border border-slate-200 bg-white text-[24px] font-black"
                    style={{ color: job.logoAccent }}
                  >
                    {job.logoText}
                  </div>
                  <h2 className="mt-4 text-[20px] font-bold leading-[1.35] text-[#183153]">{job.company}</h2>
                  <div className="mt-4 space-y-3 text-[14px] leading-6 text-slate-600">
                    <p>
                      <strong className="text-slate-700">Lĩnh vực:</strong> {job.companyField}
                    </p>
                    <p>
                      <strong className="text-slate-700">Quy mô:</strong> {job.companySize}
                    </p>
                    <p>
                      <strong className="text-slate-700">Địa chỉ:</strong> {job.companyAddress}
                    </p>
                  </div>
                  <p className="mt-4 text-[14px] leading-7 text-slate-600">{job.companyOverview}</p>
                  <button className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-full border border-brand-300 bg-brand-50 text-[14px] font-semibold text-brand-700 transition hover:bg-brand-100" type="button">
                    Xem trang công ty
                  </button>
                </div>

                <div className="rounded-[22px] bg-[linear-gradient(180deg,#184a35_0%,#0f2f22_100%)] p-6 text-white shadow-[0_22px_44px_rgba(16,38,29,0.25)]">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/70">Ứng tuyển nhanh</p>
                  <h3 className="mt-3 text-[22px] font-bold leading-[1.3]">Nắm bắt cơ hội với vị trí phù hợp ngay hôm nay</h3>
                  <p className="mt-3 text-[14px] leading-7 text-white/75">
                    Hoàn thiện hồ sơ, ứng tuyển sớm và theo dõi trạng thái để tăng cơ hội được nhà tuyển dụng phản hồi.
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    <button className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-[14px] font-semibold text-brand-700 transition hover:bg-brand-50" type="button">
                      Ứng tuyển ngay
                    </button>
                    <button className="inline-flex h-11 items-center justify-center rounded-full border border-white/25 px-5 text-[14px] font-semibold text-white transition hover:bg-white/10" type="button">
                      Tạo CV phù hợp
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </main>
  )
}
