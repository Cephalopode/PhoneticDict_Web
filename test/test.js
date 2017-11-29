var assert = require('assert');
var phon2regex = require('../app/phonetics')

  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
  
  describe('phonetics', function() {
    var phons = [
      ['byzantin', 'bizɑ̃tin'],
      ['tyrannie','tiʁani'],
      ['empreur','ɑ̃pʁœʁ'],
      ['ravitaillement','ʁavitajmɑ̃']
    ]
    phons.forEach((phon) => {
      it(phon[0], function() {
        reg = RegExp(phon2regex(phon[0]))
        assert.equal(reg.test(phon[1]), true,reg)
      })
    })
  });
