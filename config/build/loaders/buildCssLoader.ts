import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const buildCssLoader = (isDev: boolean) => {
    return {
        test: /\.scss$/,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) =>
                            !!resPath.includes('.module.'),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    }
                }
            },
            'sass-loader'
        ]
    }
}

export default buildCssLoader
