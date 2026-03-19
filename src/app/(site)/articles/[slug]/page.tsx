import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Container } from '@/components/site/Container'
import { getArticleBySlug, getArticles } from '@/lib/content-api'
import { buildCategoryHref, formatDate, getParagraphs } from '@/lib/format'

export const dynamic = 'force-dynamic'

type ArticleDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = (await getArticles({ categorySlug: article.category.slug, limit: 3 })).filter(
    (entry) => entry.slug !== article.slug,
  )

  return (
    <main className="pb-24 pt-10">
      <Container>
        <div className="rounded-[36px] border border-brand-100 bg-white p-8 shadow-soft sm:p-10">
          <Link
            className="inline-flex rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700"
            href={buildCategoryHref(article.category.slug)}
          >
            {article.category.name}
          </Link>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{article.title}</h1>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500">
            <span>{article.authorName}</span>
            <span>{formatDate(article.publishedAt)}</span>
            <span>{article.readTime} phút đọc</span>
          </div>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{article.excerpt}</p>
          <div className="mt-8 h-[280px] rounded-[28px] bg-hero-grid" />
        </div>
      </Container>

      <section className="pt-12">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <article className="rounded-[34px] border border-slate-200 bg-white p-8 shadow-card sm:p-10">
              <div className="article-body text-lg leading-9 text-slate-700">
                {getParagraphs(article.content).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
            <aside className="space-y-6">
              <div className="rounded-[30px] border border-brand-100 bg-white p-6 shadow-card">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Thẻ bài viết</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {article.tags.map((tag) => (
                    <span className="rounded-full bg-sand px-4 py-2 text-sm font-medium text-slate-600" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-[30px] border border-brand-100 bg-white p-6 shadow-card">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Đọc thêm</p>
                <div className="mt-5 space-y-5">
                  {relatedArticles.map((relatedArticle) => (
                    <div className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0" key={relatedArticle.id}>
                      <Link className="text-lg font-semibold leading-7 text-ink transition hover:text-brand-700" href={`/articles/${relatedArticle.slug}`}>
                        {relatedArticle.title}
                      </Link>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{relatedArticle.excerpt}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  )
}
