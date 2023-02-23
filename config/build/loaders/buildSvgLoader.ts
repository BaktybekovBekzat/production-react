const buildSvgLoader = () => {
    return {
        test: /\.svg?$/,
        use: ['@svgr/webpack']
    }
}

export default buildSvgLoader
