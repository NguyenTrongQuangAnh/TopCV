export type SiteCategory = {
  id: string
  name: string
  slug: string
  description: string
  accent: string
}

export type SiteArticle = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: SiteCategory
  authorName: string
  publishedAt: string
  readTime: number
  featured: boolean
  coverImage?: {
    url: string
    alt: string
  }
  tags: string[]
}
