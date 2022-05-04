class LoginPage {
	// Seletores da página
	formularioRegistrar = '.card__login'
	inputEmail = "input[name='email']"
	inputSenha = "input[name='password']"

	logar(email, senha) {
		cy.get(this.formularioRegistrar).within(() => {
			cy.get(this.inputEmail).type(email, {force: true})
			cy.get(this.inputSenha).type(senha, {force: true})
			cy.contains('button', 'Acessar').click({force: true})
		})
	}
}
export const logarPage = new LoginPage()
