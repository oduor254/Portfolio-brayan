'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiTrendingUp } from 'react-icons/fi'
import projects from '../data/projects.json'

const categories = ['All', 'Dashboard', 'Analytics']

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="orb orb-cyan w-72 h-72 bottom-0 -left-20 opacity-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 font-mono text-sm mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-cyan-400" /> Featured Work <span className="w-8 h-px bg-cyan-400" />
          </p>
          <h2 className="section-title">Projects & Solutions</h2>
          <p className="section-subtitle mx-auto">
            Real-world analytics dashboards and data solutions built for business impact.
          </p>

          {/* Filter pills */}
          <div className="flex justify-center gap-3 mt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === cat
                    ? 'bg-cyan-500 text-dark'
                    : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-card overflow-hidden group hover:border-cyan-500/20 transition-all duration-300 flex flex-col"
              >
                {/* Image placeholder */}
                <div className="relative h-44 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-card to-dark opacity-50" />
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <FiTrendingUp size={40} className="text-cyan-400/60" />
                    <span className="text-slate-500 text-xs font-mono">{project.category}</span>
                  </div>
                  {/* Animated bars */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-end gap-1 px-4 pb-2 opacity-30">
                    {[40, 65, 35, 80, 55, 70, 45, 90].map((h, j) => (
                      <div
                        key={j}
                        className="flex-1 rounded-t-sm bg-cyan-400"
                        style={{ height: `${h * 0.4}px` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-white font-bold mb-2 group-hover:text-cyan-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Impact */}
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3 mb-4">
                    <p className="text-emerald-400 text-xs font-medium">
                      Impact: {project.impact}
                    </p>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="tech-tag text-[11px]">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag text-[11px]">+{project.technologies.length - 4}</span>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.liveDemo}
                      className="flex items-center gap-1.5 px-4 py-2 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-lg text-sm hover:bg-cyan-500/20 transition-colors flex-1 justify-center font-medium"
                    >
                      <FiExternalLink size={14} /> Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 bg-white/5 text-slate-400 border border-white/10 rounded-lg text-sm hover:text-white hover:bg-white/10 transition-colors flex-1 justify-center font-medium"
                    >
                      <FiGithub size={14} /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
