const stats = [
  { number: "50K+", label: "Applications Submitted", subtext: "On behalf of our users" },
  { number: "87%", label: "Success Rate", subtext: "Users land interviews" },
  { number: "40hrs", label: "Time Saved", subtext: "Per user, every week" },
  { number: "4.4/5", label: "User Rating", subtext: "From 150 reviews" },
];

export function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl sm:text-5xl mb-2 bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">{stat.number}</div>
              <div className="text-xl mb-1">{stat.label}</div>
              <div className="text-sm text-sky-200">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
