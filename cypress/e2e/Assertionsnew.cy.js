describe('Assertion Demo', () => {
  
    it('Implicit Assertions', () => {
      // include test 01 snippets
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      
      cy.wait(1000)
      // usage of should
      cy.url().should('include','orangehrmlive.com')
      .and('contain','orangehrm')
      .and('not.contain','hellohrm')
      cy.title().should('eq','OrangeHRM')

      cy.get('.orangehrm-login-branding > img').should('be.visible')
      .and('exist')

      cy.xpath("//a").should('have.length','5')

      cy.get("[name='username']").type("Admin")
        .should('have.value','Admin')

      cy.get("[name='password']").type("admin123")

      

    //   cy.get(".orangehrm-login-button").click()
    // eq, contain, include, exist, have.length, have.value

      

      cy.wait(10000);
    })

    it('Explicit Assertions', () => {
        // include test 01 snippets
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("[name='username']").type("Admin")

        cy.get("[name='password']").type("admin123")

        cy.get(".orangehrm-login-button").click()

        cy.wait(2000)

        let expName = "xyz";

        // BDD
        cy.get('.oxd-userdropdown-name').then( (x)=>{
           let actName =  x.text()
           expect(actName).to.equal(expName)
           expect(actName).to.not.equal(expName)

           assert.equal(actName,expName)
        })

      })

  })