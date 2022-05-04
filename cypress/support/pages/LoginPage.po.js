class LoginPage {
	// Seletores da página
	formularioRegistrar = '.card__login'
	inputEmail = "input[name='email']"
	inputSenha = "input[name='password']"
	campobrigatorio = 'p[class="input__warging"]'
	buttonfechar = '#btnCloseModal'
	fecharX = '.styles__ContainerCloseButton-sc-8zteav-2 > a'

	logar(email, senha) {
		cy.get(this.formularioRegistrar).within(() => {
			cy.get(this.inputEmail).type(email, {force: true})
			cy.get(this.inputSenha).type(senha, {force: true})
			cy.contains('button', 'Acessar').click({force: true})
		})
	}
	logarsemcampos() {
		cy.get(this.formularioRegistrar).within(() => {
			cy.get('.otUnI').click()
		})
	}
	verificarcampobrigatorio() {
		cy.contains('p', 'É campo obrigatório')
	}
	fecharmodal() {
		cy.get(this.buttonfechar).click({force: true})
	}
	fecharmodalX() {
		cy.get(this.fecharX).click()
	}
	verificaracessoincorreto() {
        cy.wait(1000)
        cy.get(this.formularioRegistrar).within(() => {
		cy.contains(
			'#modalText',
			'Usuário ou senha inválido.Tente novamente ou verifique suas informações!'
		)
    })
    
	}
}
export const logarPage = new LoginPage()
