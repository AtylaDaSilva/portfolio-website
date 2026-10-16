import './About.css'
import DownloadCVButton from './common/DownloadCVButton/DownloadCVButton'
import Avatar from './common/Avatar/Avatar';
import { useTranslation, Trans } from 'react-i18next';

// const stats = [
//   { value: '15+', label: 'Automações Construídas' },
//   { value: '5k+', label: 'Horas Economizadas' },
//   { value: 'R$150K+', label: 'Econimizado em Custos' },
//   { value: '99%', label: 'Taxa de Disponibilidade' },
// ]

export default function About() {
  const { t, i18n } = useTranslation();
  const years = new Date().getFullYear() - 2022
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        {/* Left */}
        <div className="about__text">
          <span className="section-eyebrow">{t("about.eyebrow")}</span>
          <h2 className="about__heading">
            {
              <Trans
                i18nKey="about.header"
                components={{ highlight: <span className="gradient-text" /> }}
              />
            }
          </h2>
          <p className="about__body">
            {t("about.p1")}
          </p>

          <p className="about__body">
            {
              <Trans
                i18nKey="about.p2"
                components={{ emphasis: <i/> }}
              />
            }
          </p>

          <p className="about__body">
            {t("about.p3")}
          </p>
          <a href="#contact" className="btn-primary" style={{ marginTop: 28, marginRight: 16, display: 'inline-flex' }}>
            {t("buttons.git")}
            <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <DownloadCVButton />
        </div>

        {/* Right: stats */}
        <div className="about__stats">
          <Avatar src="img/profile_pic_001.jpg" name="Atyla" size={300} borderColor="var(--violet)" />
          {/* {stats.map(({ value, label }) => (
            <div key={label} className="stat-card">
              <span className="stat-card__value gradient-text">{value}</span>
              <span className="stat-card__label">{label}</span>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  )
}
