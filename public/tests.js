(function() {
  var assert;

  assert = chai.assert;

  suite('parser', function() {
    setup(function() {
    });
    test('Numbers are parsed correctly', () => {
      var original = parse('4');
      assert.deepEqual(original, 4, "Son iguales!");
    });
    test('Multiplications are parsed correctly', () => {
      var result = parse('4*2');
      console.log(result);
      assert.deepEqual(result, 8,"Son iguales!");
    });
    test('Bad expressions throw exceptions', () => {
      assert.throws(() => parse('3 + (4+2))'), /Syntax\s+Error/i);
    });
  });
}).call(this);
