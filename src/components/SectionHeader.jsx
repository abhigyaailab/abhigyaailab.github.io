export default function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {label && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-light">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-text-secondary">
          {subtitle}
        </p>
      )}
    </div>
  )
}
