module.exports = function(grunt) {
  grunt.initConfig({

   protractor_webdriver: {
    your_target: {
      options: {
        path: './node_modules/protractor/bin/',
        command: 'webdriver-manager start',
      },
    },
  },
  shell: {
    options: {
        stderr: false
    },
    target: {
        command: './node_modules/protractor/bin/webdriver-manager update --standalone'
    }
  },

  protractor: {
    options: {
      configFile: "node_modules/protractor/example/conf.js", // Default config file
      keepAlive: true, // If false, the grunt process stops when the test fails.
      noColor: false, // If true, protractor will not use colors in its output.
      args: {
        // Arguments passed to the command
      }
    },
    e2e: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
    options: {
        configFile: "protractor.conf.js", // Target-specific config file
        args: {} // Target-specific arguments
      }
    },
  },
});
grunt.loadNpmTasks('grunt-protractor-runner');
grunt.loadNpmTasks('grunt-protractor-webdriver');
grunt.loadNpmTasks('grunt-shell');
grunt.registerTask('default', ['shell','protractor_webdriver','protractor']);



}
