//event listener
//while
//if
//array med tillgörande metod
//document.getElementById("myBtn").addEventListener("click", clicked);
var todolist =[];
var todoindex = 0;
var i = 0;
var please = 0;
function clicked(input)
{
    input = prompt("hello this is alert");
    var inputstr = input.split(" ");
        switch (inputstr[0])
    {
        case "new":
        {
            var text = "";
            for(var i = 1; i < inputstr.length; i++)
            {       
                text = text + inputstr[i] + " "; 
                console.log(inputstr[i]);
            }
            please = todolist.length;
            todolist[please] = text;
 
            console.log(please)
            console.log(inputstr)
            console.log(todolist)
        }
        case "delete":
        {
            if(inputstr[1] > -1)
            {
                todolist.splice(inputstr[1],1);
            }
            console.log(inputstr);
            console.log(todolist);
        }
        removeElement();
        addelements();
    }    
}
function addelements()
{
    console.log(todolist.length);
    for(var i = 0; i < todolist.length; i++)
    {
        var ullist = document.getElementById("ullist")
        var list = document.createElement("LI");
        list.className = i;
        list.setAttribute("id", "list")
        list.innerHTML += i + " " + todolist[i];
        ullist.appendChild(list);
    }
}
function removeElement(element) 
{
    //Removes an element from the document
    var element = document.getElementById("ullist")
    console.log(element)
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}