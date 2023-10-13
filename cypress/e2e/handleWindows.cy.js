describe('Handling Windows Links', () => {
  
    it('Handling', () => {
      // include test 01 snippets
      cy.visit("https://the-internet.herokuapp.com/windows")
      
      cy.xpath("//a[contains(text(),'Click Here')]").invoke('removeAttr','target').click()

      cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

      cy.wait(10000)

      cy.go('back')

    }) 

  })