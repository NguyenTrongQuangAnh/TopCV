import type { CollectionConfig } from 'payload'

import { isEditor } from '@/lib/access'
import { formatSlug } from '@/lib/slug'

export const JobCategories: CollectionConfig = {
  slug: 'job-categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'jobsLabel', 'featuredOrder'],
    group: 'Content',
  },
  access: {
    read: () => true,
    create: isEditor,
    update: isEditor,
    delete: isEditor,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      hooks: {
        beforeValidate: [formatSlug('name')],
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        rows: 3,
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'iconLabel',
          type: 'text',
          required: true,
          defaultValue: 'IT',
          admin: {
            description: 'Ký hiệu ngắn hiển thị trong ô icon ngành nghề.',
          },
        },
        {
          name: 'jobsLabel',
          type: 'text',
          required: true,
          defaultValue: '1.000 việc làm',
          admin: {
            description: 'Nhãn hiển thị số lượng việc làm, ví dụ: 13.522 việc làm.',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'featuredOrder',
          type: 'number',
          defaultValue: 0,
          admin: {
            description: 'Thứ tự hiển thị trên homepage, số nhỏ đứng trước.',
          },
        },
        {
          name: 'accent',
          type: 'text',
          defaultValue: '#22c55e',
          admin: {
            description: 'Màu nhấn dạng mã hex.',
          },
        },
      ],
    },
  ],
}
