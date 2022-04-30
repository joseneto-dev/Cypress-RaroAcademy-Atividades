describe('Testar aplicação do BugBank', () => {
    beforeEach(() => {
        cy.visit("https://bugbank.netlify.app/")
        cy.get('.ihdmxA').click()
    })
    it('Criar uma cadastro', () => {
        //duvida sobre como achar um seletor melhor e quando tenho poucos e uma boa pratica utilizar eq?
       cy.get('input[placeholder="Informe seu e-mail"]').eq(1).type('jose@neto.com',{force:true})
       cy.get('[name="name"]').type('jose neto',{force:true})
       cy.get('input[placeholder="Informe sua senha"]').eq(1).type('123',{force:true})
       cy.get('input[placeholder="Informe a confirmação da senha"]').type('123',{force:true})
       cy.get('.CMabB').click({force:true})
    
})
})