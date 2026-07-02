import { NAV_LINKS, FOOTER_SERVICES, CONTACT, FOOTER } from '@/data/content'
import Logo from '@/components/ui/Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white py-12">
      <div className="section-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-block mb-4 bg-white rounded-lg px-3 py-2">
              <Logo className="h-8" />
            </a>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">{FOOTER.description}</p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/55 hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-white/55 hover:text-accent transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-white/55">
              <li>{CONTACT.address}</li>
              <li>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="hover:text-accent transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              {CONTACT.emails.map((email) => (
                <li key={email}>{email}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <p className="text-sm text-white/40 text-center sm:text-left">
            &copy; {year} {FOOTER.copyright}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
