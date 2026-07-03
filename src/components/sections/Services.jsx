import { motion } from 'framer-motion'
import {
  UserCheck,
  Users,
  Building2,
  Package,
  PackageCheck,
  Award,
  Gavel,
  FileCheck,
  Truck,
  Receipt,
} from 'lucide-react'
import { SERVICES, SERVICES_SECTION } from '@/data/content'
import { cn } from '@/lib/utils'

const iconMap = {
  UserCheck,
  Users,
  Building2,
  Package,
  PackageCheck,
  Award,
  Gavel,
  FileCheck,
  Truck,
  Receipt,
}

const GRADIENT_ID = 'service-icon-gradient'

function ServiceIcon({ icon: Icon }) {
  return (
    <>
      <svg aria-hidden="true" className="absolute w-0 h-0 overflow-hidden">
        <defs>
          <linearGradient id={GRADIENT_ID} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#000932" />
            <stop offset="42%" stopColor="#002E8E" />
            <stop offset="100%" stopColor="#0760E1" />
          </linearGradient>
        </defs>
      </svg>
      <Icon size={22} strokeWidth={1.75} color={`url(#${GRADIENT_ID})`} />
    </>
  )
}

function getGridPlacement(index) {
  if (index === 8) return 'lg:col-start-2 xl:col-start-auto'
  if (index === 9) return 'lg:col-start-3 xl:col-start-auto'
  return ''
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
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-14"
        >
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-wide mb-3">
            {SERVICES_SECTION.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
            {SERVICES_SECTION.heading}
          </h2>
          <p className="mt-3 text-slate-muted">{SERVICES_SECTION.description}</p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon]
              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  whileHover={{ y: -6 }}
                  className={cn(
                    'group relative flex flex-col p-5 lg:p-6 rounded-2xl border border-border bg-white',
                    'hover:shadow-[0_12px_40px_-14px_rgba(7,96,225,0.16)] hover:border-brand-500/25',
                    'transition-all duration-300',
                    getGridPlacement(i)
                  )}
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-soft flex items-center justify-center mb-4 group-hover:bg-brand-500/15 transition-colors relative">
                    <ServiceIcon icon={Icon} />
                  </div>
                  <h3 className="font-semibold text-navy mb-2 leading-snug">{service.title}</h3>
                  <p className="text-sm text-slate-muted leading-relaxed">{service.description}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
