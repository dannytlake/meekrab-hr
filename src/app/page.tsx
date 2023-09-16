import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-4">Meekrab HR</h1>
      <p>Welcome to the Meekrab family!</p>

      <div className="mt-4 space-x-2">
        <Link href="/about">About Us</Link>
        <Link href="/services">Our Services</Link>
        <Link href="/success-stories">Success Stories</Link>
      </div>
    </div>
    </main>
  )
}
