import path from 'path'
import { fileURLToPath } from 'url'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { Articles } from './collections/Articles'
import { Categories } from './collections/Categories'
import { JobCategories } from './collections/JobCategories'
import { Media } from './collections/Media'
import { Users } from './collections/Users'
import { runSeed } from './lib/seed'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Categories, Articles, JobCategories],
  db: postgresAdapter({
    push: true,
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  onInit: async (payload) => {
    await runSeed(payload)
  },
  secret: process.env.PAYLOAD_SECRET || 'replace-me',
  sharp,
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
