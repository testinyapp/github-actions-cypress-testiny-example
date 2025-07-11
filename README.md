# github-actions-cypress-testiny-example

This repository contains the following examples on how run test automation jobs with GitHub Actions and report results to Testiny:

* Report Cypress Mochawesome JSON reports (.github/workflows/cypress-mochawesome.yml)
* Report Cypress JUnit XML reports (.github/workflows/cypress-junit.yml)

The sample tests are executed on two browsers (Chrome & Firefox) and then reported to Testiny.

Please note that the JUnit reporter does not include skipped tests in its reports, but the mochawesome reporter does.

The Testiny CLI searches the default attachment directory `cypress/screenshots` and imports screenshots for failed tests found in this folder. If you have another screenshot folder configured, specify another relative base directory path with --attachment-path <FILE-PATH>.
