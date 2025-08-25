function imprimirConsole(){
    console.log("Ola");
}
imprimirConsole();

function imprimirNumero(n){
    console.log(`o numero é: ${n}`);
}

imprimirNumero(1);
imprimirNumero(2);
imprimirNumero(5);
imprimirNumero(8);

const numeroAleatorio = function(){
    console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();
numeroAleatorio();

function multiplicarNum(x,y,z){
    return x*y*z;
}

let n=25;

function num(){
    let n=0;
    console.log(n);
   
}
console.log(n);
num();
console.log(n);

//nested scope

let a = 10;

function multiplicar(x,y) {
  let a = x * y;

  if(a > 10) {

    let a = 0;

    a++;

    console.log(a);

  }

  console.log(a);

}

console.log(a);

multiplicar(3,7);


//arrow functions

let consoleTeste = () =>{
    console.log("ola mundo");
};
consoleTeste();

let soma = (a,b,c) => {
    return a+b+c;
};
console.log(soma(1,5,8));

const raizQuad = (x) => {
    return x*x;
}

const raizQuadPeq = x => n*n;

//closure

function lembrarSoma(x){
    return function(y){
        return x+y;
    }
}

let soma1=lembrarSoma(2);//o dois vai ficar salvo aqui pra sempre soma1 é a msm coisa q function(y){return x+y;}
console.log(soma1(5));//resultado 7
console.log(soma1(0));//resultado 2
console.log("contador");
function contador(i) {
    let cont = i;
    let somarContador = function() {
    cont++;
    console.log(cont);    
  }
    return somarContador;
}
let meuContador = contador(5);//comeca no 5
meuContador();
meuContador();

let meuContador2 = contador(1);//comeca no 1
meuContador2();
meuContador2();


//recursion
console.log("recursao");
function recursao(n) {

  if(n - 1 < 2) {
    console.log("Recursão parou");
  } else if(n % 2 != 0) {
    console.log("Número ímpar " + n);
    recursao(n - 1)
  } else {
    console.log("Número par " + n);
    recursao(n - 2);
  }

}

recursao(39);
recursao(10);
recursao(55);

