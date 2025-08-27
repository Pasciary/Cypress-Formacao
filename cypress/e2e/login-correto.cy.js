describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();

    })

    it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
      cy.get('[data-test="input-loginEmail"]').type('joaquim@gmail.com');
      cy.get('[data-test="input-loginPassword"]').type('Senha1234');
      cy.get('[data-test="submit-button"]').click();
    })
})