(var {assert} = require('chai');


var sum = require("../app.js");
var lessThanOrEqualTo = require("../app.js").lessThanOrEqualTo;


// describe("testing sum function", function(){
//     it("it should return 8", function(){
//         assert.equal(sum(5,3),8 );
//         });
//     it("it should return 18", function(){
//         assert.equal(sum(10,8),18 );
//         });
//     it("it should return 0", function(){
//         assert.equal(sum(0,0),0 );
//         });
//     it("it should return -2", function(){
//         assert.equal(sum(0,-2), -2 );
//         });
//     })


    describe("testing if less than or equal", function(){
        it("should return true", function(){
            assert.isTrue(lessThanOrEqualTo(0))
        });
        it("should return false", function(){
            assert.isFalse(lessThanOrEqualTo(5))
        });
        it("should return true", function(){
            assert.isTrue(lessThanOrEqualTo(-5))
        });
    })