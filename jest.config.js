module.exports ={
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx}'
    ],
    coverageDirectory: 'coverage',
    testEnvironnment: 'node',
    transform:{
        '.+\\.ts$': 'ts-jest'
    }
}