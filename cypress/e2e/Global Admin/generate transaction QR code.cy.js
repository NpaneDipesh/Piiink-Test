describe("GenerateTransactionCode", () => {
    it("GenerateTransactionCode", () => {
     require('cypress-xpath');
      cy.viewport(2000, 1019);
  
      cy.GlobalAdminLogin();
      cy.get(':nth-child(22) > .MuiListItemText-root > .MuiTypography-root').click();
      cy.get('[href="/globaladmin/transaction-qr-codes"] > .MuiListItemText-root > .MuiTypography-root').click();
      cy.get('.css-grwwtg > :nth-child(2)').click();
      cy.get('.css-19kzrtu > .MuiGrid-container > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-popupIndicator').click();
      cy.get('#combo-box-demo-option-63').click();
      cy.xpath("(//input[@name='batchName'])[1]").type('newtransacticode');
      // cy.get('#\\:rk\\:').click();
      // cy.get('#\\:rk\\:').type('newtransactioncode');
      cy.xpath("(//input[@name='numberOfCodes'])[1]").clear().type('100');
      // cy.get('#\\:rl\\:').click();
      // cy.get('#\\:rl\\:').type('2');
      cy.get('.css-1q6cjye > .MuiButton-text').click();
    });
  });
