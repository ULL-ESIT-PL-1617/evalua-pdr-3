(function() {
  var assert;

  assert = chai.assert;

  suite('parser', function() {
    setup(function() {
    });
    test('Commas are parsed correctly', () => {
      var original = parse('4+2, 3');
      assert.deepEqual(original, { result: 3, results: [ 6, 3 ] }, "OK!");
    });
    test('Multiplications are parsed correctly', () => {
      var result = parse('4*2, 2-1-1');
      console.log(result);
      assert.deepEqual(result, { result: 0, results: [ 8, 0 ] } ,"OK!");
    });
    test('Bad expressions throw exceptions', () => {
      assert.throws(() => parse('3 + (4+2))'), /Syntax\s+Error/i);
    });
  });
}).call(this);
