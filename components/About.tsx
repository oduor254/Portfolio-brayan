'use client'
import { motion } from 'framer-motion'
import { FiDatabase, FiBarChart2, FiZap, FiTrendingUp } from 'react-icons/fi'

const pillars = [
  {
    icon: <FiBarChart2 size={22} />,
    title: 'Dashboard Development',
    desc: 'Real-time interactive dashboards that make complex data instantly understandable for decision-makers.',
  },
  {
    icon: <FiDatabase size={22} />,
    title: 'Data Engineering',
    desc: 'Building clean data pipelines from Odoo, Google Sheets, and APIs into structured analytics-ready formats.',
  },
  {
    icon: <FiZap size={22} />,
    title: 'Automation',
    desc: 'Automating reporting workflows that previously took hours — now running in seconds, hands-free.',
  },
  {
    icon: <FiTrendingUp size={22} />,
    title: 'Business Intelligence',
    desc: 'Turning raw operational data into strategic insights: sales trends, customer segments, KPI tracking.',
  },
]

const expertise = [
  'Sales Analytics', 'Customer Segmentation', 'Regional Performance',
  'Inventory Tracking', 'Loyalty Analytics', 'Gender-Based Analysis',
  'Odoo Reporting', 'KPI Monitoring', 'API Integrations', 'Google Sheets Automation',
]

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="orb orb-purple w-80 h-80 -top-20 -right-20 opacity-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-cyan-400 font-mono text-sm mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-cyan-400" /> About Me
            </p>
            <h2 className="section-title">
              Building Data Solutions
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
                That Drive Decisions
              </span>
            </h2>

            <p className="text-slate-400 leading-relaxed mb-6">
              I specialize in building real-time analytics dashboards and data-driven solutions that help businesses
              monitor performance, understand customers, and make smarter decisions. My work sits at the intersection of
              data engineering, visualization, and automation.
            </p>

            <p className="text-slate-400 leading-relaxed mb-8">
              With hands-on experience in <span className="text-cyan-400">Odoo ERP systems</span>,{' '}
              <span className="text-cyan-400">Google Sheets APIs</span>, and live Vercel-hosted dashboards,
              I bridge the gap between raw business data and the insights that teams actually act on.
            </p>

            {/* Expertise tags */}
            <div className="flex flex-wrap gap-2">
              {expertise.map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Right — pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card p-5 hover:border-cyan-500/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-3 group-hover:bg-cyan-500/20 transition-colors">
                  {p.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
