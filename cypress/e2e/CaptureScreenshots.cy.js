describe('My Suite', () => {
  
    it('Capture Screenshots and Videos', () => {
      // include test 01 snippets
        cy.visit("https://demo.opencart.com/")
        cy.screenshot("homepage")
        cy.wait(5000)
        cy.get("img[title='Your Store']").screenshot("logo")
    })
  
    // it('Test 01 - Verify Title', () => {
    //   // include test 02 snippets
    //   cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //   cy.title().should('eq','OrangeHRM2')
    // })
  })