'use client'
import { useEffect, useState, useRef } from 'react'
import { motion, useAnimationFrame } from 'framer-motion'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const roles = [
  'Data Analyst',
  'Dashboard Developer',
  'Business Intelligence Engineer',
  'Automation Enthusiast',
  'Customer Insights Specialist',
]

/* ── Typing animation ── */
function TypingText() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let t: NodeJS.Timeout
    if (!deleting && displayed.length < current.length)
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75)
    else if (!deleting && displayed.length === current.length)
      t = setTimeout(() => setDeleting(true), 2200)
    else if (deleting && displayed.length > 0)
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    else { setDeleting(false); setRoleIndex((i) => (i + 1) % roles.length) }
    return () => clearTimeout(t)
  }, [displayed, deleting, roleIndex])

  return (
    <span className="text-cyan-400 font-semibold">
      {displayed}<span className="animate-pulse text-cyan-400">|</span>
    </span>
  )
}

/* ── Animated dot-grid background — client-only canvas ── */
function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useAnimationFrame((t) => {
    if (!mounted) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const spacing = 35
    for (let x = 0; x < canvas.width; x += spacing) {
      for (let y = 0; y < canvas.height; y += spacing) {
        const dist = Math.sin((x + t * 0.04) * 0.03) * Math.cos((y + t * 0.03) * 0.03)
        const alpha = (dist + 1) * 0.08
        ctx.beginPath()
        ctx.arc(x, y, 1.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,212,255,${alpha})`
        ctx.fill()
      }
    }
  })

  if (!mounted) return null
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}

/* ── Animated chart bars ── */
const INITIAL_BARS = [60, 85, 45, 92, 70, 55, 80, 40, 95, 65, 78, 50]

function LiveChart() {
  const [bars, setBars] = useState(INITIAL_BARS)
  useEffect(() => {
    const t = setInterval(() => {
      setBars((prev) => prev.map((b) => Math.max(25, Math.min(98, b + (Math.random() - 0.5) * 14))))
    }, 1800)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="flex items-end gap-1.5 h-20">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          animate={{ height: `${h}%` }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="flex-1 rounded-t-sm"
          style={{
            background: i % 3 === 0
              ? 'linear-gradient(to top, #00d4ff, #0ea5e9)'
              : i % 3 === 1
              ? 'linear-gradient(to top, #7c3aed, #a855f7)'
              : 'linear-gradient(to top, #06b6d4, #22d3ee)',
            minWidth: '14px',
          }}
        />
      ))}
    </div>
  )
}

/* ── Glassmorphism dashboard card ── */
function DashboardCard() {
  const kpis = [
    { label: 'Revenue', value: 'KSh 2.4M', change: '+12.5%', up: true },
    { label: 'Customers', value: '10,847', change: '+8.2%', up: true },
    { label: 'Conversion', value: '68.4%', change: '+3.1%', up: true },
  ]
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
      className="relative"
      style={{ perspective: '1000px' }}
    >
      {/* Animated gradient border glow */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        className="absolute -inset-[1.5px] rounded-2xl z-0 opacity-70"
        style={{
          background: 'conic-gradient(from 0deg, #00d4ff, #7c3aed, #06b6d4, #00d4ff)',
          filter: 'blur(4px)',
        }}
      />

      {/* Card body */}
      <div className="relative z-10 rounded-2xl overflow-hidden"
        style={{ background: 'rgba(10,10,20,0.85)', backdropFilter: 'blur(20px)' }}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
          <span className="text-slate-400 text-xs font-mono">sales_analytics.py</span>
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
        </div>

        <div className="p-5 space-y-4">
          {/* KPI grid */}
          <div className="grid grid-cols-3 gap-2">
            {kpis.map((k) => (
              <div key={k.label} className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <p className="text-slate-500 text-[10px] mb-0.5">{k.label}</p>
                <p className="text-white font-bold text-xs leading-tight">{k.value}</p>
                <p className={`text-[10px] font-mono mt-0.5 ${k.up ? 'text-emerald-400' : 'text-red-400'}`}>
                  {k.change}
                </p>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div>
            <p className="text-slate-500 text-[10px] font-mono mb-2">Monthly Sales Trend</p>
            <LiveChart />
          </div>

          {/* Status */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-500 text-[10px]">Live • Updated 2s ago</span>
            </div>
            <span className="text-cyan-400 text-[10px] font-mono">▲ +8.4%</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Stats ── */
function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="relative rounded-xl overflow-hidden text-center p-4"
      style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)',
        border: '1px solid rgba(0,212,255,0.1)' }}
    >
      <p className="text-2xl font-black text-cyan-400" style={{ textShadow: '0 0 20px #00d4ff' }}>
        {value}
      </p>
      <p className="text-slate-500 text-[11px] mt-0.5">{label}</p>
    </motion.div>
  )
}

/* ════════════════════════════════════════ */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ background: 'linear-gradient(135deg,#050508 0%,#0a0a14 60%,#050508 100%)' }}>
      {/* Animated dot grid */}
      <DotGrid />

      {/* Ambient orbs */}
      <div className="absolute w-[500px] h-[500px] rounded-full -top-40 -left-40 opacity-10"
        style={{ background: 'radial-gradient(circle, #00d4ff, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute w-[400px] h-[400px] rounded-full bottom-0 -right-20 opacity-10"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">

        {/* ── LEFT ── */}
        <div>
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-medium"
            style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)',
              color: '#34d399' }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for work
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cyan-400 font-mono text-sm mb-3 flex items-center gap-2"
          >
            <span className="w-8 h-px bg-cyan-400" /> Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-6xl md:text-7xl font-black text-white mb-1 leading-none"
          >
            Brayan
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-6xl md:text-7xl font-black mb-5 leading-none"
            style={{
              background: 'linear-gradient(90deg, #00d4ff 0%, #7c3aed 60%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 30px rgba(0,212,255,0.4))',
            }}
          >
            Oduor
          </motion.h1>

          {/* Typing role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="text-xl text-slate-300 mb-5 h-8"
          >
            <TypingText />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg"
          >
            I build interactive dashboards, automate reporting workflows, and transform raw business data into
            actionable insights using{' '}
            <span className="text-cyan-400 font-medium">Python</span>,{' '}
            <span className="text-cyan-400 font-medium">SQL</span>,{' '}
            <span className="text-cyan-400 font-medium">APIs</span>, and modern web technologies.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            {/* Primary — glowing gradient */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="relative px-7 py-3 rounded-xl font-semibold text-dark overflow-hidden"
              style={{ background: 'linear-gradient(90deg,#00d4ff,#7c3aed)', boxShadow: '0 0 24px rgba(0,212,255,0.35)' }}
            >
              View Projects
            </motion.a>

            {/* Outline — animated border */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="relative px-7 py-3 rounded-xl font-semibold text-cyan-400 overflow-hidden"
              style={{ border: '1px solid rgba(0,212,255,0.4)', background: 'rgba(0,212,255,0.05)' }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-3"
          >
            {[
              { icon: <FiGithub size={18} />, href: 'https://github.com/', label: 'GitHub' },
              { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/brayan-omondi-b5ab05227/', label: 'LinkedIn' },
              { icon: <FiMail size={18} />, href: 'mailto:oduoromondi6@gmail.com', label: 'Email' },
            ].map((s) => (
              <motion.a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.12, y: -2 }}
                aria-label={s.label}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-cyan-400 transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
              >
                {s.icon}
              </motion.a>
            ))}
            <span className="text-slate-600 text-xs ml-1">oduoromondi6@gmail.com</span>
          </motion.div>
        </div>

        {/* ── RIGHT ── */}
        <div className="hidden md:flex flex-col gap-4">
          <DashboardCard />
          <div className="grid grid-cols-2 gap-4">
            <StatCard value="10K+" label="Records Processed" delay={1.1} />
            <StatCard value="70%" label="Reporting Time Saved" delay={1.2} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-cyan-400 transition-colors"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <FiArrowDown size={22} />
        </motion.div>
      </motion.a>
    </section>
  )
}
