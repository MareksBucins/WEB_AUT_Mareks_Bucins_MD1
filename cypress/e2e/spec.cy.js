describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/selectable');
    cy.get('a#demo-tab-grid').click();

  })
})