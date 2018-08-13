var pessoa = {
    nome : "Nichollas",
    sobrenome : "Falcão"
}

var novaPessoa = Object.create(pessoa);

console.log(novaPessoa.nome);
console.log(novaPessoa.sobrenome);