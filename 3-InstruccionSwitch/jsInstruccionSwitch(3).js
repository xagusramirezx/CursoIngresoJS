function mostrar()
{
//tomo la edad  
var mes;
mes = document.getElementById('mes').value;

	switch(mes)
	{
		case "Febrero":
			console.info(" Este mes no tiene más de 29 días.");
			break;
		default:
			console.info("Este mes tiene 30 o mas dias");
			break;
	}


}//FIN DE LA FUNCIÓN