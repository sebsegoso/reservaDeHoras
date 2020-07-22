function validarFormulario() {
    let rut = document.getElementById("Rut").value;
    let nombres = document.getElementById("Nombres").value;
    let apellidos = document.getElementById("Apellidos").value;
    let edad = document.getElementById("Edad").value;
    let email = document.getElementById("Email").value;
    let especialidad = document.getElementById("Especialidad").value;
    let fecha = document.getElementById("Fecha").value;
    let hora = document.getElementById("Hora").value;

    if (
        rut === "" ||
        nombres === "" ||
        apellidos === "" ||
        edad === "" ||
        email === "" ||
        especialidad === "" ||
        fecha === "" ||
        hora === ""
    ) {
        alert("Para hacer efectiva la reserva de tu hora debes llenar todos los campos solicitados");
        return false
    }
}