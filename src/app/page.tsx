import { getQueryClient, trpc } from '@/trpc/server'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { Client } from './client'
import { Suspense } from 'react'

export default async function Home() {
  const queryClient = getQueryClient()

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions())

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      {/* <Button variant="outline">Click Me</Button> */}
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>Loading...</div>}>
          <Client />
        </Suspense>
      </HydrationBoundary>
    </div>
  )
}

// 'use client'

// import { useTRPC } from '@/trpc/client'
// import { useQuery } from '@tanstack/react-query'
// import React from 'react'

// export default function Home() {
//   const trpc = useTRPC()
//   const { data: users } = useQuery(trpc.getUsers.queryOptions())

//   return (
//     <div className="min-h-screen min-w-screen flex items-center justify-center">
//       {/* <Button variant="outline">Click Me</Button> */}
//       {JSON.stringify(users)}
//     </div>
//   )
// }
