"use strict";
function echo(objeto) {
    return objeto;
}
/*
console.log(echo('João').length)
console.log(echo(27).length)
console.log(echo({nome: 'João', idade:27})) */
//Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
/* console.log(echoMelhorado('João').length)
console.log(echoMelhorado(27))
console.log(echoMelhorado({nome: 'João', idade:27})) */
//Generics disponivels na API (ARRAY)
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
//avaliacoes.push('5.5')
console.log(avaliacoes);
//Array
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
const chamarEcho = echoMelhorado;
//console.log(chamarEcho<string>('Alguma coisa'))
//class com Generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
/* console.log(new operacaoBinaria('Bom', 'Dia').executar())
console.log(new operacaoBinaria(3, 7).executar())
console.log(new operacaoBinaria(3, ' Opa').executar()) */
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
class Data2 {
    constructor(data) {
        this.data = data;
        this.data = data;
    }
}
//Minha implementação
class Fila {
    constructor() {
        this.valores = [];
    }
    add(item) {
        this.valores.push(item);
    }
    remove(indice) {
        this.valores.splice(indice, 1);
    }
    imprimir() {
        console.log(this.valores);
    }
}
const filaNumeros = new Fila();
filaNumeros.add(1);
filaNumeros.add(2);
filaNumeros.add(3);
filaNumeros.add(4);
filaNumeros.imprimir();
filaNumeros.remove(0);
filaNumeros.imprimir();
//Implementação do vídeo
class FilaCorrigida {
    constructor(...args) {
        this.valores = args;
    }
    entrar(item) {
        this.valores.push(item);
    }
    proximo(indice) {
        if (this.valores.length >= 0) {
            const primeiro = this.valores[0];
            this.valores.splice(indice, 1);
            return primeiro;
        }
        else {
            return 'vazio';
        }
    }
    imprimir() {
        console.log(this.valores);
    }
}
const filanumerosCorrigida = new FilaCorrigida();
filanumerosCorrigida.entrar(1);
filanumerosCorrigida.entrar(2);
filanumerosCorrigida.entrar(3);
filanumerosCorrigida.entrar(4);
filanumerosCorrigida.imprimir();
filanumerosCorrigida.proximo(0);
filanumerosCorrigida.imprimir();
const novaFila = new FilaCorrigida(1, 2, 3);
/*

class CalculaData extends Data2<Date, string>{

    constructor(date1: Date, date2: Date){
        super(date1)//NÃO ESQUECER, HERDOU COLOCA SUPER! Utiliza o que tem que utilizar

    }
    mostraDiferencas(date1: Date, date2: Date): string{
        const t1 = date1.getTime();
        const t2 = date2.getTime()
        const diferenca = Math.abs(t1 - t2)
        const dia = 1000 *60 * 60 *24
        return `${Math.ceil(diferenca / dia)}  dias`;
    }
}

let tempo1 = new Date(9, 1, 2023)
let tempo2 = new Date(9, 1, 2020)

let calcData = new CalculaData(tempo1, tempo2)

let result = calcData.mostraDiferencas(tempo1, tempo2)

console.log(result
 */
//Minha implementação
class Mapa {
    constructor() {
        this.itens = [];
    }
    colocar(chave, valor) {
        ///  this.itens.splice(chave, 0, valor)
    }
    imprimir() {
        console.log(this.itens);
    }
    limpar() {
        this.itens = [];
    }
}
const mapeamento = new Mapa();
mapeamento.colocar(1, 'Marcos');
mapeamento.colocar(2, 'Aline');
mapeamento.colocar(3, 'Pablo');
mapeamento.colocar(1, 'Luiz');
mapeamento.imprimir();
mapeamento.limpar();
mapeamento.imprimir();
class mapaVideo {
    constructor() {
        this.itens = new Array();
    }
    obter(chave) {
        const resultado = this.itens
            .filter(i => i.chave === chave);
        return resultado ? resultado[0] : null;
    }
    colocar(par) {
        const encontrado = this.obter(par.chave);
        if (encontrado) {
            encontrado.valor = par.valor;
        }
        else {
            this.itens.push(par);
        }
    }
    limpar() {
        this.itens = new Array();
    }
    imprimir() {
        console.log(this.itens);
    }
}
const mapaVideoResospota = new mapaVideo();
/* mapaVideoResospota.colocar(1, 'Marcos')
mapaVideoResospota.colocar(2, 'Aline')
mapaVideoResospota.colocar(3, 'Pablo')
mapaVideoResospota.colocar(1, 'Luiz')

mapaVideoResospota.imprimir()

mapaVideoResospota.limpar()
mapaVideoResospota.imprimir() */
//# sourceMappingURL=genericos.js.map