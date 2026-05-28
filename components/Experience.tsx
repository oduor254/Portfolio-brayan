'use client'
import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'

const roles = [
  {
    title: 'Customer Analytics',
    subtitle: 'Core Expertise',
    color: 'text-cyan-400',
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/5',
    dot: 'bg-cyan-400',
    points: [
      'Analyze customer behavior patterns across 300,000+ records',
      'Build gender-based product performance reports',
      'Segment customers by purchase frequency and basket size',
      'Track loyalty program engagement and churn risk',
      'Produce weekly/monthly automated insight reports',
    ],
  },
  {
    title: 'Dashboard Development',
    subtitle: 'Primary Skill',
    color: 'text-violet-400',
    border: 'border-violet-500/20',
    bg: 'bg-violet-500/5',
    dot: 'bg-violet-400',
    points: [
      'Develop real-time dashboards using Python + Plotly',
      'Build interactive HTML/JS dashboards deployed on Vercel',
      'Create Google Sheets-integrated live reporting systems',
      'Design KPI monitoring with automated alerts',
      'Implement responsive layouts for cross-device access',
    ],
  },
  {
    title: 'Automation & Pipelines',
    subtitle: 'Data Engineering',
    color: 'text-emerald-400',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/5',
    dot: 'bg-emerald-400',
    points: [
      'Automate data extraction from Odoo ERP systems',
      'Build Google Sheets API pipelines for live data feeds',
      'Schedule and deploy automated reporting workflows',
      'Clean and transform raw POS data into analytics-ready formats',
      'Reduce manual reporting from hours to seconds',
    ],
  },
  {
    title: 'Business Intelligence',
    subtitle: 'Strategic Layer',
    color: 'text-orange-400',
    border: 'border-orange-500/20',
    bg: 'bg-orange-500/5',
    dot: 'bg-orange-400',
    points: [
      'Translate operational data into executive-level insights',
      'Build regional performance comparison frameworks',
      'Track inventory KPIs and stock optimization metrics',
      'Develop sales forecasting and trend analysis views',
      'Present findings through data storytelling techniques',
    ],
  },
]

const certifications = [
  'Odoo Inventory Management Training',
  'Google Data Analytics',
  'Python for Data Analysis',
  'SQL for Business Intelligence',
  'Power BI Fundamentals',
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="orb orb-purple w-72 h-72 bottom-20 -left-20 opacity-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 font-mono text-sm mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-cyan-400" /> What I Do <span className="w-8 h-px bg-cyan-400" />
          </p>
          <h2 className="section-title">Experience & Expertise</h2>
          <p className="section-subtitle mx-auto">
            Areas where I deliver measurable business impact through data.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`glass-card p-6 hover:${role.border} transition-all duration-300 group`}
            >
              <div className="flex items-start gap-3 mb-5">
                <div className={`w-3 h-3 rounded-full ${role.dot} mt-1.5 flex-shrink-0`} />
                <div>
                  <h3 className={`text-white font-bold text-lg group-hover:${role.color} transition-colors`}>
                    {role.title}
                  </h3>
                  <span className={`text-sm font-mono ${role.color}`}>{role.subtitle}</span>
                </div>
              </div>

              <ul className="space-y-2.5">
                {role.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <FiCheckCircle size={14} className={`${role.color} flex-shrink-0 mt-0.5`} />
                    <span className="text-slate-400 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
            <span className="w-2 h-6 bg-cyan-400 rounded-full" />
            Certifications & Training
          </h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert, i) => (
              <motion.span
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-300 text-sm hover:border-cyan-500/30 hover:text-cyan-400 transition-colors"
              >
                <FiCheckCircle size={14} className="text-cyan-400" />
                {cert}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
