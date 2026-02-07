import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Do you actually apply for me?",
      answer: "Yes! We handle the entire application process on your behalf. Our team uses your tailored resume and cover letter to submit applications to relevant job postings. You can track every application in your personal dashboard and receive notifications about status updates.",
    },
    {
      question: "Is my data safe?",
      answer: "Absolutely. We take data privacy seriously and comply with all major data protection regulations. Your personal information, resume, and application data are encrypted and stored securely. We never share your data with third parties without your explicit consent, and you maintain full control over your information.",
    },
    {
      question: "Can I upgrade later?",
      answer: "Yes, you can upgrade from Essential to Elite at any time. When you upgrade, you'll immediately gain access to all Elite features including dedicated career coaching, mock interviews, and personalized feedback. Your billing will be prorated accordingly.",
    },
    {
      question: "How many jobs will you apply to?",
      answer: "The number varies based on your profile and job market, but we focus on quality over quantity. We only apply to positions that genuinely match your skills, experience, and career goals. Our AI filters thousands of postings to find the best opportunities for you.",
    },
    {
      question: "What if I get an interview?",
      answer: "We notify you immediately when you receive an interview invitation. Essential plan users get interview preparation materials, while Elite plan users receive one-on-one coaching sessions, mock interviews, and personalized feedback to help you ace the interview.",
    },
    {
      question: "Are applications ATS-optimized?",
      answer: "Yes! Every resume and cover letter we create is optimized to pass Applicant Tracking Systems (ATS). Our AI analyzes job descriptions to extract key skills and requirements, and our expert team ensures proper formatting and keyword placement.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full mb-4">
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our service
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-2xl border border-slate-200 px-6 hover:border-sky-300 transition-colors"
            >
              <AccordionTrigger className="text-lg hover:text-sky-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
