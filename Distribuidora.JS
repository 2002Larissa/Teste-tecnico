// DEFININDO OS VALORES
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// CALCULANDO O VALOR MENSAL
const valorTotalMensal = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);

// CALCULANDO O PERCENTUAL DE CADA ESTADO
const percentuaisPorEstado = {};
for (let estado in faturamentoPorEstado) {
    percentuaisPorEstado[estado] = (faturamentoPorEstado[estado] / valorTotalMensal) * 100;
}

// RESULTADOS
for (let estado in percentuaisPorEstado) {
    console.log(`${estado}: ${percentuaisPorEstado[estado].toFixed(2)}%`);
}
