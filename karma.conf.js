module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      // libraries
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',

      'src/ez-object2array.js',

      'test/*Spec.js',
    ],

    port: 4943,

    browsers: ['Chrome']
  });
};
