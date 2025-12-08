# QA-Assessment---Bantucan
QA Assessment for Swag Labs and JSONPlaceholder: Includes web and API test cases, bug reports, and automation scripts using Playwright. All test documentation is compiled in an organized Excel file.

## Project Overview
This repository contains the QA assessment for the Swag Labs web app and JSONPlaceholder API. It includes **web testing**, **API testing**, and **automation testing** covering login, product selection, checkout workflows, and API resource handling.

## Test Environment
- **Web URL:** [Swag Labs](https://www.saucedemo.com/)  
- **Browser:** Chrome  
- **OS:** Windows 11  
- **Tools:** Postman, Playwright, Excel

## Test Artifacts
All detailed test cases for **Web Testing**, **API Testing**, and the **Bug Report** are compiled in the Excel file:

[QA_Assessment_Test_Cases.xlsx](./QA_Assessment_Test_Cases.xlsx)

## Testing Summary
- **Web Testing:** 21 test cases executed (11 Pass, 10 Fail). Key bugs include URL bypass of checkout, empty cart checkout, session issues across tabs, and oversized clickable areas.  
- **API Testing:** Tested `/users` and `/posts` endpoints. Verified status codes 200, 201, 404, 500, and edge cases like updating non-existent posts.  
- **Automation Testing:** Implemented with two approaches:  
 - **Straightforward Approach:** All modules are in a single file for a quick end-to-end run.
  - File: `tests/automationSC.spec.js`
- **Page Object Model (POM) Approach:** Organized into separate pages and modules for maintainability and easier updates.
  - File: `tests/fullFlow.spec.js`

## Bugs Summary
Major issues include:  
- Checkout bypass via URL  
- Empty cart allowed during checkout  
- Session not invalidated across tabs  
- Re-submission of completed orders  

Minor issues include oversized clickable areas on product items.  

## Running Automation
```bash
npm install
npx playwright test
