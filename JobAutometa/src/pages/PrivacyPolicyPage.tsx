import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "../components/ui/button";

interface PrivacyPolicyPageProps {
  onNavigate: (page: "home" | "how-it-works" | "pricing" | "about" | "contact") => void;
}

export function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => onNavigate("home")}
            className="text-white hover:text-sky-200 mb-6 -ml-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-sky-500 p-3 rounded-lg">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-sky-200 text-lg">
            Last Updated: February 7, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 mb-8">
            We respect your privacy and are committed to protecting your personal information. 
            This policy explains what we collect and how we use it.
          </p>

          {/* What We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What We Collect</h2>
            <p className="text-slate-700 mb-3">When you use our services, we collect:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Your name, email, and phone number</li>
              <li>Your resume and job preferences</li>
              <li>Payment information (processed securely by our payment provider)</li>
              <li>Messages you send us</li>
            </ul>
          </section>

          {/* How We Use It */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>To apply to jobs on your behalf</li>
              <li>To customize your resumes and cover letters</li>
              <li>To track your applications and provide updates</li>
              <li>To provide interview coaching</li>
              <li>To process payments</li>
              <li>To communicate with you about our services</li>
            </ul>
          </section>

          {/* We Never Sell Your Data */}
          <section className="mb-8 bg-sky-50 border border-sky-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">We Never Sell Your Data</h2>
            <p className="text-slate-700">
              We will never sell, rent, or trade your personal information to third parties. Your data is used 
              exclusively to provide you with our job application services.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h2>
            <p className="text-slate-700 mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Access your personal data</li>
              <li>Request corrections to your data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing emails</li>
              <li>Cancel your service at any time</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
            <p className="text-slate-700">
              We use industry-standard security measures to protect your information, including encryption 
              and secure servers. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How Long We Keep Your Data</h2>
            <p className="text-slate-700">
              We keep your information for as long as you use our services. If you cancel your account, 
              we will delete your personal data within 30 days, unless required by law to retain it longer.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8 bg-slate-50 border border-slate-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Questions?</h2>
            <p className="text-slate-700 mb-2">
              If you have any questions about your privacy or this policy, contact us:
            </p>
            <p className="text-slate-700">
              <strong>Email:</strong> <a href="mailto:support@jobautometa.com" className="text-sky-600 hover:text-sky-700">support@jobautometa.com</a><br />
              <strong>Phone:</strong> <a href="tel:+15303661683" className="text-sky-600 hover:text-sky-700">(530) 366-1683</a>
            </p>
          </section>

          {/* Footer Note */}
          <div className="text-sm text-slate-500 border-t border-slate-200 pt-6 mt-8">
            <p>
              By using JobAutometa's services, you agree to this Privacy Policy. We may update this policy 
              from time to time, and will notify you of any significant changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
