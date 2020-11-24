/* You can add plugins here...below is just a sample plugin for helping Cypress tests in Chrome not encounter connection errors
module.exports = (on, config) => {
    on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeadless) {
            launchOptions.args.push('--disable-gpu');
            return launchOptions
        }
    });
}*/