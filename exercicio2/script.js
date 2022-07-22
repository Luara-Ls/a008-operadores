
let primeiroNumero = prompt("Digite um número");
let segundoNumero = prompt("Digite um número");

console.log(primeiroNumero)
console.log(segundoNumero)

console.log("O primeiro numero é maior que segundo?", +primeiroNumero > +segundoNumero);
console.log("O primeiro numero é igual ao segundo?", +primeiroNumero === +segundoNumero);
console.log("O primeiro numero é divisível pelo segundo?", +primeiroNumero % +segundoNumero ===0);
console.log("O segundo numero é divisível pelo primeiro?", +segundoNumero % +primeiroNumero ===0);
