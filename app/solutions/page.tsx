import Image from "next/image"
import Link from "next/link"
import photo3 from "@/assets/Box-selection.png"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function page() {
  return (
    <div className="p-2 bg-[#F6F6F2]">
      <div className="relative overflow-hidden min-h-[90vh] rounded-3xl flex flex-col justify-between mb-12">
        <Image src={photo3} alt="Agriculture farm background" fill priority className="object-cover object-center " />
        <Navbar />
        <div className="relative z-10 px-6 pb-10 md:px-[60px] md:pb-[40px] flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 w-full">
          <div className="max-w-fit">
            <h1 className="text-[3.5rem] md:text-[6.5rem] leading-[0.95] font-light tracking-[-2px] text-white mb-2">
              Solutions for every <br /> link in, <span className="font-instrument-serif italic tracking-normal">the chain.</span>
            </h1>
          </div>
          <div className="max-w-[320px] flex flex-col gap-6 pb-2">
            <p className="text-[0.89rem] leading-5 text-white font-normal">
              Whether you grow, buy, process or finance, Grainsbank onnects you to a reliable market.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/marketplace" className="bg-mint text-black text-sm font-medium px-6 py-3 rounded-full text-center hover:bg-mint/90 transition-colors">
                Explore marketplace
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-12">
          <div className="relative min-h-[50vh] lg:min-h-[70vh] rounded-3xl p-6">
            <Image src={photo3} alt="Agriculture farm background" fill priority className="object-cover object-center rounded-3xl" />
            <div className="text-white border border-white/30 py-1.5 px-6 bg-white/20 backdrop-blur-sm rounded-full w-fit relative z-10">
              <p className="font-medium font-inter tracking-tight">For buyers</p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-10">
            <div>
              <p className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-tight lg:leading-13 tracking-tighter font-normal">Buy with confidence, <br /> <span className="font-instrument-serif italic tracking-normal">straight from source.</span></p>
              <div className="my-6">
                <div className="border-t border-black/20 py-4">
                  <p className="text-2xl lg:text-[1.8rem] font-light">Verified producers</p>
                  <p className="text-base text-black/70 -mt-1">Know who you're buying from.</p>
                </div>
                <div className="border-t border-black/20 py-4">
                  <p className="text-2xl lg:text-[1.8rem] font-light">Reliable supply</p>
                  <p className="text-base text-black/70 -mt-1">A steady route from farm to your warehouse or fatory.</p>
                </div>
                <div className="border-t border-black/20 py-4">
                  <p className="text-2xl lg:text-[1.8rem] font-light">Commodity Intelligence</p>
                  <p className="text-base text-black/70 -mt-1">Market data to plan and buy with confidence.</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-green-950 text-white w-fit py-2.5 px-6 rounded-full">
              <p className="text-base lg:text-[1.1rem]">Browse the marketplace</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="h-4.5 w-4.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full py-20 text-[#111] font-sans">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-12">
            Everyone along the chain, <span className="font-instrument-serif italic font-medium tracking-normal">one platform.</span>
          </h2>
          <div className="border-t border-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr_140px] gap-4 md:gap-8 items-start py-8 border-b border-gray-300">
              <h3 className="text-2xl md:text-[28px] font-normal leading-tight">Farmers</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed md:pt-2">Access, intelligence, finance, inputs, machinery and markets.</p>
              <div className="md:text-right md:pt-2">
                <a href="#" className="inline-flex items-center gap-1 text-sm font-medium hover:opacity-70 transition-opacity whitespace-nowrap">
                  Join us
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr_140px] gap-4 md:gap-8 items-start py-8 border-b border-gray-300">
              <h3 className="text-2xl md:text-[28px] font-normal leading-tight">Processors</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed md:pt-2">Reliable commodity supply and producer networks.</p>
              <div className="md:text-right md:pt-2">
                <Link href="/partner" className="inline-flex items-center gap-1 text-sm font-medium hover:opacity-70 transition-opacity whitespace-nowrap">
                  Partner with us
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr_140px] gap-4 md:gap-8 items-start py-8 border-b border-gray-300">
              <h3 className="text-2xl md:text-[28px] font-normal leading-tight">Input suppliers</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed md:pt-2">Access to a large digital farmer marketplace.</p>
              <div className="md:text-right md:pt-2">
                <Link href="/partner" className="inline-flex items-center gap-1 text-sm font-medium hover:opacity-70 transition-opacity whitespace-nowrap">
                  Partner with us
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr_140px] gap-4 md:gap-8 items-start py-8 border-b border-gray-300">
              <h3 className="text-2xl md:text-[28px] font-normal leading-tight">Financial institutions</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed md:pt-2">Structured agricultural data, farmer networks and digital records.</p>
              <div className="md:text-right md:pt-2">
                <Link href="partner" className="inline-flex items-center gap-1 text-sm font-medium hover:opacity-70 transition-opacity whitespace-nowrap">
                  Partner with us
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr_140px] gap-4 md:gap-8 items-start py-8 border-b border-gray-300">
              <h3 className="text-2xl md:text-[28px] font-normal leading-tight">
                Government and<br />development organisations
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed md:pt-2">Agricultural data, digital farmer networks and programme delivery infrastructure.</p>
              <div className="md:text-right md:pt-2">
                <Link href="/partner" className="inline-flex items-center gap-1 text-sm font-medium hover:opacity-70 transition-opacity whitespace-nowrap">
                  Partner with us
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      <section className="relative overflow-hidden min-h-[75vh] rounded-3xl flex flex-col justify-between">
        <Image src={photo3} alt="Agriculture farm background" fill priority className="object-cover object-center " />
        <div className="relative z-10 max-w-3xl mx-auto self-center my-auto px-6 w-full">
          <p className="text-4xl sm:text-6xl md:text-[5rem] text-white leading-tight md:leading-19 my-8 tracking-tight text-center md:whitespace-nowrap">Not sure where you <span className="font-instrument-serif font-medium italic">fit?</span></p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <Link href="/contact" className="bg-mint py-3 px-6 rounded-4xl flex items-center justify-center cursor-pointer w-full sm:w-fit text-center">
              <p>Contact us</p>
            </Link>
            <a href="https://wa.me/2348109992384" className="py-3 border border-white/30 rounded-4xl px-6 text-white bg-white/20 backdrop-blur-xs font-medium w-full sm:w-fit cursor-pointer text-center">
              <p>Chat on WhatsApp</p>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
};
