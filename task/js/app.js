
//task1
function ReverseString(str) {

if(typeof str==="string"){
return str.split("").reverse("").join("");
}
}
var str="hello"
console.log(ReverseString(str));



//task2
var arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"];
 
    function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }
 
    console.log(removeDuplicates(arr));



    //task3

var count=0
function Plus(){
    count++;
    document.getElementById('count').innerHTML=count
}

function Minus(){

    if(count>0){
        count--;
      
    }
    document.getElementById('count').innerHTML=count
}