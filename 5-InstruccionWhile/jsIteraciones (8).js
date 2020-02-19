function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	
	while(respuesta=="si")
	{
		numero = parseInt(prompt("Ingrese un numero por favor."));
		
		if(numero>0){
		acumulador = acumulador + numero;
		}
		else{
			acumuladorNeg = (acumuladorNeg + 1) * numero;
		}
		
		contador++;
		respuesta=prompt("Desea continuar? ");

		//console.info("este es acumulador"+ acumulador);
		//console.info("este es contador"+ contador);
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN