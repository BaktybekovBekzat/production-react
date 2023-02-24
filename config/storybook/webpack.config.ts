import { type BuildPaths } from '../build/types/config'
import type webpack from 'webpack'
import path from 'path'
import buildCssLoader from '../build/loaders/buildCssLoader'
import { type RuleSetRule } from 'webpack'
import buildSvgLoader from '../build/loaders/buildSvgLoader'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }

    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')

    // eslint-disable-next-line no-param-reassign
    config.module.rules = (config.module.rules as RuleSetRule[]).map((rule: RuleSetRule) => {
        // eslint-disable-next-line @typescript-eslint/prefer-includes
        if (rule && /svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i }
        }

        return rule
    })

    config.module?.rules?.push(buildSvgLoader())

    config.module?.rules?.push(buildCssLoader(true))

    return config
}
