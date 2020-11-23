// import {Negociacao} from './main';
/// <reference path="main.ts" />
//com a linha de cima estamos importango codigo de outro arquivo ts

var a: string = "hello"

//aqui estamos dizendo que essa funcao esta esperando valor do tipo string ess\
//e nao esta retonarando nada = void
function PrintName(person: {name:string} ): void{
    console.log(person.name)
}

const Pessoa = {name:"Douglas",idade:50}
const Pessoa1 = {name:90,idade:50}

PrintName(Pessoa)
//PrintName(Pessoa1)
console.log(Pessoa1.idade)

//Quando criamos interfaces, e nela tem varaiveis quando criamos um objeto e inserimos os valores somos 
//obrigados a colocar todos os valores que as interfaces espera
//as vezes nao queremos colocar todos os valores, por isso temos que criar variavel do tipo opcional
//e para diexar a variavel opcional dentro da itnerface temos que adiconar o acento?
interface Person{
    name: string;
    age?: number
}
//aqui essa interface Employ esta herdadndo as variaveis da interface Person
interface Employ extends Person{
    salario:number;
}

//aqui quando for colocar os valores é necessario colocar tambem em quais variaveis eesses valores sera inseridos
const OPA: Employ = {salario:3000,name:"Douglas"}
console.log(OPA.name)
console.log(OPA.salario)

var OPA2 = {idade: 40,have: true,name: "DOuglasjin"}

//aqui se agente criar varaivel a mais logo ele reclama dizendo que essa variavel a mais que criamos não foi criada na interface
//const OPA1: Person = {name:"DOuglasjin",salario:3500}

//aqui estamos colcoando um objeto dentro da funcao que esta aguardando um valor do tipo string

PrintName(OPA)
//alem disso mesmo se estiver fora da ordem a funcao irá buscar a varaivel que tenha um nome chamado name e ira executar o script

PrintName(OPA2)

//aqu estamos especificando que a varaivel chamada name é do tipo Employ que neste caso é um classe e existe uma varaivel do tipo name
PrintName({name:"Mathias"} as Employ)

let OPA3: Employ = {name:"Mathias",salario: 4000}
//ate podemos tentar printar porem da indefinido
console.log(OPA3.age)

//aqui estamos atualziando a interface Person inserindo uma varaivel a mais opcional
interface Person{
    have?: boolean
}
OPA3.have = false
var OPA4: Person = {name: "HAHA"}
OPA4.have = true
OPA4.age

//quando criamos um interface com varaivel do tipo readonly seria uma varaivel do tipo constante
//nao podemos alterar esse valor de maneira nenhuma apos ter colcoado um valor inicial
interface Manager extends Employ{
    readonly bonus: number
}

var OPA5: Manager = {name: "SHAUASH",salario:5000,bonus: 90}
//OPA5.bonus = 100 //esse aqui é um exemplo
console.log(OPA5.salario * OPA5.bonus)

//uando criamos uma classe e ela tem um construtor estamos dizendo que quando essa classe for criada é obrigado a ter os valores que inserimos no construtor

const fkk = new Negociacao(40,20,400)
console.log(fkk.data)

//criando uma classe que herda variaveise outros scrits que estiverem na classe de negociacao
class Empp extends Negociacao{
    kkk: number;
    constructor(data: number,quantidade:number,valor:number,kkk:number){
        //porem nao podemos esquecer de usar o super para pegar as variaveis que estamos pegando de outra classe
        super(data,quantidade,valor)
        this.kkk = kkk
    }
}

//aqui basicamente mesma coisa cria a classe e a diferenca que iremos adicionar um valor a mais por causa da nova classe
var show = new Empp(10,40,50,90)
console.log(show)

//aqui estamos criando uma variavel definindo qual classe ela é porem sem colocar valor nenhum
var p1 = <Empp>{};
p1.data = 5000
console.log(p1.data)