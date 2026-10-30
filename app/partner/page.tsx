import Image from "next/image"
import Link from "next/link"
import photo3 from "@/assets/Box-selection.png"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function page() {
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
          <div className="bg-white rounded-2xl p-6">
            <p className="text-[2.3rem] max-md:text-[1.8rem] font-inter">Send us a <span className="font-instrument-serif italic font-medium">message</span></p>
            <div className="my-3">
              <p className="font-medium my-1">Organisation name</p>
              <input type="text" className="px-4 border border-black/40 bg-white rounded-xl h-12 w-full outline-0" placeholder="Your organisation" />
            </div>
            <div className="my-3">
              <p className="font-medium my-1">Contact person</p>
              <input type="text" className="px-4 border border-black/40 bg-white rounded-xl h-12 w-full outline-0" placeholder="Full name" />
            </div>
            <div className="my-3">
              <p className="font-medium my-1">Email</p>
              <input type="text" className="px-4 border border-black/40 bg-white rounded-xl h-12 w-full outline-0" placeholder="you@organisation.com" />
            </div>
            <div className="my-3">
              <p className="font-medium my-1">Phone or Whatsapp</p>
              <input type="text" className="px-4 border border-black/40 bg-white rounded-xl h-12 w-full outline-0" placeholder="+234" />
            </div>
            <div className="my-3">
              <p className="font-medium my-1">Type of Organisation</p>
              <input type="text" className="px-4 border border-black/40 bg-white rounded-xl h-12 w-full outline-0" placeholder="e.g. Maize, 20 tonnes" />
            </div>
            <div className="my-3">
              <p className="font-medium my-1">How would you like to work with us?</p>
              <textarea placeholder="Tell us a little about your idea" className="px-4 resize-none border border-black/40 bg-white rounded-xl h-52 py-3 outline-0 w-full"></textarea>
            </div>
            <div className="mt-3">
              <div className="bg-green-900 text-white rounded-full w-full h-12 flex justify-center items-center my-6">
                <p>Submit enquiry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};
