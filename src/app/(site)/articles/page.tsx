import { ArticleCard } from '@/components/site/ArticleCard'
import { CategoryPill } from '@/components/site/CategoryPill'
import { Container } from '@/components/site/Container'
import { SectionHeading } from '@/components/site/SectionHeading'
import { getArticles, getCategories } from '@/lib/content-api'

export const dynamic = 'force-dynamic'

export default async function ArticlesPage() {
  const [articles, categories] = await Promise.all([getArticles({ limit: 24 }), getCategories()])

  return (
    <main className="pb-24 pt-12">
      <Container>
        <div className="rounded-[34px] border border-brand-100 bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Thư viện nội dung</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Tất cả bài viết trong một trung tâm nội dung
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Trang này thay cho các module tuyển dụng dày đặc bằng trải nghiệm khám phá bài viết rõ ràng hơn, xoay
            quanh chuyên mục, bài nổi bật và nội dung mới xuất bản.
          </p>
          <div className="mt-6 inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
            Đang hiển thị {articles.length} bài viết để kiểm tra giao diện
          </div>
        </div>
      </Container>

      <section className="pt-16">
        <Container>
          <SectionHeading
            description="Các shortcut chuyên mục đóng vai trò như lớp điều hướng đầu tiên, tương tự cách một portal lớn đưa người dùng vào đúng khu vực họ cần."
            eyebrow="Duyệt theo chủ đề"
            title="Nhóm chuyên mục nổi bật"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <CategoryPill category={category} key={category.id} />
            ))}
          </div>
        </Container>
      </section>

      <section className="pt-16">
        <Container>
          <SectionHeading
            description="Toàn bộ card bên dưới đều lấy từ cùng collection bài viết trong Payload CMS, giúp homepage, listing, category page và article detail luôn đồng bộ."
            eyebrow="Kho bài viết"
            title="Những bài mới xuất bản"
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard article={article} key={article.id} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
