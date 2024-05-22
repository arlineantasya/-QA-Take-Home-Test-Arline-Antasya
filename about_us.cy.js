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
    
      //halaman about us
      cy.get(':nth-child(3) > .nav-link').click()
      cy.wait(2000)
      cy.get('#videoModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    });
  });
  
  
  
