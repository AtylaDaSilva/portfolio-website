import { useState } from 'react'
import emailjs from '@emailjs/browser';
import Spinner from './common/Spinner/Spinner'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' })
  const [showSpinner, setShowSpinner] = useState(false)
  const [sent, setSent] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setShowSpinner(true)
    emailjs
    .send(
      import.meta.env.VITE_MENSAGERIA_SERVICE_ID,
      import.meta.env.VITE_MENSAGERIA_TEMPLATE_ID,
      { ...form, time: new Date().toLocaleString('pt-BR') },
      { publicKey: import.meta.env.VITE_MENSAGERIA_PUBLIC_KEY }
    )
    .then(
      (response) => {
        if (response.status === 200) {
          setSent(true)
          setForm({ name: '', email: '', project: '', message: '' })
        }
        setShowSpinner(false)
      },
      (error) => {
        console.error('Erro ao enviar mensagem: ', error);
        setShowSpinner(false)
      },
    );
  }

  const originalFormBtnContent = (
    <>
      Send Message
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    </>
  )

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        {/* Left */}
        <div className="contact__text">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="contact__heading">
            Ready to expand your projects to an <span className="gradient-text">overseas audience</span>?
          </h2>
          <p className="contact__sub">
            Send me and E-mail or contact me over on WhatsApp or LinkedIn. I'll respond in under 24 hours.
          </p>

          <div className="contact__channels">
            <a href="mailto:atyladasilva@outlook.com" className="contact__channel">
              <div className="contact__channel-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="contact__channel-label">My E-mail</div>
                <div className="contact__channel-value">atyladasilva@outlook.com</div>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/atyladasilva" target="_blank" rel="noreferrer" className="contact__channel">
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
              <h3>Message Sent!</h3>
              <p>I'll be in touch as quickly as possible. See you soon!</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={submit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your Name" value={form.name} onChange={handle} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input id="email" name="email" type="email" placeholder="email@provider.com" value={form.email} onChange={handle} required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="project">Service</label>
                <select id="project" name="project" value={form.project} onChange={handle} required>
                  <option value="" disabled>Choose a service...</option>
                  <option>Translation & Localization</option>
                  <option>Proofreading</option>
                  <option>Video Captioning</option>
                  <option>Interpreting</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Tell me more about your project</label>
                <textarea id="message" name="message" rows="5" placeholder="Get me up to speed on how I can help your project." value={form.message} onChange={handle} required />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                { !showSpinner && (originalFormBtnContent) }
                { showSpinner && (<Spinner size={24} color='#f1f5f9'/>) }
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
