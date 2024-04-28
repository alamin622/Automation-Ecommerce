# Cypress-Automation
Cypress is a next generation front end testing tool built for the modern web. This is a sample project which you can use to start your E2E testing with Cypress.

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
