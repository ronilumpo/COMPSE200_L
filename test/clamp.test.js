//const assert = require('chai').assert;
//const clamp = require('../src/clamp');

import {assert} from 'chai';
import clamp from '../src/clamp.mjs';

describe('Clamp', function(){
    it('Clamp should return 0, when parameters are 0', function(){
        assert.equal(clamp(0,0,0), 0)
    });
    it('Clamp should return 0, when parameters are 2^31, 0, 0', function(){
        assert.equal(clamp(2**31,0,0), 0)
    });
    it('Clamp should return -5, when parameters are 0, -5, 2^31', function(){
        assert.equal(clamp(0,-5,2**31), -5)
    });
    it('Clamp should return 5, when parameters are 5, 2^31, -5', function(){
        assert.equal(clamp(5,2**31,-5), 5)
    });
    it('Clamp should return NaN, when parameters are "abc", -10, 10', function(){
        assert.equal(isNaN(clamp("abc",-10,10)), true)
    });
});