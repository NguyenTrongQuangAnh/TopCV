import type { SiteArticle, SiteCategory } from '@/lib/content'

export type MockJob = {
  id: string
  slug: string
  categorySlug: string
  title: string
  company: string
  salary: string
  location: string
  region: 'mien-bac' | 'mien-trung' | 'mien-nam'
  badges?: string[]
  logoText: string
  logoAccent: string
  highlighted?: boolean
}

export type MockProCompany = {
  id: string
  name: string
  industry: string
  jobsCount: number
  category:
    | 'Tất cả'
    | 'Ngân hàng'
    | 'Bất động sản'
    | 'Xây dựng'
    | 'IT - Phần mềm'
    | 'Tài chính'
    | 'Bán lẻ - Hàng tiêu dùng - FMCG'
    | 'Sản xuất'
  logoText: string
  logoAccent: string
  featured?: boolean
  featuredTagline?: string
}

export type MockJobCategory = {
  id: string
  name: string
  slug: string
  description: string
  iconLabel: string
  jobsLabel: string
  featuredOrder: number
  accent: string
}

export const mockCategories: SiteCategory[] = [
  {
    id: 'career-growth',
    name: 'Phát triển sự nghiệp',
    slug: 'career-growth',
    description: 'Chiến lược, lộ trình và bài học thực tế để tiến xa hơn trong sự nghiệp.',
    accent: '#199553',
  },
  {
    id: 'job-search',
    name: 'Tìm việc thông minh',
    slug: 'job-search',
    description: 'Chuẩn bị phỏng vấn, tối ưu hồ sơ và cách tiếp cận thị trường tuyển dụng hiệu quả.',
    accent: '#0f7b72',
  },
  {
    id: 'work-skills',
    name: 'Kỹ năng công việc',
    slug: 'work-skills',
    description: 'Kỹ năng vận hành, giao tiếp và phối hợp cần thiết cho đội ngũ hiện đại.',
    accent: '#d16f31',
  },
  {
    id: 'market-insights',
    name: 'Góc nhìn thị trường',
    slug: 'market-insights',
    description: 'Tín hiệu, xu hướng tuyển dụng và biến động đang định hình thị trường lao động.',
    accent: '#4b67d1',
  },
]

