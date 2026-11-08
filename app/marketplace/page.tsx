
"use client";

import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { collection, onSnapshot } from "firebase/firestore";
import Image from "next/image";
import photo3 from "@/assets/Box-selection.png"
import { db } from "@/firebase/firebase";

type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  grade: string;
  pricePerTon: number;
  origin?: string;
  available?: string | number;
  createdAt?: any;
};

const categories = ["All", "Grain", "Oilseed", "Cash crop", "Tubers"];

const WHATSAPP_NUMBER = "2348109992384";

export default function MarketplacePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [location, setLocation] = useState("All locations");
  const [sortOrder, setSortOrder] = useState("low-high");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "products"),
      (snapshot) => {
        const productData = snapshot.docs.map((document) => ({
          id: document.id,
          ...document.data(),
        })) as Product[];

        setProducts(productData);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching marketplace products:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const locations = useMemo(() => {
    return [
      "All locations",
      ...Array.from(
        new Set(products.map((product) => product.origin).filter(Boolean) as string[])
      ),
    ];
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search.trim()) {
      const searchTerm = search.toLowerCase();

      result = result.filter((product) =>
        `${product.name} ${product.category} ${product.description} ${product.grade}`
          .toLowerCase()
          .includes(searchTerm)
      );
    }

    if (activeCategory !== "All") {
      result = result.filter(
        (product) => product.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    if (location !== "All locations") {
      result = result.filter((product) => product.origin === location);
    }

    result.sort((a, b) => {
      if (sortOrder === "low-high") return a.pricePerTon - b.pricePerTon;
      if (sortOrder === "high-low") return b.pricePerTon - a.pricePerTon;
      return 0;
    });

    return result;
  }, [products, search, activeCategory, location, sortOrder]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(price || 0);
  };

  const getWhatsAppLink = (product: Product) => {
    const message = `Hello, I'm interested in ${product.name}. Please provide more information about its availability and pricing.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <main className="min-h-screen bg-[#F6F6F2] font-sans text-[#0B2F24]">

      {/* PAGE CONTAINER */}
      <div className="max-w-[1600px] mx-auto bg-[#F6F6F2] rounded-[28px] border border-black/5 p-2 md:p-2.5 overflow-hidden">

        {/* NAVBAR + HERO */}
        <section className="relative min-h-[380px] max-sm:min-h-[340px] rounded-[20px] overflow-hidden bg-gradient-to-b from-[#B5B98A] via-[#385B38] to-[#061C13] text-white">

          <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(173deg, transparent 0px, transparent 19px, rgba(255,255,255,0.55) 20px, transparent 21px)" }} />

          <Navbar />

          <div className="relative z-10 px-8 md:px-10 max-sm:px-5 pt-24 md:pt-28 max-sm:pt-20 pb-10 flex items-end justify-between gap-8 max-sm:flex-col max-sm:items-start">

            <h1 className="text-[64px] md:text-[72px] max-md:text-5xl max-sm:text-[42px] leading-[0.98] font-light tracking-tight">
              Browse available
              <span className="block font-instrument-serif italic mt-1">commodities.</span>
            </h1>

            <p className="text-sm max-sm:text-xs text-white/85 max-w-[260px] leading-relaxed mb-2">
              See what's in stock and request a quote on anything you like.
            </p>
          </div>
        </section>

        {/* MARKETPLACE CONTENT */}

        <section className="px-10 md:px-12 max-sm:px-3 pt-10 pb-12 font-inter">

          {/* SEARCH AND FILTERS */}
          <div className="flex items-center gap-2 max-md:flex-col max-md:items-stretch">

            <input type="text" placeholder="Search commodities" value={search} onChange={(e) => { setSearch(e.target.value); setVisibleCount(6); }} className="flex-1 w-full bg-white border border-[#D9DDD5] rounded-full px-5 py-3 text-base font-inter outline-none focus:border-[#0B2F24] transition-colors placeholder:font-inter placeholder:text-base" />

            <select value={location} onChange={(e) => setLocation(e.target.value)} className="w-[170px] max-md:w-full bg-white border border-[#D9DDD5] rounded-full px-4 py-3 text-base font-inter outline-none cursor-pointer">
              {locations.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>

            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="w-[170px] max-md:w-full bg-white border border-[#D9DDD5] rounded-full px-4 py-3 text-base font-inter outline-none cursor-pointer">
              <option value="low-high">Price: low to high</option>
              <option value="high-low">Price: high to low</option>
            </select>
          </div>

          {/* CATEGORY FILTERS */}
          <div className="flex items-center gap-2 mt-3 flex-wrap">
            {categories.map((category) => (
              <button key={category} onClick={() => { setActiveCategory(category); setVisibleCount(6); }} className={`px-4 py-2 rounded-full text-base font-inter border transition-colors ${activeCategory === category ? "bg-[#0B2F24] text-white border-[#0B2F24]" : "bg-transparent text-[#0B2F24] border-[#D9DDD5] hover:bg-white"}`}>
                {category}
              </button>
            ))}
          </div>

          <div className="mt-6 mb-4 flex items-center justify-between">
            <p className="text-base font-inter text-[#0B2F24]/65">
              {loading ? "Loading commodities..." : `${filteredProducts.length} products available`}
            </p>
          </div>

          {/* PRODUCT GRID */}
          {loading ? (
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="h-[320px] bg-white rounded-3xl animate-pulse" />
              ))}
            </div>
          ) : displayedProducts.length > 0 ? (
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-3">

              {displayedProducts.map((product) => (
                <div key={product.id} className="bg-white p-5 max-sm:p-4 rounded-3xl border border-black/5 flex flex-col min-h-[330px] font-inter">

                  {/* PRODUCT IMAGE PLACEHOLDER */}
                  <div className="h-28 rounded-2xl relative mb-4 overflow-hidden">
                    <Image src={photo3} alt={`${product.name} agricultural background`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-center" />

                    <div className="absolute inset-0 bg-black/20" />

                    <span className="absolute top-3 left-3 z-10 bg-white/85 text-[#0B2F24] text-base px-3 py-1.5 rounded-full font-inter">
                      {product.category}
                    </span>

                    <span className="absolute top-3 right-3 z-10 text-white text-base font-inter">
                      In stock
                    </span>
                  </div>

                  {/* PRODUCT DETAILS */}
                  <h3 className="text-base font-medium tracking-tight font-inter">
                    {product.name}
                  </h3>

                  <p className="text-base text-black/55 mt-1 mb-3 line-clamp-2 min-h-[32px] font-inter">
                    {product.description}
                  </p>

                  <div className="border-t border-black/10 text-base font-inter">

                    <div className="flex items-center justify-between py-2 border-b border-black/10">
                      <span className="text-black/50">Grade</span>
                      <span className="font-medium">{product.grade || "Not specified"}</span>
                    </div>

                    <div className="flex items-center justify-between py-2 border-b border-black/10">
                      <span className="text-black/50">Origin</span>
                      <span className="font-medium">{product.origin || "Not specified"}</span>
                    </div>

                    <div className="flex items-center justify-between py-2">
                      <span className="text-black/50">Available</span>
                      <span className="font-medium">{product.available ?? "Contact for availability"} {product.available != null && typeof product.available === "number" ? "tonnes" : ""}</span>
                    </div>
                  </div>

                  {/* PRICE */}
                  <div className="mt-auto pt-4">
                    <p className="text-base font-medium mb-4 font-inter">
                      {formatPrice(product.pricePerTon)}
                      <span className="font-normal text-black/50 font-inter"> / tonne</span>
                    </p>

                    <div className="flex gap-2">
                      <Link href="/login" className="flex-1 text-center bg-[#0B2F24] text-white py-3 rounded-full text-base font-inter font-medium hover:bg-[#164535] transition-colors">
                        Request a quote
                      </Link>

                      <a href={getWhatsAppLink(product)} target="_blank" rel="noopener noreferrer" className="px-4 py-3 rounded-full border border-[#0B2F24] text-[#0B2F24] text-base font-inter font-medium hover:bg-[#0B2F24] hover:text-white transition-colors">
                        WhatsApp
                      </a>
                    </div>
                  </div>

                </div>
              ))}

            </div>
          ) : (
            <div className="bg-white rounded-3xl py-20 px-5 text-center font-inter">
              <h3 className="text-base font-medium mb-2">No commodities found</h3>
              <p className="text-base text-black/50">Try another search or category.</p>
              <button onClick={() => { setSearch(""); setActiveCategory("All"); setLocation("All locations"); }} className="mt-5 text-base font-inter font-medium underline underline-offset-4">
                Clear filters
              </button>
            </div>
          )}

          {/* LOAD MORE */}
          {!loading && visibleCount < filteredProducts.length && (
            <div className="flex justify-center mt-8">
              <button onClick={() => setVisibleCount((prev) => prev + 6)} className="px-7 py-3 rounded-full border border-[#0B2F24]/40 text-base font-inter font-medium hover:bg-[#0B2F24] hover:text-white transition-colors">
                Load more
              </button>
            </div>
          )}

        </section>

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
    </main>
  );
}
