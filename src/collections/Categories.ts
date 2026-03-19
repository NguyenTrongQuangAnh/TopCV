import type { CollectionConfig } from 'payload'

import { isEditor } from '../lib/access'
import { formatSlug } from '../lib/slug'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'updatedAt'],
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
        rows: 4,
      },
    },
    {
      name: 'featuredOrder',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Smaller numbers appear first on the homepage.',
      },
    },
    {
      name: 'accent',
      type: 'text',
      defaultValue: '#199553',
      admin: {
        description: 'Hex color used for category accents in the UI.',
      },
    },
  ],
}
