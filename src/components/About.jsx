import './About.css'
import DownloadCVButton from './common/DownloadCVButton/DownloadCVButton'
import Avatar from './common/Avatar/Avatar';

// const stats = [
//   { value: '15+', label: 'Automações Construídas' },
//   { value: '5k+', label: 'Horas Economizadas' },
//   { value: 'R$150K+', label: 'Econimizado em Custos' },
//   { value: '99%', label: 'Taxa de Disponibilidade' },
// ]

export default function About() {
  const years = new Date().getFullYear() - 2022
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        {/* Left */}
        <div className="about__text">
          <span className="section-eyebrow">About Me</span>
          <h2 className="about__heading">
            I'm a <span className="gradient-text">self-taught</span> linguist.
          </h2>
          <p className="about__body">
            I'm Atyla (pronounced Ah-tee-lah) — I am a self-taught linguist from Brazil and I like studying foreign languages as a hobby. 
          </p>

          <p className="about__body">
            I started learning English when I was a teenager, not through any kind of formal education, but by simply watching <bold><i>way</i></bold> too much YouTube and playing Video-Games. Today, I am completely fluent in English.
          </p>

          <p className="about__body">
            Currently, I'm studying Japanese and German. I also know a little bit of Russian. I want to be as fluent in these languages as I am now in English.
          </p>
          <a href="#contact" className="btn-primary" style={{ marginTop: 28, marginRight: 16, display: 'inline-flex' }}>
            Get in Touch
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
