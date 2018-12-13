//event listener
//while
//if
//array med tillgörande metod
//document.getElementById("myBtn").addEventListener("click", clicked);
var todolist =[];
var todoindex = 0;
var leng = 0;
function clicked(input)
{
    input = prompt("hello this is alert");
    var inputstr = input.split(" ");//tar input och konverterar till list/array
        switch (inputstr[0])// specificerar första ordet för att ta red på kommandot
    {
        case "new":
        {
            var text = "";//resettar text efter varje gång
            for(var i = 1; i < inputstr.length; i++)//konverterar alla ord efter kommandot blir till en lång string inom en arrray
            {       
                text = text + inputstr[i] + " "; //konverterar alla ord efter kommandot till string
                console.log(inputstr[i]);
            }
            leng = todolist.length;//tog tre år för denna sak att fungera
            todolist[leng] = text;
 
            console.log(please)//debugging tools
            console.log(inputstr)//debugging tools
            console.log(todolist)//debugging tools
        }
        case "delete":
        {
            if(inputstr[1] > -1)//it just works
            {
                todolist.splice(inputstr[1],1);//tar bort index och ä nice
            }
            console.log(inputstr);//debugging tools
            console.log(todolist);//debugging tools
        }
        removeElement();//tillkallar function
        addelements();//tillkallar function
        //localStorage.setItem("names", JSON.stringify(todolist));
        //var storedTodolist = JSON.parse(localStorage.getItem(names))
        //test med local storage
    }    
}
function addelements()//lägger till list elementet till html
{
    console.log(todolist.length);//debuggint tool
    for(var i = 0; i < todolist.length; i++)//lägger till alla list element
    {
        var ullist = document.getElementById("ullist")//definerar ul
        var list = document.createElement("LI");//skapar li
        list.className = i;
        list.setAttribute("id", "list")//ger li id list
        list.innerHTML += i + " " + todolist[i];//fyller innehållet på li med todolist
        ullist.appendChild(list);//kopplar li som child till ul
    }
}
function removeElement(element) //tar ner alla li i html för att js synkar inte med html
{
    //Removes an element from the document
    var element = document.getElementById("ullist")
    console.log(element)//debug tool
    while (element.firstChild) {//gör så alla bli bortagna
        element.removeChild(element.firstChild);//tarbort elementet
    }
}