// let button = document.querySelector('#button-movil');
// let mostrarMenu = document.querySelector('#navegacion-principal');

// button = addEventListener ('click', clickbutton);

// function clickbutton() {

//     let buttonPresionar = true;
    
//     if (buttonPresionar) {
//         mostrarMenu.style.display = 'block';
//         buttonPresionar = false;
//     } else {
//         mostrarMenu.style.display = 'none';
//     }
//     console.log(mostrarMenu)
// }

//Campo Datos Usuario

let nombre = document.querySelector('#nombre');
let apellido = document.querySelector('#apellido');
let email = document.querySelector('#email');


//Campo Pases

let paseDia = document.querySelector('#pase_dia');
let paseDosDias = document.querySelector('#pase_dosdias');
let paseCompleto = document.querySelector('#pase_completo');


//Botones y Divs

let calcular = document.querySelector('#calcular');
let errorDiv = document.querySelector('#error');
let botonRegistro = document.querySelector('#btnRegistro');
let listaProductos = document.querySelector('#lista-productos');
let sumaTotal = document.querySelector('#suma-total');
let regalo = document.querySelector('#regalo');


paseDia.addEventListener('blur', mostrarDias);
paseCompleto.addEventListener('blur', mostrarDias);
paseDosDias.addEventListener('blur', mostrarDias);

// nombre.addEventListener('blur', function() {
//     if(this.value == '') {
//         errorDiv.style.display = 'block';
//         errorDiv.innerHTML = "Este campo es Obligatorio";
//     }
// })

calcular.addEventListener('click', () => {

    //Calculando el total y resumen con 'Boton Calcular'

    if (regalo.value === '') {
        alert("Debes elegir un regalo");
        regalo.focus();
    } else {//Sumando todo con el boton calcular

        //Botones

        let boletosDia = parseInt(paseDia.value, 10);
        let boletos2Dias = parseInt(paseDosDias.value, 10);
        let boletoCompleto = parseInt(paseCompleto.value, 10);
        let totalPagar;

        //Extras

        let camisas = document.querySelector('#camisa_evento');
        let etiquetas = document.querySelector('#etiquetas');
        let cantCamisas = parseInt(camisas.value, 10);
        let cantEtiquetas = parseInt(etiquetas.value, 10);

        totalPagar = boletosDia * 30 + boletos2Dias * 45 + boletoCompleto * 50 + ((cantCamisas * 10) *7 /100) + cantEtiquetas * 2;

        console.log(totalPagar);
        //resumen

        let listadoProductos = [];

        if (boletosDia >= 1) {
            listadoProductos.push(boletosDia + " Pase por Día")
        }

        if (boletoCompleto >= 1) {
            listadoProductos.push(boletoCompleto + " Pases Completos")
        }

        if (boletos2Dias >= 1) {
            listadoProductos.push(boletos2Dias + " Pases por 2 Dias")
        }

        if (cantCamisas >= 1) {
            listadoProductos.push(cantCamisas + " Camisas")
        }

        if (cantEtiquetas >= 1) {
            listadoProductos.push(cantEtiquetas + " Etiquetas")
        }

        //Resumen

        listaProductos.innerHTML = '';
        
        for (let i = 0; i < listadoProductos.length; i++) {
            listaProductos.innerHTML += listadoProductos[i] + '<br/>';
        }

        //suma Total
        sumaTotal.innerHTML = '$' + totalPagar.toFixed(2);

    }


});






//Funciones

function mostrarDias(){
    let boletosDia = parseInt(paseDia.value, 10);
    let boletos2Dias = parseInt(paseDosDias.value, 10);
    let boletoCompleto = parseInt(paseCompleto.value, 10);

    let diasElegidos = [];

    if (boletosDia > 0) {
        diasElegidos.push('viernes');
    }
    if (boletos2Dias > 0) {
        diasElegidos.push('viernes','sabado');
    }
    if (boletoCompleto > 0) {
        diasElegidos.push('viernes','sabado','domingo');
    }

    // for (let i = 0; i < diasElegidos.length; i++) {
    //     document.getElementById(diasElegidos[i]).style.display = 'block';
    // }
};
