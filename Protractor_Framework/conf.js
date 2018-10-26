exports.config = {

    // setting to launch tests directly without selenium server
    directConnect: false,
    // address of running selenium server
    seleniumAddress: 'http://localhost:4444/wd/hub',

    onPrepare: function () {
        global.elem = browser.driver;
        browser.ignoreSynchronization = true;
    },

    baseUrl:'http://localhost.com',

    // setting time outs
    getPageTimeOut: 200000,
    allScriptsTimeout: 500000,

    // setting framework
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // setting protractor to ignore uncaught exceptions to take care by protractor-cucumber-framework
    ignoreUncaughtExceptions: true,

    // configuration parameters
    params: {
        testEnv: 'test'
    },

    // browser to launch tests
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--disable-extensions',]
            //args: ["--headless", "--disable-gpu", "--window-size=800x600"]
        }
    },

    // Specify Test Files
    //
    // Define which tests should execute
    specs: [
        'folders/features/InviteUser.feature'
    ],

    //Define which tests should be excluded from execution.
    exclude: [
        // './features/search.feature'
    ],

    // Set log level and enables colors for log output
    logLevel: 'verbose',
    coloredLogs: true,

    SELENIUM_PROMISE_MANAGER: false,

    // arguments to cucumber.js
    cucumberOpts: {
        require: [
            'folders/support/env.js',
            'folders/support/hooks.js',
            'folders/step_definitions/*.js'
        ],
        tags: false,
        format: 'pretty',
        profile: false,
        'no-source': true
    }

};
