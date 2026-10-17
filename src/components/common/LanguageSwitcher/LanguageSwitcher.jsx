import { useTranslation } from 'react-i18next';
import CountryFlag from 'ts-react-emoji-flag';
import './LanguageSwitcher.css';

export const LANGUAGES = [
  { code: 'pt', countryCode: 'BR', label: 'Português' },
  { code: 'en', countryCode: 'US', label: 'English' },
]

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const activeIndex = Math.max(
    0,
    LANGUAGES.findIndex(({ code }) => code === i18n.resolvedLanguage),
  );

  return (
    <div
      role="group"
      className="language-switcher"
      style={
        { '--ls-index': activeIndex, '--ls-count': LANGUAGES.length }
      }
    >
      <span className="language-switcher__indicator" aria-hidden="true" />
      {LANGUAGES.map(({ code, countryCode, label }) => {
        const isActive = i18n.resolvedLanguage === code;

        return (
          <button
            key={code}
            type="button"
            className="language-switcher__option"
            aria-pressed={isActive}
            lang={code}
            onClick={() => i18n.changeLanguage(code)}
          >
            <span className="language-switcher__flag" aria-hidden="true">
              <CountryFlag countryCode={countryCode} />
            </span>
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
}