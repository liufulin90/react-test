/** * [gulp description] * @type {[type]} */
var gulp = require('gulp');
var runSequence = require('run-sequence');
var mock = require('gulp-mock');
var mockServer = require('gulp-mock-server');
var proxy = require('http-proxy-middleware');
var connect = require('gulp-connect');

var mockServerStart = false;

//mock api data by liufulin,liufl,thunder
gulp.task('mockApi', function () {
    gulp.src('./mocks/tpl/*.json')
        .pipe(mock()) // Just add this line to what ever files you wanna mocked.
        .pipe(gulp.dest('./mocks/data'))
});
//response mock server for dev
gulp.task('mockServer', function () {
    gulp.src('.')
        .pipe(mockServer({
            mockDir: './mocks/data',
            port: 8999
        }));
});
/**
 * [connectServer description]
 * @return {[type]} [description]
 */
gulp.task('apiServer', function (done) {
    runSequence(
        ['mock-server']
    );
    connect.server({
        root: ['./mocks'],
        debug: true,
        port: 8081,
        // livereload: true,
        middleware: function (connect, opt) {
            var middlewares = [
                proxy(['/'], {
                    pathRewrite: {
                        '^/api/msg/': '/mocks/data/msg.list.json?'
                    },
                    target: 'http://localhost:8999/',//目标服务器地址
                    debug: true,
                    changeOrigin: true, //虚拟主机网站需要
                    headers: {  //添加token,用于开发
                        // 'Authorization': 'Bearer ' + token,
                        'Access-Control-Allow-Origin': '*',
                        'x-api-version': 1
                    }
                })
            ];
            return middlewares;
        }
    });
    done();
});
/**
 * 开发时启动mockserver便于调试
 */
gulp.task('mock-server', function (done) {
    mockServerStart = true;
    runSequence(
        ['mockApi'],
        ['mockServer'],
        done
    );
    gulp.watch('./mocks/tpl/*', ['mockApi']);
});
