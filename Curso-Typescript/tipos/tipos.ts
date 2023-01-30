//string
let nome: string = 'João';

//console.log(nome);


//numbers 
let idade: number = 28;
//idade  = 'Anna';
idade = 27.5;

//console.log(idade);



//boolean 
let possuiHobbies = false;

//possuiHobbies = 1;
//console.log(possuiHobbies);


//tipos explicitos
let minhaIdade
minhaIdade = 27
//console.log(typeof  minhaIdade);


//array
//hobbies recebe um array de 'any' coisas
let hobbies: any[] = ['Cozinhar', 'Praticar esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);


//tupla
let endereco: [string, number] = ['Av Principal', 99];
console.log(endereco);

//enum
enum Cor {
    Cinza,
    Verde,
    Azul
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

//any

let carro: any = 'BMW'
console.log(carro);

carro = { marca: 'BMW', ano: 2003 };


//funções

function retornaNome(): string {
    return nome;
}
console.log(retornaNome());

function digaOi(): void {
    console.log('oi');
}

digaOi();

function multiplicar(numA: number, numB: number): number {
    return numA * numB;
}

console.log(multiplicar(2, 2));


//tipo função, quando declaramos uma variável que recebe uma função
let calculo: (numeroA: number, numeroB: number) => number;
/* calculo = digaOi
calculo() */

calculo = multiplicar
console.log(calculo(2, 3));

let usuario: { nome: string, idade: number } = {
    nome: 'Marcos',
    idade: 25
};




usuario = {
    nome: 'Maria',
    idade: 33
}

console.log(usuario);

/* 
    Criar um objeto 'funcionario' com:
        -Array de strings com os nomes dos supervisores
        - função de bater ponto que recebe a hora e 
        retorna uma string
            ->Ponto normal (<= 8)
            ->Fora do horário (> 8)
*/

type Funcionario = {
    superv: string[],
    bateponto: (horas: number) => string
};


let functionario: Funcionario = {
    superv: ['Marcos', 'Luiz'],

    bateponto(horas: number): string {
        if (!horas) return 'Input errado';
        if (horas <= 8) {
            return 'errado';
        }
        else {
            return 'Errado';
        }
    }
}


console.log(functionario);
console.log(functionario.bateponto(4));

//union types

let nota: number | string;

nota = 10;
 
console.log(`Minha nota é ${nota}`);

//Checando variáveis

let valor = 30;

if(typeof valor === 'number') {
    console.log('É um number')
} else {
    console.log(typeof valor)
}

//Só podemos utilizar Null caso definimo anteriormente
//em um tipo união |
//                 v
let altura: number | null;

altura = null;

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '2345678',
    tel2: null
}


// Desafio


type ContaBancaria = {
    saldo: number;
    depositar: (valor: number)  => void;
}

type Correntista = {
    nome: string;
    contaBancaria: ContaBancaria;
    contatos: string[]
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor
    }
}
 
let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)
 