import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "../components/ui/button";

interface TermsOfServicePageProps {
  onNavigate: (page: "home" | "how-it-works" | "pricing" | "about" | "contact") => void;
}

export function TermsOfServicePage({ onNavigate }: TermsOfServicePageProps) {
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
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold">Terms of Service</h1>
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
            By using JobAutometa, you agree to these terms. Please read them carefully.
          </p>

          {/* What We Do */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What We Do</h2>
            <p className="text-slate-700 mb-3">JobAutometa helps you find jobs by:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Applying to jobs on your behalf with your approval</li>
              <li>Customizing your resume and cover letter for each application</li>
              <li>Tracking your job applications</li>
              <li>Providing interview coaching and career support</li>
            </ul>
          </section>

          {/* Your Responsibilities */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Provide accurate and truthful information</li>
              <li>Review and approve job applications we submit</li>
              <li>Respond to interview requests promptly</li>
              <li>Pay for services on time</li>
              <li>Don't misuse our services or violate any laws</li>
            </ul>
          </section>

          {/* No Guarantees */}
          <section className="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Important: No Job Guarantees</h2>
            <p className="text-slate-700">
              We work hard to help you land a job, but we cannot guarantee you will get hired. Job offers 
              depend on many factors including your qualifications, market conditions, and employer decisions. 
              We do our best, but results vary.
            </p>
          </section>

          {/* Payment */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Payment & Cancellation</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Payments are processed securely through our payment provider</li>
              <li>Subscriptions renew automatically unless you cancel</li>
              <li>You can cancel anytime from your account</li>
              <li>Refunds are handled on a case-by-case basis within 30 days</li>
              <li>No refunds for partial months</li>
            </ul>
          </section>

          {/* Your Data */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Data</h2>
            <p className="text-slate-700 mb-3">
              You own your data. We use it only to provide our services. By using JobAutometa:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>You give us permission to submit applications on your behalf</li>
              <li>You allow us to customize your resume for job applications</li>
              <li>You can request your data or delete your account anytime</li>
            </ul>
          </section>

          {/* Prohibited Activities */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What's Not Allowed</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Providing false information on your resume or applications</li>
              <li>Applying to jobs you're not qualified for</li>
              <li>Sharing your account with others</li>
              <li>Using our service for illegal purposes</li>
              <li>Reverse engineering or copying our service</li>
            </ul>
          </section>

          {/* Liability */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
            <p className="text-slate-700">
              JobAutometa is not responsible for employer decisions, job offers, interview outcomes, 
              or any indirect damages. Our liability is limited to the amount you paid for our services.
            </p>
          </section>

          {/* Changes */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to Terms</h2>
            <p className="text-slate-700">
              We may update these terms from time to time. We'll notify you of significant changes. 
              Continuing to use our service after changes means you accept the new terms.
            </p>
          </section>

          {/* Termination */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Termination</h2>
            <p className="text-slate-700">
              You can cancel your account anytime. We may suspend or terminate your account if you 
              violate these terms, provide false information, or engage in prohibited activities.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8 bg-slate-50 border border-slate-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Questions?</h2>
            <p className="text-slate-700 mb-2">
              If you have questions about these terms, contact us:
            </p>
            <p className="text-slate-700">
              <strong>Email:</strong> <a href="mailto:support@jobautometa.com" className="text-sky-600 hover:text-sky-700">support@jobautometa.com</a><br />
              <strong>Phone:</strong> <a href="tel:+15303661683" className="text-sky-600 hover:text-sky-700">(530) 366-1683</a>
            </p>
          </section>

          {/* Footer Note */}
          <div className="text-sm text-slate-500 border-t border-slate-200 pt-6 mt-8">
            <p>
              By using JobAutometa, you agree to these Terms of Service. These terms constitute a 
              legally binding agreement between you and JobAutometa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
