import Link from "next/link"

export default function Navbar() {
  return (
    <div className="flex justify-between items-center mx-auto w-full max-w-7xl py-2 border border-white/30 rounded-8xl pl-12 max-md:pl-4 pr-2 bg-white/20 backdrop-blur-sm my-6 rounded-full max-md:m-1">
      <Link href="/">
        <p className="text-white font-semibold text-lg">GRAINSBANK</p>
      </Link>
      <div className="flex items-center gap-8 max-lg:gap-4 max-md:hidden text-white text-[1rem]">
        <Link href="/marketplace" className="cursor-pointer">Marketplace</Link>
        <Link href="/about" className="cursor-pointer">About</Link>
        <Link href="/ecosystem" className="cursor-pointer">Ecosystem</Link>
        <Link href="/contact" className="cursor-pointer">Contact</Link>
      </div>
      <div className="flex gap-2">
        <Link href="/login" className="py-2.5 px-4 max-md:px-3 max-md:py-2 rounded-4xl flex items-center justify-center cursor-pointer">
          <p className="text-white">Log in</p>
        </Link>
        <Link href="/signup" className="bg-mint py-2 px-6 max-md:px-4 max-md:py-2 rounded-4xl flex items-center justify-center cursor-pointer">
          <p className="font-geist">Sign up</p>
        </Link>
      </div>
    </div>
  )
};
