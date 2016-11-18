module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        plugins : [
            'karma-jasmine',
            'karma-html-reporter',
            'karma-phantomjs-launcher',
            'karma-junit-reporter'
        ],
        files: [
            './test/components/dashboard.spec.js'
        ],
        exclude: [],
        preprocessors: {},
        reporters: ['progress', 'junit', 'html'],
        htmlReporter: {
            outputDir: 'test', // where to put the reports
            templatePath: null, // set if you moved jasmine_template.html
            focusOnFailures: true, // reports show failures on start
            namedFiles: false, // name files instead of creating sub-directories
            pageTitle: null, // page title for reports; browser info by default
            urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
            reportName: 'html', // report summary filename; browser info by default

            // experimental
            preserveDescribeNesting: false, // folded suites stay folded
            foldAll: false // reports start folded (only with preserveDescribeNesting)
        },
        junitReporter: {
            outputDir: 'test/xml-reports/TESTS-*.xml'
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true,
        concurrency: Infinity
    })
};