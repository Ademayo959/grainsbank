import Link from "next/link"

export default function Navbar() {
  return (
    <div className="flex justify-between items-center mx-auto w-full max-w-7xl py-2 border border-white/30 rounded-8xl pl-12 pr-2 bg-white/20 backdrop-blur-sm my-6 rounded-full">
      <div>
        <p className="text-white font-semibold text-lg">GRAINSBANK</p>
      </div>
      <div className="flex items-center gap-8 text-white text-[1rem]">
        <p className="cursor-pointer">Marketplace</p>
        <p className="cursor-pointer">About</p>
        <p className="cursor-pointer">Ecosystem</p>
        <p className="cursor-pointer">Contact</p>
      </div>
      <div className="flex gap-2">
        <Link href="/login" className="py-2.5 px-4 rounded-4xl flex items-center justify-center cursor-pointer">
          <p className="text-white">Log in</p>
        </Link>
        <Link href="/signup" className="bg-mint py-2 px-6 rounded-4xl flex items-center justify-center cursor-pointer">
          <p className="font-geist">Sign up</p>
        </Link>
      </div>
    </div>
  )
};
