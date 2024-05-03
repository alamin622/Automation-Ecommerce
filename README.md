![image](https://github.com/alamin622/Cypress-Project/assets/56792623/810c0755-9529-4eef-be9d-59f83c7c387c)

# Videos
1. AddToCart ([URL](https://drive.google.com/file/d/1IhLUQuInS8PwqID52nO5Ys_DcNvlpIks/view?usp=sharing))
2. Login ([URL](https://drive.google.com/file/d/1zvMmR-ZBp9mUGRwX9E0n0JNxRsN7OumX/view?usp=sharing))


# Cypress-Automation
Cypress is a next generation front end testing tool built for the modern web. This is a sample project which you can use to start your E2E testing with Cypress.


# Install Cypress: If you haven't already installed Cypress globally, you can do so via npm:

 - npm install cypress --save-dev
# Open Cypress: Navigate to your project directory in your terminal and run:

 - npx cypress open
# Run Tests: Once Cypress opens, you'll see a list of your test files. You can click on any of them to run the tests within. Alternatively, you can run all tests by clicking "Run all specs" at the top.
# View Results: As Cypress runs your tests, it provides real-time feedback in its test runner interface. You can see each test's status (passing, failing, or pending), along with any logged output and error messages.
# Command Line Execution: If you prefer to run Cypress tests from the command line without the GUI, you can do so using the cypress run command:

 - npx cypress run
This will run your tests headlessly and output the results to the terminal.


# How to Start
1. Clone the project
2. `npm i` - Install all the dependencies
3. There are a lot dependencies that are not updated frequently in parallel with cypress. So while installing if you are seeing conflicts use`npm i --force`.
4. Run `npm test` to execute the tests in Test Runner | Run `npx cypress run` to execute the tests in CLI
5. To create HTML reports execute first `npm run test:cli` and then `npm run create:html:report`

   
#install cypress-mochawesome-reporter
1. npm i --save-dev cypress-mochawesome-reporter

2. Change cypress reporter & setup hooks

Edit config file (cypress.config.js by default)


const { defineConfig } = require('cypress');
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});


3. Add to cypress/support/e2e.js

 import 'cypress-mochawesome-reporter/register';

 
4. (optional, if your are using cypress-cucumber-preprocessor) Add to cypress/support/step_definitions/index.js

import 'cypress-mochawesome-reporter/cucumberSupport';


5. npx cypress run
