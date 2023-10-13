describe('Handling Mouse Events', () => {

    it.skip('Handling Mouse Hover', () => {
        // include test 01 snippets
        cy.visit("https://demo.opencart.com/")
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.xpath("//a[contains(text(),'Mac (1)')]").should('be.visible')

    })

    it.skip('Handling Right Click', () => {

        cy.visit("");

        // Approach one 
        // cy.get("").trigger('contextmenu');
        // cy.get("").should('be.visible')

        cy.get("").rightclick();
        cy.get("").should('be.visible')
    })

    it.skip('Handling Double Click', () => {
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblick3")
        cy.frameLoaded("")

        // Approach 01 - trigger
        cy.iframe().find('').trigger('dblclick');
        cy.iframe('').find('').should('have.value','Hello world');

    })

    it('Drag and drop using plugin', () => {
        cy.visit("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get('#box6').drag('#box106',{force:true});

    })

    it.only('Scrolling', () => {
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")
        cy.xpath("//body[1]/div[1]/div[2]/div[2]/div[2]/div[2]/div[2]/table[2]/tbody[1]/tr[30]/td[1]/img[1]")
        .scrollIntoView({duration:2000})
        cy.xpath("//body[1]/div[1]/div[2]/div[2]/div[2]/div[2]/div[2]/table[2]/tbody[1]/tr[30]/td[1]/img[1]")
        .should('be.visible')

    })


})