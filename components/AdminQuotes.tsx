
"use client";

import { useEffect, useMemo, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/firebase/firebase";

type Quote = {
  id: string;
  userId: string;
  customerName: string;
  email: string;
  product: string;
  quantity: string;
  neededBy: string;
  destination: string;
  whatsappNumber: string;
  message: string;
  status: "New" | "Contacted" | "Closed";
  createdAt: any;
};

export default function AdminQuotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  // Fetch all quote requests
  useEffect(() => {
    const quotesQuery = query(
      collection(db, "quotes"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(
      quotesQuery,
      (snapshot) => {
        const data = snapshot.docs.map((document) => ({
          id: document.id,
          ...document.data(),
        })) as Quote[];

        setQuotes(data);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching quotes:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Search and filter quotes
  const filteredQuotes = useMemo(() => {
    return quotes.filter((quote) => {
      const searchTerm = search.toLowerCase();

      const matchesSearch =
        (quote.customerName || "").toLowerCase().includes(searchTerm) ||
        (quote.product || "").toLowerCase().includes(searchTerm) ||
        (quote.email || "").toLowerCase().includes(searchTerm) ||
        (quote.destination || "").toLowerCase().includes(searchTerm);

      const matchesStatus =
        statusFilter === "All" || quote.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [quotes, search, statusFilter]);

  // Update quote status
  const updateStatus = async (
    quoteId: string,
    status: Quote["status"]
  ) => {
    try {
      await updateDoc(doc(db, "quotes", quoteId), {
        status,
      });
    } catch (error) {
      console.error("Error updating quote status:", error);
    }
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp?.toDate) return "Pending";

    return timestamp.toDate().toLocaleDateString("en-NG", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getStatusStyle = (status: Quote["status"]) => {
    switch (status) {
      case "New":
        return "bg-[#F6F6F2] text-black/70";
      case "Contacted":
        return "bg-[#D1F84A] text-black";
      case "Closed":
        return "bg-[#0B2F24] text-white";
      default:
        return "bg-gray-200 text-black";
    }
  };

  const whatsappLink = (phone: string, quote: Quote) => {
    const number = phone.replace(/\D/g, "");

    const message = `Hello ${quote.customerName}, we received your quote request for ${quote.product} (${quote.quantity}). We would like to discuss your requirements.`;

    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="max-w-6xl mx-auto font-sans">
      <header className="mb-8">
        <p className="text-sm text-black/50 mb-1">
          Buyer communication
        </p>
        <h1 className="text-3xl font-medium mb-2">
          Quote requests
        </h1>
        <p className="text-black/60">
          Track incoming commodity enquiries and respond promptly.
        </p>
      </header>

      <div className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden mb-6">
        {/* Toolbar */}
        <div className="p-4 border-b border-black/5 flex flex-wrap gap-4 justify-between items-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search customers or commodities"
              className="w-full bg-[#F6F6F2] border-none rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-black/20"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {["All", "New", "Contacted", "Closed"].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-5 py-2 rounded-full text-sm ${statusFilter === status
                    ? "bg-[#E5E5DF] text-black font-medium"
                    : "bg-white border border-black/10 hover:bg-gray-50"
                  }`}
              >
                {status === "All" ? "All statuses" : status}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-[#F6F6F2] text-black/50">
              <tr>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Product requested</th>
                <th className="px-6 py-4 font-medium">Email</th>
                <th className="px-6 py-4 font-medium">Phone</th>
                <th className="px-6 py-4 font-medium">Request date</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-black/5">
              {loading ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-black/50">
                    Loading quote requests...
                  </td>
                </tr>
              ) : filteredQuotes.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-black/50">
                    No quote requests found.
                  </td>
                </tr>
              ) : (
                filteredQuotes.map((quote) => (
                  <tr key={quote.id}>
                    <td className="px-6 py-4 font-medium text-black">
                      {quote.customerName || "Unknown customer"}
                    </td>

                    <td className="px-6 py-4 text-black/70">
                      {quote.product} · {quote.quantity}
                    </td>

                    <td className="px-6 py-4 text-black/70">
                      {quote.email || "Not provided"}
                    </td>

                    <td className="px-6 py-4 text-black/70">
                      {quote.whatsappNumber}
                    </td>

                    <td className="px-6 py-4 text-black/50">
                      {formatDate(quote.createdAt)}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                          quote.status
                        )}`}
                      >
                        {quote.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2 items-center">
                        <a
                          href={whatsappLink(quote.whatsappNumber, quote)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-[#D1F84A] hover:bg-[#bce63d] text-black rounded-full text-xs font-medium transition-colors"
                        >
                          WhatsApp
                        </a>

                        <select
                          value={quote.status}
                          onChange={(e) =>
                            updateStatus(
                              quote.id,
                              e.target.value as Quote["status"]
                            )
                          }
                          className="px-3 py-2 border border-black/10 rounded-full text-xs bg-white focus:outline-none"
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Response Standard - Full Width */}
      <div className="bg-[#0B2F24] text-white p-8 rounded-2xl shadow-sm">
        <p className="text-[#D1F84A] text-xs font-bold uppercase tracking-wider mb-3">
          Response Standard
        </p>

        <h3 className="text-xl font-medium mb-3">
          Close the loop within one business day.
        </h3>

        <p className="text-sm text-white/70 leading-relaxed">
          Use WhatsApp for a quick first response, then keep the request
          status current.
        </p>
      </div>
    </div>
  );
}
