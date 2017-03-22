// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html

console.log(' ===== karma.conf.js =====');

module.exports = function karmaConfig (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    frameworks: [
      // Reference: https://github.com/karma-runner/karma-jasmine
      // Set framework to jasmine
      'jasmine'
    ],

    reporters: [
      // Reference: https://github.com/mlex/karma-spec-reporter
      // Set reporter to print detailed results to console
      'progress'
    ],

    files: [
      // Grab all files in the app folder that contain .spec.
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'dist/scripts/app.js',
      'src/**/*spec*.js'
    ],

    colors: true,

    browsers: [
      // Run tests using PhantomJS
      'PhantomJS'
    ],

    singleRun: false
  });
};
