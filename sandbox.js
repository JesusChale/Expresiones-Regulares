function validacion() {
    var valorPlaca = document.getElementById("placaAuto").value;
    var valorNum = document.getElementById("numMiles").value;
    var result1 = false;
    var result2 = false;
    var varFinal = false;

    if (!(/^((A(0[1-9])|A([1-9][0-9]))|([B-Z][0-9]{2}))-([A-Z]{3})$/.test(valorPlaca))) {
        document.getElementById("errorPlaca").innerHTML = "No es una Placa valida";
        document.getElementById("errorPlaca").style.color = "red";
        result1 = false;
    } else {
        document.getElementById("errorPlaca").innerHTML = "Correcto";
        document.getElementById("errorPlaca").style.color = "green";
        result1 = true
    }
    if (!(/^([1-9]([0-9]{0,2}))(,([0-9]{3}))*(\.[0-9]{1,3})?$/.test(valorNum))) {
        document.getElementById("errorMiles").innerHTML = "No es un numero valido";
        document.getElementById("errorMiles").style.color = "red";
        result2 = false;
    } else {
        document.getElementById("errorMiles").innerHTML = "Correcto";
        document.getElementById("errorMiles").style.color = "green";
        result2 = true;
    }
    if (result1 && result2) {
        window.open("datos.html");
        varFinal = true;
    } else {

        varFinal = false;
    }
    return varFinal;
}