export const mockArticles: SiteArticle[] = [
  {
    id: 'playbook-90-days',
    title: 'Cách xây dựng kế hoạch phát triển sự nghiệp 90 ngày thật sự hiệu quả',
    slug: 'how-to-build-a-90-day-career-growth-playbook',
    excerpt:
      'Một khung hành động rõ ràng để đặt mục tiêu theo quý, chọn dự án chứng minh năng lực và duy trì đà phát triển.',
    content: `Cách nhanh nhất để tiến lên trong sự nghiệp là biến khát vọng mơ hồ thành một hệ thống hành động.

Hãy bắt đầu bằng một mục tiêu thực sự quan trọng trong 90 ngày tới. Đó có thể là sẵn sàng cho một vị trí cao hơn, làm mạnh bộ hồ sơ năng lực hoặc chuẩn bị chuyển vai trò.

Tiếp theo, chia mục tiêu đó thành những đầu việc theo tuần có thể nhìn thấy được. Hãy ưu tiên các đầu ra cụ thể như một dự án đã hoàn thành, một quy trình được cải tiến hoặc một bài trình bày có giá trị.

Cuối cùng, tạo vòng rà soát định kỳ. Cứ mỗi hai tuần, hãy tự hỏi điều gì đã tiến triển, điều gì đang chững lại và bằng chứng mới nào đã xuất hiện.

Kế hoạch 90 ngày hiệu quả vì nó thay thế ý định bằng tiến độ có thể đo được.`,
    category: mockCategories[0],
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-12T08:30:00.000Z',
    readTime: 7,
    featured: true,
    tags: ['sự nghiệp', 'kế hoạch', 'phát triển'],
  },
  {
    id: 'interview-story-bank',
    title: 'Hãy chuẩn bị sẵn “ngân hàng câu chuyện” trước mỗi kỳ phỏng vấn',
    slug: 'build-an-interview-story-bank',
    excerpt:
      'Thu thập các câu chuyện có số liệu và kết quả thật từ công việc để trả lời phỏng vấn rõ ràng, tự tin hơn.',
    content: `Một buổi phỏng vấn tốt hiếm khi đến từ việc ứng biến hoàn hảo trong vài phút.

Phần lớn thành công đến từ một “ngân hàng câu chuyện” đã được chuẩn bị trước: những tình huống bạn giải quyết vấn đề, xử lý xung đột, tối ưu quy trình hoặc đưa ra quyết định khó.

Hãy ghi lại bối cảnh, vai trò của bạn, hành động đã thực hiện và kết quả đo được. Bạn nên có ít nhất tám câu chuyện bao phủ các chủ đề như phối hợp, trách nhiệm, thất bại và dẫn dắt.

Khi đã có sẵn bộ câu chuyện, việc chuẩn bị phỏng vấn sẽ nhẹ hơn rất nhiều và có thể lặp lại một cách hiệu quả.`,
    category: mockCategories[1],
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-09T06:00:00.000Z',
    readTime: 5,
    featured: true,
    tags: ['phỏng vấn', 'tìm việc'],
  },
  {
    id: 'operating-rhythm',
    title: 'Nhịp vận hành nào giúp một công ty quy mô vừa trở nên nhanh và gọn hơn',
    slug: 'team-operating-rhythm-that-feels-faster',
    excerpt:
      'Một vài nhịp đơn giản quanh kế hoạch, review và tài liệu hóa có thể giảm ma sát mà không cần tăng thêm thủ tục.',
    content: `Một đội ngũ không thể nhanh hơn chỉ bằng cách có thêm nhiều cuộc họp. Họ nhanh hơn khi giảm được sự mơ hồ.

Hãy thiết lập một nhịp lập kế hoạch, một nhịp review và một nơi duy nhất để ghi lại quyết định. Chỉ riêng việc đó đã có thể cắt giảm đáng kể các cuộc thảo luận lặp lại.

Quản lý nên truyền tải ưu tiên theo lô nhỏ và rõ ràng. Đội ngũ nên báo cáo tiến độ thông qua kết quả thay vì chỉ liệt kê hoạt động.

Khi nhịp vận hành đủ rõ, mọi người sẽ bớt hỏi điều gì là quan trọng và dành nhiều thời gian hơn để tạo ra giá trị.`,
    category: mockCategories[2],
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-05T03:15:00.000Z',
    readTime: 6,
    featured: false,
    tags: ['đội ngũ', 'vận hành'],
  },
  {
    id: 'hiring-signals',
    title: 'Bốn tín hiệu tuyển dụng đang được doanh nghiệp nhìn kỹ hơn trong năm 2026',
    slug: 'four-hiring-signals-companies-watch-closely-in-2026',
    excerpt:
      'Từ bằng chứng triển khai đến chất lượng giao tiếp, ứng viên mạnh ngày nay nổi bật nhờ tín hiệu rõ hơn là chỉ bằng bằng cấp.',
    content: `Thị trường tuyển dụng ngày càng ưu ái những ứng viên biết truyền đạt bằng chứng thay vì chỉ nói về kỳ vọng.

Nhà tuyển dụng muốn thấy kết quả được ghi nhận rõ ràng, khả năng hiểu bối cảnh kinh doanh và năng lực phối hợp liên phòng ban.

Chất lượng của portfolio giờ quan trọng hơn số lượng. Một tập ví dụ nhỏ nhưng sắc nét thường tốt hơn một danh sách dài nhưng thiếu trọng tâm.

Đây là tín hiệu tích cực cho những ai có thể giải thích rõ quyết định của mình và chỉ ra giá trị họ đã tạo ra.`,
    category: mockCategories[3],
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-02T02:00:00.000Z',
    readTime: 4,
    featured: false,
    tags: ['thị trường', 'tuyển dụng', 'góc nhìn'],
  },
  {
    id: 'portfolio-proof',
    title: 'Portfolio nên chứng minh điều gì để tạo khác biệt với nhà tuyển dụng',
    slug: 'portfolio-nen-chung-minh-dieu-gi',
    excerpt:
      'Một portfolio tốt không chỉ đẹp mà còn phải cho thấy cách bạn suy nghĩ, ra quyết định và tạo ra kết quả.',
    content: `Portfolio hiệu quả không cần quá dài, nhưng cần rất rõ về giá trị.

Hãy chọn những dự án có thể chứng minh bạn hiểu vấn đề, đưa ra quyết định hợp lý và tạo ra tác động cụ thể. Mỗi case study nên trả lời được ba câu hỏi: bối cảnh là gì, bạn đã làm gì và kết quả ra sao.

Nhà tuyển dụng thường đánh giá cao các ví dụ có số liệu, trước sau rõ ràng và có giải thích về trade-off. Đó là thứ giúp portfolio trở nên đáng tin hơn nhiều so với việc chỉ liệt kê sản phẩm đã làm.

Nếu bạn muốn nổi bật, hãy tập trung vào chiều sâu phân tích hơn là số lượng dự án.`,
    category: mockCategories[1],
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-16T03:10:00.000Z',
    readTime: 6,
    featured: true,
    tags: ['portfolio', 'tìm việc', 'ứng tuyển'],
  },
  {
    id: 'manager-update',
    title: 'Cách báo cáo tiến độ với quản lý mà không biến thành danh sách việc đã làm',
    slug: 'cach-bao-cao-tien-do-voi-quan-ly',
    excerpt:
      'Một bản cập nhật tốt nên cho thấy kết quả, rủi ro và bước tiếp theo thay vì chỉ kể lại hoạt động hằng ngày.',
    content: `Báo cáo tiến độ hiệu quả là báo cáo giúp người đọc hiểu điều gì đang xảy ra chỉ trong vài phút.

Thay vì liệt kê bạn đã làm gì, hãy chuyển trọng tâm sang ba phần: kết quả đã đạt được, rủi ro đang tồn tại và bước tiếp theo cần ưu tiên. Cách viết này giúp quản lý nắm nhanh tình hình và quyết định hỗ trợ đúng chỗ.

Bạn cũng nên làm rõ phần nào đã hoàn thành, phần nào đang chờ và phần nào cần thêm quyết định từ phía quản lý. Một bản cập nhật gọn, rõ và đều đặn sẽ làm tăng niềm tin hơn rất nhiều.

Khi đội ngũ nào cũng báo cáo theo outcome, tốc độ phối hợp sẽ tăng rõ rệt.`,
    category: mockCategories[2],
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-15T08:20:00.000Z',
    readTime: 5,
    featured: false,
    tags: ['quản lý', 'giao tiếp', 'vận hành'],
  },
  {
    id: 'job-market-april',
    title: 'Thị trường việc làm quý II đang dịch chuyển theo những nhóm kỹ năng nào',
    slug: 'thi-truong-viec-lam-quy-ii-dich-chuyen-theo-ky-nang-nao',
    excerpt:
      'Dữ liệu tuyển dụng cho thấy doanh nghiệp đang ưu tiên rõ hơn các nhóm kỹ năng tạo ra hiệu quả vận hành tức thời.',
    content: `Bước sang quý II, thị trường việc làm cho thấy sự dịch chuyển khá rõ ở các nhóm kỹ năng mang tính ứng dụng cao.

Các vị trí liên quan đến phân tích dữ liệu, vận hành tăng trưởng, tự động hóa quy trình và quản trị dự án đang nhận được nhiều sự quan tâm hơn. Điều này phản ánh nhu cầu tối ưu hiệu quả thay vì mở rộng đội ngũ quá nhanh.

Ứng viên vì thế cũng cần thay đổi cách trình bày hồ sơ. Thay vì chỉ nêu kinh nghiệm, hãy cho thấy kỹ năng của bạn đã giúp cải thiện tốc độ, doanh thu, chất lượng hay chi phí như thế nào.

Kỹ năng mạnh nhất trong giai đoạn này là kỹ năng gắn được với kết quả kinh doanh.`,
    category: mockCategories[3],
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-14T09:00:00.000Z',
    readTime: 7,
    featured: false,
    tags: ['thị trường', 'kỹ năng', 'quý II'],
  },
  {
    id: 'career-pivot',
    title: 'Chuyển hướng nghề nghiệp sau 30 tuổi cần chuẩn bị những gì trước tiên',
    slug: 'chuyen-huong-nghe-nghiep-sau-30-tuoi',
    excerpt:
      'Chuyển hướng không chỉ là đổi công việc, mà là tái định vị kỹ năng, câu chuyện nghề nghiệp và bằng chứng năng lực.',
    content: `Chuyển hướng nghề nghiệp sau 30 tuổi là quyết định lớn, nhưng không đồng nghĩa phải bắt đầu từ con số 0.

Điều đầu tiên cần làm là kiểm kê kỹ năng có thể chuyển đổi. Nhiều kinh nghiệm bạn đã có vẫn mang giá trị ở ngành mới nếu biết diễn đạt đúng. Tiếp theo, hãy xây dựng một câu chuyện nghề nghiệp đủ logic để giải thích vì sao bạn chuyển hướng và vì sao bạn phù hợp.

Cuối cùng, hãy tạo bằng chứng thực tế: dự án thử nghiệm, khóa học có đầu ra hoặc case study nhỏ. Những thứ đó giúp giảm khoảng cách niềm tin với nhà tuyển dụng.

Một cú chuyển hướng tốt luôn bắt đầu bằng sự rõ ràng chứ không chỉ bằng cảm hứng.`,
    category: mockCategories[0],
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-13T10:40:00.000Z',
    readTime: 6,
    featured: false,
    tags: ['chuyển hướng', 'sự nghiệp', '30 tuổi'],
  },
  {
    id: 'job-description-read',
    title: 'Đọc mô tả công việc thế nào để biết đâu là yêu cầu thật sự quan trọng',
    slug: 'doc-mo-ta-cong-viec-the-nao-cho-dung',
    excerpt:
      'Không phải dòng nào trong JD cũng có trọng số như nhau. Vấn đề là tìm ra đâu là phần doanh nghiệp thật sự cần.',
    content: `Một bản mô tả công việc thường dài hơn nhu cầu thực tế của doanh nghiệp.

Khi đọc JD, hãy tách nội dung thành ba nhóm: yêu cầu cốt lõi, yêu cầu cộng thêm và ngôn ngữ mang tính thương hiệu. Nhóm cốt lõi thường liên quan trực tiếp đến công việc hằng ngày hoặc kết quả mong muốn sau khi vào làm.

Nếu bạn chưa khớp toàn bộ, đừng vội bỏ qua. Hãy xem mình đã đáp ứng tốt phần nào quan trọng nhất và có bằng chứng nào để chứng minh điều đó.

Biết đọc JD đúng cách sẽ giúp bạn ứng tuyển chọn lọc hơn và tăng tỷ lệ phản hồi.`,
    category: mockCategories[1],
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-11T02:20:00.000Z',
    readTime: 4,
    featured: false,
    tags: ['JD', 'ứng tuyển', 'tìm việc'],
  },
  {
    id: 'focus-work',
    title: 'Làm sao để giữ được thời gian làm việc sâu trong môi trường nhiều gián đoạn',
    slug: 'lam-sao-de-giu-thoi-gian-lam-viec-sau',
    excerpt:
      'Đội ngũ hiện đại thường mất năng lượng vì bị cắt nhỏ thời gian. Một vài nguyên tắc đơn giản có thể giúp lấy lại nhịp tập trung.',
    content: `Khả năng tập trung sâu đang trở thành một lợi thế cạnh tranh thực sự trong công việc tri thức.

Bạn không thể kiểm soát mọi gián đoạn, nhưng có thể thiết kế lại cách làm việc. Hãy gom các việc phản hồi nhanh vào một khung giờ riêng, dành thời gian đầu ngày cho công việc khó và giảm số lần chuyển ngữ cảnh.

Nếu làm việc theo nhóm, hãy chủ động thống nhất khoảng thời gian “không làm phiền” để mọi người có quyền tập trung. Một môi trường tôn trọng deep work sẽ giúp chất lượng đầu ra cải thiện rất rõ.

Năng suất dài hạn không đến từ bận rộn, mà đến từ khả năng bảo vệ sự chú ý.`,
    category: mockCategories[2],
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-10T11:15:00.000Z',
    readTime: 6,
    featured: false,
    tags: ['tập trung', 'năng suất', 'kỹ năng'],
  },
  {
    id: 'salary-transparency',
    title: 'Xu hướng minh bạch lương đang tác động thế nào đến quyết định ứng tuyển',
    slug: 'xu-huong-minh-bach-luong-va-quyet-dinh-ung-tuyen',
    excerpt:
      'Khi doanh nghiệp công bố khoảng lương sớm hơn, hành vi ứng tuyển và kỳ vọng thương lượng cũng thay đổi đáng kể.',
    content: `Minh bạch lương đang dần trở thành một yếu tố cạnh tranh trong tuyển dụng.

Ứng viên ngày càng ưu tiên những tin tuyển dụng công bố rõ khoảng lương, bởi điều đó giúp họ tiết kiệm thời gian và đánh giá mức độ phù hợp ngay từ đầu. Doanh nghiệp cũng hưởng lợi khi thu hút đúng nhóm ứng viên thay vì nhận quá nhiều hồ sơ không khớp kỳ vọng.

Xu hướng này còn tác động đến cách thương lượng. Khi có dữ liệu rõ hơn, cả hai bên đều bước vào cuộc trao đổi với kỳ vọng thực tế hơn.

Trong dài hạn, minh bạch lương sẽ góp phần làm thị trường tuyển dụng vận hành lành mạnh hơn.`,
    category: mockCategories[3],
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-08T07:45:00.000Z',
    readTime: 5,
    featured: false,
    tags: ['lương', 'thị trường', 'ứng tuyển'],
  },
  {
    id: 'promotion-evidence',
    title: 'Muốn được cân nhắc thăng tiến, bạn cần chuẩn bị bằng chứng gì ngay từ bây giờ',
    slug: 'muon-duoc-can-nhac-thang-tien-can-bang-chung-gi',
    excerpt:
      'Thăng tiến không đến từ cảm giác “đã sẵn sàng” mà đến từ bằng chứng rõ ràng về tác động, trách nhiệm và độ tin cậy.',
    content: `Nhiều người nghĩ rằng chỉ cần làm tốt công việc hiện tại là sẽ tự nhiên được cân nhắc cho bước tiếp theo. Thực tế thường không đơn giản như vậy.

Bạn cần chuẩn bị bằng chứng về ba điều: tác động tạo ra, khả năng gánh trách nhiệm lớn hơn và mức độ tin cậy trong những tình huống quan trọng. Điều đó có thể đến từ dự án khó, vai trò dẫn dắt nhỏ hoặc khả năng giải quyết vấn đề xuyên phòng ban.

Ngoài ra, hãy chủ động ghi lại các kết quả nổi bật. Những bằng chứng đó sẽ rất quan trọng khi đến thời điểm review hoặc trao đổi về lộ trình.

Muốn tiến xa hơn, hãy bắt đầu xây hồ sơ thăng tiến của mình ngay từ hôm nay.`,
    category: mockCategories[0],
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-07T04:35:00.000Z',
    readTime: 6,
    featured: false,
    tags: ['thăng tiến', 'bằng chứng', 'sự nghiệp'],
  },
  {
    id: 'cover-letter-short',
    title: 'Thư giới thiệu ngắn gọn nhưng thuyết phục nên viết theo cấu trúc nào',
    slug: 'thu-gioi-thieu-ngan-gon-nhung-thuyet-phuc',
    excerpt:
      'Một cover letter tốt không cần dài, nhưng phải cho thấy sự phù hợp giữa bạn, vai trò và vấn đề của doanh nghiệp.',
    content: `Nhiều ứng viên viết thư giới thiệu quá dài vì cố gắng kể toàn bộ hành trình của mình.

Thực tế, một cover letter hiệu quả có thể chỉ cần ba phần ngắn: vì sao bạn quan tâm đến vai trò này, kinh nghiệm nào khiến bạn phù hợp và giá trị nào bạn tin mình có thể tạo ra.

Hãy viết cụ thể, tránh dùng các cụm từ chung chung như “đam mê”, “ham học hỏi” nếu không có ví dụ đi kèm. Càng sát với bối cảnh tuyển dụng, thư của bạn càng đáng đọc.

Một thư ngắn, rõ và có trọng tâm thường tạo ấn tượng tốt hơn một văn bản dài nhưng lan man.`,
    category: mockCategories[1],
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-06T09:55:00.000Z',
    readTime: 4,
    featured: false,
    tags: ['cover letter', 'ứng tuyển', 'tìm việc'],
  },
]

