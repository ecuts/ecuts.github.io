module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        concat: {
            options: {
                separator: ''
            },
            dist: {
                src: [
                    'js/ecuts/*.js'
                ],
                dest: 'js/ecuts.js'
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'js/*.js',
                'js/*.min.js',
                'js/ecuts/*.js'
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
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 7,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: 'images/'
                }]
            }
        },
        watch: {
            css: {
                files: ['css/ecuts.css'],
                tasks: ['cssmin']
            },
            js: {
                files: [
                    '<%= jshint.all %>'
                ],
                tasks: ['jshint', 'uglify']
            }
        },
        cssmin: {
            dist: {
                files: {
                    'css/ecuts.min.css' : ['css/ecuts.css']
                }
            }
        },
        clean: {
            dist: [
                'assets/css/ecuts.min.css',
                'assets/js/ecuts.min.js'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'imagemin', 'clean']);
    grunt.registerTask('dev', ['watch']);
    grunt.registerTask('lint', ['jshint']);
};