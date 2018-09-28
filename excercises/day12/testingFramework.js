//expected value
//actual value

//run the test
//compare the actual value with the expected value
//view results
//make changes if necessary

function assert(actual, expected){
    if(actual !== expected){
        //run if failed
        throw {type: 'fail', details:{actual: actual, expected: expected}};
    } else{
        //run if succesful
        console.log ('Success', {type: 'test passed', details: {actual: actual, expected: expected}});
    }
};

// assert(true, false)
// assert(true,false)

function sum(x,y){
    return x + y;
}


function describe(message, func){
    console.log(message);
    try{
        assert(func(3, 10),13)
    }catch (err){
        console.log(err)
    }
}

describe('testing sum function', sum)


//using cases

var cases=[{
    toTest:sum,
    args:[2,3],
    expected:5
}]



function describe(message, func){
    console.log(message);
    for (var i = 0; i < cases.length; i++){
        try {
            assert(cases[i].toTest(...cases[i].args), cases[i].expected)
        }catch (err) {
            console.log()
        }
    }
    
}

describe('testing sum function', sum)