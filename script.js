//selecionamos todos los elementos del html que vayamos a usar o modificar
let diasElement = document.getElementById('dias');
let horasElement = document.getElementById('horas');
let minutosElement = document.getElementById('minutos');
let segundosElement = document.getElementById('segundos');
let h1Element = document.querySelector('h1');
let CuentaAtrasContainer = document.querySelector('.CuentaAtras');
//creamos las dos fechas que vamos a comparar en  el resto del js
let fechaActual= new Date();
const fechaObjetivo= new Date(2024, 3, 29, 20, 49);


let totalDias;
let totalHoras;
let totalMinutos;
let totalSegundos;

//Creamos el intervalo que usaremos para las funciones 
let intervaloCuentaAtras = setInterval(cuentaAtras, 1000);//cada segundo hara lo que le pongamos 
cuentaAtras();//nos aseguramos que carge la funcion
cambiarColorFondo();

//creamos la funcion cuenta tras
function cuentaAtras(){
fechaActual=new Date();
let diferenciaDeFechas=fechaObjetivo-fechaActual;
//comprobamos si la fehca objetivo ya se paso y si no , continuamos dentro de esta funcion

if(Math.floor(diferenciaDeFechas) < 0) {
    mostrarMensajePasado();
    return;//aqui saldriamos de la funcion CuentaAtras
}
//calculamos mediante estas cuentas los valores de los dias, minutos, etc que faltan para la finalizacion del contador
totalDias = Math.floor(diferenciaDeFechas / (1000 * 60 * 60 * 24));
totalHoras = Math.floor((diferenciaDeFechas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
totalMinutos = Math.floor((diferenciaDeFechas % (1000 * 60 * 60)) / (1000 * 60));
totalSegundos = Math.floor((diferenciaDeFechas % (1000 * 60)) / 1000);
//aqui se le dan los valores a los Elementos del html seleccionados al inicio del js
diasElement.innerHTML = totalDias;
horasElement.innerHTML = totalHoras;
minutosElement.innerHTML = totalMinutos;
segundosElement.innerHTML = totalSegundos;

}

//funcion para mostrar el mensaje cuando termmine la cuenta atras

function mostrarMensajePasado(){
    //CuentaAtrasContainer.style.display = 'none';//ponemos en none la cuenta atras si queremos que no aparezca
    h1Element.innerHTML='Ya debiste entregar la tarea¡'
    //paramos el intervalo para impedir que siga contando
    clearInterval(intervaloCuentaAtras);

}

function cambiarColorFondo(){

let colorDelFondo;

if (totalDias>30) {
    colorDelFondo='green'
}else if (totalDias>14) {
    colorDelFondo='yellow'
    h1Element.style.color='black'
} else {
    colorDelFondo='red'
    
}
//con esta linea le cambiaremos el color del fondo segun las fechas y la logica anterior
document.body.style.backgroundColor = colorDelFondo;
}