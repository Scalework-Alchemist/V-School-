var {assert} = require('chai');
var getLongestString = require('../app.js')

var testCase={
    one:["", "a", "bb", "cc", "dd", "ee"],
    two:["abc", "abcd", "ab", "xyzz"],
    three:[""]
}

describe('testing the length of strings for the longest', function(){
    it('should return bb', function(){
        assert.strictEqual(getLongestString, (testCase.One), 'these booleans are strictly equal');
    });
    it('should....', function(){
        assert.strictEqual(getLongestString, (testCase.two), 'these booleans are strictly equal');
    });
    it('should....', function(){
        assert.strictEqual(getLongestString, (testCase.three), 'these booleans are strictly equal');
    });
})