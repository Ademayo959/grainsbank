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
              A digital<br />agribusiness <br />ecosystem for a <span className="font-instrument-serif italic tracking-normal">prosperous Africa.</span>
            </h1>
          </div>
          <div className="max-w-[320px] flex flex-col gap-6 pb-2">
            <p className="text-[0.89rem] leading-5 text-white font-normal">
              Grainsbank agriculture rom farm to market, on one technology-driven platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/dashboard" className="bg-mint text-black text-sm font-medium px-6 py-3 rounded-full text-center hover:bg-mint/90 transition-colors">
                Explore marketplace
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div>
          <p className="font-inter text-[3.5rem] font-light leading-14 tracking-tighter max-w-[85%]">Grainsbank Digital Agribusiness Limited is <span className="font-instrument-serif italic font-medium">building the bridge</span> between the farm and the market.</p>
          <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:gap-6 gap-10 mt-24 mb-12 max-sm:px-4 max-sm:my-8">
            <div className="border-t border-black/20">
              <p className="text-[1.8rem] font-inter mt-4">Who we are</p>
              <p className="text-black/70 font-inter">A technology-driven agribusiness connecting farmers, input suppliers, financial institutions, mechanization providers, traders, processors, logistics providers, warehouses and consumers.</p>
            </div>
            <div className="border-t border-black/20">
              <p className="text-[1.8rem] font-inter mt-4">What we combine</p>
              <p className="text-black/70 font-inter">Agriculture, digital technology, AI, agricultural data, finance, commerce, logistics, mechanization, processing and market access in one connected platform.</p>
            </div>
            <div className="border-t border-black/20">
              <p className="text-[1.8rem] font-inter mt-4">What we want</p>
              <p className="text-black/70 font-inter">To make agriculture more productive, transparent, accessible, profitable and technology-enabled.</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6 mb-24 max-md:gap-4 max-sm:mb-16">
          <div className="grid grid-cols-[1fr_1fr] max-md:grid-cols-1 gap-6">

            {/* Vision Card */}
            <div className="bg-[#7a8d62] text-white rounded-3xl p-10 max-sm:p-6 flex flex-col justify-between min-h-[350px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
              <div className="relative z-10 border border-white/30 rounded-full px-4 py-1 w-fit mb-8">
                <p className="text-sm font-medium">Our vision</p>
              </div>
              <p className="relative z-10 text-[2rem] max-md:text-[1.8rem] max-sm:text-[1.5rem] leading-tight font-light tracking-tight">
                To become Africa's leading digital agribusiness ecosystem, transforming how resources, technology, finance, production and markets are <span className="italic font-instrument-serif">connected.</span>
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-[#0f3a23] text-white rounded-3xl p-10 max-sm:p-6 flex flex-col justify-between min-h-[350px]">
              <div className="border border-white/30 rounded-full px-4 py-1 w-fit mb-8">
                <p className="text-sm font-medium text-[#d3f37a]">Our mission</p>
              </div>
              <p className="text-[2rem] max-md:text-[1.8rem] max-sm:text-[1.5rem] leading-tight font-light tracking-tight">
                To empower farmers and agricultural businesses through digital technology, intelligent data, access to finance, modern farming services, efficient supply chains and <span className="italic font-instrument-serif">reliable markets.</span>
              </p>
            </div>
          </div>

          {/* Core Objective Card */}
          <div className="bg-[#d3f37a] text-[#0f3a23] rounded-3xl p-8 max-sm:p-6 flex flex-row max-md:flex-col justify-between items-start md:items-center gap-6">
            <div className="border border-[#0f3a23]/20 rounded-full px-4 py-1 w-fit shrink-0">
              <p className="text-sm font-medium">Our core objective</p>
            </div>
            <p className="text-[1.3rem] max-md:text-[1.1rem] leading-snug font-normal max-w-4xl md:text-right md:pr-10">
              A connected agricultural economy where a farmer can access everything needed to produce, finance, monitor, process, store, transport and sell, through one integrated digital ecosystem.
            </p>
          </div>
        </div>
        <div className="w-full bg-white rounded-3xl p-10 max-sm:p-6 mb-24 max-sm:mb-16 shadow-sm border border-black/5">
          <div className="mb-12">
            <h3 className="text-xl font-medium tracking-[0.2em] mb-2 text-black/80">G.R.A.I.N.S.B.A.N.K</h3>
            <p className="text-black/60 text-sm">Our name, our purpose.</p>
          </div>
          <div className="grid grid-cols-6 max-md:grid-cols-5 max-sm:grid-cols-3 gap-y-10 gap-x-4">
            {/* Row 1 */}
            <div className="flex flex-col gap-2">
              <span className="text-[2.75rem] font-light border-b border-black/10 pb-2">G</span>
              <span className="text-sm text-black/80">Growth</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[2.75rem] font-light border-b border-black/10 pb-2">R</span>
              <span className="text-sm text-black/80">Resources</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[2.75rem] font-light border-b border-black/10 pb-2">A</span>
              <span className="text-sm text-black/80">Agriculture</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[2.75rem] font-light border-b border-black/10 pb-2">I</span>
              <span className="text-sm text-black/80">Innovation</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[2.75rem] font-light border-b border-black/10 pb-2">N</span>
              <span className="text-sm text-black/80">Network</span>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col gap-2">
              <span className="text-[2.75rem] font-light border-b border-black/10 pb-2">S</span>
              <span className="text-sm text-black/80">Supply</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[2.75rem] font-light border-b border-black/10 pb-2">B</span>
              <span className="text-sm text-black/80">Business</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[2.75rem] font-light border-b border-black/10 pb-2">A</span>
              <span className="text-sm text-black/80">Agro-processing</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[2.75rem] font-light border-b border-black/10 pb-2">N</span>
              <span className="text-sm text-black/80">Nutrition</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[2.75rem] font-light border-b border-black/10 pb-2">K</span>
              <span className="text-sm text-black/80">Knowledge</span>
            </div>
          </div>
        </div>
        <div className="w-full mb-24 max-sm:mb-16">
          <div className="mb-12">
            <h2 className="text-[3rem] max-md:text-[2.5rem] font-light leading-[1.1] tracking-tight mb-4">
              Twelve platforms, <span className="font-instrument-serif italic font-medium">one ecosystem.</span>
            </h2>
            <p className="text-black/60 text-sm max-w-2xl">
              We're starting with the commodity marketplace and building onwards. The rest of the ecosystem is planned and will be introduced step by step.
            </p>
          </div>

          <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">

            {/* Platform 01 */}
            <div className="bg-white rounded-2xl p-6 flex flex-col min-h-[220px] border border-black/5">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs text-black/40 font-medium">01</span>
                <span className="text-[10px] border border-black/20 rounded-full px-2 py-0.5 text-black/60">Planned</span>
              </div>
              <h4 className="text-xl font-medium mb-2">FarmerBank</h4>
              <p className="text-xs text-black/50 mb-4">Farmer network</p>
              <p className="text-sm text-black/70 mt-auto leading-relaxed">Farmer registration, profiles, farm records and cooperative management.</p>
            </div>

            {/* Platform 02 */}
            <div className="bg-white rounded-2xl p-6 flex flex-col min-h-[220px] border border-black/5">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs text-black/40 font-medium">02</span>
                <span className="text-[10px] border border-black/20 rounded-full px-2 py-0.5 text-black/60">Planned</span>
              </div>
              <h4 className="text-xl font-medium mb-2">FarmBank</h4>
              <p className="text-xs text-black/50 mb-4">Digital farm records</p>
              <p className="text-sm text-black/70 mt-auto leading-relaxed">Farm mapping, GIS boundaries, soil information and satellite monitoring.</p>
            </div>

            {/* Platform 03 */}
            <div className="bg-white rounded-2xl p-6 flex flex-col min-h-[220px] border border-black/5">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs text-black/40 font-medium">03</span>
                <span className="text-[10px] border border-black/20 rounded-full px-2 py-0.5 text-black/60">Planned</span>
              </div>
              <h4 className="text-xl font-medium mb-2">InputBank</h4>
              <p className="text-xs text-black/50 mb-4">Input marketplace</p>
              <p className="text-sm text-black/70 mt-auto leading-relaxed">Seeds, fertilisers, agrochemicals, feeds, tools and machinery from verified suppliers.</p>
            </div>

            {/* Platform 04 */}
            <div className="bg-white rounded-2xl p-6 flex flex-col min-h-[220px] border border-black/5">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs text-black/40 font-medium">04</span>
                <span className="text-[10px] border border-black/20 rounded-full px-2 py-0.5 text-black/60">Planned</span>
              </div>
              <h4 className="text-xl font-medium mb-2">MachineBank</h4>
              <p className="text-xs text-black/50 mb-4">Mechanisation network</p>
              <p className="text-sm text-black/70 mt-auto leading-relaxed">Tractor services, ploughing, planting, spraying, harvesting and equipment rental.</p>
            </div>

            {/* Platform 05 */}
            <div className="bg-white rounded-2xl p-6 flex flex-col min-h-[220px] border border-black/5">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs text-black/40 font-medium">05</span>
                <span className="text-[10px] border border-black/20 rounded-full px-2 py-0.5 text-black/60">Planned</span>
              </div>
              <h4 className="text-xl font-medium mb-2">AgriIntel</h4>
              <p className="text-xs text-black/50 mb-4">AI and data</p>
              <p className="text-sm text-black/70 mt-auto leading-relaxed">Crop monitoring, pest and disease identification, yield prediction and decision support.</p>
            </div>

            {/* Platform 06 */}
            <div className="bg-white rounded-2xl p-6 flex flex-col min-h-[220px] border border-black/5">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs text-black/40 font-medium">06</span>
                <span className="text-[10px] border border-black/20 rounded-full px-2 py-0.5 text-black/60">Planned</span>
              </div>
              <h4 className="text-xl font-medium mb-2">ClimateBank</h4>
              <p className="text-xs text-black/50 mb-4">Weather and climate</p>
              <p className="text-sm text-black/70 mt-auto leading-relaxed">Forecasts, rainfall, drought and flood alerts and planting recommendations.</p>
            </div>

            {/* Platform 07 */}
            <div className="bg-white rounded-2xl p-6 flex flex-col min-h-[220px] border border-black/5">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs text-black/40 font-medium">07</span>
                <span className="text-[10px] border border-black/20 rounded-full px-2 py-0.5 text-black/60">Planned</span>
              </div>
              <h4 className="text-xl font-medium mb-2">AgriFinance</h4>
              <p className="text-xs text-black/50 mb-4">Finance network</p>
              <p className="text-sm text-black/70 mt-auto leading-relaxed">Connections to loans, input and equipment financing, insurance and farm investment.</p>
            </div>

            {/* Platform 08 (Active) */}
            <div className="bg-[#0f3a23] text-white rounded-2xl p-6 flex flex-col min-h-[220px] shadow-lg">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs text-white/50 font-medium">08</span>
                <span className="text-[10px] bg-[#d3f37a] text-[#0f3a23] font-bold rounded-full px-2 py-0.5">Starting here</span>
              </div>
              <h4 className="text-xl font-medium mb-2">CommodityBank</h4>
              <p className="text-xs text-[#d3f37a] mb-4">Marketplace</p>
              <p className="text-sm text-white/80 mt-auto leading-relaxed">Maize, rice, soybeans, cassava, yam, sorghum, sesame, cocoa and more, linking producers to buyers.</p>
            </div>

            {/* Platform 09 */}
            <div className="bg-white rounded-2xl p-6 flex flex-col min-h-[220px] border border-black/5">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs text-black/40 font-medium">09</span>
                <span className="text-[10px] border border-black/20 rounded-full px-2 py-0.5 text-black/60">Planned</span>
              </div>
              <h4 className="text-xl font-medium mb-2">ProcessBank</h4>
              <p className="text-xs text-black/50 mb-4">Processing network</p>
              <p className="text-sm text-black/70 mt-auto leading-relaxed">Grain processing, rice milling, oil and feed production, packaging and value addition.</p>
            </div>

            {/* Platform 10 */}
            <div className="bg-white rounded-2xl p-6 flex flex-col min-h-[220px] border border-black/5">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs text-black/40 font-medium">10</span>
                <span className="text-[10px] border border-black/20 rounded-full px-2 py-0.5 text-black/60">Planned</span>
              </div>
              <h4 className="text-xl font-medium mb-2">StoreBank</h4>
              <p className="text-xs text-black/50 mb-4">Storage network</p>
              <p className="text-sm text-black/70 mt-auto leading-relaxed">Warehouses, silos, cold storage and digital inventory records.</p>
            </div>

            {/* Platform 11 */}
            <div className="bg-white rounded-2xl p-6 flex flex-col min-h-[220px] border border-black/5">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs text-black/40 font-medium">11</span>
                <span className="text-[10px] border border-black/20 rounded-full px-2 py-0.5 text-black/60">Planned</span>
              </div>
              <h4 className="text-xl font-medium mb-2">LogisticsBank</h4>
              <p className="text-xs text-black/50 mb-4">Logistics network</p>
              <p className="text-sm text-black/70 mt-auto leading-relaxed">Truck booking, delivery management, route management and shipment tracking.</p>
            </div>

            {/* Platform 12 */}
            <div className="bg-white rounded-2xl p-6 flex flex-col min-h-[220px] border border-black/5">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs text-black/40 font-medium">12</span>
                <span className="text-[10px] border border-black/20 rounded-full px-2 py-0.5 text-black/60">Planned</span>
              </div>
              <h4 className="text-xl font-medium mb-2">KnowledgeBank</h4>
              <p className="text-xs text-black/50 mb-4">Knowledge platform</p>
              <p className="text-sm text-black/70 mt-auto leading-relaxed">Farmer education, agronomy, training, agent network and market education.</p>
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
