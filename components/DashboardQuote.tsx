export default function DashboardQuote() {
  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-medium mb-2">Request a quote</h1>
      <p className="text-black/60 mb-8">Tell us what you need and we'll come back to you.</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-black/5">
          <h2 className="text-2xl mb-6">Tell us what you <span className="font-serif italic">need</span></h2>
          
          <form className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-medium block mb-1">Product</label>
              <select className="w-full border border-black/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0B2F24] bg-transparent">
                <option>Select a commodity</option>
                <option>Maize</option>
                <option>Rice</option>
                <option>Soybeans</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-1">Quantity</label>
                <input type="text" placeholder="e.g. 20 tonnes" className="w-full border border-black/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0B2F24]" />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">Needed by</label>
                <input type="date" className="w-full border border-black/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0B2F24] text-black/50" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">Destination</label>
              <input type="text" placeholder="City or state" className="w-full border border-black/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0B2F24]" />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">WhatsApp number</label>
              <input type="text" placeholder="+234" className="w-full border border-black/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0B2F24]" />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">Message</label>
              <textarea placeholder="Anything else we should know?" rows={4} className="w-full border border-black/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0B2F24] resize-none"></textarea>
            </div>

            <button type="button" className="w-full bg-[#0B2F24] text-white rounded-full py-4 font-medium mt-2 hover:bg-[#154233] transition-colors">
              Send quote request
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-black/5">
            <h3 className="font-medium mb-4">Your recent requests</h3>
            
            <div className="flex flex-col gap-4">
              <div className="border-b border-black/10 pb-4">
                <div className="flex justify-between items-start mb-1">
                  <p className="font-medium text-sm">Maize · 20 tonnes</p>
                  <span className="bg-gray-200 text-xs px-2 py-1 rounded-full">New</span>
                </div>
                <p className="text-xs text-black/50">Lagos · sent today</p>
              </div>
              
              <div className="border-b border-black/10 pb-4">
                <div className="flex justify-between items-start mb-1">
                  <p className="font-medium text-sm">Soybeans · 5 tonnes</p>
                  <span className="bg-[#D1F84A] text-xs px-2 py-1 rounded-full">Contacted</span>
                </div>
                <p className="text-xs text-black/50">Kano · sent last week</p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <p className="font-medium text-sm">Rice · 10 tonnes</p>
                  <span className="bg-[#0B2F24] text-white text-xs px-2 py-1 rounded-full">Closed</span>
                </div>
                <p className="text-xs text-black/50">Ibadan · sent last month</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0B2F24] text-white p-6 rounded-3xl shadow-sm">
            <h4 className="text-[#D1F84A] font-medium text-sm mb-2">What happens next</h4>
            <p className="text-sm leading-relaxed text-white/90">
              You get an email confirmation straight away, and our team contacts you on WhatsApp to confirm the details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}