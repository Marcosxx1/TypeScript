class Data {
    dia: number
    mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia;
        this.mes = dia;
        this.ano = ano;
    }
}

const aniverssario = new Data(2, 3, 1995)

aniverssario.dia = 4;
//console.log(aniverssario.dia)
//console.log(aniverssario);

const casamento = new Data();
casamento.ano = 2017;
//console.log(casamento);



// Declarando os atributos direto no construtor
class DataEsperta {

    constructor(protected dia: number = 1, protected mes: number = 1, protected ano: number = 1970) {

    }
}

const aniverssarioEsperto = new DataEsperta(2, 3, 1995)

aniverssario.dia = 4;
//console.log(aniverssario.dia)
//console.log(aniverssario);

const casamentoEsperto = new Data();
casamento.ano = 2017;
//console.log(casamento);


/* Desafio Produto
    - Atributos, nome, preco e desconto
    - criar construtor
    - Desconto é opcional
    - criar dois produtos passando dois e trÊs param */

class Produto {
    constructor(
        protected nome: string,
        protected preco: number,
        protected desconto: number = 0
    ) {
    } public resumo() {
        if (this.desconto > 0 && this.desconto < 1) {
            this.preco *= this.desconto;
            console.log('nome: ' + this.nome + '\npreco: ' + this.preco)
        }
        else {
            console.log('nome: ' + this.nome + '\npreco: ' + this.preco);
        }

    }
}

const prod1 = new Produto('Prod1', 10, 0.5);
const prod2 = new Produto('Prod2', 10);

//console.log(prod1.valorDesconto(0.5));
prod1.resumo();
prod2.resumo();


//Modificadores de acesso

class Carro {
    protected velocidadeAtual: number = 0;

    constructor(public marca: string, public modelo: string,
        protected velocidadeMaxima: number = 200) {
    }

    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0 &&
            novaVelocidade <= this.velocidadeMaxima

        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }

    public acelerar(): number {
        return this.alterarVelocidade(5);
    }

    public frear():number{
        return this.alterarVelocidade(-3);
    }
}

const carro1     = new Carro('Ford', 'Ka', 185);
const carro2 = new Carro('Ford', 'Ka', 185);


//HERANÇA
class Ferrari extends Carro {

    constructor(modelo: string, velocidadeMaxima: number){
        super('Ferrari', modelo, velocidadeMaxima);
    }
      acelerar(): number {
        return this.alterarVelocidade(20);
    }

      frear():number{
        return this.alterarVelocidade(-15);
    }
    
}

/* public visivel para todos e transmitido por herança
   private visivel apenas dentro  da classe e não transmitido por herança
   private visivel para quem herda e visivel apenas dentro da classe */
const f4 = new Ferrari( 'F40', 324);
console.log(`${f4.marca}, ${f4.modelo}`);
console.log(f4.acelerar);
console.log(f4.frear);


//Getters & Setters

class Pessoa {
    private _idade: number = 0;

    get getIdade(): number {
        return this._idade
    }

    set setIdade(valor: number){
        if(valor > 0 && valor <= 120){
            this._idade = valor;
        }
    }

}


const pessoa1 = new Pessoa();
pessoa1.setIdade =30;
console.log(pessoa1.getIdade);

 /* atributos e métodos estáticos || Podemos utilizar os métodos estáticos mesmo sem instanciar
    estatic - pertence a classe */// o objeto

class Matematica {
    static PI: number =3.14159

    static areaCir(raio: number): number{
        return this.PI * raio * raio
    }
}

/* const n1 = new Matematica();
n1.PI = 4.2
console.log(n1.areaCir(4)); */

//console.log(new Matematica().areaCir(4));

console.log(Matematica.areaCir(4));

 
//Classes abstratas
/* Seve para reusarmos código, não pode ser instanciada */

abstract class Calculo {
    protected resultado: number = 0;

    abstract executar(...numeros: number[]): void

      getResultado(): number {
        return this.resultado;
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((accomulator, curValue) => accomulator + curValue);
    }
}

class Multiplicacao extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((accomulator, curValue) => accomulator * curValue)
    }
}

let c1 = new Soma();
c1.executar(2,3,4,5);
console.log(c1.getResultado());


c1 = new Multiplicacao();
c1.executar(2,3,4,5);
console.log(c1.getResultado());


//singleton

class Unico {
    private static instance: Unico = new Unico

    private constructor() {}

    static getInstance():Unico {
        return Unico.instance;
    }

    agora(){
        return new Date
    }
}

console.log(Unico.getInstance().agora);

//Somente Leitura
class Aviao {
    public readonly modelo: string
    
    constructor(modelo: string, public readonly prefixo: string){
        this.modelo = modelo
    }
}

const turboHelice = new Aviao ('TU-123', 'PT-ABC')
/* turboHelice.modelo = 'DE-9' Não pode, pois a definição das propriedades estao readonly
turboHelice.prefixo = 'PT-34F' */
console.log(turboHelice);