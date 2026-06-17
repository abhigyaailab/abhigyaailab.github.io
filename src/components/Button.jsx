export default function Button({ children, href, variant = 'primary', onClick, type = 'button', className = '' }) {
  const base =
    'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface'

  const variants = {
    primary:
      'bg-accent text-white shadow-lg shadow-accent/25 hover:bg-accent-light hover:shadow-accent/40 hover:-translate-y-0.5',
    secondary:
      'border border-border bg-surface-card/50 text-text-primary hover:border-accent/50 hover:bg-surface-card hover:-translate-y-0.5',
    ghost:
      'text-accent-light hover:text-accent hover:bg-accent/10',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
