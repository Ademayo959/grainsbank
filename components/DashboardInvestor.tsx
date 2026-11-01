
"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/firebase";

type Contact = {
  id: string;
  name: string;
  type: "Investor" | "Supplier";
  email: string;
  phoneNumber: string;
};

export default function DashboardInvestor() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "network"),
      (snapshot) => {
        const data = snapshot.docs.map((document) => ({
          id: document.id,
          ...document.data(),
        })) as Contact[];

        setContacts(data);
      },
      (error) => {
        console.error("Error fetching contacts:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  const filteredContacts =
    filter === "All"
      ? contacts
      : contacts.filter((contact) => contact.type === filter);

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-medium mb-2">
        Investors and suppliers
      </h1>

      <p className="text-black/60 mb-8">
        Get in touch with the people behind the platform.
      </p>

      <div className="flex gap-2 mb-8">
        {["All", "Supplier", "Investor"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-6 py-2 rounded-full text-sm ${
              filter === item
                ? "bg-[#0B2F24] text-white"
                : "bg-white border border-black/10 hover:bg-gray-50"
            }`}
          >
            {item === "All" ? "All" : `${item}s`}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredContacts.map((contact) => {
          const initials = contact.name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();

          return (
            <div
              key={contact.id}
              className="bg-white p-6 rounded-3xl shadow-sm border border-black/5 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 shrink-0 rounded-full bg-gray-200 flex items-center justify-center font-medium text-black/70">
                  {initials}
                </div>

                <div className="min-w-0">
                  <h3 className="font-medium text-lg">
                    {contact.name}
                  </h3>

                  <span
                    className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-full ${
                      contact.type === "Supplier"
                        ? "bg-gray-200 text-gray-700"
                        : "bg-[#D1F84A] text-black"
                    }`}
                  >
                    {contact.type}
                  </span>

                  <p className="text-xs text-black/50 mt-2 break-all">
                    {contact.email} · {contact.phoneNumber}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 shrink-0">
                <a
                  href={`mailto:${contact.email}`}
                  className="px-4 py-2 bg-[#0B2F24] text-white rounded-full text-xs font-medium hover:bg-[#154233]"
                >
                  Email
                </a>

                <a
                  href={`tel:${contact.phoneNumber}`}
                  className="px-4 py-2 border border-black/20 rounded-full text-xs font-medium hover:bg-gray-50"
                >
                  Call
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {filteredContacts.length === 0 && (
        <p className="text-sm text-black/50 py-10 text-center">
          No contacts found.
        </p>
      )}
    </div>
  );
}
