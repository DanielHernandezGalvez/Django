function calculo(event) {
    event.preventDefault(); // Esto es lo de la función en form para no resetear el formulario

    let cuotaInicial = document.forms["form"]["cuota"].value;
    let costoTotal = document.forms["form"]["valor-total"].value;
    let interes = document.forms["form"]["interes"].value;
    let plazoAnios = document.forms["form"]["plazo"].value;
    const MONTHS_ON_YEAR = 12;

    const hipoteca = {
        totalPrestamo: 0,
        totalIntereses: 0,
        cuotaMensual: 0
    };
    hipoteca.totalPrestamo = costoTotal - cuotaInicial;
    hipoteca.totalIntereses = hipoteca.totalPrestamo * interes / 100;
    hipoteca.cuotaMensual = (hipoteca.totalPrestamo + hipoteca.totalIntereses) / (plazoAnios * MONTHS_ON_YEAR);
    //alert(hipoteca.cuotaMensual)

    mostrarValores(hipoteca);
}

function mostrarValores(hipotecaFinal){
    //alert("si jaló")
    document.getElementById("monto-prestamo").innerHTML = hipotecaFinal.totalPrestamo;
    document.getElementById("mensualidad").innerHTML = hipotecaFinal.cuotaMensual;

}

function resetear(){
    document.forms["form"].reset();
}