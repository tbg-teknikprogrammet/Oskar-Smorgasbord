//list a group of friends
var friends1 = "Rickard";
var friends2 = "Isak";

//list a group of friend using an array
var friends = ["Rickard", "Isak", "emanuel", "Ted"];

console.log(friends[2] + " <3 " + friends[3]);

var array1 = [1,2,3,4,5,6];
console.log(array1);
var arrayreverse = array1.reverse(); 
console.log(arrayreverse);

// Numbers_Same = [1,1,1,1,1,1,1,1,1,];
// Numbers_Not_Same = [1,2,3,4,5,6,7,8,9];
// var i = 0;
// Numbers_Same.forEach(Numbers_Same){
//     if(Numbers_Same[0] !== Numbers_Same[i])
//     {
//         return false;
//     }
//     i++;
// }
// Numbers_Not_Same.forEach(Numbers_Not_Same){
//     if(Numbers_Not.Same[0] !== Numbers_Not_Same[i])
//     {
//         return false;
//     }
//     i++;
// }

function isIdentical(array) {
    var first = array[0];
    for(var i = 0; i < array.length; i++) {
        if(array[i] !== first) {
            return false;
        }
    }
    return true;
}

console.log(isIdentical([1,1,1,1]));
console.log(isIdentical([1,1,21,12]));

function sumarray(array){
    var Final = 0;    
    for(var i = 0; i < array.length; i++)
        { 
            Final = Final + array[i];
        }  
    return Final;
 }
console.log(sumarray([1,5,123,4,2,1]));

function max(array){
    max = 0;
    for(var i = 0; i < array.length; i++)
    {
        if(max < array[i])
        {
            max = array[i];
        }
    }
    return max;
}
console.log(max([1,5,12,30,2,1]));