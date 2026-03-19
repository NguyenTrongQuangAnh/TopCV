import Link from 'next/link'

import type { SiteArticle } from '@/lib/content'
import { buildArticleHref, buildCategoryHref, formatDate } from '@/lib/format'

type ArticleCardProps = {
  article: SiteArticle
  featured?: boolean
}

export const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  return (
    <article
      className={`group overflow-hidden rounded-[24px] border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft ${
        featured ? 'grid gap-0 lg:grid-cols-[1.05fr_0.95fr]' : 'shadow-card'
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          featured
            ? 'min-h-[280px] bg-[linear-gradient(135deg,#0f6e41_0%,#159253_60%,#29b067_100%)]'
            : 'min-h-[190px] bg-[linear-gradient(135deg,#f4fbf7_0%,#dff5e7_48%,#b9e6ca_100%)]'
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.25),_transparent_30%)]" />
        <div className="absolute left-5 top-5">
          <Link
            className={`inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] ${
              featured ? 'bg-white/12 text-white' : 'bg-white/90 text-brand-700'
            }`}
            href={buildCategoryHref(article.category.slug)}
          >
            {article.category.name}
          </Link>
        </div>
        <div className="absolute bottom-5 left-5 right-5">
          <div className={`rounded-[20px] ${featured ? 'bg-white/10 text-white' : 'bg-white/78 text-ink'} px-4 py-3 backdrop-blur`}>
            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] opacity-80">
              <span>{formatDate(article.publishedAt)}</span>
              <span className="h-1 w-1 rounded-full bg-current" />
              <span>{article.readTime} phút</span>
            </div>
            <p className="mt-2 line-clamp-2 text-lg font-semibold leading-7">{article.title}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-6 sm:p-7">
        <div className="mb-4 flex items-center gap-3 text-sm text-slate-500">
          <span>{article.authorName}</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span>Biên tập</span>
        </div>
        <h3 className={`text-balance font-semibold text-ink ${featured ? 'text-3xl leading-tight' : 'text-[1.35rem] leading-8'}`}>
          <Link className="transition group-hover:text-brand-700" href={buildArticleHref(article.slug)}>
            {article.title}
          </Link>
        </h3>
        <p className="mt-4 flex-1 text-base leading-8 text-slate-600">{article.excerpt}</p>
        <div className="mt-6 flex items-center justify-between gap-4">
          <span className="text-sm font-medium text-brand-700">{article.category.name}</span>
          <Link
            className="inline-flex rounded-xl border border-brand-200 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:border-brand-600 hover:bg-brand-50"
            href={buildArticleHref(article.slug)}
          >
            Xem bài viết
          </Link>
        </div>
      </div>
    </article>
  )
}
