'use client'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#dashboards', label: 'Dashboards' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  { icon: <FiGithub size={18} />, href: 'https://github.com/', label: 'GitHub' },
  { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/brayan-omondi-b5ab05227/', label: 'LinkedIn' },
  { icon: <FiMail size={18} />, href: 'mailto:oduoromondi6@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold flex items-center gap-2 justify-center md:justify-start">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
                The Analyst
              </span>
            </a>
            <p className="text-slate-500 text-sm mt-1">Turning data into actionable insights.</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-500 text-sm hover:text-cyan-400 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                aria-label={s.label}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Brayan Oduor.
          </p>
        </div>
      </div>
    </footer>
  )
}
