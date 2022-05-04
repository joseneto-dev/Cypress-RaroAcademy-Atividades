import {cadastroPage} from '../support/pages/CadastroPage.po'

describe('Testar aplicação do BugBank', () => {
	beforeEach(() => {
		cy.visit('https://bugbank.netlify.app/')
		cy.get('.ihdmxA').click()
	})
	it('Criar uma cadastro com saldo', () => {
		cadastroPage.preencherFormularioCadastro(
			'joseneto@raro.com',
			'Jose',
			'123',
			'123'
		)
		cadastroPage.criarcontacomsaldo()
		cadastroPage.cadastrar()
		cadastroPage.verificarModalUsuarioCriadoComSucesso()
		cadastroPage.fecharmodal()
	})
	it('Criar uma cadastro com saldo testando a visualização da senha', () => {
		cadastroPage.preencherFormularioCadastro(
			'joseneto@raro.com',
			'Jose',
			'123',
			'123'
		)
		cadastroPage.criarcontacomsaldo()
		cadastroPage.versenha()
		cadastroPage.cadastrar()
		cadastroPage.verificarModalUsuarioCriadoComSucesso()
		cadastroPage.fecharmodalX()
	})
	it('Criar uma cadastro sem saldo', () => {
		cadastroPage.preencherFormularioCadastro(
			'joseneto@raro.com',
			'Jose',
			'123',
			'123'
		)
		cadastroPage.cadastrar()
		cadastroPage.verificarModalUsuarioCriadoComSucesso()
		cadastroPage.fecharmodal()
	})
	it('Criar uma cadastro sem saldo clicando no botão de fechar X', () => {
		cadastroPage.preencherFormularioCadastro(
			'joseneto@raro.com',
			'Jose',
			'123',
			'123'
		)
		cadastroPage.cadastrar()
		cadastroPage.verificarModalUsuarioCriadoComSucesso()
		cadastroPage.fecharmodalX()
	})
	it('Criar uma cadastro sem saldo clicando fora da tela', () => {
		cadastroPage.preencherFormularioCadastro(
			'joseneto@raro.com',
			'Jose',
			'123',
			'123'
		)
		cadastroPage.cadastrar()
		cadastroPage.verificarModalUsuarioCriadoComSucesso()
		cy.get('#__next').click(0, 0)
		cy.contains('#modalText', 'foi criada com sucesso').should('not.be.visible')
	})
	it('Criar uma cadastro com as senhas diferentes ', () => {
		cadastroPage.preencherFormularioCadastro(
			'joseneto@raro.com',
			'Jose',
			'123',
			'1234'
		)
		cadastroPage.cadastrar()
		cadastroPage.verificarsenhasincorreta()
		cadastroPage.fecharmodal()
	})
	it('Clicar e verificar se aconteceu um erro', () => {
		cadastroPage.cadastrar()
		cy.wait(1000)
		cadastroPage.verificarcampobrigatorio()
	})
	it('Realizar um cadastro sem nome deve apresentar a mensagem Nome não pode ser vazio', () => {
		cadastroPage.preencherFormularioCadastrosemnome(
			'joseneto@raro.com',
			'123',
			'123'
		)
		cadastroPage.cadastrar()
		cadastroPage.verificarnomeincorreto()
		cadastroPage.fecharmodal()
	})
	it('Realizar um cadastro sem email deve apresentar a mensagem Email não pode ser vazio', () => {
		cadastroPage.preencherFormularioCadastrosememail('Jose', '123', '123')
		cadastroPage.cadastrar()
		cadastroPage.verificarcampobrigatorio()
	})
	it('Realizar um cadastro sem senha deve apresentar a mensagem Senha não pode ser vazio', () => {
		cadastroPage.preencherFormularioCadastrosemsenha(
			'joseneto@raro.com',
			'Jose',
			'123'
		)
		cadastroPage.cadastrar()
		cy.get(
			':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__warging'
		).should('be.text', 'É campo obrigatório')
	})
	it('Realizar um cadastro sem confirmação de senha deve apresentar a mensagem Confirmar senha não pode ser vazio', () => {
		cadastroPage.preencherFormularioCadastrosemconfirmarsenha(
			'joseneto@raro.com',
			'Jose',
			'123'
		)
		cadastroPage.cadastrar()
		cy.get(
			':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__warging'
		).should('be.text', 'É campo obrigatório')
	})
	it('Criar uma cadastro sem saldo e fazer login verificando se a conta foi criada corretamente e logar', () => {
		const verificar =
			/([a-zA-Z]+( [a-zA-Z]+)+)\s[0-9]+([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?(\s([a-zA-Z]+\s)+)[a-zA-Z]+/
		cadastroPage.preencherFormularioCadastro(
			'joseneto@raro.com',
			'Jose',
			'123',
			'123'
		)
		cadastroPage.cadastrar()
		cadastroPage.verificarModalUsuarioCriadoComSucesso()

		cy.get('.styles__ContainerContent-sc-8zteav-1')
			.contains(new RegExp(verificar, 'g'))
			.should('be.visible')
		cadastroPage.fecharmodal()
		cy.get('.card__login').within(() => {
			cy.get('input[name="email"]').type('jose@neto.com', {force: true})
			cy.get('input[name="password"]').type('123', {force: true})
		})
		cy.get('.otUnI').invoke('removeAttr', 'target').click()
	})
})
