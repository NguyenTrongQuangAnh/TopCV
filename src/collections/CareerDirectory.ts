import type { CollectionConfig } from 'payload'

import { isEditor } from '@/lib/access'
import { formatSlug } from '@/lib/slug'

export const CareerDirectory: CollectionConfig = {
  slug: 'career_directory',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'jobsLabel', 'featuredOrder'],
    group: 'Content',
  },
  labels: {
    singular: 'career_directory',
    plural: 'career_directory',
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
        },
        {
          name: 'jobsLabel',
          type: 'text',
          required: true,
          defaultValue: '1.000 việc làm',
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
        },
        {
          name: 'accent',
          type: 'text',
          defaultValue: '#f41822',
        },
      ],
    },
  ],
}
