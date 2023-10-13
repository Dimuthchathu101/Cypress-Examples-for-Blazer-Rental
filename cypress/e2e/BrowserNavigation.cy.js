describe('Browser Navigation', () => {
  
    it('Navigation Test', () => {
      // include test 01 snippets
      cy.visit("https://demo.opencart.com/")
      cy.title().should('eq','Your Store')
    cy.xpath("//body/main[1]/div[1]/nav[1]/div[2]/ul[1]/li[7]/a[1]").click()
    cy.wait(2000)
    cy.go('back')
    cy.wait(2000)
    cy.go('forward')

    })

  })