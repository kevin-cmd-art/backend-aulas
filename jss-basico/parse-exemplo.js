let meu_texto = "10" 
console.log(typeof meu_texto); //é string

let meu_valor_numerico = parseInt(meu_texto);
console.log(typeof meu_valor_numerico); // agora essa outra é número

let meu_valor_flutuante = parseFloat(1.23)
console.log(typeof meu_valor_flutuante) //number

let meu_nome = "Luna"
console.log("meu nome é do tipo: " + typeof meu_nome);

let meu_nome_em_numero = parseInt(meu_nome);
console.log("meu nome agora é do tipo: " + meu_nome_em_numero)

console.log("deu boa a conversão ? -> " + !isNaN(meu_nome_em_numero))

let meu_numero = 123
console.log(typeof meu_numero)

let meu_numero_em_texto = String(meu_numero);
console.log(typeof meu_numero_em_texto)

let teste = false 
console.log(typeof teste); //boolean

let teste_to_string = String(true);
console.log(typeof teste_to_string);

console.log(teste_to_string === String);

