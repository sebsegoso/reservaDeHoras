function validarFormulario() {
    //Extrayendo valores desde el HTML
    let rut = document.getElementById("Rut").value;
    let nombres = document.getElementById("Nombres").value;
    let apellidos = document.getElementById("Apellidos").value;
    let edad = document.getElementById("Edad").value;
    let email = document.getElementById("Email").value;
    let especialidad = document.getElementById("Especialidad").value;
    let hora = document.getElementById("Hora").value;
    //Fecha
    let fecha = document.getElementById("Fecha").value;
    let fechaArray = fecha.split("-"); /*Convirtiendo string a array */
    let fechaArrayReverse = fechaArray.reverse(); /*Invirtiendo array */
    let fechaDMA = fechaArrayReverse.join("-"); /*convirtiendo array a string nuevamente, con el formato DD-MM-AAAA */

    //Espresiones regulares
    const rutChilenoRegExp = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/gim;
    const soloLetrasRegExp = /^[A-Za-z\ ÁÉÍÓÚáéíóúÑñ'-\s]*$/;
    const emailRegExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const edadRegExp = /^[0-9]{1,3}$/;
    const fechaRegExp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

    //validaciones de expresiones regulares usando función validacionRegExp()
    const validarRut = validacionRegExp(rutChilenoRegExp, rut);
    const validarNombres = validacionRegExp(soloLetrasRegExp, nombres);
    const validarApellidos = validacionRegExp(soloLetrasRegExp, apellidos);
    const validarEdad = validacionRegExp(edadRegExp, edad);
    const validarEmail = validacionRegExp(emailRegExp, email);
    const validarFecha = validacionRegExp(fechaRegExp, fechaDMA);

    //Todos los campos están rellenados
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
        alert(
            "Para hacer efectiva la reserva de tu hora debes completar todos los campos solicitados");
        return false;
    }
    //Rut con formato correcto
    else if (!validarRut) {
        errorValidacionMensaje("RutMensaje", "El formato del rut no es correcto, debe incluir puntos y guión");
        return false;
    }
    //Nombres con formato correcto
    else if (!validarNombres) {
        borrarMensajesDeError();
        errorValidacionMensaje("NombresMensaje", "Los nombres sólo deben llevar letras");
        return false;
    }
    //Apellidos 
    else if (!validarApellidos) {
        borrarMensajesDeError();
        errorValidacionMensaje("ApellidosMensaje", "Los apellidos sólo deben llevar letras");
        return false;
    }
    //Edad
    else if (!validarEdad) {
        borrarMensajesDeError();
        errorValidacionMensaje("EdadMensaje", "La edad ingresada no es válida, sólo números");
        return false;
    }
    //email
    else if (!validarEmail) {
        borrarMensajesDeError();
        errorValidacionMensaje("EmailMensaje", "El formato del correo electrónico no es correcto");
        return false;
    }
    //fecha
    else if (!validarFecha) {
        borrarMensajesDeError();
        errorValidacionMensaje("FechaMensaje", "Esta fecha no es correcta");
        return false;
    }
    //Éxito
    else {
        borrarMensajesDeError();
        errorValidacionMensaje("MensajeExito", `Estimado(a) ${nombres} ${apellidos}, su hora para la especialidad ${especialidad} ha sido reservada para el
        día ${fechaDMA} a las ${hora}.<br /> Además, se le envió un mensaje a su correo ${email} con el detalle de su cita. <br /><br />
        Gracias por preferirnos.`);

        return false;
    }
};

function validacionRegExp(Regexp, textoAValidar) {
    return (Regexp.test(textoAValidar));
};

function borrarMensajesDeError(){
    errorValidacionMensaje("RutMensaje", "");
    errorValidacionMensaje("NombresMensaje", "");
    errorValidacionMensaje("ApellidosMensaje", "");
    errorValidacionMensaje("EdadMensaje", "");
    errorValidacionMensaje("EmailMensaje", "");
    errorValidacionMensaje("FechaMensaje", "");
};


function errorValidacionMensaje(id, mensaje) {
    document.getElementById(id).innerHTML = mensaje;
};