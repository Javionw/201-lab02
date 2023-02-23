function whoyou(){
const username = prompt("What is your name?")
if(username != null) {
alert("What's Up, welcome to my page. " + username);
}else{
alert("What's Up, welcome to my page.");
}
alert("Hope you enjoy the rest of your stay!");
}
whoyou();

"use strict.";
function math(){
let answer = document.getElementById("math").value

if(answer == "y"){
alert("Correct!");
console.log("user got math question right.")
}else{
alert("Wrong answer!!");
console.log("user got math question wrong.")

}

}
math();

function sky(){
let answer = document.getElementById("sky").value

if(answer.toLowerCase() =="y"){
alert("Correct!");
console.log("user got sky question right.")
}else{
alert("Wrong answer!!");
console.log("user got sky question wrong.")

}

}
sky();

function coding(){
let answer = document.getElementById("coding").value

if(answer.toLowerCase() =="n"){
alert("Correct!");
console.log("user got the code question right.")
}else{
alert("Wrong answer!!");
console.log("user got the code question wrong.")

}

}
coding();

function anime(){
let answer = document.getElementById("anime").value


if(answer.toLowerCase() =="n"){
alert("Boooo!");
console.log("user does not watch anime.")
}else{
alert("W mans or womans!!");
console.log("user watches anime.")

}

}
anime();

function celtics(){
    let answ = document.getElementById("celtics").value
    console.log("celtics", celtics)

    if (answ == 'n') {

        alert("Eh you suck . . .");
        
    } else {

        alert("Ayy you Lit");
        
    }

}



