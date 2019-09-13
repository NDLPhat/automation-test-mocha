exports.config = {
    specs: [
        "./test_script/openPage.mocha.js"
    ],
    hostname: "localhost",
    port: 9515,
    path: "/",
    capabilities: [
        {
            browserName: 'chrome' // options: `firefox`, `chrome`, `opera`, `safari`
            // browserVersion: '27.0', // browser version
            // platformName: 'Windows 10' // OS platform
        }
    ],
    framework: "mocha",
    mochaOpts: {
        // ui: "bdd",
        timeout: 600000
    },
    logLevel: "debug"
}