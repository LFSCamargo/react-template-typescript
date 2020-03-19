module.exports = {
  displayName: '@ben/backoffice-pedido-front',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json',
      diagnostics: false
    }
  },
  coverageReporters: ['json', 'html', 'text'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.(ts|tsx)',
    '!<rootDir>/src/**/*.stories.(ts|tsx)',
    '!<rootDir>/src/@types/**/*',
    '!<rootDir>/src/**/*.stories.(ts|tsx)',
    '!<rootDir>/src/components/storybook/**/*',
    '!<rootDir>/node_modules/**',
    '!<rootDir>/src/**/index.(ts|tsx)'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/fileMock.ts',
    '@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: ['<rootDir>/src/**/*.test.+(ts|tsx|js|jsx)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  verbose: true,
  testURL: 'http://localhost/',
  snapshotSerializers: ['enzyme-to-json/serializer']
};
