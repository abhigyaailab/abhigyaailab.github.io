export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/30">
              <span className="text-sm font-bold text-accent-light">A</span>
            </div>
            <span className="text-xl font-bold text-text-primary">
              Abhigya <span className="text-accent-light">AI Lab</span>
            </span>
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-text-secondary">
            AI Training | AI Consulting | Knowledge Graphs | Agentic AI
          </p>

          <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

          <p className="text-sm text-text-muted">
            Copyright &copy; 2026 Abhigya AI Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
