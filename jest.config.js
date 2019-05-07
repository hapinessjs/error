module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coverageDirectory: './coverage',
    testMatch: ['**/test/**/*.ts?(x)'],
    clearMocks: true,
    verbose: true
};
