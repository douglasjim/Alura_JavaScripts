var mensagem = "Hello world";
console.log(mensagem);
var number;
var testee;
//const teste2: any
var qualquer;
var objeto;
//criando uma tag p la n codigo html
var p = document.createElement('p');
var ola = "Hello world, my first arquive";
p.textContent = ola;
document.body.appendChild(p);
var str3 = "opaaa " + ola;
console.log(str3);
// void quer dizer 
//criando uma funcao do tipo void que retorna nada
//criando uma variavel do tipo let dentro de um for ou while ou func ou class ele sera apenas la dentro 
//se a gente criar uma variavel do tipo var dentro dos lugares que citei ali em cima eles vao ser globais, logo conseguimos ter acesso a essa variavel em diferents lugares
function func() { }
var bool = false;
if (bool != null) {
    console.log("diferente");
}
var list = [1, 2, 3];
var list2 = ["teste", "Douglas", "amathias"];
var tuple;
//tuple = [1,true,2.0,"hello"] //aqui ja percebemos que da erro, porque estamos colocando valores de outro tipo dentro da variavel que criamos na liinha de cma
//console.log(tuple)
//number = "Douglas"
//console.log(number)
var Day;
(function (Day) {
    Day[Day["MONDAY"] = 2] = "MONDAY";
    Day[Day["TUESDAY"] = 3] = "TUESDAY";
})(Day || (Day = {})); //criando uma variavel Day com dois valores, e a varaive que criamos é do tipo enums
var dia = Day.MONDAY;
//temos que usar outro tipo de aspas que seria o unico mas inclinado
console.log("feliz dia sei la... " + dia);
function add(v1, v2, v3) {
    if (v3 == 10)
        return v3;
    return v1 + v2;
}
console.log(add(1, 5, 10));
var teste3 = "opa";
var teste4;
var Negociacao = /** @class */ (function () {
    function Negociacao(data, quantidade, valor) {
        // if(data != 30){
        //     throw new Error("Data deve ser peenchida")
        // }
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    return Negociacao;
}());
//ja aqui nas classes não é necssario colocar nome das varaiveis onde sera inseridos os valores
//porque na propria classe ja criamos as varaiveis que irá guardar os valores
//porem temos que seguir a ordem que foi das varaiveis que foram criadas neste caso o primeiro valor tem que ser data
var fx = new Negociacao(40, 20, 400);
console.log(fx.data);
var fk = new Negociacao(40, 20, 400);
console.log(fk.data);
