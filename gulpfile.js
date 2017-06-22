var gulp = require('gulp')
const nodemon = require('nodemon')
const tsc = require('gulp-typescript')
const runSequence = require('run-sequence')
const clean = require('gulp-clean')


gulp.task('typescript', function () {
    const tsProject = tsc.createProject('tsconfig.json')
    const tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('dist-server'))
})

gulp.task('start-server-dev', function () {
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

function buildSequenceDev() {
    runSequence(
        'typescript'
    )
}

gulp.task('dev', function () {
    buildSequenceDev()
});

gulp.task('clean', function () {
    return gulp.src('dist-server', {
            read: false
        })
        .pipe(clean());
})

gulp.task('watch', function () {
    gulp.watch('./**/*.ts', ['typescript'])
})