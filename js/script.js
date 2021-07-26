$(document).ready(function(){

//Cargo los datos del formulario, por si el usuario cambia la ventana de tamaño
    cargarDatos();


//Animación para el teléfono
$("#animacion_telefono").delay(2500).fadeOut(1000);

//------------------------------------------------------------------------------------------------

//Función para ocultar el menú al hacer scroll
let ubi_principal = window.pageYOffset;

window.onscroll = function(){
    let desplazamiento = window.pageYOffset;
    if (ubi_principal >= desplazamiento) {
        document.getElementById("navbar").style.top = "0";
    }else{
        document.getElementById("navbar").style.top = "-100px";
    }
    ubi_principal = desplazamiento;
}


//Función aumento letra menú
$(".elementos_menu").each(function(){
    $(this).hover(function(){
        $(this).css("font-size","2em");
        $(this).css("opacity","0.5");
    },function(){
        $(this).css("font-size","1.4em");
        $(this).css("opacity","1");
    });
});

//Función para la escritura animada de typed-script
const typed = new Typed(".typed",{
    strings: ["<i class='letras_animadas'>Java</i>",
            "<i class='letras_animadas'>SQL</i>",
            "<i class='letras_animadas'>Unity</i>",
            "<i class='letras_animadas'>JDBC</i>",
            "<i class='letras_animadas'>HTML</i>",
            "<i class='letras_animadas'>Javascript</i>",
            "<i class='letras_animadas'>CSS</i>",
            "<i class='letras_animadas'>Javascript</i>",
            "<i class='letras_animadas'>PL/SQL</i>",
            "<i class='letras_animadas'>C#</i>",
            "<i class='letras_animadas'>SQLite</i>",
            "<i class='letras_animadas'>Maven</i>",
            "<i class='letras_animadas'>Hibernate</i>",
            "<i class='letras_animadas'>Kotlin</i>",
            "<i class='letras_animadas'>MySQL</i>",
            "<i class='letras_animadas'>Visual Studio</i>",
            "<i class='letras_animadas'>IntelliJ IDEA</i>",
            "<i class='letras_animadas'>Python</i>",
            "<i class='letras_animadas'>Oracle SQL</i>",
            "<i class='letras_animadas'>XML</i>",
            "<i class='letras_animadas'>Scrum</i>"],
    
   //Ahora las demás propiedades
    typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	//shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato      
});    


//Función para el video de la batería
$(window).scroll(function() {

    let cantidad_pixel = $(window).scrollTop();

    var altura_body = document.documentElement.scrollHeight - window.innerHeight;
    //console.log({altura_body});

    bateria.currentTime = cantidad_pixel / (altura_body/80);
})

//Para que los section ocupen toda la pantalla
var height = $(window).height();
var width = $(window).width();

$("section").height(height).width(width);
$("hgroup").height(height).width(width);




//EVENTOS PARA CONTROLAR EL FORMULARIO
//------------------------------------------------------------------------------
//Al enviar el formulario
$("#formulario").submit(function(){
     //Expresión para validar correos
    
     let regexEmail =/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

     var correo = $("#correo").val();
    if(regexEmail.test(correo)){
    }else{
        $("#correo").addClass("placeholder_error");
        alert("El correo no es válido. Vuelve a intentarlo: "+correo+regexEmail.test(correo));
        $("#correo").val("");
        $(this).focus();
        return false;
    }//Fin de validación de correo
});



//Cuando se cierra la página se borran los datos del localStorage
window.onbeforeunload=borrarDatos();


});


var ancho = $(window).width();
$(window).resize(function() {
    guardarDatos();
    window.location.reload();
});


//Guardar los datos del formulario en el localStorage
function guardarDatos(){
    localStorage.setItem("nombre_local",$("#nombre").val());
    localStorage.setItem("correo_local",$("#correo").val());
    localStorage.setItem("quien_contacta_local",$("#quien_contacta").val());
    localStorage.setItem("comentario_local",$("#comentario").val());
}

//Cargar los datos del formulario del localStorage
function cargarDatos(){
    $("#nombre").val(localStorage.getItem("nombre_local"));
    $("#correo").val(localStorage.getItem("correo_local"));
    $("#quien_contacta").val(localStorage.getItem("quien_contacta_local"));
    $("#comentario").val(localStorage.getItem("comentario_local"));
}

//Borrar los datos del formulario localStorage
function borrarDatos(){
    localStorage.removeItem("nombre_local");
    localStorage.removeItem("correo_local");
    localStorage.removeItem("quien_contacta_local");
    localStorage.removeItem("comentario_local");
}

