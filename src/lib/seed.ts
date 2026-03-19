import type { Payload } from 'payload'

import { mockJobCategories } from '@/lib/mock-data'
import { mockJobDetails } from '@/lib/jobs'

type SeedUser = {
  email?: string
  password?: string
  name: string
  role: 'admin' | 'editor'
}

const parseSeedDate = (value: string) => {
  const [day, month, year] = value.split('/')

  if (!day || !month || !year) {
    return new Date().toISOString()
  }

  return new Date(`${year}-${month}-${day}T09:00:00.000+07:00`).toISOString()
}

const categorySeed = [
  {
    name: 'Phát triển sự nghiệp',
    slug: 'career-growth',
    description: 'Chiến lược, lộ trình và bài học thực tế để tiến xa hơn trong sự nghiệp.',
    accent: '#199553',
    featuredOrder: 1,
  },
  {
    name: 'Tìm việc thông minh',
    slug: 'job-search',
    description: 'Chuẩn bị phỏng vấn, tối ưu hồ sơ và cách tiếp cận thị trường tuyển dụng hiệu quả.',
    accent: '#0f7b72',
    featuredOrder: 2,
  },
  {
    name: 'Kỹ năng công việc',
    slug: 'work-skills',
    description: 'Kỹ năng vận hành, giao tiếp và phối hợp cần thiết cho đội ngũ hiện đại.',
    accent: '#d16f31',
    featuredOrder: 3,
  },
  {
    name: 'Góc nhìn thị trường',
    slug: 'market-insights',
    description: 'Tín hiệu, xu hướng tuyển dụng và biến động đang định hình thị trường lao động.',
    accent: '#4b67d1',
    featuredOrder: 4,
  },
]

