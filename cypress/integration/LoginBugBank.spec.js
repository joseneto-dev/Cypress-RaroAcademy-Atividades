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
    it.only('Fazer o login com informações incorretas', () => {
        logarPage.logar('joseneto@raro.com','1234')
        cy.wait(1000)
        cy.contains("#modalText",
			'Usuário ou senha inválido.Tente novamente ou verifique suas informações!'
		)
        //logarPage.verificaracessoincorreto()
        logarPage.fecharmodal()

    });
    
    });
    it('logar sem informaçoes', () => {
        cy.visit('https://bugbank.netlify.app/')
        logarPage.logarsemcampos()
        logarPage.verificarcampobrigatorio()
})