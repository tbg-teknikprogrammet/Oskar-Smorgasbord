//inte alls stulet av ackemo
function Beatosaurus() {
    console.log("Beatosaurus-rex");
    console.log("Beatosaurus-rex");
    console.log("Äre inte en tyranodon?");
    console.log("No u");
    console.log("?");
}

yeetosaurus();
yeetosaurus();
yeetosaurus();

function doSomething() {
    console.log("Herrow word!")
    console.log("Do somfin!")
}

doSomething();
doSomething;

function square(num, num1) {
    console.log(num * num1);
}

square(5, 6);

function sayHello(name) {
    console.log("Well hello there, dear" + name);
}

sayHello("U mom");
sayHello("Peter");

function area(length, height) {
    console.log("The area of " + length + "and" + height + "is" + length + height);
}
area(5,10);

function greet(person1, person2, person3, person4) {
    console.log("Hej, ", person1 + "!");
    console.log("Hej, ", person2 + "!");
    console.log("Hej, ", person3 + "!");
    console.log("Hej, ", person4 + "!");
}

greet("Adam", "PV", "Flimpflomp", "Doodis");
function squared(x) {
    return x * x;
}

console.log("4 squared is: ", squared(4));

var result = squared(10);
console.log(result);

function isEven(x){
    if (x % 2 == 0){
    return true;
    } else {
        return false;
    }
}


function kebabToSnake(str){
    var myString = str.replace(/-/g, "_");
    return myString;
}

function localScope(){
    var showScope = 31;
    console.log(showScope);
}

var showScopeY = 99;
function localScopeY(){
    showScopeY = 100;
    console.log(showScopeY);
}

console.log(showScopeY)
localScopeY();

function sing(){
    console.log("I'm singing in the rain!");
    console.log("It's funny on a sunny day!");
}
// setInterval(sing, 2500);

// var anon = setInterval(function(){
    // console.log("I'm an anonomys function");
// }, 3000);

function myTimer() {
    var d = new Date();
    document.getElementById("output").innerHTML = d.toLocaleTimeString();
}

myTimer();

var myTime = setInterval(myTimer, 1000);

document.getElementsByTagName("button")[0].addEventListener("mouseenter", function(){
    clearInterval(myTime);
});

document.querySelector("button").addEventListener("mouseleave", function() {
    myTime = setInterval(myTimer,1000);
})
