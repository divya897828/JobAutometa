import { Button } from "../components/ui/button";
import { Check, X } from "lucide-react";
import { FAQ } from "../components/FAQ";
import { CTA } from "../components/CTA";

interface PricingPageProps {
  onNavigate: (page: "home" | "how-it-works" | "pricing" | "about" | "contact" | "logo") => void;
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  const features = [
    "Resume building & expert tailoring",
    "Tailored cover letters",
    "Job applications done for you",
    "Dedicated job strategy support",
    "ATS-friendly optimization",
    "Email notifications & tracking",
    "Dedicated interview & career coaches",
    "Personalized mock interviews (Pramp-style)",
    "Feedback & body language guidance",
    "Resume deep-dive sessions",
    "One-on-one coaching support",
  ];

  const essentialFeatures = [true, true, true, true, true, true, false, false, false, false, false];
  const eliteFeatures = [true, true, true, true, true, true, true, true, true, true, true];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-sky-500/20 backdrop-blur-sm border border-sky-400/30 rounded-full mb-6">
            <span>Transparent Pricing</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6">
            Choose Your Path to Success
          </h1>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed">
            Two plans. One goal: your career growth. All plans include everything you need to land your dream job.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl mb-6">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Two plans. One goal: your career growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Essential Plan */}
            <div className="rounded-3xl border-2 border-slate-200 p-8 bg-white hover:shadow-xl transition-shadow">
              <div className="text-center mb-8">
                <h3 className="text-3xl mb-4">Essential</h3>
                <p className="text-gray-600">Perfect for getting started</p>
              </div>

              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {essentialFeatures[index] ? (
                      <Check className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={essentialFeatures[index] ? "text-gray-800" : "text-gray-400"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => onNavigate("contact")}
                className="w-full py-6 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-lg"
              >
                Start with Essential
              </Button>
            </div>

            {/* Elite Plan */}
            <div className="rounded-3xl border-2 border-sky-400 p-8 bg-gradient-to-b from-sky-50 to-white relative hover:shadow-2xl transition-shadow">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-600 to-blue-600 text-white px-6 py-2 rounded-full">
                Recommended
              </div>

              <div className="text-center mb-8">
                <h3 className="text-3xl mb-4">Elite</h3>
                <p className="text-gray-600">Everything + Career Coaching</p>
              </div>

              <ul className="space-y-4 mb-8">
                {features.slice(0, 6).map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{feature}</span>
                  </li>
                ))}
                <li className="pt-4 border-t border-gray-200">
                  <p className="text-sky-700 mb-3">Everything in Essential, plus:</p>
                </li>
                {features.slice(6).map((feature, index) => (
                  <li key={index + 6} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => onNavigate("contact")}
                className="w-full py-6 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white rounded-full text-lg"
              >
                Go Elite + Get a Career Coach
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      <CTA onNavigate={onNavigate} />
    </>
  );
}
