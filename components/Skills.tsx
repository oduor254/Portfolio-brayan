'use client'
import { motion } from 'framer-motion'
import {
  SiPython, SiPandas, SiNumpy, SiPlotly, SiJavascript,
  SiHtml5, SiCss3, SiGit, SiVercel, SiGooglesheets,
  SiPowerbi, SiPostgresql, SiGithub, SiTypescript,
} from 'react-icons/si'
import { FiDatabase, FiBarChart2, FiCode, FiSettings } from 'react-icons/fi'

const skillGroups = [
  {
    category: 'Data Analysis',
    icon: <FiBarChart2 size={18} />,
    color: 'text-cyan-400',
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/5',
    skills: [
      { name: 'Python', icon: <SiPython />, level: 90 },
      { name: 'Pandas', icon: <SiPandas />, level: 88 },
      { name: 'NumPy', icon: <SiNumpy />, level: 80 },
      { name: 'SQL', icon: <SiPostgresql />, level: 82 },
      { name: 'Excel', icon: <FiDatabase />, level: 92 },
      { name: 'Google Sheets', icon: <SiGooglesheets />, level: 95 },
    ],
  },
  {
    category: 'Visualization',
    icon: <FiBarChart2 size={18} />,
    color: 'text-violet-400',
    border: 'border-violet-500/20',
    bg: 'bg-violet-500/5',
    skills: [
      { name: 'Plotly', icon: <SiPlotly />, level: 88 },
      { name: 'Power BI', icon: <SiPowerbi />, level: 75 },
      { name: 'Matplotlib', icon: <FiBarChart2 />, level: 85 },
      { name: 'HTML Dashboards', icon: <SiHtml5 />, level: 90 },
    ],
  },
  {
    category: 'Development',
    icon: <FiCode size={18} />,
    color: 'text-emerald-400',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/5',
    skills: [
      { name: 'HTML/CSS', icon: <SiHtml5 />, level: 88 },
      { name: 'JavaScript', icon: <SiJavascript />, level: 78 },
      { name: 'TypeScript', icon: <SiTypescript />, level: 65 },
      { name: 'APIs', icon: <FiCode />, level: 85 },
      { name: 'GitHub', icon: <SiGithub />, level: 88 },
      { name: 'Vercel', icon: <SiVercel />, level: 90 },
    ],
  },
  {
    category: 'Systems & Tools',
    icon: <FiSettings size={18} />,
    color: 'text-orange-400',
    border: 'border-orange-500/20',
    bg: 'bg-orange-500/5',
    skills: [
      { name: 'Odoo ERP', icon: <FiSettings />, level: 82 },
      { name: 'POS Analytics', icon: <FiDatabase />, level: 80 },
      { name: 'Automation', icon: <FiSettings />, level: 85 },
      { name: 'Git', icon: <SiGit />, level: 85 },
    ],
  },
]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-slate-300 text-sm">{name}</span>
        <span className="text-slate-500 text-xs font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="orb orb-cyan w-72 h-72 -top-10 -right-10 opacity-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 font-mono text-sm mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-cyan-400" /> Tech Stack <span className="w-8 h-px bg-cyan-400" />
          </p>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle mx-auto">
            Tools and technologies I use to build analytics solutions and data-driven products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className={`glass-card p-6 hover:${group.border} transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-9 h-9 rounded-lg ${group.bg} flex items-center justify-center ${group.color}`}>
                  {group.icon}
                </div>
                <h3 className="text-white font-bold">{group.category}</h3>
              </div>

              <div>
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={gi * 0.1 + si * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
