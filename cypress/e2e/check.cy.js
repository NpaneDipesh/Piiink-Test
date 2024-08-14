
// describe('Payment Process'), () => 
//   it('should complete the payment process successfully'), () => 
describe("add merchant", () => {
    it("tests add merchant", () => {
      require('cypress-xpath');
  // Set the viewport size to ...... pixels
  cy.viewport(2000,1019);

  // Visit the specified URL with failOnStatusCode set to false
  cy.visit("https://dashboard.dev.piiink.org/signin/country-licensee", { failOnStatusCode: false });

  // Perform the request with failOnStatusCode set to false
  cy.request({
    method: 'GET', // Use the appropriate HTTP method
    url: 'https://dashboard.dev.piiink.org/signin/country-licensee',
    failOnStatusCode: false // Prevent status codes from causing failures
  }).then((response) => {
    // Check if the response status code is 404
    if (response.status === 404){
      // Handle the 404 response here
      // For example, you can log a message or take appropriate action
      cy.log('404 Not Found encountered');
      cy.get("#\\:r0\\:").click();
  cy.get("#\\:r0\\:").type("james857@mailinator.com");
  cy.get("#\\:r1\\:").click();
  cy.get("#\\:r1\\:").type("12345678");
  cy.get("div:nth-of-type(4) > button").click();
  cy.get('.MuiList-root > :nth-child(6)').click();
  cy.get('[href="/country-licensee/addMerchant"] > .MuiListItemText-root > .MuiTypography-root').click();
  cy.get('#\\:r13\\:').click();
  cy.get('#\\:r13\\:').type("sdfsasssf");
  cy.get('#\\:r14\\:').click();
  cy.get('#\\:r14\\:').type("vdfdsvfv");
  cy.get('#\\:r15\\:').click();
  cy.get('#\\:r15\\:').type("dffdfd@mailinator.com");
  cy.get('#\\:r16\\:').click();
  cy.get('#\\:r16\\:').type("463643643");
  cy.get('#\\:r17\\:').click();
  cy.get('#\\:r17\\:').type("5644");
  cy.get(':nth-child(2) > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root').click();
  cy.get('#checkboxes-tags-demo-option-1').click();
  cy.get('.css-hpgf8j > :nth-child(2)').click();
  cy.get('#\\:r1e\\:').click();
  cy.get('#\\:r1e\\:').type("nsdjgjf");
  cy.get('#\\:r1f\\:').click();
  cy.get('#\\:r1f\\:').type("vcfgvhb");
  cy.get('#\\:r1g\\:').click();
  cy.get('#\\:r1g\\:').type("hffghfd@mailinator.com");
  cy.get("#\\:r1h\\:").click();
  cy.get('#\\:r1h\\:').type("678836773");
  // cy.get('.MuiGrid-grid-md-3 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click();
  // cy.get('#combo-box-demo-option-3').click();
  // cy.get('.css-hpgf8j > :nth-child(4)').click();
  // cy.get('#\\:r1k\\:').click();
  // cy.get('#\\:r1k\\:').type("iiiii@mailinator.com");
  cy.get(':nth-child(5) > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment').click();
  cy.get('#combo-box-demo-option-1').click();
  cy.get(':nth-child(5) > :nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment').click();
  cy.get('#combo-box-demo-option-0').click();
  cy.get(':nth-child(4) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
  cy.get('#combo-box-demo-option-0').click();
  cy.get('#\\:r1s\\:').click();
  cy.get('#\\:r1s\\:').type("fgdgfd");
  cy.get('#\\:r1t\\:').click();
  cy.get('#\\:r1t\\:').type("55535");
  cy.get("#\\:r1v\\:").click({ force: true });
  cy.get("#\\:r1v\\:").type('sbvfff', { force: true });
  cy.get('#\\:r1u\\:').click();
  cy.get('#\\:r1u\\:').type("34354");
  cy.get('#\\:r20\\:').click({ force: true });
  cy.get('#\\:r20\\:').type('136.93359376', { force: true });
  cy.get('#\\:r21\\:').click({ force: true });
  cy.get('#\\:r21\\:').type('136.93359376', { force: true });
  cy.get('.css-1bvc4cc > :nth-child(2)').click();
  cy.get('#\\:r25\\:').click();
  cy.get('#\\:r25\\:').type("abcdef");
  cy.get('.ql-editor').click();
  cy.get('.ql-editor').type("hdsjhdf");
  cy.get('.css-1bvc4cc > :nth-child(2)').click();
  cy.wait(1000);
  cy.get('.css-1bvc4cc > :nth-child(2)').click();
  cy.get('#\\:r26\\:').click();
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

// Type a credit card number into the input field
cy.get('.MuiGrid-grid-lg-4').click();
cy.get('.privatestripeelement input[name="cardnumber"]').type('4242424242424242');

// Type a credit card expiration date into the input field
cy.get('.privatestripeelement input[name="exp-date"]').type('12/26');

// Type a CVC/CVV code into the input field
cy.get('.privatestripeelement input[name="cvc"]').type('123');

// Type a ZIP code into the input field
cy.get('.privatestripeelement input[name="postal"]').type('12345');



    }
});
});
//   cy.xpath("(//input[@type='checkbox'])[3]").click();
//   cy.xpath("(//button[normalize-space()='Pay'])[1]").click();
});
  



