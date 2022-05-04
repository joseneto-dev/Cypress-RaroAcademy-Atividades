import { logarPage } from "../support/pages/loginPage.po";
import {cadastroPage} from '../support/pages/CadastroPage.po'

describe('Login do usuario', () => {
    before(() => {
        cy.visit('https://bugbank.netlify.app/')
		cy.get('.ihdmxA').click()
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
    });
    
    it('Fazer o login', () => {
        logarPage.logar('joseneto@raro.com','123')
    });
})