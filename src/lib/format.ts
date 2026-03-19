export const formatDate = (value: string) =>
  new Intl.DateTimeFormat('vi-VN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value))

export const buildArticleHref = (slug: string) => `/articles/${slug}`

export const buildCategoryHref = (slug: string) => `/categories/${slug}`

export const getParagraphs = (content: string) =>
  content
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
