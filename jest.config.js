/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './__tests__',
  testSequencer: './assets/sequencer.js',
  testRegex: './*\\.test\\.ts$',
  testTimeout: 30000,
  maxWorkers: 1,
};
