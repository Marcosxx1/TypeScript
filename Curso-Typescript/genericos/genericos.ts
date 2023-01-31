function echo(objeto: any) {
    return objeto
}
/* 
console.log(echo('João').length)
console.log(echo(27).length)
console.log(echo({nome: 'João', idade:27})) */

//Usando Generics

function echoMelhorado<T>(objeto: T): T {
    return objeto
}

/* console.log(echoMelhorado('João').length)
console.log(echoMelhorado(27))
console.log(echoMelhorado({nome: 'João', idade:27})) */


//Generics disponivels na API (ARRAY)

const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
//avaliacoes.push('5.5')
console.log(avaliacoes)


//Array
function imprimir<T>(args: T[]) {
    args.forEach(elemento => console.log(elemento))
}

//imprimir<TIPO>([vetor])
/* imprimir([1, 2, 3,]);
imprimir<number>([1, 2, 3,]);
imprimir<string>(['Marcos', 'Aline', 'Luiz']);
imprimir<{ nome: string, idade: number }>([
    { nome: 'Fulano', idade: 23 },
    { nome: 'Joquebebe', idade: 44 },
    { nome: 'Pedro', idade: 36 },
])
 */
type Aluno = {
    nome: string,
    idade: number
}

/* imprimir<Aluno>([
    { nome: 'Marcos', idade: 50 },
    { nome: 'Luiz', idade: 33 },
    { nome: 'Aline', idade: 42 },
    { nome: 'Pablo', idade: 19 }]) */

//Tipo genérico
type Echo = <T> (data: T) => T;

const chamarEcho: Echo = echoMelhorado

//console.log(chamarEcho<string>('Alguma coisa'))

//class com Generics
abstract class OperacaoBinaria<T, R> {
    constructor(
        public operando1: T,
        public operando2: T
    ) { }

    abstract executar(): R
}

/* console.log(new operacaoBinaria('Bom', 'Dia').executar())
console.log(new operacaoBinaria(3, 7).executar())
console.log(new operacaoBinaria(3, ' Opa').executar()) */


class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.operando1 + this.operando2
    }
}

console.log(new SomaBinaria(3, 4).executar())


abstract class Data2<T, U> {

    constructor(protected data: T) {
        this.data = data
    }
    abstract mostraDiferencas(date1: T, date2: T): U
}

//Minha implementação
class Fila<T>{
    private valores: T[] = []

    add(item: T): void {
        this.valores.push(item)
    }

    remove(indice: number): void {
        this.valores.splice(indice, 1);
    }

    imprimir(): void {
        console.log(this.valores)
    }
}

const filaNumeros = new Fila<number>()

filaNumeros.add(1)
filaNumeros.add(2)
filaNumeros.add(3)
filaNumeros.add(4)
filaNumeros.imprimir();
filaNumeros.remove(0);
filaNumeros.imprimir()


//Implementação do vídeo

class FilaCorrigida<T extends number | 'vazio'>{
    private valores: Array<T>

    constructor(...args: T[]) {
        this.valores = args
    }

    entrar(item: T): void {
        this.valores.push(item)
    }

    proximo(indice: number) {
        if (this.valores.length >= 0) {

            const primeiro = this.valores[0]
            this.valores.splice(indice, 1)
            return primeiro
        } else {
            return 'vazio'
        }
    }

    imprimir(): void {
        console.log(this.valores)
    }
}

const filanumerosCorrigida = new FilaCorrigida<number>()

filanumerosCorrigida.entrar(1)
filanumerosCorrigida.entrar(2)
filanumerosCorrigida.entrar(3)
filanumerosCorrigida.entrar(4)
filanumerosCorrigida.imprimir();
filanumerosCorrigida.proximo(0);
filanumerosCorrigida.imprimir()


const novaFila = new FilaCorrigida<number>(1, 2, 3);















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
class Mapa<T extends number, U> {
    itens: Array<{ chave: T, valor: U }> = []

    colocar(chave: T, valor: U) {
      ///  this.itens.splice(chave, 0, valor)
    }

    imprimir(): void {
        console.log(this.itens)
    }

    limpar(): void {
        this.itens = []
    }
}

const mapeamento = new Mapa()
mapeamento.colocar(1, 'Marcos')
mapeamento.colocar(2, 'Aline')
mapeamento.colocar(3, 'Pablo')
mapeamento.colocar(1, 'Luiz')

mapeamento.imprimir()

mapeamento.limpar()
mapeamento.imprimir()

//implementação do vídeo

type Par<C, V> = { chave: C, valor: V }

class mapaVideo<C, V>{
    itens: Array<Par<C, V>> = new Array<Par<C, V>>()

    obter(chave: C): Par<C, V> | null {
        const resultado = this.itens
            .filter(i => i.chave === chave)
        return resultado ? resultado[0]: null
    }

    colocar(par: Par<C, V>) {
        const encontrado = this.obter(par.chave)
        if(encontrado){
            encontrado.valor = par.valor
        } else {
            this.itens.push(par)
        }
    }

    limpar(){
        this.itens = new Array<Par<C, V>>()
    }
    imprimir(){
        console.log(this.itens)
    }
}
 const mapaVideoResospota = new mapaVideo()
/* mapaVideoResospota.colocar(1, 'Marcos')
mapaVideoResospota.colocar(2, 'Aline')
mapaVideoResospota.colocar(3, 'Pablo')
mapaVideoResospota.colocar(1, 'Luiz')

mapaVideoResospota.imprimir()

mapaVideoResospota.limpar()
mapaVideoResospota.imprimir() */
