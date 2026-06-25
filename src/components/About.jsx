import './About.css'

const stats = [
  { value: '50+', label: 'Automações Construídas' },
  { value: '30+', label: 'Clientes Atendidos' },
  { value: '10k+', label: 'Horas Economizadas' },
  { value: '99%', label: 'Taxa de Disponibilidade' },
]

export default function About() {
  const years = new Date().getFullYear() - 2022
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        {/* Left */}
        <div className="about__text">
          <span className="section-eyebrow">Sobre mim</span>
          <h2 className="about__heading">
            Tornando workflows complexos em<br />
            <span className="gradient-text">soluções elegantes</span>
          </h2>
          <p className="about__body">
            Me chamo Atyla da Silva — sou um desenvolvedor de sistemas com mais de {years} anos de experiência
            construindo automações e integrações inteligentes. Eu conecto suas ferramentas
            favoritas com os dados que impulsionam seu negócio.
          </p>
          <p className="about__body">
            Minha stack envolve tudo desde plataformas low-code como Make e Zapier
            até APIs customizadas e arquiteturas event-driven — todas planejadas para
            rodar confiavelmente, escalar sem esforço, e precisar de mínima manutenção.
          </p>
          <a href="#contact" className="btn-primary" style={{ marginTop: 28, display: 'inline-flex' }}>
            Entre em Contato
            <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Right: stats */}
        <div className="about__stats">
          {stats.map(({ value, label }) => (
            <div key={label} className="stat-card">
              <span className="stat-card__value gradient-text">{value}</span>
              <span className="stat-card__label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
