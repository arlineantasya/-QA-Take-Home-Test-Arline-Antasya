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
    
      //add to cart monitor
      cy.get("[onclick=\"byCat('monitor')\"]").click();
      cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
      cy.get('.col-sm-12 > .btn').click()
      cy.get('#cartur').click()
      cy.get('.col-lg-1 > .btn').click()

      //Place order
      cy.get('#name').click().type("Arline")
      cy.get('#country').click().type("Indonesia")
      cy.get('#city').click().type("Palembang")
      cy.get('#card').click().type("1234556789")
      cy.get('#month').click().type("05")
      cy.get('#year').click().type("2024")

      cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    
    });
  });
  
  
  
