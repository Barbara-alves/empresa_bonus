//Uma empresa concedeu bônus de 20% aos funcionários com 5 anos ou mais e de 10% aos
//demais. Calcule e exiba o valor do bônus.

let salario = window.prompt("Qual o seu salário?");
let tempo = window.prompt("Quanto tempo de empresa você tem?");
let bonus = 0;

salario = parseInt(salario);
tempo = parseInt(tempo);

if(tempo >= 5){
    bonus = salario*0.20;
    bonus = parseInt(bonus)
}
else{
    bonus = salario*0.10; 
    bonus = parseInt(bonus)
}

window.alert(bonus)