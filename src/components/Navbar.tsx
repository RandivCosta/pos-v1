import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center relative z-30 py-5 overflow-hidden">
      <Link href="/" className="ml-2 lg:ml-5">
        <h1 className="font-bold">Ceyinfo POS</h1>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="cursor-pointer transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flex mr-12">
        <Button><Link href='/dashboard/items'>Login</Link></Button>
      </div>

      <Menu className="inline-block cursor-pointer lg:hidden mr-4" />
    </nav>
  )
}

export default Navbar