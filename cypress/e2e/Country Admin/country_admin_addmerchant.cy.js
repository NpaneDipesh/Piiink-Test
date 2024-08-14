
// describe('Payment Process', () => {
  // it('should complete the payment process successfully', () => {
    
    it("tests add merchant", () => {
      require('cypress-xpath');
      cy.viewport(2000, 1019);
      cy.CountryAdminLogin();
      cy.get("div:nth-of-type(4) > button").click();
      cy.get('.MuiList-root > :nth-child(6)').click();
      cy.get('[href="/country-licensee/addMerchant"] > .MuiListItemText-root > .MuiTypography-root').click();
      
  cy.get('#\\:r13\\:').click().type("aaarra");
      
      cy.get('#\\:r14\\:').click().type("fadarrr");
      cy.get('#\\:r15\\:').click().type("addfd@mailinator.com");
      cy.get('#\\:r16\\:').click().type("463643643");
      cy.get('#\\:r17\\:').click().type("5644");

      cy.get(':nth-child(2) > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root').click();
      cy.get('#checkboxes-tags-demo-option-1').click();

      cy.get('.css-hpgf8j > :nth-child(2)').click();
      cy.get('#\\:r1e\\:').click().type("nsdjgjf");
      cy.get('#\\:r1f\\:').click().type("vcfgvhb");
      cy.get('#\\:r1g\\:').click().type("hffghfd@mailinator.com");
      cy.get("#\\:r1h\\:").click().type("678836773");

      cy.get(':nth-child(5) > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment').click();
      cy.get('#combo-box-demo-option-1').click();
      cy.get(':nth-child(5) > :nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment').click();
      cy.get('#combo-box-demo-option-0').click();

      cy.get(':nth-child(4) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
      cy.get('#combo-box-demo-option-0').click();
      cy.get('#\\:r1s\\:').click().type("fgdgfd");
      cy.get('#\\:r1t\\:').click().type("55535");
      cy.get("#\\:r1v\\:").click({ force: true }).type('sbvfff', { force: true });
      cy.get('#\\:r1u\\:').click().type("34354");
      cy.get('#\\:r20\\:').click({ force: true }).type('136.93359376', { force: true });
      cy.get('#\\:r21\\:').click({ force: true }).type('136.93359376', { force: true });
      
      cy.get('.css-1bvc4cc > :nth-child(2)').click();
      cy.get('#\\:r25\\:').click().type("abcdef");
      cy.get('.ql-editor').click().type("hdsjhdf");
      cy.get('.css-1bvc4cc > :nth-child(2)').click();
      cy.wait(1000);
      cy.get('.css-1bvc4cc > :nth-child(2)').click();
      cy.get('#\\:r26\\:').click().type("10");
      cy.get('[data-testid="ArrowDropDownIcon"]').click();
      cy.get('#combo-box-demo-option-0').click();
      cy.get(':nth-child(4) > .MuiButtonBase-root').click();
      cy.get('.css-1bvc4cc > :nth-child(2)').click();
      // cy.get('.css-19h0ry > :nth-child(1) > .MuiPaper-root > .MuiCardContent-root').click();
      cy.get(':nth-child(12) > .MuiPaper-root > .MuiCardContent-root').click();
      cy.xpath("(//input[@placeholder='Issuer Code'])[1]").type("AU0000010504");
      cy.xpath("(//input[@placeholder='Transaction Code'])[1]").type("6661100008959");
      cy.xpath("(//input[@placeholder='Bank Name'])[1]").type("fdsaeds");
      cy.xpath("(//input[@placeholder='BSB'])[1]").type("fgdvc");
      cy.xpath("(//input[@placeholder='Bank Code'])[1]").type("dfs");
      cy.xpath("(//input[@placeholder='Branch Code'])[1]").type("fgbvc");
      cy.xpath("(//input[@placeholder='Account Name'])[1]").type("tdgfzs");
      cy.xpath("(//input[@placeholder='Account Number'])[1]").type("dfdc");
      cy.xpath("(//input[@placeholder='Swift Code'])[1]").type("fvdc");

      // cy.get('___privatestripeelement > iframe', { timeout: 10000 }).then($iframe => {
      //   const $iframeBody = $iframe.contents().find('body');
      //   cy.wrap($iframeBody).find('#cardnumber').should('be.visible').then($cardElement => {
      //     cy.log('#card element found');
      //   });

      //   cy.get('input[name="cardnumber"]', { timeout: 20000 }).should('be.visible').then($input => {
      //     cy.log('Card number input found');
      //     cy.wrap($input).type('4242 4242 4242 4242');
      //   });

      //   cy.get('input[name="exp-date"]', { timeout: 20000 }).should('be.visible').then($input => {
      //     cy.log('Expiration date input found');
      //     cy.wrap($input).type('05 / 25');
      //   });

      //   cy.get('input[name="cvc"]', { timeout: 20000 }).should('be.visible').then($input => {
      //     cy.log('CVC input found');
      //     cy.wrap($input).type('144');
      //   });

      //   cy.get('input[name="postal"]', { timeout: 20000 }).should('be.visible').then($input => {
      //     cy.log('Postal input found');
      //     cy.wrap($input).type('42423');
      //   });
      // });
      cy.get('iframe[name^="__privateStripeFrame"]')
      .first()
      .then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
          .find('input[name="cardnumber"]')
          .type('4242424242424242');
      });

      cy.get('iframe[name^="__privateStripeFrame"]')
      .eq(1)
      .then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
          .find('input[name="exp-date"]')
          .type('12/25');

       cy.get('iframe[name^="__privateStripeFrame"]')
      .eq(2)
      .then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
          .find('input[name="cvc"]')
          .type('123');
      });

      cy.xpath("(//input[@type='checkbox'])[3]").click();
      cy.xpath("(//button[normalize-space()='Pay'])[1]").click();
    });

  });