export const mockPartners = ['NovaWorks', 'Atlas HR', 'Lighthouse', 'CareerLab', 'SkillFoundry']

export const mockJobs: MockJob[] = [
  {
    id: 'job-1',
    slug: 'nhan-vien-kinh-doanh-tu-van-ban-hang-thiet-bi-van-phong',
    categorySlug: 'kinh-doanh-ban-hang',
    title: 'Nhân Viên Kinh Doanh/ Tư Vấn Bán Hàng Thiết Bị Văn Phòng',
    company: 'CÔNG TY TNHH THẾ GIỚI MÁY PHA',
    salary: '14 - 22 triệu',
    location: 'Hồ Chí Minh (mới)',
    region: 'mien-nam',
    badges: ['NỔI BẬT'],
    logoText: 'TG',
    logoAccent: '#f59e0b',
  },
  {
    id: 'job-2',
    slug: 'nhan-vien-kinh-doanh-tu-van-sales-tai-chinh-thu-nhap-upto-20',
    categorySlug: 'tai-chinh-ngan-hang-bao-hiem',
    title: 'Nhân Viên Kinh Doanh/Tư Vấn/Sales Tài Chính Thu Nhập Upto 20...',
    company: 'CÔNG TY CỔ PHẦN VC FUTURES',
    salary: '15 - 20 triệu',
    location: 'Hà Nội',
    region: 'mien-bac',
    logoText: 'VC',
    logoAccent: '#111827',
  },
  {
    id: 'job-3',
    slug: 'chuyen-vien-kinh-doanh-tu-van-bds-co-luong-cung',
    categorySlug: 'bat-dong-san',
    title: 'Chuyên Viên Kinh Doanh/ Tư Vấn BĐS - Có Lương Cứng',
    company: 'CÔNG TY CỔ PHẦN DKRA VEGA',
    salary: '40 - 65 triệu',
    location: 'Hồ Chí Minh (mới)',
    region: 'mien-nam',
    logoText: 'DK',
    logoAccent: '#dc2626',
  },
  {
    id: 'job-4',
    slug: 'nhan-vien-tu-van-sales-bds-mang-can-ho-cao-cap',
    categorySlug: 'bat-dong-san',
    title: 'Nhân Viên Tư Vấn/Sales BĐS Mảng Căn Hộ Cao Cấp',
    company: 'CÔNG TY CỔ PHẦN BẤT ĐỘNG SẢN BCONS',
    salary: '30 - 100 triệu',
    location: 'Hồ Chí Minh (mới)',
    region: 'mien-nam',
    badges: ['HOT'],
    logoText: 'BC',
    logoAccent: '#f59e0b',
  },
  {
    id: 'job-5',
    slug: 'nhan-vien-kinh-doanh-thu-nhap-10-50-trieu-thang',
    categorySlug: 'kinh-doanh-ban-hang',
    title: 'Nhân Viên Kinh Doanh (Thu Nhập 10-50 Triệu/Tháng)',
    company: 'CÔNG TY CỔ PHẦN ABC SKY',
    salary: '10 - 50 triệu',
    location: 'Hà Nội',
    region: 'mien-bac',
    logoText: 'AB',
    logoAccent: '#ef4444',
  },
  {
    id: 'job-6',
    slug: 'nhan-vien-quan-ly-don-hang-fob-merchandiser-fob-costing',
    categorySlug: 'kinh-doanh-ban-hang',
    title: 'Nhân Viên Quản Lý Đơn Hàng FOB (Merchandiser FOB Costing &...)',
    company: 'CÔNG TY TNHH MAY MẶC T-CONCEPTS',
    salary: '10 - 20 triệu',
    location: 'Hà Nội',
    region: 'mien-bac',
    logoText: 'TLG',
    logoAccent: '#2563eb',
  },
  {
    id: 'job-7',
    slug: 'ke-toan-tong-hop-thu-nhap-den-25-trieu-tu-3-nam-kinh-nghiem',
    categorySlug: 'ke-toan-kiem-toan-thue',
    title: 'Kế Toán Tổng Hợp / Thu Nhập Đến 25 Triệu / Từ 3 Năm Kinh Nghiệm',
    company: 'CÔNG TY TNHH KIM KHÍ ĐIỆN NGỌC MAI',
    salary: 'Tới 25 triệu',
    location: 'Hà Nội',
    region: 'mien-bac',
    logoText: 'VB',
    logoAccent: '#d97706',
  },
  {
    id: 'job-8',
    slug: 'nhan-vien-kinh-doanh-bat-dong-san-luong-cung-toi-15-trieu',
    categorySlug: 'bat-dong-san',
    title: 'Nhân Viên Kinh Doanh Bất Động Sản Lương Cứng Tới 15 Triệu',
    company: 'CÔNG TY CỔ PHẦN ĐỊA ỐC MAI VIỆT',
    salary: 'Từ 50 triệu',
    location: 'Hà Nội',
    region: 'mien-bac',
    logoText: 'MV',
    logoAccent: '#b91c1c',
  },
  {
    id: 'job-9',
    slug: 'specialist-wellbeing-psychologists',
    categorySlug: 'nhan-su-hanh-chinh-phap-che',
    title: 'Specialist, Wellbeing (Psychologists)',
    company: 'Công ty TNHH Vietnam Concentrix Services',
    salary: 'Thoả thuận',
    location: 'Hồ Chí Minh (mới)',
    region: 'mien-nam',
    badges: ['TOP', 'NỔI BẬT'],
    logoText: 'CX',
    logoAccent: '#0f766e',
    highlighted: true,
  },
  {
    id: 'job-10',
    slug: 'nhan-vien-kinh-doanh-san-thuong-mai-dien-tu-fanpage-tiktok',
    categorySlug: 'marketing-pr-quang-cao',
    title: 'Nhân Viên Kinh Doanh Sàn Thương Mại Điện Tử (Fanpage, TikTok,...)',
    company: 'CÔNG TY TNHH SƠN DDM VIỆT NAM',
    salary: '9 - 15 triệu',
    location: 'Hà Nội',
    region: 'mien-bac',
    logoText: 'DDM',
    logoAccent: '#dc2626',
  },
  {
    id: 'job-11',
    slug: 'sap-erp-sales-executive-hn-hcm',
    categorySlug: 'cong-nghe-thong-tin',
    title: 'SAP/ERP Sales Executive (HN/HCM)',
    company: 'CÔNG TY CỔ PHẦN CÔNG NGHỆ CITEK',
    salary: 'Thoả thuận',
    location: 'Hồ Chí Minh (mới)',
    region: 'mien-nam',
    logoText: 'Citek',
    logoAccent: '#0369a1',
  },
  {
    id: 'job-12',
    slug: 'global-sales-executive-sap-services',
    categorySlug: 'cong-nghe-thong-tin',
    title: 'Global Sales Executive - SAP Services',
    company: 'CÔNG TY CỔ PHẦN CÔNG NGHỆ CITEK',
    salary: 'Thoả thuận',
    location: 'Hồ Chí Minh (mới)',
    region: 'mien-nam',
    logoText: 'Citek',
    logoAccent: '#0369a1',
  },
]

