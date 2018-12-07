//event listener
//while
//if
//array med tillgörande metod
//document.getElementById("myBtn").addEventListener("click", clicked);
var todolist =[];
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
                if(text = "")
                {
                    text = text + inputstr[i];
                }
                else
                {
                    text = text + " " + inputstr[i];
                }
                
                console.log(inputstr[i]);
            }
            please = todolist.length;
            todolist[please] = text;
            console.log(please)
            console.log(text)
            console.log(inputstr)
            console.log(todolist)
        }
        case "delete":
        {

        }
    }    
}
