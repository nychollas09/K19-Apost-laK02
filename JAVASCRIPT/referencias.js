var pessoa = {
    nome : "Nichollas Falcão",
    apelido : "Falcãozinho"
}

console.log(pessoa.nome);
console.log(pessoa.apelido);

var acessoPessoa = pessoa;

acessoPessoa.nome = "Nichollas";
acessoPessoa.apelido = "Falcãozão";

console.log(acessoPessoa.nome);
console.log(acessoPessoa.apelido);