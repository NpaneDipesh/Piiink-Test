describe("GenerateIssuerCode", () => {
    it("GenerateIssuerCode", () => {
        require('cypress-xpath');
        cy.viewport(1280, 720); // Adjust viewport size if necessary
  
        cy.CountryAdminLogin();
        cy.xpath("(//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary nav-item-text css-1snbh1v'][normalize-space()='QR Codes'])[1]").click();
        cy.get('[href="/country-licensee/issuer-qr-codes"] > .MuiListItemText-root > .MuiTypography-root').click();
        cy.get('.css-grwwtg > :nth-child(2)').click();
        cy.xpath("(//input[@name='batchName'])[1]").type('newissuercodee50');
        cy.xpath("(//input[@name='numberOfCodes'])[1]").clear().type('50');
        cy.get('.css-1q6cjye > .MuiButton-text').click();
    });
  });
  