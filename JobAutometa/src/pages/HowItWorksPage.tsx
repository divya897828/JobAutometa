import { Target, Sparkles, Send, BarChart3, Shield, CheckCircle, Users, Zap, Brain, ShieldCheck } from "lucide-react";
import { ProcessSteps } from "../components/ProcessSteps";
import { DashboardPreview } from "../components/DashboardPreview";
import { CTA } from "../components/CTA";

interface HowItWorksPageProps {
  onNavigate: (page: "home" | "how-it-works" | "pricing" | "about" | "contact" | "logo") => void;
}

export function HowItWorksPage({ onNavigate }: HowItWorksPageProps) {
  const steps = [
    {
      icon: Target,
      number: "01",
      title: "Profile Setup",
      description: "Share your resume, experience, skills, and career aspirations. We get to know what makes you unique and what you're looking for in your next role.",
      features: ["Upload your resume", "Set career goals", "Define preferences"],
    },
    {
      icon: Sparkles,
      number: "02",
      title: "Resume Tailoring",
      description: "Our AI and expert writers create multiple versions of your resume, each tailored for specific job types and industries, all optimized for ATS.",
      features: ["AI-powered customization", "Expert review", "ATS optimization"],
    },
    {
      icon: Send,
      number: "03",
      title: "Job Matching",
      description: "Our AI scans thousands of job postings daily, extracting key skills and requirements to find opportunities that perfectly match your profile.",
      features: ["Smart job filtering", "Relevance scoring", "Daily updates"],
    },
    {
      icon: Zap,
      number: "04",
      title: "Applications Sent",
      description: "We submit applications on your behalf with tailored resumes and cover letters. Every detail is verified before submission to ensure accuracy.",
      features: ["Automated submissions", "Quality checks", "Ethical practices"],
    },
    {
      icon: BarChart3,
      number: "05",
      title: "Dashboard Tracking",
      description: "Track every application in your personal dashboard. See company names, roles, dates, status updates, and response rates all in one place.",
      features: ["Real-time updates", "Status tracking", "Analytics insights"],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-sky-500/20 backdrop-blur-sm border border-sky-400/30 rounded-full mb-6">
            <span>Complete Process Breakdown</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6">
            How It Works
          </h1>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed">
            A detailed look at our proven workflow that combines AI technology with human expertise to automate your job search
          </p>
        </div>
      </section>

      {/* Process Steps Overview */}
      <ProcessSteps />

      {/* Step-by-Step Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icon and Number */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl flex items-center justify-center relative shadow-2xl">
                      <Icon className="w-16 h-16 text-white" />
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-200 shadow-lg">
                    <h3 className="text-3xl mb-4">{step.title}</h3>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {step.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-4 py-2 bg-sky-50 rounded-full border border-sky-200"
                        >
                          <CheckCircle className="w-4 h-4 text-sky-600" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Secret Sauce Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl mb-4">Our Secret Sauce</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The perfect combination of AI technology and human expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl mb-3">AI Scans Job Descriptions</h4>
              <p className="text-gray-600 text-lg">
                Our AI extracts key skills, requirements, and keywords from thousands of job postings daily.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl mb-3">Experts Refine Resumes</h4>
              <p className="text-gray-600 text-lg">
                Human career experts review and refine every resume to ensure ATS compatibility and professional quality.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl mb-3">Everything is Verified</h4>
              <p className="text-gray-600 text-lg">
                Before submission, we verify accuracy, check for errors, and ensure ethical compliance with all job boards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <DashboardPreview />

      {/* Platform Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-4">
              Why Our Process Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built on proven methodologies and powered by cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200">
              <Shield className="w-12 h-12 text-sky-600 mb-4" />
              <h3 className="text-2xl mb-3">Ethical & Transparent</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We never misrepresent your qualifications. Every application is truthful and submitted with your explicit consent.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200">
              <Users className="w-12 h-12 text-sky-600 mb-4" />
              <h3 className="text-2xl mb-3">Human-in-the-Loop</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                While AI does the heavy lifting, expert career coaches review and optimize every detail for maximum impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA onNavigate={onNavigate} />
    </>
  );
}
