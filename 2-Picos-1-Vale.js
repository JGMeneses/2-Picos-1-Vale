let vetor = [
    0,0,0,0,0,0,1,8,10,24,79,95,136,151,209,261,304,432,777,784,784,713,772,690,675,752,776,729,801,830,864,845,820,900,883,861,859,875,869,899,917,897,859,947,952,983,955,1019,1017,1032,1024,1069,1043,1050,1050,972,986,929,925,1006,908,921,915,919,935,898,911,907,893,857,807,819,848,819,831,865,846,832,921,816,792,772,772,748,733,666,669,653,678,648,616,626,578,600,593,536,489,503,502,437,433,441,409,376,342,358,320,312,340,333,293,299,269,262,230,226,213,226,214,203,227,221,216,199,189,223,199,211,228,204,198,225,210,212,219,262,252,259,225,281,261,222,260,260,272,249,288,296,283,306,287,322,325,336,329,362,334,352,385,415,407,468,464,463,518,467,499,520,482,512,546,556,507,556,565,588,673,618,607,586,629,651,541,549,531,508,531,512,517,527,561,542,593,633,727,742,641,643,585,587,656,616,688,792,887,912,1034,1086,1000,923,871,771,687,541,351,264,253,211,189,192,170,163,137,112,125,128,103,87,83,110,97,88,101,98,221,93,56,35,33,55,41,77,63,58,63,41,36,33,8,6,5,7,18,38,60,8
]
    console.log(vetor)


//Achando o Pico 1
let P1 = 0;
let PosicaoP1 = 0;
for(let i = 0 ; i < vetor.length; i++){ 
    if(vetor[i] > P1){
        P1 = vetor[i];
        PosicaoP1 = i;
    }
}



//Procurando o menor valor para esquerda
let j = PosicaoP1; 
let valeEqd = vetor[j]; //valeEqd se refere ao menor valor da esquerda do pico 1
let cont =0;
let PosicaoValeEqd;

while(cont != 21 && j != 0){
    j--;
    let temp;
    if(vetor[j] < valeEqd){ // verificando se a posção j é menor que o 
        valeEqd = vetor[j]
        temp = j;
        PosicaoValeEqd = j
        cont = 0 
    }
    if(j != temp){ // se o j estiver diferente de temp contador vai incrementar até chegar no 21 e sair do while 
        cont++     // se isso acontecer é que chegou no menor valor da esquerda 
    }
}



//Procurando o menor valor para direita
let k = PosicaoP1;
let valeDir = vetor[j]; //valeDir se refere ao menor valor da direita do pico 1
let contDir =0;
let PosicaoValeDir;
while(contDir != 21 && k != vetor.length){
    k++;
    let temp;
    if(vetor[k] < valeDir){
        valeDir = vetor[k]
        temp = k;
        PosicaoValeDir = k
        contDir = 0 
    }
    if(k != temp){
        contDir++
    }
}





//Achando Maior Pico da esquerda

let P2Esquerda = valeEqd;
let PosicaoP2 = PosicaoValeEqd;
for(let i = PosicaoValeEqd ; i > 0; i--){
    
    if(vetor[i] > P2Esquerda){
        P2Esquerda = vetor[i];
        PosicaoP2 = i;
    }
}



//Achando Maior Pico da direita
let P2Direita = valeDir;
let PosicaoP2Direita = PosicaoValeDir;
for(let i = PosicaoValeDir ; i < vetor.length; i++){
    
    if(vetor[i] > P2Direita){
        P2Direita = vetor[i];
        PosicaoP2Direita = i;
    }
}


//Definindo o Vale final e o Pico 2
let valeFinal;
let valeFinalpos;
let Pico2Final;
let Pico2Finalpos;
//verificando quem é o maior pico, para assim definir quem é o vale verdadeiro e quem é o pico 2
if(P2Direita < P2Esquerda){
    valeFinal = valeEqd;
    valeFinalpos = PosicaoValeEqd;
    Pico2Final = P2Esquerda;
    Pico2Finalpos = PosicaoP2;
}else{
    valeFinal = valeDir;
    valeFinalpos = PosicaoValeDir;
    Pico2Final = P2Direita;
    Pico2Finalpos = PosicaoP2Direita;
}

console.log(" \n\nValor do Pico 1: "+ P1 + "\nPosição do Pico 1: "+ PosicaoP1);
console.log(" \n\nValor do vale: "+ valeFinal + "\nPosição do Vale: "+ valeFinalpos)
console.log(" \n\nValor do Pico 2: "+ Pico2Final+ "\nPosição do Pico 2: "+ Pico2Finalpos)




