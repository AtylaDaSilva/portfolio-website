import { useState } from 'react'
import HorizontalScroller from './common/HorizontalScroller/HorizontalScroller'
import './Projects.css'
import { useTranslation, Trans } from 'react-i18next'

const colors = {
  integracao: '#31ff8e',
  webApp: '#06B6D4',
  automacao: '#e9d30d',
}

export default function Projects() {
  const { t, i18n } = useTranslation();

  const projects = t("projects.list", { returnObjects: true })

  const masterCategory = t("projects.master_category")  // "All" category

  const categories = new Set([
    masterCategory,
    ...projects.map((p) => p.category)
  ])

  // Categories will be filtered through it's index
  const catIndexes = Array.from(categories.values())

  const [active, setActive] = useState(0)
  const filtered = active === catIndexes.indexOf(masterCategory) ? projects : projects.filter((p) => catIndexes.indexOf(p.category) === active)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects__header">
          <span className="section-eyebrow">{t("projects.eyebrow")}</span>
          <h2 className="projects__heading">
            {
              <Trans
                i18nKey="projects.header"
                components={{ highlight: <span className="gradient-text" /> }}
              />
            }
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="projects__tabs">
          {[...catIndexes].map((c, idx) => (
            <button
              key={c}
              className={`projects__tab${active === idx ? ' projects__tab--active' : ''}`}
              onClick={() => setActive(idx)}
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
                  style={{ '--cat-color': colors[p.color] }}
                >
                  {t(p.category)}
                </span>
                <span className="project-card__metric">{p.metric}</span>
              </div>

              <h3 className="project-card__title">{t(p.title)}</h3>
              <p className="project-card__desc">{t(p.desc)}</p>

              <div className="project-card__link-container">
                {p.link && (
                  <div className="project-card__link-container__item">
                    <a href={`${p.link}`} target='_blank' className="project-card__link">
                      {t("projects.link_label")}
                    </a>
                  </div>
                )}
                {p.repo && (
                  <div className="project-card__link-container__item">
                    <a href={`${p.repo}`} target='_blank' className="project-card__link">
                      {t("projects.repo_label")}
                    </a>
                  </div>
                )}
              </div>

              <div className="project-card__tags">
                {p.tags.map((tag) => <span key={tag} className="service-card__tag">{tag}</span>)}
              </div>
            </div>
          ))}
        </HorizontalScroller>
      </div>
    </section>
  )
}