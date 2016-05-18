module.exports = function(grunt) {

  /****************************************************************
  Конфиги задач
  *****************************************************************/
  grunt.initConfig({
    concat: {
      dist: {
        src: ['css/src/*.css'],
        dest: 'css/dest/style.css'
      }
    },
    uglify:{
        dist:{
            src:['js/src/*.js'],
            dest: 'js/dest/script.min.js'
        }
    }
  });

  /****************************************************************
  Загрузка npm модулей
  *****************************************************************/
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  /****************************************************************
  Запуск задач по конкретной команде
    (default - по умолчанию, т.е. просто grunt)
    (dev - запуск по grunt dev)
  *****************************************************************/
  grunt.registerTask('default', ['concat', 'uglify']);

};