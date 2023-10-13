// tag#id
// tag.class
// tag[attribute='value']
// tag.class[attribute='value']


describe('Attribute Search', () => {
  
    it('Test 01 - Verify Login', () => {
      // include test 01 snippets
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.title().should('eq','OrangeHRM')

      cy.get("[name='username']").type("Admin")
      cy.get("[name='password']").type("admin123")
      cy.get(".orangehrm-login-button").click()

      cy.wait(10000);

      cy.xpath("//body/div[@id='app']/div[1]/div[1]/aside[1]/nav[1]/div[2]/ul[1]/li[9]/a[1]/span[1]").click()
      cy.wait(10000)
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
  
