import teslaLogo from 'figma:asset/24245cd86e53f46dbf4ac2727ae57f8b702696c9.png';

const companies = [
  "Google", "Microsoft", "Apple", "Amazon", "Meta", "Netflix", "Tesla", "Uber", "Spotify",
  "LinkedIn", "Adobe", "Salesforce", "Oracle", "IBM", "Intel", "Cisco", "Dell", "HP",
  "Target", "Walmart", "Costco", "Starbucks", "McDonald's", "Nike", "CVS", "FedEx", "UPS",
  "Notion", "TCS", "Deloitte", "Accenture", "PwC", "SAP", "IQVIA", "Axon",
  "Panda Restaurant Group", "Dick's Sporting Goods"
];

export function CompanyLogos() {
  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-16 px-4">
        <h2 className="text-[#1A3D7C]">Our users have secured jobs at leading companies</h2>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="py-8">
          <div className="flex gap-16 animate-scroll-rtl">
            {[...companies, ...companies, ...companies].map((company, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center px-4">
                {company === "Tesla" ? (
                  <div className="flex items-center gap-4">
                    <img src={teslaLogo} alt="Tesla" className="h-12 w-auto" />
                    <span className="text-[#E82127] text-2xl font-bold">TESLA</span>
                  </div>
                ) : (
                  <span className="text-slate-700 text-xl font-semibold whitespace-nowrap">{company}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll-rtl { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
        .animate-scroll-rtl { animation: scroll-rtl 45s linear infinite; width: fit-content; }
      `}</style>
    </section>
  );
}
