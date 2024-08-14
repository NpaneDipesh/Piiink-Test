
    it("add Footer Item", () => {
     require('cypress-xpath');
      cy.viewport(2000, 1019);
  
      cy.WAlogin();
      cy.get('[href="/websiteadmin/menuItem"] > .MuiListItemText-root > .MuiTypography-root').click();
      cy.get(':nth-child(2) > :nth-child(3) > a').click();
      cy.get('.MuiButton-sizeMedium').click();
      cy.get('#\\:rb\\:').click();
      cy.get('#\\:rb\\:').type('footeer');
      cy.xpath("(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[5]");
      cy.get('.css-19kzrtu > .MuiGrid-container > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-popupIndicator').click();
      cy.get('#combo-box-demo-option-0').click();
      cy.get(':nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root').click();
      cy.get('#combo-box-demo-option-1').click();
      cy.get(':nth-child(5) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment').click();
      cy.get('#combo-box-demo-option-1').click();
      cy.get('#\\:rk\\:').click();
      cy.get('#\\:rk\\:').type('10');
      cy.xpath("(//input[@type='checkbox'])[1]");
      cy.xpath("(//input[@type='checkbox'])[2]");
      cy.get('.css-1q6cjye > .MuiButton-text').click();
    });



  