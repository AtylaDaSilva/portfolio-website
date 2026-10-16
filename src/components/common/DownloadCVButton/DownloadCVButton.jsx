import './DownloadCVButton.css'
import { useTranslation } from 'react-i18next'

export default function DownloadCVButton() {
    const { t, i18n } = useTranslation();

    return (
        <a
            href="Atyla da Silva - CV - EN_PT.zip"
            className="download-cv-button"
            download
        >
            {t("buttons.cv")}
        </a>
    )
}