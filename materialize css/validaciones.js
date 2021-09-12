document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener("submit", validarForm);

})

function validarForm(evento) {
    evento.preventDefault();
    nombreApellido = [document.getElementById("nombre").value, document.getElementById("apellidos").value];
    nombreApellido.forEach(element => {
        if (element == 0 || element > 25) {
            alert("No ha ingresa un nombre o apellido valido, recuerde que tiene que tener menos de 25 caracteres.");
        }
    });

    var direccion = document.getElementById("direccion").value;

    iniciales_validas = ["cll", "cra", "av", "anv", "trans"];
    var dirCon = 0;
    for (let i = 0; i < iniciales_validas.length; i++) {
        if (direccion.startsWith(iniciales_validas[i])) {
            dirCon = 1;
            break;
        }
    }
    if (dirCon == 0) {
        alert("Ha ingresado una inicial de direccion erronea, recuerde que deben ser de la siguiente manera: call, cra, av, anv ,trans");

    }

    var pass1 = document.getElementById("password").value;
    var pass2 = document.getElementById("passwordconfirm").value;
    //SI MANDO EL FORMULARIO Y NO COINCIDEN LAS CONTRASENIAS PASA LO SIGUIENTE: 
    if (pass1 != pass2) {
        alert("Las contraseñas no coinciden.");
    }

    // if(usuarioNombre.lenght == 0 ||  usuarioNombre.lenght > 25){
    //     alert("No se ha escrito nada en el usuario o supero el limite de 25 caracteres.")
    // }


}

function SoloLetrasNumeros(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    permitidos = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    especiales = [8, 13];
    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (permitidos.indexOf(tecla) == -1 && !tecla_especial) {
        alert("No puede ingresar esos caracteres en su documento.");
        return false;
    }
}


//VALIDACION DE CONTRASENIA 
var input_pss = document.getElementById("password");
var minuscula = document.getElementById("minuscula");
var mayuscula = document.getElementById("mayuscula");
var numero = document.getElementById("number");
var caracter = document.getElementById("caracter");
var largo = document.getElementById("largo");

//CUANDO ESTA EN EL CAMPO DE CONTRASENIA MUESTRA LA CAJA DE VALIDACION
input_pss.onfocus = function () {
    document.getElementById("mensaje").style.display = "block";
}

// CUANDO DEJA DE ESTAR EN EL CAMPO DE CONTRASENIA QUITA LA CAJA DE VALIDACION
input_pss.onblur = function () {
    document.getElementById("mensaje").style.display = "none";
}

// INICIANDO CUANDO SE PONE ENCIMA DEL CAMPO PASSWORD
input_pss.onkeyup = function () {
    // VALIDANDO MINUSCULAS
    var letra_minuscula = /[a-z]/g;
    if (input_pss.value.match(letra_minuscula)) {
        minuscula.classList.remove("invalid");
        minuscula.classList.add("valid");
    } else {
        minuscula.classList.remove("valid");
        minuscula.classList.add("invalid");
    }

    //Validate capital letters
    var letra_mayuscula = /[A-Z]/g;
    if (input_pss.value.match(letra_mayuscula)) {
        mayuscula.classList.remove("invalid");
        mayuscula.classList.add("valid");
    } else {
        mayuscula.classList.remove("valid");
        mayuscula.classList.add("invalid");
    }

    // Validate numbers
    var numeros = /[0-9]/g;
    if (input_pss.value.match(numeros)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }
    //validando caracteres especiales 
    // Validate numbers["#","%","/","&"
    var caracter_esp = /[#%/&]/g;
    if (input_pss.value.match(caracter_esp)) {
        caracter.classList.remove("invalid");
        caracter.classList.add("valid");
    } else {
        caracter.classList.remove("valid");
        caracter.classList.add("invalid");
    }


    // VALIDAR LARGO
    if (input_pss.value.length >= 10 && input_pss.value.length <= 20) {
        largo.classList.remove("invalid");
        largo.classList.add("valid");
    } else {
        largo.classList.remove("valid");
        largo.classList.add("invalid");
    }
}









