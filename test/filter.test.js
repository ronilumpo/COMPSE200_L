import {assert} from 'chai';
import {expect} from 'chai';
import filter from "../src/filter.js"

describe('filter', function(){

/*    it('filter-funktion mukaan vaillinnaista funktiota eq(arvo, 2) voi vertailla', function(){
        expect(filter(['a', ( arvo ) => eq(arvo, 2), 4, true, 0.200], (taulukkoarvo => taulukkoarvo === true))).to.deep.equal([true]);
    });  */
    
    it('filter-funktio ei toimi normaalitapauksessa', function(){
        expect(filter(['a', 2, 4, 0.200], (taulukkoarvo => taulukkoarvo === 2))).to.deep.equal([2]);
    });

    it('filter-funktio ei anna predikaatille oikeita parametreja', function(){
        expect(filter(['a', 2, 4, 0.200], ((taulukkoarvo, indeksi, taulukko) => taulukkoarvo - indeksi === taulukko[1]))).to.deep.equal([4]);
    });
});
