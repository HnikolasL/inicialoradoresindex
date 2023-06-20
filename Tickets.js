
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const botonResumen = document.getElementById("resumen");
const email = document.getElementById("email");
const botonBorrar = document.getElementById("btn_borrar");
const expresionRegularEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;

form.addEventListener('submit', (e) =>{
    e.preventDefault();
})
/* validacion para el nombre */
function validarNombre (){
    if (nombre.value.length<3 ){
        document.getElementById("error_name").innerHTML= "El nombre ingresado es inválido"        
    }
    else {
        document.getElementById("error_name").innerHTML= "El nombre ingresado es válido"
    }
}
botonResumen.addEventListener("click", validarNombre);

/* validacion para el apellido */
function validarApellido () {
    if (apellido.value.length < 3) {
        document.getElementById("error_last_name").innerHTML= "El apellido ingresado es inválido"
    } else {
        document.getElementById("error_last_name").innerHTML= "El apellido ingresado es válido"
    }
}
botonResumen.addEventListener("click", validarApellido);

/* validacion para el email */
function validate_email (){
    if (!expresionRegularEmail.test(email.value)){
        document.getElementById("error_email").innerHTML= "El correo ingresado es inválido"
    } else {
        document.getElementById("error_email").innerHTML= "El correo ingresado es válido"
    }
}

botonResumen.addEventListener("click", validate_email );

/* creo variables para calcular el total en cada tipo de entrada*/

let valorEntrada = 200;
let cantidadEntradas = document.getElementById("cantidadCompra");
let seleccionDescuento = document.getElementById("select_descuento");

/* creo la funcion que realiza el calculo para cada tipo de ticket*/

function calcularTotal() {
    switch (seleccionDescuento.value) {
    case "1":
        valorEntrada = 200 * 0.2 * cantidadEntradas.value;
        document.getElementById('total_a_pagar').innerHTML= "Total a pagar: $" + valorEntrada;
        break;
    case "2":
        valorEntrada = 200 * 0.5 * cantidadEntradas.value;
        document.getElementById('total_a_pagar').innerHTML= "Total a pagar: $" + valorEntrada;
        break;
    case "3":
        valorEntrada = 200 * 0.85 * cantidadEntradas.value;
        document.getElementById('total_a_pagar').innerHTML= "Total a pagar: $" + valorEntrada;
        break;
        
    case "4":
        valorEntrada = 200 * cantidadEntradas.value;
        document.getElementById('total_a_pagar').innerHTML= "Total a pagar: $" + valorEntrada;
        break;
        default:

            break;
        }

     }

     botonResumen.addEventListener("click", calcularTotal);

     function borrar_total(){
        document.getElementById('total_a_pagar').innerHTML = "Total a pagar: $" ;
     }

     botonBorrar.addEventListener("click", borrar_total);

    
