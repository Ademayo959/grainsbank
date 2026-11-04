
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "@/firebase/firebase";

type Product = {
  id: string;
  name: string;
  category: string;
  grade: string;
  pricePerTon: number;
  createdAt: any;
};

type Quote = {
  id: string;
  customerName: string;
  product: string;
  quantity: string;
  status: "New" | "Contacted" | "Closed";
  createdAt: any;
};

type Contact = {
  id: string;
  name: string;
  type: "Investor" | "Supplier";
};

export default function AdminOverview() {
  const [products, setProducts] = useState<Product[]>([]);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let productsLoaded = false;
    let quotesLoaded = false;
    let contactsLoaded = false;

    const checkLoading = () => {
      if (productsLoaded && quotesLoaded && contactsLoaded) {
        setLoading(false);
      }
    };

    const unsubscribeProducts = onSnapshot(
      query(collection(db, "products"), orderBy("createdAt", "desc")),
      (snapshot) => {
        setProducts(
          snapshot.docs.map((document) => ({
            id: document.id,
            ...document.data(),
          })) as Product[]
        );

        productsLoaded = true;
        checkLoading();
      },
      (error) => {
        console.error("Products fetch error:", error);
        productsLoaded = true;
        checkLoading();
      }
    );

    const unsubscribeQuotes = onSnapshot(
      query(collection(db, "quotes"), orderBy("createdAt", "desc")),
      (snapshot) => {
        setQuotes(
          snapshot.docs.map((document) => ({
            id: document.id,
            ...document.data(),
          })) as Quote[]
        );

        quotesLoaded = true;
        checkLoading();
      },
      (error) => {
        console.error("Quotes fetch error:", error);
        quotesLoaded = true;
        checkLoading();
      }
    );

    const unsubscribeContacts = onSnapshot(
      collection(db, "network"),
      (snapshot) => {
        setContacts(
          snapshot.docs.map((document) => ({
            id: document.id,
            ...document.data(),
          })) as Contact[]
        );

        contactsLoaded = true;
        checkLoading();
      },
      (error) => {
        console.error("Contacts fetch error:", error);
        contactsLoaded = true;
        checkLoading();
      }
    );

    return () => {
      unsubscribeProducts();
      unsubscribeQuotes();
      unsubscribeContacts();
    };
  }, []);

  // Calculate new quote requests from the last 7 days
  const [newThisWeek, setNewThisWeek] = useState(0);

  useEffect(() => {
    const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    const count = quotes.filter((quote) => {
      const timestamp = quote.createdAt?.toMillis?.();
      return timestamp !== undefined && timestamp >= sevenDaysAgo;
    }).length;
    setNewThisWeek(count);
  }, [quotes]);

  const newRequests = quotes.filter(
    (quote) => quote.status === "New"
  ).length;

  const investors = contacts.filter(
    (contact) => contact.type === "Investor"
  ).length;

  const suppliers = contacts.filter(
    (contact) => contact.type === "Supplier"
  ).length;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp?.toDate) return "Recently";

    return timestamp.toDate().toLocaleString("en-NG", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const [today, setToday] = useState("")
  
  useEffect(() => {
    setToday(new Date().toLocaleDateString("en-NG", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }))
  }, [])

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <header className="flex justify-between items-start mb-10">
        <div>
          <p className="text-sm text-black/50 mb-2">{today}</p>
          <h1 className="text-3xl font-medium mb-1">
            Good morning, Admin.
          </h1>
          <p className="text-black/60">
            Here is the latest from Grainsbank's commodity marketplace.
          </p>
        </div>

        <div className="w-12 h-12 bg-white border border-black/10 rounded-xl flex items-center justify-center shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-black/70"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </div>
      </header>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
          <p className="text-sm text-black/60 font-medium mb-4">
            Total products
          </p>
          <p className="text-4xl font-semibold mb-2">
            {loading ? "—" : products.length}
          </p>
          <p className="text-xs text-black/50">
            Marketplace listings
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
          <p className="text-sm text-black/60 font-medium mb-4">
            Quote requests
          </p>
          <p className="text-4xl font-semibold mb-2">
            {loading ? "—" : quotes.length}
          </p>
          <p className="text-xs text-[#749B2E] font-medium">
            {loading ? "Loading..." : `${newThisWeek} received this week`}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
          <p className="text-sm text-black/60 font-medium mb-4">
            Investors
          </p>
          <p className="text-4xl font-semibold mb-2">
            {loading ? "—" : investors}
          </p>
          <p className="text-xs text-black/50">Listed contacts</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
          <p className="text-sm text-black/60 font-medium mb-4">
            Suppliers
          </p>
          <p className="text-4xl font-semibold mb-2">
            {loading ? "—" : suppliers}
          </p>
          <p className="text-xs text-black/50">Listed contacts</p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden">
          <div className="p-6 flex justify-between items-center border-b border-black/5">
            <div>
              <h2 className="text-lg font-medium">
                Recent quote requests
              </h2>
              <p className="text-sm text-black/50">
                Customer commodity enquiries awaiting action.
              </p>
            </div>

            <Link
              href="/admin/quotes"
              className="text-sm font-medium hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead className="bg-[#F6F6F2] text-xs text-black/50 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-3 font-medium">Customer</th>
                  <th className="px-6 py-3 font-medium">Commodity</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium text-right">
                    Received
                  </th>
                </tr>
              </thead>

              <tbody className="text-sm">
                {loading ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-10 text-center text-black/50">
                      Loading requests...
                    </td>
                  </tr>
                ) : quotes.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-10 text-center text-black/50">
                      No quote requests yet.
                    </td>
                  </tr>
                ) : (
                  quotes.slice(0, 3).map((quote) => (
                    <tr
                      key={quote.id}
                      className="border-b border-black/5 last:border-0"
                    >
                      <td className="px-6 py-4 font-medium">
                        {quote.customerName || "Unknown customer"}
                      </td>

                      <td className="px-6 py-4 text-black/70">
                        {quote.product} · {quote.quantity}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${quote.status === "New"
                            ? "bg-gray-100 text-black"
                            : quote.status === "Contacted"
                              ? "bg-[#D1F84A] text-black"
                              : "bg-[#0B2F24] text-white"
                            }`}
                        >
                          {quote.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-right text-black/50">
                        {formatDate(quote.createdAt)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-[#0B2F24] text-white p-8 rounded-2xl shadow-sm flex flex-col justify-center">
          <p className="text-[#D1F84A] text-xs font-bold uppercase tracking-wider mb-3">
            Team Priority
          </p>

          <h3 className="text-2xl font-medium mb-3">
            {loading
              ? "Loading enquiries..."
              : `Follow up on ${newRequests} new buyer ${newRequests === 1 ? "enquiry" : "enquiries"
              }.`}
          </h3>

          <p className="text-sm text-white/70 mb-8 leading-relaxed">
            Responding within one business day builds reliable commodity relationships.
          </p>

          <Link
            href="/admin/quotes"
            className="bg-[#D1F84A] hover:bg-[#bce63d] transition-colors text-black font-medium text-sm px-6 py-3 rounded-full w-fit"
          >
            Review requests
          </Link>
        </div>
      </div>

      {/* Recently Added Products */}
      <div className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden">
        <div className="p-6 flex justify-between items-center border-b border-black/5">
          <div>
            <h2 className="text-lg font-medium">
              Recently added products
            </h2>
            <p className="text-sm text-black/50">
              Latest listings visible in the marketplace.
            </p>
          </div>

          <Link
            href="/admin/products"
            className="text-sm font-medium hover:underline"
          >
            Manage products
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/5">
          {loading ? (
            <p className="p-6 text-sm text-black/50">
              Loading products...
            </p>
          ) : products.length === 0 ? (
            <p className="p-6 text-sm text-black/50">
              No products have been added yet.
            </p>
          ) : (
            products.slice(0, 3).map((product) => (
              <div key={product.id} className="p-6">
                <p className="text-xs text-black/50 mb-1">
                  {product.category}
                </p>

                <p className="font-medium mb-1">
                  {product.name}
                </p>

                <p className="text-sm text-black/70">
                  {product.grade} · {formatPrice(product.pricePerTon)} / tonne
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
