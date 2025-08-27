describe('Página de login', ()=> {
    beforeEach(()=> {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
        })
                   
    it('Verifica mensagem de falha no login', () => {
        cy.get('[data-test="submit-button"]').click()
        cy.contains('É necessário informar um endereço de email').should('be.visible')
        cy.contains('Insira sua senha').should('be.visible')
    })
    })