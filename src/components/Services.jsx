import './Services.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: 'Workflow Automation',
    desc: 'Design and deploy end-to-end automation pipelines using Make, n8n, or Zapier — reducing manual effort and eliminating human error across your entire operation.',
    tags: ['Make', 'n8n', 'Zapier', 'Airtable'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M8 9l3 3-3 3M13 15h3M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z"/>
      </svg>
    ),
    title: 'Custom API Integrations',
    desc: 'Build robust, maintainable integrations between any set of tools — REST, GraphQL, webhooks, or real-time event streams — tailored precisely to your architecture.',
    tags: ['REST API', 'GraphQL', 'Webhooks', 'OAuth'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: 'Data Pipeline Engineering',
    desc: 'Extract, transform, and load data across platforms — Google Sheets, Airtable, databases, CRMs — with auditable, schedulable pipelines that always stay in sync.',
    tags: ['ETL', 'Google Workspace', 'SQL', 'Airtable'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
    title: 'AI-Powered Workflows',
    desc: 'Integrate LLMs and AI models into your business processes — from intelligent routing and classification to AI-drafted responses and automated decision trees.',
    tags: ['OpenAI', 'Claude API', 'LangChain', 'AI Agents'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6.002 6.002 0 0 0-4-5.659V5a2 2 0 1 0-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9"/>
      </svg>
    ),
    title: 'Monitoring & Alerting',
    desc: 'Set up intelligent monitoring, error handling, and multi-channel alerting on all your automation systems so you can sleep knowing your pipelines run 24/7.',
    tags: ['Slack Alerts', 'Error Handling', 'Retries', 'Logs'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Automation Consulting',
    desc: 'Not sure where to start? I map your existing processes, identify the highest-value automation opportunities, and deliver an actionable implementation roadmap.',
    tags: ['Audit', 'Strategy', 'Roadmap', 'ROI'],
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services__header">
          <span className="section-eyebrow">What I do</span>
          <h2 className="services__heading">
            Services built around<br />
            <span className="gradient-text">your stack</span>
          </h2>
          <p className="services__sub">
            From single-tool connections to complex multi-system orchestration —
            every solution is designed to be reliable, scalable, and easy to maintain.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <div className="service-card__icon">{s.icon}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              <div className="service-card__tags">
                {s.tags.map((tag) => (
                  <span key={tag} className="service-card__tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
