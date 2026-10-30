import Image from "next/image"
import Link from "next/link"
import photo3 from "@/assets/Box-selection.png"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import photo4 from "@/assets/carrots.jpeg"


export default function page() {
  return (
    <div className="p-2 bg-[#F6F6F2]">
      <div className="relative overflow-hidden min-h-[90vh] rounded-3xl flex flex-col justify-between mb-12">
        <Image src={photo3} alt="Agriculture farm background" fill priority className="object-cover object-center " />
        <Navbar />
        <div className="relative z-10 px-6 pb-10 md:px-[60px] md:pb-[40px] flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 w-full">
          <div className="max-w-fit">
            <h1 className="text-[3.5rem] md:text-[6.5rem] leading-[0.95] font-light tracking-[-2px] text-white mb-2">
              Nigerian<br />agriculture, <span className="font-instrument-serif italic tracking-normal">built for <br />global markets.</span>
            </h1>
          </div>
          <div className="max-w-[320px] flex flex-col gap-6 pb-2">
            <p className="text-[0.89rem] leading-5 text-white font-normal">
              Grainsbank connects farmers, buyers and every link between them on one technology-driven platform
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
        <div>
          <p className="font-inter text-[3.5rem] font-light leading-14 tracking-tighter max-w-[85%]">One connected platform where a farmer can produce, finance, store, transport and <span className="font-instrument-serif italic font-medium">sell.</span></p>
          <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:gap-6 gap-10 mt-24 mb-12 max-sm:px-4 max-sm:my-8">
            <div className="border-t border-black/20">
              <p className="text-[1.8rem] font-inter mt-4">Who we are</p>
              <p className="text-black/70 font-inter">Grainsbank Digital Agribusiness Limited connects farmers, suppliers, financial institutions, traders, processors, logistics providers, warehouses and consumers.</p>
            </div>
            <div className="border-t border-black/20">
              <p className="text-[1.8rem] font-inter mt-4">What we do</p>
              <p className="text-black/70 font-inter">We combine agriculture, digital technology, AI, agricultural data, finance, commerce and logistics into one platform.</p>
            </div>
            <div className="border-t border-black/20">
              <p className="text-[1.8rem] font-inter mt-4">Why it matters</p>
              <p className="text-black/70 font-inter">To make agriculture more productive, transparent, accessible, profitable and technology-enabled.</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[3rem] font-light max-sm:text-[2.5rem]">What buyers <span className="font-instrument-serif font-medium italic">get.</span></p>
          <div className="grid grid-cols-[40%_30%_30%] max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 py-16 max-sm:py-6 ">
            <div className="relative flex rounded-3xl overflow-hidden h-[85vh] w-full row-span-2 flex-col justify-end">
              <Image src={photo4} alt="" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40 z-0"></div>
              <div className="relative z-10 p-6 text-white mt-auto">
                <div className="flex gap-2 items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 flex items-center justify-center"></div>
                  <p>Core Objective</p>
                </div>
                <p className="text-[2.1rem] leading-8">A connected agricultural economy, from <span className="italic text-[2.2rem] font-instrument-serif">seed to sale.</span></p>
              </div>
            </div>
            <div className="bg-green-900 rounded-2xl p-6 flex flex-col justify-between">
              <p className="text-mint">Vision</p>
              <p className="text-white text-inter text-[1.3rem]">To become Africa's leading digital agribusiness ecosystem.</p>
            </div>
            <div className="bg-gray-200 rounded-2xl p-6 flex flex-col justify-between">
              <p className="text-gray-600">Mission</p>
              <p className="text-black text-inter text-[1.3rem]">To empower farmers and agribusinesses with technology, data, finance and reliable markets.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 flex flex-col justify-between">
              <p className="text-black/70">For Buyers</p>
              <p className="text-black text-inter text-[1.3rem]">Verified producers, reliable supply and commodity intelligence.</p>
            </div>
            <div className="bg-mint rounded-2xl p-6 flex flex-col justify-between">
              <p className="text-green-900">For Farmers</p>
              <p className="text-green-950 text-inter text-[1.3rem]">Access, intelligence, finance, inputs, machinery and markets.</p>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full py-12 font-sans bg-[#F6F6F2]">
        <div className="bg-[#103d27] rounded-[2rem] p-8 md:p-16 text-white">

          {/* Header */}
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-normal tracking-tight">
              From farm to consumer, <span className="italic font-medium font-instrument-serif text-[#f4f4f4]">one</span>
              <br />
              <span className="italic font-instrument-serif text-[#f4f4f4]">connected chain.</span>
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4">
            {/* Row 1 */}
            <div className="flex flex-col border-t border-white/20 pt-4">
              <span className="text-[#d3f37a] text-xs font-medium mb-1">01</span>
              <span className="text-lg md:text-xl">Farmer</span>
            </div>
            <div className="flex flex-col border-t border-white/20 pt-4">
              <span className="text-[#d3f37a] text-xs font-medium mb-1">02</span>
              <span className="text-lg md:text-xl">Farm</span>
            </div>
            <div className="flex flex-col border-t border-white/20 pt-4">
              <span className="text-[#d3f37a] text-xs font-medium mb-1">03</span>
              <span className="text-lg md:text-xl">Input</span>
            </div>
            <div className="flex flex-col border-t border-white/20 pt-4">
              <span className="text-[#d3f37a] text-xs font-medium mb-1">04</span>
              <span className="text-lg md:text-xl">Finance</span>
            </div>
            <div className="flex flex-col border-t border-white/20 pt-4">
              <span className="text-[#d3f37a] text-xs font-medium mb-1">05</span>
              <span className="text-lg md:text-xl">Machinery</span>
            </div>
            <div className="flex flex-col border-t border-white/20 pt-4">
              <span className="text-[#d3f37a] text-xs font-medium mb-1">06</span>
              <span className="text-lg md:text-xl">Intelligence</span>
            </div>
            {/* Row 2 */}
            <div className="flex flex-col border-t border-white/20 pt-4">
              <span className="text-[#d3f37a] text-xs font-medium mb-1">07</span>
              <span className="text-lg md:text-xl">Production</span>
            </div>
            <div className="flex flex-col border-t border-white/20 pt-4">
              <span className="text-[#d3f37a] text-xs font-medium mb-1">08</span>
              <span className="text-lg md:text-xl">Storage</span>
            </div>
            <div className="flex flex-col border-t border-white/20 pt-4">
              <span className="text-[#d3f37a] text-xs font-medium mb-1">09</span>
              <span className="text-lg md:text-xl">Processing</span>
            </div>
            <div className="flex flex-col border-t border-white/20 pt-4">
              <span className="text-[#d3f37a] text-xs font-medium mb-1">10</span>
              <span className="text-lg md:text-xl">Logistics</span>
            </div>
            <div className="flex flex-col border-t border-white/20 pt-4">
              <span className="text-[#d3f37a] text-xs font-medium mb-1">11</span>
              <span className="text-lg md:text-xl">Market</span>
            </div>
            <div className="flex flex-col border-t border-white/20 pt-4">
              <span className="text-[#d3f37a] text-xs font-medium mb-1">12</span>
              <span className="text-lg md:text-xl">Consumer</span>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto">
        <div className="w-full max-lg:w-full flex flex-col items-start my-12">
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-light tracking-tight mb-8 text-left">
            Powered by innovation, <span className="italic font-instrument-serif font-medium">driven by data.</span>
          </h2>
          <div className="flex flex-wrap justify-start gap-3 md:gap-2 w-full">
            <span className="px-5 py-2 rounded-full border border-gray-300 text-sm md:text-base font-medium hover:border-black transition-colors cursor-pointer">Artificial Intelligence</span>
            <span className="px-5 py-2 rounded-full border border-gray-300 text-sm md:text-base font-medium hover:border-black transition-colors cursor-pointer">Machine learning</span>
            <span className="px-5 py-2 rounded-full border border-gray-300 text-sm md:text-base font-medium hover:border-black transition-colors cursor-pointer">Data analytics</span>
            <span className="px-5 py-2 rounded-full border border-gray-300 text-sm md:text-base font-medium hover:border-black transition-colors cursor-pointer">GIS</span>
            <span className="px-5 py-2 rounded-full border border-gray-300 text-sm md:text-base font-medium hover:border-black transition-colors cursor-pointer">GPS and satellite imagery</span>
            <span className="px-5 py-2 rounded-full border border-gray-300 text-sm md:text-base font-medium hover:border-black transition-colors cursor-pointer">Cloud computing</span>
            <span className="px-5 py-2 rounded-full border border-gray-300 text-sm md:text-base font-medium hover:border-black transition-colors cursor-pointer">Mobile technology</span>
            <span className="px-5 py-2 rounded-full border border-gray-300 text-sm md:text-base font-medium hover:border-black transition-colors cursor-pointer">Digital payments</span>
            <span className="px-5 py-2 rounded-full border border-gray-300 text-sm md:text-base font-medium hover:border-black transition-colors cursor-pointer">Internet of Things</span>
            <span className="px-5 py-2 rounded-full border border-gray-300 text-sm md:text-base font-medium hover:border-black transition-colors cursor-pointer">Digital identity</span>
            <span className="px-5 py-2 rounded-full border border-gray-300 text-sm md:text-base font-medium hover:border-black transition-colors cursor-pointer">Data dashboards</span>
            <span className="px-5 py-2 rounded-full border border-gray-300 text-sm md:text-base font-medium hover:border-black transition-colors cursor-pointer">Automated notifications</span>
          </div>
        </div>
      </div>
      <section className="relative overflow-hidden min-h-[75vh] rounded-3xl flex flex-col justify-between">
        <Image src={photo3} alt="Agriculture farm background" fill priority className="object-cover object-center " />
        <div className="relative z-10 max-w-3xl mx-auto self-center my-auto">
          <p className="text-[5rem] text-white leading-19 my-8 tracking-tight text-center">Let's move your next <br /><span className="font-instrument-serif font-medium italic">shipment.</span></p>
          <div className="flex gap-4 justify-self-center">
            <div className="bg-mint py-3 px-6 rounded-4xl flex items-center justify-center cursor-pointer w-fit">
              <p>Request a quote</p>
            </div>
            <div className="py-3 border border-white/30 rounded-4xl px-6 text-white font-medium w-fit cursor-pointer">
              <p>Contact us</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
};
