function fizzer(i){
    var nums=[];
    for(i = 1; i <= 100; i++){ 
    var divBy3 = i % 3 === 0;
    var divBy5 = i % 5 === 0;
    if (divBy3 && divBy5) nums.push("fizzbuzz");
    else if (divBy5) nums.push("buzz");
    else if (divBy3) nums.push("fizz");
    else nums.push(i);
    }
    return nums;
}


function fBuzzCounter(fizzer){
    counter{
        fizz:
        buzz:
        fizzbuzz:
    };
    if

}