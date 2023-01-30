
interface Humano {
    nome: string
    idade?: number
    [pop: string]: any
    saudar(sobreNome: string): void
}

function saudarComOla(pessoa: Humano){
    console.log('Ola, '+ pessoa.nome)
}

function mudarNome(pessoa: Humano){
    pessoa.nome = 'Joana'
}

const pessoa: Humano = {
    nome: 'João',
    idade: 24,
    saudar(sobreNome: string) {
        console.log('Olá, meu nome é '
        + this.nome + ' '+sobreNome)
    },
}

/* saudarComOla(pessoa)
mudarNome(pessoa);
saudarComOla(pessoa)  

//saudarComOla({nome:'Marcos', idade: 28, altura: 1.85})
pessoa.saudar('Jão creito'); */


class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date()
    saudar(sobreNome: string) {
        console.log('Olá, meu nome é '
        + this.nome + ' '+sobreNome)
    }
}

const meuCliente = new Cliente();

meuCliente.nome = 'Hanz'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra);


//Interface com função

interface FuncaoCalculo {
    (a: number, b: number):number
}

let potencia: FuncaoCalculo

potencia = function (base: number, expoente: number): number {
    return base ** expoente;
}

console.log(potencia(3,10));


//Interface com herança

interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c1(): void
}

class RealA implements A {
    a(): void {}
}

class RealAB implements A, B {
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    c1(): void {
     }
    b(): void {
     }
    a(): void {}
 
}
//106. Uso de Interface para estender Object

interface Object {
    log(): void;
}

Object.prototype.log = function(){
    console.log(this.toString())
}

const x = 1
const y = 2
const z = 3

x.log()
y.log()
z.log()

