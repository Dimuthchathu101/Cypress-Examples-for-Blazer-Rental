describe('DDT Fixtures', () => {
  
    let userData;
    before(()=>{
        cy.fixture("ornagehrm").then((data)=>{
            userData = data
        })
    })

    
    it.skip('FixturesDemoTest', () => {
      // include test 01 snippets
       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

              cy.get('div.orangehrm-login-layout div.orangehrm-login-layout-blob div.orangehrm-login-container div.orangehrm-login-slot-wrapper div.orangehrm-login-slot div.orangehrm-login-form form.oxd-form:nth-child(2) div.oxd-form-row:nth-child(2) div.oxd-input-group.oxd-input-field-bottom-space div:nth-child(2) > input.oxd-input.oxd-input--active').type(userData.username)
      cy.get("div.orangehrm-login-layout div.orangehrm-login-layout-blob div.orangehrm-login-container div.orangehrm-login-slot-wrapper div.orangehrm-login-slot div.orangehrm-login-form form.oxd-form:nth-child(2) div.oxd-form-row:nth-child(3) div.oxd-input-group.oxd-input-field-bottom-space div:nth-child(2) > input.oxd-input.oxd-input--active").type(userData.password);
      cy.get('div.orangehrm-login-layout div.orangehrm-login-layout-blob div.orangehrm-login-container div.orangehrm-login-slot-wrapper div.orangehrm-login-slot div.orangehrm-login-form form.oxd-form:nth-child(2) div.oxd-form-actions.orangehrm-login-action:nth-child(4) > button.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click();
    


    })
  

  })