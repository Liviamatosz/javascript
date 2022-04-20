function Clicar(){
    var num=parseInt(prompt("digite o numero"));
    document.querySelector("p").innerHTML="o antecessor de " +num+ " é "(num-1)+"e o sucessor é "+(num+1);
}