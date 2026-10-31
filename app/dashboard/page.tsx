"use client"
import Spinner from "@/components/Spinner"
import { auth } from "@/firebase/firebase"
import Link from "next/link";
import toast from "react-hot-toast";
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
// Import the 3 sub-pages from the components folder
import DashboardMarket from '@/components/DashboardMarket';
import DashboardQuote from '@/components/DashboardQuote';
import DashboardInvestor from '@/components/DashboardInvestor';


export default function page() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setactiveTab] = useState("DashboardMarket");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setuser] = useState(null);

  // You can fetch real user data here if needed
  const [userName, setuserName] = useState("Your name");
  const [userEmail, setuserEmail] = useState("you@email.com");


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login")
      } else {
        setIsLoading(false)
      }
      return unsubscribe();
    })
  }, [router])

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out");
      router.push('/login');
    } catch (err) {
      console.log("Error detected:", err);
      toast.error("Failed to log out");
    }
  };

  if (isLoading) {
    return <Spinner />
  }
  return (
    <div className="min-h-screen bg-[#0B2F24] flex justify-center items-center font-sans">
      {sidebarOpen && (<div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)}/>)}
      <div className="w-full h-[100vh] bg-[#F6F6F2] flex overflow-hidden shadow-2xl relative">
        <div className={`
                    bg-[#0B2F24] text-white flex flex-col justify-between p-6 m-2 rounded-2xl shrink-0
                    fixed top-2 left-2 h-[calc(100%-1rem)] z-50 w-64 transition-transform duration-300
                    md:sticky md:top-2 md:left-0 md:h-auto md:z-auto md:translate-x-0
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-[120%]'}`}>
          <div>
            <Link href="/" className="font-semibold text-lg tracking-wide mb-10 block">GRAINSBANK</Link>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => { setactiveTab("DashboardMarket"); setSidebarOpen(false); }}
                className={`text-left px-4 py-3 rounded-full text-sm font-medium transition-colors ${activeTab === "DashboardMarket" ? "bg-white text-black" : "text-white/70 hover:text-white hover:bg-white/10"}`}
              >
                Products
              </button>
              <button
                onClick={() => { setactiveTab("DashboardQuote"); setSidebarOpen(false); }}
                className={`text-left px-4 py-3 rounded-full text-sm font-medium transition-colors ${activeTab === "DashboardQuote" ? "bg-white text-black" : "text-white/70 hover:text-white hover:bg-white/10"}`}
              >
                Request a quote
              </button>
              <button
                onClick={() => { setactiveTab("DashboardInvestor"); setSidebarOpen(false); }}
                className={`text-left px-4 py-3 rounded-full text-sm font-medium transition-colors ${activeTab === "DashboardInvestor" ? "bg-white text-black" : "text-white/70 hover:text-white hover:bg-white/10"}`}
              >
                Investors and suppliers
              </button>
            </nav>
          </div>
          <div className="border-t border-white/20 pt-4 mt-8">
            <p className="font-medium text-sm">{userName}</p>
            <p className="text-xs text-white/60 mb-4">{userEmail}</p>
            <button onClick={handleLogout} className="text-[#D1F84A] text-sm font-medium hover:underline flex items-center gap-2">
              Log out
            </button>
          </div>
        </div>
        {/* MAIN CONTENT AREA */}
        <div className='flex-1 overflow-y-auto p-4 md:p-10'>
          <button onClick={() => setSidebarOpen(true)} className="md:hidden mb-4 p-2 bg-[#0B2F24] text-white rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          {activeTab === "DashboardMarket" && <DashboardMarket />}
          {activeTab === "DashboardQuote" && <DashboardQuote />}
          {activeTab === "DashboardInvestor" && <DashboardInvestor />}
        </div>
      </div>
    </div>
  )
};
