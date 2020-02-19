function mostrar()
{

var numero;
var contador=0;
var acumulador=0;

while(contador<5)
{
	numero=prompt("ingrese un numero");
	numero=parseInt(numero);
	acumulador=acumulador+numero;
	contador++;

	console.info("este es acumulador"+ acumulador);
	console.info("este es contador"+ contador);

}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN