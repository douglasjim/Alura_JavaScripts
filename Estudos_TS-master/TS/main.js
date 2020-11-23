"use strict";
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
console.log(tuple);
//# sourceMappingURL=main.js.map