import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { HERO, CONTACT } from '@/data/content'
import { Button } from '@/components/ui/button'

const floatTransition = { duration: 5, repeat: Infinity, ease: 'easeInOut' }

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] flex items-center pt-32 lg:pt-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-white to-brand-soft/30" />
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(11,29,54,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(11,29,54,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="section-container relative w-full py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg"
          >
            <p className="text-brand-600 font-semibold text-sm tracking-wide uppercase mb-6">
              {HERO.eyebrow}
            </p>

            <h1 className="leading-[1.02]">
              <span className="flex flex-wrap items-baseline gap-x-2 sm:gap-x-3 text-[1.875rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold text-navy tracking-tight">
                <span className="text-[3.25rem] sm:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem] font-extrabold tracking-tighter leading-none text-brand-gradient shrink-0">
                  GeM
                </span>
                <span>Registration &amp;</span>
              </span>
              <span className="block text-[1.875rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold text-navy tracking-tight mt-1">
                Tender Consultant
              </span>
              <span className="block text-[1.5rem] sm:text-[1.875rem] lg:text-[2rem] font-semibold text-navy/90 tracking-tight mt-1.5">
                in Chennai
              </span>
            </h1>

            <p className="mt-7 sm:mt-8 text-base sm:text-lg text-slate-muted leading-relaxed">
              {HERO.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="accent" size="lg">
                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
                  Book Consultation
                  <ArrowRight size={18} />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#services">Explore Services</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full bg-brand-500/10 blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-navy/5 blur-2xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-brand-soft/50 blur-2xl" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={floatTransition}
                className="relative"
              >
                <div className="bg-white/80 backdrop-blur-xl border border-white/90 rounded-[30px] p-8 sm:p-10 shadow-[0_12px_48px_-16px_rgba(11,29,54,0.15)]">
                  <img
                    src="/gem.png"
                    alt="Government e-Marketplace (GeM)"
                    className="w-full h-auto max-h-56 sm:max-h-64 lg:max-h-72 object-contain mx-auto"
                    width={320}
                    height={320}
                    loading="eager"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
