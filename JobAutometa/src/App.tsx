import { useState } from "react";
import { UpdatedNavigation } from "./components/UpdatedNavigation";
import { UpdatedFooter } from "./components/UpdatedFooter";
import { HomePage } from "./pages/HomePage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { PricingPage } from "./pages/PricingPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { LogoPage } from "./pages/LogoPage";
import { TermsOfServicePage } from "./pages/TermsOfServicePage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { ServiceOptionsModal } from "./components/ServiceOptionsModal";
import { DashboardRegistrationModal } from "./components/DashboardRegistrationModal";
import { RegistrationModal } from "./components/RegistrationModal";
import { LoginModal } from "./components/LoginModal";
import { ForgotPasswordModal } from "./components/ForgotPasswordModal";

type Page = "home" | "how-it-works" | "pricing" | "about" | "contact" | "logo" | "terms" | "privacy";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [showServiceOptions, setShowServiceOptions] = useState(false);
  const [showDashboardRegistration, setShowDashboardRegistration] = useState(false);
  const [showFullServiceRegistration, setShowFullServiceRegistration] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    const pages = {
      home: <HomePage onNavigate={handleNavigate} onGetStarted={() => setShowServiceOptions(true)} />,
      "how-it-works": <HowItWorksPage onNavigate={handleNavigate} />,
      pricing: <PricingPage onNavigate={handleNavigate} />,
      about: <AboutPage onNavigate={handleNavigate} />,
      contact: <ContactPage />,
      logo: <LogoPage />,
      terms: <TermsOfServicePage onNavigate={handleNavigate} />,
      privacy: <PrivacyPolicyPage onNavigate={handleNavigate} />,
    };
    return pages[currentPage];
  };

  return (
    <div className="min-h-screen bg-white">
      {currentPage !== "logo" && (
        <UpdatedNavigation
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onLogin={() => setShowLoginModal(true)}
          onSignUp={() => setShowServiceOptions(true)}
        />
      )}
      {renderPage()}
      {currentPage !== "logo" && <UpdatedFooter onNavigate={handleNavigate} />}
      
      {/* Modals */}
      <ServiceOptionsModal
        isOpen={showServiceOptions}
        onClose={() => setShowServiceOptions(false)}
        onSelectDashboard={() => { setShowServiceOptions(false); setShowDashboardRegistration(true); }}
        onSelectFullService={() => { setShowServiceOptions(false); setShowFullServiceRegistration(true); }}
      />
      <DashboardRegistrationModal isOpen={showDashboardRegistration} onClose={() => setShowDashboardRegistration(false)} />
      <RegistrationModal isOpen={showFullServiceRegistration} onClose={() => setShowFullServiceRegistration(false)} />
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignUp={() => { setShowLoginModal(false); setShowServiceOptions(true); }}
        onForgotPassword={() => { setShowLoginModal(false); setShowForgotPasswordModal(true); }}
      />
      <ForgotPasswordModal
        isOpen={showForgotPasswordModal}
        onClose={() => setShowForgotPasswordModal(false)}
        onBackToLogin={() => { setShowForgotPasswordModal(false); setShowLoginModal(true); }}
      />
    </div>
  );
}
