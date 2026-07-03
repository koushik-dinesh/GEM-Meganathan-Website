import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, ArrowRight, CheckCircle2 } from 'lucide-react'
import { CONTACT, CONTACT_SECTION, FOUNDER } from '@/data/content'
import { Button } from '@/components/ui/button'

const contactItems = [
  {
    icon: MapPin,
    label: 'Office Address',
    lines: [CONTACT.businessName, ...CONTACT.addressLines],
  },
  {
    icon: Phone,
    label: 'Phone Number',
    phones: CONTACT.phones,
  },
  {
    icon: Mail,
    label: 'Email',
    value: CONTACT.emails.join(' · '),
    href: `mailto:${CONTACT.email}`,
  },
]

function FounderProfileCard() {
  return (
    <div className="relative h-full">
      <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-brand-500/10 via-transparent to-navy/5 blur-sm" />
      <div className="relative h-full bg-white/85 backdrop-blur-xl border border-white/90 rounded-[28px] p-5 sm:p-6 shadow-[0_8px_32px_-12px_rgba(11,29,54,0.12),0_2px_8px_-2px_rgba(11,29,54,0.06)] flex flex-col justify-center">
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden ring-2 ring-white shadow-md shrink-0">
            <img
              src="/founder.png"
              alt={`${FOUNDER.name} — ${FOUNDER.role}`}
              className="w-full h-full object-cover object-top"
              width={112}
              height={128}
              loading="lazy"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-bold text-navy tracking-tight">{FOUNDER.name}</h3>
            <p className="text-sm text-brand-600 font-medium mt-0.5">{FOUNDER.role}</p>
            <p className="text-sm text-slate-muted mt-2 leading-relaxed">{FOUNDER.description}</p>
            <div className="mt-4 inline-flex items-center gap-2 bg-brand-soft/80 rounded-xl px-3 py-2 border border-brand-500/10">
              <CheckCircle2 size={14} className="text-brand-600 shrink-0" />
              <span className="text-xs font-semibold text-navy">{FOUNDER.badge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-wide mb-3">
            {CONTACT_SECTION.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
            {CONTACT_SECTION.heading}
          </h2>
          <p className="mt-3 text-slate-muted">{CONTACT_SECTION.description}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1"
          >
            <FounderProfileCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="order-2"
          >
            <div className="h-full p-6 sm:p-7 rounded-2xl bg-surface border border-border shadow-[0_4px_24px_-8px_rgba(11,29,54,0.08)]">
              <div className="space-y-5">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-soft flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-brand-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-light uppercase tracking-wide mb-1">
                        {item.label}
                      </p>
                      {item.lines ? (
                        <div className="text-sm font-semibold text-navy space-y-0.5">
                          {item.lines.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                        </div>
                      ) : item.phones ? (
                        <p className="text-sm font-semibold text-navy">
                          {item.phones.map((phone, i) => (
                            <span key={phone.tel}>
                              {i > 0 && <span className="text-slate-muted font-normal"> / </span>}
                              <a
                                href={`tel:${phone.tel}`}
                                className="hover:text-brand-600 transition-colors"
                              >
                                {phone.display}
                              </a>
                            </span>
                          ))}
                        </p>
                      ) : item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-semibold text-navy hover:text-brand-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-navy">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 pt-5 border-t border-border">
                <Button asChild variant="accent" size="lg" className="w-full sm:w-auto">
                  <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
                    Book a Consultation
                    <ArrowRight size={18} />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 rounded-2xl overflow-hidden border border-border h-52 sm:h-60 bg-surface relative"
        >
          <iframe
            title={`Office location — ${CONTACT.businessName}, Choolaimadu, Chennai`}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&z=16&output=embed`}
            className="absolute inset-0 w-full h-full border-0 grayscale-[25%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}
