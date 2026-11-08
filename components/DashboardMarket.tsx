
"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";

type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  grade: string;
  pricePerTon: number;
  createdAt?: any;
};

export default function DashboardMarket() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // FETCH PRODUCTS FROM FIRESTORE
  useEffect(() => {
    const productsRef = collection(db, "products");

    const unsubscribe = onSnapshot(
      productsRef,
      (snapshot) => {
        const fetchedProducts = snapshot.docs.map((document) => ({
          id: document.id,
          ...document.data(),
        })) as Product[];

        setProducts(fetchedProducts);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching products:", error);
        setError("Unable to load products. Please try again.");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // FILTER PRODUCTS
  const filteredProducts = products.filter((product) => {
    const searchTerm = search.toLowerCase();

    const matchesSearch =
      product.name?.toLowerCase().includes(searchTerm) ||
      product.category?.toLowerCase().includes(searchTerm) ||
      product.description?.toLowerCase().includes(searchTerm);

    const matchesCategory =
      activeCategory === "All" ||
      product.category?.toLowerCase() === activeCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  // FORMAT PRICE
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const categories = ["All", "Grain", "Oilseed", "Cash crop"];

  return (
    <div className="max-w-5xl">

      {/* HEADER */}
      <h1 className="text-4xl font-medium mb-2">Products</h1>

      <p className="text-black/60 mb-8">
        Browse what's available and order in a tap.
      </p>

      {/* SEARCH AND FILTERS */}
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">

        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 rounded-full text-sm ${activeCategory === category
                  ? "bg-[#0B2F24] text-white"
                  : "bg-white border border-black/10 hover:bg-gray-50"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search commodities"
          className="px-6 py-2 bg-white border border-black/10 rounded-full text-sm w-64 focus:outline-none focus:border-[#0B2F24]"
        />
      </div>

      {/* LOADING */}
      {loading && (
        <div className="py-16 text-center text-black/50">
          Loading products...
        </div>
      )}

      {/* ERROR */}
      {!loading && error && (
        <div className="py-16 text-center text-red-600">
          {error}
        </div>
      )}

      {/* PRODUCT GRID */}
      {!loading && !error && (
        <>
          {filteredProducts.length === 0 ? (
            <div className="py-16 text-center">
              <h3 className="text-lg font-medium mb-2">
                No products found
              </h3>
              <p className="text-sm text-black/50">
                Try another search or category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white p-4 rounded-3xl shadow-sm border border-black/5 flex flex-col">
                  {/* PRODUCT IMAGE PLACEHOLDER */}
                  <div className="h-40 rounded-2xl bg-gradient-to-b from-[#8B9C73] to-[#1A2F1C] relative mb-4">
                    <span className="absolute top-3 left-3 bg-white/20 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  {/* PRODUCT DETAILS */}
                  <h3 className="text-xl font-medium">
                    {product.name}
                  </h3>
                  <p className="text-xs text-black/50 mb-4">
                    {product.grade} · per tonne
                  </p>
                  <p className="text-sm text-black/60 mb-4">{product.description}</p>
                  {/* PRICE & WHATSAPP BUTTON */}
                  <div className="mt-auto">
                    <p className="font-semibold text-sm mb-4">
                      {formatPrice(product.pricePerTon)}
                      <span className="font-normal text-black/50">
                        {" "} / tonne
                      </span>
                    </p>
                    <a
                      href={`https://wa.me/2348109992384?text=${encodeURIComponent(
                        `Hello, I'm interested in ${product.name}. Please provide more information about its availability and pricing.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-[#0B2F24] text-white py-3 rounded-xl text-sm font-medium hover:bg-[#164535] transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.09.55 4.13 1.6 5.93L.1 24l6.34-1.66a11.9 11.9 0 0 0 5.64 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.15-3.45-8.41ZM12.09 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.76.99 1-3.66-.23-.38a9.88 9.88 0 1 1 8.39 4.64Zm5.43-7.4c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.17.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.63-.93-2.23-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.15 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
                      </svg>
                      Contact on WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

    </div>
  );
}
