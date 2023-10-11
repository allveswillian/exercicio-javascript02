function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

// Lista de números a serem verificados
const numeros = [1,2,3,5,8, 7, 4, 9, 6, 10];

// Loop para verificar cada número na lista
for (const numero of numeros) {
    const resultado = verificarParOuImpar(numero);
    console.log(`${numero} é ${resultado}`);
}