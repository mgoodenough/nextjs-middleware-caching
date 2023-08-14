import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <ul>
        <li><Link href="/" prefetch={false}>Home</Link></li>
        <li><Link href="/dashboard" prefetch={false}>Dashboard</Link></li>
        <li><Link href="/about" prefetch={false}>About</Link></li>
        <li><Link href="/contact" prefetch={false}>Contact</Link></li>
      </ul>
    </div>
  )
}