
"use client";

import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth, db } from "@/firebase/firebase";

type Product = {
  id: string;
  name: string;
};

type Quote = {
  id: string;
  product: string;
  quantity: string;
  neededBy: string;
  destination: string;
  whatsappNumber: string;
  message: string;
  status: "New" | "Contacted" | "Closed";
  createdAt: any;
};

export default function DashboardQuote() {
  const [user, setUser] = useState<User | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [quotes, setQuotes] = useState<Quote[]>([]);

  const [formData, setFormData] = useState({
    product: "",
    quantity: "",
    neededBy: "",
    destination: "",
    whatsappNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Listen for the signed-in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // Fetch available products
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "products"),
      (snapshot) => {
        const data = snapshot.docs.map((document) => ({
          id: document.id,
          name: document.data().name,
        }));

        setProducts(data);
      }
    );

    return () => unsubscribe();
  }, []);

  // Fetch this user's quote requests
  useEffect(() => {
    if (!user) {
      setQuotes([]);
      return;
    }

    const quotesQuery = query(
      collection(db, "quotes"),
      where("userId", "==", user.uid)
    );

    const unsubscribe = onSnapshot(
      quotesQuery,
      (snapshot) => {
        const data = snapshot.docs.map((document) => ({
          id: document.id,
          ...document.data(),
        })) as Quote[];

        data.sort((a, b) => {
          const dateA = a.createdAt?.toMillis?.() ?? 0;
          const dateB = b.createdAt?.toMillis?.() ?? 0;
          return dateB - dateA;
        });

        setQuotes(data);
      },
      (err) => {
        console.error("Error fetching quotes:", err);
      }
    );

    return () => unsubscribe();
  }, [user]);

  // Update form fields
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit quote request
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!user) {
      setError("Please sign in before requesting a quote.");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "quotes"), {
        ...formData,
        userId: user.uid,
        status: "New",
        createdAt: serverTimestamp(),
        customerName: user.displayName || "Unknown",
        email: user.email || "",
      });

      setFormData({
        product: "",
        quantity: "",
        neededBy: "",
        destination: "",
        whatsappNumber: "",
        message: "",
      });

      setSuccess("Your quote request has been submitted successfully.");
    } catch (err) {
      console.error("Error submitting quote:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const statusStyle = (status: Quote["status"]) => {
    switch (status) {
      case "New":
        return "bg-gray-200 text-gray-800";
      case "Contacted":
        return "bg-[#D1F84A] text-black";
      case "Closed":
        return "bg-[#0B2F24] text-white";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp?.toDate) return "Just submitted";

    return timestamp.toDate().toLocaleDateString("en-NG", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-medium mb-2">Request a quote</h1>

      <p className="text-black/60 mb-8">
        Tell us what you need and we'll come back to you.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-black/5">
          <h2 className="text-2xl mb-6">
            Tell us what you{" "}
            <span className="font-instrument-serif font-medium italic">
              need
            </span>
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-medium block mb-1">
                Product
              </label>

              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                required
                className="w-full border border-black/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0B2F24] bg-transparent"
              >
                <option value="">Select a commodity</option>

                {products.map((product) => (
                  <option key={product.id} value={product.name}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-1">
                  Quantity
                </label>

                <input
                  name="quantity"
                  type="text"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 20 tonnes"
                  required
                  className="w-full border border-black/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0B2F24]"
                />
              </div>

              <div>
                <label className="text-sm font-medium block mb-1">
                  Needed by
                </label>

                <input
                  name="neededBy"
                  type="date"
                  value={formData.neededBy}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full border border-black/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0B2F24] text-black/50"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">
                Destination
              </label>

              <input
                name="destination"
                type="text"
                value={formData.destination}
                onChange={handleChange}
                placeholder="City or state"
                required
                className="w-full border border-black/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0B2F24]"
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">
                WhatsApp number
              </label>

              <input
                name="whatsappNumber"
                type="tel"
                value={formData.whatsappNumber}
                onChange={handleChange}
                placeholder="+234"
                required
                className="w-full border border-black/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0B2F24]"
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Anything else we should know?"
                rows={4}
                className="w-full border border-black/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0B2F24] resize-none"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}

            {success && (
              <p className="text-sm text-green-700">{success}</p>
            )}

            <button
              type="submit"
              disabled={loading || !user}
              className="w-full bg-[#0B2F24] text-white rounded-full py-4 font-medium mt-2 hover:bg-[#154233] transition-colors disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Send quote request"}
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-black/5">
            <h3 className="font-medium mb-4">Your recent requests</h3>

            {quotes.length === 0 ? (
              <p className="text-sm text-black/50">
                You haven't made any quote requests yet.
              </p>
            ) : (
              <div className="flex flex-col gap-4">
                {quotes.slice(0, 5).map((quote) => (
                  <div
                    key={quote.id}
                    className="border-b border-black/10 pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <p className="font-medium text-sm">
                        {quote.product} · {quote.quantity}
                      </p>

                      <span
                        className={`text-xs px-2 py-1 rounded-full shrink-0 ${statusStyle(
                          quote.status
                        )}`}
                      >
                        {quote.status}
                      </span>
                    </div>

                    <p className="text-xs text-black/50">
                      {quote.destination} · sent {formatDate(quote.createdAt)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-[#0B2F24] text-white p-6 rounded-3xl shadow-sm">
            <h4 className="text-[#D1F84A] font-medium text-sm mb-2">
              What happens next
            </h4>

            <p className="text-sm leading-relaxed text-white/90">
              You get an email confirmation straight away, and our team
              contacts you on WhatsApp to confirm the details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
