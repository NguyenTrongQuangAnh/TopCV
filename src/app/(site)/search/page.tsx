import { ArticleCard } from '@/components/site/ArticleCard'
import { Container } from '@/components/site/Container'
import { getArticles } from '@/lib/content-api'

export const dynamic = 'force-dynamic'

type SearchPageProps = {
  searchParams?: Promise<{
    q?: string
    location?: string
  }>
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined
  const query = resolvedSearchParams?.q?.trim() ?? ''
  const location = resolvedSearchParams?.location?.trim() ?? ''
  const articles = await getArticles({ limit: 18, query })

  return (
    <main className="pb-24 pt-12">
      <Container>
        <div className="rounded-[36px] border border-brand-100 bg-white p-8 shadow-soft sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Tìm kiếm</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {query ? `Kết quả cho "${query}"` : 'Tìm trong kho bài viết'}
          </h1>
          {location ? (
            <p className="mt-3 inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
              Địa điểm đã chọn: {location}
            </p>
          ) : null}
          <form action="/search" className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              aria-label="Tìm kiếm bài viết"
              className="h-14 flex-1 rounded-[18px] border border-slate-200 bg-sand px-5 text-base text-ink outline-none transition focus:border-brand-300"
              defaultValue={query}
              name="q"
              placeholder="Tìm theo tiêu đề, mô tả hoặc chủ đề"
              type="search"
            />
            <input name="location" type="hidden" value={location} />
            <button
              className="inline-flex h-14 items-center justify-center rounded-[18px] bg-brand-600 px-6 text-base font-semibold text-white transition hover:bg-brand-700"
              type="submit"
            >
              Tìm kiếm
            </button>
          </form>
        </div>
      </Container>

      <section className="pt-16">
        <Container>
          {articles.length ? (
            <div className="grid gap-6 lg:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard article={article} key={article.id} />
              ))}
            </div>
          ) : (
            <div className="rounded-[30px] border border-slate-200 bg-white p-10 text-center shadow-card">
              <h2 className="text-2xl font-semibold text-ink">Không có bài viết phù hợp với từ khóa này.</h2>
              <p className="mt-3 text-base leading-8 text-slate-600">
                Hãy thử từ khóa khác hoặc duyệt các bài mới từ trang chủ và các trang chuyên mục.
              </p>
            </div>
          )}
        </Container>
      </section>
    </main>
  )
}
