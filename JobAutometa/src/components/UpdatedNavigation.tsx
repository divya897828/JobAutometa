import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface UpdatedNavigationProps {
  currentPage: string;
  onNavigate: (page: "home" | "how-it-works" | "pricing" | "about" | "contact") => void;
  onLogin: () => void;
  onSignUp: () => void;
}

const navLinks = [
  { name: "How It Works", page: "how-it-works" as const },
  { name: "Pricing", page: "pricing" as const },
  { name: "About", page: "about" as const },
  { name: "Contact", page: "contact" as const },
];

export function UpdatedNavigation({ currentPage, onNavigate, onLogin, onSignUp }: UpdatedNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHome = currentPage === "home";

  const handleNav = (page: typeof navLinks[number]["page"] | "home") => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAuth = (type: "login" | "signup") => {
    type === "login" ? onLogin() : onSignUp();
    setMobileMenuOpen(false);
  };

  const navClass = (page: string) => `transition-colors ${isHome ? `text-white hover:text-sky-300 ${currentPage === page ? "text-sky-300" : ""}` : `text-slate-700 hover:text-sky-600 ${currentPage === page ? "text-sky-600" : ""}`}`;
  const btnClass = `rounded-full ${isHome ? "bg-white text-sky-600 hover:bg-sky-50" : "bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white"}`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHome ? "bg-transparent" : "bg-white/95 backdrop-blur-md border-b border-slate-200"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={() => handleNav("home")} className={`text-2xl ${isHome ? "text-white drop-shadow-lg" : "bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent"}`}>
            JobAutometa
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button key={link.page} onClick={() => handleNav(link.page)} className={navClass(link.page)}>{link.name}</button>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button onClick={() => handleAuth("login")} className={btnClass}>Login</Button>
            <Button onClick={() => handleAuth("signup")} className={btnClass}>Sign Up</Button>
          </div>

          {/* Mobile Toggle */}
          <button className={`md:hidden p-2 ${isHome ? "text-white" : "text-slate-700"}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden py-4 ${isHome ? "bg-slate-900/95 backdrop-blur-md border-t border-white/20" : "border-t border-slate-200"}`}>
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <button key={link.page} onClick={() => handleNav(link.page)} className={`text-left ${navClass(link.page)}`}>{link.name}</button>
              ))}
              <div className={`flex flex-col gap-2 pt-4 ${isHome ? "border-t border-white/20" : "border-t border-slate-200"}`}>
                <Button onClick={() => handleAuth("login")} className={`w-full ${btnClass}`}>Login</Button>
                <Button onClick={() => handleAuth("signup")} className={`w-full ${btnClass}`}>Sign Up</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
