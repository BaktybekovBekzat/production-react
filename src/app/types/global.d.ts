declare module '*.scss' {
    type IClassName = Record<string, string>

    const classNames: IClassName
    export = classNames
}

declare module '*.svg' {
    import type React from 'react'
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
    export default SVG
}
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.png'
declare module '*.gif'

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean
