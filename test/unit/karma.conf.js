// Karma configuration
// Generated on Thu Aug 16 2018 23:15:22 GMT+0800 (中国标准时间)
// 参考：https://github.com/Selvin11/city-data/blob/master/test/karma.conf.js

let webpackConfig = require('../../config/webpack.config')

module.exports = function(config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '.',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha'],

        // list of files / patterns to load in the browser
        // 入口文件
        files: ['sqrt.test.js'],

        // list of files / patterns to exclude
        exclude: ['node_modules'],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'sqrt.test.js': ['webpack', 'sourcemap']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['coverage-istanbul'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        plugins: ['karma-webpack', 'karma-sourcemap-loader', 'karma-mocha', 'karma-chrome-launcher', 'karma-coverage-istanbul-reporter'],


        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },

        // karma-coverage-istanbul-reporter插件
        coverageIstanbulReporter: {
            reports: ['lcov', 'text-summary'],
            dir: 'coverage/',
            fixWebpackSourcePaths: true,
            skipFilesWithNoCoverage: true,
            'report-config': {}
        }

    })
}