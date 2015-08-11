/**
 * Created by Karthik on 06/08/15.
 */
module.exports = function(grunt) {

    grunt.initConfig({


        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'public/stylesheets/style.css': 'public/stylesheets/style.sass'
                }
            }
        },

        uglify: {
            options: {
                sourceMap: true
            },
            global: {
                src: "public/javascripts/global.js",
                dest: "public/javascripts/global.min.js"
            },
            app: {
                src: "public/javascripts/app.js",
                dest: "public/javascripts/app.min.js"
            }
        },

        concat: {
            options: {
                separator: '\n'
            },
            js: {
                src: ['bower_components/jquery/dist/jquery.min.js'
                    , 'bower_components/bootstrap/dist/js/bootstrap.min.js'
                    , 'node_modules/angular/angular.min.js'
                    , 'public/javascripts/global.min.js'
                    , 'public/javascripts/app.min.js'],

                dest: 'public/javascripts/lib.js'
            },
            css: {
                src: ['bower_components/bootstrap/dist/css/bootstrap.min.css'
                    , 'bower_components/animate.css/animate.min.css'
                    , 'bower_components/ionicons/css/ionicons.min.css'
                    , 'public/stylesheets/style.css'],

                dest: 'public/stylesheets/lib.css'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['sass', 'uglify', 'concat']);

};