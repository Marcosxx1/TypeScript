
function logarClasse(construtor: Function) {
    console.log(construtor)
}

function decoratorVazio(_: Function) { }
function logarClasseSe(valor: boolean) {
    return valor ? logarClasse : decoratorVazio
}

function decorator(obj: { a: string, b?: number }) {
    return function (_: Function): void {
        console.log(obj.a + ' ' + obj.b)
    }
}

//@logarClasse
//@logarClasseSe(false)
//@decorator({a: 'Teste', b: 123})
//@logarObjeto

type Constructor = { new(...args: any[]): {} }

function logarObjeto(construtor: Constructor) {
    console.log('Carregando')
    return class extends construtor {
        constructor(...args: any[]) {
            console.log('Antes...')
            super(...args)
            console.log('Depois...')
        }
    }
}

@imprimivel
class Eletrodomestico {
    constructor() {
        console.log('novo')
    }
}



function imprimivel(constructor: Function) {
    constructor.prototype.imprimir = function () {
        console.log(this)
        console.log(1 + 3)
    }
}

//new Eletrodomestico().imprimir()





const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
}
@perfilAdmin
class MudancaAdministrativa {
    critico() {
        // console.log('Algo crítico foi alterado!')
    }
}

new MudancaAdministrativa().critico()

function perfilAdmin<T extends Constructor>(construtor: T) {
    return class extends construtor {
        constructor(...args: any[]) {
            super(...args)
            if (!usuarioLogado || !usuarioLogado.admin) {
                //  throw new Error('Sem permissão!')
            }
        }
    }
}


class contaCorrente {
    private saldo: number

    constructor(saldo: number) {
        this.saldo = saldo
    }
    @congelar
    sacar(valor: number) {
        if (valor <= this.saldo) {
            this.saldo -= valor
            return true
        } else {
            return false
        }
    }
    @congelar
    getSaldo() {
        return this.saldo
    }
}

const cc = new contaCorrente(10248.57)

/* cc.getSaldo = function () {
    return this['saldo'] + 7000

} */
console.log(cc.getSaldo())
 

function congelar(
    alvo: any,
    nomePropriedade: string,
    descriptor: PropertyDescriptor) {
    
    console.log(alvo)
    console.log(nomePropriedade)
    descriptor.writable = false
}