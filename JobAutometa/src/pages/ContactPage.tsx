import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Mail, Phone, Clock, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";

export function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Formspree endpoint - using the endpoint you provided
      const response = await fetch("https://formspree.io/f/xaqdypzy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          _replyto: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          _subject: `Contact Form: ${formData.subject}`,
        })
      });

      const result = await response.json();
      
      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert("Something went wrong. Please try again or email us directly at support@jobautometa.com");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again or email us directly at support@jobautometa.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-sky-500/20 backdrop-blur-sm border border-sky-400/30 rounded-full mb-6">
            <span>Get In Touch</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6">
            Have questions?
            <span className="block bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              Let's chat.
            </span>
          </h1>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team to see how we can help accelerate your job search.
          </p>
        </div>
      </section>

      {/* Success Message */}
      {isSubmitted ? (
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 border-2 border-sky-300 rounded-3xl p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl mb-4">Thank You for Reaching Out!</h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                We've received your message and will respond within 24 hours.
              </p>
              <div className="bg-white rounded-2xl p-6 border border-sky-200 mb-6">
                <p className="text-lg text-gray-700 mb-3">
                  If we don't respond within 24 hours, please call us at:
                </p>
                <a
                  href="tel:+15303661683"
                  className="text-2xl text-sky-600 hover:text-sky-700"
                >
                  (530) 366-1683
                </a>
              </div>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-8 py-4 rounded-full"
              >
                Send Another Message
              </Button>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Contact Form & Options */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl">
                  <h2 className="text-3xl mb-6">Send us a message</h2>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm mb-2 text-slate-700">First Name</label>
                        <Input
                          type="text"
                          name="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border-slate-300"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-2 text-slate-700">Last Name</label>
                        <Input
                          type="text"
                          name="lastName"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border-slate-300"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-slate-700">Email Address</label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border-slate-300"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-slate-700">Phone Number</label>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border-slate-300"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-slate-700">Subject</label>
                      <Input
                        type="text"
                        name="subject"
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border-slate-300"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-slate-700">Message</label>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your career goals and how we can help you land your dream job..."
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border-slate-300"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full py-6 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white rounded-full text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-3xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl mb-3">Email Us Directly</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Prefer email? Reach out to us directly and we'll respond within 24 hours:
                </p>
                <a
                  href="mailto:support@jobautometa.com"
                  className="text-sky-600 hover:text-sky-700 text-lg"
                >
                  support@jobautometa.com
                </a>
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-3xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl mb-3">Call Us</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Talk to our team directly. We're here to help:
                </p>
                <a
                  href="tel:+15303661683"
                  className="text-sky-600 hover:text-sky-700 text-lg"
                >
                  (530) 366-1683
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
      )}

      {/* Contact Information */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-4">Other Ways to Reach Us</h2>
            <p className="text-xl text-gray-600">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-8 rounded-3xl bg-white border border-slate-200">
              <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">Talk to our team directly</p>
              <a href="tel:+15303661683" className="text-sky-600 hover:text-sky-700 text-lg">
                (530) 366-1683
              </a>
            </div>

            <div className="text-center p-8 rounded-3xl bg-white border border-slate-200">
              <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl mb-2">Business Hours</h3>
              <p className="text-gray-600 mb-4">We're here to help</p>
              <p className="text-sky-600">Mon-Fri: 9am - 6pm<br />Sat-Sun: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Looking for Quick Answers?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Check out our FAQ page for instant answers to common questions
          </p>
          <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full">
            View FAQ
          </Button>
        </div>
      </section>
    </>
  );
}