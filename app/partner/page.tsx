"use client"

import { useState } from "react"
import toast from "react-hot-toast"
import Image from "next/image"
import photo3 from "@/assets/Box-selection.png"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const initialForm = { organisation: "", contactPerson: "", email: "", phone: "", orgType: "", message: "", website: "" }
const inputClass = "px-4 border border-black/40 bg-white rounded-xl h-12 w-full outline-0"

export default function PartnerPage() {
  const [form, setForm] = useState(initialForm)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Something went wrong.")
      toast.success("Enquiry sent. Our team will get back to you.")
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
          <div className="flex items-end justify-between w-full">
            <p className="font-inter text-[6rem] max-md:text-[3.5rem] text-white leading-20 max-sm:leading-14">Partner with <br /> <span className="font-instrument-serif italic font-medium">Grainsbank.</span></p>
            <p className="text-[1.1rem] max-md:text-[1rem] text-white">Help us connect Nigerian agriculture to <br className="max-md:hidden" />markets at home and abroad.</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div>
          <p className="text-[3rem] font-normal my-8">Who we <span className="font-instrument-serif italic font-medium">partner with</span></p>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-green-900 rounded-2xl p-6 flex flex-col justify-between min-h-[250px] max-md:min-h-[200px]">
              <p className="text-white text-[1.6rem]">Financial institutions</p>
              <p className="text-white text-inter ">Reach farmers and agribusinesses through structured agricultural data.</p>
            </div>
            <div className="bg-gray-200 rounded-2xl p-6 flex flex-col justify-between min-h-[250px] max-md:min-h-[200px]">
              <p className="text-black text-[1.6rem]">Input suppliers</p>
              <p className="text-black text-inter">Put your inputs in front of a growing digital farmer network.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 flex flex-col justify-between min-h-[250px] max-md:min-h-[200px]">
              <p className="text-black/70 text-[1.6rem]">Logistics companies</p>
              <p className="text-black text-inter">Move commodities between farms, warehouses and buyers.</p>
            </div>
            <div className="bg-mint rounded-2xl p-6 flex flex-col justify-between min-h-[250px] max-md:min-h-[200px]">
              <p className="text-green-900 text-[1.6rem]">Processors and exporters</p>
              <p className="text-green-950 text-inter">Source reliable commodity supply from producer networks.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 flex flex-col justify-between min-h-[250px] max-md:min-h-[200px]">
              <p className="text-black/70 text-[1.6rem]">Warehouses and storage</p>
              <p className="text-black text-inter">Connect your storage capacity to the farms and buyers who need it.</p>
            </div>
            <div className="bg-green-900 rounded-2xl p-6 flex flex-col justify-between min-h-[250px] max-md:min-h-[200px]">
              <p className="text-mint text-[1.6rem] leading-7">Government and development organisations</p>
              <p className="text-white text-inter">Work with us on agricultural data and programme delivery.</p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 max-md:grid-cols-1 gap-6 py-24 mb-6">
          <div>
            <p className="text-[3rem] font-normal">Start the <span className="font-instrument-serif italic font-medium">Conversation!</span></p>
            <div>
              <p className="text-black/60 w-[85%] text-[1.1rem] font-inter">Tell us about your organisation and how you'd like to work together. Our team will get back to you directly.</p>
              <div className="text-black text-[1rem] my-6">
                <p>+234 800 000 0000</p>
                <p>hello@grainsbank.com</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6">
            <p className="text-[2.3rem] max-md:text-[1.8rem] font-inter">Send us a <span className="font-instrument-serif italic font-medium">message</span></p>
            <div className="my-3">
              <label htmlFor="organisation" className="block font-medium my-1">Organisation name</label>
              <input id="organisation" name="organisation" type="text" required value={form.organisation} onChange={handleChange} className={inputClass} placeholder="Your organisation" />
            </div>
            <div className="my-3">
              <label htmlFor="contactPerson" className="block font-medium my-1">Contact person</label>
              <input id="contactPerson" name="contactPerson" type="text" required value={form.contactPerson} onChange={handleChange} className={inputClass} placeholder="Full name" />
            </div>
            <div className="my-3">
              <label htmlFor="email" className="block font-medium my-1">Email</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="you@organisation.com" />
            </div>
            <div className="my-3">
              <label htmlFor="phone" className="block font-medium my-1">Phone or WhatsApp</label>
              <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputClass} placeholder="+234" />
            </div>
            <div className="my-3">
              <label htmlFor="orgType" className="block font-medium my-1">Type of organisation</label>
              <input id="orgType" name="orgType" type="text" value={form.orgType} onChange={handleChange} className={inputClass} placeholder="e.g. Bank, logistics company, processor" />
            </div>
            <div className="my-3">
              <label htmlFor="message" className="block font-medium my-1">How would you like to work with us?</label>
              <textarea id="message" name="message" required value={form.message} onChange={handleChange} placeholder="Tell us a little about your idea" className="px-4 resize-none border border-black/40 bg-white rounded-xl h-52 py-3 outline-0 w-full" />
            </div>
            {/* Honeypot: hidden from people, bots fill it */}
            <input name="website" type="text" value={form.website} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <button type="submit" disabled={isLoading} className="bg-green-900 text-white rounded-full w-full h-12 flex justify-center items-center my-6 disabled:opacity-60 disabled:cursor-not-allowed">
              {isLoading ? "Sending..." : "Submit enquiry"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}