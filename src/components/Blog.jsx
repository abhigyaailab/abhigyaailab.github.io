import { blogPosts } from '../data/siteData'
import SectionHeader from './SectionHeader'
import Button from './Button'

function BlogCard({ post }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-surface-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
      <div className="h-2 bg-gradient-to-r from-accent/60 via-accent-light/40 to-accent/60" />

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3 text-xs text-text-muted">
          <time dateTime={post.date}>{post.date}</time>
          <span className="h-1 w-1 rounded-full bg-text-muted" />
          <span>{post.readTime}</span>
        </div>

        <h3 className="mb-3 text-lg font-semibold text-text-primary transition-colors group-hover:text-accent-light">
          <a href={post.href}>{post.title}</a>
        </h3>

        <p className="flex-1 text-sm leading-relaxed text-text-secondary">
          {post.excerpt}
        </p>

        <a
          href={post.href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-light transition-all hover:gap-2.5"
        >
          Read article
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </article>
  )
}

export default function Blog() {
  return (
    <section id="blog" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Blog"
          title="Insights & Perspectives"
          subtitle="Thoughts on building reliable AI systems, from evaluation pitfalls to production lessons learned."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="#" variant="secondary">
            Read More Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
