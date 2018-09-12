//notes on string methods
//global function
function doSomething(){
    console.log("im doing things")
}
doSomething()

//method
var someObj ={
    name:"mike",
    age:28,
    speak:function(){
        console.log("im speaking")
    }
};
someObj.speak()

//string.toUpperCase()
//returns the string value converted to uppercase
var str = "hello";
var upperStr = str.toUpperCase();
console.log(upperStr)

//.concat()
//combines the text of 
var str ="hello";
var str2 ="world";
var fullStr= str.concat(str2);
console.log(fullStr);

var fullStr2= str2.concat(str);
console.log(fullStr2);

//indexOf()
//returns the index of the specified value, or -1 if not found
var str = "hello world";
var oIndex = str.indexOf('o',5);
console.log(oIndex);// prints 7

//slice
//removes section of a string and returns 
var str = 'hello world';
var newStr = str.slice(6);
console.log(newStr);

//end notes

//little prepractice 

function breakfast(milk, toast){
    console.log(milk+toast)
}


breakfast("whole"," white");


function lunch(drink, meal){
    return drink + meal
}


console.log(lunch("redbull"," chicken"));

//excercises


//excercise functions write a function that returns the sum
function adder(num1,num2){
    console.log(num1+num2)
}
adder(10,15);

// write a function that accepts 3 numbers and returns the largest

function largestNum(fst,scd,trd){
    if (fst>scd){
        x=fst
    }
    else {
        x=scd
    }
    if(x>trd){
        y=x
    }
    else{
        y=trd
    }

    console.log(" the largest number is " + y)
}
largestNum(9,5,3)

//write a function that accepts one number and
//returns if the number is even or odd.

function oddEven(num){
    if (num%2 ==0)
    console.log("even")
    else{
        console.log("odd")
    }
}
oddEven(3)




//write a function that accepts a string as a parameter.
//if the length of the string is less than or equal to 
//20 return the (string+string)
//if it is longer than 20 return half the string

function moretwnty(str){
    if (str.length <= 20){
        console.log(str+str)
    }
    if (str.length >= 20){
        var newStr = str.slice(str.length/2)
        console.log(newStr)
    }
}

moretwnty("a hello my name is mike the sauce lord")


/*let removeA = function(str) {
    if (str.includes("a")){
        var kia=0;
        var includes_a = str.indexOf("a");
            while (includes_a !== -1){
                kia++;
                includes_a = str.indexOf(("a"),includes_a + 1)
            }
        
       var noa = str.split("a")
    let removeA_again = function(noa) {
        if (noa.includes("A")){
            var kiA=0;
            var includes_A = noa.indexOf("A");
                while (includes_A !== -1){
                    kiA++;
                    includes_A = noa.indexOf(("A"),includes_A + 1)
                }
            let noA = noa.split("A")
        console.log("we took out the a & A this is your words " + noA + " and these were how many a or A we found eyy. "+ " aA's K.I.A. "+ kia+kiA)
        
        
    }
    else{
        console.log("no a to remove eyy")
    }
    }
}
}
removeA("aaa nnn")*/

var first = "helloWorld"
var second = 3
let a = first.concat(second)
console.log("concat "+a)

let b = first.indexOf(second)
console.log("indexof "+b)

let c = first.lastIndexOf("w")
console.log("lastindexof "+c)

let d = first.match("ello")
console.log("match "+ d)

let e = first.replace(second)
console.log("replace "+e)

let f = first.slice(3)
console.log("slice "+f)

let g = first.split()
console.log("split "+g)

let h =first.toLowerCase("W")
console.log("lowercase "+h)

let i = first.toUpperCase("h")
console.log("uppercase "+i)

let j = first.substr(3)
console.log("substr "+j)



let removeA = function(str) {
    var y = str.split("a")
    console.log(y)
}
removeA("aaa NNNN")



/*var nums = [31,3,44,567,7878,4,3]
function max(nums){
    if (nums(0)<nums[i], i++){
        let 
    }

}
*/