'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiActivity, FiUsers, FiBox, FiMap, FiAward, FiCpu } from 'react-icons/fi'

/* ── Animated number counter ── */
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / 60
    const t = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(t) }
      else setCount(Math.floor(start))
    }, 18)
    return () => clearInterval(t)
  }, [inView, target])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

/* ── Mini sparkline bars — fixed values per position to avoid SSR mismatch ── */
const SPARKLINE_HEIGHTS = [42, 68, 38, 82, 55, 74, 48, 91, 62, 77]

function Sparkline({ color }: { color: string }) {
  return (
    <div className="flex items-end gap-0.5 h-8 mt-4 opacity-40">
      {SPARKLINE_HEIGHTS.map((h, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.04, ease: 'easeOut' }}
          className="flex-1 rounded-t-sm origin-bottom"
          style={{ height: `${h}%`, background: color }}
        />
      ))}
    </div>
  )
}

const dashboards = [
  {
    icon: <FiActivity size={22} />,
    title: 'Sales Analytics',
    desc: 'Real-time revenue tracking, trend analysis, and sales team performance across all channels.',
    accent: '#00d4ff',
    iconBg: 'rgba(0,212,255,0.1)',
    metrics: [
      { label: 'Revenue', value: 2.4, suffix: 'M' },
      { label: 'Orders', value: 1840, suffix: '' },
    ],
    chips: ['Revenue KPIs', 'Daily Trends', 'Channel Mix'],
    link: '#',
  },
  {
    icon: <FiUsers size={22} />,
    title: 'Customer Insights',
    desc: 'Customer segmentation, behavior patterns, retention analysis, and lifetime value tracking.',
    accent: '#7c3aed',
    iconBg: 'rgba(124,58,237,0.1)',
    metrics: [
      { label: 'Segments', value: 4, suffix: '' },
      { label: 'Retention', value: 87, suffix: '%' },
    ],
    chips: ['Segments', 'Churn Risk', 'LTV'],
    link: '#',
  },
  {
    icon: <FiBox size={22} />,
    title: 'Inventory Tracking',
    desc: 'Stock levels, reorder alerts, supplier performance, and inventory turnover from Odoo data.',
    accent: '#10b981',
    iconBg: 'rgba(16,185,129,0.1)',
    metrics: [
      { label: 'SKUs', value: 430, suffix: '' },
      { label: 'Turnover', value: 94, suffix: '%' },
    ],
    chips: ['Stock Levels', 'Reorder Alerts', 'Turnover'],
    link: '#',
  },
  {
    icon: <FiMap size={22} />,
    title: 'Regional Performance',
    desc: 'Multi-region sales performance with drill-down by territory, branch, and sales rep.',
    accent: '#f59e0b',
    iconBg: 'rgba(245,158,11,0.1)',
    metrics: [
      { label: 'Regions', value: 8, suffix: '' },
      { label: 'Target Hit', value: 76, suffix: '%' },
    ],
    chips: ['Region KPIs', 'Branch Rank', 'Targets'],
    link: '#',
  },
  {
    icon: <FiAward size={22} />,
    title: 'Loyalty Program',
    desc: 'Member enrollment, point redemption rates, tier progression, and reward effectiveness.',
    accent: '#ec4899',
    iconBg: 'rgba(236,72,153,0.1)',
    metrics: [
      { label: 'Members', value: 5200, suffix: '' },
      { label: 'Active', value: 68, suffix: '%' },
    ],
    chips: ['Enrollment', 'Redemptions', 'Tier Mix'],
    link: '#',
  },
  {
    icon: <FiCpu size={22} />,
    title: 'KPI Monitoring',
    desc: 'Executive-level KPI dashboard with automated alerts, variance analysis, and period comparisons.',
    accent: '#3b82f6',
    iconBg: 'rgba(59,130,246,0.1)',
    metrics: [
      { label: 'KPIs', value: 24, suffix: '' },
      { label: 'On Track', value: 83, suffix: '%' },
    ],
    chips: ['OKRs', 'Variance', 'Alerts'],
    link: '#',
  },
]

/* ── Single glassmorphism card ── */
function DashCard({ d, i }: { d: typeof dashboards[0]; i: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: i * 0.09 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group cursor-pointer"
    >
      {/* Animated gradient border glow */}
      <motion.div
        animate={{
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1 : 0.95,
        }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-[1px] rounded-2xl z-0"
        style={{
          background: `linear-gradient(135deg, ${d.accent}80, transparent 50%, ${d.accent}40)`,
          filter: `blur(3px)`,
        }}
      />

      {/* Rotating conic border on hover */}
      <motion.div
        animate={{ rotate: hovered ? 360 : 0 }}
        transition={{ duration: 3, repeat: hovered ? Infinity : 0, ease: 'linear' }}
        className="absolute -inset-[1px] rounded-2xl z-0 opacity-0 group-hover:opacity-60"
        style={{
          background: `conic-gradient(from 0deg, ${d.accent}, transparent, ${d.accent})`,
        }}
      />

      {/* Card body — frosted glass */}
      <motion.div
        animate={{ y: hovered ? -6 : 0 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 rounded-2xl p-5 flex flex-col h-full"
        style={{
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{ background: d.iconBg, color: d.accent }}>
            {d.icon}
          </div>
          <span className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium"
            style={{ background: 'rgba(16,185,129,0.08)', color: '#34d399',
              border: '1px solid rgba(16,185,129,0.2)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live
          </span>
        </div>

        {/* Title & desc */}
        <h3 className="text-white font-bold text-base mb-1.5"
          style={{ textShadow: hovered ? `0 0 20px ${d.accent}60` : 'none', transition: 'text-shadow 0.3s' }}>
          {d.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{d.desc}</p>

        {/* Counters */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {d.metrics.map((m) => (
            <div key={m.label} className="rounded-lg p-2.5"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <p className="text-slate-500 text-[10px] mb-0.5">{m.label}</p>
              <p className="font-bold text-sm" style={{ color: d.accent }}>
                <Counter target={m.value} suffix={m.suffix} />
              </p>
            </div>
          ))}
        </div>

        {/* Chips */}
        <div className="flex flex-wrap gap-1.5 mb-1">
          {d.chips.map((c) => (
            <span key={c} className="text-[10px] px-2 py-0.5 rounded-full font-mono"
              style={{ color: d.accent, border: `1px solid ${d.accent}30`,
                background: `${d.accent}08` }}>
              {c}
            </span>
          ))}
        </div>

        {/* Sparkline */}
        <Sparkline color={d.accent} />

        {/* Link */}
        <a href={d.link}
          className="flex items-center gap-1.5 text-xs font-medium mt-3 transition-colors"
          style={{ color: d.accent }}>
          <FiExternalLink size={12} /> Open Dashboard
        </a>
      </motion.div>
    </motion.div>
  )
}

/* ════════════════════════════════════════ */
export default function Dashboards() {
  return (
    <section id="dashboards" className="py-24 relative overflow-hidden"
      style={{ background: 'rgba(255,255,255,0.005)' }}>
      {/* Ambient orb */}
      <div className="absolute w-96 h-96 rounded-full top-1/2 right-0 opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 font-mono text-sm mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-cyan-400" /> Live on Vercel <span className="w-8 h-px bg-cyan-400" />
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Dashboard Showcase</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            All dashboards deployed live — real data, real-time updates, real business value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {dashboards.map((d, i) => <DashCard key={d.title} d={d} i={i} />)}
        </div>
      </div>
    </section>
  )
}
