const inputValor = document.querySelector('#inputValor');
const unidadeOrigem = document.querySelector('#unidadeOrigem');
const resultadoArea = document.querySelector('#resultadoArea');

function converter() {
    const valor = parseFloat(inputValor.value);
    const multiplicador = parseFloat(unidadeOrigem.value);
    
    if (isNaN(valor) || valor < 0) {
        resultadoArea.innerHTML = '<p class="error">Digite um valor válido (número não-negativo)</p>';
        return;
    }

    if (valor === 0) {
        resultadoArea.innerHTML = '<p class="info">Digite um valor maior que 0</p>';
        return;
    }

    const bytes = valor * multiplicador;

    resultadoArea.innerHTML = `
        <div class="result-box">
            <h3>Resultado da Conversão:</h3>
            <ul class="conversion-list">
                <li><strong>Bytes:</strong> ${bytes.toFixed(2)} B</li>
                <li><strong>Kilobytes:</strong> ${(bytes / 1024).toFixed(2)} KB</li>
                <li><strong>Megabytes:</strong> ${(bytes / 1048576).toFixed(2)} MB</li>
                <li><strong>Gigabytes:</strong> ${(bytes / 1073742824).toFixed(2)} GB</li>
                <li><strong>Terabytes:</strong> ${(bytes / 1099511827776).toFixed(2)} TB</li>
            </ul>
        </div>
    `;
}

inputValor.addEventListener('input', converter);
unidadeOrigem.addEventListener('change', converter);