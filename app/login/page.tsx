"use client"
import { useState } from "react";
import { auth } from "@/firebase/firebase"
import { signInWithEmailAndPassword, AuthError } from "firebase/auth";
import { useRouter } from "next/navigation";
import photo3 from "@/assets/Box-selection.png"
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

export default function page() {
   const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  //loading state
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      toast.success("Logged in successfully")
      router.push("/dashboard")
      
    } catch (err: unknown) {
      console.log(err)

      const firebaseError = err as AuthError;
      if (firebaseError.code === "auth/email-already-in-use") {
        toast.error("This email is already registered. Try logging in.");
      } else if (firebaseError.code === "auth/weak-password") {
        toast.error("Password should be at least 6 characters.");
      } else {
        toast.error(firebaseError.message || "Failed to create an account.");
      }
    } finally {
      setIsLoading(false)
    }

  }

  return (
    <div className="grid grid-cols-2 max-lg:grid-cols-1 p-2 h-screen max-lg:h-auto bg-[#F6F6F2] overflow-hidden max-lg:overflow-visible">
      <div className="relative overflow-hidden min-h-[98vh] max-lg:min-h-[50vh] max-md:min-h-[40vh] rounded-3xl flex flex-col justify-between p-6 max-lg:hidden">
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
      <div className="flex justify-center items-center max-lg:min-h-screen max-lg:p-6">
        <div className="w-96 max-lg:w-full max-md:max-w-sm">
          <div className="mb-16 max-lg:block lg:hidden">
            <Link href="/" className="text-black/70 hover:text-black font-medium text-sm flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Back to home
            </Link>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <div className="h-2 w-2 rounded-full bg-green-800"></div>
              <p className="text-black/70">Welcome Back</p>
            </div>
            <h1 className="text-[3.5rem] max-md:text-[2.5rem]">Log <span className="font-instrument-serif italic font-medium">in</span></h1>
            <p className="text-black/70 leading-5 mb-6 max-md:text-sm">Request quotes and track very enquiry in one <br className="max-md:hidden" /> place.</p>
          </div>
          <form onSubmit={handleLogin}>
            <div>
              <div>
                <p className="font-medium my-1">Email</p>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="px-4 border border-black/40 bg-white rounded-xl h-12 w-full" placeholder="you@company.com" />
              </div>
              <div>
                <p className="font-medium my-1">Password</p>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="px-4 border border-black/40 bg-white rounded-xl h-12 w-full" placeholder="At least 8 characters" />
              </div>
              <p className="underline float-right my-2 text-[0.8rem] cursor-pointer hover:text-[0.85rem]">Forgot Password?</p>
            </div>
            <div className="mt-12">
              <button type="submit" disabled={isLoading}className="bg-green-950 hover:bg-green-900 transition-colors text-white rounded-full w-full h-12 flex justify-center items-center my-6 disabled:opacity-50 cursor-pointer">
                <p>{isLoading ? "Logging in..." : "Log in"}</p>
              </button>
              <p className="text-black/70 text-center">New here? <Link href="/signup" className="font-medium underline text-black cursor-pointer">Create an account</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};
