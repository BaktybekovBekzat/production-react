import { useTranslation } from 'react-i18next'

const MainPage = () => {
	const { t } = useTranslation('main')

	return <div>{t('Главная страница') as string}</div>
}

export default MainPage
