# OrangeHR-AutomationTesting

End-to-end test automation suite built with [Cypress](https://www.cypress.io/) against the [OrangeHRM](https://www.orangehrm.com/) open-source demo site (`opensource-demo.orangehrmlive.com`).

## What it covers

- Login and logout flows
- Adding and deleting an employee
- Adding and deleting a job
- Data import
- My Info page
- Shared `before`/`after` and `beforeEach`/`afterEach` hooks

## Tech stack

- Cypress 13
- JavaScript

## Running the tests

```bash
npm install
npx cypress open   # interactive runner
npx cypress run    # headless run, records video
```

Test specs live in `cypress/e2e/`, shared commands in `cypress/support/`, and fixtures in `cypress/fixtures/`.
