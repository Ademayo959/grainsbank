const contacts = [
  { name: "Northgate Grain Co", type: "Supplier", initials: "NG", email: "sales@example.com", phone: "+234 800 000 0000" },
  { name: "Harvest Capital", type: "Investor", initials: "HC", email: "invest@example.com", phone: "+234 800 000 0000" },
  { name: "Delta Seeds Ltd", type: "Supplier", initials: "DS", email: "info@example.com", phone: "+234 800 000 0000" },
  { name: "Savanna Ventures", type: "Investor", initials: "SV", email: "hello@example.com", phone: "+234 800 000 0000" },
  { name: "Riverbank Agro Supplies", type: "Supplier", initials: "RA", email: "orders@example.com", phone: "+234 800 000 0000" },
  { name: "Umbra Partners", type: "Investor", initials: "UP", email: "team@example.com", phone: "+234 800 000 0000" },
];

export default function DashboardInvestor() {
  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-medium mb-2">Investors and suppliers</h1>
      <p className="text-black/60 mb-8">Get in touch with the people behind the platform.</p>

      <div className="flex gap-2 mb-8">
        <button className="px-6 py-2 bg-[#0B2F24] text-white rounded-full text-sm">All</button>
        <button className="px-6 py-2 bg-white border border-black/10 rounded-full text-sm hover:bg-gray-50">Suppliers</button>
        <button className="px-6 py-2 bg-white border border-black/10 rounded-full text-sm hover:bg-gray-50">Investors</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contacts.map((contact, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-black/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-medium text-black/70">
                {contact.initials}
              </div>
              
              <div>
                <h3 className="font-medium text-lg">{contact.name}</h3>
                <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-full ${
                  contact.type === 'Supplier' ? 'bg-gray-200 text-gray-700' : 'bg-[#D1F84A] text-black'
                }`}>
                  {contact.type}
                </span>
                <p className="text-xs text-black/50 mt-1">{contact.email} · {contact.phone}</p>
              </div>
            </div>

            <div className="flex gap-2 shrink-0">
              <button className="px-4 py-2 bg-[#0B2F24] text-white rounded-full text-xs font-medium hover:bg-[#154233]">
                Email
              </button>
              <button className="px-4 py-2 border border-black/20 rounded-full text-xs font-medium hover:bg-gray-50">
                Call
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}