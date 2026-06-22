import './Hero.css'

/* SVG icons as inline components for zero external deps */
const icons = [
  {
    name: 'Notion',
    color: '#fff',
    bg: '#1A1A2E',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
      </svg>
    ),
    delay: '0s', duration: '6s', style: 'float-0',
  },
  {
    name: 'Slack',
    color: '#E01E5A',
    bg: '#1A0A10',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
      </svg>
    ),
    delay: '1s', duration: '7s', style: 'float-1',
  },
  {
    name: 'Zapier',
    color: '#FF4A00',
    bg: '#1A0900',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M12.003 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-.006 5.455l2.31 4.778 5.238-.024-4.226 3.063 1.614 5.01-4.936-3.588-4.936 3.588 1.616-5.01-4.226-3.063 5.238.024z"/>
      </svg>
    ),
    delay: '2s', duration: '5.5s', style: 'float-2',
  },
  {
    name: 'Webhook',
    color: '#7C3AED',
    bg: '#0E0A1A',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M8.5 0C5.46 0 3 2.46 3 5.5c0 2.28 1.39 4.25 3.39 5.11L3.78 15H1v2h4.5l.5-.5 2.89-5.5C9.26 11 9.38 11 9.5 11c.83 0 1.61-.2 2.31-.54l1.38 1.38c-.12.37-.19.76-.19 1.16 0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4c-.4 0-.79.07-1.16.19l-1.38-1.38c.34-.7.54-1.48.54-2.31C15 2.46 12.54 0 9.5 0zm0 2C11.43 2 13 3.57 13 5.5S11.43 9 9.5 9 6 7.43 6 5.5 7.57 2 9.5 2z"/>
      </svg>
    ),
    delay: '0.5s', duration: '8s', style: 'float-3',
  },
  {
    name: 'Google Sheets',
    color: '#0F9D58',
    bg: '#071A11',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M14.727 6.727H14V0H4.91C3.854 0 3 .854 3 1.91V22.09C3 23.146 3.854 24 4.91 24H19.09C20.146 24 21 23.146 21 22.09V9.455h-4.364c-1.072-.013-1.909-.85-1.909-1.91zM14 17.25H7.5v-1.5H14v1.5zm3-3H7.5v-1.5H17v1.5zm0-3H7.5V9.75H17v1.5zm0-4.795V6.727h-2.273V0l5.25 5.25-2.977.205z"/>
      </svg>
    ),
    delay: '1.5s', duration: '6.5s', style: 'float-4',
  },
  {
    name: 'Make',
    color: '#9D5CF6',
    bg: '#120A1A',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    delay: '2.5s', duration: '7.5s', style: 'float-5',
  },
  {
    name: 'API',
    color: '#06B6D4',
    bg: '#031218',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M8.5 8.5L3 12l5.5 3.5V8.5zm7 0V15.5L21 12l-5.5-3.5zM12 3v18M3 12h18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    delay: '3s', duration: '5s', style: 'float-6',
  },
]

/* Icon positions around the central cube */
const positions = [
  { top: '8%',  right: '15%' },
  { top: '5%',  right: '38%' },
  { top: '38%', right: '5%'  },
  { top: '60%', right: '40%' },
  { top: '65%', right: '12%' },
  { top: '15%', right: '60%' },
  { top: '50%', right: '65%' },
]

function FloatingIcon({ icon, pos, idx }) {
  return (
    <div
      className="floating-icon"
      style={{
        top: pos.top,
        right: pos.right,
        animationName: icon.style,
        animationDuration: icon.duration,
        animationDelay: icon.delay,
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        background: icon.bg,
      }}
      title={icon.name}
    >
      <span style={{ color: icon.color }}>{icon.svg}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background radial glows */}
      <div className="hero__bg-glow hero__bg-glow--violet" />
      <div className="hero__bg-glow hero__bg-glow--cyan" />

      <div className="container hero__inner">
        {/* ── LEFT: Text ── */}
        <div className="hero__content">
          <span className="section-eyebrow">Automations that scale</span>

          <h1 className="hero__headline">
            I build automations<br />
            that <span className="gradient-text">save time</span> and<br />
            <span className="gradient-text">drive results.</span>
          </h1>

          <p className="hero__sub">
            I design and build reliable automations and integrations that connect
            your tools, eliminate repetitive work, and scale your business —
            so you can focus on what matters.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-ghost">Let's Work Together</a>
          </div>
        </div>

        {/* ── RIGHT: Visual ── */}
        <div className="hero__visual">
          {/* Orbital ring */}
          <div className="orbital-ring" />
          <div className="orbital-ring orbital-ring--2" />

          {/* Central cube */}
          <div className="cube-wrap">
            <div className="cube">
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
                <path d="M40 8L72 26V58L40 76L8 58V26L40 8Z" fill="url(#cubeGrad)" stroke="rgba(124,58,237,0.5)" strokeWidth="1"/>
                <path d="M40 8V76M8 26L72 26M8 58L72 58" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8"/>
                <path d="M40 8L72 26L40 44L8 26L40 8Z" fill="url(#cubeTop)"/>
                <defs>
                  <linearGradient id="cubeGrad" x1="8" y1="8" x2="72" y2="76" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#9D5CF6"/>
                    <stop offset="100%" stopColor="#06B6D4"/>
                  </linearGradient>
                  <linearGradient id="cubeTop" x1="8" y1="8" x2="72" y2="44" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.18)"/>
                    <stop offset="100%" stopColor="rgba(255,255,255,0.02)"/>
                  </linearGradient>
                </defs>
              </svg>
              {/* Lightning bolt center */}
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cube__bolt" width="28" height="28">
                <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" fill="#fff" stroke="#fff" strokeWidth="0.5" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Floating tool icons */}
          {icons.map((icon, i) => (
            <FloatingIcon key={icon.name} icon={icon} pos={positions[i]} idx={i} />
          ))}

          {/* See how it works pill */}
          <a href="#services" className="see-how">
            <span className="see-how__play">
              <svg viewBox="0 0 10 12" fill="white" width="10" height="12">
                <path d="M0 0L10 6L0 12V0Z"/>
              </svg>
            </span>
            <span>See how it works</span>
          </a>
        </div>
      </div>

      {/* ── Trusted By strip ── */}
      <div className="tools-strip">
        <div className="container">
          <span className="tools-strip__label">I work with</span>
          <div className="tools-strip__logos">
            {['n8n', 'Make', '..zapier', 'Airtable', 'Google Workspace', 'API', 'webhooks'].map((t) => (
              <span key={t} className="tools-strip__logo">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
