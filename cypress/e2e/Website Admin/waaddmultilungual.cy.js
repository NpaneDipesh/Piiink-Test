describe("add page", () => {
    it("add page", () => {
     require('cypress-xpath');
      cy.viewport(2000, 1019);
  
      cy.WAlogin();
      cy.get('[href="/websiteadmin/multilingual"] > .MuiListItemText-root > .MuiTypography-root').click();
      cy.get('.MuiButton-sizeMedium').click();
      cy.xpath("(//input[@name='name'])[1]").type("Nepal");
      cy.xpath("(//textarea[@name='description'])[1]").type("Nepal");
      cy.get('.css-19kzrtu > .MuiBox-root > .MuiButton-text').click();
    });
  });
