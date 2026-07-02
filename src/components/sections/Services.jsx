import { motion } from 'framer-motion'
import {
  UserCheck,
  Package,
  Gavel,
  FileCheck,
  Truck,
  Receipt,
} from 'lucide-react'
import { SERVICES, SERVICES_SECTION } from '@/data/content'

const iconMap = {
  UserCheck,
  Package,
  Gavel,
  FileCheck,
  Truck,
  Receipt,
}

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-3">
            {SERVICES_SECTION.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
            {SERVICES_SECTION.heading}
          </h2>
          <p className="mt-3 text-slate-muted">{SERVICES_SECTION.description}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="group p-6 rounded-2xl border border-border bg-white hover:shadow-[0_8px_30px_-12px_rgba(11,29,54,0.12)] hover:border-accent/20 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-accent-soft flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                  <Icon size={22} className="text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="font-semibold text-navy mb-2">{service.title}</h3>
                <p className="text-sm text-slate-muted leading-relaxed">{service.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
