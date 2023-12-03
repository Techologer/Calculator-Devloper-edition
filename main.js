let num1 = 0;
let num2 = 0;
let clean = 0;

document.getElementById("opernation").onclick = function(){
    num1 = document.getElementById("first").value;
    num2 = document.getElementById("second").value;
    num1 = Number(num1)
    num2 = Number(num2)
    document.getElementById("status").innerHTML = num1 + num2;
}
document.getElementById("operation1").onclick = function(){
    num1 = document.getElementById("first").value;
    num2 = document.getElementById("second").value;
    num1 = Number(num1)
    num2 = Number(num2)
    document.getElementById("status").innerHTML = num1 - num2;
}
document.getElementById("operation2").onclick = function(){
    num1 = document.getElementById("first").value;
    num2 = document.getElementById("second").value;
    num1 = Number(num1)
    num2 = Number(num2)
    document.getElementById("status").innerHTML = num1 * num2;
}
document.getElementById("operation3").onclick = function(){
    num1 = document.getElementById("first").value;
    num2 = document.getElementById("second").value;
    num1 = Number(num1)
    num2 = Number(num2)
    document.getElementById("status").innerHTML = num1 / num2;
}
document.getElementById("clean").onclick = function(){
    num1 = 0 ;
    num2 = 0;
    document.getElementById("status").innerHTML = num1 + num2;
}