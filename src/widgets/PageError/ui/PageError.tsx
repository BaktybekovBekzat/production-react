import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import cls from './PageError.module.scss'

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className = '' }: PageErrorProps) => {
    const { t } = useTranslation()

    const realoadPage = (): void => {
        location.reload()
    }

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1>{t('Произошла непредвиденнная ошибка')}</h1>
            <Button className={cls.button} onClick={realoadPage}>{t('Обновить страницу')}</Button>
        </div>
    )
}
