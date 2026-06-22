import { useState } from 'react'
import './Projects.css'

const projects = [
  {
    title: 'E-Commerce Order Orchestration',
    category: 'Integration',
    desc: 'End-to-end order pipeline connecting Shopify, warehouse WMS, Stripe, and a custom customer notification system. Processes 2,000+ orders daily with zero manual intervention.',
    tags: ['n8n', 'Shopify API', 'Webhooks', 'Stripe'],
    metric: '2K+ orders/day',
    color: '#7C3AED',
  },
  {
    title: 'AI Lead Qualification Engine',
    category: 'AI Automation',
    desc: 'Automated lead scoring and enrichment workflow. Incoming leads are classified by Claude, enriched with Apollo data, scored, and routed to the right sales rep in HubSpot — in under 30 seconds.',
    tags: ['Claude API', 'HubSpot', 'Make', 'Apollo.io'],
    metric: '30s avg. route time',
    color: '#06B6D4',
  },
  {
    title: 'Cross-Platform Reporting Suite',
    category: 'Data Pipeline',
    desc: 'Automated weekly business reports pulling from 8 data sources — GA4, Facebook Ads, Shopify, and more — consolidated into a polished Google Slides deck sent every Monday.',
    tags: ['Google Workspace', 'Airtable', 'Zapier', 'Looker'],
    metric: '8 sources unified',
    color: '#9D5CF6',
  },
  {
    title: 'SaaS Onboarding Orchestrator',
    category: 'Workflow',
    desc: 'Complete customer onboarding automation: account provisioning, Slack workspace setup, drip emails, in-app events, and stakeholder notifications — triggered on first payment.',
    tags: ['Stripe', 'Slack API', 'Intercom', 'n8n'],
    metric: '0 manual steps',
    color: '#7C3AED',
  },
  {
    title: 'Real-Time Inventory Sync',
    category: 'Integration',
    desc: 'Bidirectional inventory synchronization between WooCommerce, a physical POS system, and a 3PL warehouse — keeping stock counts accurate across every channel in real time.',
    tags: ['WooCommerce', 'REST API', 'Webhooks', 'Make'],
    metric: 'Real-time sync',
    color: '#06B6D4',
  },
  {
    title: 'Support Ticket Triage System',
    category: 'AI Automation',
    desc: 'AI-powered support triage that reads incoming Zendesk tickets, classifies urgency and department, drafts a suggested reply using Claude, and assigns to the correct agent.',
    tags: ['Zendesk', 'Claude API', 'Slack', 'Zapier'],
    metric: '60% faster response',
    color: '#9D5CF6',
  },
]

const categories = ['All', 'Integration', 'AI Automation', 'Data Pipeline', 'Workflow']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects__header">
          <span className="section-eyebrow">Portfolio</span>
          <h2 className="projects__heading">
            Automations built to<br />
            <span className="gradient-text">make a difference</span>
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="projects__tabs">
          {categories.map((c) => (
            <button
              key={c}
              className={`projects__tab${active === c ? ' projects__tab--active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {filtered.map((p) => (
            <div key={p.title} className="project-card">
              <div className="project-card__top">
                <span
                  className="project-card__category"
                  style={{ '--cat-color': p.color }}
                >
                  {p.category}
                </span>
                <span className="project-card__metric">{p.metric}</span>
              </div>

              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.desc}</p>

              <div className="project-card__tags">
                {p.tags.map((t) => (
                  <span key={t} className="service-card__tag">{t}</span>
                ))}
              </div>

              <a href="#contact" className="project-card__link">
                View case study
                <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
