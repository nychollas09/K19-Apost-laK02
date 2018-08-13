var pessoa = {
    nome : "Nichollas",
    sobrenome : "Falcão"
}

var novaPessoa = Object.create(pessoa);

novaPessoa.idade = 17;

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);