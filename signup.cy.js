describe('Login Test', () => {
    it('should open login modal and log in successfully', () => {
  
      cy.visit('https://www.demoblaze.com'); 
      cy.get('#signin2').click()
      cy.get('#signInModal').should('be.visible');
  
      cy.get('#sign-username').click().type("sayaalin")
      cy.get('#sign-password').click().type("sayaalin")
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
        .should('be.visible')
        .click();
  
      // Verifikasi bahwa login berhasil
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should('be.visible'); // Ganti dengan elemen yang ada setelah login berhasil
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
    });
  });
  
  
  
