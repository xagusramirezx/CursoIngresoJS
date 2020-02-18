function mostrar()
{
//tomo la edad  
var mes;

mes = document.getElementById('mes').value;

    switch(mes)
    {    
        case "Julio":
        case "Agosto":
            console.info("Abrigate que hace frio.");
            break;
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre": 
            console.info("Ya pasamos el frio, ahora calor!!!.");
            break;
        
        default:
            console.info("Falta para el invierno");
            break;
    }
}//FIN DE LA FUNCIÓN