let idade = prompt("Qual é a sua idade?");

if(idade>18){
console.log("Pode entrar");
}else if(idade<15){
    console.log("Vou chamar a policia");
}else{
    console.log("Nao pode entrar");
}

let nome = "rodrigo";

if(nome.length==7){
    console.log("ok");
}else{
    console.log("nao ok");
}

switch(nome) {
  case "Matheus":
    console.log("O Nome é Matheus");
    break;
  case "João":
    console.log("O nome é João");
    break;
  default:
    console.log("O nome não foi encontrado");
    break;
}
//comentario
/*
comentarioo
aqui
varias
linhas 
como em C
*/
  