import Link from 'next/link'
import { auth } from '@clerk/nextjs'

export default async function Home() {
  const { userId } = await auth()
  let href = userId ? '/journal' : '/new-user'
  return (
    <div className="flex items-center justify-center w-screen h-screen text-white bg-black">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="mb-4 text-6xl">The Best Journal App</h1>
        <p className="mb-4 text-3xl text-white/60">
          This is the best app for tracking your mood throughout your life. All
          you have to do is be honest
        </p>
        <div>
          <Link href={href}>
            <button className="px-4 py-2 text-lg bg-blue-600 rounded-lg">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
