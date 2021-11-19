import {assert} from 'chai';
import {expect} from 'chai';
import map from "../src/map.mjs"
import toString from "../src/toString.mjs"

describe('Map', function(){

    it('Map should return an empty array, when it receives an empty array and a function toString', function(){
        const res = map([],toString());
        expect(res).to.be.an('Array');
        expect(res).to.be.empty;

    });
    
    it('Map should return [2,4,6,2147483648,abc], when it receives an array with items 2,4,6,Number.MAX_VALUE,abc and a function toString', function(){
        const table = [2,4,6,Number.MAX_VALUE,"abc"];
        const comp = ['2','4','6','1.7976931348623157e+308','abc'];
        const res = map(table, toString);
        expect(res).to.have.all.members(comp);

    });
    
    it('Map should return [null,undefined,NaN], when it receives an array with items null,undefined,Nan and a function toString', function(){
        const table = [null,undefined,NaN];
        const comp = ['null','undefined','NaN']
        const res = map(table, toString);
        expect(res).to.have.all.members(comp);
        expect(res).to.have.lengthOf(3);
    });
    
    it('Map should return [ [object Object],...] when it receives an array with objects and a function toString', function(){
        const table = [{'value':1,'attribute':2},{'name':"John"}];
        const comp = ['[object Object]', '[object Object]' ];
        const res = map(table, toString);
        expect(res).to.have.all.members(comp);
        expect(res).to.have.lengthOf(2);
    });

});