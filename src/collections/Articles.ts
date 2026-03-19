import type { CollectionConfig } from 'payload'

import { isEditor } from '../lib/access'
import { buildArticlePath, estimateReadTime } from '../lib/article-utils'
import { buildJobPath, createRouteId, ensureRouteId } from '../lib/job-utils'
import { formatSlug } from '../lib/slug'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'contentType', 'category', 'careerDirectory', '_status', 'publishedAt'],
    group: 'Content',
  },
  access: {
    read: ({ req }) => {
      if (req.user) {
        return true
      }

      return {
        _status: {
          equals: 'published',
        },
      }
    },
    create: isEditor,
    update: isEditor,
    delete: isEditor,
  },
  versions: {
    drafts: {
      autosave: {
        interval: 400,
      },
    },
    maxPerDoc: 20,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'contentType',
              type: 'select',
              required: true,
              defaultValue: 'article',
              options: [
                {
                  label: 'Bài viết',
                  value: 'article',
                },
                {
                  label: 'Việc làm',
                  value: 'job',
                },
              ],
            },
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'slug',
              type: 'text',
              required: true,
              unique: true,
              index: true,
              admin: {
                description: 'Auto-generated from the title if left blank.',
              },
              hooks: {
                beforeValidate: [formatSlug('title')],
              },
            },
            {
              name: 'previewPath',
              type: 'text',
              admin: {
                readOnly: true,
                description: 'Public URL for this article.',
              },
            },
            {
              name: 'excerpt',
              type: 'textarea',
              required: true,
              admin: {
                rows: 4,
              },
            },
            {
              name: 'content',
              type: 'textarea',
              required: true,
              admin: {
                description: 'Write the article body here. Use blank lines to separate paragraphs.',
                rows: 22,
              },
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'coverImage',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'category',
                  type: 'relationship',
                  relationTo: 'categories',
                  admin: {
                    condition: (data) => data?.contentType !== 'job',
                  },
                },
                {
                  name: 'careerDirectory',
                  type: 'relationship',
                  relationTo: 'career_directory',
                  admin: {
                    condition: (data) => data?.contentType === 'job',
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'authorName',
                  type: 'text',
                  defaultValue: 'TopCV Editorial Team',
                  admin: {
                    condition: (data) => data?.contentType !== 'job',
                  },
                },
                {
                  name: 'readTime',
                  type: 'number',
                  min: 1,
                  admin: {
                    condition: (data) => data?.contentType !== 'job',
                    description: 'Optional. Automatically calculated from the article body if left empty.',
                  },
                },
              ],
            },
            {
              name: 'tags',
              type: 'array',
              admin: {
                description: 'Optional labels used for related content and navigation.',
              },
              fields: [
                {
                  name: 'tag',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Job',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'routeId',
                  type: 'text',
                  hooks: {
                    beforeValidate: [ensureRouteId],
                  },
                  admin: {
                    description: 'Mã dùng trong URL của việc làm.',
                  },
                },
                {
                  name: 'displayId',
                  type: 'text',
                  admin: {
                    description: 'Mã hiển thị của việc làm.',
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'company',
                  type: 'text',
                },
                {
                  name: 'salary',
                  type: 'text',
                },
                {
                  name: 'location',
                  type: 'text',
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'region',
                  type: 'select',
                  options: [
                    {
                      label: 'Miền Bắc',
                      value: 'mien-bac',
                    },
                    {
                      label: 'Miền Trung',
                      value: 'mien-trung',
                    },
                    {
                      label: 'Miền Nam',
                      value: 'mien-nam',
                    },
                  ],
                },
                {
                  name: 'logoText',
                  type: 'text',
                },
                {
                  name: 'logoAccent',
                  type: 'text',
                  defaultValue: '#22c55e',
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'highlighted',
                  type: 'checkbox',
                  defaultValue: false,
                },
                {
                  name: 'level',
                  type: 'text',
                },
                {
                  name: 'experience',
                  type: 'text',
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'education',
                  type: 'text',
                },
                {
                  name: 'workplace',
                  type: 'text',
                },
                {
                  name: 'quantity',
                  type: 'text',
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'deadline',
                  type: 'date',
                  admin: {
                    date: {
                      pickerAppearance: 'dayOnly',
                    },
                  },
                },
                {
                  name: 'workingTime',
                  type: 'text',
                },
                {
                  name: 'contactPerson',
                  type: 'text',
                },
              ],
            },
            {
              name: 'address',
              type: 'text',
            },
            {
              name: 'badges',
              type: 'array',
              fields: [
                {
                  name: 'badge',
                  type: 'select',
                  required: true,
                  options: [
                    {
                      label: 'HOT',
                      value: 'HOT',
                    },
                    {
                      label: 'NỔI BẬT',
                      value: 'NỔI BẬT',
                    },
                    {
                      label: 'TOP',
                      value: 'TOP',
                    },
                  ],
                },
              ],
            },
            {
              name: 'descriptionItems',
              type: 'array',
              fields: [
                {
                  name: 'item',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'requirementItems',
              type: 'array',
              fields: [
                {
                  name: 'item',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'benefitItems',
              type: 'array',
              fields: [
                {
                  name: 'item',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'skillTags',
              type: 'array',
              fields: [
                {
                  name: 'tag',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'companyField',
                  type: 'text',
                },
                {
                  name: 'companySize',
                  type: 'text',
                },
              ],
            },
            {
              name: 'companyAddress',
              type: 'text',
            },
            {
              name: 'companyOverview',
              type: 'textarea',
              admin: {
                rows: 5,
              },
            },
          ],
        },
        {
          label: 'Publishing',
          fields: [
            {
              name: 'featured',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'publishedAt',
              type: 'date',
              admin: {
                date: {
                  pickerAppearance: 'dayAndTime',
                },
                description: 'Filled automatically when a draft is first published.',
              },
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'seoTitle',
              type: 'text',
            },
            {
              name: 'seoDescription',
              type: 'textarea',
              admin: {
                rows: 4,
              },
            },
            {
              name: 'ogImage',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        const nextData = { ...(data ?? {}) }
        nextData.contentType = nextData.contentType === 'job' ? 'job' : 'article'
        const isJob = nextData.contentType === 'job'

        if (isJob) {
          const routeId =
            typeof nextData.routeId === 'string' && nextData.routeId.trim()
              ? nextData.routeId.trim()
              : typeof nextData.displayId === 'string' && nextData.displayId.trim()
                ? createRouteId(nextData.displayId)
                : createRouteId('')

          nextData.routeId = routeId

          if (!nextData.displayId || typeof nextData.displayId !== 'string' || !nextData.displayId.trim()) {
            nextData.displayId = routeId
          }
        }

        if (typeof nextData.slug === 'string' && nextData.slug.trim() && isJob && typeof nextData.routeId === 'string') {
          nextData.previewPath = buildJobPath(nextData.slug, nextData.routeId)
        } else if (typeof nextData.slug === 'string' && nextData.slug.trim()) {
          nextData.previewPath = buildArticlePath(nextData.slug)
        }

        if (!isJob && (!nextData.readTime || Number(nextData.readTime) < 1)) {
          nextData.readTime = estimateReadTime(nextData.excerpt, nextData.content)
        }

        if (nextData._status === 'published' && !nextData.publishedAt) {
          return {
            ...nextData,
            publishedAt: new Date().toISOString(),
          }
        }

        return nextData
      },
    ],
  },
}
