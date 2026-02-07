import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Loader2, Upload, CheckCircle2 } from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", service: "", extraInfo: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const form = new FormData(e.currentTarget);
      // include reply-to and subject so Formspree forwards and replies correctly
      form.append("_replyto", form.get("email") as string || "");
      form.append("_subject", `New Registration: ${form.get("firstName") || ""} ${form.get("lastName") || ""}`);

      const response = await fetch("https://formspree.io/f/xaqdypzy", {
        method: "POST",
        body: form,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", extraInfo: "" });
          setFileName("");
          onClose();
        }, 3000);
      } else {
        alert("There was an error. Please try again.");
      }
    } catch (error) {
      alert("There was an error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-slate-900">Get Started with JobAutometa</DialogTitle>
          <DialogDescription className="text-slate-600">Fill out the form below and we'll get in touch with you shortly.</DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-12 gap-4">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-2xl text-slate-900">Registration Successful!</h3>
            <p className="text-slate-600 text-center">Thank you for registering. We'll be in touch with you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
                <Input id="firstName" name="firstName" required pattern="^[A-Za-z\s\-']{2,50}$" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
                <Input id="lastName" name="lastName" required pattern="^[A-Za-z\s\-']{2,50}$" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
              <Input id="email" name="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john.doe@example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
              <Input id="phone" name="phone" type="tel" required pattern="^[0-9]{10}$" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="5551234567" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">What services are you looking for? <span className="text-red-500">*</span></Label>
              <Select name="service" required value={formData.service} onValueChange={(v) => setFormData({ ...formData, service: v })}>
                <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="resume-optimization">Resume Optimization</SelectItem>
                  <SelectItem value="full-time-application-support">Full Time Application Support</SelectItem>
                  <SelectItem value="career-guidance">Career Guidance</SelectItem>
                  <SelectItem value="interview-prep">Interview Prep</SelectItem>
                  <SelectItem value="linkedin-guidance">LinkedIn Guidance</SelectItem>
                  <SelectItem value="networking-guidance">Networking Guidance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="extraInfo">Any extra info? <span className="text-slate-500">(Optional)</span></Label>
              <Textarea id="extraInfo" name="extraInfo" value={formData.extraInfo} onChange={(e) => setFormData({ ...formData, extraInfo: e.target.value })} placeholder="Tell us anything else..." rows={4} maxLength={1000} className="resize-none" />
              <p className="text-xs text-slate-500 text-right">{formData.extraInfo.length}/1000 characters</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="resume">Attach Resume <span className="text-slate-500">(Optional)</span></Label>
              <input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" onChange={(e) => setFileName(e.target.files?.[0]?.name || "")} className="hidden" />
              <label htmlFor="resume" className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:border-sky-500 hover:bg-sky-50 transition-colors">
                <Upload className="w-5 h-5 text-slate-500" />
                <span className="text-slate-600">{fileName || "Click to upload resume (PDF, DOC, DOCX)"}</span>
              </label>
              {fileName && <p className="text-sm text-green-600 flex items-center gap-1"><CheckCircle2 className="w-4 h-4" />{fileName}</p>}
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" disabled={isSubmitting} className="flex-1 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white py-6 rounded-full">
                {isSubmitting ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" />Submitting...</> : "Submit"}
              </Button>
              <Button type="button" variant="outline" onClick={onClose} className="border-slate-300 text-slate-700 hover:bg-slate-100 rounded-full px-8" disabled={isSubmitting}>
                Cancel
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
