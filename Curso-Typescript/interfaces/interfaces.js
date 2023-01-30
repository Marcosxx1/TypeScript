"use strict";
function saudarComOla(pessoa) {
    console.log('Ola, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 24,
    saudar(sobreNome) {
        console.log('Olá, meu nome é '
            + this.nome + ' ' + sobreNome);
    },
};
/* saudarComOla(pessoa)
mudarNome(pessoa);
saudarComOla(pessoa)

//saudarComOla({nome:'Marcos', idade: 28, altura: 1.85})
pessoa.saudar('Jão creito'); */
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date();
    }
    saudar(sobreNome) {
        console.log('Olá, meu nome é '
            + this.nome + ' ' + sobreNome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Hanz';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, expoente) {
    return base ** expoente;
};
console.log(potencia(3, 10));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    c1() {
    }
    b() {
    }
    a() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 1;
const y = 2;
const z = 3;
x.log();
y.log();
z.log();
//# sourceMappingURL=interfaces.js.map