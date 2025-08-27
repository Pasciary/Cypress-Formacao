describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Joaquim Silve');
    cy.get('input[name="email"]').type('joaquim@gmail.com');
    cy.get('input[name="password"]').type('Senha1234');
    cy.get('input[name="confirm_password"]').type('Senha1234');
    cy.contains('button', 'Cadastrar').click();
  })
})