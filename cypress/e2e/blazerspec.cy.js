describe('My First Test', () => {
  
  it('Test 01 - Verify Title', () => {
    // include test 01 snippets
    cy.visit("http://localhost:3000/")
    cy.title().should('eq','React App')
  })

  // it('Test 01 - Verify Title', () => {
  //   // include test 02 snippets
  //   cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  //   cy.title().should('eq','OrangeHRM2')
  // })
})