describe('Login Test', () => {
    it('should open login modal and log in successfully', () => {
      
      cy.visit('https://www.demoblaze.com'); 
      cy.get('#login2').click() 
  
     
      cy.get('#login2').should('be.visible');
      cy.get('#loginusername').click().type("sayaalin")
      cy.get('#loginpassword').click().type("sayaalin") 
      cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
        .should('be.visible')
        .click();
  
      // Verifikasi bahwa login berhasil
      cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should('be.visible'); // Ganti dengan elemen yang ada setelah login berhasil
    
      //halaman contact
      cy.get(':nth-child(2) > .nav-link').click()
      cy.get('#recipient-name').click().type("Arline Antasya")
      cy.get('#message-text').click().type("Tulis Pesan")
      cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
      cy.screenshot()
    });
  });
  
  
  
