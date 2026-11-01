
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
              className={`px-4 py-1.5 rounded-full text-sm ${
                activeCategory === category
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
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-3xl shadow-sm border border-black/5 flex flex-col"
                >

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

                  <p className="text-sm text-black/60 mb-4">
                    {product.description}
                  </p>

                  {/* PRICE */}
                  <div className="mt-auto">
                    <p className="font-semibold text-sm mb-4">
                      {formatPrice(product.pricePerTon)}
                      <span className="font-normal text-black/50">
                        {" "} / tonne
                      </span>
                    </p>

                    <p className="text-xs text-black/40">
                      Contact and quote options coming soon.
                    </p>
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
