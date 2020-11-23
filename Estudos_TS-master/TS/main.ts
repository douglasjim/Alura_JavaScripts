var mensagem: string = "Hello world"
console.log(mensagem);

var number: number
let testee: boolean
//const teste2: any
var qualquer: any

var objeto: any

//criando uma tag p la n codigo html
var p = document.createElement('p')
var ola: string = "Hello world, my first arquive"
p.textContent = ola;
document.body.appendChild(p)


const str3: string = `opaaa ${ola}`
console.log(str3)

// void quer dizer 
//criando uma funcao do tipo void que retorna nada
//criando uma variavel do tipo let dentro de um for ou while ou func ou class ele sera apenas la dentro 
//se a gente criar uma variavel do tipo var dentro dos lugares que citei ali em cima eles vao ser globais, logo conseguimos ter acesso a essa variavel em diferents lugares


function func(): void{}

const bool:boolean = false
if(bool != null ){
    console.log("diferente")
}

let list: number[] = [1,2,3]
let list2: Array<string> = ["teste","Douglas","amathias"]

let tuple: [number, boolean]
//tuple = [1,true,2.0,"hello"] //aqui ja percebemos que da erro, porque estamos colocando valores de outro tipo dentro da variavel que criamos na liinha de cma
console.log(tuple)