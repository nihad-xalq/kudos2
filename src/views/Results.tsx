interface Stat {
  id: number;
  title: string;
  titleColor: string;
  value: string;
}

const stats: Stat[] = [
  {
    id: 1,
    title: "People Helped",
    titleColor: "text-green-600",
    value: "2,500+",
  },
  {
    id: 2,
    title: "Communities Served",
    titleColor: "text-blue-600",
    value: "15",
  },
  {
    id: 3,
    title: "Funds Raised",
    titleColor: "text-purple-600",
    value: "$2.5M",
  },
  {
    id: 4,
    title: "Success Rate",
    titleColor: "text-orange-600",
    value: "95%",
  },
];

interface Achievement {
  id: number;
  title: string;
  description: string;
  progress: number;
  bgColor: string;
  progressText: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Community Education Initiative",
    description: "Successfully launched educational programs in 10 underserved communities, reaching over 1,000 students with improved learning resources.",
    progress: 100,
    bgColor: "bg-green-500",
    progressText: "Completed 2023",
  },
  {
    id: 2,
    title: "Healthcare Access Program",
    description: "Established mobile healthcare units serving 5 rural communities, providing essential medical services to over 500 families.",
    progress: 85,
    bgColor: "bg-blue-500",
    progressText: "In Progress",
  },
  {
    id: 3,
    title: "Environmental Conservation",
    description: "Planted 10,000 trees and implemented sustainable practices across 3 communities, reducing carbon footprint by 25%.",
    progress: 92,
    bgColor: "bg-purple-500",
    progressText: "Near Completion",
  },
];

interface TimelineItem {
  id: number;
  title: string;
  description: string;
  progress: number;
  bgColor: string;
  progressText: string;
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "2023 - Community Education Launch",
    description: "Successfully launched our flagship education program, reaching 1,000+ students across 10 communities with improved learning resources and technology access.",
    progress: 100,
    bgColor: "bg-green-100",
    progressText: "Completed 2023",
  },
  {
    id: 2,
    title: "2022 - Healthcare Initiative",
    description: "Established mobile healthcare units serving 5 rural communities, providing essential medical services to over 100 families.",
    progress: 5,
    bgColor: "bg-blue-100",
    progressText: "In Progress",
  },
  {
    id: 3,
    title: "2021 - Environmental Program",
    description: "Planted 10,000 trees and implemented sustainable practices across 3 communities, reducing carbon footprint by 25%.",
    progress: 92,
    bgColor: "bg-purple-100",
    progressText: "Near Completion",
  },
  {
    id: 4,
    title: "2020 - Organization Founded",
    description: "Established our organization with a clear vision to create sustainable positive impact in communities through innovative solutions and partnerships.",
    progress: 100,
    bgColor: "bg-red-100",
    progressText: "Completed 2020",
  },
];

const Results: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Our Impact & Results
            </h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Measurable outcomes that demonstrate our commitment to positive change
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 mx-auto">
            {
              stats.map((stat) => (
                <li key={stat.id} className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className={`text-4xl md:text-5xl font-bold ${stat.titleColor} mb-2`}>{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.title}</div>
                </li>
              ))
            }
          </ul>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milestones that showcase our dedication to creating lasting impact
            </p>
          </div>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
            {
              achievements.map((achievement) => (
                <li
                  key={achievement.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 relative">
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600">Progress</span>
                          <span className="text-lg font-bold text-slate-800">{achievement.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div className={`${achievement.bgColor} h-2 rounded-full`} style={{ width: `${achievement.progress}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{achievement.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {achievement.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {achievement.progressText}
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 mx-auto">
              A timeline of our major milestones and achievements
            </p>
          </div>
          <div className="mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

              {/* Timeline Items */}
              <ul className="space-y-8">
                {
                  timelineItems.map((item) => (
                    <li
                      key={item.id}
                      className="relative flex items-start w-full"
                    >
                      <div className={`absolute left-6 w-4 h-4 ${item.bgColor} rounded-full border-4 border-white shadow-lg`}></div>
                      <div className="ml-16">
                        <div className={`bg-green-50 p-6 rounded-lg border-l-4 ${item.bgColor}`}>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600 mb-2">
                            {item.description}
                          </p>
                          <div className="text-sm text-green-600 font-medium">{item.progressText}</div>
                        </div>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
