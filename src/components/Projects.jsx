import { useState } from 'react'
import HorizontalScroller from './common/HorizontalScroller/HorizontalScroller'
import './Projects.css'

const colors = {
  integracao: '#31ff8e',
  webApp: '#06B6D4',
  automacao: '#e9d30d',
}

const projects = [
  {
    title: 'Integração de Pedidos E-Commerce',
    category: 'Integração',
    desc: 'Pipeline bi-directional de integração de pedidos conectando o hub de Marketplaces Plugg.To a um sistema ERP. Processa mais de 900 pedidos por dia sem intervenção manual.',
    tags: ['REST API', 'Webhooks', 'Python', 'Pydantic', 'SQL'],
    metric: '900+ pedidos/dia',
    color: colors.integracao,
    repo: "",
    link: "",
  },
  {
    title: 'Parser de Guias de Recolhimento',
    category: 'Automação',
    desc: 'Automação para a leitura e extração de dados de guias de recolhimento em PDF, convertendo-os em planilhas Excel para análise e processamento posterior.',
    tags: ['PHP', 'IMAP', 'Excel', 'PDF'],
    metric: 'Processamento automático',
    color: colors.automacao,
    repo: "",
    link: "",
  },
  {
    title: 'Sincronização de Estoque em Tempo Real',
    category: 'Integração',
    desc: 'Sincronização bi-direcional de estoque entre WMS LinkedBy e ERP Sankhya — mantendo contagens precisas em todos os canais em tempo real.',
    tags: ['REST API', 'Python', 'SQL'],
    metric: 'Sincronização em tempo real',
    color: colors.integracao,
    repo: "",
    link: "",
  },
  {
    title: 'Sistema de Geração de Senhas Pseudo-Randômicas',
    category: 'Aplicação Web',
    desc: 'Sistema de geração de senhas seguras, com opções configuráveis, histórico de senhas geradas e um medidor de força de senha.',
    tags: ['React', 'TypeScript', 'Bootstrap', 'Jest'],
    metric: 'Senhas 100% seguras',
    color: colors.webApp,
    repo: "https://github.com/AtylaDaSilva/random-password-generator",
    link: "https://atyladasilva.github.io/random-password-generator/"
  },
  {
    title: 'Rastreio de Entregas em Tempo Real',
    category: 'Integração',
    desc: 'Sincronização em tempo real de entregas entre o sistema de rastreio Pathfind e o ERP Sankhya, garantindo que os status de entrega estejam sempre atualizados.',
    tags: ['REST API', 'Python', 'SQL'],
    metric: 'Rastreio em tempo real',
    color: colors.integracao,
    repo: "",
    link: "",
  },
  {
    title: 'Editor de Markdown do GitHub',
    category: 'Aplicação Web',
    desc: 'Aplicativo para edição de arquivos de Markdown com sintaxe específica do GitHub. Possui suporte a comandos básicos (negrito, itálico, etc.), imagens, links, taks lists, footnotes, tabelas e alertas.',
    tags: ['Next.js', 'React', 'TypeScript', 'Bootstrap', 'Jest'],
    metric: 'Markdown GitHub',
    color: colors.webApp,
    repo: "https://github.com/AtylaDaSilva/octomark",
    link: "https://octomark-zeta.vercel.app/"
  },
  {
    title: 'Scripts de Download de Vídeos do YouTube',
    category: 'Automação',
    desc: 'Scripts batch para download de vídeos do YouTube em lote, com suporte de download de playlists em múltiplos formatos e resoluções.',
    tags: ['CLI', 'Batch',],
    metric: 'Download em lote',
    color: colors.automacao,
    repo: "https://github.com/AtylaDaSilva/octomark",
    link: "https://octomark-zeta.vercel.app/"
  },
]

const categories = new Set([
  "Todas",
  ...projects.map((p) => p.category)
])

export default function Projects() {
  const [active, setActive] = useState('Todas')

  const filtered = active === 'Todas' ? projects : projects.filter((p) => p.category === active)

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
          {[...categories].map((c) => (
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
        <HorizontalScroller className="projects__container">
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

              <div className="project-card__link-container">
                {p.link && (
                  <div className="project-card__link-container__item">
                    <a href={`${p.link}`} target='_blank' className="project-card__link">
                      Visitar Projeto
                    </a>
                  </div>
                )}
                {p.repo && (
                  <div className="project-card__link-container__item">
                    <a href={`${p.repo}`} target='_blank' className="project-card__link">
                      Ver Repositório
                    </a>
                  </div>
                )}
              </div>

              <div className="project-card__tags">
                {p.tags.map((t) => (
                  <span key={t} className="service-card__tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </HorizontalScroller>
      </div>
    </section>
  )
}
