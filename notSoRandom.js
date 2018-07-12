function random(int){
    console.log(Math.floor(Math.random() * int + 1))
}

random(10);
random(100);
random(2);

let letter = "abcdefghijklmnopqrstuvwxyz"
function randomLet(word){
    i = Math.floor(Math.random() * word.length)
    console.log(word.charAt(i))
}
randomLet("blah")
randomLet("abcdefg")
randomLet("z")

function myGuy(preText){
    console.log(preText + ", my guy")
}
myGuy("Take it easy");

function strNum(text, num){
    n = 0
    while (n<num){
        console.log(text);
        n++;
    }
}
strNum("hello", 3);

function hypotenuse(a,b){
  console.log(Math.sqrt(Math.pow(a, 2) + Math.pow(b,2)));
}
hypotenuse(5,12)