import { useState } from 'react'
import HorizontalScroller from './common/HorizontalScroller/HorizontalScroller'
import './Projects.css'
import { useTranslation, Trans } from 'react-i18next'

const colors = {
  translation: '#31ff8e',
  localization: '#06B6D4',
  
}

const projects = [
  {
    title: 'projects.p1.title',
    category: 'projects.p1.category',
    desc: 'projects.p1.desc',
    tags: 'projects.p1.tags',
    metric: '',
    color: colors.translation,
    repo: "",
    link: "https://drive.google.com/drive/folders/1f6UjXVhB512rsp2wWoMQcS8_ancgZXtw?usp=sharing",
  },
  {
    title: 'projects.p2.title',
    category: 'projects.p2.category',
    desc: 'projects.p2.desc',
    tags: 'projects.p2.tags',
    metric: '',
    color: colors.translation,
    repo: "",
    link: "https://drive.google.com/drive/folders/1oDgIT6EBNxj28aeI6EcofSwxHohAu8dp?usp=sharing",
  },
  {
    title: 'projects.p3.title',
    category: 'projects.p3.category',
    desc: 'projects.p3.desc',
    tags: 'projects.p3.tags',
    metric: '',
    color: colors.localization,
    repo: "https://github.com/AtylaDaSilva/mock_fastfood_restaurant_website",
    link: "https://atyladasilva.github.io/mock_fastfood_restaurant_website/",
  },
]

export default function Projects() {
  const { t, i18n } = useTranslation();

  const all_category = t("projects.category_all")

  const categories = new Set([
    all_category,
    ...projects.map((p) => t(p.category, { returnObjects: true }))
  ])

  const [active, setActive] = useState(all_category)

  const filtered = active === all_category ? projects : projects.filter((p) => t(p.category) === active)

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
                      {t("projects.link_title_project")}
                    </a>
                  </div>
                )}
                {p.repo && (
                  <div className="project-card__link-container__item">
                    <a href={`${p.repo}`} target='_blank' className="project-card__link">
                      {t("projects.link_title_repo")}
                    </a>
                  </div>
                )}
              </div>

              <div className="project-card__tags">
                {t(p.tags, { returnObjects: true }).map((t) => (
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
