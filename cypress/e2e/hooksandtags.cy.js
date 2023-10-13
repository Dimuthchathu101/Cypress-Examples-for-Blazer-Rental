describe('My First Test', () => {
  
    // before
    // after
    // beforeEach
    // AfterEach

    before(()=>{
        cy.log("Launching the application")
    })

    after(()=>{
        cy.log("******* close App")
    })

    beforeEach(()=>{
        cy.log("*** Login *****")
    })

    afterEach(()=>{
        cy.log ("*** Logout Application")
    })

    it('Search', () => {
        cy.log("**** Searching *****")
    })

    it('Advanced Search', () => {
        cy.log("**** Advanced Searching *****")
    })
  
    it('Listing Products', () => {
        cy.log("**** Lsiting Prdoucts *****")
    })

  })