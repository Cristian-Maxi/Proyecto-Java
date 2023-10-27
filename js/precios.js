function Boton() {
    let cantidad_personas = document.getElementById("Cantidad").value;
    let numero_personas = document.getElementById("numero").value;
    console.log(cantidad_personas)
    console.log(numero_personas)

    let precio = 5000;

    if (cantidad_personas == 1 && numero_personas == 1) {
        document.getElementById("precio-final").innerHTML = `$${precio} Total`

    } else if (cantidad_personas == 2 && numero_personas == 2){
        precio *= cantidad_personas;
        let descuento = (precio * 10) / 100;
        let resultado = precio - descuento;
        document.getElementById("precio-final").innerHTML = `$${resultado} Total`

    } else if (cantidad_personas == 3 && numero_personas == 3){
        precio *= cantidad_personas;
        let descuento = (precio * 20) / 100;
        let resultado = precio - descuento;
        document.getElementById("precio-final").innerHTML = `$${resultado} Total`

    } else if (cantidad_personas >= 4 && numero_personas == 4){
        precio *= cantidad_personas;
        let descuento = (precio * 30) / 100;
        let resultado = precio - descuento;
        document.getElementById("precio-final").innerHTML = `$${resultado} Total`

    } else {
        alert("Cantidad de personas y Número de personas no coinciden")
    }

    document.getElementById("Cantidad").value = "";
    
}