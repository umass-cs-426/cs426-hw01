const fs = require('fs');
const path = require('path');

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    return null;
  }
}

const resultsDir = path.join(process.cwd(), 'results');
if (!fs.existsSync(resultsDir)) {
  fs.mkdirSync(resultsDir, { recursive: true });
}

const jestResults = readJson(path.join(resultsDir, 'jest-results.json')) || {};
const coverageSummary = readJson(path.join(process.cwd(), 'coverage', 'coverage-summary.json')) || {};
const total = coverageSummary.total || {};

const summary = {
  schema: 1,
  assignment: 'hw01',
  repository: process.env.GITHUB_REPOSITORY || null,
  commit: process.env.GITHUB_SHA || null,
  run_id: process.env.GITHUB_RUN_ID || null,
  generated_at: new Date().toISOString(),
  status: jestResults.success === true ? 'pass' : 'fail',
  tests: {
    total: jestResults.numTotalTests ?? null,
    passed: jestResults.numPassedTests ?? null,
    failed: jestResults.numFailedTests ?? null,
    skipped: jestResults.numPendingTests ?? null
  },
  suites: {
    total: jestResults.numTotalTestSuites ?? null,
    passed: jestResults.numPassedTestSuites ?? null,
    failed: jestResults.numFailedTestSuites ?? null
  },
  coverage: {
    lines: total.lines?.pct ?? null,
    statements: total.statements?.pct ?? null,
    functions: total.functions?.pct ?? null,
    branches: total.branches?.pct ?? null
  }
};

fs.writeFileSync(path.join(resultsDir, 'hw01.json'), JSON.stringify(summary, null, 2));
