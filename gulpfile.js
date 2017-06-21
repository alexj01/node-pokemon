var gulp = require('gulp')
const nodemon = require('nodemon')
const tsc = require('gulp-typescript')
const runSequence = require('run-sequence')


function buildSequenceDev(){
    runSequence(
        'typescript',
        'start-server-dev'
    )
}

gulp.task('typescript', function () {
    const tsProject = tsc.createProject('tsconfig.json')
    const tsResult = tsProject.src()
    .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('dist-server'))
})

gulp.task('start-server-dev', function(){
        nodemon({
            script: './dist-server/server/bin/www',
            ext: 'js',
            env: {
                ENV: 'development'
            },
            ignore: ['./node_modules/**']
        })
        .on('restart', function () {
            console.log(`Change detected. Server restarting....`)
        })
})

gulp.task('dev', function () {
    buildSequenceDev()
});

gulp.task('default', ['dev'])