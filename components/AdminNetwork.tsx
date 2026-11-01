
"use client";

import { useEffect, useState, FormEvent } from "react";
import { db } from "@/firebase/firebase";
import { auth } from "@/firebase/firebase";



import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

type Contact = {
  id: string;
  name: string;
  type: "Investor" | "Supplier";
  email: string;
  phoneNumber: string;
};

type FormData = {
  name: string;
  type: "Investor" | "Supplier";
  email: string;
  phoneNumber: string;
};

const initialFormData: FormData = {
  name: "",
  type: "Investor",
  email: "",
  phoneNumber: "",
};

export default function DashboardInvestor() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // FETCH INVESTORS FROM FIRESTORE
  useEffect(() => {
    const networkRef = collection(db, "network");

    const unsubscribe = onSnapshot(
      networkRef,
      (snapshot) => {
        const investors: Contact[] = snapshot.docs
          .map((document) => ({
            id: document.id,
            ...document.data(),
          }) as Contact)
          .filter((contact) => contact.type === "Investor");

        setContacts(investors);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching investors:", error);
        setError("Unable to load investors.");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // HANDLE FORM INPUTS
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
    setError("");
  };

  // ADD OR UPDATE INVESTOR
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      if (editingId) {
        const investorRef = doc(db, "network", editingId);

        await updateDoc(investorRef, {
          ...formData,
        });
      } else {
        await addDoc(collection(db, "network"), {
          ...formData,
        });
      }

      resetForm();
    } catch (error) {
      console.error("Error saving investor:", error);
      setError("Unable to save investor. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  // SELECT INVESTOR FOR EDITING
  const handleEdit = (investor: Contact) => {
    setEditingId(investor.id);

    setFormData({
      name: investor.name,
      type: investor.type,
      email: investor.email,
      phoneNumber: investor.phoneNumber,
    });
  };

  // DELETE INVESTOR
  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this investor?"
    );

    if (!confirmed) return;

    try {
      await deleteDoc(doc(db, "network", id));
    } catch (error) {
      console.error("Error deleting investor:", error);
      setError("Unable to delete investor.");
    }
  };

  // SEARCH INVESTORS
  const filteredContacts = contacts.filter((contact) => {
    const searchTerm = search.toLowerCase();

    return (
      contact.name.toLowerCase().includes(searchTerm) ||
      contact.email.toLowerCase().includes(searchTerm)
    );
  });
  console.log("Logged-in UID:", auth.currentUser?.uid);

  return (
    <div className="space-y-8 text-[#0B2F24]">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold">
          Investors
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your registered investors.
        </p>
      </div>

      {/* ADD / EDIT FORM */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="mb-5 text-lg font-semibold">
          {editingId ? "Edit investor" : "Add an investor"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full name"
              required
              className="rounded-lg border border-gray-200 p-3 outline-none focus:border-[#0B2F24]"
            />

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email address"
              required
              className="rounded-lg border border-gray-200 p-3 outline-none focus:border-[#0B2F24]"
            />

            <input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone number"
              required
              className="rounded-lg border border-gray-200 p-3 outline-none focus:border-[#0B2F24]"
            />

            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="rounded-lg border border-gray-200 bg-white p-3 outline-none focus:border-[#0B2F24]"
            >
              <option value="Investor">Investor</option>
              <option value="Supplier">Supplier</option>
            </select>
          </div>

          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={saving}
              className="rounded-lg bg-[#0B2F24] px-5 py-3 text-sm font-medium text-white disabled:opacity-50"
            >
              {saving
                ? "Saving..."
                : editingId
                ? "Update investor"
                : "Add investor"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-lg border border-gray-200 px-5 py-3 text-sm"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* INVESTOR LIST */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-lg font-semibold">
              All investors
            </h2>
            <p className="text-sm text-gray-500">
              {contacts.length} investors registered
            </p>
          </div>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search investors..."
            className="rounded-lg border border-gray-200 p-3 text-sm outline-none focus:border-[#0B2F24]"
          />
        </div>

        {loading ? (
          <p className="py-8 text-center text-sm text-gray-500">
            Loading investors...
          </p>
        ) : filteredContacts.length === 0 ? (
          <p className="py-8 text-center text-sm text-gray-500">
            No investors found.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500">
                  <th className="px-3 py-4 font-medium">Name</th>
                  <th className="px-3 py-4 font-medium">Email</th>
                  <th className="px-3 py-4 font-medium">Phone</th>
                  <th className="px-3 py-4 font-medium">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredContacts.map((investor) => (
                  <tr
                    key={investor.id}
                    className="border-b border-gray-100"
                  >
                    <td className="px-3 py-4 font-medium">
                      {investor.name}
                    </td>

                    <td className="px-3 py-4 text-gray-500">
                      {investor.email}
                    </td>

                    <td className="px-3 py-4 text-gray-500">
                      {investor.phoneNumber}
                    </td>

                    <td className="px-3 py-4">
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleEdit(investor)}
                          className="font-medium text-blue-600"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(investor.id)}
                          className="font-medium text-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
