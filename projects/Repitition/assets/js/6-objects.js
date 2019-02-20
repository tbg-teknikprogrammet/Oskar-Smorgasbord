var person = ["Sid", 31, "Malå"];
console.log(person[2])
var person2 = [31, "Livelong", "Bill"];
console.log(person[2])
var person = {
    name: "Bob",
    age: 29,
    hometown: "Heresneezeduck"
};
console.log("thos person nem is "+person.name)
var movies = [
    {
        title: "DeadPool 2",
        rank: 7.8,
        seen: false
    },
    {
        title: "Avengers: Infinity War",
        rank: 8.5,
        seen: true
    },
    {
        title: "Spy Kids 3: Game Over",
        rank: 4.2,
        seen: true
    },
    {
        title: "Herbie Fully Loaded",
        rank: 4.8,
        seen: true
    },
]   
function movie(movies)
{
    if(movies.seen in movies == true)
    {
        console.log("Title: " + movies.title + "Rank: " + movies.rank + "/10" + "Seen: " + movies.seen)
    }
}
movies.foreach(movie)