import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTAProps {
  onNavigate?: (page: "contact") => void;
  onGetStarted: () => void;
}

const CheckIcon = () => (
  <svg className="w-5 h-5 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export function CTA({ onNavigate, onGetStarted }: CTAProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/20 backdrop-blur-sm border border-sky-400/30 mb-6">
          <Sparkles className="w-4 h-4 text-sky-400" />
          <span>Start Your Journey Today</span>
        </div>
        <h2 className="text-4xl sm:text-5xl mb-6">Ready to Land Your Dream Job?</h2>
        <p className="text-xl mb-8 text-sky-100">Join thousands of successful job seekers who automated their applications and 10x'd their interview rate.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button size="lg" onClick={onGetStarted} className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-6 text-lg group rounded-full">
            Get Started Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => onNavigate?.("contact")} className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm px-8 py-6 text-lg rounded-full">
            Contact Us
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-sky-200">
          <div className="flex items-center gap-2"><CheckIcon /><span>No commitment required</span></div>
          <div className="flex items-center gap-2"><CheckIcon /><span>Get started in 5 minutes</span></div>
          <div className="flex items-center gap-2"><CheckIcon /><span>Cancel anytime</span></div>
        </div>
      </div>
    </section>
  );
}
