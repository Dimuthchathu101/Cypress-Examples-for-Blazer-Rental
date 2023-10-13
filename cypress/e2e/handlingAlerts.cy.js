describe('Handling Alerts', () => {
  
    it.skip('Normal Alert', () => {
      // include test 01 snippets
      cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
      
      cy.wait(4000)
      cy.get(':nth-child(1) > button').click();

      cy.on('window:alert',(t)=>{
        expect(t).to.contains('I am a JS Alert')
      })

      cy.get("#result").should('have.text', 'You successfully clicked an alert')

    })

    it('Confirmation Alert - OK', () => {
        // include test 01 snippets
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")        
        cy.wait(4000)

        cy.xpath("//button[contains(text(),'Click for JS Confirm')]").click()

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')
          })

        cy.get('#result').should('have.text','You clicked: Ok')
  
      })

      it('Confirmation Alert - Cancel', () => {
        // include test 01 snippets
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")        
        cy.wait(4000)

        cy.xpath("//button[contains(text(),'Click for JS Confirm')]").click()

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')
          })

        cy.on('window:confirm',()=>false)
        cy.get('#result').should('have.text','You clicked: Cancel')
  
      })

      it('Confirmation Alert -Prompt', () => {
        // include test 01 snippets
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")        
        cy.wait(4000)

        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome')
        })

        cy.xpath("//button[contains(text(),'Click for JS Prompt')]").click()

        // cy.on('window:prompt',()=>false)

        cy.get("#result").should('have.text', 'You entered: welcome')
  
      })

      it.only('Confirmation Alert -Basic Auth', () => {
        // include test 01 snippets
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{
            username:"admin",
            password:"admin"}})        
        
       cy.get("div[class='example'] p").should('have.contain', "Congratulations")

  
      })

  })