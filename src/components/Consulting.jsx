import { consultingServices } from '../data/siteData'
import SectionHeader from './SectionHeader'
import Icon from './Icon'

function ServiceCard({ service }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
      <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-accent/5 transition-all group-hover:bg-accent/10" />

      <div className="relative">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 ring-1 ring-accent/20">
          <Icon name={service.icon} className="text-accent-light" />
        </div>

        <h3 className="mb-3 text-xl font-semibold text-text-primary group-hover:text-accent-light transition-colors">
          {service.title}
        </h3>

        <p className="text-sm leading-relaxed text-text-secondary">
          {service.description}
        </p>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-light opacity-0 transition-all group-hover:opacity-100 hover:gap-2.5"
        >
          Learn more
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default function Consulting() {
  return (
    <section id="consulting" className="relative bg-surface-elevated py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Consulting Services"
          title="Expert AI Consulting"
          subtitle="Strategic guidance and hands-on implementation support for organizations building production-grade AI systems."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {consultingServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
