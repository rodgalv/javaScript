let x=10;

while (x>0){

    console.log(x);
    x= x-1;

}

let y=0;
do{
    console.log(y);
    y = y+1;

}while(y<5);


for(let i=0; i<10;i=i+1){
    console.log(`Ola ${i}`);
}

for(let i=0;i<10;i++){
    console.log(i);
    if(i==3){
        console.log("tamo no 3");
    }else if(i==7){
        console.log("Sair break");
        break;
    }
}


for(let i=0;i<10;i++){
    
    if(i<5){
        continue;
    }
    console.log(i);
}
    