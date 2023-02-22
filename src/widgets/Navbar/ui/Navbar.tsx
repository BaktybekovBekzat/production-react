import { BugButton } from 'app/providers/ErrorBoundary'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className = '' }: NavbarProps) => {
    const { t } = useTranslation(['main', 'about'])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <BugButton />
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.mainLink}
                    to={'/'}
                >
                    {t('Главная страница')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
                    {t('О сайте', { ns: 'about' })}
                </AppLink>
            </div>
        </div>
    )
}
