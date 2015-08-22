var assert = require('assert'),
  rot13 = require('../rot13');

describe('rot13', function () {

    it('should return a rot13 translation of a string', function () {
        var encryptedString = 'Fraq hf gur pbqr lbh hfrq gb qrpbqr guvf zrffntr';
        var answer = 'Send us the code you used to decode this message';
        assert.equal(rot13(encryptedString), answer);
    });

});