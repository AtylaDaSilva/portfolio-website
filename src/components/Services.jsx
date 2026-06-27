import './Services.css'
import { SERVICES } from '../utils/constants.jsx'
import HorizontalScroller from './common/HorizontalScroller/HorizontalScroller.jsx'


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
            Eu conecto suas ferramentas favoritas com os dados que impulsionam seu negócio.
          </p>
        </div>

        <HorizontalScroller maxScrollSpeed={20} className="services__container">
            {SERVICES.map((s) => (
              <div key={s.title} className="service-card">
                <div className="service-card__header">
                  <div className="service-card__icon">{s.icon}</div>
                  <h3 className="service-card__title">{s.title}</h3>
                </div>
                <p className="service-card__desc">{s.desc}</p>
                <div className="service-card__tags">
                  {s.tags.map((tag) => (
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
