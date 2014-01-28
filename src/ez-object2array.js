angular.module('ez.object2array', [])
  .filter('object2array', [function() {
    return function(input) {
      var out = [];
      for(var i in input){
        out.push(input[i]);
      }
      return out;
    };
  }])
;
