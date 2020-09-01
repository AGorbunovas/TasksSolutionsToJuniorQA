# Tesonet junior qa homework task

## How to run TesonetWebPageAutomation tests

- Clone the repository or Download.zip file
- Open TesonetWebPageAutomation catalog
- Open PowerShell or Terminal as Administrator in the selected directory

- Execute following commands:

  - To check if you have Node.js installed, run this command in your terminal: 
  - `node -v`

  - If you don't have Node.js, then install it:
  - https://nodejs.org/en/download/

  - Then return into the terminal and confirm that you have npm installed you can run this command in your terminal:
  - `npm -v`

  - Then install Cypress
  - `npm install cypress --save-dev`

  - Then run Cypress
  - `./node_modules/.bin/cypress open`

  - If you get Execution Policy error you can run this command in your terminal:
  - `set-executionpolicy remotesigned` > type 'y'
  - repeat command
  - `./node_modules/.bin/cypress open`

In Cypress app click on the TestTesonetComCareerPage.js link to run the test.

The number of available department will be printed in `Count the number of categories available on Career page` test case body.

Thank you.
