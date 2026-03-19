import type { FieldHook } from 'payload'

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

export const formatSlug =
  (sourceField: string): FieldHook =>
  ({ value, data }) => {
    if (typeof value === 'string' && value.trim()) {
      return slugify(value)
    }

    const sourceValue = data?.[sourceField]

    if (typeof sourceValue === 'string' && sourceValue.trim()) {
      return slugify(sourceValue)
    }

    return value
  }
