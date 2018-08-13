var pessoa = {
    nome : "Nichollas",
    sobrenome : "Falcão"
}

var novaPessoa = Object.create(pessoa);

pessoa.nome = "Nick"
pessoa.sobrenome = "Falcãozinho"

console.log(novaPessoa.nome);
console.log(novaPessoa.sobrenome);