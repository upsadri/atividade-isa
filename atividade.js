const prompt = require('prompt-sync')();
let vetor= [5,10,15,20,25]
let soma= 0 
let maior= 0
let menor= 0 

for (let i= 0 ; i < vetor.length; i++){
     soma= soma+vetor[i]

    if(vetor[i]> maior){
        maior = vetor [i]
    }
    if(vetor[i]< menor){
        menor = vetor[i]
    }
    
}
let media = soma / vetor.length
console.log("soma", soma)
console.log ("media", media)
console.log("maior valor", maior)
console.log("menor valor", menor)