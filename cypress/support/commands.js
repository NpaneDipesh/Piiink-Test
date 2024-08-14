// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('CountryAdminLogin', () => {
    // Visit the page with failOnStatusCode set to false
    cy.visit("https://dashboard.dev.piiink.org/signin/country-licensee", { failOnStatusCode: false });
  
    // Check if the response status code is 404
    cy.request({
      method: 'GET',
      url: 'https://dashboard.dev.piiink.org/signin/country-licensee',
      failOnStatusCode: false
    }).then((response) => {
      if (response.status === 404){
        // Handle the 404 response here
        cy.log('404 Not Found encountered');
        // Perform actions on the page
        cy.get("#\\:r0\\:").click().type("james857@mailinator.com");
        cy.get("#\\:r1\\:").click().type("12345678");
        cy.get(':nth-child(4) > .MuiButtonBase-root').click();
      }
    });
  });

  Cypress.Commands.add('WAlogin', () => {
    cy.visit('https://dashboard.dev.piiink.org/signin/website-admin', { failOnStatusCode: false });
    cy.get("#\\:r0\\:").click().type("madan@mailinator.com");
    cy.get("#\\:r1\\:").click().type("12345678");
    cy.get(':nth-child(4) > .MuiButtonBase-root').click();
  });

  Cypress.Commands.add('ROlogin', () => {
    cy.visit('https://dashboard.dev.piiink.org/signin/region-owner', { failOnStatusCode: false });
    cy.get("#\\:r0\\:").click().type("sushial@mailinator.com");
    cy.get("#\\:r1\\:").click().type("12345678");
    cy.get(':nth-child(4) > .MuiButtonBase-root').click();
  });

  Cypress.Commands.add('AOlogin', () => {
    cy.visit('https://dashboard.dev.piiink.org/signin/area-owner', { failOnStatusCode: false });
    cy.get("#\\:r0\\:").click().type("pappu@mailinator.com");
    cy.get("#\\:r1\\:").click().type("12345678");
    cy.get(':nth-child(4) > .MuiButtonBase-root').click();
  });

  Cypress.Commands.add('GlobalAdminLogin', () => {
    cy.visit('https://dashboard.dev.piiink.org/signin/global-admin', { failOnStatusCode: false });
    cy.get("#\\:r0\\:").click().type("sanjay105@mailinator.com");
    cy.get("#\\:r1\\:").click().type("Hjklqa@#$dfh1");
    cy.get(':nth-child(5) > .MuiButtonBase-root').click();
  });
