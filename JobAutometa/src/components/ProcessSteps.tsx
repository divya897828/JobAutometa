import { Button } from "./ui/button";
import { UserCircle, Settings, Sparkles, Send, Bell } from "lucide-react";

export function ProcessSteps() {
  const steps = [
    {
      icon: UserCircle,
      title: "Contact Us & Share Your Background",
      description: "Tell us about your experience, skills, and career goals. We understand what makes you unique.",
    },
    {
      icon: Settings,
      title: "Set Career Preferences",
      description: "Choose your target job titles, preferred locations, desired salary range, and work preferences.",
    },
    {
      icon: Sparkles,
      title: "We Tailor Everything",
      description: "Custom resumes and cover letters for every application, optimized for ATS and reviewed by experts.",
    },
    {
      icon: Send,
      title: "We Apply Automatically",
      description: "Every application is submitted on your behalf and tracked in your personal dashboard.",
    },
    {
      icon: Bell,
      title: "You Get Results",
      description: "Receive notifications about application status, responses, and interview invites in real-time.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            A simple, proven process that puts your job search on autopilot
          </p>
          <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg rounded-full">
            Contact Us
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Icon circle */}
                  <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 relative z-10 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="mb-3 text-lg">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Connection arrow - hidden on last item and mobile */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-sky-300 to-transparent -translate-x-4"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Callout Box */}
        <div className="mt-16 bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-3xl p-8 text-center">
          <p className="text-xl text-slate-800 leading-relaxed">
            <span className="text-sky-600">Every application is tracked</span>, every resume version is optimized, and <span className="text-sky-600">every detail is handled by experts</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
