module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|react-native-elements|react-native-dropdown-picker|@react-native(-community)?)/)',
  ],
  setupFiles: ['./src/setupFile.js'],
  testPathIgnorePatterns: ['<rootDir>/e2e'],
};
