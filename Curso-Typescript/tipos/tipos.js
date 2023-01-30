"use strict";
//string
let nome = 'João';
//console.log(nome);
//numbers 
let idade = 28;
//idade  = 'Anna';
idade = 27.5;
//console.log(idade);
//boolean 
let possuiHobbies = false;
//possuiHobbies = 1;
//console.log(possuiHobbies);
//tipos explicitos
let minhaIdade;
minhaIdade = 27;
//console.log(typeof  minhaIdade);
//array
//hobbies recebe um array de 'any' coisas
let hobbies = ['Cozinhar', 'Praticar esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);
//tupla
let endereco = ['Av Principal', 99];
console.log(endereco);
//enum
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
//any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2003 };
//funções
function retornaNome() {
    return nome;
}
console.log(retornaNome());
function digaOi() {
    console.log('oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 2));
//tipo função, quando declaramos uma variável que recebe uma função
let calculo;
/* calculo = digaOi
calculo() */
calculo = multiplicar;
console.log(calculo(2, 3));
let usuario = {
    nome: 'Marcos',
    idade: 25
};
usuario = {
    nome: 'Maria',
    idade: 33
};
console.log(usuario);
let functionario = {
    superv: ['Marcos', 'Luiz'],
    bateponto(horas) {
        if (!horas)
            return 'Input errado';
        if (horas <= 8) {
            return 'errado';
        }
        else {
            return 'Errado';
        }
    }
};
console.log(functionario);
console.log(functionario.bateponto(4));
//union types
let nota;
nota = 10;
console.log(`Minha nota é ${nota}`);
//Checando variáveis
let valor = 30;
if (typeof valor === 'number') {
    console.log('É um number');
}
else {
    console.log(typeof valor);
}
//Só podemos utilizar Null caso definimo anteriormente
//em um tipo união |
//                 v
let altura;
altura = null;
const contato1 = {
    nome: 'Fulano',
    tel1: '2345678',
    tel2: null
};
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map