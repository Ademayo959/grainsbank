
"use client";

import { useEffect, useState, FormEvent } from "react";
import { db } from "@/firebase/firebase";

import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  grade: string;
  pricePerTon: number;
  createdAt: any;
};

type ProductFormData = {
  name: string;
  category: string;
  description: string;
  grade: string;
  pricePerTon: string;
};

const initialFormData: ProductFormData = {
  name: "",
  category: "",
  description: "",
  grade: "",
  pricePerTon: "",
};

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState<ProductFormData>(initialFormData);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All products");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // FETCH PRODUCTS
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
        setError("Unable to load products.");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // HANDLE INPUT CHANGES
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // RESET FORM
  const resetForm = () => {
    setFormData(initialFormData);
    setEditingId(null);
    setShowForm(false);
    setError("");
  };

  // ADD OR UPDATE PRODUCT
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSaving(true);
    setError("");

    const productData = {
      name: formData.name.trim(),
      category: formData.category,
      description: formData.description.trim(),
      grade: formData.grade.trim(),
      pricePerTon: Number(formData.pricePerTon),
    };

    if (
      !productData.name ||
      !productData.category ||
      !productData.description ||
      !productData.grade ||
      !Number.isFinite(productData.pricePerTon) ||
      productData.pricePerTon <= 0
    ) {
      setError("Please provide valid information for every field.");
      setSaving(false);
      return;
    }

    try {
      if (editingId) {
        await updateDoc(doc(db, "products", editingId), productData);
      } else {
        await addDoc(collection(db, "products"), {
          ...productData,
          createdAt: serverTimestamp(),
        });
      }

      resetForm();
    } catch (error) {
      console.error("Error saving product:", error);
      setError("Unable to save product. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  // EDIT PRODUCT
  const handleEdit = (product: Product) => {
    setEditingId(product.id);

    setFormData({
      name: product.name,
      category: product.category,
      description: product.description,
      grade: product.grade,
      pricePerTon: String(product.pricePerTon),
    });

    setShowForm(true);
  };

  // DELETE PRODUCT
  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) return;

    try {
      await deleteDoc(doc(db, "products", id));
    } catch (error) {
      console.error("Error deleting product:", error);
      setError("Unable to delete product.");
    }
  };

  // FORMAT PRICE
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(price);
  };

  // FORMAT DATE
  const formatDate = (timestamp: any) => {
    if (!timestamp?.toDate) return "Pending";

    return timestamp.toDate().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // SEARCH AND FILTER
  const filteredProducts = products.filter((product) => {
    const searchTerm = search.toLowerCase();

    const matchesSearch =
      product.name?.toLowerCase().includes(searchTerm) ||
      product.category?.toLowerCase().includes(searchTerm);

    const matchesFilter =
      activeFilter === "All products" ||
      product.category?.toLowerCase() === activeFilter.toLowerCase();

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-6xl mx-auto font-sans">

      {/* HEADER */}
      <header className="flex justify-between items-start mb-8">
        <div>
          <p className="text-sm text-black/50 mb-1">
            Marketplace catalogue
          </p>

          <h1 className="text-3xl font-medium mb-2">
            Products
          </h1>

          <p className="text-black/60">
            Maintain commodity listings available to buyers.
          </p>
        </div>

        <button
          onClick={() => {
            resetForm();
            setShowForm(true);
          }}
          className="bg-[#0B2F24] hover:bg-[#154233] transition-colors text-white font-medium text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-sm"
        >
          <span className="text-lg">+</span>
          Add product
        </button>
      </header>

      {/* ADD / EDIT FORM */}
      {showForm && (
        <div className="bg-white rounded-2xl border border-black/5 shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-medium">
                {editingId ? "Edit product" : "Add new product"}
              </h2>

              <p className="text-sm text-black/50 mt-1">
                Enter the commodity details below.
              </p>
            </div>

            <button
              type="button"
              onClick={resetForm}
              className="text-black/50 hover:text-black text-xl"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="block text-sm font-medium mb-2">
                  Product name
                </label>

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Yellow Maize"
                  required
                  className="w-full rounded-xl bg-[#F6F6F2] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[#0B2F24]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl bg-[#F6F6F2] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[#0B2F24]"
                >
                  <option value="">Select category</option>
                  <option value="Grain">Grain</option>
                  <option value="Oilseed">Oilseed</option>
                  <option value="Cash crop">Cash crop</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Grade
                </label>

                <input
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                  placeholder="e.g. Grade A"
                  required
                  className="w-full rounded-xl bg-[#F6F6F2] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[#0B2F24]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Price per tonne (₦)
                </label>

                <input
                  name="pricePerTon"
                  type="number"
                  min="1"
                  step="any"
                  value={formData.pricePerTon}
                  onChange={handleInputChange}
                  placeholder="e.g. 615000"
                  required
                  className="w-full rounded-xl bg-[#F6F6F2] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[#0B2F24]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe this commodity..."
                  rows={3}
                  required
                  className="w-full rounded-xl bg-[#F6F6F2] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[#0B2F24] resize-none"
                />
              </div>

            </div>

            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={saving}
                className="bg-[#0B2F24] hover:bg-[#154233] text-white px-6 py-3 rounded-xl text-sm font-medium disabled:opacity-50"
              >
                {saving
                  ? "Saving..."
                  : editingId
                  ? "Update product"
                  : "Save product"}
              </button>

              <button
                type="button"
                onClick={resetForm}
                className="border border-black/10 px-6 py-3 rounded-xl text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ERROR MESSAGE */}
      {error && !showForm && (
        <p className="mb-4 text-sm text-red-600">{error}</p>
      )}

      {/* MAIN TABLE */}
      <div className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden mb-6">

        {/* TOOLBAR */}
        <div className="p-4 border-b border-black/5 flex flex-wrap gap-4 justify-between items-center">

          <div className="relative w-full max-w-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-black/40"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products or categories"
              className="w-full bg-[#F6F6F2] border-none rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-black/20"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {["All products", "Grain", "Oilseed", "Cash crop"].map(
              (filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-full text-sm font-medium ${
                    activeFilter === filter
                      ? "bg-[#E5E5DF] text-black"
                      : "bg-white border border-black/10 hover:bg-gray-50"
                  }`}
                >
                  {filter}
                </button>
              )
            )}
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">

            <thead className="bg-[#F6F6F2] text-black/50">
              <tr>
                <th className="px-6 py-4 font-medium">Product</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Grade</th>
                <th className="px-6 py-4 font-medium">Price per tonne</th>
                <th className="px-6 py-4 font-medium">Created</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-black/5">

              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-black/50">
                    Loading products...
                  </td>
                </tr>
              ) : filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-black/50">
                    No products found.
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr key={product.id}>

                    <td className="px-6 py-4">
                      <p className="font-medium text-black">
                        {product.name}
                      </p>

                      <p className="text-xs text-black/50 mt-0.5">
                        {product.description}
                      </p>
                    </td>

                    <td className="px-6 py-4 text-black/70">
                      {product.category}
                    </td>

                    <td className="px-6 py-4 text-black/70">
                      {product.grade}
                    </td>

                    <td className="px-6 py-4 font-semibold text-black">
                      {formatPrice(product.pricePerTon)}
                    </td>

                    <td className="px-6 py-4 text-black/50">
                      {formatDate(product.createdAt)}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-3">

                        <button
                          onClick={() => handleEdit(product)}
                          className="px-4 py-1.5 border border-black/10 rounded-full text-xs font-medium hover:bg-gray-50"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(product.id)}
                          className="p-1.5 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                          aria-label={`Delete ${product.name}`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>

                      </div>
                    </td>
                  </tr>
                ))
              )}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
