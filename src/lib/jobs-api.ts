import { cache } from 'react'

import type { JobDetail } from '@/lib/jobs'
import { getJobBySlugOrId as getMockJobBySlugOrId, getRelatedJobs as getMockRelatedJobs, mockJobDetails } from '@/lib/jobs'
import type { MockJob, MockJobCategory } from '@/lib/mock-data'
import { mockJobCategories } from '@/lib/mock-data'
import { normalizeListItems } from '@/lib/job-utils'
import { getPayloadClient } from '@/lib/payload'

const formatJobDate = (value: unknown) => {
  if (typeof value === 'string' && /^\d{2}\/\d{2}\/\d{4}$/.test(value.trim())) {
    return value
  }

  if (typeof value !== 'string' && !(value instanceof Date)) {
    return ''
  }

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return ''
  }

  return new Intl.DateTimeFormat('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date)
}

const normalizeJobCategory = (doc: Record<string, any>): MockJobCategory => ({
  id: String(doc.id),
  name: String(doc.name),
  slug: String(doc.slug),
  description: String(doc.description ?? ''),
  iconLabel: String(doc.iconLabel ?? 'IT'),
  jobsLabel: String(doc.jobsLabel ?? '0 việc làm'),
  featuredOrder: Number(doc.featuredOrder ?? 0),
  accent: String(doc.accent ?? '#22c55e'),
})

const normalizeSkillTags = (items: unknown) => {
  if (!Array.isArray(items)) {
    return []
  }

  return items
    .map((entry) =>
      entry && typeof entry === 'object' && typeof (entry as Record<string, unknown>).tag === 'string'
        ? String((entry as Record<string, unknown>).tag).trim()
        : '',
    )
    .filter(Boolean)
}

const normalizeBadges = (items: unknown) => {
  if (!Array.isArray(items)) {
    return []
  }

  return items
    .map((entry) =>
      entry && typeof entry === 'object' && typeof (entry as Record<string, unknown>).badge === 'string'
        ? String((entry as Record<string, unknown>).badge).trim()
        : '',
    )
    .filter(Boolean)
}

const normalizeJob = (doc: Record<string, any>): JobDetail | null => {
  if (doc.contentType !== 'job') {
    return null
  }

  const categoryDoc =
    doc.jobCategory && typeof doc.jobCategory === 'object' && doc.jobCategory.slug
      ? (doc.jobCategory as Record<string, any>)
      : null
  const routeId = String(doc.routeId ?? doc.displayId ?? doc.id ?? '').trim()

  if (!routeId || typeof doc.slug !== 'string' || !doc.slug.trim()) {
    return null
  }

  return {
    id: routeId,
    slug: String(doc.slug),
    categorySlug: categoryDoc ? String(categoryDoc.slug) : '',
    title: String(doc.title ?? ''),
    company: String(doc.company ?? ''),
    salary: String(doc.salary ?? ''),
    location: String(doc.location ?? ''),
    region:
      doc.region === 'mien-bac' || doc.region === 'mien-trung' || doc.region === 'mien-nam' ? doc.region : 'mien-nam',
    badges: normalizeBadges(doc.badges),
    logoText: String(doc.logoText ?? 'TOP'),
    logoAccent: String(doc.logoAccent ?? '#22c55e'),
    highlighted: Boolean(doc.highlighted),
    displayId: String(doc.displayId ?? routeId),
    level: String(doc.level ?? 'Nhân viên'),
    experience: String(doc.experience ?? 'Từ 1 năm'),
    education: String(doc.education ?? 'Cao đẳng trở lên'),
    workplace: String(doc.workplace ?? 'Tại văn phòng'),
    quantity: String(doc.quantity ?? '01 người'),
    deadline: formatJobDate(doc.deadline),
    postedAt: formatJobDate(doc.postedAt ?? doc.createdAt),
    workingTime: String(doc.workingTime ?? ''),
    address: String(doc.address ?? ''),
    contactPerson: String(doc.contactPerson ?? ''),
    companySize: String(doc.companySize ?? ''),
    companyField: String(doc.companyField ?? ''),
    companyAddress: String(doc.companyAddress ?? ''),
    companyOverview: String(doc.companyOverview ?? ''),
    description: normalizeListItems(doc.descriptionItems),
    requirements: normalizeListItems(doc.requirementItems),
    benefits: normalizeListItems(doc.benefitItems),
    skillTags: normalizeSkillTags(doc.skillTags),
  }
}

type JobQueryOptions = {
  categorySlug?: string
  featuredOnly?: boolean
  limit?: number
  location?: string
  query?: string
  region?: MockJob['region']
}

