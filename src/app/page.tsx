import prisma from '@/lib/db'

export default async function Home() {
  const users = await prisma.user.findMany()

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      {/* <Button variant="outline">Click Me</Button> */}
      {JSON.stringify(users)}
    </div>
  )
}
