import { Star } from "lucide-react";

const testimonials = [
  { name: "Lakshmi R.", role: "Software Engineer", company: "Now at Meta", content: "FAANG needs data structures and algorithms knowledge. Thanks to Roshni for optimizing my resume, I finally got interview calls. My OPT was about to expire, this saved me!" },
  { name: "Venkata", role: "Backend Developer", company: "Now at Stripe", content: "I tried consultancy but it did not work out for me. I contacted Arjun and joined them, they finally secured me a job in 4 months. Really grateful!" },
  { name: "Sneha D.", role: "DevOps Engineer", company: "Now at Netflix", content: "It was 2 months left to enter into my STEM-OPT. In 3 weeks I secured this job. I was so stressed about my visa status, thank you so much!" },
  { name: "Aditya Kulkarni", role: "QA Engineer", company: "Now at Salesforce", content: "Thanks for helping me out, I got 7 interviews out of which I got rejected in all of them, but finally I got the job. Never lost hope because of your support." },
  { name: "Kavya", role: "Product Designer", company: "Now at Notion", content: "It took me 5 months to get a job but genuinely I feel you are the best. As an F1 student, finding a company that sponsors is really hard. Thank you!" },
  { name: "Rohan Sharma", role: "Mobile Developer", company: "Now at Uber", content: "My STEM OPT got secured by them. Thank you! I was literally counting days before my status would expire." },
  { name: "Madhavi", role: "Security Engineer", company: "Now at Cloudflare", content: "I started getting interviews from week 1 but I landed my job after 3 months. Thank you for not giving up on me. The interview prep really helped!" },
  { name: "Rajesh P.", role: "Data Analyst", company: "Now at Snowflake", content: "Being on F1 visa, I was worried about finding companies that sponsor H1B. They helped me find the right companies and I got offer in 6 weeks. So relieved!" },
  { name: "Divya Chowdhury", role: "Database Administrator", company: "Now at Oracle", content: "I applied to so many companies by myself with no response. After joining them, my resume started getting noticed. Got this job in 2 months!" },
  { name: "Karan", role: "Machine Learning Engineer", company: "Now at OpenAI", content: "My OPT was running out and I was getting desperate. The team helped me prepare for ML interviews and I landed at OpenAI. Still can't believe it!" },
  { name: "Priya", role: "Software Developer", company: "Now at Intuit", content: "SDE roles are really competitive, to even land an interview is a big deal for us international students. Thank you for getting me multiple interviews!" },
  { name: "Suresh Kumar", role: "Site Reliability Engineer", company: "Now at DoorDash", content: "I was on my last month of OPT and panicking. They applied to 100+ companies for me and I got 3 offers. Chose DoorDash. Forever grateful!" },
  { name: "Anuradha", role: "GIS Analyst", company: "Now at Esri", content: "Finding GIS jobs that sponsor visa is super difficult. They knew exactly which companies to target. Got this job in my final OPT month!" },
  { name: "Vikram Reddy", role: "AI Solutions Engineer", company: "Now at Cresta", content: "The technical interview coaching was amazing. As F1 student, I needed to nail it in first try - no second chances with visa timeline. They helped me do exactly that!" },
  { name: "Anjali M.", role: "Full Stack Developer", company: "Now at Shopify", content: "I spent 4 months applying myself with zero interviews. Joined them and got offer in 5 weeks. The resume changes they made really worked!" },
  { name: "Arjun", role: "E-commerce Analyst", company: "Now at eBay", content: "My university career center couldn't help much with visa sponsorship questions. These guys understood F1 challenges and found companies that sponsor. Thank you!" },
  { name: "Pooja Joshi", role: "Frontend Developer", company: "Now at Vercel", content: "I was so stressed about my OPT deadline. They worked fast and got me interviews within 2 weeks. Landed at Vercel in less than a month!" },
  { name: "Sandeep", role: "Systems Analyst", company: "Now at IBM", content: "Finding entry-level roles that sponsor H1B seemed impossible. They knew which big companies were more open to sponsoring. Got IBM offer in 3 months!" },
  { name: "Priya Sharma", role: "IT Consultant", company: "Now at TCS", content: "I needed a job before my grace period ended. Got rejected many times but they kept applying for me. Finally got TCS offer. Very thankful!" },
  { name: "Rahul K.", role: "Data Engineer", company: "Now at Databricks", content: "The interview prep for data engineering was really helpful. They understood the pressure of being on OPT and worked with my timeline. Got job in 2 months!" },
  { name: "Meera", role: "Platform Engineer", company: "Now at Twilio", content: "As international student, salary negotiation felt scary - I just wanted any job. They helped me negotiate better offer and explained my worth. So grateful!" },
  { name: "Ravi", role: "Solutions Architect", company: "Now at Amazon", content: "I was drowning in rejections and my STEM OPT was ticking. They took over everything and I got Amazon offer in 4 months. Life changing!" },
  { name: "Shruti M.", role: "Data Scientist", company: "Now at Google", content: "Getting Google interview as F1 student felt impossible. The team prepared me for every round and I actually got the offer. Still processing this!" },
  { name: "Ashish Verma", role: "Cloud Engineer", company: "Now at Microsoft", content: "I had 60 days left on OPT when I joined them. They worked super fast, got me Microsoft interview in 3 weeks and offer in 6 weeks. Truly saved my visa status!" },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4">Success Stories</div>
        <h2 className="text-4xl sm:text-5xl mb-4">Real People, <span className="block bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Real Results</span></h2>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="flex gap-6 animate-scroll hover:pause-animation">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="flex-shrink-0 w-96 p-8 rounded-3xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">"{t.content}"</p>
              <div>
                <div className="text-slate-900">{t.name}</div>
                <div className="text-sm text-gray-600">{t.role}</div>
                <div className="text-sm text-sky-600">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(calc(-384px * 24 - 24px * 24)); } }
        .animate-scroll { animation: scroll 90s linear infinite; }
        .pause-animation:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
}
