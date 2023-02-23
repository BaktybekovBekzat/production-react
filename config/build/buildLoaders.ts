import type webpack from 'webpack'
import buildCssLoader from './loaders/buildCssLoader'
import buildSvgLoader from './loaders/buildSvgLoader'
import { type BuildOptions } from './types/config'

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: 'file-loader'
    }

    const svgLoader = buildSvgLoader()

    const cssLoader = buildCssLoader(isDev)

    const babelLoader = {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }

    return [babelLoader, typescriptLoader, cssLoader, svgLoader, fileLoader]
}
