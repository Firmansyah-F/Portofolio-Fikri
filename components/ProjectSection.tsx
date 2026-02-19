"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
};

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <h2 className="text-4xl font-semibold mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Project 1 */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="border border-white/10 bg-white/5 backdrop-blur-xl p-6 rounded-2xl transition shadow-xl hover:shadow-purple-500/10 cursor-pointer"
            onClick={() =>
              setSelectedProject({
                title: "Moola",
                description:
                  "Service management platform built with Next.js, TypeScript, and Tailwind CSS.",
              })
            }
          >
            <Image
              src="/project_1.png"
              alt="Moola"
              width={600}
              height={400}
              className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold">Moola</h3>
            <p className="text-gray-400">
              Service management platform built with Next.js & Tailwind CSS.
            </p>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="border border-white/10 bg-white/5 backdrop-blur-xl p-6 rounded-2xl transition shadow-xl hover:shadow-purple-500/10 cursor-pointer"
            onClick={() =>
              setSelectedProject({
                title: "Jalakasih",
                description:
                  "Crowdfunding Platform built with Next.js, TypeScript, and Tailwind CSS.",
              })
            }
          >
            <Image
              src="/project_2.png"
              alt="Jalakasih"
              width={600}
              height={400}
              className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold">Jalakasih</h3>
            <p className="text-gray-400">
              Crowdfunding Platform built with Next.js, TypeScript, and Tailwind
              CSS.
            </p>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="border border-white/10 bg-white/5 backdrop-blur-xl p-6 rounded-2xl transition shadow-xl hover:shadow-purple-500/10 cursor-pointer"
            onClick={() =>
              setSelectedProject({
                title: "Website Anggota KADIN",
                description:
                  "Member registration & database system built using Laravel.",
              })
            }
          >
            <Image
              src="/project_3.png"
              alt="KADIN"
              width={600}
              height={400}
              className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold">Website Anggota KADIN</h3>
            <p className="text-gray-400">
              Member registration & database system built using Laravel.
            </p>
          </motion.div>

          {/* Project 4 */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="border border-white/10 bg-white/5 backdrop-blur-xl p-6 rounded-2xl transition shadow-xl hover:shadow-purple-500/10 cursor-pointer"
            onClick={() =>
              setSelectedProject({
                title: "Pefindo",
                description:
                  "Credit rating system built using Next.js and TypeScript.",
              })
            }
          >
            <Image
              src="/project_4.png"
              alt="Pefindo"
              width={600}
              height={400}
              className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold">Pefindo</h3>
            <p className="text-gray-400">
              Credit rating system built using Next.js and TypeScript.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-10 rounded-2xl max-w-lg w-full relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>

            <p className="text-gray-300">{selectedProject.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
