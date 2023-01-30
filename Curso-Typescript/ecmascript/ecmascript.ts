// let & const
var seraQuePode = '?'
console.log(seraQuePode)

let estaFrio = true
if(estaFrio) {
    let acao = 'Colocar o casaco!'
    console.log(acao)
}

const cpf: string = '123.456.000-99'
// cpf = '789.101.132-78'
console.log(cpf)

/* var escopo global
   let tem escopo de bloco, let pode ser atualizado, mas não declarado novamente.
*/


 function somar(n1: number, n2: number): number {
    return n1+n2;
}
console.log(somar(2, 2));

//Arrow Function
const subtrair = (n1: number, n2: number) => n1 - n2;

const saudacao = () => console.log('Olá');
saudacao();

const falarCom = (pessoa: string)=> console.log('Ola' + pessoa);
falarCom('Hermes');

function normalComThis(){
  // console.log(this);
}

const normalcomThisEspecial = normalComThis.bind(3);
normalComThis();

/* function contagemRegressiva(inicio: number =5,
    fim: number = inicio -5): void {
    console.log(inicio)
    while(inicio > 0) {
        inicio--;
        console.log(inicio);
    }
    console.log('Fim');
}

contagemRegressiva();
contagemRegressiva(5); */

//Spread operator (...variavel: tipo variavel)
const numbers = [1, 10, 99, -5];

console.log(Math.max(...numbers));

const turmaA: string[] = ['João', 'Maria', 'Fernanda'];
const turmaB: string[] = ['Fernando', 'Miguel',...turmaA ,'Lorna'];

console.log(turmaB);

//rest com vetor
function retornaArray(...args:number[]): number[]{
    return args;
}

const numeros = retornaArray(1,2, 3, 5,22, -3);
console.log(numeros); 

//rest e spread (tupla)

const tupla: [number, string, boolean] = [1, 'label', false];

function tuplaParam1( a: number, b: string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c}`)
}

tuplaParam1(...tupla);


//Operador Destructuring (array)
const carateristicas = ['Motor Zetec 1.8', 2020];
/* const motor = carateristicas[0];
const ano = carateristicas[1]; */

const [motor, ano] = carateristicas;
console.log(motor);
console.log(ano);


//Destructuring (objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        w: 'importado'
    }
}
/* const nomeItem = item.nome;
const preco = item.preco; */
const {nome: n, preco, caracteristicas: {w}} = item;
console.log(n);
console.log(preco);
console.log(w)








