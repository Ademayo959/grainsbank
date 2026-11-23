"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import photo3 from "@/assets/Box-selection.png"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Gallery() {

  const galleryImages = [
    { id: "433755", src: require("@/assets/galleryPics/433755.jpg").default },
    { id: "433758", src: require("@/assets/galleryPics/433758.jpg").default },
    { id: "433761", src: require("@/assets/galleryPics/433761.jpg").default },
    { id: "433764", src: require("@/assets/galleryPics/433764.jpg").default },
    { id: "433767", src: require("@/assets/galleryPics/433767.jpg").default },
    { id: "433770", src: require("@/assets/galleryPics/433770.jpg").default },
    { id: "433773", src: require("@/assets/galleryPics/433773.jpg").default },
    { id: "433776", src: require("@/assets/galleryPics/433776.jpg").default },
    { id: "433779", src: require("@/assets/galleryPics/433779.jpg").default },
    { id: "433782", src: require("@/assets/galleryPics/433782.jpg").default },
    { id: "433785", src: require("@/assets/galleryPics/433785.jpg").default },
    { id: "433788", src: require("@/assets/galleryPics/433788.jpg").default },
    { id: "433791", src: require("@/assets/galleryPics/433791.jpg").default },
    { id: "433794", src: require("@/assets/galleryPics/433794.jpg").default },
    { id: "433797", src: require("@/assets/galleryPics/433797.jpg").default },
    { id: "433800", src: require("@/assets/galleryPics/433800.jpg").default },
    { id: "433803", src: require("@/assets/galleryPics/433803.jpg").default },
    { id: "433806", src: require("@/assets/galleryPics/433806.jpg").default },
    { id: "433812", src: require("@/assets/galleryPics/433812.jpg").default },
    { id: "433815", src: require("@/assets/galleryPics/433815.jpg").default },
    { id: "433836", src: require("@/assets/galleryPics/433835.jpg").default },
    { id: "433845", src: require("@/assets/galleryPics/433844.jpg").default },
    { id: "433848", src: require("@/assets/galleryPics/433847.jpg").default },
    { id: "433857", src: require("@/assets/galleryPics/433859.jpg").default },
    { id: "433860", src: require("@/assets/galleryPics/433925.jpg").default },
    { id: "433863", src: require("@/assets/galleryPics/433928.jpg").default },
    { id: "436766", src: require("@/assets/galleryPics/436766.jpg").default },
    { id: "436767", src: require("@/assets/galleryPics/436767.jpg").default },
    { id: "436768", src: require("@/assets/galleryPics/436768.jpg").default },
    { id: "436769", src: require("@/assets/galleryPics/436769.jpg").default },
    { id: "436770", src: require("@/assets/galleryPics/436770.jpg").default },
    { id: "436771", src: require("@/assets/galleryPics/436771.jpg").default },
    { id: "436772", src: require("@/assets/galleryPics/436772.jpg").default },
    { id: "436773", src: require("@/assets/galleryPics/436773.jpg").default },
    { id: "436774", src: require("@/assets/galleryPics/436774.jpg").default },
    { id: "436775", src: require("@/assets/galleryPics/436775.jpg").default },
    { id: "436776", src: require("@/assets/galleryPics/436776.jpg").default },
    { id: "436777", src: require("@/assets/galleryPics/436777.jpg").default },
    { id: "436778", src: require("@/assets/galleryPics/436778.jpg").default },
    { id: "436779", src: require("@/assets/galleryPics/436780.jpg").default },
    { id: "436781", src: require("@/assets/galleryPics/436781.jpg").default },
    { id: "436782", src: require("@/assets/galleryPics/436782.jpg").default },
    { id: "436783", src: require("@/assets/galleryPics/436783.jpg").default },
    { id: "436787", src: require("@/assets/galleryPics/436787.jpg").default },
    { id: "436788", src: require("@/assets/galleryPics/436788.jpg").default },
    { id: "436789", src: require("@/assets/galleryPics/436789.jpg").default },
    { id: "436790", src: require("@/assets/galleryPics/436790.jpg").default },
    { id: "436791", src: require("@/assets/galleryPics/436791.jpg").default },
    { id: "436792", src: require("@/assets/galleryPics/436792.jpg").default },
    { id: "436793", src: require("@/assets/galleryPics/436793.jpg").default },
    { id: "436794", src: require("@/assets/galleryPics/436794.jpg").default },
    { id: "436795", src: require("@/assets/galleryPics/436795.jpg").default },
    { id: "436796", src: require("@/assets/galleryPics/436796.jpg").default },
    { id: "436797", src: require("@/assets/galleryPics/436797.jpg").default },
    { id: "436798", src: require("@/assets/galleryPics/436798.jpg").default },
    { id: "436799", src: require("@/assets/galleryPics/436799.jpg").default },
    { id: "436840", src: require("@/assets/galleryPics/436840.jpg").default },
    { id: "436841", src: require("@/assets/galleryPics/436841.jpg").default },
    { id: "436842", src: require("@/assets/galleryPics/436842.jpg").default },
    { id: "436843", src: require("@/assets/galleryPics/436843.jpg").default },
    { id: "436844", src: require("@/assets/galleryPics/436844.jpg").default },
    { id: "436845", src: require("@/assets/galleryPics/436845.jpg").default },
    { id: "436846", src: require("@/assets/galleryPics/436846.jpg").default },
    { id: "436847", src: require("@/assets/galleryPics/436847.jpg").default },
    { id: "436852", src: require("@/assets/galleryPics/436852.jpg").default },
    { id: "436858", src: require("@/assets/galleryPics/436858.jpg").default },
    { id: "436859", src: require("@/assets/galleryPics/436859.jpg").default },
    { id: "436860", src: require("@/assets/galleryPics/436860.jpg").default }
  ];

  return (
    <div className="p-2 bg-[#F6F6F2]">
      <div className="relative overflow-hidden min-h-[65vh] max-md:min-h-[50vh] rounded-3xl flex flex-col justify-between mb-12">
        <Image src={photo3} alt="Agriculture farm background" fill priority className="object-cover object-center " />
        <Navbar />
        <div className="relative z-10 px-6 pb-10 md:px-[60px] md:pb-[40px] flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 w-full">
          <div className="flex items-end justify-between w-full">
            <p className="font-inter text-[6rem] max-md:text-[3.5rem] text-white leading-20 max-sm:leading-14">From the field, <br /> <span className="font-instrument-serif italic font-medium">in pictures.</span></p>
            <p className="text-[1.1rem] max-md:text-[1rem] text-white">A look at the farm, produce and people <br className="max-md:hidden" />behind Grainsbank.</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 py-12">
        <div className="columns-4 max-md:columns-2 max-sm:columns-1 gap-4 space-y-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="break-inside-avoid relative rounded-2xl overflow-hidden group"
            >
              <Image
                src={image.src}
                alt={`Gallery image ${image.id}`}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

       <section className="relative overflow-hidden min-h-[75vh] max-sm:min-h-[55vh] rounded-3xl max-sm:rounded-2xl flex flex-col justify-between px-6 py-10 md:px-10">
          <Image src={photo3} alt="Agriculture farm background" fill priority sizes="100vw" className="object-cover object-center" />

          <div className="absolute inset-0 bg-black/15" />

          <div className="relative z-10 max-w-3xl w-full mx-auto self-center my-auto">
            <p className="text-[5rem] max-lg:text-6xl max-md:text-5xl max-sm:text-4xl text-white leading-[1.05] max-sm:leading-tight my-8 max-sm:my-5 tracking-tight text-center">
              Let's move your next
              <br />
              <span className="font-instrument-serif font-medium italic">shipment.</span>
            </p>

            <div className="flex gap-4 max-sm:flex-col max-sm:items-center justify-center">
              <Link href="/dashboard" className="bg-mint py-3 px-6 max-sm:w-full max-sm:max-w-[220px] rounded-4xl flex items-center justify-center cursor-pointer w-fit text-sm md:text-base">
                <p>Request a quote</p>
              </Link>

              <Link href="/contact" className="py-3 border border-white/30 rounded-4xl px-6 max-sm:w-full max-sm:max-w-[220px] text-white font-medium w-fit cursor-pointer flex items-center justify-center text-sm md:text-base">
                <p>Chat on Whatsapp</p>
              </Link>
            </div>
          </div>
        </section>

        <Footer />

    </div>
  )
};