const matchesJobQuery = (job: MockJob, options: JobQueryOptions) => {
  if (options.categorySlug && job.categorySlug !== options.categorySlug) {
    return false
  }

  if (options.featuredOnly && !job.highlighted) {
    return false
  }

  if (options.location) {
    const searchLocation = options.location.toLocaleLowerCase('vi')

    if (!job.location.toLocaleLowerCase('vi').includes(searchLocation)) {
      return false
    }
  }

  if (options.region && job.region !== options.region) {
    return false
  }

  if (!options.query) {
    return true
  }

  const search = options.query.toLocaleLowerCase('vi')
  return [job.title, job.company, job.location, job.salary].some((entry) => entry.toLocaleLowerCase('vi').includes(search))
}

const mergeJobs = (primary: MockJob[], fallback: MockJob[], limit: number) => {
  const merged = new Map<string, MockJob>()

  for (const job of primary) {
    merged.set(`${job.slug}:${job.id}`, job)
  }

  for (const job of fallback) {
    const key = `${job.slug}:${job.id}`

    if (!merged.has(key)) {
      merged.set(key, job)
    }
  }

  return Array.from(merged.values()).slice(0, limit)
}

const filterMockJobs = (options: JobQueryOptions) =>
  mockJobDetails
    .filter((job) => matchesJobQuery(job, options))
    .map((job) => ({
      id: job.id,
      slug: job.slug,
      categorySlug: job.categorySlug,
      title: job.title,
      company: job.company,
      salary: job.salary,
      location: job.location,
      region: job.region,
      badges: job.badges,
      logoText: job.logoText,
      logoAccent: job.logoAccent,
      highlighted: job.highlighted,
    }))
    .slice(0, options.limit ?? 12)

export const getJobCategories = cache(async (): Promise<MockJobCategory[]> => {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'job-categories',
      depth: 0,
      limit: 24,
      sort: 'featuredOrder',
    })

    const docs = result.docs.map((doc) => normalizeJobCategory(doc as Record<string, any>))
    return docs.length ? docs : mockJobCategories
  } catch {
    return mockJobCategories
  }
})

export const getJobs = cache(async (options: JobQueryOptions = {}): Promise<MockJob[]> => {
  const limit = options.limit ?? 12
  const fallbackJobs = filterMockJobs(options)

  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'articles',
      depth: 2,
      limit: 60,
      sort: '-postedAt',
      where: {
        and: [
          {
            _status: {
              equals: 'published',
            },
          },
          {
            contentType: {
              equals: 'job',
            },
          },
        ],
      },
    })

    const docs = result.docs
      .map((doc) => normalizeJob(doc as Record<string, any>))
      .filter((doc): doc is JobDetail => Boolean(doc))
      .filter((job) => matchesJobQuery(job, options))
      .map((job) => ({
        id: job.id,
        slug: job.slug,
        categorySlug: job.categorySlug,
        title: job.title,
        company: job.company,
        salary: job.salary,
        location: job.location,
        region: job.region,
        badges: job.badges,
        logoText: job.logoText,
        logoAccent: job.logoAccent,
        highlighted: job.highlighted,
      }))

    return mergeJobs(docs, fallbackJobs, limit)
  } catch {
    return fallbackJobs
  }
})

export const getJobBySlugOrId = cache(async (slug: string, rawId?: string): Promise<JobDetail | null> => {
  const normalizedId = rawId?.replace(/\.html$/i, '')

  try {
    const payload = await getPayloadClient()
    const conditions: Array<Record<string, any>> = [
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
      {
        contentType: {
          equals: 'job',
        },
      },
    ]

    if (normalizedId) {
      conditions.push({
        routeId: {
          equals: normalizedId,
        },
      })
    }

    const result = await payload.find({
      collection: 'articles',
      depth: 2,
      limit: 1,
      where: {
        and: conditions,
      },
    })

    const job = result.docs[0] ? normalizeJob(result.docs[0] as Record<string, any>) : null
    return job ?? getMockJobBySlugOrId(slug, rawId)
  } catch {
    return getMockJobBySlugOrId(slug, rawId)
  }
})

export const getRelatedJobs = async (currentJob: Pick<JobDetail, 'id' | 'region'>, limit = 6) => {
  try {
    const jobs = await getJobs({
      limit: 36,
      region: currentJob.region,
    })

    const related = jobs.filter((job) => job.id !== currentJob.id).slice(0, limit)
    return related.length ? related : getMockRelatedJobs(currentJob as JobDetail, limit)
  } catch {
    return getMockRelatedJobs(currentJob as JobDetail, limit)
  }
}