const articleSeed = [
  {
    title: 'Cách xây dựng kế hoạch phát triển sự nghiệp 90 ngày thật sự hiệu quả',
    slug: 'how-to-build-a-90-day-career-growth-playbook',
    excerpt:
      'Một khung hành động rõ ràng để đặt mục tiêu theo quý, chọn dự án chứng minh năng lực và duy trì đà phát triển.',
    content:
      'Cách nhanh nhất để tiến lên trong sự nghiệp là biến khát vọng mơ hồ thành một hệ thống hành động.\n\nHãy bắt đầu bằng một mục tiêu thực sự quan trọng trong 90 ngày tới. Đó có thể là sẵn sàng cho một vị trí cao hơn, làm mạnh bộ hồ sơ năng lực hoặc chuẩn bị chuyển vai trò.\n\nTiếp theo, chia mục tiêu đó thành những đầu việc theo tuần có thể nhìn thấy được. Hãy ưu tiên các đầu ra cụ thể như một dự án đã hoàn thành, một quy trình được cải tiến hoặc một bài trình bày có giá trị.\n\nCuối cùng, tạo vòng rà soát định kỳ. Cứ mỗi hai tuần, hãy tự hỏi điều gì đã tiến triển, điều gì đang chững lại và bằng chứng mới nào đã xuất hiện.\n\nKế hoạch 90 ngày hiệu quả vì nó thay thế ý định bằng tiến độ có thể đo được.',
    categorySlug: 'career-growth',
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-12T08:30:00.000Z',
    readTime: 7,
    featured: true,
    _status: 'published',
    tags: ['sự nghiệp', 'kế hoạch', 'phát triển'],
  },
  {
    title: 'Hãy chuẩn bị sẵn “ngân hàng câu chuyện” trước mỗi kỳ phỏng vấn',
    slug: 'build-an-interview-story-bank',
    excerpt:
      'Thu thập các câu chuyện có số liệu và kết quả thật từ công việc để trả lời phỏng vấn rõ ràng, tự tin hơn.',
    content:
      'Một buổi phỏng vấn tốt hiếm khi đến từ việc ứng biến hoàn hảo trong vài phút.\n\nPhần lớn thành công đến từ một “ngân hàng câu chuyện” đã được chuẩn bị trước: những tình huống bạn giải quyết vấn đề, xử lý xung đột, tối ưu quy trình hoặc đưa ra quyết định khó.\n\nHãy ghi lại bối cảnh, vai trò của bạn, hành động đã thực hiện và kết quả đo được. Bạn nên có ít nhất tám câu chuyện bao phủ các chủ đề như phối hợp, trách nhiệm, thất bại và dẫn dắt.\n\nKhi đã có sẵn bộ câu chuyện, việc chuẩn bị phỏng vấn sẽ nhẹ hơn rất nhiều và có thể lặp lại một cách hiệu quả.',
    categorySlug: 'job-search',
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-09T06:00:00.000Z',
    readTime: 5,
    featured: true,
    _status: 'published',
    tags: ['phỏng vấn', 'tìm việc'],
  },
  {
    title: 'Nhịp vận hành nào giúp một công ty quy mô vừa trở nên nhanh và gọn hơn',
    slug: 'team-operating-rhythm-that-feels-faster',
    excerpt:
      'Một vài nhịp đơn giản quanh kế hoạch, review và tài liệu hóa có thể giảm ma sát mà không cần tăng thêm thủ tục.',
    content:
      'Một đội ngũ không thể nhanh hơn chỉ bằng cách có thêm nhiều cuộc họp. Họ nhanh hơn khi giảm được sự mơ hồ.\n\nHãy thiết lập một nhịp lập kế hoạch, một nhịp review và một nơi duy nhất để ghi lại quyết định. Chỉ riêng việc đó đã có thể cắt giảm đáng kể các cuộc thảo luận lặp lại.\n\nQuản lý nên truyền tải ưu tiên theo lô nhỏ và rõ ràng. Đội ngũ nên báo cáo tiến độ thông qua kết quả thay vì chỉ liệt kê hoạt động.\n\nKhi nhịp vận hành đủ rõ, mọi người sẽ bớt hỏi điều gì là quan trọng và dành nhiều thời gian hơn để tạo ra giá trị.',
    categorySlug: 'work-skills',
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-05T03:15:00.000Z',
    readTime: 6,
    featured: false,
    _status: 'published',
    tags: ['đội ngũ', 'vận hành'],
  },
  {
    title: 'Bốn tín hiệu tuyển dụng đang được doanh nghiệp nhìn kỹ hơn trong năm 2026',
    slug: 'four-hiring-signals-companies-watch-closely-in-2026',
    excerpt:
      'Từ bằng chứng triển khai đến chất lượng giao tiếp, ứng viên mạnh ngày nay nổi bật nhờ tín hiệu rõ hơn là chỉ bằng bằng cấp.',
    content:
      'Thị trường tuyển dụng ngày càng ưu ái những ứng viên biết truyền đạt bằng chứng thay vì chỉ nói về kỳ vọng.\n\nNhà tuyển dụng muốn thấy kết quả được ghi nhận rõ ràng, khả năng hiểu bối cảnh kinh doanh và năng lực phối hợp liên phòng ban.\n\nChất lượng của portfolio giờ quan trọng hơn số lượng. Một tập ví dụ nhỏ nhưng sắc nét thường tốt hơn một danh sách dài nhưng thiếu trọng tâm.\n\nĐây là tín hiệu tích cực cho những ai có thể giải thích rõ quyết định của mình và chỉ ra giá trị họ đã tạo ra.',
    categorySlug: 'market-insights',
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-02T02:00:00.000Z',
    readTime: 4,
    featured: false,
    _status: 'published',
    tags: ['thị trường', 'tuyển dụng', 'góc nhìn'],
  },
  {
    title: 'Portfolio nên chứng minh điều gì để tạo khác biệt với nhà tuyển dụng',
    slug: 'portfolio-nen-chung-minh-dieu-gi',
    excerpt:
      'Một portfolio tốt không chỉ đẹp mà còn phải cho thấy cách bạn suy nghĩ, ra quyết định và tạo ra kết quả.',
    content:
      'Portfolio hiệu quả không cần quá dài, nhưng cần rất rõ về giá trị.\n\nHãy chọn những dự án có thể chứng minh bạn hiểu vấn đề, đưa ra quyết định hợp lý và tạo ra tác động cụ thể. Mỗi case study nên trả lời được ba câu hỏi: bối cảnh là gì, bạn đã làm gì và kết quả ra sao.\n\nNhà tuyển dụng thường đánh giá cao các ví dụ có số liệu, trước sau rõ ràng và có giải thích về trade-off. Đó là thứ giúp portfolio trở nên đáng tin hơn nhiều so với việc chỉ liệt kê sản phẩm đã làm.\n\nNếu bạn muốn nổi bật, hãy tập trung vào chiều sâu phân tích hơn là số lượng dự án.',
    categorySlug: 'job-search',
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-16T03:10:00.000Z',
    readTime: 6,
    featured: true,
    _status: 'published',
    tags: ['portfolio', 'tìm việc', 'ứng tuyển'],
  },
  {
    title: 'Cách báo cáo tiến độ với quản lý mà không biến thành danh sách việc đã làm',
    slug: 'cach-bao-cao-tien-do-voi-quan-ly',
    excerpt:
      'Một bản cập nhật tốt nên cho thấy kết quả, rủi ro và bước tiếp theo thay vì chỉ kể lại hoạt động hằng ngày.',
    content:
      'Báo cáo tiến độ hiệu quả là báo cáo giúp người đọc hiểu điều gì đang xảy ra chỉ trong vài phút.\n\nThay vì liệt kê bạn đã làm gì, hãy chuyển trọng tâm sang ba phần: kết quả đã đạt được, rủi ro đang tồn tại và bước tiếp theo cần ưu tiên. Cách viết này giúp quản lý nắm nhanh tình hình và quyết định hỗ trợ đúng chỗ.\n\nBạn cũng nên làm rõ phần nào đã hoàn thành, phần nào đang chờ và phần nào cần thêm quyết định từ phía quản lý. Một bản cập nhật gọn, rõ và đều đặn sẽ làm tăng niềm tin hơn rất nhiều.\n\nKhi đội ngũ nào cũng báo cáo theo outcome, tốc độ phối hợp sẽ tăng rõ rệt.',
    categorySlug: 'work-skills',
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-15T08:20:00.000Z',
    readTime: 5,
    featured: false,
    _status: 'published',
    tags: ['quản lý', 'giao tiếp', 'vận hành'],
  },
  {
    title: 'Thị trường việc làm quý II đang dịch chuyển theo những nhóm kỹ năng nào',
    slug: 'thi-truong-viec-lam-quy-ii-dich-chuyen-theo-ky-nang-nao',
    excerpt:
      'Dữ liệu tuyển dụng cho thấy doanh nghiệp đang ưu tiên rõ hơn các nhóm kỹ năng tạo ra hiệu quả vận hành tức thời.',
    content:
      'Bước sang quý II, thị trường việc làm cho thấy sự dịch chuyển khá rõ ở các nhóm kỹ năng mang tính ứng dụng cao.\n\nCác vị trí liên quan đến phân tích dữ liệu, vận hành tăng trưởng, tự động hóa quy trình và quản trị dự án đang nhận được nhiều sự quan tâm hơn. Điều này phản ánh nhu cầu tối ưu hiệu quả thay vì mở rộng đội ngũ quá nhanh.\n\nỨng viên vì thế cũng cần thay đổi cách trình bày hồ sơ. Thay vì chỉ nêu kinh nghiệm, hãy cho thấy kỹ năng của bạn đã giúp cải thiện tốc độ, doanh thu, chất lượng hay chi phí như thế nào.\n\nKỹ năng mạnh nhất trong giai đoạn này là kỹ năng gắn được với kết quả kinh doanh.',
    categorySlug: 'market-insights',
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-14T09:00:00.000Z',
    readTime: 7,
    featured: false,
    _status: 'published',
    tags: ['thị trường', 'kỹ năng', 'quý II'],
  },
  {
    title: 'Chuyển hướng nghề nghiệp sau 30 tuổi cần chuẩn bị những gì trước tiên',
    slug: 'chuyen-huong-nghe-nghiep-sau-30-tuoi',
    excerpt:
      'Chuyển hướng không chỉ là đổi công việc, mà là tái định vị kỹ năng, câu chuyện nghề nghiệp và bằng chứng năng lực.',
    content:
      'Chuyển hướng nghề nghiệp sau 30 tuổi là quyết định lớn, nhưng không đồng nghĩa phải bắt đầu từ con số 0.\n\nĐiều đầu tiên cần làm là kiểm kê kỹ năng có thể chuyển đổi. Nhiều kinh nghiệm bạn đã có vẫn mang giá trị ở ngành mới nếu biết diễn đạt đúng. Tiếp theo, hãy xây dựng một câu chuyện nghề nghiệp đủ logic để giải thích vì sao bạn chuyển hướng và vì sao bạn phù hợp.\n\nCuối cùng, hãy tạo bằng chứng thực tế: dự án thử nghiệm, khóa học có đầu ra hoặc case study nhỏ. Những thứ đó giúp giảm khoảng cách niềm tin với nhà tuyển dụng.\n\nMột cú chuyển hướng tốt luôn bắt đầu bằng sự rõ ràng chứ không chỉ bằng cảm hứng.',
    categorySlug: 'career-growth',
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-13T10:40:00.000Z',
    readTime: 6,
    featured: false,
    _status: 'published',
    tags: ['chuyển hướng', 'sự nghiệp', '30 tuổi'],
  },
  {
    title: 'Đọc mô tả công việc thế nào để biết đâu là yêu cầu thật sự quan trọng',
    slug: 'doc-mo-ta-cong-viec-the-nao-cho-dung',
    excerpt:
      'Không phải dòng nào trong JD cũng có trọng số như nhau. Vấn đề là tìm ra đâu là phần doanh nghiệp thật sự cần.',
    content:
      'Một bản mô tả công việc thường dài hơn nhu cầu thực tế của doanh nghiệp.\n\nKhi đọc JD, hãy tách nội dung thành ba nhóm: yêu cầu cốt lõi, yêu cầu cộng thêm và ngôn ngữ mang tính thương hiệu. Nhóm cốt lõi thường liên quan trực tiếp đến công việc hằng ngày hoặc kết quả mong muốn sau khi vào làm.\n\nNếu bạn chưa khớp toàn bộ, đừng vội bỏ qua. Hãy xem mình đã đáp ứng tốt phần nào quan trọng nhất và có bằng chứng nào để chứng minh điều đó.\n\nBiết đọc JD đúng cách sẽ giúp bạn ứng tuyển chọn lọc hơn và tăng tỷ lệ phản hồi.',
    categorySlug: 'job-search',
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-11T02:20:00.000Z',
    readTime: 4,
    featured: false,
    _status: 'published',
    tags: ['JD', 'ứng tuyển', 'tìm việc'],
  },
  {
    title: 'Làm sao để giữ được thời gian làm việc sâu trong môi trường nhiều gián đoạn',
    slug: 'lam-sao-de-giu-thoi-gian-lam-viec-sau',
    excerpt:
      'Đội ngũ hiện đại thường mất năng lượng vì bị cắt nhỏ thời gian. Một vài nguyên tắc đơn giản có thể giúp lấy lại nhịp tập trung.',
    content:
      'Khả năng tập trung sâu đang trở thành một lợi thế cạnh tranh thực sự trong công việc tri thức.\n\nBạn không thể kiểm soát mọi gián đoạn, nhưng có thể thiết kế lại cách làm việc. Hãy gom các việc phản hồi nhanh vào một khung giờ riêng, dành thời gian đầu ngày cho công việc khó và giảm số lần chuyển ngữ cảnh.\n\nNếu làm việc theo nhóm, hãy chủ động thống nhất khoảng thời gian “không làm phiền” để mọi người có quyền tập trung. Một môi trường tôn trọng deep work sẽ giúp chất lượng đầu ra cải thiện rất rõ.\n\nNăng suất dài hạn không đến từ bận rộn, mà đến từ khả năng bảo vệ sự chú ý.',
    categorySlug: 'work-skills',
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-10T11:15:00.000Z',
    readTime: 6,
    featured: false,
    _status: 'published',
    tags: ['tập trung', 'năng suất', 'kỹ năng'],
  },
  {
    title: 'Xu hướng minh bạch lương đang tác động thế nào đến quyết định ứng tuyển',
    slug: 'xu-huong-minh-bach-luong-va-quyet-dinh-ung-tuyen',
    excerpt:
      'Khi doanh nghiệp công bố khoảng lương sớm hơn, hành vi ứng tuyển và kỳ vọng thương lượng cũng thay đổi đáng kể.',
    content:
      'Minh bạch lương đang dần trở thành một yếu tố cạnh tranh trong tuyển dụng.\n\nỨng viên ngày càng ưu tiên những tin tuyển dụng công bố rõ khoảng lương, bởi điều đó giúp họ tiết kiệm thời gian và đánh giá mức độ phù hợp ngay từ đầu. Doanh nghiệp cũng hưởng lợi khi thu hút đúng nhóm ứng viên thay vì nhận quá nhiều hồ sơ không khớp kỳ vọng.\n\nXu hướng này còn tác động đến cách thương lượng. Khi có dữ liệu rõ hơn, cả hai bên đều bước vào cuộc trao đổi với kỳ vọng thực tế hơn.\n\nTrong dài hạn, minh bạch lương sẽ góp phần làm thị trường tuyển dụng vận hành lành mạnh hơn.',
    categorySlug: 'market-insights',
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-08T07:45:00.000Z',
    readTime: 5,
    featured: false,
    _status: 'published',
    tags: ['lương', 'thị trường', 'ứng tuyển'],
  },
  {
    title: 'Muốn được cân nhắc thăng tiến, bạn cần chuẩn bị bằng chứng gì ngay từ bây giờ',
    slug: 'muon-duoc-can-nhac-thang-tien-can-bang-chung-gi',
    excerpt:
      'Thăng tiến không đến từ cảm giác “đã sẵn sàng” mà đến từ bằng chứng rõ ràng về tác động, trách nhiệm và độ tin cậy.',
    content:
      'Nhiều người nghĩ rằng chỉ cần làm tốt công việc hiện tại là sẽ tự nhiên được cân nhắc cho bước tiếp theo. Thực tế thường không đơn giản như vậy.\n\nBạn cần chuẩn bị bằng chứng về ba điều: tác động tạo ra, khả năng gánh trách nhiệm lớn hơn và mức độ tin cậy trong những tình huống quan trọng. Điều đó có thể đến từ dự án khó, vai trò dẫn dắt nhỏ hoặc khả năng giải quyết vấn đề xuyên phòng ban.\n\nNgoài ra, hãy chủ động ghi lại các kết quả nổi bật. Những bằng chứng đó sẽ rất quan trọng khi đến thời điểm review hoặc trao đổi về lộ trình.\n\nMuốn tiến xa hơn, hãy bắt đầu xây hồ sơ thăng tiến của mình ngay từ hôm nay.',
    categorySlug: 'career-growth',
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-07T04:35:00.000Z',
    readTime: 6,
    featured: false,
    _status: 'published',
    tags: ['thăng tiến', 'bằng chứng', 'sự nghiệp'],
  },
  {
    title: 'Thư giới thiệu ngắn gọn nhưng thuyết phục nên viết theo cấu trúc nào',
    slug: 'thu-gioi-thieu-ngan-gon-nhung-thuyet-phuc',
    excerpt:
      'Một cover letter tốt không cần dài, nhưng phải cho thấy sự phù hợp giữa bạn, vai trò và vấn đề của doanh nghiệp.',
    content:
      'Nhiều ứng viên viết thư giới thiệu quá dài vì cố gắng kể toàn bộ hành trình của mình.\n\nThực tế, một cover letter hiệu quả có thể chỉ cần ba phần ngắn: vì sao bạn quan tâm đến vai trò này, kinh nghiệm nào khiến bạn phù hợp và giá trị nào bạn tin mình có thể tạo ra.\n\nHãy viết cụ thể, tránh dùng các cụm từ chung chung như “đam mê”, “ham học hỏi” nếu không có ví dụ đi kèm. Càng sát với bối cảnh tuyển dụng, thư của bạn càng đáng đọc.\n\nMột thư ngắn, rõ và có trọng tâm thường tạo ấn tượng tốt hơn một văn bản dài nhưng lan man.',
    categorySlug: 'job-search',
    authorName: 'Ban biên tập',
    publishedAt: '2026-03-06T09:55:00.000Z',
    readTime: 4,
    featured: false,
    _status: 'published',
    tags: ['cover letter', 'ứng tuyển', 'tìm việc'],
  },
]

