function Clicar(){
    var a=parseFloat(prompt("Digite o primeiro numero: "));
    var b=parseFloat(prompt("Digite o segundo numero: "));
    document.querySelector("#somar").innerHTML="A soma dos valores é: "+(a+b);
    document.querySelector("#subtrair").innerHTML="A subtração dos valores é: "+(a-b);
    document.querySelector("#multiplicar").innerHTML="A multiplicação dos valores é: "+(a*b);
    document.querySelector("#dividir").innerHTML="A divisão dos valores é: "+(a%b);
}