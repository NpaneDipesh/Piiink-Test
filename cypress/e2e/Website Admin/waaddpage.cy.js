describe("add page", () => {
    it("add page", () => {
     require('cypress-xpath');
      cy.viewport(2000, 1019);
  
      cy.WAlogin();
      cy.get('[href="/websiteadmin/page"] > .MuiListItemText-root > .MuiTypography-root').click();
      cy.get('.MuiButton-sizeMedium').click();
      cy.get('#\\:ra\\:').click();
      cy.get('#\\:ra\\:').type("New Page 1");
      cy.get('#\\:rb\\:').click();  
      cy.get('#\\:rb\\:').type("New Page 1");
      cy.get('#\\:rc\\:').click();
      cy.get('#\\:rc\\:').type("New Page");
      cy.get('#\\:rd\\:').click();
      cy.get('#\\:rd\\:').type("New Page");
      cy.get('.ql-editor').click();
      cy.get('.ql-editor').type("New Page");

      cy.xpath("(//input[@type='checkbox'])[1]").click();
      cy.xpath("(//input[@name='order'])[1]").type('2');
      cy.xpath("(//button[normalize-space()='Save'])[1]").click();
    });
  });
