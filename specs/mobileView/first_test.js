const { describe } = require("mocha");
var assert = require('assert');
const { Builder, By, Capabilities, until, Key } = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");
let mobCapabilities = require('../../config/mob.config').mobCapabilities;
const utilFunction = require('../../utils');

let driver;

async function setUp(cap) {
    console.log(mobCapabilities,"========",cap)
    // cap['name'] = this.currentTest.title;
    driver = await new webdriver.Builder()
        .usingServer('http://kavinraj_Mg48Y2:DLy2ZKiscAhc5dDmszhx@hub-cloud.browserstack.com/wd/hub')
        .withCapabilities({
            ...cap       })
        .build();
    utilFunction.driver = driver;
    
}
describe('Mobile Filemaster application', () => {

    mobCapabilities.forEach(function (capability) {

        it('Mobile Test case-1', async function () {
            await setUp(capability)
            await driver.get('https://filemasterdev.enerlex.com');
            await driver.wait(until.elementLocated(By.xpath('//*[@name="userid"]'))).sendKeys('uma_buyer');
            await driver.wait(until.elementLocated(By.xpath('//*[@name="password"]'))).sendKeys('9i8pkGtrYP96M6zXBs9D');
            await driver.wait(until.elementLocated(By.xpath('//*[@name="submit"]'))).click();
            
        })

    })

})
