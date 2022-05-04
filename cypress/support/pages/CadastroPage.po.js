class CadastroPage {
    // Seletores da página
    formularioRegistrar = ".card__register";
    inputEmail = "input[name='email']";
    inputNome = "input[name='name']";
    inputSenha = "input[name='password']";
    inputConfirmarSenha = "input[name='passwordConfirmation']";
    buttonConfirmar = 'button[type="submit"]'
    buttonfechar = '#btnCloseModal'
    fecharX = '.styles__ContainerCloseButton-sc-8zteav-2 > a'
    labelsaldo = 'label[id="toggleAddBalance"]'
    versenha='button[class="login__eye"]'
    modal='.styles__ContainerContent-sc-8zteav-1'
    campobrigatorio = ':nth-child(2) > .input__warging'

    // Métodos da página
    visitar() {
        cy.visit("https://bugbank.netlify.app");
    }

    abrirFormularioRegistrar() {
        cy.contains("button", "Registrar").click();
    }

    preencherFormularioCadastro(email, nome, senha, confirmarSenha) {
        cy.get(this.formularioRegistrar).within(() => {
            cy.get(this.inputEmail).type(email, { force: true });
            cy.get(this.inputNome).type(nome, { force: true });
            cy.get(this.inputSenha).type(senha, { force: true });
            cy.get(this.inputConfirmarSenha).type(confirmarSenha, { force: true });
        })
    }
    preencherFormularioCadastrosemsenha(email, nome, confirmarSenha) {
        cy.get(this.formularioRegistrar).within(() => {
            cy.get(this.inputEmail).type(email, { force: true });
            cy.get(this.inputNome).type(nome, { force: true });
            cy.get(this.inputConfirmarSenha).type(confirmarSenha, { force: true });
        })
    }
    preencherFormularioCadastrosemconfirmarsenha(email, nome, senha) {
        cy.get(this.formularioRegistrar).within(() => {
            cy.get(this.inputEmail).type(email, { force: true });
            cy.get(this.inputNome).type(nome, { force: true });
            cy.get(this.inputSenha).type(senha, { force: true });
        })
    }
    preencherFormularioCadastrosemnome(email, senha, confirmarSenha) {
        cy.get(this.formularioRegistrar).within(() => {
            cy.get(this.inputEmail).type(email, { force: true });
            cy.get(this.inputSenha).type(senha, { force: true });
            cy.get(this.inputConfirmarSenha).type(confirmarSenha, { force: true });
        })
    }
    preencherFormularioCadastrosememail(nome, senha, confirmarSenha) {
        cy.get(this.formularioRegistrar).within(() => {
            cy.get(this.inputNome).type(nome, { force: true });
            cy.get(this.inputSenha).type(senha, { force: true });
            cy.get(this.inputConfirmarSenha).type(confirmarSenha, { force: true });
        })
    }
    cadastrar(){
        cy.get(this.formularioRegistrar).within(() => {
        cy.get(this.buttonConfirmar).click({force: true})
        })
    }

    verificarModalUsuarioCriadoComSucesso() {
        cy.contains("#modalText", "foi criada com sucesso").should("be.visible");
        cy.contains("#btnCloseModal", "Fechar").should("be.visible");
        cy.contains("a[href='#']", "x").should("be.visible");
    }
    fecharmodal(){
        cy.get(this.buttonfechar).click({force: true}) 
    }
    fecharmodalX(){
        cy.get(this.fecharX).click()
    }
    criarcontacomsaldo(){
        cy.get(this.labelsaldo).click({force: true})
    }
    versenha(){
        cy.get(this.versenha).eq(1).click({force: true})
	    cy.get(this.versenha).eq(2).click({force: true})
    }
    verificarsenhasincorreta(){
        cy.contains("#modalText", "As senhas não são iguais.").should("be.visible")
    }
    verificarnomeincorreto(){
       cy.contains("#modalText", "Nome não pode ser vazio.").should("be.visible")
    }
    verificarcampobrigatorio(){
        cy.get(this.campobrigatorio).should(
			'be.text',
			'É campo obrigatório'
		)
    }
}
export const cadastroPage = new CadastroPage();