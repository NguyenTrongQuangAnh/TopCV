import type { CollectionConfig } from 'payload'

import { isEditor } from '@/lib/access'
import { buildJobPath, ensureRouteId } from '@/lib/job-utils'
import { formatSlug } from '@/lib/slug'

export const Jobs: CollectionConfig = {
  slug: 'jobs',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'company', 'category', 'location', '_status', 'postedAt'],
    group: 'Jobs',
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
          label: 'Thông tin chính',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'slug',
                  type: 'text',
                  required: true,
                  unique: true,
                  index: true,
                  hooks: {
                    beforeValidate: [formatSlug('title')],
                  },
                },
                {
                  name: 'previewPath',
                  type: 'text',
                  admin: {
                    readOnly: true,
                    description: 'Đường dẫn public của tin tuyển dụng.',
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'routeId',
                  type: 'text',
                  required: true,
                  unique: true,
                  index: true,
                  admin: {
                    description: 'Mã dùng trong URL, ví dụ: 2080617.',
                  },
                  hooks: {
                    beforeValidate: [ensureRouteId],
                  },
                },
                {
                  name: 'displayId',
                  type: 'text',
                  admin: {
                    description: 'Mã hiển thị ở giao diện chi tiết việc làm.',
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'category',
                  type: 'relationship',
                  relationTo: 'job-categories',
                  required: true,
                },
                {
                  name: 'company',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'salary',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'location',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'region',
                  type: 'select',
                  required: true,
                  defaultValue: 'mien-nam',
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
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'logoText',
                  type: 'text',
                  required: true,
                  defaultValue: 'TOP',
                },
                {
                  name: 'logoAccent',
                  type: 'text',
                  required: true,
                  defaultValue: '#22c55e',
                },
                {
                  name: 'highlighted',
                  type: 'checkbox',
                  defaultValue: false,
                },
              ],
            },
            {
              name: 'badges',
              type: 'array',
              admin: {
                description: 'Các nhãn nhỏ hiển thị trên card việc làm.',
              },
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
          ],
        },
        {
          label: 'Chi tiết tuyển dụng',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'level',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'experience',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'education',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'workplace',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'quantity',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'deadline',
                  type: 'date',
                  required: true,
                  admin: {
                    date: {
                      pickerAppearance: 'dayOnly',
                    },
                  },
                },
                {
                  name: 'postedAt',
                  type: 'date',
                  admin: {
                    date: {
                      pickerAppearance: 'dayAndTime',
                    },
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'workingTime',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'address',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'contactPerson',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'descriptionItems',
              type: 'array',
              required: true,
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
              required: true,
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
              required: true,
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
          ],
        },
        {
          label: 'Thông tin công ty',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'companyField',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'companySize',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'companyAddress',
              type: 'text',
              required: true,
            },
            {
              name: 'companyOverview',
              type: 'textarea',
              required: true,
              admin: {
                rows: 5,
              },
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
        const routeId =
          typeof nextData.routeId === 'string' && nextData.routeId.trim()
            ? nextData.routeId.trim()
            : typeof nextData.displayId === 'string' && nextData.displayId.trim()
              ? nextData.displayId.trim()
              : ''

        if (routeId) {
          nextData.routeId = routeId
        }

        if (
          (!nextData.displayId || typeof nextData.displayId !== 'string' || !nextData.displayId.trim()) &&
          typeof nextData.routeId === 'string' &&
          nextData.routeId.trim()
        ) {
          nextData.displayId = nextData.routeId
        }

        if (
          typeof nextData.slug === 'string' &&
          nextData.slug.trim() &&
          typeof nextData.routeId === 'string' &&
          nextData.routeId.trim()
        ) {
          nextData.previewPath = buildJobPath(nextData.slug, nextData.routeId)
        }

        if (nextData._status === 'published' && !nextData.postedAt) {
          nextData.postedAt = new Date().toISOString()
        }

        return nextData
      },
    ],
  },
}
