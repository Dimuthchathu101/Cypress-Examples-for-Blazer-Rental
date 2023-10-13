describe('Attribute Search', () => {
  
    it('Test 01 - Radio Buttons', () => {
      // include test 01 snippets
      cy.visit("https://demoqa.com/radio-button")
      cy.wait(4000)

      // Visibility of the radio buttons
      cy.get("//input[@id='yesRadio']").should('be.visible')
      cy.get("//input[@id='impressiveRadio']").should('be.visible')

      cy.get("//input[@id='yesRadio']").should('be.checked')
      cy.get("//input[@id='impressiveRadio']").should('not.be.checked')

      cy.get("//input[@id='impressiveRadio']").should('be.checked')
      cy.get("//input[@id='yesRadio']").should('not.be.checked')
      
      
      //cy.get('').should('have.length',7)
      //cy.get('.oxd-main-menu-item-wrapper:nth-child(9) .oxd-main-menu-item').contains("abc")
    })

    it('Test 02 - Checkboxes', () => {
      // include test 01 snippets
      cy.visit("https://demoqa.com/checkbox")
      cy.wait(4000)

      // Visibility of the checkboxes
      
      cy.xpath("//body/div[@id='app']/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/ol[1]/li[1]/span[1]/label[1]/span[1]").should('be.visible')

      cy.xpath("//body/div[@id='app']/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/ol[1]/li[1]/span[1]/label[1]/span[1]").check().should('be.checked')

      // unselecting checkbox which is moew similar to radio buttons

      // Selecting all checkboxes
      cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

      // Selecting First Checkbox
      cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
      cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')

      //cy.get('').should('have.length',7)
      //cy.get('.oxd-main-menu-item-wrapper:nth-child(9) .oxd-main-menu-item').contains("abc")
    })
  
    // Assertions 
    // Implicit assertions (build in) 
    // should
    // and

    // Explicit Assertions
    // expect
    // assert
  })
  