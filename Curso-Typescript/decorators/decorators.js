"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logarClasse(construtor) {
    console.log(construtor);
}
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(obj) {
    return function (_) {
        console.log(obj.a + ' ' + obj.b);
    };
}
function logarObjeto(construtor) {
    console.log('Carregando');
    return class extends construtor {
        constructor(...args) {
            console.log('Antes...');
            super(...args);
            console.log('Depois...');
        }
    };
}
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log('novo');
    }
};
Eletrodomestico = __decorate([
    imprimivel
], Eletrodomestico);
function imprimivel(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
        console.log(1 + 3);
    };
}
//new Eletrodomestico().imprimir()
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        // console.log('Algo crítico foi alterado!')
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
new MudancaAdministrativa().critico();
function perfilAdmin(construtor) {
    return class extends construtor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                //  throw new Error('Sem permissão!')
            }
        }
    };
}
class contaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    congelar
], contaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], contaCorrente.prototype, "getSaldo", null);
const cc = new contaCorrente(10248.57);
/* cc.getSaldo = function () {
    return this['saldo'] + 7000

} */
console.log(cc.getSaldo());
function congelar(alvo, nomePropriedade, descriptor) {
    console.log(alvo);
    console.log(nomePropriedade);
    descriptor.writable = false;
}
//# sourceMappingURL=decorators.js.map