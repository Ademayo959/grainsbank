import photo3 from "@/assets/Box-selection.png"
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="grid grid-cols-2 p-2 h-screen bg-[#F6F6F2] overflow-hidden">
      <div className="relative overflow-hidden min-h-[98vh] rounded-3xl flex flex-col justify-between p-6">
        <Image src={photo3} alt="Agriculture farm background" fill priority className="object-cover object-center " />
        <div className="relative z-10 h-full flex flex-col justify-between">
          <Link href="/" className="bg-white/10 border cursor-pointer border-white/50 rounded-3xl text-white px-6 py-2 backdrop-blur-sm w-fit">
            <p className="font-semibold">GRAINSBANK</p>
          </Link>
          <div className="bg-white/10 border border-white/50 rounded-2xl text-white px-6 py-6 backdrop-blur-sm w-fit">
            <p>Welcome Back</p>
            <p className="text-[1.6rem] leading-8 mt-2">Connecting agriculture <span className="font-instrument-serif italic font-medium text-[1.75rem]">from farm <br />to market</span></p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-96">
          <div>
            <div className="flex gap-2 items-center">
              <div className="h-2 w-2 rounded-full bg-green-800"></div>
              <p className="text-black/70">Welcome Back</p>
            </div>
            <h1 className="text-[3.5rem]">Log <span className="font-instrument-serif italic font-medium">in</span></h1>
            <p className="text-black/70 leading-5 mb-6">Request quotes and track very enquiry in one <br /> place.</p>
          </div>
          <div>
            <div>
              <p className="font-medium my-1">Email</p>
              <input type="text" className="px-4 border border-black/40 bg-white rounded-xl h-12 w-full" placeholder="you@company.com" />
            </div>
            <div>
              <p className="font-medium my-1">Password</p>
              <input type="text" className="px-4 border border-black/40 bg-white rounded-xl h-12 w-full" placeholder="At least 8 characters" />
            </div>
            <p className="underline float-right my-2 text-[0.8rem] cursor-pointer hover:text-[0.85rem]">Forgot Password?</p>
          </div>
          <div className="mt-12">
            <div className="bg-green-950 text-white rounded-full w-full h-12 flex justify-center items-center my-6">
              <p>Log in</p>
            </div>
            <p className="text-black/70 text-center">New here? <Link href="/signup" className="font-medium underline text-black cursor-pointer">Create an account</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
};
