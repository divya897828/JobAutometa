import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export function DashboardPreview() {
  const applications = [
    {
      candidateId: "CND-2847",
      company: "Google",
      role: "Senior Software Engineer",
      date: "Oct 24, 2025",
      status: "Interview Scheduled",
      statusColor: "bg-sky-100 text-sky-700 border-sky-200",
    },
    {
      candidateId: "CND-5193",
      company: "Home Depot",
      role: "SDE-1",
      date: "Oct 23, 2025",
      status: "Under Review",
      statusColor: "bg-blue-100 text-blue-700 border-blue-200",
    },
    {
      candidateId: "CND-2847",
      company: "Amazon",
      role: "Data Scientist",
      date: "Oct 22, 2025",
      status: "Application Sent",
      statusColor: "bg-slate-100 text-slate-700 border-slate-200",
    },
    {
      candidateId: "CND-5193",
      company: "Meta",
      role: "Backend Engineer",
      date: "Oct 21, 2025",
      status: "Interview Scheduled",
      statusColor: "bg-sky-100 text-sky-700 border-sky-200",
    },
    {
      candidateId: "CND-2847",
      company: "Shield Healthcare",
      role: "Data Engineer",
      date: "Oct 20, 2025",
      status: "Application Sent",
      statusColor: "bg-slate-100 text-slate-700 border-slate-200",
    },
    {
      candidateId: "CND-5193",
      company: "Intuit",
      role: "iOS Developer",
      date: "Oct 19, 2025",
      status: "Under Review",
      statusColor: "bg-blue-100 text-blue-700 border-blue-200",
    },
    {
      candidateId: "CND-2847",
      company: "Salesforce",
      role: "Full Stack Developer",
      date: "Oct 18, 2025",
      status: "Application Sent",
      statusColor: "bg-slate-100 text-slate-700 border-slate-200",
    },
    {
      candidateId: "CND-5193",
      company: "Transamerica",
      role: "Business Analyst",
      date: "Oct 17, 2025",
      status: "Interview Scheduled",
      statusColor: "bg-sky-100 text-sky-700 border-sky-200",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full mb-4">
            Dashboard Preview
          </div>
          <h2 className="text-4xl sm:text-5xl mb-4">
            Track Every Application
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Monitor your job search progress in real-time with our intuitive dashboard
          </p>
        </div>

        <Card className="max-w-5xl mx-auto p-4 sm:p-8 bg-white rounded-3xl shadow-2xl border border-slate-200">
          {/* Dashboard Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-6 border-b border-slate-200 gap-6">
            <div>
              <h3 className="text-2xl mb-2">Applications</h3>
              <p className="text-gray-600">Tracking your job search progress</p>
            </div>
            <div className="flex gap-4 sm:gap-6 w-full sm:w-auto justify-between sm:justify-end">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl text-sky-600">156</div>
                <div className="text-xs sm:text-sm text-gray-600">Total Applied</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl text-blue-600">28</div>
                <div className="text-xs sm:text-sm text-gray-600">Interviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl text-slate-700">18%</div>
                <div className="text-xs sm:text-sm text-gray-600">Response Rate</div>
              </div>
            </div>
          </div>

          {/* Applications Table - Desktop */}
          <div className="hidden lg:block space-y-3">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 px-4 py-2 text-sm text-gray-600 border-b border-slate-100">
              <div>Candidate ID</div>
              <div>Company</div>
              <div>Role</div>
              <div>Date Applied</div>
              <div>Status</div>
            </div>

            {/* Table Rows */}
            {applications.map((app, index) => (
              <div
                key={index}
                className="grid grid-cols-5 gap-4 px-4 py-4 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
              >
                <div className="flex items-center">
                  <span className="text-sm text-sky-600">{app.candidateId}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center text-white">
                    {app.company[0]}
                  </div>
                  <span className="group-hover:text-sky-600 transition-colors">{app.company}</span>
                </div>
                <div className="flex items-center text-gray-700">{app.role}</div>
                <div className="flex items-center text-gray-600 text-sm">{app.date}</div>
                <div className="flex items-center">
                  <Badge className={`${app.statusColor} border`}>
                    {app.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          {/* Applications Cards - Mobile/Tablet */}
          <div className="lg:hidden space-y-4">
            {applications.map((app, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border border-slate-200 hover:border-sky-300 hover:bg-slate-50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center text-white">
                      {app.company[0]}
                    </div>
                    <div>
                      <div className="text-gray-900">{app.company}</div>
                      <div className="text-sm text-sky-600">{app.candidateId}</div>
                    </div>
                  </div>
                  <Badge className={`${app.statusColor} border text-xs`}>
                    {app.status}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <div className="text-gray-700">{app.role}</div>
                  <div className="text-sm text-gray-500">{app.date}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
