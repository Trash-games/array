// let fruta = ["Abacate", "Melão", "Kiwi", "Maçã"];

// console.log(fruta);
// fruta.push("Manga");
// console.log(fruta[fruta.length - 1]);

// for (let i = 0; i < fruta.length; i++) {
//     console.log(fruta[i]);
// }

// let carro = ["1", "2", "3", "4", "5"];

// // for (let a = 0; a < numero.length; numero++) {
// //     console.log(numero[a])
// // }

// let novoCarros = carro.map((carro) => {
//     return carro.length
// })
// console.log(novoCarros)

// let legumes = ["Batata", "Cenoura", "Beterraba", "Beringela", "Chucu" ];

// // let legumesComB = legumes.find(b => b.startsWith("B"));

// let legumesComB = legumes.filter(legume => legume.startsWith("B"));

// console.log(legumesComB);

function saudação (nome) {
    console.log(`Olá ${nome}`);
}

saudação("Joaquim")
saudação("larry");
saudação("Marcos");
saudação("Otavio");
saudação("Bianca");

console.log("");

//modificar a função despedida para que aceite um parâmetro nome e imprima uma mensagem personalizada

function despedida (){
    console.log(`Até logo ${nome}`)
}

let nome = prompt("Digite seu nome")

despedida(nome)

console.log("");

function soma ( a, b){
    return a + b;
}

console.log(soma(1, 2));
console.log(soma(4, 9));
console.log(soma(5, 3));

console.log("");

function mult ( a, b){
    const resultado = a * b
    console.log(resultado);
    return resultado;
}

mult(2, 7);
mult(4, 3);
mult(29, 2);
mult(2, 6);

console.log("");

let somaAnonima = function(a, b) {
    return a + b
}

console.log(somaAnonima(1, 2))