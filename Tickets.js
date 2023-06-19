const Nombre = document.getElementById("nombre");
const Apellido = document.getElementById("apellido");
const btn_resumen = document.getElementById("btn-resumen");
const Email = document.getElementById("email")
const ExpresionRegularEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;

form.addEventListener('submit', (e) =>{
    e.preventDefault();
})

function validate_name (){
    if (Nombre.value.length < 3 ){
        document.getElementById("error_name").innerHTML = "El nombre ingresado es inválido"        
    }
    else {
        document.getElementById("error_name").innerHTML = "El nombre ingresado es válido"
    }
}

btn_resumen.addEventListener("click", validate_name);

function validate_last_name () {
    if (Apellido.value.length < 2) {
        document.getElementById("error_last_name").innerHTML = "El apellido ingresado es inválido"
    } else {
        document.getElementById("error_last_name").innerHTML = "El apellido ingresado es válido"
    }
}
btn_resumen.addEventListener("click", validate_last_name);

function validate_email (){
    if (!ExpresionRegularEmail.test(Email.value)){
        document.getElementById("error_email").innerHTML = "El correo ingresado es inválido"
    } else {
        document.getElementById("error_email").innerHTML = "El correo ingresado es válido"
    }
}

let valorEntrada = 200;
let cantidadEntradas = document.getElementById("cantidad_compra");
let seleccionDescuento = document.getElementById("select_descuento");

function calcular_total() {
    switch (seleccionDescuento.value) {
    case "1":
        valorEntrada = valorEntrada * 0.2 * cantidadEntradas.value;
        document.getElementById('total_a_pagar').innerHTML = "Total a pagar: $" + valorEntrada;
        break;
    case "2":
        valorEntrada = 200 * 0.5 * cantidadEntradas.value;
        document.getElementById('total_a_pagar').innerHTML = "Total a pagar: $" + valorEntrada;
        break;
    case "3":
        valorEntrada = 200 * 0.85 * cantidadEntradas.value;
        document.getElementById('total_a_pagar').innerHTML = "Total a pagar: $" + valorEntrada;
        break;
    case "4":
        valorEntrada = 200 * cantidadEntradas.value;
        document.getElementById('total_a_pagar').innerHTML = "Total a pagar: $" + valorEntrada;
        break;
        default:
            break;

     }

     btn_resumen.addEventListener("click", calcular_total);

     function borrar_total(){
        document.getElementById('total_a_pagar').innerHTML = "Total a pagar: $" ;
     }

     btn_borrar.addEventListener("click", borrar_total);

    
}