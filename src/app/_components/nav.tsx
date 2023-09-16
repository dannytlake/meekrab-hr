import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <Link href="/">Home</Link>
      <span className="mx-2">|</span>
      <Link href="/about">About</Link>
      <span className="mx-2">|</span>
      <Link href="/services">Services</Link>
      <span className="mx-2">|</span>
      <Link href="/success-stories">Success Stories</Link>
    </nav>
  )
}