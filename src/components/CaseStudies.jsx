import { caseStudies } from '../data/siteData'
import SectionHeader from './SectionHeader'

function CaseStudyCard({ study, index }) {
  return (
    <div className="group rounded-2xl border border-border bg-surface-card overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
      <div className="border-b border-border bg-gradient-to-r from-accent/10 to-transparent px-6 py-5">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/20 text-sm font-bold text-accent-light">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-light transition-colors">
            {study.title}
          </h3>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div>
          <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-400/80">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
            Challenge
          </h4>
          <p className="text-sm leading-relaxed text-text-secondary">{study.challenge}</p>
        </div>

        <div>
          <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-light">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
            Solution
          </h4>
          <p className="text-sm leading-relaxed text-text-secondary">{study.solution}</p>
        </div>

        <div>
          <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Outcome
          </h4>
          <p className="text-sm leading-relaxed text-text-secondary">{study.outcome}</p>
        </div>
      </div>
    </div>
  )
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Case Studies"
          title="Real-World Impact"
          subtitle="Explore how we've helped organizations solve complex AI challenges with practical, production-ready solutions."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
