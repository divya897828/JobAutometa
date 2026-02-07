import { useState } from "react";
import { X, Mail, Loader2, CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBackToLogin: () => void;
}

export function ForgotPasswordModal({ isOpen, onClose, onBackToLogin }: ForgotPasswordModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, type: "password-reset", message: `Password reset request for: ${email}` }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setEmail("");
          onClose();
        }, 5000);
      } else {
        setError("Failed to send reset link. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToLogin = () => {
    setEmail("");
    setError("");
    setIsSuccess(false);
    onClose();
    onBackToLogin();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white p-6 rounded-t-2xl flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Reset Password</h2>
            <p className="text-slate-300 text-sm mt-1">{isSuccess ? "Check your email" : "We'll send you a reset link"}</p>
          </div>
          <button onClick={onClose} className="text-white hover:text-slate-300 transition-colors p-1" aria-label="Close">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            /* Success State */
            <div className="flex flex-col items-center justify-center py-8 gap-4">
              <div className="rounded-full bg-green-100 p-4">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Email Sent!</h3>
              <p className="text-slate-600 text-center px-4">
                We've sent a password reset link to <strong>{email}</strong>. Please check your inbox and spam folder.
              </p>
              <Button onClick={handleBackToLogin} className="mt-4 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white rounded-lg px-8">
                Back to Login
              </Button>
            </div>
          ) : (
            /* Form State */
            <>
              <p className="text-slate-600 text-sm mb-6">Enter your email address and we'll send you a link to reset your password.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="reset-email" className="text-slate-700">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input id="reset-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="pl-10 border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}

                <Button type="submit" disabled={isSubmitting} className="w-full py-6 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white rounded-lg font-semibold">
                  {isSubmitting ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" />Sending Reset Link...</> : "Send Reset Link"}
                </Button>

                <button type="button" onClick={handleBackToLogin} className="w-full flex items-center justify-center gap-2 text-sm text-slate-600 hover:text-sky-600 font-medium py-3">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Login
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-xs text-slate-500 text-center">
                  Having trouble? <a href="mailto:support@jobautometa.com" className="text-sky-600 hover:text-sky-700 font-semibold">Contact Support</a>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
