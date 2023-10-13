describe('Handling iFrames', () => {
  
    it('Handling iFrames', () => {
      // include test 01 snippets
      cy.visit("https://the-internet.herokuapp.com/iframe")
      
     const iframe =  cy.xpath("//iframe[@id='mce_0_ifr']")
     .its('0.contentDocument.body')
     .should('be.visible')
     .then(cy.wrap)

    iframe.clear().type("Welcome Dimuth {cmd+a}")
    cy.get("[aria-label='Bold']").click()
    }) 

    it.only('Handling iFrames', () => {
        // include test 01 snippets
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.frameLoaded('#mce_0_ifr')

        cy.wait(2000)
        cy.iframe('#mce_0_ifr').clear().type("Welcome {ctrl+a}")
        

        cy.get("[aria-label='Bold']").click()

        cy.wait(5000)
       
      })

  })