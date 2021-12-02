import {assert} from 'chai';
import {expect} from 'chai';
import endsWith from "../src/endsWith.js"

describe('endsWith', function(){
    it('endsWith-funktio ei toimi normaalitapauksessa', function(){
        expect(endsWith("software testing", "software", 8)).to.equal(true);
    });
    it('endsWith-funktion tulisi palauttaa tosi 0-indeksillä tyhjällä merkkijonolla haettaessa', function(){
        expect(endsWith("software testing", "", 0)).to.equal(true);
    });
    it('endsWith-funktion tulisi palauttaa tosi myös kun indeksi on merkkijonoa suurempi', function(){
        expect(endsWith("software testing", " testing", 2**8)).to.equal(true);
    });
    it('endsWith-funktio ei toimi eksoottisten Unicode-kirjainten kanssa.', function(){
	expect(endsWith("ѕοftwarе tеѕtіng", "ѕοftwarе", 8)).to.equal(true);
    });    
});
