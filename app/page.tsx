"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import ScrollProgress from "@/components/ScrollProgress";
import Tilt from "react-parallax-tilt";
import TechStackSection from "@/components/TechSection";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    description: string;
  } | null>(null);

  return (
    <>
      <ScrollProgress />
      <main className="min-h-screen text-white relative overflow-hidden">
        {/* Animated Gradient Background */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 -z-10 bg-[linear-gradient(-45deg,#0f172a,#111827,#1e1b4b,#0f172a)] bg-[length:400%_400%]"
        />

        {/* Soft Glow Layers */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/20 blur-[140px] rounded-full -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/20 blur-[140px] rounded-full -z-10 animate-pulse" />

        {/* NAVBAR */}
        <Navbar />

        <div className="max-w-6xl mx-auto px-6 pt-40 pb-32">
          {/* HERO */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.05}>
              <div className="bg-white/10 p-10 rounded-3xl shadow-xl">
                <h1 className="text-4xl font-bold">Fikri Firmansyah</h1>
                <TypeAnimation
                  sequence={[
                    "Front-End Software Engineer",
                    1500,
                    "React & Next.js Specialist",
                    1500,
                    "Building Scalable Web Applications",
                    1500,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  className="text-2xl text-purple-400 font-medium"
                />
              </div>
            </Tilt>

            <p className="mt-6 max-w-2xl text-gray-300">
              4+ years experience building CMS, dashboards, and service
              management platforms using React, Next.js, and TypeScript.
            </p>

            <div className="flex gap-6 mt-8 items-center">
              <a
                href="/CV-Fikri-Firmansyah.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-xl shadow-lg hover:scale-105"
              >
                <Download size={18} /> Download CV
              </a>

              <a href="https://github.com/Firmansyah-F" target="_blank">
                <Github className="hover:text-purple-400 transition" />
              </a>

              <a
                href="https://www.linkedin.com/in/fikri-firmansyah-36005a179/"
                target="_blank"
              >
                <Linkedin className="hover:text-purple-400 transition" />
              </a>

              <a href="mailto:fikrifirmansyah096@gmail.com">
                <Mail className="hover:text-purple-400 transition" />
              </a>
            </div>
          </motion.section>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />
          {/* ABOUT */}
          <motion.section
            id="about"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-4xl font-semibold mb-6">
              Professional Summary
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-3xl">
              Front-End Software Engineer with 4+ years experience developing
              modern web applications using React, Next.js, and TypeScript.
              Experienced in CMS, dashboards, service platforms and API
              integration within Agile teams. Familiar with basic backend
              development using Node.js and Golang for REST API services.
            </p>
          </motion.section>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

          {/* TECH STACK */}
          <TechStackSection />

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

          {/* EXPERIENCE */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-4xl font-semibold mb-16">
              Professional Experience
            </h2>

            <div className="relative border-l border-white/10 pl-10 space-y-16">
              {/* 1 */}
              <div className="relative">
                {/* Circle */}
                <div className="absolute -left-[48px] top-2 w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />

                {/* Content */}
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <h3 className="text-xl font-semibold">
                    Software Engineer (Front-End)
                  </h3>

                  <p className="text-purple-400 text-sm mt-1">
                    PT Xapiens Teknologi Indonesia
                  </p>

                  <p className="text-gray-400 text-sm mb-4">
                    Feb 2021 – Dec 2025
                  </p>

                  <ul className="text-gray-300 space-y-2 text-sm leading-relaxed">
                    <li>
                      • Developed and maintained websites and CMS using
                      React.js, Next.js, Laravel, and Tailwind CSS.
                    </li>
                    <li>
                      • Built responsive and high-performance user interfaces
                      across multiple devices.
                    </li>
                    <li>
                      • Contributed to Odoo customization and module development
                      using Python and XML.
                    </li>
                    <li>
                      • Collaborated with backend and product teams to ensure
                      smooth API integration.
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* 2 */}
              <div className="relative">
                <div className="absolute -left-[48px] top-2 w-4 h-4 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/50" />

                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <h3 className="text-xl font-semibold">
                    JavaScript IT Bootcamp (Contract)
                  </h3>

                  <p className="text-purple-400 text-sm mt-1">
                    Xsis Academy | Jakarta
                  </p>

                  <p className="text-gray-400 text-sm mb-4">
                    Nov 2020 – Jan 2021
                  </p>

                  <ul className="text-gray-300 space-y-2 text-sm leading-relaxed">
                    <li>
                      • Completed an intensive JavaScript bootcamp focused on
                      web development fundamentals.
                    </li>
                    <li>
                      • Learned JavaScript (ES6+), HTML, CSS, and application
                      logic.
                    </li>
                    <li>
                      • Built mini-projects simulating real-world web
                      development workflows.
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* 3 */}
              <div className="relative">
                <div className="absolute -left-[48px] top-2 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" />

                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <h3 className="text-xl font-semibold">
                    Machine Learning IT Bootcamp (Internship)
                  </h3>

                  <p className="text-purple-400 text-sm mt-1">
                    PT Indocyber Global Teknologi | Jakarta
                  </p>

                  <p className="text-gray-400 text-sm mb-4">
                    Aug 2020 – Oct 2020
                  </p>

                  <ul className="text-gray-300 space-y-2 text-sm leading-relaxed">
                    <li>
                      • Participated in a machine learning bootcamp and
                      internship program.
                    </li>
                    <li>
                      • Learned Python, basic data processing, and introductory
                      machine learning concepts.
                    </li>
                    <li>
                      • Practiced data analysis and simple model development.
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.section>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

          {/* PROJECTS */}
          <ProjectSection />

          {selectedProject && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
              <div className="bg-gray-900 p-10 rounded-2xl max-w-lg w-full relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  ✕
                </button>

                <h3 className="text-2xl font-bold mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300">{selectedProject.description}</p>
              </div>
            </div>
          )}

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

          {/* ACHIEVEMENTS & CERTIFICATIONS */}
          <section className="py-32 relative">
            <div className="max-w-6xl mx-auto px-6">
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <h2 className="text-4xl font-bold">
                  Achievements & Certifications
                </h2>
                <p className="text-gray-400 mt-4">
                  Continuous learning and professional growth in technology and
                  software development.
                </p>
              </motion.div>

              {/* Cards */}
              <div className="grid md:grid-cols-3 gap-10">
                {[
                  {
                    icon: "🟢",
                    title: "Certificate of Completion — Node.js",
                    issuer: "Refactory",
                    color: "from-green-600/20 to-emerald-600/20",
                  },
                  {
                    icon: "🌐",
                    title:
                      "The Complete Web Developer in 2021: Zero to Mastery",
                    issuer: "Udemy",
                    color: "from-purple-600/20 to-indigo-600/20",
                  },
                  {
                    icon: "⚙️",
                    title:
                      "Certificate of Completion — Odoo Technical Training",
                    issuer: "PT Akselerasi Teknologi Investama",
                    color: "from-indigo-600/20 to-blue-600/20",
                  },
                  {
                    icon: "🔐",
                    title: "Cyber Security Awareness: Basic Training",
                    issuer: "Professional Training",
                    color: "from-blue-600/20 to-cyan-600/20",
                  },
                  {
                    icon: "🛡️",
                    title: "Social Engineering Awareness",
                    issuer: "Security Awareness Program",
                    color: "from-orange-600/20 to-yellow-600/20",
                  },
                  {
                    icon: "🚀",
                    title: "Basic Go-Lang for Back-End Developer",
                    issuer: "Latest Certification",
                    color: "from-teal-600/20 to-cyan-600/20",
                    latest: true,
                  },
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden group"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition duration-500`}
                    />

                    <div className="relative z-10">
                      <div className="text-3xl mb-4">{cert.icon}</div>

                      <h3 className="text-lg font-semibold mb-2 leading-snug">
                        {cert.title}
                      </h3>

                      <p className="text-gray-400 text-sm">{cert.issuer}</p>

                      <div className="mt-4 flex items-center gap-2">
                        <span className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full border border-white/20">
                          Certificate
                        </span>

                        {cert.latest && (
                          <span className="px-3 py-1 text-xs bg-green-600/20 text-green-400 rounded-full border border-green-500/30">
                            Latest
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

          {/* CONTACT */}
          <motion.section
            id="contact"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-32 relative"
          >
            <div className="max-w-6xl mx-auto px-6">
              {/* Header */}
              <div className="mb-16">
                <h2 className="text-4xl font-semibold mb-4">
                  Let’s Work Together
                </h2>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 text-xs bg-green-600/20 text-green-400 rounded-full border border-green-500/30 animate-pulse">
                    ● Open to Work
                  </span>

                  <span className="text-gray-400 text-sm">
                    📍 Indonesia • On-Site & Remote Friendly
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-16">
                {/* LEFT SIDE */}
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    I’m currently open to full-time roles, freelance projects,
                    and collaborations in Front-End or Full-Stack development.
                    Let’s create something impactful together.
                  </p>

                  <div className="space-y-4">
                    <a
                      href="mailto:fikrifirmansyah096@gmail.com"
                      className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition"
                    >
                      📧 fikrifirmansyah096@gmail.com
                    </a>

                    <a
                      href="tel:+6281363667286"
                      className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition"
                    >
                      📱 +62 813-6366-7286
                    </a>

                    <a
                      href="https://wa.me/6281363667286"
                      target="_blank"
                      className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition"
                    >
                      💬 WhatsApp Direct
                    </a>

                    <a
                      href="https://www.linkedin.com/in/fikri-firmansyah-36005a179/"
                      target="_blank"
                      className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition"
                    >
                      🔗 LinkedIn Profile
                    </a>

                    <a
                      href="https://github.com/Firmansyah-F"
                      target="_blank"
                      className="flex items-center gap-3 text-gray-300 hover:text-gray-100 transition"
                    >
                      💻 GitHub Portfolio
                    </a>
                  </div>

                  {/* Download CV */}
                  <a
                    href="/CV-Fikri-Firmansyah.pdf"
                    download
                    className="inline-block mt-6 px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition"
                  >
                    📄 Download CV
                  </a>
                </div>

                {/* RIGHT SIDE CTA CARD */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="p-10 rounded-3xl bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-xl border border-white/10 flex items-start justify-center flex-col"
                >
                  <h3 className="text-2xl font-semibold mb-4">
                    Have a project in mind?
                  </h3>

                  <p className="text-gray-300 mb-8">
                    Whether you need a scalable web application, dashboard
                    system, or modern UI — I’m ready to help.
                  </p>

                  <div className="flex gap-4 flex-wrap">
                    <a
                      href="mailto:fikrifirmansyah096@gmail.com"
                      className="px-6 py-3 bg-purple-600 hover:bg-purple-500 transition rounded-full text-white font-medium"
                    >
                      Send Email
                    </a>

                    <a
                      href="https://wa.me/6281363667286"
                      target="_blank"
                      className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition"
                    >
                      WhatsApp
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </>
  );
}
