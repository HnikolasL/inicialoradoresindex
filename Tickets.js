const form = document.getElementById('form');
 form.addEventListener('submit', (e) =>{
    e.preventDefault();
 });

/*Variables*/
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const cantidad = document.getElementById("cantidadCompra");
const descuento = document.getElementById("select_descuento")
const botonResumen = document.getElementById("resumen");
const botonBorrar = document.getElementById("btn_borrar");

/* Variables regulares*/
const expRegText = /^\s+$/;
const expresionRegularEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function(){
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission

        var validation = Array.prototype.filter.call(forms, function(form){
            form.addEventListener('submit', function(event){
                if (form.checkValidity() === false){
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
        }, false);
  
    })();

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
        document.getElementById('total_a_pagar').innerHTML = "Total a pagar:$" ;
     }

     botonBorrar.addEventListener("click", borrar_total);