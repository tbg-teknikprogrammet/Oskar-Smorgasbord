//array med tillgörande metod
//document.getElementById("myBtn").addEventListener("click", clicked);
var Data = { 'player1':0, 'player2':0, 'maxscore':2, 'winner': 0};
var inputscore = document.getElementById("scoremax");
var test = 0;

inputscore.addEventListener("click", function(){
    Data.maxscore = document.getElementById("scoremax").value;
    test = document.getElementById("scoremax").value;
    console.log(test)
});    

addelementsH1();

function clickedP1()
{
    Data.player1++;
    if(Data.player1 <= Data.maxscore)
    {
        removeElementH1();//tillkallar function
        addelementsH1();//tillkallar function
    }
    else
    {
        Data.winner = 1;
        removeElementP();
        addelementsP();
    }
    
}
function clickedP2()
{
    Data.player2++;
    if(Data.player2 <= Data.maxscore)
    {
        removeElementH1();//tillkallar function
        addelementsH1();//tillkallar function
    }
    else
    {
        Data.winner = 2;
        removeElementP();
        addelementsP();
    }
}
function clickedR()
{
    Data.player1 = 0;
    Data.Player2 = 0;
    Data.Winner = 0;

    removeElementH1();
    addelementsH1();

    removeElementP();
}
function addelementsH1()//lägger till list elementet till html
{
    
    var ullist = document.getElementById("scorekeeper")//definerar ul
    var H1 = document.createElement("H1");//skapar H1
    H1.setAttribute("id", "H1")//ger li id list
    H1.innerHTML += Data.player1 + "to" + Data.player2;//fyller innehållet på li med todolist
    ullist.appendChild(H1);//kopplar li som child till ul

}
function addelementsP(winner)//lägger till list elementet till html
{
    
    var ullist = document.getElementById("ullist")//definerar ul
    var p = document.createElement("p");//skapar H1
    p.setAttribute("id", "p")//ger li id list
    p.innerHTML += "The winner is player" + Data.winner;//fyller innehållet på li med todolist
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