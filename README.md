# CS 426 HW1 — Scheduling App (Starter)

[![CI](https://github.com/umass-cs-426/cs426-hw01/actions/workflows/ci.yml/badge.svg)](https://github.com/umass-cs-426/cs426-hw01/actions/workflows/ci.yml)
[![Coverage](https://codecov.io/gh/umass-cs-426/cs426-hw01/branch/main/graph/badge.svg)](https://codecov.io/gh/umass-cs-426/cs426-hw01)
[![Leaderboard](https://img.shields.io/badge/Leaderboard-View-blue)](https://umass-cs-426.github.io/cs426-hw01-leaderboard/)

## Overview
This repository contains the starter code and visible tests for HW1.

## Learning Goals
- <Goal 1>
- <Goal 2>

## Setup (Fork + Clone)
Follow these steps exactly.

1) **Fork the starter repo**
   - Go to:
     `https://github.com/umass-cs-426/cs426-hw01`
   - Click **Fork** and create your own copy.

2) **Clone your fork**
   ```bash
   git clone https://github.com/<your-username>/cs426-hw01.git
   cd cs426-hw01
   ```

3) **(Optional) Add the starter repo as an upstream remote**
   This makes it easy to pull staff updates later.
   ```bash
   git remote add upstream https://github.com/umass-cs-426/cs426-hw01.git
   ```

4) **Install dependencies and run tests**
   ```bash
   npm install
   npm test
   ```

**Important:** Do **not** open pull requests to the course starter repo. Your work should stay in your fork.

## Tests
- Visible tests live in `tests/`.
- CI runs Jest + Supertest on every push.
- Passing CI means all visible tests pass.
- Tests are a baseline indicator, not the full grade.
- CI also publishes a summary artifact used for the anonymous leaderboard.

## How to See Your Results
After you push any commit, tests run automatically in your fork.

1) Open your fork’s Actions page:
   `https://github.com/<your-username>/cs426-hw01/actions`
2) Click the latest workflow run to see test results and logs.

After you submit (push the `hw01-submit` tag), your anonymous result appears on the class leaderboard:
- `https://umass-cs-426.github.io/cs426-hw01-leaderboard/`

## Hidden Tests
Hidden grading tests are **not** in this repository.

## Submission
- Work in your fork (branch or `main` is fine).
- When ready to submit, tag the exact commit you want graded:
  ```bash
  git tag hw01-submit
  git push origin hw01-submit
  ```
- To update your submission before the deadline:
  ```bash
  git tag -f hw01-submit
  git push -f origin hw01-submit
  ```
- The `hw01-submit` tag is the official submission we grade.

## Files to Read
- `docs/ASSIGNMENT.md`
- `docs/BRANCHING.md`

## Academic Integrity
- <Policy text>
