import Link from 'next/link'

import type { SiteCategory } from '@/lib/content'
import { buildCategoryHref } from '@/lib/format'

type CategoryPillProps = {
  category: SiteCategory
}

export const CategoryPill = ({ category }: CategoryPillProps) => (
  <Link
    className="group rounded-[26px] border border-slate-200 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft"
    href={buildCategoryHref(category.slug)}
  >
    <div className="mb-4 h-2.5 w-16 rounded-full" style={{ backgroundColor: category.accent }} />
    <h3 className="text-lg font-semibold text-ink transition group-hover:text-brand-700">{category.name}</h3>
    <p className="mt-2 text-sm leading-7 text-slate-600">{category.description}</p>
  </Link>
)
