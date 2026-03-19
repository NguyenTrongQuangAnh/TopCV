import type { MockJob } from '@/lib/mock-data'
import { mockJobs } from '@/lib/mock-data'

export type JobDetail = MockJob & {
  displayId: string
  level: string
  experience: string
  education: string
  workplace: string
  quantity: string
  deadline: string
  postedAt: string
  workingTime: string
  address: string
  contactPerson: string
  companySize: string
  companyField: string
  companyAddress: string
  companyOverview: string
  description: string[]
  requirements: string[]
  benefits: string[]
  skillTags: string[]
}

const detailOverrides: Record<
  string,
  Omit<
    JobDetail,
    | 'id'
    | 'categorySlug'
    | 'slug'
    | 'title'
    | 'company'
    | 'salary'
    | 'location'
    | 'region'
    | 'badges'
    | 'logoText'
    | 'logoAccent'
    | 'highlighted'
  >
> = {
  'job-1': {
    displayId: '2080601',
    level: 'Nhân viên',
    experience: 'Từ 1 năm',
    education: 'Cao đẳng trở lên',
    workplace: 'Tại văn phòng',
    quantity: '03 người',
    deadline: '30/04/2026',
    postedAt: '19/03/2026',
    workingTime: 'Thứ 2 - Thứ 6, 08:00 - 17:30',
    address: 'Quận 3, TP. Hồ Chí Minh',
    contactPerson: 'Phòng Tuyển dụng',
    companySize: '100-300 nhân sự',
    companyField: 'Thiết bị văn phòng và giải pháp doanh nghiệp',
    companyAddress: 'Quận 3, TP. Hồ Chí Minh',
    companyOverview:
      'Doanh nghiệp chuyên cung cấp giải pháp máy pha, thiết bị văn phòng và dịch vụ bảo trì cho khách hàng doanh nghiệp trên toàn quốc.',
    description: [
      'Tư vấn giải pháp sản phẩm phù hợp với nhu cầu của khách hàng doanh nghiệp và khách hàng đại lý.',
      'Tìm kiếm khách hàng mới, duy trì mối quan hệ với tập khách hàng hiện hữu và theo dõi cơ hội bán lại.',
      'Phối hợp với đội kỹ thuật và chăm sóc khách hàng để đảm bảo tiến độ triển khai và chất lượng sau bán hàng.',
    ],
    requirements: [
      'Có kinh nghiệm kinh doanh B2B hoặc tư vấn bán hàng từ 1 năm trở lên.',
      'Giao tiếp tốt, chủ động, có khả năng đàm phán và xử lý phản đối.',
      'Ưu tiên ứng viên từng làm các ngành thiết bị, công nghệ hoặc giải pháp doanh nghiệp.',
    ],
    benefits: [
      'Thu nhập gồm lương cứng, hoa hồng và thưởng hiệu quả.',
      'Được đào tạo sản phẩm, quy trình bán hàng và kỹ năng chốt sale.',
      'Tham gia BHXH, BHYT và các chính sách phúc lợi của công ty.',
    ],
    skillTags: ['B2B Sales', 'Tư vấn', 'Đàm phán', 'Chăm sóc khách hàng'],
  },
  'job-2': {
    displayId: '2080602',
    level: 'Nhân viên',
    experience: 'Từ 6 tháng',
    education: 'Trung cấp trở lên',
    workplace: 'Tại văn phòng',
    quantity: '05 người',
    deadline: '28/04/2026',
    postedAt: '19/03/2026',
    workingTime: 'Thứ 2 - Thứ 7, 08:30 - 17:30',
    address: 'Cầu Giấy, Hà Nội',
    contactPerson: 'Khối Kinh doanh',
    companySize: '300-500 nhân sự',
    companyField: 'Dịch vụ tài chính',
    companyAddress: 'Cầu Giấy, Hà Nội',
    companyOverview:
      'VC Futures cung cấp giải pháp tư vấn tài chính cá nhân và doanh nghiệp với trọng tâm là tốc độ xử lý và trải nghiệm khách hàng.',
    description: [
      'Tư vấn sản phẩm tài chính phù hợp theo nhu cầu và hồ sơ khách hàng.',
      'Theo dõi tiến độ xử lý hồ sơ, đảm bảo tỷ lệ chuyển đổi từ lead sang hợp đồng.',
      'Làm việc với đội vận hành để cập nhật thông tin và hỗ trợ khách hàng xuyên suốt quy trình.',
    ],
    requirements: [
      'Kỹ năng tư vấn và giao tiếp tốt qua điện thoại hoặc gặp trực tiếp.',
      'Có tinh thần theo đuổi mục tiêu doanh số rõ ràng.',
      'Ưu tiên ứng viên có nền tảng sales, telesales hoặc tư vấn tài chính.',
    ],
    benefits: [
      'Thu nhập hấp dẫn theo hiệu quả, có thưởng nóng theo tuần/tháng.',
      'Lộ trình thăng tiến rõ ràng lên Team Lead hoặc Supervisor.',
      'Môi trường năng động, có mentor hỗ trợ khi nhận việc.',
    ],
    skillTags: ['Sales', 'Tài chính', 'Telesales', 'Tư vấn khách hàng'],
  },
}

