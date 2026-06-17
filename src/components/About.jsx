import SectionHeader from './SectionHeader'

const expertise = [
  'Generative AI',
  'Agentic AI',
  'Knowledge Graphs',
  'Enterprise RAG',
  'Healthcare Ontologies',
  'AI Product Development',
]

export default function About() {
  return (
    <section id="about" className="relative bg-surface-elevated py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="About"
          title="About Abhigya AI Lab"
        />

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <p className="text-lg leading-relaxed text-text-secondary">
              Abhigya AI Lab is focused on AI Training, Knowledge Graphs,
              Retrieval-Augmented Generation (RAG), Agentic AI Systems, and AI
              Product Development.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              We help professionals, startups, and enterprises build practical AI
              solutions through training, consulting, and real-world
              implementations.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {expertise.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-surface-card px-3 py-1.5 text-xs font-medium text-text-secondary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="glow-border rounded-2xl border border-border bg-surface-card p-8">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/30 to-accent/10 ring-2 ring-accent/20">
                <span className="text-3xl font-bold text-accent-light">SS</span>
              </div>

              <h3 className="text-xl font-bold text-text-primary">
                Shuchismita Sahu
              </h3>
              <p className="mt-1 text-sm font-medium text-accent-light">
                Founder
              </p>

              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                AI Consultant, Knowledge Graph Architect, and AI Trainer with
                experience in Generative AI, Agentic AI, Knowledge Graphs,
                Enterprise RAG, Healthcare Ontologies, and AI Product
                Development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
