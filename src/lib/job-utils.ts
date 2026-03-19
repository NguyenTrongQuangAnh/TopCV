import type { FieldHook } from 'payload'

import { slugify } from '@/lib/slug'

export const buildJobPath = (slug: string, routeId: string) => `/viec-lam/${slug}/${routeId}.html`

export const createRouteId = (value: unknown) => {
  if (typeof value === 'string' && value.trim()) {
    return slugify(value)
  }

  return `job-${Date.now()}`
}

export const ensureRouteId: FieldHook = ({ value, data }) =>
  createRouteId(value ?? data?.displayId ?? data?.title)

export const normalizeListItems = (items: unknown, fieldName = 'item') => {
  if (!Array.isArray(items)) {
    return []
  }

  return items
    .map((entry) =>
      entry && typeof entry === 'object' && typeof (entry as Record<string, unknown>)[fieldName] === 'string'
        ? String((entry as Record<string, unknown>)[fieldName]).trim()
        : '',
    )
    .filter(Boolean)
}
