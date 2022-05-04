describe('Fazer uma transferencia', () => {
    before(() => {
        cy.visit('https://bugbank.netlify.app/')
		cy.get('.ihdmxA').click()
        cy.criaruser('joseneto@raro.com','Jose','123','123')
    });
    it('', () => {
        
    });
});