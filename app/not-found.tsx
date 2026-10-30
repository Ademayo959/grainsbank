import photo3 from "@/assets/Box-selection.png"
import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className="p-2">
      <div className="relative overflow-hidden min-h-[98vh] rounded-3xl flex flex-col justify-between mb-12 max-sm:mb-0 max-sm:px-2">
        <Image src={photo3} alt="Agriculture farm background" fill priority className="object-cover object-center -z-20" />
        <div className="flex justify-between items-center mx-auto w-full max-w-7xl py-2 border border-white/30 rounded-8xl pl-12 pr-2 max-sm:pl-6 max-sm:pr-2 bg-white/20 backdrop-blur-sm my-6 rounded-full max-sm:my-2">
          <Link href="/">
            <p className="text-white font-medium text-[1.1rem] max-sm:text-base">GRAINSBANK</p>
          </Link>
          <Link href={"/"} className="bg-mint py-2 px-6 rounded-4xl flex items-center justify-center cursor-pointer">
            <p className="font-geist text-base max-sm:text-sm">Back to home</p>
          </Link>
        </div>
        <div className="relative z-10 px-4 pb-6 md:px-[60px] md:pb-8 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 w-full">
          <div className="max-w-[700px]">
            <p className="text-[17.5rem] max-md:text-[12rem] max-sm:text-[7rem] mb-0 text-white font-light leading-none self-end">4<span className="font-instrument-serif font-medium">0</span>4</p>
          </div>
          <div className="max-w-[320px] grid pb-2">
            <p className="text-white font-inter text-[2rem] max-sm:text-2xl mb-0 whitespace-nowrap max-sm:whitespace-normal">Nothing is <span className="font-instrument-serif font-medium italic">growing</span> here</p>
            <p className="text-[1rem] leading-5 text-white font-normal">The page you're looking for has moved, or never existed.</p>
            <div className="mt-8">
              <Link href="/contact" className="bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm font-medium px-6 py-3 rounded-full text-center hover:bg-white/20 transition-colors inline-block">
                Browse marketplace
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
