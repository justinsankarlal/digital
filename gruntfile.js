var path = require('path');
module.exports = function(grunt){
	grunt.initConfig({
		uglify: {
			dist: {
				files: {
					'dist/js/edu-custom.js': 'dist/js/edu-custom.js',
					'dist/js/edu-lib.js' : 'dist/js/edu-lib.js'
				}
			}
		},
		concat : {
			dist : {
				files: {
					'dist/js/edu-lib.js' : [
						/*'js/lib/jquery.js',
						'js/lib/bootstrap.js',*/
						'js/lib/angular.js',
						'js/lib/angular-ui-router.js'
					],
					'dist/js/edu-custom.js': [
						'js/src/app.js',
						'js/src/config.js',
						'js/src/services/*.js',
						'js/src/controllers/*.js'
					]
				}
			}
		},
		htmlmin : {
			dist : {
				options: {                                 
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'index.html': 'main.html'
				}
			}
		},
		jscs: {
			src: 'js/src/**/*.js',
			options: {
				config: ".jscsrc"
			}
		},
		sass: {
			dev: {
				options: {
					outputStyle: 'expanded'
				},
				files: {
					'dist/css/lib.css': 'scss/lib/*.scss',
					'dist/css/styles.css': 'scss/custom/*.scss'
				}
			},
			prod: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'dist/css/lib.css': 'scss/lib/*.scss',
					'dist/css/styles.css': 'scss/custom/*.scss'
				}
			}
		},
		watch: {
			scripts: {
				files: ['js/src/**/*.js', 'scss/**/*.scss', 'partials/*.html', 'main.html'],
				tasks: ['dev'],
			}
		},
		express: {
			server: {
				options: {
					port: 3000,
					bases: '.'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-jscs");
	grunt.loadNpmTasks('grunt-uncss');
	grunt.loadNpmTasks('grunt-express');



	grunt.registerTask('dev', [
		'concat',
		'jscs',
		'sass:dev',
		'htmlmin'
	]);
	
	grunt .registerTask('buildserver', [
		'dev',
		'express',
		'express-keepalive'
	]);
	
	grunt.registerTask('prod', [
		'concat',
		'jscs',
		'uglify',
		'sass:prod',
		'htmlmin'
	]);
	
	grunt.registerTask('default', ['watch']);
}