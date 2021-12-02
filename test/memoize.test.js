import {assert} from 'chai';
import {expect} from 'chai';
import memoize from "../src/memoize.js"

describe('memoize', function(){

    it('memoize-funktion välimuisti ei palauta aiempaa arvoa kun samalla viittauksella kutsutaan uudelleen viittauksen arvon muututtua', function(){
	var a = 1
	const memofunktio = memoize(objekti => objekti)
	expect(memofunktio(a)).to.equal(1);
	a = 2
        expect(memofunktio(a)).to.equal(1);
    });
});
