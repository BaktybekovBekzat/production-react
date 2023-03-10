import { ThemeProvider } from 'app/providers/ThemeProvider'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import 'shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import 'app/styles/index.scss'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
)
