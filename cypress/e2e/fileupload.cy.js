describe('File Upload', () => {
  
    it('Single File Upload', () => {
      // include test 01 snippets
      cy.visit("https://the-internet.herokuapp.com/upload")
        cy.wait(2000)
      cy.get('#file-upload').attachFile('report.pdf');
      cy.get('#file-submit').click()
      cy.wait(5000)

      

    })

    it('File Upload - Rename', () => {
        // include test 01 snippets
        cy.visit("https://the-internet.herokuapp.com/upload")
          cy.wait(2000)
        cy.get('#file-upload').attachFile({filePath:'report.pdf',fileName:'HelloCypress.pdf'});
        cy.get('#file-submit').click()
        cy.wait(5000)
  
      })

      it('Drag and Drop', () => {
        // include test 01 snippets
        cy.visit("https://the-internet.herokuapp.com/upload")
          cy.wait(2000)
        cy.get('#drag-drop-upload').attachFile('report.pdf',{subjectType:'drag-n-drop'});
        cy.get('#file-submit').click()
        cy.wait(5000)

      })

      it('Multiple Files Upload', () => {
        // include test 01 snippets
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
          cy.wait(2000)
       cy.get('#filesToUpload').attachFile(["report.pdf","report02.pdf"])
       cy.wait(5000)

      })

      it.only('Shoadow File Upload', () => {
        // include test 01 snippets
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
          cy.wait(2000)
       cy.get('#filesToUpload',{includeShadowDom:true}).attachFile(["report.pdf","report02.pdf"])
       

      })

      
    
  })