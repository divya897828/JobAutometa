import { Sparkles, Send, Users } from "lucide-react";

const features = [
  { icon: Sparkles, title: "AI + Expert Tailoring", description: "Every job gets a personalized resume & cover letter optimized for ATS and tailored by human experts.", gradient: "from-sky-500 to-blue-600" },
  { icon: Send, title: "End-to-End Job Application", description: "We apply on your behalf, track everything in your dashboard, and notify you of every update.", gradient: "from-sky-600 to-blue-600" },
  { icon: Users, title: "Dedicated Support", description: "Get personal strategy guidance, interview preparation, and expert career coaching to help you succeed.", gradient: "from-blue-600 to-blue-700" },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">The perfect blend of technology and human expertise for your career success</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="group p-8 rounded-3xl bg-gradient-to-b from-gray-50 to-white border border-gray-200 hover:border-sky-300 hover:shadow-2xl transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
