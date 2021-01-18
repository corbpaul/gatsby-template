module.exports = {
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  globals: {
    __PATH_PREFIX__: ``,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
  },
  modulePathIgnorePatterns: ['stories'],
  runner: 'groups',
  setupFiles: [`<rootDir>/tests/jest/loadershim.ts`],
  setupFilesAfterEnv: [`<rootDir>/tests/jest/setup.ts`],
  testMatch: ['src/**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  testPathIgnorePatterns: [`cypress`],
  testURL: `http://localhost`,
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/tests/jest/preprocess.ts',
  },
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  verbose: true,
};
