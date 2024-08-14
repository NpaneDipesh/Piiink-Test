describe("add merchant", () => {
    it("tests add merchant", () => {
      require('cypress-xpath');
      cy.viewport(2000,1019);
  
      cy.CountryAdminLogin();
      cy.get('.MuiList-root > :nth-child(6)').click();
      cy.get('[href="/country-licensee/addMerchant"] > .MuiListItemText-root > .MuiTypography-root').click();
      cy.get('#\\:r13\\:').type("fdfsdgxfd");
      cy.get('#\\:r14\\:').type("fdfsvgv");
      cy.get('#\\:r15\\:').type("dffdfd@mailinator.com");
      cy.get('#\\:r16\\:').type("463643643");
      cy.get('#\\:r17\\:').type("5644");
      cy.get(':nth-child(2) > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root').click();
      cy.get('#checkboxes-tags-demo-option-1').click();
      cy.get('.css-hpgf8j > :nth-child(2)').click();
      cy.get('#\\:r1e\\:').type("nsdjgjf");
      cy.get('#\\:r1f\\:').type("vcfgvhb");
      cy.get('#\\:r1g\\:').type("hffghfd@mailinator.com");
      cy.get("#\\:r1h\\:").type("678836773");
      cy.get(':nth-child(5) > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment').click();
      cy.get('#combo-box-demo-option-1').click();
      cy.get(':nth-child(5) > :nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment').click();
      cy.get('#combo-box-demo-option-0').click();
      cy.get(':nth-child(4) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
      cy.get('#combo-box-demo-option-0').click();
      cy.get('#\\:r1s\\:').type("fgdgfd");
      cy.get('#\\:r1t\\:').type("55535");
      cy.get("#\\:r1v\\:").type('sbvfff', { force: true });
      cy.get('#\\:r1u\\:').type("34354");
      cy.get('#\\:r20\\:').type('136.93359376', { force: true });
      cy.get('#\\:r21\\:').type('136.93359376', { force: true });
      cy.get('.css-1bvc4cc > :nth-child(2)').click();
      cy.get('#\\:r25\\:').type("abcdef");
      cy.get('.ql-editor').type("hdsjhdf");
      cy.get('.css-1bvc4cc > :nth-child(2)').click();
      cy.wait(1000);
      cy.get('.css-1bvc4cc > :nth-child(2)').click();
      cy.get('#\\:r26\\:').type("10");
      cy.get('[data-testid="ArrowDropDownIcon"]').click();
      cy.get('#combo-box-demo-option-0').click();
      cy.get(':nth-child(4) > .MuiButtonBase-root').click();
      cy.get('.css-1bvc4cc > :nth-child(2)').click();
      cy.get(':nth-child(6) > .MuiPaper-root > .MuiCardContent-root').click();
      cy.xpath("(//input[@placeholder='Issuer Code'])[1]").type("AU0000010504");
      cy.xpath("(//input[@placeholder='Transaction Code'])[1]").type("6661100008959");
      cy.xpath("(//input[@placeholder='Bank Name'])[1]").type("fdsaeds");
      cy.xpath("(//input[@placeholder='BSB'])[1]").type("fgdvc");
      cy.xpath("(//input[@placeholder='Bank Code'])[1]").type("dfs");
      cy.xpath("(//input[@placeholder='Branch Code'])[1]").type("fgbvc");
      cy.xpath("(//input[@placeholder='Account Name'])[1]").type("tdgfzs");
      cy.xpath("(//input[@placeholder='Account Number'])[1]").type("dfdc");
      cy.xpath("(//input[@placeholder='Swift Code'])[1]").type("fvdc");
  
      cy.get('___privatestripeelement > iframe', { timeout: 10000 }).then($iframe => {
        const $iframeBody = $iframe.contents().find('body');
        cy.wrap($iframeBody).find('#cardnumber').should('be.visible').then($cardElement => {
          cy.log('#card element found');
        });
  
        cy.get('input[name="cardnumber"]', { timeout: 20000 }).should('be.visible').then($input => {
          cy.log('Card number input found');
          cy.wrap($input).type('4242 4242 4242 4242');
        });
    
        cy.get('input[name="exp-date"]', { timeout: 20000 }).should('be.visible').then($input => {
          cy.log('Expiration date input found');
          cy.wrap($input).type('05 / 25');
        });
    
        cy.get('input[name="cvc"]', { timeout: 20000 }).should('be.visible').then($input => {
          cy.log('CVC input found');
          cy.wrap($input).type('144');
        });
    
        cy.get('input[name="postal"]', { timeout: 20000 }).should('be.visible').then($input => {
          cy.log('Postal input found');
          cy.wrap($input).type('42423');
        });
      });
  
      cy.xpath("(//input[@type='checkbox'])[3]").click();
      cy.xpath("(//button[normalize-space()='Pay'])[1]").click();
    });
  });
  