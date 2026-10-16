import './Services.css'
import { SERVICES } from '../utils/constants.jsx'
import HorizontalScroller from './common/HorizontalScroller/HorizontalScroller.jsx'
import { useTranslation, Trans } from 'react-i18next'


export default function Services() {
  const { t, i18n } = useTranslation();
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services__header">
          <span className="section-eyebrow">{t("services.eyebrow")}</span>
          <h2 className="services__heading">
            {
              <Trans
                i18nKey="services.header"
                components={{
                  highlight: <span className="gradient-text" />,
                  breakline: <br />
                }}
              />
            }
          </h2>
        </div>

        <HorizontalScroller maxScrollSpeed={20} className="services__container">
            {SERVICES.map((s) => (
              <div key={t(s.title)} className="service-card">
                <div className="service-card__header">
                  <div className="service-card__icon">{s.icon}</div>
                  <h3 className="service-card__title">{t(s.title)}</h3>
                </div>
                <p className="service-card__desc">{t(s.desc)}</p>
                <div className="service-card__tags">
                  {t(s.tags, { returnObjects: true }).map((tag) => (
                    <span key={tag} className="service-card__tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </HorizontalScroller>
      </div>
    </section>
  )
}
