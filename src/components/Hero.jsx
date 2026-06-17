import Button from './Button'

function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="animate-grid-fade absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />
      <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-accent-glow/10 blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-light/5 blur-3xl" />
    </div>
  )
}

function FloatingNodes() {
  const nodes = [
    { x: '15%', y: '25%', delay: '0s', size: 'w-3 h-3' },
    { x: '75%', y: '20%', delay: '1s', size: 'w-2 h-2' },
    { x: '85%', y: '60%', delay: '2s', size: 'w-4 h-4' },
    { x: '25%', y: '70%', delay: '0.5s', size: 'w-2 h-2' },
    { x: '60%', y: '80%', delay: '1.5s', size: 'w-3 h-3' },
    { x: '45%', y: '15%', delay: '3s', size: 'w-2 h-2' },
  ]

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {nodes.map((node, i) => (
        <div
          key={i}
          className={`animate-float absolute rounded-full bg-accent/30 ${node.size}`}
          style={{ left: node.x, top: node.y, animationDelay: node.delay }}
        />
      ))}
      <svg className="absolute inset-0 h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <line x1="15%" y1="25%" x2="45%" y2="15%" stroke="#3b82f6" strokeWidth="1" />
        <line x1="45%" y1="15%" x2="75%" y2="20%" stroke="#3b82f6" strokeWidth="1" />
        <line x1="75%" y1="20%" x2="85%" y2="60%" stroke="#3b82f6" strokeWidth="1" />
        <line x1="25%" y1="70%" x2="60%" y2="80%" stroke="#3b82f6" strokeWidth="1" />
        <line x1="15%" y1="25%" x2="25%" y2="70%" stroke="#3b82f6" strokeWidth="1" />
      </svg>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <GridBackground />
      <FloatingNodes />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent-light">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-light" />
            </span>
            AI Training, Knowledge Graphs, Agentic AI, and Enterprise Consulting
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="gradient-text">Abhigya AI Lab</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-text-secondary sm:text-xl">
            Helping professionals and organizations build practical AI solutions
            through AI Training, Knowledge Graphs, Agentic AI, Enterprise RAG, and
            AI Consulting.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#training" variant="primary">
              Explore Training Programs
            </Button>
            <Button href="#contact" variant="secondary">
              Book a Consultation
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: '8+', label: 'Training Programs' },
              { value: '5', label: 'Consulting Services' },
              { value: '4', label: 'Case Studies' },
              { value: '100%', label: 'Practical Focus' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border/50 bg-surface-card/30 px-4 py-5 backdrop-blur-sm">
                <p className="text-2xl font-bold text-accent-light">{stat.value}</p>
                <p className="mt-1 text-xs text-text-muted sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#training" className="flex flex-col items-center gap-2 text-text-muted transition-colors hover:text-accent-light" aria-label="Scroll to training">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