export const runSeed = async (payload: Payload) => {
  const existingUsers = await payload.find({
    collection: 'users',
    limit: 100,
  })

  const existingEmails = new Set(
    existingUsers.docs
      .map((user) => (typeof (user as Record<string, any>).email === 'string' ? String((user as Record<string, any>).email) : ''))
      .filter(Boolean),
  )

  const seedUsers: SeedUser[] = [
    {
      email: process.env.PAYLOAD_ADMIN_EMAIL,
      password: process.env.PAYLOAD_ADMIN_PASSWORD,
      name: 'Platform Admin',
      role: 'admin',
    },
    {
      email: process.env.PAYLOAD_EDITOR_EMAIL,
      password: process.env.PAYLOAD_EDITOR_PASSWORD,
      name: 'Blog Writer',
      role: 'editor',
    },
  ]

  for (const user of seedUsers) {
    if (!user.email || !user.password || existingEmails.has(user.email)) {
      continue
    }

    await payload.create({
      collection: 'users',
      data: {
        email: user.email,
        password: user.password,
        name: user.name,
        role: user.role,
      },
    })
  }

  const existingCategories = await payload.find({
    collection: 'categories',
    limit: 100,
  })

  const categoryMap = new Map<string, number | string>()

  if (!existingCategories.docs.length) {
    for (const category of categorySeed) {
      const created = await payload.create({
        collection: 'categories',
        data: category,
      })

      categoryMap.set(category.slug, created.id)
    }
  } else {
    for (const category of existingCategories.docs as Array<Record<string, any>>) {
      categoryMap.set(String(category.slug), category.id)
    }
  }

  const existingArticles = await payload.find({
    collection: 'articles',
    limit: 100,
  })

  const existingArticleSlugs = new Set(
    existingArticles.docs
      .map((article) =>
        typeof (article as Record<string, any>).slug === 'string' ? String((article as Record<string, any>).slug) : '',
      )
      .filter(Boolean),
  )

  for (const article of articleSeed) {
    if (existingArticleSlugs.has(article.slug)) {
      continue
    }

    await payload.create({
      collection: 'articles',
      data: {
        title: article.title,
        slug: article.slug,
        excerpt: article.excerpt,
        content: article.content,
        category: categoryMap.get(article.categorySlug),
        authorName: article.authorName,
        publishedAt: article.publishedAt,
        readTime: article.readTime,
        featured: article.featured,
        _status: article._status,
        tags: article.tags.map((tag) => ({ tag })),
      },
    })

    existingArticleSlugs.add(article.slug)
  }

  const existingJobCategories = await payload.find({
    collection: 'job-categories',
    limit: 100,
    sort: 'featuredOrder',
  })

  const jobCategoryMap = new Map<string, number | string>()

  for (const category of existingJobCategories.docs as Array<Record<string, any>>) {
    jobCategoryMap.set(String(category.slug), category.id)
  }

  for (const category of mockJobCategories) {
    if (jobCategoryMap.has(category.slug)) {
      continue
    }

    const created = await payload.create({
      collection: 'job-categories',
      data: {
        name: category.name,
        slug: category.slug,
        description: category.description,
        iconLabel: category.iconLabel,
        jobsLabel: category.jobsLabel,
        featuredOrder: category.featuredOrder,
        accent: category.accent,
      },
    })

    jobCategoryMap.set(category.slug, created.id)
  }

  for (const job of mockJobDetails) {
    if (existingArticleSlugs.has(job.slug)) {
      continue
    }

    await payload.create({
      collection: 'articles',
      data: {
        contentType: 'job',
        title: job.title,
        slug: job.slug,
        routeId: job.displayId,
        displayId: job.displayId,
        excerpt: `${job.company} | ${job.salary} | ${job.location}`,
        content: job.description.join('\n\n'),
        jobCategory: jobCategoryMap.get(job.categorySlug),
        company: job.company,
        salary: job.salary,
        location: job.location,
        region: job.region,
        logoText: job.logoText,
        logoAccent: job.logoAccent,
        highlighted: job.highlighted ?? false,
        badges: (job.badges ?? []).map((badge) => ({ badge })),
        level: job.level,
        experience: job.experience,
        education: job.education,
        workplace: job.workplace,
        quantity: job.quantity,
        deadline: parseSeedDate(job.deadline),
        postedAt: parseSeedDate(job.postedAt),
        workingTime: job.workingTime,
        address: job.address,
        contactPerson: job.contactPerson,
        descriptionItems: job.description.map((item) => ({ item })),
        requirementItems: job.requirements.map((item) => ({ item })),
        benefitItems: job.benefits.map((item) => ({ item })),
        skillTags: job.skillTags.map((tag) => ({ tag })),
        companyField: job.companyField,
        companySize: job.companySize,
        companyAddress: job.companyAddress,
        companyOverview: job.companyOverview,
        authorName: 'Ban tuyển dụng',
        readTime: 3,
        tags: job.skillTags.map((tag) => ({ tag })),
        publishedAt: parseSeedDate(job.postedAt),
        _status: 'published',
      },
    })

    existingArticleSlugs.add(job.slug)
  }
}
