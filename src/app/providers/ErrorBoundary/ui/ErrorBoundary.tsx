import React, { Suspense, type ReactNode } from 'react'
import { PageError } from 'widgets/PageError'
import { PageLoader } from 'widgets/PageLoader'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: ErrorBoundaryProps) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    // eslint-disable-next-line n/handle-callback-err
    static getDerivedStateFromError (error: Error) {
        return { hasError: true }
    }

    componentDidCatch (error: Error, errorInfo: React.ErrorInfo): void {
        console.log(error.message, errorInfo)
    }

    render (): React.ReactNode {
        const { children } = this.props
        const { hasError } = this.state

        if (hasError) {
            return (
                <Suspense fallback={<PageLoader />}>
                    <PageError />
                </Suspense>
            )
        }

        return children
    }
}

export default ErrorBoundary
