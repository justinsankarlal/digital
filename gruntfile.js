/*build commands
    devlopment build --> grunt || grunt dev
    watch --> grunt watch
    production build --> grunt prod
*/

module.exports = function(grunt){
	grunt.initConfig({
		uglify: {
			dist: {
				files: {
					'build/js/multibrand.js': 'build/js/multibrand.js',
				}
			}
		},
		concat : {
			dist : {
				files: {
					'build/js/multibrand.js': [
						'js/lib/*.js',
						'js/*.js'
					]
				}
			}
		},
		jscs: {
            src: 'js/*.js',
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
					'build/css/style.css': 'scss/main.scss'
				}
			},
			prod: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'build/css/style.css': 'scss/main.scss'
				}
			}
		},
		watch: {
			scripts: {
				files: ['js/**/*.js', 'scss/**/*.scss'],
				tasks: ['dev'],
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-jscs");



	grunt.registerTask('dev', [
		'concat',
		'jscs',
		'sass:dev'
	]);
    
    grunt.registerTask('watch', 'dev'); 
	
	grunt.registerTask('prod', [
		'concat',
		'jscs',
		'uglify',
		'sass:prod'
	]);
	
	grunt.registerTask('default', ['watch']);
}