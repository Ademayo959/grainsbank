const products = [
  { name: "Maize", category: "Grain", grade: "Grade A", origin: "Orgin", unit: "tonne", price: "price per tonne" },
  { name: "Rice", category: "Grain", grade: "Grade A", origin: "Orgin", unit: "tonne", price: "price per tonne" },
  { name: "Soybeans", category: "Oilseed", grade: "Grade A", origin: "Orgin", unit: "tonne", price: "price per tonne" },
  { name: "Cocoa beans", category: "Cash crop", grade: "Grade A", origin: "Orgin", unit: "tonne", price: "price per tonne" },
  { name: "Sorghum", category: "Grain", grade: "Grade A", origin: "Orgin", unit: "tonne", price: "price per tonne" },
  { name: "Product name", category: "Category", grade: "Grade", origin: "Orgin", unit: "unit", price: "price" },
];

export default function DashboardMarket() {
  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-medium mb-2">Products</h1>
      <p className="text-black/60 mb-8">Browse what's available and order in a tap.</p>
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <div className="flex gap-2">
          <button className="px-4 py-1.5 bg-[#0B2F24] text-white rounded-full text-sm">All</button>
          <button className="px-4 py-1.5 bg-white border border-black/10 rounded-full text-sm hover:bg-gray-50">Grain</button>
          <button className="px-4 py-1.5 bg-white border border-black/10 rounded-full text-sm hover:bg-gray-50">Oilseed</button>
          <button className="px-4 py-1.5 bg-white border border-black/10 rounded-full text-sm hover:bg-gray-50 whitespace-nowrap">Cash crop</button>
        </div>
        <input type="text" placeholder="Search commodities" className="px-6 py-2 bg-white border border-black/10 rounded-full text-sm w-64 focus:outline-none focus:border-[#0B2F24]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <div key={i} className="bg-white p-4 rounded-3xl shadow-sm border border-black/5 flex flex-col">
            <div className="h-40 rounded-2xl bg-gradient-to-b from-[#8B9C73] to-[#1A2F1C] relative mb-4">
              <span className="absolute top-3 left-3 bg-white/20 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>
            <h3 className="text-xl font-medium">{product.name}</h3>
            <p className="text-xs text-black/50 mb-4">{product.grade} · {product.origin} · per {product.unit}</p>
            <div className="mt-auto">
              <p className="font-semibold text-sm mb-4">₦ {product.price}</p>
              <div className="flex gap-2">
                <button className="flex-1 bg-[#D1F84A] hover:bg-[#bce63d] text-black font-medium text-sm py-2.5 rounded-full transition-colors">
                  Order on WhatsApp
                </button>
                <button className="px-4 py-2.5 border border-black/20 rounded-full text-sm font-medium hover:bg-gray-50">
                  Quote
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}