describe('test_name', function() {

    it('what_it_does', function() {
   
       cy.viewport(1280, 631)
    
       cy.visit('https://dashboard.dev.piiink.org/websiteadmin/menuItem/footerMenu')
    
       cy.get('.mainContent > .MuiBox-root > .app-content > .MuiBox-root > .MuiButtonBase-root').click()
    
       cy.get('.MuiGrid-root > .MuiGrid-root > .MuiFormControl-root > .MuiInputBase-root > #\3Ar2e\3A').click()
    
       cy.get('.MuiGrid-root > .MuiGrid-root > .MuiFormControl-root > .MuiInputBase-root > #\3Ar2e\3A').type('sfsfdsf')
    
       cy.get('.MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > #combo-box-demo').click()
    
       cy.get('.MuiGrid-root > .MuiAutocomplete-popper > .MuiPaper-root > #combo-box-demo-listbox > #combo-box-demo-option-0').click()
    
       cy.get('.MuiGrid-root > .MuiGrid-root:nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
    
       cy.get('.MuiGrid-root:nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > #combo-box-demo').click()
    
       cy.get('body > .MuiAutocomplete-popper > .MuiPaper-root > #combo-box-demo-listbox > #combo-box-demo-option-0').click()
    
       cy.get('.MuiGrid-root:nth-child(5) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > #combo-box-demo').click()
    
       cy.get('.MuiGrid-root > .MuiAutocomplete-popper > .MuiPaper-root > #combo-box-demo-listbox > #combo-box-demo-option-2').click()
    
       cy.get('.MuiGrid-root > .MuiGrid-root > .MuiFormControl-root > .MuiInputBase-root > #\3Ar2n\3A').click()
    
       cy.get('.MuiGrid-root > .MuiGrid-root > .MuiFormControl-root > .MuiInputBase-root > #\3Ar2n\3A').type('1')
    
       cy.get('.MuiGrid-root:nth-child(3) > .MuiGrid-root > label > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
    
       cy.get('.MuiGrid-root:nth-child(3) > .MuiGrid-root > label > .MuiButtonBase-root > .PrivateSwitchBase-input').check('on')
    
       cy.get('.simplebar-content > form > .MuiBox-root > .MuiBox-root > .MuiButton-text').click()
    
    })
   
   })
   