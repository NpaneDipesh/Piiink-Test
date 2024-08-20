describe("GenerateIssuerCode", () => {
    it("GenerateIssuerCode", () => {
        require('cypress-xpath');
        cy.viewport(1280, 720); // Adjust viewport size if necessary
  
        cy.GlobalAdminLogin();
        cy.get(':nth-child(23) > .MuiButtonBase-root > .material-icons').click();
        cy.get('[href="/globaladmin/issuer-qr-codes"] > .MuiListItemText-root > .MuiTypography-root').click();
        cy.get('.css-grwwtg > :nth-child(3)').click();
        cy.get('.css-19kzrtu > .MuiGrid-container > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > #combo-box-demo').click();
        cy.get('#combo-box-demo-option-66').click();
        cy.get('#\\:rh\\:').click();
        cy.get('#\\:rh\\:').type('isedvbfde');
        cy.get('#\\:ri\\:').click();
        cy.get('#\\:ri\\:').type('22');
        cy.get('.css-1q6cjye > .MuiButton-text').click();
        cy.wait(5000);
        cy.get('.MuiGrid-spacing-xs-3 > .MuiGrid-container > .MuiButtonBase-root').click();

    });
});