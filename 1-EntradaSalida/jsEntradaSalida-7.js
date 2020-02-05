/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var resultado;


	primerNumero=parseInt(document.getElementById('numeroUno').value);
	segundoNumero=parseInt(document.getElementById('numeroDos').value);
	
	resultado=primerNumero+segundoNumero;

	console.log("La suma de ambos numeros es: " + resultado);
	
}

function restar()
{
	
	var primerNumero;
	var segundoNumero;
	var resultado;


	primerNumero=parseInt(document.getElementById('numeroUno').value);
	segundoNumero=parseInt(document.getElementById('numeroDos').value);
	
	resultado=primerNumero-segundoNumero;

	console.log("La diferencia de ambos numeros es: " + resultado);
	
}

function multiplicar()
{ 
	
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero=parseInt(document.getElementById('numeroUno').value);
	segundoNumero=parseInt(document.getElementById('numeroDos').value);
	
	resultado=primerNumero*segundoNumero;

	console.log("El producto de ambos numeros es: " + resultado);
}

function dividir()
{
	
	var primerNumero;
	var segundoNumero;
	var resultado;


	primerNumero=parseInt(document.getElementById('numeroUno').value);
	segundoNumero=parseInt(document.getElementById('numeroDos').value);
	
	resultado=primerNumero/segundoNumero;

	console.log("La divicion de ambos numeros es: " + resultado);
	
}

