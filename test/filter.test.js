import {assert} from 'chai';
import {expect} from 'chai';
import filter from "../src/filter.js"

describe('filter', function(){
    it('filter-funktio ei toimi normaalitapauksessa', function(){
        expect(filter(['a', 2, 4, 0.200], (taulukkoarvo => taulukkoarvo === 2))).to.deep.equal([2]);
    });
    it('filter-funktio ei anna predikaatille oikeita parametreja', function(){
        expect(filter(['a', 2, 4, 0.200], ((taulukkoarvo, indeksi, taulukko) => taulukkoarvo - indeksi === taulukko[1]))).to.deep.equal([4]);
    });
});
