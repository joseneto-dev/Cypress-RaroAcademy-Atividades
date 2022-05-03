describe('Testar aplicação do BugBank', () => {
	beforeEach(() => {
		cy.visit('https://bugbank.netlify.app/')
		cy.get('.ihdmxA').click()
	})
	it('Criar uma cadastro com saldo', () => {
		cy.get('.card__register').within(() => {
			cy.get('input[name="email"]').type('jose@neto.com', {force: true})
			cy.get('input[name="name"]').type('jose neto', {force: true})
			cy.get('input[name="password"]').type('123', {force: true})
			cy.get('input[name="passwordConfirmation"]').type('123', {force: true})
			cy.get('label[id="toggleAddBalance"]').click({force: true})
			cy.get('button[type="submit"]').click({force: true})
		})
		cy.get('.styles__ContainerContent-sc-8zteav-1').should('be.visible')
		cy.get('#btnCloseModal').click({force: true})
	})

	it.only('Criar uma cadastro com saldo testando a visualização da senha', () => {
		cy.get('.card__register').within(() => {
			cy.get('input[name="email"]').type('jose@neto.com', {force: true})
			cy.get('input[name="name"]').type('jose neto', {force: true})
			cy.get('input[name="password"]').type('123', {force: true})
			cy.get('button[class="login__eye"]').eq(0).click({force: true})
			cy.get('input[name="passwordConfirmation"]').type('123', {force: true})
			cy.get('button[class="login__eye"]').eq(1).click({force: true})
			cy.get('label[id="toggleAddBalance"]').click({force: true})
			cy.get('button[type="submit"]').click({force: true})
		})
		cy.get('.styles__ContainerContent-sc-8zteav-1').should('be.visible')
		cy.get('#btnCloseModal').click({force: true})
	})
	it('Criar uma cadastro sem saldo', () => {
		cy.get('.card__register').within(() => {
			cy.get('input[name="email"]').type('jose@neto.com', {force: true})
			cy.get('input[name="name"]').type('jose neto', {force: true})
			cy.get('input[name="password"]').type('123', {force: true})
			cy.get('input[name="passwordConfirmation"]').type('123', {force: true})
			cy.get('button[type="submit"]').click({force: true})
		})
		cy.get('.styles__ContainerContent-sc-8zteav-1')
			.should('be.visible')
			.should('include.text', 'foi criada com sucesso')
		cy.get('#btnCloseModal').click({force: true})
	})
	it('Criar uma cadastro sem saldo clicando no segundo botão de fechar', () => {
		cy.get('.card__register').within(() => {
			cy.get('input[name="email"]').type('jose@neto.com', {force: true})
			cy.get('input[name="name"]').type('jose neto', {force: true})
			cy.get('input[name="password"]').type('123', {force: true})
			cy.get('input[name="passwordConfirmation"]').type('123', {force: true})
			cy.get('button[type="submit"]').click({force: true})
		})
		cy.get('.styles__ContainerContent-sc-8zteav-1')
			.should('be.visible')
			.should('include.text', 'foi criada com sucesso')
		cy.get('.ffzYTz').click({force: true}).should('not.be.visible')
	})
	it('Criar uma cadastro sem saldo clicando no segundo botão de fechar', () => {
		cy.get('.card__register').within(() => {
			cy.get('input[name="email"]').type('jose@neto.com', {force: true})
			cy.get('input[name="name"]').type('jose neto', {force: true})
			cy.get('input[name="password"]').type('123', {force: true})
			cy.get('input[name="passwordConfirmation"]').type('123', {force: true})
			cy.get('button[type="submit"]').click({force: true})
		})
		cy.get('.styles__ContainerContent-sc-8zteav-1')
			.should('be.visible')
			.should('include.text', 'foi criada com sucesso')
		cy.get('.styles__ContainerCloseButton-sc-8zteav-2 > a').click()
		
	})
	it('Criar uma cadastro sem saldo clicando fora da tela', () => {
		cy.get('.card__register').within(() => {
			cy.get('input[name="email"]').type('jose@neto.com', {force: true})
			cy.get('input[name="name"]').type('jose neto', {force: true})
			cy.get('input[name="password"]').type('123', {force: true})
			cy.get('input[name="passwordConfirmation"]').type('123', {force: true})
			cy.get('button[type="submit"]').click({force: true})
		})
		cy.get('.styles__ContainerContent-sc-8zteav-1')
			.should('be.visible')
			.should('include.text', 'foi criada com sucesso')
		cy.get('#__next').click(0,0)
		cy.get('.styles__ContainerContent-sc-8zteav-1')
			.should('not.be.visible')
		
	})
	it('Criar uma cadastro com as senhas diferentes ', () => {
		cy.get('.card__register').within(() => {
			cy.get('input[name="email"]').type('jose@neto.com', {force: true})
			cy.get('input[name="name"]').type('jose neto', {force: true})
			cy.get('input[name="password"]').type('123', {force: true})
			cy.get('input[name="passwordConfirmation"]').type('1234', {force: true})
			cy.get('button[type="submit"]').click({force: true})
		})
		cy.get('.styles__ContainerContent-sc-8zteav-1').should(
			'include.text',
			'As senhas não são iguais.'
		)
		cy.get('#btnCloseModal').click({force: true})
	})
	it('Clicar e verificar se aconteceu um erro', () => {
		cy.get('.CMabB').click({force: true})
		cy.wait(1000)
		cy.get(':nth-child(2) > .input__warging').should(
			'be.text',
			'É campo obrigatório'
		)
	})
	it('Realizar um cadastro sem nome deve apresentar a mensagem Nome não pode ser vazio', () => {
		cy.get('.card__register').within(() => {
			cy.get('input[name="email"]').type('jose@neto.com', {force: true})
			cy.get('input[name="password"]').type('123', {force: true})
			cy.get('input[name="passwordConfirmation"]').type('123', {force: true})
			cy.get('button[type="submit"]').click({force: true})
		})
		cy.get('.styles__Text-sc-8zteav-4').should(
			'include.text',
			'Nome não pode ser vazio.'
		)
	})
	it('Realizar um cadastro sem email deve apresentar a mensagem Email não pode ser vazio', () => {
		cy.get('.card__register').within(() => {
			cy.get('input[name="name"]').type('jose neto', {force: true})
			cy.get('input[name="password"]').type('123', {force: true})
			cy.get('input[name="passwordConfirmation"]').type('123', {force: true})
			cy.get('button[type="submit"]').click({force: true})
		})
		//na especificação fala de uma maneira e o texto apresentado foi outro
		cy.get('.kOeYBn > .input__warging').should(
			'be.text',
			'Email não pode ser vazio'
		)
	})
	it('Realizar um cadastro sem senha deve apresentar a mensagem Senha não pode ser vazio', () => {
		cy.get('.card__register').within(() => {
			cy.get('input[name="email"]').type('jose@neto.com', {force: true})
			cy.get('input[name="name"]').type('jose neto', {force: true})
			cy.get('input[name="passwordConfirmation"]').type('123', {force: true})
			cy.get('button[type="submit"]').click({force: true})
		})
		cy.get(
			':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__warging'
		).should('be.text', 'Senha não pode ser vazio')
	})
	it('Realizar um cadastro sem confirmação de senha deve apresentar a mensagem Confirmar senha não pode ser vazio', () => {
		cy.get('.card__register').within(() => {
			cy.get('input[name="email"]').type('jose@neto.com', {force: true})
			cy.get('input[name="name"]').type('jose neto', {force: true})
			cy.get('input[name="password"]').type('123', {force: true})
			cy.get('button[type="submit"]').click({force: true})
		})
		cy.get(
			':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__warging'
		).should('be.text', 'É campo obrigatório')
	})
	it('Criar uma cadastro sem saldo e fazer login verificando se a conta foi criada corretamente e logar', () => {
		const verificar =
			/([a-zA-Z]+( [a-zA-Z]+)+)\s[0-9]+([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?(\s([a-zA-Z]+\s)+)[a-zA-Z]+/
			cy.get('.card__register').within(() => {
				cy.get('input[name="email"]').type('jose@neto.com', {force: true})
				cy.get('input[name="name"]').type('jose neto', {force: true})
				cy.get('input[name="password"]').type('123', {force: true})
				cy.get('input[name="passwordConfirmation"]').type('123', {force: true})
				cy.get('button[type="submit"]').click({force: true})
			})
		cy.get('.styles__ContainerContent-sc-8zteav-1')
			.should('be.visible')
			.contains(new RegExp(verificar, 'g'))

		cy.get('#btnCloseModal').click({force: true})
		cy.get('.card__login').within(() => {
			cy.get('input[name="email"]').type('jose@neto.com', {force: true})
			cy.get('input[name="password"]').type('123', {force: true})
		})
		cy.get('.otUnI').invoke('removeAttr', 'target').click()
	})
	xit('Logar', () => {
		cy.get('.card__login').within(() => {
			cy.get('input[name="email"]').type('jose@neto.com', {force: true})
			cy.get('input[name="password"]').type('123', {force: true})
		})
		cy.get('.otUnI').invoke('removeAttr', 'target').click()
	});
})
