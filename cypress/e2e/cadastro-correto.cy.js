describe('Página de Castro', () => {
  it('Deve preencher os campos do formulário para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Joaquim Silve');
    cy.get('[data-test="input-email"]').type('joaquim@gmail.com');
    cy.get('[data-test="input-password"]').type('Senha1234');
    cy.get('[data-test="input-confirm-password"]').type('Senha1234');
    cy.get('[data-test="submit-button"]').click();
  })
})