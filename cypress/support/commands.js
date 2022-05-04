// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('logar', function(email,senha){
    cy.get('.card__login').within(() => {
        cy.get('input[name="email"]').type(email, {force: true})
        cy.get('input[name="password"]').type(senha, {force: true})
        cy.contains('button', 'Acessar').click({force: true})
    })  
})
Cypress.Commands.add('criaruser', function(email,nome,senha,confirmarSenha){
    cy.get('.card__register').within(() => {
        cy.get('input[name="email"]').type(email, { force: true });
        cy.get('input[name="name"]').type(nome, { force: true });
        cy.get('input[name="password"]').type(senha, { force: true });
        cy.get('input[name="passwordConfirmation"]').type(confirmarSenha, { force: true });
        cy.get('button[type="submit"]').click({force: true})
    })
}) 

