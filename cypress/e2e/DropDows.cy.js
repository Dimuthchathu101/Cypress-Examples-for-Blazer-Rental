describe('Handle Dropdowns', () => {
  
    it.skip('Test 01 - Handling Dropdowns.', () => {
      cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
      cy.wait(4000)

      cy.xpath("//span[@id='select2-billing_country-container']").click()
      cy.xpath("//body/span[1]/span[1]/span[1]/input[1]").type("Italy").type('{enter}')

      cy.xpath("//span[@id='select2-billing_country-container']").should('have.text','Italy')

    })

    it.skip('Test 02. Auto Suggest Dropdown', () => {
        cy.visit("https://www.wikipedia.org/")
        cy.wait(4000)
        cy.get('#searchInput').type('Italy')
        cy.get('.suggestion-title').contains('Italy').click()

  
      })

      it.skip('Dynamic Dropdown', () => {
        cy.visit("https://www.google.com/")
        cy.wait(4000)
        cy.get("input[name='q']2qwasz").type('cypress automation')

  
      })
  

})
