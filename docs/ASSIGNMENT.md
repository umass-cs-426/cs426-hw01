# HW1 — Assignment Spec

This document explains the assignment **and** how to work with the repository.

## Goals
- <Goal 1>
- <Goal 2>

## Requirements
- <Requirement 1>
- <Requirement 2>

## Deliverables
- <Deliverable 1>
- <Deliverable 2>

## Repository Workflow (Required)
Follow these steps exactly. This is how we expect you to work in this repo.

1) **Fork the starter repo**
   - Go to the starter repo and click **Fork**.
   - Starter repo:
     `https://github.com/umass-cs-426/cs426-hw01`

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

4) **Work and commit in your fork**
   - You can work on `main` or create a branch.
   - Commit your work as you go.
   - Push to your fork.

5) **Tests run automatically on every push**
   - Every push to your fork triggers CI.
   - This lets you track progress without submitting.

**Important:** Do **not** open pull requests to the course starter repo. Your work should stay in your fork.

## Submission (Tagging)
The **only** thing we grade is the commit tagged `hw01-submit` in your fork.

**Tag name:** `hw01-submit` (exact spelling)

**How to submit:**
```bash
git tag hw01-submit
git push origin hw01-submit
```

**How to update your submission before the deadline:**
```bash
git tag -f hw01-submit
git push -f origin hw01-submit
```

## Leaderboard (Anonymous)
Leaderboard page:
- `https://umass-cs-426.github.io/cs426-hw01-leaderboard/`

**What it shows:**
- A stable anonymous alias
- Pass/fail status for **visible tests only**
- Tests passed and line coverage
- Submission timestamp

**How you know which entry is yours:**
- Your alias is generated from your UMass email using a secret salt.
- Only staff can map aliases to real names.
- You can identify yourself by your submission time and test status.
- If you do not appear within ~30 minutes of submitting, double-check the tag.

**What pushes you to the top:**
- The leaderboard is sorted by:
  1) Pass status (pass above fail/unknown)
  2) More tests passed
  3) Higher line coverage
  4) More recent submission

**Important:** The leaderboard is for **fun and light competition only**. It is **not** your final grade.

## Grading
- Visible tests are a baseline signal only.
- Final grading includes TA review and rubric-based evaluation.

## How to See Your Results
After you push any commit, tests run automatically in your fork.

1) Open your fork’s Actions page:
   `https://github.com/<your-username>/cs426-hw01/actions`
2) Click the latest workflow run to see test results and logs.

## Notes
- <Edge cases or clarifications>
