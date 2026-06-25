import { trainingPrograms, syllabusRepoUrl } from '../data/siteData'
import SectionHeader from './SectionHeader'
import Button from './Button'
import Icon from './Icon'

function SyllabusCard({ course }) {
  const hasSyllabus = course.syllabusHref && course.syllabusHref !== '#'

  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-surface-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
      <div className="mb-4 flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/20 transition-all group-hover:bg-accent/20 group-hover:ring-accent/40">
          <Icon name={course.icon} />
        </div>
        <h3 className="pt-1 text-base font-semibold leading-snug text-text-primary transition-colors group-hover:text-accent-light sm:text-lg">
          {course.title}
        </h3>
      </div>

      <ul className="mb-5 flex flex-1 flex-col gap-1.5">
        {course.topics.slice(0, 4).map((topic) => (
          <li key={topic} className="flex items-center gap-2 text-xs text-text-muted sm:text-sm">
            <span className="h-1 w-1 shrink-0 rounded-full bg-accent/50" />
            {topic}
          </li>
        ))}
        {course.topics.length > 4 && (
          <li className="text-xs text-text-muted">+{course.topics.length - 4} more topics</li>
        )}
      </ul>

      {hasSyllabus ? (
        <a
          href={course.syllabusHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-accent-light transition-all hover:gap-2.5"
        >
          View syllabus
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      ) : (
        <span className="mt-auto text-sm text-text-muted">Syllabus coming soon</span>
      )}
    </article>
  )
}

export default function CourseSyllabus() {
  return (
    <section id="course-syllabus" className="relative bg-surface-elevated py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Course Syllabus"
          title="Training Program Syllabi"
          subtitle="Detailed syllabi for each program. Review modules, learning outcomes, and schedules before you enroll."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {trainingPrograms.map((course) => (
            <SyllabusCard key={course.id} course={course} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href={syllabusRepoUrl} variant="secondary">
            View All Syllabi on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
