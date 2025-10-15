'use client'

import { useTRPC } from '@/trpc/client'
import { useQuery, useSuspenseQuery } from '@tanstack/react-query'

export const Client = () => {
  const trpc = useTRPC()
  const { data: users } = useSuspenseQuery(trpc.getUsers.queryOptions())
  return <div>{JSON.stringify(users, null, 2)}</div>
}
