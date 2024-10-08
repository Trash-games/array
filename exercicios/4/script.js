function média( a, b, c) {
  let soma = a + b + c;
  let media = soma / 3
  return Math.round (media * 100) / 100;
}
console.log(parseInt(média ( 1, 3, 5)))