"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/firebase/firebase";
import toast from "react-hot-toast";

import AdminOverview from "@/components/AdminOverview";
import AdminProducts from "@/components/AdminProducts";
import AdminQuotes from "@/components/AdminQuotes";
import AdminNetwork from "@/components/AdminNetwork";

export default function AdminDashboardPage() {
  const router = useRouter();

  const [activeTab, setactiveTab] = useState("AdminOverview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setuser] = useState<User | null>(null);
  const [userName, setuserName] = useState("Adaeze Okafor");

  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        if (isMounted) {
          setuser(null);
          setIsAdmin(false);
          setCheckingAccess(false);
          router.replace("/login");
        }

        return;
      }

      try {
        // Check whether the user's UID exists in the admins collection
        const adminRef = doc(db, "admins", currentUser.uid);
        const adminSnap = await getDoc(adminRef);

        if (!isMounted) return;

        if (adminSnap.exists()) {
          setuser(currentUser);
          setIsAdmin(true);

          if (currentUser.displayName) {
            setuserName(currentUser.displayName);
          }
        } else {
          setIsAdmin(false);
          toast.error("You are not authorized to access the admin dashboard.");

          await signOut(auth);

          if (isMounted) {
            router.replace("/login");
          }
        }
      } catch (error) {
        console.error("Admin access verification failed:", error);

        if (isMounted) {
          setIsAdmin(false);
          toast.error("Could not verify admin access.");
          router.replace("/login");
        }
      } finally {
        if (isMounted) {
          setCheckingAccess(false);
        }
      }
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, [router]);

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
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
  setMounted(true);
}, []);

  if (!mounted || checkingAccess) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6F6F2]">
      <div className="w-8 h-8 border-4 border-[#0B2F24] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

if (!user || !isAdmin) {
  return null;
}

  return (
    <div className="min-h-screen bg-[#F6F6F2] flex font-sans">

      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside className={`
                w-[280px] bg-[#0B2F24] text-white flex flex-col justify-between shrink-0 
                fixed h-screen z-50 transition-transform duration-300
                md:sticky md:top-0 md:z-auto md:translate-x-0
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
        <div>
          {/* Logo Area */}
          <div className="p-8 pb-10 flex items-center gap-3">
            <div className="w-8 h-8 bg-[#D1F84A] rounded-full flex items-center justify-center text-black font-bold">
              G
            </div>
            <span className="font-semibold text-lg tracking-wide">GRAINSBANK</span>
          </div>

          <div className="px-6 mb-4">
            <p className="text-[10px] uppercase tracking-widest text-white/50 font-semibold mb-4">Admin Workspace</p>

            <nav className="flex flex-col gap-1.5">
              <button
                onClick={() => { setactiveTab("AdminOverview"); setSidebarOpen(false); }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left ${activeTab === "AdminOverview" ? "bg-white/10 text-white" : "text-white/60 hover:text-white hover:bg-white/5"}`}
              >
                Overview
              </button>
              <button
                onClick={() => { setactiveTab("AdminProducts"); setSidebarOpen(false); }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left ${activeTab === "AdminProducts" ? "bg-white/10 text-white" : "text-white/60 hover:text-white hover:bg-white/5"}`}
              >
                Products
              </button>
              <button
                onClick={() => { setactiveTab("AdminQuotes"); setSidebarOpen(false); }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left ${activeTab === "AdminQuotes" ? "bg-white/10 text-white" : "text-white/60 hover:text-white hover:bg-white/5"}`}
              >
                Quote Requests
              </button>
              <button
                onClick={() => { setactiveTab("AdminNetwork"); setSidebarOpen(false); }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left ${activeTab === "AdminNetwork" ? "bg-white/10 text-white" : "text-white/60 hover:text-white hover:bg-white/5"}`}
              >
                Investors & Suppliers
              </button>
            </nav>
          </div>
        </div>

        {/* Profile Area */}
        <div className="p-6 border-t border-white/10 m-4">
          <div className="flex items-center gap-3 mb-6">
            <img src="https://i.pravatar.cc/150?img=47" alt="Admin" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-medium text-sm">{userName}</p>
              <p className="text-[11px] text-white/50">Platform Admin</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-[#D1F84A] text-sm font-medium hover:underline"
          >
            Log out
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-4 md:p-10 md:ml-0 overflow-y-auto h-screen">
        {/* Mobile Menu Button */}
        <button onClick={() => setSidebarOpen(true)} className="md:hidden mb-4 p-2 bg-[#0B2F24] text-white rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {/* Render Sub-components based on state */}
        {activeTab === "AdminOverview" && <AdminOverview />}
        {activeTab === "AdminProducts" && <AdminProducts />}
        {activeTab === "AdminQuotes" && <AdminQuotes />}
        {activeTab === "AdminNetwork" && <AdminNetwork />}
      </main>
    </div>
  );
}