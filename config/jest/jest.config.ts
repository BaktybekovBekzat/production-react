import path from 'path'

export default {
    clearMocks: true,
    coveragePathIgnorePatterns: [
        '/node_modules/'
    ],
    moduleDirectories: [
        'node_modules'
    ],
    modulePaths: [
        '<rootDir>src'
    ],
    testEnvironment: 'jsdom',
    rootDir: '../../',
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
    ],
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx')
    }
}
