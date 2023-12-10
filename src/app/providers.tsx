'use client'

import { SWRConfig } from 'swr'
import { api } from '@/lib/api'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => api.get(url).then((res) => res.data),
      }}
    >
      {children}
    </SWRConfig>
  )
}
