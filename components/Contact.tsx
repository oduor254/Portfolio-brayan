'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiSend, FiMessageSquare, FiDownload } from 'react-icons/fi'

const links = [
  {
    icon: <FiMail size={20} />,
    label: 'Email',
    value: 'oduoromondi6@gmail.com',
    href: 'mailto:oduoromondi6@gmail.com',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: <FiLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/brayan-oduor',
    href: 'https://linkedin.com/in/',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: <FiGithub size={20} />,
    label: 'GitHub',
    value: 'github.com/brayan-oduor',
    href: 'https://github.com/',
    color: 'text-slate-300',
    bg: 'bg-white/5',
    border: 'border-white/10',
  },
  {
    icon: <FiMessageSquare size={20} />,
    label: 'WhatsApp',
    value: 'Available on request',
    href: '#',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    await new Promise((r) => setTimeout(r, 1200))
    setSending(false)
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="orb orb-cyan w-80 h-80 -bottom-20 -right-20 opacity-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 font-mono text-sm mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-cyan-400" /> Get In Touch <span className="w-8 h-px bg-cyan-400" />
          </p>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="section-subtitle mx-auto">
            Have a data challenge or dashboard project in mind? I&apos;d love to hear about it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left — links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white font-bold text-xl mb-6">Contact Details</h3>
            <div className="space-y-4 mb-8">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className={`flex items-center gap-4 p-4 glass-card hover:${l.border} transition-all duration-200 hover:-translate-y-0.5 group`}
                >
                  <div className={`w-10 h-10 rounded-lg ${l.bg} ${l.border} border flex items-center justify-center ${l.color}`}>
                    {l.icon}
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">{l.label}</p>
                    <p className={`text-sm font-medium group-hover:${l.color} transition-colors text-slate-300`}>
                      {l.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full py-3.5 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-shadow"
            >
              <FiDownload size={18} /> Download Resume
            </motion.a>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-6">
              <h3 className="text-white font-bold text-xl mb-6">Send a Message</h3>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <FiSend size={28} className="text-emerald-400" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">Message Sent!</h4>
                  <p className="text-slate-400">I&apos;ll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-cyan-400 text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-400 text-xs mb-1.5 block">Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 text-xs mb-1.5 block">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 text-xs mb-1.5 block">Subject</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Dashboard project, collaboration..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 text-xs mb-1.5 block">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project or data challenge..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-xl flex items-center justify-center gap-2 disabled:opacity-70 hover:shadow-lg hover:shadow-cyan-500/20 transition-shadow"
                  >
                    {sending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={16} /> Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
