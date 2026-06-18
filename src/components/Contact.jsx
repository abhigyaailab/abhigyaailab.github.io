import { useState } from 'react'
import { contactInfo } from '../data/siteData'
import SectionHeader from './SectionHeader'
import Button from './Button'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Consultation Request from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative bg-surface-elevated py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Contact"
          title="Let's Build Together"
          subtitle="Ready to start your AI journey? Reach out for training inquiries, consulting engagements, or corporate partnerships."
        />

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-2xl border border-border bg-surface-card p-8"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text-primary">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text-primary">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text-primary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or training needs..."
                  className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
            </div>

            <div className="mt-6">
              <Button type="submit" variant="primary" className="w-full sm:w-auto">
                Send Message
              </Button>
            </div>
          </form>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-surface-card p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-text-muted">
                Get in Touch
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="group flex items-center gap-3 text-text-secondary transition-colors hover:text-accent-light"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20">
                    <svg className="h-5 w-5 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Email</p>
                    <p className="text-sm font-medium">{contactInfo.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${contactInfo.phone.replace(/-/g, '')}`}
                  className="group flex items-center gap-3 text-text-secondary transition-colors hover:text-accent-light"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20">
                    <svg className="h-5 w-5 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Phone</p>
                    <p className="text-sm font-medium">{contactInfo.phone}</p>
                  </div>
                </a>

                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-text-secondary transition-colors hover:text-accent-light"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20">
                    <svg className="h-5 w-5 text-accent-light" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.062 2.062 0 114.126 0 2.062 2.062 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">LinkedIn</p>
                    <p className="text-sm font-medium">Shuchismita Sahu</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
              <h3 className="mb-2 text-sm font-semibold text-text-primary">
                Book a Consultation
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                Schedule a free 30-minute discovery call to discuss your AI
                training or consulting needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
