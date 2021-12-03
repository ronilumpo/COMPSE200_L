import {assert} from 'chai';
import {expect} from 'chai';
import chunk from "../src/chunk.js"

describe('chunk', function(){
    it('chunk-funktion tulisi palauttaa osioinnista ylijäänyt taulukko viimeisenä palana. (osiopituus 0)', function(){        
	expect(chunk(['a', 'b', 'c'], 0)).to.equal([['a','b','c']]);
    });
    it('chunk-funktion tulisi palauttaa osioinnista ylijäänyt taulukko viimeisenä palana. (osiopituus -1)', function(){        
	expect(chunk(['a', 'b', 'c'], -1)).to.equal([['a','b','c']]);
    });    
    it('chunk-funktio on totaalisen rikki. Normaali tapaus triviaaliparametreilla.', function(){        
	expect(chunk(['a', 'b', 'c'], 1)).to.equal([['a'],['b'],['c']]);
    });
    it('chunk-funktion tulisi palauttaa parametritaulukko sisäkkäisenä taulukkona kun osiopituus ylittää annetun taulukon pituuden.', function(){        
	expect(chunk(['a', 'b', 'c'], 3 + 1)).to.equal([['a','b','c']]);
    });
    it('chunk-funktion tulisi palauttaa parametritaulukko sisäkkäisenä taulukkona kun osiopituus ylittää annetun taulukon pituuden tai kun annetaan tyhjä taulukko.', function(){        
	expect(chunk([], 1)).to.equal([[]]);
    });    
});
