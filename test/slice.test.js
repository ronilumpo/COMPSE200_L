import {assert} from 'chai';
import {expect} from 'chai';
import slice from "../src/slice.js"

describe('slice', function(){
    it('slice-funktio ei toimi normaalitapauksessa', function(){
        expect(slice(['a', 2, 4, 0.2], 2, 3)).to.deep.equal([4]);
    });
    it('slice-funktio palauttaa solun vaikka yläindeksi on sama kuin alaindeksi', function(){
        expect(slice(['a', 2, 4, 0.2], 4, 4)).to.deep.equal([]);
    });
    it('slice-funktio palauttaa solun vaikka negatiivinen alaindeksi viittaa 1-indeksoituna samaan soluun kuin yläindeksi', function(){
	expect(slice(['a', 2, 4, 0.2], -1, 3)).to.deep.equal([]);
    });
    it('slice-funktio menee sekaisin negatiivisesta yläindeksistä', function(){
	expect(slice(['a', 2, 4, 0.2], 1, -2)).to.deep.equal([2]);
    });
    it('slice-funktio menee sekaisin isoista luvuista', function(){
	expect(slice([], -(2**8), 2**8)).to.deep.equal([]);
    });
    it('slice-funktio menee sekaisin tyhjällä taulukolla kun alaindeksi on sama kuin yläindeksi', function(){
	expect(slice([], 0, 0)).to.deep.equal([]);
    });
});
