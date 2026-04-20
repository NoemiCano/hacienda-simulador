const salarioBrutoInput = document.querySelector("#salarioBruto");
const btnCalcular = document.querySelector("#btnCalcular");
const montoNeto = document.getElementById("montoNeto");
const porcentaje = document.getElementById("porcentaje");

btnCalcular.addEventListener("click", function () {

    let brutoAnual = Number(salarioBrutoInput.value);

    let retencion = 0;

    if (brutoAnual > 30000) {
        retencion = 20;
        document.getElementById("resultado").style.color = "red";
    } else{
        retencion = 15;
        document.getElementById("resultado").style.color = "green";
    }

    let netoAnual = brutoAnual - (brutoAnual * (retencion / 100));
    let netoMensual = netoAnual / 12;

    montoNeto.textContent = netoMensual.toFixed(2);
    porcentaje.textContent = retencion;


});
