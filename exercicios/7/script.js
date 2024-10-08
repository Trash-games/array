function fatorial(n) {
    if (n < 0) {
        return "o fatorial não está definido para números negativos"
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let resultado = 1;{
    for (let i = 2; i <=n; i++)
        resultado *= i;
}
return resultado
}
console.log(fatorial(5));
console.log(fatorial(0)); 
console.log(fatorial(-3)); 