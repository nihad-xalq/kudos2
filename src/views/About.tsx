import Image from 'next/image';

interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
}

interface Value {
  id: number;
  title: string;
  description: string;
}

interface Stat {
  id: number;
  title: string;
  value: string;
}

const members: Member[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Founder & CEO",
    image: "/images/founders/founder1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Chief Operations Officer",
    image: "/images/founders/founder2.jpg",
  },
];

const values: Value[] = [
  {
    id: 1,
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies to create solutions that address real-world challenges.",
  },
  {
    id: 2,
    title: "Collaboration",
    description: "We believe in the power of partnerships and work closely with communities, organizations, and individuals to achieve shared goals.",
  },
  {
    id: 3,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from our processes to our outcomes, ensuring quality and reliability.",
  },
  {
    id: 4,
    title: "Sustainability",
    description: "We are committed to creating long-term solutions that are environmentally friendly and socially responsible.",
  },
];

const stats: Stat[] = [
  {
    id: 1,
    title: "Years of Impact",
    value: "5+",
  },
  {
    id: 2,
    title: "Lives Changed",
    value: "1000+",
  },
  {
    id: 3,
    title: "Projects Completed",
    value: "100+",
  },
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              About Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Empowering communities through innovation, collaboration, and sustainable impact
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className=" mx-auto px-4">
          <div className="mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Building a Better Future
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Founded with a vision to create meaningful change, we&apos;ve been at the forefront
                  of community development and social innovation. Our journey began with a simple
                  belief: that technology and human compassion can work together to solve the
                  world&apos;s most pressing challenges.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, we continue to push boundaries, foster partnerships, and deliver
                  solutions that make a real difference in people&apos;s lives.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl grid grid-cols-3 items-center justify-center gap-4">
                {stats.map((stat) => (
                  <div key={stat.id} className="text-center">
                    <div className="text-6xl font-bold text-purple-600 mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 mx-auto">
            {
              values.map((value) => (
                <div key={value.id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals driving our mission forward
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {members.map((member) => (
              <div key={member.id} className="text-center group bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative w-full h-80 mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="px-6 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Visionary leader with 15+ years of experience in social innovation
                    and community development.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
