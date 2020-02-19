function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while ( isNaN(numero) || numero<0 || numero>10)
	{	//si no es un numero o numero es menor a 0 o numero es mayor a 10
		numero=prompt("Error, ingrese un número entre 0 y 10.");
	}
	document.getElementById('Numero').value=numero;

}//FIN DE LA FUNCIÓN