"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 95, category: "frontend" },
  { name: "Next.js", level: 92, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Tailwind", level: 88, category: "frontend" },

  { name: "Node.js", level: 70, category: "backend" },
  { name: "Laravel", level: 60, category: "backend" },
  { name: "Golang (Basic)", level: 60, category: "backend" },
  { name: "Odoo (Basic)", level: 65, category: "backend" },

  { name: "PostgreSQL", level: 60, category: "database" },
  { name: "Git", level: 85, category: "tools" },
  { name: "Docker (Basic)", level: 60, category: "tools" },
  { name: "Rest API", level: 75, category: "tools" },
  { name: "GraphQL", level: 80, category: "tools" },
];

export default function TechStackSection() {
  const [filter, setFilter] = useState("all");

  const filteredSkills =
    filter === "all"
      ? skills
      : skills.filter((skill) => skill.category === filter);

  return (
    <section className="mb-32">
      <h2 className="text-4xl font-semibold mb-10">Tech Stack</h2>

      {/* FILTER BUTTON */}
      <div className="flex gap-4 mb-10">
        {["all", "frontend", "backend", "database", "tools"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm border transition ${
              filter === cat
                ? "bg-purple-600 border-purple-600"
                : "border-white/20 hover:border-purple-500"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* SKILL LIST */}
      <div className="space-y-6">
        {filteredSkills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between mb-2 text-sm">
              <span>{skill.name}</span>
              <span className="text-purple-400">{skill.level}%</span>
            </div>

            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
