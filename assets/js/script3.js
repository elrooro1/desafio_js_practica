function sumar() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    const resultado = valor1 + valor2;
    document.getElementById('resultado').textContent = resultado;
}

function restar() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    const resultado = valor1 - valor2;
    // Si el resultado es negativo, mostrar 0
    document.getElementById('resultado').textContent = resultado < 0 ? 0 : resultado;
}