describe('1 mājas darbs', () => {
    it('Testē vai noteikti cipari ir vai nav parādīti', () => {
      //atver mājas lapu testēšanai
      cy.visit('https://demoqa.com/selectable');
      //kliks uz grid sadaļas
      cy.get('a#demo-tab-grid').click();

      //cy.get('li.list-group-item').contains('Two','Four','Six','Eight').click();
      //cy.contains('li.list-group-item', 'Two').click()

      //uzklikšķina uz norādītajiem skaitļiem mājas darbā
      cy.get('li.list-group-item').contains('Two').click();
      cy.get('li.list-group-item').contains('Four').click();
      cy.get('li.list-group-item').contains('Six').click();
      cy.get('li.list-group-item').contains('Eight').click();

      //pārbauda vai skaitļi 2, 4, 6, 8 ir uzklikšķināti/iezīmēti
      cy.get('li.list-group-item').contains('Two').should('have.class', 'list-group-item-action').should('have.class', 'active');
      cy.get('li.list-group-item').contains('Four').should('have.class', 'list-group-item-action').should('have.class', 'active');
      cy.get('li.list-group-item').contains('Six').should('have.class', 'list-group-item-action').should('have.class', 'active');
      cy.get('li.list-group-item').contains('Eight').should('have.class', 'list-group-item-action').should('have.class', 'active');
      
     //pārbauda vai skaitļi 1, 3, 5, 7, 9 nav uzklikšķināti/iezīmēti tikai izmantojot metodi .should('not.have.class', 'active')
     
     //cy.get('li.list-group-item').contains('One').should('not.have.class', 'list-group-item-action').should('not.have.class', 'active');
     cy.get('li.list-group-item').contains('Three').should('not.have.class', 'active');
     cy.get('li.list-group-item').contains('Five').should('not.have.class', 'active');
     cy.get('li.list-group-item').contains('Seven').should('not.have.class', 'active'); 
     cy.get('li.list-group-item').contains('Nine').should('not.have.class', 'active'); 

    })
  })