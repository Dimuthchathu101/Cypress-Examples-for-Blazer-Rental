describe('My Test Suite', () => {
  
    it('Data Driven Test5', () => {
      cy.fixture('ornagehrm').then((data)=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        data.forEach((userData)=> {
           
              cy.get('div.orangehrm-login-layout div.orangehrm-login-layout-blob div.orangehrm-login-container div.orangehrm-login-slot-wrapper div.orangehrm-login-slot div.orangehrm-login-form form.oxd-form:nth-child(2) div.oxd-form-row:nth-child(2) div.oxd-input-group.oxd-input-field-bottom-space div:nth-child(2) > input.oxd-input.oxd-input--active').type(userData.username)
      cy.get("div.orangehrm-login-layout div.orangehrm-login-layout-blob div.orangehrm-login-container div.orangehrm-login-slot-wrapper div.orangehrm-login-slot div.orangehrm-login-form form.oxd-form:nth-child(2) div.oxd-form-row:nth-child(3) div.oxd-input-group.oxd-input-field-bottom-space div:nth-child(2) > input.oxd-input.oxd-input--active").type(userData.password);
      cy.get('div.orangehrm-login-layout div.orangehrm-login-layout-blob div.orangehrm-login-container div.orangehrm-login-slot-wrapper div.orangehrm-login-slot div.orangehrm-login-form form.oxd-form:nth-child(2) div.oxd-form-actions.orangehrm-login-action:nth-child(4) > button.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click();
    
cy.wait(5000)
cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
cy.xpath("//a[contains(text(),'Logout')]").click();
        });
      })
    })
  
    // it('Test 01 - Verify Title', () => {
    //   // include test 02 snippets
    //   cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //   cy.title().should('eq','OrangeHRM2')
    // })
  })