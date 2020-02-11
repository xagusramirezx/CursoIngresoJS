function mostrar()
{
	var edad;

	edad=parseInt(document.getElementById('edad').value);

	if(edad>17)
	{
		alert("MayoR");
	} 
	else
	{
		if(edad>13)
		{
			alert("Adolescente");
		}
		else
		{
			alert("menor");
		}
	}

/*  	POCO EFICIENTE, CONSUME MUCHO PROS.
	if(edad<18&&edad>12){
		alert("Adolescente");
	} 
	else if(edad<12)
	{
		alert("menor");
	}
	else
	{
		alert("mayor");
	}*/
}//FIN DE LA FUNCIÓN