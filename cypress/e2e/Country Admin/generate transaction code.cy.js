describe("GenerateIssuerCode", () => {
    it("GenerateIssuerCode", () => {
        require('cypress-xpath');
        cy.viewport(1280, 720); // Adjust viewport size if necessary
  
        cy.CountryAdminLogin();
        cy.get(':nth-child(26) > .MuiListItemText-root > .MuiTypography-root').click();
        cy.get('[href="/country-licensee/transaction-qr-codes"] > .MuiListItemText-root > .MuiTypography-root').click();
        cy.get('.css-grwwtg > :nth-child(2)').click();
        cy.xpath("(//input[@name='batchName'])[1]").type('newtrcode01');
        cy.xpath("(//input[@name='numberOfCodes'])[1]").clear().type('100');
        cy.get('.css-1q6cjye > .MuiButton-text').click();
    });
  });
  