export const mockJobCategories: MockJobCategory[] = [
  {
    id: 'sales',
    name: 'Kinh doanh - Bán hàng',
    slug: 'kinh-doanh-ban-hang',
    description: 'Các vị trí kinh doanh, bán hàng và phát triển khách hàng.',
    iconLabel: '$',
    jobsLabel: '13.522 việc làm',
    featuredOrder: 1,
    accent: '#22c55e',
  },
  {
    id: 'marketing',
    name: 'Marketing - PR - Quảng cáo',
    slug: 'marketing-pr-quang-cao',
    description: 'Nhóm ngành marketing, truyền thông, quảng cáo và phát triển thương hiệu.',
    iconLabel: 'PR',
    jobsLabel: '9.384 việc làm',
    featuredOrder: 2,
    accent: '#22c55e',
  },
  {
    id: 'customer-service',
    name: 'Chăm sóc khách hàng (Customer Service)',
    slug: 'cham-soc-khach-hang',
    description: 'Các vị trí chăm sóc khách hàng và hỗ trợ vận hành dịch vụ.',
    iconLabel: 'CS',
    jobsLabel: '3.356 việc làm',
    featuredOrder: 3,
    accent: '#22c55e',
  },
  {
    id: 'hr-admin',
    name: 'Nhân sự - Hành chính - Pháp chế',
    slug: 'nhan-su-hanh-chinh-phap-che',
    description: 'Nhân sự, hành chính, pháp chế và các vai trò hỗ trợ doanh nghiệp.',
    iconLabel: 'HR',
    jobsLabel: '4.390 việc làm',
    featuredOrder: 4,
    accent: '#22c55e',
  },
  {
    id: 'it',
    name: 'Công nghệ Thông tin',
    slug: 'cong-nghe-thong-tin',
    description: 'Phát triển phần mềm, hạ tầng, dữ liệu và các vai trò công nghệ.',
    iconLabel: 'IT',
    jobsLabel: '2.811 việc làm',
    featuredOrder: 5,
    accent: '#22c55e',
  },
  {
    id: 'finance',
    name: 'Tài chính - Ngân hàng - Bảo hiểm',
    slug: 'tai-chinh-ngan-hang-bao-hiem',
    description: 'Tài chính, ngân hàng, bảo hiểm và các vị trí phân tích tài chính.',
    iconLabel: 'TC',
    jobsLabel: '1.383 việc làm',
    featuredOrder: 6,
    accent: '#22c55e',
  },
  {
    id: 'real-estate',
    name: 'Bất động sản',
    slug: 'bat-dong-san',
    description: 'Kinh doanh, đầu tư, tư vấn và vận hành bất động sản.',
    iconLabel: 'BDS',
    jobsLabel: '502 việc làm',
    featuredOrder: 7,
    accent: '#22c55e',
  },
  {
    id: 'accounting',
    name: 'Kế toán - Kiểm toán - Thuế',
    slug: 'ke-toan-kiem-toan-thue',
    description: 'Kế toán, kiểm toán, thuế và kiểm soát tài chính.',
    iconLabel: 'KT',
    jobsLabel: '9.148 việc làm',
    featuredOrder: 8,
    accent: '#22c55e',
  },
]