const baseDetail = (job: MockJob, index: number): JobDetail => {
  const fallbackId = String(2080610 + index)

  return {
    ...job,
    displayId: fallbackId,
    level: job.region === 'mien-nam' ? 'Chuyên viên' : 'Nhân viên',
    experience: 'Từ 1 năm',
    education: 'Cao đẳng trở lên',
    workplace: 'Tại văn phòng',
    quantity: '02 người',
    deadline: '30/04/2026',
    postedAt: '19/03/2026',
    workingTime: 'Thứ 2 - Thứ 6, 08:30 - 17:30',
    address: job.location === 'Hà Nội' ? 'Hà Nội' : 'TP. Hồ Chí Minh',
    contactPerson: 'Phòng Nhân sự',
    companySize: '100-500 nhân sự',
    companyField: 'Doanh nghiệp dịch vụ',
    companyAddress: job.location === 'Hà Nội' ? 'Hà Nội' : 'TP. Hồ Chí Minh',
    companyOverview:
      'Doanh nghiệp đang mở rộng đội ngũ với định hướng xây dựng môi trường làm việc chuyên nghiệp, chú trọng hiệu quả và phát triển dài hạn.',
    description: [
      'Phụ trách triển khai các đầu việc chính theo kế hoạch của bộ phận và mục tiêu kinh doanh đã được giao.',
      'Làm việc chặt chẽ với quản lý trực tiếp và các bộ phận liên quan để đảm bảo tiến độ công việc.',
      'Theo dõi chỉ số hiệu quả, báo cáo định kỳ và chủ động đề xuất cải tiến quy trình làm việc.',
    ],
    requirements: [
      'Có khả năng giao tiếp, phối hợp và xử lý công việc theo mục tiêu rõ ràng.',
      'Tinh thần trách nhiệm cao, chủ động và sẵn sàng học hỏi.',
      'Ưu tiên ứng viên có kinh nghiệm ở vị trí tương đương hoặc ngành liên quan.',
    ],
    benefits: [
      'Mức lương cạnh tranh theo năng lực và kết quả công việc.',
      'Được tham gia đầy đủ BHXH, BHYT, BHTN theo quy định.',
      'Có cơ hội phát triển nghề nghiệp trong môi trường đang tăng trưởng.',
    ],
    skillTags: ['Giao tiếp', 'Làm việc nhóm', 'Báo cáo', 'Chủ động'],
  }
}

export const mockJobDetails: JobDetail[] = mockJobs.map((job, index) => ({
  ...baseDetail(job, index),
  ...(detailOverrides[job.id] ?? {}),
}))

export const buildJobHref = (job: Pick<JobDetail, 'slug' | 'id'>) => `/viec-lam/${job.slug}/${job.id}.html`

export const getJobBySlugOrId = (slug: string, rawId?: string) => {
  const normalizedId = rawId?.replace(/\.html$/i, '')

  return (
    mockJobDetails.find((job) => job.slug === slug && (!normalizedId || job.id === normalizedId)) ??
    mockJobDetails.find((job) => job.slug === slug) ??
    null
  )
}

export const getRelatedJobs = (currentJob: JobDetail, limit = 6) =>
  mockJobDetails.filter((job) => job.id !== currentJob.id && job.region === currentJob.region).slice(0, limit)
