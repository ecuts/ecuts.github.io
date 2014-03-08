module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'js/*.js',
                'js/*.min.js'
            ]
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            js: {
                files: {
                    'js/ecuts.min.js': ['js/ecuts.js']
                }
            }
        },
        watch: {
            js: {

            }
        }

    });
};