import './About.css'

const stats = [
  { value: '50+', label: 'Automations Built' },
  { value: '30+', label: 'Clients Helped' },
  { value: '10k+', label: 'Hours Saved' },
  { value: '99%', label: 'Uptime Rate' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        {/* Left */}
        <div className="about__text">
          <span className="section-eyebrow">About me</span>
          <h2 className="about__heading">
            Turning complex workflows into<br />
            <span className="gradient-text">elegant automations</span>
          </h2>
          <p className="about__body">
            I'm Alex Foster — a software engineer with 6 years of experience designing
            intelligent automations and integrations. I bridge the gap between your
            favorite tools and the data flows that power your business.
          </p>
          <p className="about__body">
            My stack covers everything from low-code platforms like Make and Zapier
            to custom API integrations and event-driven architectures — all built to
            run reliably, scale cleanly, and require minimal maintenance.
          </p>
          <a href="#contact" className="btn-primary" style={{ marginTop: 28, display: 'inline-flex' }}>
            Get in touch
            <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Right: stats */}
        <div className="about__stats">
          {stats.map(({ value, label }) => (
            <div key={label} className="stat-card">
              <span className="stat-card__value gradient-text">{value}</span>
              <span className="stat-card__label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
