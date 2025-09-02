"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Member {
  id: number;
  name: string;
  image: string;
  description: string;
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
    name: "Elgun Abdurrahmanov",
    image: "/images/founders/founder1.jpg",
    description: "Visionary leader with 15+ years of experience in social innovation and community development.",
  },
  {
    id: 2,
    name: "Tofig Aghayev",
    image: "/images/founders/founder2.jpg",
    description: "Innovative thinker with a passion for technology and community impact.",
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

export default function About() {
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-white"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.section
        className="relative bg-black text-white py-20"
        variants={sectionVariants}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              About Our Mission
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-blue-100 leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Empowering communities through innovation, collaboration, and sustainable impact
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Mission Statement */}
      <motion.section
        className="py-16 bg-white"
        variants={sectionVariants}
      >
        <div className=" mx-auto px-4">
          <div className="mx-auto">
            <motion.div
              className="text-center mb-12"
              variants={itemVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants}>
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
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl grid grid-cols-1 sm:grid-cols-3 items-center justify-center gap-4"
                variants={itemVariants}
              >
                {stats.map((stat) => (
                  <motion.div
                    key={stat.id}
                    className="text-center"
                    variants={statVariants}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="text-6xl font-bold text-purple-600 mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.title}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="py-16 bg-gray-50"
        variants={sectionVariants}
      >
        <div className="mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8 mx-auto">
            {
              values.map((value) => (
                <motion.div
                  key={value.id}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))
            }
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-16 bg-white"
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals driving our mission forward
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {members.map((member) => (
              <motion.div
                key={member.id}
                className="text-center group bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
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
                  <p className="text-gray-600 text-sm leading-tight md:leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}