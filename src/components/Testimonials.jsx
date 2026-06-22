import './Testimonials.css'

const testimonials = [
  {
    quote:
      "Alex built us an order automation that processes thousands of transactions daily without a single issue. We went from 4 hours of manual work to zero. Absolutely game-changing.",
    name: 'Sarah Chen',
    role: 'Head of Operations, Luminary Commerce',
    initials: 'SC',
    color: '#7C3AED',
  },
  {
    quote:
      "The AI lead routing system Alex built us cut our response time from hours to under a minute. Our sales team is now closing more deals because they're talking to the right prospects faster.",
    name: 'Marcus Rivera',
    role: 'VP Sales, ScaleLoop SaaS',
    initials: 'MR',
    color: '#06B6D4',
  },
  {
    quote:
      "Working with Alex felt like having a senior engineer and a process consultant in one. He didn't just automate what we asked — he spotted inefficiencies we didn't even know we had.",
    name: 'Priya Nambiar',
    role: 'CTO, DataVault Analytics',
    initials: 'PN',
    color: '#9D5CF6',
  },
]

function Stars() {
  return (
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" fill="#F59E0B" width="14" height="14">
          <path d="M8 1l1.854 3.756 4.146.603-3 2.924.708 4.127L8 10.25l-3.708 2.16.708-4.127-3-2.924 4.146-.603L8 1z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <span className="section-eyebrow">Client feedback</span>
          <h2 className="testimonials__heading">
            Trusted by teams who<br />
            <span className="gradient-text">value their time</span>
          </h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map(({ quote, name, role, initials, color }) => (
            <div key={name} className="t-card">
              <Stars />
              <blockquote className="t-card__quote">"{quote}"</blockquote>
              <div className="t-card__author">
                <div className="t-card__avatar" style={{ background: `${color}22`, border: `1px solid ${color}44`, color }}>
                  {initials}
                </div>
                <div>
                  <div className="t-card__name">{name}</div>
                  <div className="t-card__role">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
