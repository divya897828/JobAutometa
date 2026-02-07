import { Target, Zap, Shield, Clock, TrendingUp, Bell } from "lucide-react";

const features = [
  { icon: Target, title: "Precision Matching", description: "AI analyzes thousands of job postings to find roles that truly match your skills and career goals." },
  { icon: Zap, title: "Instant Applications", description: "Apply to hundreds of jobs in minutes, not months. Our automation works 24/7 on your behalf." },
  { icon: Shield, title: "ATS-Optimized", description: "Every resume and cover letter is tailored and optimized to pass Applicant Tracking Systems." },
  { icon: Clock, title: "Save 40+ Hours/Week", description: "Stop wasting time on repetitive applications. Use that time to upskill and prepare for interviews." },
  { icon: TrendingUp, title: "Smart Analytics", description: "Track application success rates, response times, and optimize your job search strategy with data." },
  { icon: Bell, title: "Real-Time Updates", description: "Get instant notifications about application status, interview invitations, and hiring decisions." },
];

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full mb-4">Features</div>
          <h2 className="text-4xl sm:text-5xl mb-4">Why Top Job Seekers <span className="block bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Choose Us</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Combining cutting-edge AI with human expertise to give you an unfair advantage.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="p-8 rounded-3xl border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 bg-white group">
                <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="mb-3 text-xl">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
