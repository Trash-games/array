function contarVogais(str) {
    let contador = 0;
    const vogais = 'aeiouAEIOU';

    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
            contador++;
        }
    }
    return contador;
}

console.log(contarVogais("Ola, mundo")); // 4
console.log(contarVogais("JavaScript e divertido")); // 8