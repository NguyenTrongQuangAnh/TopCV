import config from '@payload-config'
import { generatePageMetadata, RootPage } from '@payloadcms/next/views'

import { importMap } from '@/app/(payload)/admin/importMap'

type PageProps = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<Record<string, string | string[]>>
}

export const generateMetadata = ({ params, searchParams }: PageProps) =>
  generatePageMetadata({
    config,
    params,
    searchParams,
  })

const Page = async ({ params, searchParams }: PageProps) =>
  RootPage({
    config,
    importMap,
    params,
    searchParams,
  })

export default Page
