module.exports = {

  collectCoverage: true,
  collectCoverageFrom: ["**/*.jsx", "**/*.js"],
  coverageDirectory: "coverage",

  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/public/",
    "/dist/",
    "jest.config.js",
    "package.json",
  ],

  coverageProvider: "v8",
  coverageReporters: ["json", "text", "lcov", "clover"],

  globals: {
    window: true,
  },

  moduleDirectories: ["node_modules", ".", "src"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],

  moduleNameMapper: {
    "^.+\\.(css|scss)$": "identity-obj-proxy",
  },

  setupFiles: ["./src/setupTests.js"],
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
};
