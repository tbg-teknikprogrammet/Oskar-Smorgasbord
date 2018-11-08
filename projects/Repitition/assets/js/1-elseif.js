var name = "Oskar";
var age = "18";

if(age < 18) {
    console.log("Stop Du är " + age + "år");
}else if(age > 18 && age < 45){
    console.log("SHUTDOWN!  YOUR AGE IS TOO COOL 4 sCho_ol");
}else{
    console.log("välkommen! Du är " + age + "år");
}



/*if(userInput == secretNumber){
    document.writeln("Grattis! Du har gissat rätt nummer! 10p");
} else if(userInput > secretNumber) {
    document.writeln("Du gissade för högt! Testa igen...");
}else{
    document.writeln("Du gissade för lågt! Gissa igen.");
}*/
if(age < 0){
    document.writeln("you are already dead");
}else if(age % 2 != 0){
    document.writeln("Du är udda människor");
}else{
    document.writeln("Du är jämna människor")
}