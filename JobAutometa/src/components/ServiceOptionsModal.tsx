import { X, LayoutDashboard, Briefcase } from "lucide-react";
import { Button } from "./ui/button";

interface ServiceOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDashboard: () => void;
  onSelectFullService: () => void;
}

const CheckIcon = ({ className = "text-sky-500" }: { className?: string }) => (
  <svg className={`w-5 h-5 ${className} flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export function ServiceOptionsModal({ isOpen, onClose, onSelectDashboard, onSelectFullService }: ServiceOptionsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-slate-900 text-white p-6 rounded-t-2xl flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold mb-1">Choose Your Path</h2>
            <p className="text-slate-300 text-sm">Select the option that best fits your needs</p>
          </div>
          <button onClick={onClose} className="text-white hover:text-slate-300 transition-colors p-1" aria-label="Close">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Dashboard Access */}
            <div className="border-2 border-slate-200 rounded-xl p-6 hover:border-sky-300 transition-all bg-white">
              <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center mb-4">
                <LayoutDashboard className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Dashboard Access</h3>
              <p className="text-slate-600 text-sm mb-6">Register quickly to access our sponsored visa jobs dashboard</p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">What You Get:</h4>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5 text-slate-700 text-sm">
                    <CheckIcon />
                    <span>Access to sponsored visa job listings</span>
                  </li>
                </ul>
              </div>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-3 mb-6">
                <p className="text-sm text-slate-700">
                  <span className="font-semibold">Quick & Easy:</span> Sign up with Gmail or email in seconds
                </p>
              </div>
              <Button onClick={onSelectDashboard} className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-semibold">
                Register for Dashboard
              </Button>
            </div>

            {/* Full Service */}
            <div className="border-2 border-blue-600 rounded-xl p-6 hover:border-blue-700 transition-all bg-white relative">
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                MOST POPULAR
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Full Service</h3>
              <p className="text-slate-600 text-sm mb-6">Let our team handle your entire job search process</p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">What You Get:</h4>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5 text-slate-700 text-sm">
                    <CheckIcon className="text-blue-600" />
                    <span><strong>Resume optimization</strong> tailored for each job</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-slate-700 text-sm">
                    <CheckIcon className="text-blue-600" />
                    <span><strong>Automated job applications</strong> on your behalf</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-slate-700 text-sm">
                    <CheckIcon className="text-blue-600" />
                    <span><strong>Custom cover letters</strong> for every application</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-slate-700 text-sm">
                    <CheckIcon className="text-blue-600" />
                    <span><strong>Interview coaching</strong> and career guidance</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-slate-700 text-sm">
                    <CheckIcon className="text-blue-600" />
                    <span><strong>Dedicated support</strong> from our team</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
                <p className="text-sm text-slate-700">
                  <span className="font-semibold">Get Hired Faster:</span> We handle the hard work while you focus on interviews
                </p>
              </div>
              <Button onClick={onSelectFullService} className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-md">
                Get Full Service
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600">
              Not sure which option to choose? <a href="mailto:support@jobautometa.com" className="text-sky-600 hover:text-sky-700 font-semibold">Contact us</a> and we'll help you decide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
