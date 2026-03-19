import { getPayload } from 'payload'
import configPromise from '@payload-config'

let cachedClient: Awaited<ReturnType<typeof getPayload>> | null = null

export const getPayloadClient = async () => {
  if (!cachedClient) {
    cachedClient = await getPayload({
      config: configPromise,
    })
  }

  return cachedClient
}
