export const estimateReadTime = (...inputs: Array<string | null | undefined>) => {
  const words = inputs
    .filter((value): value is string => typeof value === 'string' && value.trim().length > 0)
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length

  return Math.max(1, Math.ceil(words / 220))
}

export const buildArticlePath = (slug: string) => `/articles/${slug}`