export const mockProCompanies: MockProCompany[] = [
  {
    id: 'manulife',
    name: 'Công ty TNHH Manulife Việt Nam',
    industry: 'Bảo hiểm',
    jobsCount: 3,
    category: 'Tài chính',
    logoText: 'M',
    logoAccent: '#16a34a',
    featured: true,
    featuredTagline: 'Pro Company',
  },
  {
    id: 'ctin',
    name: 'CÔNG TY CỔ PHẦN VIỄN THÔNG - TIN HỌC BƯU ĐIỆN',
    industry: 'Viễn thông',
    jobsCount: 5,
    category: 'IT - Phần mềm',
    logoText: 'CTIN',
    logoAccent: '#2563eb',
  },
  {
    id: 'daesang',
    name: 'CÔNG TY CỔ PHẦN DAESANG ĐỨC VIỆT',
    industry: 'Bán lẻ - Hàng tiêu dùng - FMCG',
    jobsCount: 6,
    category: 'Bán lẻ - Hàng tiêu dùng - FMCG',
    logoText: 'DS',
    logoAccent: '#f97316',
  },
  {
    id: 'andu',
    name: 'CÔNG TY CỔ PHẦN TRUYỀN THÔNG & DỮ LIỆU AN DƯ',
    industry: 'Logistics - Vận tải',
    jobsCount: 3,
    category: 'IT - Phần mềm',
    logoText: 'AD',
    logoAccent: '#4338ca',
  },
  {
    id: 'haiphat',
    name: 'CÔNG TY CỔ PHẦN ĐẦU TƯ HẢI PHÁT',
    industry: 'Bất động sản',
    jobsCount: 1,
    category: 'Bất động sản',
    logoText: 'HP',
    logoAccent: '#ea580c',
  },
  {
    id: 'phattien',
    name: 'CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ PHÁT TIẾN',
    industry: 'Bán lẻ - Hàng tiêu dùng - FMCG',
    jobsCount: 3,
    category: 'Bán lẻ - Hàng tiêu dùng - FMCG',
    logoText: 'PT',
    logoAccent: '#ef4444',
  },
  {
    id: 'adt',
    name: 'CÔNG TY TNHH TRUYỀN THÔNG ADT',
    industry: 'Marketing / Truyền thông / Quảng cáo',
    jobsCount: 1,
    category: 'IT - Phần mềm',
    logoText: 'adt',
    logoAccent: '#2563eb',
  },
  {
    id: 'phuocthanh',
    name: 'CÔNG TY CỔ PHẦN THIẾT KẾ XÂY DỰNG THƯƠNG MẠI PHƯỚC THÀNH',
    industry: 'Xây dựng',
    jobsCount: 3,
    category: 'Xây dựng',
    logoText: 'PTC',
    logoAccent: '#dc2626',
  },
  {
    id: 'pti',
    name: 'TỔNG CÔNG TY CỔ PHẦN BẢO HIỂM BƯU ĐIỆN',
    industry: 'Bảo hiểm',
    jobsCount: 18,
    category: 'Tài chính',
    logoText: 'PTI',
    logoAccent: '#2563eb',
  },
  {
    id: 'mitek',
    name: 'CÔNG TY TNHH MITEK VIỆT NAM',
    industry: 'Xây dựng',
    jobsCount: 4,
    category: 'Xây dựng',
    logoText: 'MiTek',
    logoAccent: '#1d4ed8',
  },
  {
    id: 'vpbank',
    name: 'NGÂN HÀNG TMCP VIỆT NAM THỊNH VƯỢNG',
    industry: 'Ngân hàng',
    jobsCount: 7,
    category: 'Ngân hàng',
    logoText: 'VP',
    logoAccent: '#15803d',
  },
  {
    id: 'vinamilk',
    name: 'CÔNG TY CỔ PHẦN SỮA VIỆT NAM (VINAMILK)',
    industry: 'Sản xuất',
    jobsCount: 2,
    category: 'Sản xuất',
    logoText: 'VM',
    logoAccent: '#2563eb',
  },
  {
    id: 'vinhomes',
    name: 'CÔNG TY CỔ PHẦN VINHOMES',
    industry: 'Bất động sản',
    jobsCount: 4,
    category: 'Bất động sản',
    logoText: 'VH',
    logoAccent: '#dc2626',
  },
]
