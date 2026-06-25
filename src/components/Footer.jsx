import './Footer.css'
import { LINKS, SERVICES } from '../utils/constants'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#" className="footer__logo">
            <span className="logo-letters">AS</span>
            <span className="footer__name">Atyla da Silva</span>
          </a>
          <p className="footer__tagline">
            Criando soluções inteligentes desde 2020.
          </p>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <h4 className="footer__col-title">Navegação</h4>
            <ul>
              {LINKS.map((l) => (
                <li key={l.link}><a href={`#${l.link.toLowerCase()}`}>{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Serviços</h4>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.title}><a href="#services">{s.title}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Contato</h4>
            <ul>
              {[
                { label: 'LinkedIn', href: 'https://linkedin.com' },
                { label: 'GitHub', href: 'https://github.com' },
                { label: 'Twitter / X', href: 'https://twitter.com' },
              ].map(({ label, href }) => (
                <li key={label}><a href={href} target="_blank" rel="noreferrer">{label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span className="footer__copy">© {new Date().getFullYear()} Atyla da Silva. Todos os direitos reservados.</span>
          <span className="footer__built">
            Feito com 💜 por {' '}
            <span style={{ color: 'var(--violet-light)' }}>Atyla da Silva</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
