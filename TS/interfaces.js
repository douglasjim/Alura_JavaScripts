// import {Negociacao} from './main';
/// <reference path="main.ts" />
//com a linha de cima estamos importango codigo de outro arquivo ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = "hello";
//aqui estamos dizendo que essa funcao esta esperando valor do tipo string ess\
//e nao esta retonarando nada = void
function PrintName(person) {
    console.log(person.name);
}
var Pessoa = { name: "Douglas", idade: 50 };
var Pessoa1 = { name: 90, idade: 50 };
PrintName(Pessoa);
//PrintName(Pessoa1)
console.log(Pessoa1.idade);
//aqui quando for colocar os valores é necessario colocar tambem em quais variaveis eesses valores sera inseridos
var OPA = { salario: 3000, name: "Douglas" };
console.log(OPA.name);
console.log(OPA.salario);
var OPA2 = { idade: 40, have: true, name: "DOuglasjin" };
//aqui se agente criar varaivel a mais logo ele reclama dizendo que essa variavel a mais que criamos não foi criada na interface
//const OPA1: Person = {name:"DOuglasjin",salario:3500}
//aqui estamos colcoando um objeto dentro da funcao que esta aguardando um valor do tipo string
PrintName(OPA);
//alem disso mesmo se estiver fora da ordem a funcao irá buscar a varaivel que tenha um nome chamado name e ira executar o script
PrintName(OPA2);
//aqu estamos especificando que a varaivel chamada name é do tipo Employ que neste caso é um classe e existe uma varaivel do tipo name
PrintName({ name: "Mathias" });
var OPA3 = { name: "Mathias", salario: 4000 };
//ate podemos tentar printar porem da indefinido
console.log(OPA3.age);
OPA3.have = false;
var OPA4 = { name: "HAHA" };
OPA4.have = true;
OPA4.age;
var OPA5 = { name: "SHAUASH", salario: 5000, bonus: 90 };
//OPA5.bonus = 100 //esse aqui é um exemplo
console.log(OPA5.salario * OPA5.bonus);
//uando criamos uma classe e ela tem um construtor estamos dizendo que quando essa classe for criada é obrigado a ter os valores que inserimos no construtor
var fkk = new Negociacao(40, 20, 400);
console.log(fkk.data);
//criando uma classe que herda variaveise outros scrits que estiverem na classe de negociacao
var Empp = /** @class */ (function (_super) {
    __extends(Empp, _super);
    function Empp(data, quantidade, valor, kkk) {
        var _this = 
        //porem nao podemos esquecer de usar o super para pegar as variaveis que estamos pegando de outra classe
        _super.call(this, data, quantidade, valor) || this;
        _this.kkk = kkk;
        return _this;
    }
    return Empp;
}(Negociacao));
//aqui basicamente mesma coisa cria a classe e a diferenca que iremos adicionar um valor a mais por causa da nova classe
var show = new Empp(10, 40, 50, 90);
console.log(show);
//aqui estamos criando uma variavel definindo qual classe ela é porem sem colocar valor nenhum
var p1 = {};
p1.data = 5000;
console.log(p1.data);
