describe("GenerateIssuerCode", () => {
  it("GenerateIssuerCode", () => {
      require('cypress-xpath');
      cy.viewport(1280, 800); // Adjust viewport size if necessary

      cy.GlobalAdminLogin();
      cy.get(':nth-child(23) > .MuiListItemText-root > .MuiTypography-root').click();
      cy.get('[href="/globaladmin/issuer-qr-codes"] > .MuiListItemText-root > .MuiTypography-root').click();
      cy.get('.css-grwwtg > :nth-child(2)').click();

      // Click on the autocomplete dropdown and select an option
      cy.get('.css-19kzrtu > .MuiGrid-container > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root').click();
      cy.get('#combo-box-demo-option-66').click();

      // Code Prefix
      cy.get('#\\:rh\\:').click();
      cy.get('#\\:rh\\:').type('PK');

      // Type batch name and number of codes
      cy.xpath("(//input[@name='batchName'])[1]").type('gengwtgcode');
      cy.xpath("(//input[@name='numberOfCodes'])[1]").clear().type('35');

      // Click the submit button
      cy.get('.css-1q6cjye > .MuiButton-text').click();
      cy.wait(5000);
      cy.get('.MuiGrid-spacing-xs-3 > .MuiGrid-container > .MuiButtonBase-root').click();

  });
});
