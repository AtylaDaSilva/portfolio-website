import './Services.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Automação de Workflow',
    desc: 'Projeto e implanto pipelines de automação de ponta a ponta usando Make, n8n ou Zapier — reduzindo o esforço manual e eliminando erros humanos em toda a sua operação.',
    tags: ['Make', 'n8n', 'Zapier', 'Airtable'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M8 9l3 3-3 3M13 15h3M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z" />
      </svg>
    ),
    title: 'Integrações Com APIs Customizadas',
    desc: 'Construo integrações robustas e fáceis de manter entre qualquer conjunto de ferramentas — REST, GraphQL, webhooks ou fluxos de eventos em tempo real — adaptadas precisamente à sua arquitetura.',
    tags: ['REST API', 'GraphQL', 'Webhooks', 'Python'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Manipulação e Análise de Dados',
    desc: 'Extraio, transformo e carrego dados entre as maiores plataformas — Google Sheets, Airtable, databases, CRMs, ERPs — utilizando pipelines auditáveis e agendáveis que sempre ficam em sincronia.',
    tags: ['ETL', 'Google Workspace', 'SQL', 'NoSQL', 'BigQuery', 'Airtable', 'Python'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <circle cx="12" cy="12" r="3" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    title: 'Workflows Impulsionados Por IA',
    desc: 'Integro LLMs e modelos de IA em seus processos — desde roteamento inteligente e classificação até respostas geradas por IA e árvores de decisão automatizadas.',
    tags: ['OpenAI', 'Claude API', 'Groq', 'LangChain', 'Agentes IA'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6.002 6.002 0 0 0-4-5.659V5a2 2 0 1 0-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9" />
      </svg>
    ),
    title: 'Monitoramento e Alertas',
    desc: 'Configuro monitoramento inteligente, tratamento de erros e alertas multicanal em todos os seus sistemas de automação, para que você possa dormir tranquilo sabendo que seus pipelines funcionam 24/7.',
    tags: ['Mensageria', 'Slack Alerts', 'Error Handling', 'Retries', 'Logs'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Consultoria em Automação',
    desc: 'Não sabe por onde começar? Eu mapeio seus processos atuais, identifico as oportunidades de automação de maior valor e entrego um roadmap de implementação acionável.',
    tags: ['Auditoria', 'Estratégia', 'Roadmap', 'ROI'],
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services__header">
          <span className="section-eyebrow">O Que Eu Faço</span>
          <h2 className="services__heading">
            Serviços construídos em torno da<br />
            <span className="gradient-text">sua stack</span>
          </h2>
          <p className="services__sub">
            Da conexão de ferramentas únicas à orquestração complexa de vários sistemas —
            cada solução é projetada para ser confiável, escalável e fácil de manter.
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
