import { Mail, Linkedin, Twitter, Shield, CheckCircle, Lock } from "lucide-react";

interface UpdatedFooterProps {
  onNavigate: (page: "home" | "how-it-works" | "pricing" | "about" | "contact" | "terms" | "privacy") => void;
}

const productLinks = [
  { name: "How It Works", page: "how-it-works" as const },
  { name: "Pricing", page: "pricing" as const },
  { name: "Features", page: "home" as const },
];

const companyLinks = [
  { name: "About Us", page: "about" as const },
  { name: "Contact", page: "contact" as const },
  { name: "Privacy Policy", page: "privacy" as const },
  { name: "Terms of Service", page: "terms" as const },
];

const trustItems = [
  { icon: Lock, text: "Data Privacy" },
  { icon: CheckCircle, text: "Fair Use" },
  { icon: Shield, text: "Transparency" },
];

export function UpdatedFooter({ onNavigate }: UpdatedFooterProps) {
  const handleNav = (page: typeof productLinks[number]["page"] | typeof companyLinks[number]["page"]) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl text-white mb-4">JobAutometa</div>
            <p className="text-sm text-gray-400 mb-4">We apply to jobs for you: intelligently, ethically, and personally.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-sky-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-sky-400 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-sky-400 transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              {productLinks.map(link => (
                <li key={link.page}>
                  <button onClick={() => handleNav(link.page)} className="hover:text-sky-400 transition-colors">{link.name}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {companyLinks.map(link => (
                <li key={link.page}>
                  <button onClick={() => handleNav(link.page)} className="hover:text-sky-400 transition-colors">{link.name}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h3 className="text-white mb-4">Trust & Safety</h3>
            <div className="space-y-3 text-sm">
              {trustItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-sky-400" />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Compliance */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <p className="text-sm text-gray-400 text-center">We comply with all major job board and data protection regulations. Your privacy and ethical job searching are our top priorities.</p>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2025 JobAutometa. All rights reserved.</p>
          <p>Built with AI + Human Expertise 🚀</p>
        </div>
      </div>
    </footer>
  );
}
