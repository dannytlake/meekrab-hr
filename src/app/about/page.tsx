import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl mb-4">About Us</h1>
      <p>We have been in the HR consulting business for over a decade...</p>
      {/* Add more content */}
    </div>
    </main>
  )
}
