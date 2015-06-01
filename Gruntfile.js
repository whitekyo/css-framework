module.exports = function(grunt) {
    //配置
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        cssmin: {    // 任务名称
            options: {
                banner: "/*! <%=pkg.name %> -v <%=pkg.version%> build in <%=grunt.template.today('yyyy-mm-dd')%> coding by <%=pkg.author%>*/"
            },
            combine: {
                files: {
                    "dest/pc-base.css": ["css/reset.css", "css/lib.css"],
                    "dest/mobile-base.css": ["css/reset-mobile.css", "css/lib.css", "css/grid.css"]
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