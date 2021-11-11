module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx}',
        '!**/*.d.ts',
        '!<rootDir>/src/**/index.{ts,tsx}',
        '!<rootDir>/src/**/router.{ts,tsx}',
        '!<rootDir>/src/**/login-factory.{ts,tsx}',
        '!<rootDir>/src/**/axios-http-client.{ts}'
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    transform: {
        '.+\\.(ts|tsx)$': 'ts-jest'
    },
    moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1',
        '\\.scss$': 'identity-obj-proxy'
    }
}
