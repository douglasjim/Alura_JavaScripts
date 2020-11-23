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
//console.log(tuple)
//number = "Douglas"
//console.log(number)
enum Day{MONDAY = 2, TUESDAY} //criando uma variavel Day com dois valores, e a varaive que criamos é do tipo enums
let dia:Day = Day.MONDAY
//temos que usar outro tipo de aspas que seria o unico mas inclinado
console.log(`feliz dia sei la... ${dia}`)

function add(v1: number, v2: number, v3?:number): number{
    if (v3 == 10)
        return v3
    return v1 + v2
}

console.log(add(1,5,10))
var teste3: any = "opa"
var teste4: undefined

class Negociacao{
    data: number
    quantidade: number
    valor:number
    constructor(data: number,quantidade: number,valor:number){
        // if(data != 30){
        //     throw new Error("Data deve ser peenchida")
        // }
    this.data = data
    this.quantidade = quantidade
    this.valor = valor
    }
    
}
//ja aqui nas classes não é necssario colocar nome das varaiveis onde sera inseridos os valores
//porque na propria classe ja criamos as varaiveis que irá guardar os valores
//porem temos que seguir a ordem que foi das varaiveis que foram criadas neste caso o primeiro valor tem que ser data


const fx = new Negociacao(40,20,400)
console.log(fx.data)
const fk = new Negociacao(40,20,400)
console.log(fk.data)

