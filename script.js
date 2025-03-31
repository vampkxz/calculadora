function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculateResult() {
    try {
        const result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = 'Erro';
    }
}

// Função para capturar as teclas pressionadas
document.addEventListener('keydown', function (event) {
    const key = event.key;

    if ('0123456789'.includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        clearDisplay();
    } else if ('+-*/.'.includes(key)) {
        appendToDisplay(key);
    }
});
