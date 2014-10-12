module.exports = function(grunt) {
    //配置
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        concat: {
            css: {
                src: ['css/*.css'],
                dest: 'css/build.css'
            }
        },
        cssmin: {
            css: {
                files: {
                    'css/build.css': ['css/common.css','css/lib.css','css/reset.css']
                }
            }
        }
    });

    //载入插件
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //默认任务
    grunt.registerTask('default', ['cssmin']);
}