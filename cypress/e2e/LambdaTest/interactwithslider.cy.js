describe('Test Slider Functionality', () => {
    it('should drag the slider to 95 and validate the value', () => {
      // Step 1: Visit the Selenium Playground page
      cy.visit('https://www.lambdatest.com/selenium-playground');
  
      // Step 2: Navigate to "Drag & Drop Sliders"
    //   cy.contains('Progress Bars & Sliders').click();
      cy.contains('Drag & Drop Sliders').click();
  
      // Step 3: Drag the slider to 95
      cy.get('input[type="range"]').eq(1).invoke('val', 95).trigger('input');
  
      // Step 4: Validate that the slider value is set to 95
      cy.get('#rangeSuccess').should('have.text', '95');
    });
  });
  