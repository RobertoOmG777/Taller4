
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9]{4,16}$/, // Letras, numeros
	nombre: /^[a-zA-ZÀ-ÿ\s]{2,20}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{2,20}$/, // Letras y espacios, pueden llevar acentos.
	fecha: /^(?: (?: 31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{12}$/
}

const campos = {
	usuario: false,
	nombre: false,
	apellido: false,
	fecha: false,
	telefono: false,
	password: false,
	correo: false


}
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
(() => {
	const departamentoID = document.getElementById('departamentos'),
		$fragment = document.createDocumentFragment();
	// departamentoID.length=0;
	// departamentoID.selectedIndex=0;


	fetch("https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json")
		.then((respuesta) => (respuesta.ok ? respuesta.json() : Promise.reject(respuesta)))
		.then(json => {


			json.forEach(i => {

				posicion = i.id;

				const opcion = `<option value ="` + posicion.toString() + `"onclick = agregarCiudad(this)>${i.departamento}</option>`;
				const selector = $('#departamentos');
				selector.append(opcion);

			});



			json.forEach(i => {
				id_opcion = document.getElementById(i.id);

			});



			//  for (let i = 0; i < json.length; i++) {
			// 	  const option=document.createElement("option");




			// 			 option.text=json[i].ciudades;
			// 			 option.value=json[i].id;



			// 	  ciudadesID.add(option);
			//   }




			// Response.json().then(function(data){
			// 	for (let i = 0; i < data.length; i++) {
			// 		const option=document.createElement("option");
			// 		option.text=data[i].ciudades;
			// 		$ciudades.add(option);

			// 	}
			// }

		})

		.catch((error) => {
			console.log(error)
			let mensaje = error.statusText || "Ha ocurrido un error";
			departamentoID.innerHTML = `$Error ${error.status}:${mensaje}`;

		})
})();
const url = "https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json"


var xhReq = new XMLHttpRequest();
xhReq.open("GET", url, false);
xhReq.send(null);
var var_json = JSON.parse(xhReq.responseText);






const array_ciudades = []
for (let i = 0; i < var_json.length; i++) {
	array_ciudades.push(var_json[i].ciudades)
}

function agregarCiudad(a) {
	$('#ciudades').empty(); 
	array_ciudades[a.value].forEach(i => {

		const opcion = `<option>${i}</option>`;
		const selector = $('#ciudades');
		selector.append(opcion);

	});






}





window.addEventListener('load', function () {

	fecha.addEventListener('change', function () {
		if (this.value) {
			// document.getElementById(`edad`).classList.add('fecha');
			edad.innerText = `La edad es: ${calcularEdad(this.value)} años`;
		}
	});

});


const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
			break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
			break;

		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
			break;
		case "fecha":
			validarCampo(expresiones.fecha, e.target, 'fecha');
			break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');

		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
			break;
		case "password2":
			validarPassword2();
			break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
			break;


	}
}

const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if (inputPassword1.value !== inputPassword2.value) {
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if (campos.usuario && campos.nombre && campos.apellido && campos.fecha && campos.telefono && campos.password && campos.correo) {
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 5000);

	}
});