// <reference types="Cypress"/ >

function dividir(numerador, denominador) {
  var div = Math.floor(numerador/ denominador);
  
    return div;
   
    
    
}
function dividir1(numerador, denominador) {
var remainder = numerador % denominador;
return remainder;
}
describe('Teste de Divisão', () => {
    it('testes de divisão', () => {
       var div = dividir(100,2)
       expect(div).to.equal(50);
})
    it.only('Teste de Divisão e resto', () => {
      var div1 = dividir(51,3)
      expect(div1).to.equal(17)
     var div=  dividir1(51,3.5)
      expect(div).to.not.equal(0);
    
})
    it('Divisão ', () => {
  
});
})