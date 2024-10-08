function ehPalidromo(str) {
    let palavra = str.replace(/\s+/g, '').toLowerCase();

    let palavraInvertida = palavra.split('').reverse().join('');

    return palavra == palavraInvertida;
}

console.log(ehPalidromo("arara"));
console.log(ehPalidromo("banana"));