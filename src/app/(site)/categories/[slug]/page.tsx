import { notFound } from 'next/navigation'

import { ArticleCard } from '@/components/site/ArticleCard'
import { Container } from '@/components/site/Container'
import { SectionHeading } from '@/components/site/SectionHeading'
import { getArticles, getCategoryBySlug } from '@/lib/content-api'

export const dynamic = 'force-dynamic'

type CategoryPageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const articles = await getArticles({ categorySlug: slug, limit: 18 })

  return (
    <main className="pb-24 pt-12">
      <Container>
        <div className="rounded-[36px] border border-brand-100 bg-white p-8 shadow-soft sm:p-10">
          <div className="mb-6 h-3 w-24 rounded-full" style={{ backgroundColor: category.accent }} />
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Trung tâm chuyên mục</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{category.name}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{category.description}</p>
        </div>
      </Container>

      <section className="pt-16">
        <Container>
          <SectionHeading
            description="Mỗi category page hoạt động như một landing page thu gọn, giúp bạn mở rộng nhiều nhánh nội dung mà không phải tăng độ phức tạp của sản phẩm."
            eyebrow="Bài viết"
            title={`Bài viết mới trong ${category.name}`}
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
