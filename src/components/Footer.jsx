import './Footer.css'
import { LINKS, PHONE_F, GITHUB, LINKEDIN } from '../utils/constants'
import { useTranslation, Trans } from 'react-i18next'

export default function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#" className="footer__logo">
            <span className="logo-letters">AS</span>
            <span className="footer__name">Atyla da Silva</span>
          </a>
          <p className="footer__tagline">
            "Hesitation is Defeat." <br /><i>Isshin Ashina</i>
          </p>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <h4 className="footer__col-title">{t("footer.content")}</h4>
            <ul>
              {LINKS.map((l) => (
                <li key={l.link}><a href={`#${t(l.link).toLowerCase()}`}>{t(l.label)}</a></li>
              ))}
            </ul>
          </div>
          {/* <div className="footer__col">
            <h4 className="footer__col-title">{t("footer.services")}</h4>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.title}><a href="#services">{t(s.title)}</a></li>
              ))}
            </ul>
          </div> */}
          <div className="footer__col">
            <h4 className="footer__col-title">{t("footer.contact")}</h4>
            <ul>
              {[
                { label: `WhatsApp: ${PHONE_F}`, href: '#' },
                { label: 'LinkedIn', href: LINKEDIN },
                { label: 'GitHub', href: GITHUB },
              ].map(({ label, href }) => (
                <li key={label}><a href={href} target="_blank" rel="noreferrer">{label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span className="footer__copy">© {new Date().getFullYear()} Atyla da Silva. {t("footer.copyright")}</span>
          <span className="footer__built">
            {`${t("footer.made_by")} `}
            <span style={{ color: 'var(--violet-light)' }}>Atyla da Silva</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
