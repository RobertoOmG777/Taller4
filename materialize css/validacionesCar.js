function mostrarSelector() {
    var si = document.getElementById("Sí");
    var mensaje = document.getElementById("salidaMensaje");
    mensaje.style.display = si.checked ? "block" : "none";
}