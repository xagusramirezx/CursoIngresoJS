function mostrar()
{
//tomo la edad  
var mes;

mes= document.getElementById('mes').value;

switch(mes)
{
    case "Enero":
        console.info("que comiences bien el año!!!.");
        break;
    case "Marzo":
        console.info("a clases!!!.");
        break;
    case "Julio":
        console.info("se vienen las vacaciones!!!..");
        break;
    case "Diciembre":
        console.info("Felices fiesta!!!.");
        break;
    

}

}/*FIN DE LA FUNCIÓN
al seleccionar un mes informar. 
si es Enero: "que comiences bien el año!!!." 
si es Marzo: "a clases!!!." 
si es Julio: "se vienen las vacaciones!!!." 
si es Diciembre: "Felices fiesta!!!."*/
