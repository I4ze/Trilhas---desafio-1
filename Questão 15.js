//15. Refatore o código abaixo para que seja mais legível, usando boas práticas de nomenclatura e separando o código em funções:

x = 10

y = 20

z = x+y

console.log(z)


//refatorando tem-se:

let num1 = 10;
let num2 = 20;

function calculaSoma(a, b){
    return a+b;
}

console.log("A soma de num1 e num2 é: " + calculaSoma(num1, num2));