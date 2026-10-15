import { useState } from 'react'
import HorizontalScroller from './common/HorizontalScroller/HorizontalScroller'
import './Projects.css'

const colors = {
  translation: '#31ff8e',
  localization: '#06B6D4',
  
}

const projects = [
  {
    title: 'General Photography Contract',
    category: 'Translation',
    desc: 'English to Portuguese translation of a generic template for a Photography services contract.',
    tags: ['Translation','English', 'Portuguese', 'Contract'],
    metric: '',
    color: colors.translation,
    repo: "",
    link: "https://drive.google.com/drive/folders/1f6UjXVhB512rsp2wWoMQcS8_ancgZXtw?usp=sharing",
  },
  {
    title: 'University Course Certificate',
    category: 'Translation',
    desc: 'Portuguese to English translation of a certificate for a Course at a local State University.',
    tags: ['Translation','Portuguese', 'English', 'Certificate'],
    metric: '',
    color: colors.translation,
    repo: "",
    link: "https://drive.google.com/drive/folders/1oDgIT6EBNxj28aeI6EcofSwxHohAu8dp?usp=sharing",
  },
  {
    title: 'Fast Food Website Localization',
    category: 'Localization',
    desc: 'Full localization of a Fast Food website, directly inside the source HTML code.',
    tags: ['Localization','English', 'Portuguese', 'Website', 'HTML'],
    metric: '',
    color: colors.localization,
    repo: "https://github.com/AtylaDaSilva/mock_fastfood_restaurant_website",
    link: "https://atyladasilva.github.io/mock_fastfood_restaurant_website/",
  },
]

const categories = new Set([
  "All",
  ...projects.map((p) => p.category)
])

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects__header">
          <span className="section-eyebrow">My Portfolio</span>
          <h2 className="projects__heading">
            Let my <span className="gradient-text">actions</span> speak louder than my words.
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
                      Go To Project
                    </a>
                  </div>
                )}
                {p.repo && (
                  <div className="project-card__link-container__item">
                    <a href={`${p.repo}`} target='_blank' className="project-card__link">
                      Go To Repository
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
