module.exports = {
  rootDir: '..',
  testMatch: ['<rootDir>/e2e/**/*.detox.js'],
  testTimeout: 120000,
  maxWorkers: 1,
  verbose: true,
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  reporters: ['detox/runners/jest/reporter'],
  testEnvironment: 'detox/runners/jest/testEnvironment',
};
