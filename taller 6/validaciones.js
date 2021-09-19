const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

const fecha = document.getElementById("fecha");
const edad = document.getElementById("edad");
function calcularEdad(fecha) {
	// const fechaNacimiento = document.getElementById('fecha');
	// const edad = document.getElementById('edad');
	const hoy = new Date();
	const anoActual = parseInt(hoy.getFullYear());
	const mesActual = parseInt(hoy.getMonth() + 1);
	const diaActual = parseInt(hoy.getDate());
	const anoNacimiento = parseInt(String(fecha).substring(0, 4));
	const mesNacimiento = parseInt(String(fecha).substring(5, 7));
	const diaNacimiento = parseInt(String(fecha).substring(8, 10));

	let edad = anoActual - anoNacimiento;
	if (mesActual < mesNacimiento) {
		edad--;
	} else if (mesActual === mesNacimiento) {
		if (diaActual < diaNacimiento) {
			edad--;
		}
	}
	return edad;

}
window.addEventListener('load', function () {

	fecha.addEventListener('change', function () {
		if (this.value) {
			// document.getElementById(`edad`).classList.add('fecha');
			edad.innerText = `Actualmente tienes ${calcularEdad(this.value)} años`;
		}
	});

});

function checkInputs() {
	// trim to remove the whitespaces
	const nombreValue = nombre.value.trim();
    const apellidoValue = apellido.value.trim();
    const fechaValue = fecha.value.trim();
	const usuarioValue = usuario.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

    if(nombreValue === '') {
		setErrorFor(nombre, 'No ha ingresado un nombre válido');
	} else {
		setSuccessFor(nombre);
	}

    if(apellidoValue === '') {
		setErrorFor(apellido, 'No ha ingresado un apellido válido');
	} else {
		setSuccessFor(apellido);
	}

	if(fechaValue === '') {
		setErrorFor(fecha, 'No ha ingresado una fecha válida');
	} else {
		setSuccessFor(fecha);
	}
	
	if(usuarioValue === '') {
		setErrorFor(usuario, 'No ha ingresado un nombre de usuario válido');
	} else if (!isUsuario(usuarioValue)) {
		setErrorFor(usuario, 'El usuario no puede contener caracteres especiales');
	} else {
		setSuccessFor(usuario);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'No ha ingresado un e-mail válido');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Recuerde ingresar un email válido');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'No ha ingresado una contraseña válida');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'No ha ingresado una contraseña válida');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Las contraseñas no coindicen');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isUsuario(usuario) {
	return /^(?=[a-zA-Z0-9[\]{}|\\]*$)(?!.*[<>'"/;`%])/.test(usuario);
}

function mostrarSelector() {
    var si = document.getElementById("Sí");
    var mensaje = document.getElementById("salidaMensaje");
    mensaje.style.display = si.checked ? "block" : "none";
}

var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}