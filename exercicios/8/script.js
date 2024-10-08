function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(numeroAleatorio(2, 5));
console.log(numeroAleatorio(1, 1000))