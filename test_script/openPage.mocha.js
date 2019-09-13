const assert = require('assert');
describe("API Command", function(){
    it("Open Page", function(){
        // Coding 

        // navigate to google.com
        browser.url("https://google.com");


        const title = browser.getTitle();
        console.log(title, "<==")
        // assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
        // pause 3s
        // browser.pause(3000);

        
    })
})