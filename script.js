const inputValor = document.querySelector('#inputValor');
const unidadeOrigem = document.querySelector('#unidadeOrigem');
const resultadoArea = document.querySelector('#resultadoArea');

// ================= CONSTANTES =================
const UNIDADES = {
    B: 1,
    KB: 1024,
    MB: 1024 ** 2,
    GB: 1024 ** 3,
    TB: 1024 ** 4
};

// ================= FORMATADOR =================
function format(valor) {
    return valor.toLocaleString('pt-BR', {
        maximumFractionDigits: 2
    });
}

// ================= RENDER =================
function renderResultado(bytes) {
    const resultados = {
        B: bytes,
        KB: bytes / UNIDADES.KB,
        MB: bytes / UNIDADES.MB,
        GB: bytes / UNIDADES.GB,
        TB: bytes / UNIDADES.TB
    };

    resultadoArea.innerHTML = `
        <div class="result-box">
            <h3>Resultado da conversão</h3>
            <ul class="conversion-list">
                ${Object.entries(resultados).map(([unidade, valor]) => `
                    <li>
                        <strong>${unidade}</strong>
                        <span>${format(valor)}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}

// ================= ERROS =================
function showError(message, type = 'error') {
    resultadoArea.innerHTML = `
        <p class="${type}">${message}</p>
    `;
}

// ================= CONVERSÃO =================
function converter() {
    const valor = parseFloat(inputValor.value);
    const multiplicador = parseFloat(unidadeOrigem.value);

    if (isNaN(valor) || valor < 0) {
        showError('Digite um valor válido (número não negativo)');
        return;
    }

    if (valor === 0) {
        showError('Digite um valor maior que 0', 'info');
        return;
    }

    const bytes = valor * multiplicador;

    renderResultado(bytes);
}

// ================= EVENTOS =================
inputValor.addEventListener('input', converter);
unidadeOrigem.addEventListener('change', converter);
