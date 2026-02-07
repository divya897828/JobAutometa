import { X, Mail, Lock, User, Loader2, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

interface DashboardRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

export function DashboardRegistrationModal({ isOpen, onClose }: DashboardRegistrationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "" });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ firstName: "", lastName: "", email: "", password: "" });
    }, 2000);
  };

  const handleGoogleSignIn = () => {
    alert("Google Sign-In will be implemented. For now, please use email registration.");
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-sky-600 to-blue-600 text-white p-6 rounded-t-3xl flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-1">Register for Dashboard</h2>
            <p className="text-sky-100 text-sm">Access sponsored visa jobs instantly</p>
          </div>
          <button onClick={handleClose} className="text-white hover:text-sky-200 transition-colors p-2" aria-label="Close">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Success State */}
        {isSuccess ? (
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-3">Welcome Aboard! 🎉</h3>
            <p className="text-lg text-slate-700 mb-6">Your account has been created successfully.</p>
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 mb-6">
              <p className="text-slate-700 font-medium">Next Steps:</p>
              <ul className="text-left text-sm text-slate-600 mt-2 space-y-1">
                <li>✓ Check your email to verify your account</li>
                <li>✓ Log in to access your dashboard</li>
                <li>✓ Start browsing sponsored visa jobs</li>
              </ul>
            </div>
            <Button onClick={handleClose} className="w-full py-4 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white rounded-full">
              Got It!
            </Button>
          </div>
        ) : (
          <div className="p-8">
            {/* Google Sign-In */}
            <Button type="button" onClick={handleGoogleSignIn} className="w-full py-4 bg-white hover:bg-gray-50 text-slate-900 border-2 border-slate-300 rounded-full mb-6 flex items-center justify-center gap-3">
              <GoogleIcon />
              <span className="font-semibold">Continue with Google</span>
            </Button>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-slate-500">Or register with email</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">First Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input type="text" name="firstName" placeholder="John" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="pl-10 rounded-xl border-slate-300" required disabled={isSubmitting} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Last Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input type="text" name="lastName" placeholder="Doe" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="pl-10 rounded-xl border-slate-300" required disabled={isSubmitting} />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <Input type="email" name="email" placeholder="your.email@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="pl-10 rounded-xl border-slate-300" required disabled={isSubmitting} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Password *</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <Input type="password" name="password" placeholder="Create a strong password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="pl-10 rounded-xl border-slate-300" required minLength={8} disabled={isSubmitting} />
                </div>
                <p className="text-xs text-slate-500 mt-1">Must be at least 8 characters</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-3 text-xs text-slate-600">
                By registering, you agree to our <a href="#" className="text-sky-600 hover:text-sky-700 font-medium">Terms of Service</a> and <a href="#" className="text-sky-600 hover:text-sky-700 font-medium">Privacy Policy</a>.
              </div>

              <Button type="submit" className="w-full py-4 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white rounded-full font-semibold" disabled={isSubmitting}>
                {isSubmitting ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" />Creating Account...</> : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-slate-600">
              Already have an account? <a href="#" className="text-sky-600 hover:text-sky-700 font-semibold">Sign In</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
