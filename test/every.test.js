import {assert} from 'chai';
import {expect} from 'chai';
import every from "../src/every.mjs"

describe('Every', function(){

    it('Every should return true, when it receives an empty array and a function Boolean', function(){
        assert.equal(every([],Boolean), true);
    });
    
    it('Every should return true, when it receives a function Boolean and an array with items 2^31, "abc" and true', function(){
        const table = [2**31, "abc", true];
        assert.equal(every(table, Boolean), true);
    });

    it('Every should return true, when it receives a function String and an array with items 2^31, "abc" and true', function(){
        const table = [2**31, "abc", true];
        assert.equal(every(table, String), true);
    });

    it('Every should throw SyntaxError: Cannot convert abc to a BigInt, when it receives a function BigInt and an array with items 2^31, "abc" and true', function(){
        const table = [2**31, "abc", true];
        expect(function(){
            every(table, BigInt);
        }).to.throw('Cannot convert abc to a BigInt');
    });
    
    it('Every should return false, when it receives a function Boolean and an array with values null, undefined, NaN', function(){
        const table = [null, undefined, NaN];
        assert.equal(every(table, Boolean), false);
    });
    
});