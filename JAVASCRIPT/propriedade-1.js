var pessoa = {
    nome : "Nichollas",
    idade : "17 Anos"
}

console.log("Objeto Pessoa (Puro)");
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log("-----xxx-----");
console.log();

var novaPessoa = Object.create(pessoa);

console.log("Objeto novaPessoa (Com elemento novo inserido: sobrenome)");
novaPessoa.sobrenome = "Falcão";

console.log(novaPessoa.nome);
console.log(novaPessoa.sobrenome);
console.log(novaPessoa.idade);

console.log("-----xxx-----");