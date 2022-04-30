
describe('Teste do site demoblaze', () => {
    beforeEach(function(){
        cy.visit('http://www.demoblaze.com/')
    })
    it('Testar seletores CSS', () => {
     
        cy.get(`a.nav-link[href="index.html"]`)
        .should('have.attr', 'href', 'index.html').should('include.text','Home')
        cy.contains('a','Contact').click()
        cy.wait(2000)
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')
        .click()
        cy.get(`a[data-target="#exampleModal"]`)
        .should('have.attr', 'href')
        cy.get(`a[data-target="#videoModal"]`)
        .should('have.attr', 'href')
        cy.get(`[onclick="byCat('phone')"]`).should('be.visible')    
})
    it('Testar About Us', () => {
        cy.get(`a[data-target="#videoModal"]`).click()
        cy.wait(2000)
        cy.get('#videoModal > .modal-dialog > .modal-content > .modal-footer > .btn')
        .click()
        cy.get(`a[data-target="#videoModal"]`).click()
        cy.wait(2000)
        cy.get('#videoModal > .modal-dialog > .modal-content > .modal-header > .close > span')
        .click()
        
    });
    
})