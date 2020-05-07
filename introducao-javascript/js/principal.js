
var titulo = document.querySelector(".titulo");
titulo.textContent = "Banana";

var paciente = document.querySelector("#primeiro_paciente");
var peso = paciente.querySelector(".info-peso"); //assim conseguimos mudar valores dentro de id e dentro da classe isso seria entrando nas tags
peso.textContent = 900;

var altura = paciente.querySelector(".info-altura")
var altura2 = altura.textContent;
var imc = 90 / (1.90 * 1.90);

var tdIMC = paciente.querySelector(".info-imc")
tdIMC.textContent = imc;

paciente.style.color = "red"; //mudando cor de valores usando javaScript !!!
paciente.style.backgroundColor = "yellow";


titulo.addEventListener("click",mostraMensagem); //quando usuario clica ano titulo acontece algo !!

function mostraMensagem() {
	alert("OPA CLICO !!");
}

// function obtemPaciente(form){
// 	var paciente2 = {
// 		nome: form.nome.value
// 		peso: form.peso.value
// 		//assim por diante
// 	}

// }

function validapaciente(paciente){
	if(peso < 2.0 && peso >= 0)
}

var ok = document.querySelector("#ok")
var ok2 = document.querySelector("#ok2")
var teste = ok.textContent
var teste2 = ok2.textContent
var teste2 = teste2

//var botaoAdicionar = document.querySelector("#buscar-pacientes");

// titulo.addEventListener("click", function()){
// 	console.log("Buscando pacientes...");
	
// 	var xhr = new XMLHttpRequest();
// 	xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");

// 	xhr.addEventListener("load",function(){
// 		console.log(xhr.responseText);
// 	});

// 	xhr.send();

// }

