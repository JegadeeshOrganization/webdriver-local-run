const { describe } = require("mocha");
var assert = require('assert');
const { Builder, By, Capabilities, until, Key } = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");
let webCapabilities = require('../../config/web.config').capabilities;
const utilFunction = require('../../utils');

let driver;

async function setUp(cap) {
    driver = await new webdriver.Builder()
        .usingServer('http://kavinraj_Mg48Y2:DLy2ZKiscAhc5dDmszhx@hub-cloud.browserstack.com/wd/hub')
        .withCapabilities({
            ...cap,
        })
        .build();
        console.log(cap,"==========cap========")
    utilFunction.driver = driver;
    
}
describe('Test suite - 2', () => {

  
    afterEach(async function () {
        if (this.currentTest.state == 'failed') {
            await utilFunction.testFailure("Test case" + this.currentTest.title + "Failed")
        }
        else if (this.currentTest.state == 'passed') {
            await utilFunction.testSuccess("Test case" + this.currentTest.title + "Passed")
        }
    })
    webCapabilities.forEach(function (capability) {

        it('Test suite 2 - case-2', async function () {
            await setUp(capability)
            await driver.get('https://www.amazon.in/');
            await driver.quit();
        })

    })

})
