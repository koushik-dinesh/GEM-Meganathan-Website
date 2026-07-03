import { motion } from 'framer-motion'
import { GraduationCap, Eye, Route, Zap, Check } from 'lucide-react'
import { ABOUT, WHY_CHOOSE, EXPERIENCE_AREAS } from '@/data/content'

const iconMap = { GraduationCap, Eye, Route, Zap }

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-20 bg-surface">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-wide mb-3">
              {ABOUT.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight leading-tight">
              {ABOUT.heading}
            </h2>
            <div className="mt-5 space-y-4 text-slate-muted leading-relaxed">
              {ABOUT.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-6 grid sm:grid-cols-2 gap-2.5">
              {EXPERIENCE_AREAS.map((area) => (
                <li key={area} className="flex items-center gap-2.5 text-sm text-navy">
                  <span className="w-5 h-5 rounded-md bg-brand-soft flex items-center justify-center shrink-0">
                    <Check size={12} className="text-brand-600" strokeWidth={2.5} />
                  </span>
                  {area}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {WHY_CHOOSE.map((item, i) => {
              const Icon = iconMap[item.icon]
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="p-5 rounded-2xl bg-white border border-border hover:shadow-[0_6px_24px_-10px_rgba(11,29,54,0.1)] hover:border-brand-500/15 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-soft flex items-center justify-center mb-3">
                    <Icon size={20} className="text-brand-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-semibold text-navy text-sm mb-1.5">{item.title}</h3>
                  <p className="text-xs text-slate-muted leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
