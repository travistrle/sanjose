const nxPreset = require('@nrwl/jest/preset').default;

module.exports = { 
    ...nxPreset,
    transform: {
        '^(?!.*\\.(js|jsx|ts|tsx|css|json|scss)$)': '@nrwl/react/plugins/jest',
        '^.+\\.[tj]sx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    globals: {
        'ts-jest': {
        diagnostics: false,
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
        },
        __webpack_public_path__: 'test',
    },
    rootDir: '.',
    moduleNameMapper: {
        '\\.(css|sass|scss)$': 'identity-obj-proxy',
        // replace lodash-es with lodash while unit testing.
        // Lodash-es is a big module and it takes a lot of time to compile.
        '^lodash-es$': 'lodash',
    },
    testEnvironment: 'jsdom',
    reporters: ['default'],
    coverageReporters: ['json'],
    collectCoverage: true,
};
