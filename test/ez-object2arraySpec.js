describe('object2arraySpec', function () {
  var filter;

  beforeEach(function () {
      module('ez.object2array');
  });

  beforeEach(inject(function (object2arrayFilter) {
    filter = object2arrayFilter;
  }));

  it('it should filter an object into an array', function() {
    var object = {
      '1': {id: 1, name: "One"},
      '2': {id: 2, name: "Two"}
    };

    var array = [
      {id: 1, name: "One"},
      {id: 2, name: "Two"}
    ];

    expect(filter(object)).toEqual(array);
    expect(filter(array)).toBe(array);
  });
});
