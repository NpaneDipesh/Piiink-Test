describe('Payment Process', () => {
    it('should complete the payment process successfully', () => {
      // Describe block for the main test scenario
      describe("hgfd", () => {
        // Describe block for a specific test suite within the main test scenario
        it("tests hgfd", () => {
          // It block for a specific test case
  
          // Visit the specified URL
          cy.visit("https://dashboard.dev.piiink.org/signin/country-licensee");
  
          // Fill in the login form
          cy.get("#\\:r0\\:").type("james857@mailinator.com");
          cy.get("#\\:r1\\:").type("12345678");
  
          // Submit the login form
          cy.get("div:nth-of-type(4) > button").click();
  
          // Perform navigation within the application
          cy.get('.MuiList-root > :nth-child(6)').click();
          cy.get('[href="/country-licensee/addMerchant"] > .MuiListItemText-root > .MuiTypography-root').click();
  
          // Fill in the form to add a new merchant
          cy.get('#\\:r12\\:').type("fddtfdds");
          cy.get('#\\:r13\\:').type("tfdgftdz");
          cy.get('#\\:r14\\:').type("testmedrchant@mailinator.com");
          cy.get('#\\:r15\\:').type("98754678");
          cy.get('#\\:r16\\:').type("5644");
          // And so on for other form fields...
  
          // Complete payment process
          cy.get('input[name="cardnumber"]').type('4242 4242 4242 4242');
          cy.get('input[name="exp-date"]').type('05 / 25');
          cy.get('input[name="cvc"]').type('144');
          cy.get('input[name="postal"]').type('42423');
          cy.xpath("(//input[@type='checkbox'])[3]").click();
          cy.xpath("(//button[normalize-space()='Pay'])[1]").click();
        });
      });
    });
  });
  