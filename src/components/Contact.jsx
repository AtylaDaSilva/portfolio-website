import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        {/* Left */}
        <div className="contact__text">
          <span className="section-eyebrow">Entre em Contato</span>
          <h2 className="contact__heading">
            Pronto para automatizar<br />
            <span className="gradient-text">seu negócio?</span>
          </h2>
          <p className="contact__sub">
            Fale sobre seu projeto. Responderei em até 24 horas com ideias de como podemos resolver.
          </p>

          <div className="contact__channels">
            <a href="mailto:[EMAIL_ADDRESS]" className="contact__channel">
              <div className="contact__channel-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="contact__channel-label">Email</div>
                <div className="contact__channel-value">atyladasilva@outlook.com</div>
              </div>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact__channel">
              <div className="contact__channel-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div>
                <div className="contact__channel-label">LinkedIn</div>
                <div className="contact__channel-value">https://www.linkedin.com/in/atyladasilva/</div>
              </div>
            </a>

            {/* <a href="https://calendly.com" target="_blank" rel="noreferrer" className="contact__channel">
              <div className="contact__channel-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div>
                <div className="contact__channel-label">Book a call</div>
                <div className="contact__channel-value">calendly.com/alexfoster</div>
              </div>
            </a> */}
          </div>
        </div>

        {/* Right: Form */}
        <div className="contact__form-wrap">
          {sent ? (
            <div className="contact__success">
              <div className="contact__success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>Message sent!</h3>
              <p>I'll be in touch within 24 hours. Talk soon!</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={submit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your name</label>
                  <input id="name" name="name" type="text" placeholder="Alex Johnson" value={form.name} onChange={handle} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input id="email" name="email" type="email" placeholder="alex@company.com" value={form.email} onChange={handle} required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="project">Project type</label>
                <select id="project" name="project" value={form.project} onChange={handle} required>
                  <option value="" disabled>Select a service...</option>
                  <option>Workflow Automation</option>
                  <option>Custom API Integration</option>
                  <option>Data Pipeline Engineering</option>
                  <option>AI-Powered Workflow</option>
                  <option>Automation Consulting</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Tell me about your project</label>
                <textarea id="message" name="message" rows="5" placeholder="Describe your current process and what you'd like to automate..." value={form.message} onChange={handle} required />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
