"use client"

import { useState } from "react"
import toast from "react-hot-toast"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import photo3 from "@/assets/Box-selection.png"
import Image from "next/image"

const initialForm = { name: "", email: "", whatsapp: "", commodity: "", message: "", website: "" }
const inputClass = "px-4 border border-black/40 bg-white rounded-xl h-12 w-full outline-0"

export default function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Something went wrong.")
      toast.success("Message sent. We'll get back to you soon.")
      setForm(initialForm)
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to send. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="p-2 bg-[#F6F6F2]">
      <div className="relative overflow-hidden min-h-[65vh] max-md:min-h-[50vh] rounded-3xl flex flex-col justify-between mb-12">
        <Image src={photo3} alt="Agriculture farm background" fill priority className="object-cover object-center " />
        <Navbar />
        <div className="relative z-10 px-6 pb-10 md:px-[60px] md:pb-[40px] flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 w-full">
          <div>
            <p className="font-inter text-[6rem] max-md:text-[3.5rem] text-white max-sm:leading-14">Let's talk <span className="font-instrument-serif italic font-medium">commodities.</span></p>
            <p className="text-[1.1rem] max-md:text-[1rem] text-white">Tell us what you need to buy or sell. A real person on our <br className="max-md:hidden" /> team would reply.</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 max-md:grid-cols-1 gap-6 mb-18">
        <div className="grid gap-6">
          <div className="flex justify-between items-end bg-mint p-6 max-md:p-5 rounded-2xl">
            <div className="mt-6 max-md:mt-4">
              <p className="text-black/70">Whatsapp (fastest)</p>
              <p className="text-[2rem] max-md:text-[1.5rem] font-geist">Chat with our team</p>
              <p className="text-black/70">+234 800 0000 0000</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>
          <div className="flex justify-between items-end bg-white p-6 max-md:p-5 rounded-2xl">
            <div className="mt-6 max-md:mt-4">
              <p className="text-black/70">Phone</p>
              <p className="text-[2rem] max-md:text-[1.5rem] font-geist">Call us</p>
              <p className="text-black/70">+234 800 0000 0000</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>
          <div className="flex justify-between items-end bg-mint p-6 max-md:p-5 rounded-2xl">
            <div className="mt-6 max-md:mt-4">
              <p className="text-black/70">Email</p>
              <p className="text-[2rem] max-md:text-[1.5rem] font-geist">Write to us</p>
              <p className="text-black/70">hello@grainsbank.com</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>
          <div className="flex justify-between items-end bg-green-900 text-white p-6 max-md:p-5 rounded-2xl">
            <div className="mt-6 max-md:mt-4">
              <p className="text-white/70">Office</p>
              <p className="text-[2rem] max-md:text-[1.5rem] font-geist">Visit us</p>
              <p className="text-white/70">Office address, City, Nigeria. Mon-Fri, 8am-5pm WAT</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6">
          <p className="text-[2.3rem] max-md:text-[1.8rem] font-inter">Send us a <span className="font-instrument-serif italic font-medium">message</span></p>
          <div className="my-3">
            <label htmlFor="name" className="block font-medium my-1">Full name</label>
            <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className={inputClass} placeholder="Your full name" />
          </div>
          <div className="my-3">
            <label htmlFor="email" className="block font-medium my-1">Email</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="you@company.com" />
          </div>
          <div className="my-3">
            <label htmlFor="whatsapp" className="block font-medium my-1">WhatsApp number</label>
            <input id="whatsapp" name="whatsapp" type="tel" value={form.whatsapp} onChange={handleChange} className={inputClass} placeholder="+234" />
          </div>
          <div className="my-3">
            <label htmlFor="commodity" className="block font-medium my-1">Commodity (optional)</label>
            <input id="commodity" name="commodity" type="text" value={form.commodity} onChange={handleChange} className={inputClass} placeholder="e.g. Maize, 20 tonnes" />
          </div>
          <div className="my-3">
            <label htmlFor="message" className="block font-medium my-1">Message</label>
            <textarea id="message" name="message" required value={form.message} onChange={handleChange} placeholder="How can we help?" className="px-4 resize-none border border-black/40 bg-white rounded-xl h-52 py-3 outline-0 w-full" />
          </div>
          {/* Honeypot: hidden from people, bots fill it */}
          <input name="website" type="text" value={form.website} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <button type="submit" disabled={isLoading} className="bg-green-900 text-white rounded-full w-full h-12 flex justify-center items-center my-6 disabled:opacity-60 disabled:cursor-not-allowed">
            {isLoading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  )
}