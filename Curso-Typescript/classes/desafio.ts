// Exercício 1 - Classe
/* function Moto2(nome) {
    this.nome = nome
    this.velocidade = 0
 
    this.buzinar = function() {
        console.log('Toooooooooot!')
    }
 
    this.acelerar= function(delta) {
        this.velocidade = this.velocidade + delta
    }
}
 
var moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade) */

class Moto {
    constructor
        (protected nome: string,
            public velocidade: number = 0) {
    }

    buzinar() {
        console.log('Toooooooooot!')
    }

    acelerar(delta: number) {
        this.velocidade += delta;
    }
}

const moto = new Moto('Ducati')
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);


// Exercício 2 - Herança/////////////
/* var objeto2Ds = {
    base: 0,
    altura: 0
}

var retangulo = Object.create(objeto2D)
retangulo.base = 5
retangulo.altura = 7
retangulo.area = function () {
    return this.base * this.altura
}
console.log(retangulo.area())
 */

class objeto2D {
    constructor(
        base: number = 0,
        altura: number = 0) {
    }
}

class Retangulo extends objeto2D {
    constructor() {
        super()!
    }

    area(area: number, altura: number): number {
        return area * altura;
    }
}
const ret = new Retangulo();
console.log('Área do retângulo' + ret.area(2, 3));



// Exercício 3 - Getters & Setters
/* var estagiario = {
    _primeiroNome: ''
}

Object.defineProperty(estagiario, 'primeiroNome', {
    get: function () {
        return this._primeiroNome
    },
    set: function (valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor
        } else {
            this._primeiroNome = ''
        }
    },
    enumerable: true,
    configurable: true
})

console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)

 */
class Estagiario {
    constructor(protected _primeironome: string = '') {
    }

    get getNome(): string {
        return this._primeironome;
    }

    set setNome(nome: string) {
        this._primeironome = nome;
    }
}

class EstagiarioDados extends Estagiario {
    constructor() {
        super()
    }

    set setNome(nome: string) {
        if (!nome) {
            throw new Error('Nome inválido');
        }
        this._primeironome = nome;
    }
}

const estagDados = new EstagiarioDados();
estagDados.setNome = 'Marcos';
console.log(estagDados.getNome);





