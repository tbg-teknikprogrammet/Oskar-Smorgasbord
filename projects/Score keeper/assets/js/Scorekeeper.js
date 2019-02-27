//array med tillgörande metod
//document.getElementById("myBtn").addEventListener("click", clicked);
var Data = { 'player1':0, 'player2':0, 'maxscore':2, 'winner': 0};
var inputscore = document.getElementById("scoremax");
var test = 0;

inputscore.addEventListener("click", function(){
    Data.maxscore = document.getElementById("scoremax").value;
    test = document.getElementById("scoremax").value;
    updatElementScore();
    console.log(test)
});    

addelementsH1();
addelementsScore();

function clickedP1()
{
    console.log(Data.winner)
    if(Data.winner == 0)
    {
        Data.player1++;
    }
    if(Data.player1 < Data.maxscore)
    {   
        updatElementH1();
    }
    else
    {
        Data.winner = 1;
        updatElementH1();
        updatElementP();
    }
}
function clickedP2()
{
    console.log(Data.winner)
    if(Data.winner == 0)
    {
        Data.player2++;
    }
    if(Data.player2 < Data.maxscore)
    {
        updatElementH1();
    }
    else
    {
        Data.winner = 2;
        updatElementH1();
        updatElementP();
    }
}
function clickedR()
{
    console.log(Data)
    Data.player1 = 0;
    Data.player2 = 0;
    Data.winner = 0;

    updatElementH1();
    removeElementP();
}
function addelementsH1()//lägger till list elementet till html
{
    var ullist = document.getElementById("scorekeeper")//definerar ul
    var h1 = document.createElement("h1");//skapar H1
    h1.setAttribute("id", "h1")//ger h1 id list
    if(Data.winner == 1)
    {
        h1.innerHTML = "<span style=\"color:green\">"+ Data.player1 + "</span>" + " to " + Data.player2;
    }
    else if(Data.winner == 2)
    {
        h1.innerHTML = Data.player1 + " to " + "<span style=\"color:green\">" + Data.player2 + "</span>";
    }
    else
    {
        h1.innerHTML = Data.player1 + " to " + Data.player2;//fyller innehållet på li med todolist
    }
    ullist.appendChild(h1);//kopplar li som child till ul
}
function addelementsP(winner)//lägger till list elementet till html
{   
    var ullist = document.getElementById("ullist")//definerar ul
    var p = document.createElement("h1");//skapar H1
    p.setAttribute("id", "p")//ger li id list
    p.innerHTML += "The winner is player" + Data.winner;//fyller innehållet på li med todolist
    ullist.appendChild(p);//kopplar li som child till ul
}
function addelementsScore()//lägger till list elementet till html
{   
    var ullist = document.getElementById("score")//definerar ul
    var p = document.createElement("h1");//skapar H1
    p.setAttribute("id", "s")//ger li id list
    p.innerHTML += "First to  " + Data.maxscore;//fyller innehållet på li med todolist
    ullist.appendChild(p);//kopplar li som child till ul
}
function removeElementH1(element) //tar ner alla li i html för att js synkar inte med html
{
    //Removes an element from the document
    var element = document.getElementById("scorekeeper")
    console.log(element)//debug tool
    while (element.firstChild) {//gör så alla bli bortagna
        element.removeChild(element.firstChild);//tarbort elementet
    }
}
function removeElementP(element) //tar ner alla li i html för att js synkar inte med html
{
    //Removes an element from the document
    var element = document.getElementById("ullist")
    console.log(element)//debug tool
    while (element.firstChild) {//gör så alla bli bortagna
        element.removeChild(element.firstChild);//tarbort elementet
    }
}
function removeElementScore(element) //tar ner alla li i html för att js synkar inte med html
{
    //Removes an element from the document
    var element = document.getElementById("score")
    console.log(element)//debug tool
    while (element.firstChild) {//gör så alla bli bortagna
        element.removeChild(element.firstChild);//tarbort elementet
    }
}
function updatElementH1()
{
    removeElementH1();
    addelementsH1();
}
function updatElementP()
{
    removeElementP();
    addelementsP();
}
function updatElementScore()
{
    removeElementScore();
    addelementsScore();
}