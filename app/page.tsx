import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import photo1 from "@/assets/cows.jpeg"
import maize from "@/assets/maize.jpeg"
import rice from "@/assets/rice.jpeg"
import soybeans from "@/assets/soybeans.jpeg"
import cocoabeans from "@/assets/cocoabeans.jpeg"
import photo4 from "@/assets/cap.jpeg"
import photo3 from "@/assets/Box-selection.png"

export default function Home() {
  return (
    <div className="w-full p-2 bg-gray-100">
      <div className="relative overflow-hidden min-h-[98vh] rounded-3xl flex flex-col justify-between mb-12">
        <Image src={photo3} alt="Agriculture farm background" fill priority className="object-cover object-center " />
        <Navbar />
        <div className="relative z-10 px-6 pb-10 md:px-[60px] md:pb-[40px] flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 w-full">
          <div className="max-w-[700px]">
            <div className="inline-block border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-[13px] text-white mb-6">
              <p className="text-[0.9rem]">Digital agribusiness · Africa</p>
            </div>
            <h1 className="text-[3.5rem] md:text-[6rem] leading-[0.95] font-normal tracking-[-2px] text-white mb-2">
              Connecting<br />
              agriculture from<br />
              <span className="font-instrument-serif italic tracking-normal">farm to market.</span>
            </h1>
          </div>
          <div className="max-w-[320px] flex flex-col gap-6 pb-2">
            <p className="text-[0.89rem] leading-5 text-white font-normal">
              One connected platform for farmers, suppliers, financiers, traders, processors and buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/marketplace" className="bg-mint text-black text-sm font-medium px-6 py-3 rounded-full text-center hover:bg-mint/90 transition-colors">
                Explore marketplace
              </Link>
              <Link href="/contact" className="bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm font-medium px-6 py-3 rounded-full text-center hover:bg-white/20 transition-colors">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl pb-18">
        <div className="grid grid-cols-3 gap-10 mt-24 mb-12">
          <div className="border-t border-black/20">
            <p className="text-[5rem] font-inter">12</p>
            <p className="text-black/70 font-inter">Integrated platforms in one ecosystem.</p>
          </div>
          <div className="border-t border-black/20">
            <p className="text-[5rem] font-inter">20</p>
            <p className="text-black/70 font-inter">Types of participants, from smallholders to exporters.</p>
          </div>
          <div className="border-t border-black/20">
            <p className="text-[5rem] font-inter">6</p>
            <p className="text-black/70 font-inter">Links in the chain, from farmers to market.</p>
          </div>
        </div>
        <div className="grid grid-cols-[35%_65%] gap-10 py-18">
          <div>
            <Image src={photo1} alt="photo of tractor" className="h-60 object-cover rounded-3xl" />
          </div>
          <div>
            <p className="font-inter text-[3rem] leading-12">A digital agribusiness ecosystem for a <span className="italic font-instrument-serif font-medium">prosperous Africa</span></p>
            <p className="font-geist my-6">We combine agriculture, digital technology, AI, agricultural data, finance, commerce, logistics and market access into one platform, to make agriculture more productive, transparent, accessible and profitable.</p>
            <div className="flex border border-black rounded-full py-2.5 px-5 w-fit ">
              <p>About the company</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[40%_30%_30%] gap-5 py-16">
          <div className="relative flex rounded-3xl overflow-hidden h-[85vh] w-full row-span-2 flex-col justify-end">
            <Image src={photo4} alt="" fill className="object-cover" priority />
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
        <section className="w-full py-18 font-sans text-[#1a1a1a]">
          {/* Header Section */}
          <div className="relative mb-8 flex flex-col md:flex-row md:items-start justify-between">
            {/* Left Label */}
            <div className="flex items-center gap-2 mt-4 md:mt-8 md:w-1/4">
              <div className="h-2 w-2 rounded-full bg-[#4a7c59]"></div>
              <span className="text-sm font-medium">What we trade</span>
            </div>
            {/* Title */}
            <h2 className="md:w-3/4 text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-normal tracking-tight mt-6 md:mt-0">
              Nigerian commodities, <span className="italic font-instrument-serif">quoted on</span>
              <br />
              <span className="italic font-instrument-serif">WhatsApp.</span>
            </h2>
          </div>
          {/* Grid of Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Card 1: Maize */}
            <div className="relative flex flex-col justify-between h-[480px] rounded-3xl overflow-hidden group cursor-pointer">
              <Image src={maize} alt="Maize" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40 z-0"></div>
              <div className="relative z-10 p-6">
                <span className="inline-block px-4 py-1.5 text-xs font-medium text-white/90 bg-white/20 backdrop-blur-md rounded-full border border-white/10">
                  Grain
                </span>
              </div>
              <div className="relative z-10 p-6 pt-0">
                <h3 className="text-white text-3xl md:text-[2rem] font-medium mb-4 tracking-tight">
                  Maize
                </h3>
                <div className="flex items-center justify-between border-t border-white/20 pt-4 transition-opacity group-hover:opacity-80">
                  <span className="text-white text-sm font-medium">Request a quote</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </div>
            {/* Card 2: Rice */}
            <div className="relative flex flex-col justify-between h-[480px] rounded-3xl overflow-hidden group cursor-pointer">
              <Image src={rice} alt="Rice" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40 z-0"></div>
              <div className="relative z-10 p-6">
                <span className="inline-block px-4 py-1.5 text-xs font-medium text-white/90 bg-white/20 backdrop-blur-md rounded-full border border-white/10">
                  Grain
                </span>
              </div>
              <div className="relative z-10 p-6 pt-0">
                <h3 className="text-white text-3xl md:text-[2rem] font-medium mb-4 tracking-tight">
                  Rice
                </h3>
                <div className="flex items-center justify-between border-t border-white/20 pt-4 transition-opacity group-hover:opacity-80">
                  <span className="text-white text-sm font-medium">Request a quote</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </div>
            {/* Card 3: Soybeans */}
            <div className="relative flex flex-col justify-between h-[480px] rounded-3xl overflow-hidden group cursor-pointer">
              <Image src={soybeans} alt="Soybeans" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40 z-0"></div>
              <div className="relative z-10 p-6">
                <span className="inline-block px-4 py-1.5 text-xs font-medium text-white/90 bg-white/20 backdrop-blur-md rounded-full border border-white/10">
                  Oilseed
                </span>
              </div>
              <div className="relative z-10 p-6 pt-0">
                <h3 className="text-white text-3xl md:text-[2rem] font-medium mb-4 tracking-tight">
                  Soybeans
                </h3>
                <div className="flex items-center justify-between border-t border-white/20 pt-4 transition-opacity group-hover:opacity-80">
                  <span className="text-white text-sm font-medium">Request a quote</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </div>
            {/* Card 4: Cocoa beans */}
            <div className="relative flex cursor-pointer flex-col justify-between h-[480px] rounded-3xl overflow-hidden group cursor-pointer">
              <Image src={cocoabeans} alt="Cocoa beans" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40 z-0"></div>
              <div className="relative z-10 p-6">
                <span className="inline-block px-4 py-1.5 text-xs font-medium text-white/90 bg-white/20 backdrop-blur-md rounded-full border border-white/10">
                  Cash crop
                </span>
              </div>
              <div className="relative z-10 p-6 pt-0">
                <h3 className="text-white text-3xl md:text-[2rem] font-medium mb-4 tracking-tight">
                  Cocoa beans
                </h3>
                <div className="flex items-center justify-between border-t border-white/20 pt-4 transition-opacity group-hover:opacity-80">
                  <span className="text-white text-sm font-medium">Request a quote</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Note */}
          <div className="text-sm text-gray-600 font-medium">
            Don't see your commodity?{' '}
            <a href="#" className="text-black cursor-pointer underline decoration-1 underline-offset-4 hover:text-gray-900 hover:underline-offset-8 transition-all">
              Tell us what you need
            </a>{' '}
            and we'll source it.
          </div>
        </section>
      </div>
      <section className="w-full py-12">
        <div className="bg-[#103d27] rounded-[2rem] p-8 md:p-16 text-white font-sans">
          <div className="mb-16 max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-2 w-2 rounded-full bg-[#d3f37a]"></div>
              <span className="text-sm font-medium text-gray-300">How it works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-inter lg:text-[3.5rem] leading-[1.1] font-normal tracking-tight">
              From browsing to a quote, <span className="italic font-instrument-serif text-[#f4f4f4]">in</span>
              <br />
              <span className="italic font-instrument-serif text-[#f4f4f4]">three steps.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col">
              <div className="border-t border-white/20 pt-6 mb-6">
                <span className="text-5xl md:text-6xl font-light text-[#d3f37a]">1</span>
              </div>
              <h3 className="text-xl md:text-2xl font-medium mb-3">Browse the marketplace</h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Filter by commodity, location and price.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="border-t border-white/20 pt-6 mb-6">
                <span className="text-5xl md:text-6xl font-light text-[#d3f37a]">2</span>
              </div>
              <h3 className="text-xl md:text-2xl font-medium mb-3">Request a quote</h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Tell us the quantity, destination and date you need it by.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="border-t border-white/20 pt-6 mb-6">
                <span className="text-5xl md:text-6xl font-light text-[#d3f37a]">3</span>
              </div>
              <h3 className="text-xl md:text-2xl font-medium mb-3">We reach you on WhatsApp</h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Our team contacts you directly to confirm the details.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-24 font-sans text-[#1a1a1a] max-w-6xl mx-auto">
        <div className="flex items-center justify-between max-lg:flex-col max-lg:items-start max-lg:gap-8">
          <div className="flex items-center gap-2 w-1/4 max-lg:w-full max-lg:mb-4">
            <div className="h-2 w-2 rounded-full bg-[#4a7c59]"></div>
            <span className="text-sm font-medium">Who we serve</span>
          </div>
          <div className="w-3/4 max-lg:w-full flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-medium tracking-tight mb-8 text-left">
              Built for everyone <span className="italic font-instrument-serif font-medium">along the chain.</span>
            </h2>
            <div className="flex flex-wrap justify-start gap-3 md:gap-2 w-full max-w-4xl">
              <span className="px-5 py-2 rounded-full border border-gray-300 text-sm md:text-base font-medium hover:border-black transition-colors cursor-pointer">Smallholder farmers</span>
              <span className="px-5 py-2 rounded-full border border-gray-300 text-sm md:text-base font-medium hover:border-black transition-colors cursor-pointer">Commercial farmers</span>
              <span className="px-5 py-2 rounded-full border border-gray-300 text-sm md:text-base font-medium hover:border-black transition-colors cursor-pointer">Cooperatives</span>
              <span className="px-5 py-2 rounded-full border border-gray-300 text-sm md:text-base font-medium hover:border-black transition-colors cursor-pointer">Processors</span>
              <span className="px-5 py-2 rounded-full border border-gray-300 text-sm md:text-base font-medium hover:border-black transition-colors cursor-pointer">Commodity traders</span>
              <span className="px-5 py-2 rounded-full border border-gray-300 text-sm md:text-base font-medium hover:border-black transition-colors cursor-pointer">Food companies</span>
              <span className="px-5 py-2 rounded-full border border-gray-300 text-sm md:text-base font-medium hover:border-black transition-colors cursor-pointer">Exporters</span>
              <span className="px-5 py-2 rounded-full border border-gray-300 text-sm md:text-base font-medium hover:border-black transition-colors cursor-pointer">Institutional buyers</span>
              <span className="px-5 py-2 rounded-full border border-gray-300 text-sm md:text-base font-medium hover:border-black transition-colors cursor-pointer">Warehouses</span>
              <span className="px-5 py-2 rounded-full border border-gray-300 text-sm md:text-base font-medium hover:border-black transition-colors cursor-pointer">Logistics companies</span>
              <span className="px-5 py-2 rounded-full border border-gray-300 text-sm md:text-base font-medium hover:border-black transition-colors cursor-pointer">Financial institutions</span>
              <span className="px-5 py-2 rounded-full border border-gray-300 text-sm md:text-base font-medium hover:border-black transition-colors cursor-pointer">Investors</span>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden min-h-[75vh] rounded-3xl flex flex-col justify-between">
        <Image src={photo3} alt="Agriculture farm background" fill priority className="object-cover object-center " />
        <div className="relative z-10 max-w-3xl mx-auto self-center my-auto">
          <p className="text-[5rem] text-white leading-19 my-8 tracking-tight text-center">Talk to us about the <br /> commodity <span className="font-instrument-serif font-medium italic">you need</span></p>
          <div className="flex gap-4 justify-self-center">
            <div className="bg-mint py-3 px-6 rounded-4xl flex items-center justify-center cursor-pointer w-fit">
              <p>Request a quote</p>
            </div>
            <div className="py-3 border border-white/30 rounded-4xl px-6 text-white font-medium w-fit cursor-pointer">
              <p>Chat on WhatsApp</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
