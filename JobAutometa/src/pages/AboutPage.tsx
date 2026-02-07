import { Target, Eye, Heart, Award, TrendingUp, Shield, Users, Sparkles } from "lucide-react";
import { CTA } from "../components/CTA";

interface AboutPageProps {
  onNavigate: (page: "home" | "how-it-works" | "pricing" | "about" | "contact" | "logo") => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To automate the repetitive job application process so professionals can focus on growth, not forms.",
      color: "from-sky-500 to-blue-600",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "A world where every candidate gets the attention their profile deserves.",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: Heart,
      title: "Values",
      description: "Transparency, privacy, ethics, and empowerment guide everything we do.",
      color: "from-sky-600 to-blue-600",
    },
  ];

  const expertTeams = [
    {
      icon: Users,
      title: "Interview Specialists",
      count: "4+",
      description: "Former tech recruiters and hiring managers from FAANG companies who know exactly what interviewers look for.",
      color: "from-sky-500 to-blue-600",
    },
    {
      icon: Award,
      title: "Resume Writers",
      count: "6+",
      description: "Certified professional resume writers with expertise in ATS optimization and industry-specific tailoring.",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: Sparkles,
      title: "AI Engineers",
      count: "3+",
      description: "Machine learning experts who built our intelligent matching algorithms and automated application systems.",
      color: "from-indigo-600 to-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Career Coaches",
      count: "2+",
      description: "Experienced career strategists dedicated to helping you navigate your professional journey from start to finish.",
      color: "from-sky-600 to-blue-600",
    },
  ];

  const stats = [
    { number: "24/7", label: "Active Automation" },
    { number: "50K+", label: "Applications Sent" },
    { number: "87%", label: "Interview Rate" },
    { number: "15+", label: "Expert Specialists" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-sky-500/20 backdrop-blur-sm border border-sky-400/30 rounded-full mb-6">
            <span>Our Story</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6">
            We're redefining how
            <span className="block bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent pb-2">
              job seekers apply
            </span>
          </h1>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed">
            We believe the job application process is broken. It's time-consuming, repetitive, and keeps talented professionals from focusing on what really matters: their growth and interview preparation.
          </p>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl mb-2 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
              <h2 className="text-3xl mb-4">The Problem</h2>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-slate-600">❌</span>
                  <span>Job seekers spend 40+ hours per week just applying to jobs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-600">❌</span>
                  <span>Each application requires tailoring resumes and cover letters</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-600">❌</span>
                  <span>90% of applications get filtered out by ATS systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-600">❌</span>
                  <span>Less time for skill development and interview preparation</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200">
              <h2 className="text-3xl mb-4">Our Solution</h2>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-sky-600">✓</span>
                  <span>We apply to jobs for you, saving 40+ hours per week</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-600">✓</span>
                  <span>AI + expert writers tailor every resume and cover letter</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-600">✓</span>
                  <span>100% ATS-optimized applications with 87% interview rate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-600">✓</span>
                  <span>Focus on growth, learning, and acing interviews</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl mb-4">{value.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expert Teams Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-4">Powered by Expert Specialists</h2>
            <p className="text-xl text-gray-600">
              A dedicated team of professionals working behind the scenes to accelerate your career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertTeams.map((team, index) => {
              const Icon = team.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-3xl bg-gradient-to-b from-slate-50 to-white border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all group"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${team.color} rounded-2xl mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                      {team.count}
                    </div>
                    <h4 className="text-xl mb-3">{team.title}</h4>
                  </div>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {team.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-4">Our Core Principles</h2>
            <p className="text-xl text-gray-600">
              The values that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200">
              <Shield className="w-12 h-12 text-sky-600 mb-4" />
              <h3 className="text-2xl mb-3">Ethical & Transparent</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We never misrepresent your qualifications or submit false information. Every application is truthful, accurate, and submitted with your explicit consent. We comply with all job board policies and data protection regulations.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200">
              <Users className="w-12 h-12 text-sky-600 mb-4" />
              <h3 className="text-2xl mb-3">Human-Centered</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                While AI does the heavy lifting, real career experts review every detail. We believe in combining technology's efficiency with human expertise's nuance and empathy.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200">
              <Sparkles className="w-12 h-12 text-sky-600 mb-4" />
              <h3 className="text-2xl mb-3">Quality Over Quantity</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We don't just spam applications everywhere. We carefully match you with relevant opportunities and ensure every application is perfectly tailored and professionally presented.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200">
              <TrendingUp className="w-12 h-12 text-sky-600 mb-4" />
              <h3 className="text-2xl mb-3">Long-Term Success</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We're not just about getting you any job. We're about helping you build a thriving career. Our coaching and support continue beyond the application process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics & Legal Statement */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Shield className="w-16 h-16 mx-auto mb-6 text-sky-400" />
          <h2 className="text-3xl mb-6">Our Commitment to Ethics & Transparency</h2>
          <p className="text-lg text-sky-100 leading-relaxed mb-6">
            We operate with complete transparency and comply with all job board policies and data protection regulations (GDPR, CCPA). Your privacy is paramount, and we never misrepresent your qualifications.
          </p>
          <p className="text-lg text-sky-100 leading-relaxed">
            Every application is truthful, accurate, and submitted with your explicit consent. We believe in ethical job searching that benefits both candidates and employers.
          </p>
        </div>
      </section>

      <CTA onNavigate={onNavigate} />
    </>
  );
}
