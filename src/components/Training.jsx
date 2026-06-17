import { trainingPrograms } from '../data/siteData'
import SectionHeader from './SectionHeader'
import Icon from './Icon'

function CourseCard({ course }) {
  return (
    <div className="group glow-border flex flex-col rounded-2xl glass-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/20 transition-all group-hover:bg-accent/20 group-hover:ring-accent/40">
        <Icon name={course.icon} />
      </div>

      <h3 className="mb-3 text-lg font-semibold text-text-primary group-hover:text-accent-light transition-colors">
        {course.title}
      </h3>

      <ul className="flex flex-1 flex-col gap-2">
        {course.topics.map((topic) => (
          <li key={topic} className="flex items-start gap-2 text-sm text-text-secondary">
            <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {topic}
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-border/50 pt-4">
        <a
          href="#contact"
          className="text-sm font-medium text-accent-light transition-colors hover:text-accent"
        >
          Enquire about this program &rarr;
        </a>
      </div>
    </div>
  )
}

export default function Training() {
  return (
    <section id="training" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/2 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Training Programs"
          title="Build Practical AI Skills"
          subtitle="Hands-on training programs designed for professionals, teams, and enterprises ready to implement AI in the real world."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {trainingPrograms.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-accent/20 bg-accent/5 px-6 py-8 text-center">
          <p className="text-lg font-medium text-text-primary">
            Contact for customized corporate training.
          </p>
          <p className="mt-2 text-sm text-text-secondary">
            Tailored programs for your team&apos;s specific needs, tools, and industry context.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-light transition-colors hover:text-accent"
          >
            Get in touch for corporate training
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
