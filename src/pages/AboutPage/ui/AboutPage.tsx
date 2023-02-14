import { useTranslation } from 'react-i18next'

const AboutPage = () => {
	const { t } = useTranslation('about')

	return <div>{t('О сайте') as string}</div>
}

export default AboutPage
