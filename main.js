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


//Calculando con 'Boton Calcular'

calcular.addEventListener('click', () => {

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

    }




});






//Funciones
