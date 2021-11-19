//const assert = require('chai').assert;
//const countBy = require('../src/countBy.mjs');
import {assert} from 'chai';
import {expect} from 'chai';
import countBy from "../src/countBy.mjs"



describe('CountBy', function(){

    it('CountBy should return { true: 1, false: 1 } when one user is active and one is not', function(){
        const users = [
            { 'active': true },
            { 'active': false }
        ];
        let count = countBy(users, value => value.active)
        expect(count.true).to.equal(1)
        expect(count.false).to.equal(1)
    });

    it('CountBy should return { false: 1 } when one user is not active and one user does not have a property active', function(){
        const users = [
            { 'active': false },
            { 'name': "John" }
        ];
        let count = countBy(users, value => value.active)
        expect(count.false).to.equal(1)
        expect(count).to.not.have.property('true')
    });

    
    it('CountBy should return {} when it checks for a property active and receives an object without a property active', function(){
        const users = {
            0:{'name':"John"},
            1:{'name':"Betty"}
        }
        let count = countBy(users, value => value.active)
        expect(count).to.be.an('object');
        expect(count).to.not.have.keys('true','false');
        expect(count).to.be.empty;
        /*
            Here we have a bug!!! The list should be empty!
        */
        
    });
    
    it('CountBy should return {} when it receives an empty list', function(){
        const users = [];
        let count = countBy(users, value => value.value)
        expect(count).to.be.an('object');
        expect(count).to.be.empty;

    });
    
});
