import config from '@payload-config'
import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
import type { ServerFunctionClient } from 'payload'
import type { ReactNode } from 'react'

import { importMap } from './admin/importMap'

export default function PayloadLayout({ children }: { children: ReactNode }) {
  const serverFunction: ServerFunctionClient = async (args) => {
    'use server'

    return handleServerFunctions({
      ...args,
      config,
      importMap,
    })
  }

  return RootLayout({
    children,
    config,
    importMap,
    serverFunction,
  })
}
