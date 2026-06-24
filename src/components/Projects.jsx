import { useState } from 'react'
import './Projects.css'

const projects = [
  {
    title: 'Orquestração de Pedidos E-Commerce',
    category: 'Integração',
    desc: 'Pipeline de pedidos de ponta a ponta conectando Shopify, WMS de armazém, Stripe e um sistema de notificação de cliente personalizado. Processa mais de 2.000 pedidos por dia sem intervenção manual.',
    tags: ['n8n', 'Shopify API', 'Webhooks', 'Python', 'Pydantic', 'SQL'],
    metric: '2K+ pedidos/dia',
    color: '#7C3AED',
  },
  {
    title: 'Motor de Qualificação de Leads com IA',
    category: 'Automação de IA',
    desc: 'Fluxo de trabalho automatizado de pontuação e enriquecimento de leads. Leads recebidos são classificados por Claude, enriquecidos com dados da Apollo, pontuados e roteados para o representante de vendas correto no HubSpot — em menos de 30 segundos.',
    tags: ['Claude API', 'HubSpot', 'Make', 'Apollo.io'],
    metric: '30s avg. route time',
    color: '#06B6D4',
  },
  {
    title: 'Suite de Relatórios Multi-Plataforma',
    category: 'Data Pipeline',
    desc: 'Relatórios semanais de negócios automatizados extraídos de múltiplas fontes de dados — GA4, Facebook Ads, Shopify e mais — consolidados em um deck polido do Google Slides enviado toda segunda-feira.',
    tags: ['Google Workspace', 'Airtable', 'Zapier', 'Looker'],
    metric: '8 sources unified',
    color: '#9D5CF6',
  },
  {
    title: 'Orquestração de Onboarding de Clientes SaaS',
    category: 'Workflow',
    desc: 'Automação completa de onboarding de clientes: provisionamento de contas, configuração de workspace no Slack, e-mails, eventos no aplicativo e notificações a stakeholders — acionados no primeiro pagamento.',
    tags: ['Stripe', 'Slack API', 'Intercom', 'n8n'],
    metric: '0 manual steps',
    color: '#7C3AED',
  },
  {
    title: 'Sincronização de Estoque em Tempo Real',
    category: 'Integração',
    desc: 'Sincronização bidirecional de estoque entre WooCommerce, sistema POS físico e armazém 3PL — mantendo contagens precisas em todos os canais em tempo real.',
    tags: ['WooCommerce', 'REST API', 'Webhooks', 'Make'],
    metric: 'Sincronização em tempo real',
    color: '#06B6D4',
  },
  {
    title: 'Sistema de Triagem de Tickets de Suporte',
    category: 'Automação de IA',
    desc: 'Sistema de triagem de suporte baseado em IA que lê tickets de suporte recebidos, classifica urgência e departamento, gera uma resposta sugerida usando Claude e atribui ao agente correto.',
    tags: ['Zendesk', 'Claude API', 'Slack', 'Zapier'],
    metric: '60% faster response',
    color: '#9D5CF6',
  },
]

const categories = ['All', 'Integração', 'Automação de IA', 'Data Pipeline', 'Workflow']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects__header">
          <span className="section-eyebrow">Portfólio</span>
          <h2 className="projects__heading">
            Automações criadas para<br />
            <span className="gradient-text">fazer a diferença</span>
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
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
