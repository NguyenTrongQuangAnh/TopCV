import { cache } from 'react'

import type { SiteArticle, SiteCategory } from '@/lib/content'
import { mockArticles, mockCategories } from '@/lib/mock-data'
import { getPayloadClient } from '@/lib/payload'

const normalizeCategory = (doc: Record<string, any>): SiteCategory => ({
  id: String(doc.id),
  name: String(doc.name),
  slug: String(doc.slug),
  description: String(doc.description ?? ''),
  accent: String(doc.accent ?? '#199553'),
})

const normalizeArticle = (doc: Record<string, any>): SiteArticle | null => {
  if (doc.contentType === 'job') {
    return null
  }

  if (!doc.category || typeof doc.category !== 'object') {
    return null
  }

  return {
    id: String(doc.id),
    title: String(doc.title),
    slug: String(doc.slug),
    excerpt: String(doc.excerpt ?? ''),
    content: String(doc.content ?? ''),
    category: normalizeCategory(doc.category),
    authorName: String(doc.authorName ?? 'Editorial Team'),
    publishedAt: String(doc.publishedAt ?? doc.createdAt ?? new Date().toISOString()),
    readTime: Number(doc.readTime ?? 5),
    featured: Boolean(doc.featured),
    coverImage:
      doc.coverImage && typeof doc.coverImage === 'object' && doc.coverImage.url
        ? {
            url: String(doc.coverImage.url),
            alt: String(doc.coverImage.alt ?? doc.title),
          }
        : undefined,
    tags: Array.isArray(doc.tags)
      ? doc.tags
          .map((entry) => (typeof entry?.tag === 'string' ? entry.tag : ''))
          .filter(Boolean)
      : [],
  }
}

export const getCategories = cache(async (): Promise<SiteCategory[]> => {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'categories',
      depth: 0,
      limit: 20,
      sort: 'featuredOrder',
    })

    const docs = result.docs.map((doc) => normalizeCategory(doc as Record<string, any>))
    return docs.length ? docs : mockCategories
  } catch {
    return mockCategories
  }
})

type ArticleQueryOptions = {
  categorySlug?: string
  featuredOnly?: boolean
  limit?: number
  query?: string
}

const matchesArticleQuery = (article: SiteArticle, options: ArticleQueryOptions) => {
  if (options.categorySlug && article.category.slug !== options.categorySlug) {
    return false
  }

  if (options.featuredOnly && !article.featured) {
    return false
  }

  if (!options.query) {
    return true
  }

  const search = options.query.toLowerCase()
  return [article.title, article.excerpt, article.content, article.category.name].some((entry) =>
    entry.toLowerCase().includes(search),
  )
}

const mergeArticles = (primary: SiteArticle[], fallback: SiteArticle[], limit: number) => {
  const merged = new Map<string, SiteArticle>()

  for (const article of primary) {
    merged.set(article.slug, article)
  }

  for (const article of fallback) {
    if (!merged.has(article.slug)) {
      merged.set(article.slug, article)
    }
  }

  return Array.from(merged.values()).slice(0, limit)
}

export const getArticles = cache(async (options: ArticleQueryOptions = {}): Promise<SiteArticle[]> => {
  const { categorySlug, featuredOnly, limit = 12, query } = options
  const fallbackArticles = filterMockArticles(options)

  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'articles',
      depth: 2,
      limit: 50,
      sort: '-publishedAt',
      where: {
        _status: {
          equals: 'published',
        },
      },
    })

    const docs = result.docs
      .map((doc) => normalizeArticle(doc as Record<string, any>))
      .filter((doc): doc is SiteArticle => Boolean(doc))
      .filter((article) => matchesArticleQuery(article, options))

    return mergeArticles(docs, fallbackArticles, limit)
  } catch {
    return fallbackArticles
  }
})

const filterMockArticles = (options: ArticleQueryOptions): SiteArticle[] => {
  return mockArticles
    .filter((article) => matchesArticleQuery(article, options))
    .slice(0, options.limit ?? 12)
}

export const getArticleBySlug = cache(async (slug: string): Promise<SiteArticle | null> => {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'articles',
      depth: 2,
      limit: 1,
      where: {
        and: [
          {
            slug: {
              equals: slug,
            },
          },
          {
            _status: {
              equals: 'published',
            },
          },
        ],
      },
    })

    const article = result.docs[0] ? normalizeArticle(result.docs[0] as Record<string, any>) : null
    return article ?? mockArticles.find((item) => item.slug === slug) ?? null
  } catch {
    return mockArticles.find((item) => item.slug === slug) ?? null
  }
})

export const getCategoryBySlug = cache(async (slug: string): Promise<SiteCategory | null> => {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'categories',
      limit: 1,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    if (result.docs[0]) {
      return normalizeCategory(result.docs[0] as Record<string, any>)
    }

    return mockCategories.find((item) => item.slug === slug) ?? null
  } catch {
    return mockCategories.find((item) => item.slug === slug) ?? null
  }
})
