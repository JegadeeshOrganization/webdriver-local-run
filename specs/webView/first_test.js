const { describe } = require("mocha");
var assert = require('assert');
const { Builder, By, Capabilities, until, Key } = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");
let webCapabilities = require('../../config/web.config').capabilities;
const utilFunction = require('../../utils');

let driver;
async function setUp(cap) {
    // console.log(webCapabilities,"========")
    // webCapabilities['name'] = this.currentTest.title;
    driver = await new webdriver.Builder()
        .usingServer('http://kavinraj_Mg48Y2:DLy2ZKiscAhc5dDmszhx@hub-cloud.browserstack.com/wd/hub')
        .withCapabilities({
            ...cap,
        })
        .build();
        // console.log(cap,"==========cap========")
    utilFunction.driver = driver;
    
}
describe('Filemaster application', () => {

  
    afterEach(async function () {
        if (this.currentTest.state == 'failed') {
            await utilFunction.testFailure("Test case" + this.currentTest.title + "Failed")
        }
        else if (this.currentTest.state == 'passed') {
            await utilFunction.testSuccess("Test case" + this.currentTest.title + "Passed")
        }
    })
    webCapabilities.forEach(function (capability) {

        it('Test case-1', async function () {
            await setUp(capability)
                await driver.get('https://filemasterdev.enerlex.com');
                await driver.wait(until.elementLocated(By.xpath('//*[@name="userid"]'))).sendKeys('uma_buyer');
                await driver.wait(until.elementLocated(By.xpath('//*[@name="password"]'))).sendKeys('9i8pkGtrYP96M6zXBs9D');
                await driver.wait(until.elementLocated(By.xpath('//*[@name="submit"]'))).click();

                const readyForOfferElement = await driver.wait(until.elementLocated(By.xpath("//*[text()='Ready for Offer']/preceding::h3[1]"))).getText();
                assert.equal(0, readyForOfferElement)

                const fileReview = await driver.wait(until.elementLocated(By.xpath("//*[text()='File Review']/preceding::h3[1]"))).getText();
                assert.equal(0, fileReview)

                const myTasks = await driver.wait(until.elementLocated(By.xpath("//*[text()='My Tasks']/preceding::h3[1]"))).getText();
                assert.equal(0, myTasks)

                const tasks = await driver.wait(until.elementLocated(By.xpath("//*[text()=' Tasks']/preceding::h3[1]"))).getText();
                assert.equal(0, tasks)

                const checkedOut = await driver.wait(until.elementLocated(By.xpath("//*[text()='Checked Out']/preceding::h3[1]"))).getText();
                assert.equal(3, checkedOut)

                const urgentTasks = await driver.wait(until.elementLocated(By.xpath("//*[text()='Urgent Tasks']/preceding::h3[1]"))).getText();
                assert.equal(0, urgentTasks)

                const deedsPending = await driver.wait(until.elementLocated(By.xpath("//*[text()='Deeds Pending']/preceding::h3[1]"))).getText();
                assert.equal(31, deedsPending)

                const offerToSend = await driver.wait(until.elementLocated(By.xpath("//*[text()='Offers to Send']/preceding::h3[1]"))).getText();
                assert.equal(11, offerToSend)

                const unreceivedRequest = await driver.wait(until.elementLocated(By.xpath("//*[text()='Unreceived Requests']/preceding::h3[1]"))).getText();
                assert.equal(18, unreceivedRequest)

                await driver.wait(until.elementLocated(By.xpath('//*[text()=" New File"]'))).click();
                await driver.wait(until.elementLocated(By.xpath('//*[@id="filename"]'))).sendKeys('Test');
                await driver.wait(until.elementLocated(By.xpath('//*[@id="origin"]'))).sendKeys('Test');
                await driver.wait(until.elementLocated(By.xpath('//*[@id="startdt"]'))).sendKeys('02/07/2024');
                await driver.wait(until.elementLocated(By.xpath('//*[@id="legalcounty"]'))).sendKeys('Test');
                await driver.wait(until.elementLocated(By.xpath('//*[@id="legalstate"]'))).sendKeys('Test');

                let dropdownState = await driver.findElement(By.id('filestatus'));
                dropdownState.sendKeys('File Review');;

                await driver.wait(until.elementLocated(By.xpath('//*[@id="mmsuspamt"]'))).sendKeys('Test');
                await driver.wait(until.elementLocated(By.xpath('//*[@id="MMComment"]'))).sendKeys('Test');
                await driver.wait(until.elementLocated(By.xpath('//*[@id="relationship"]'))).sendKeys('Test');
                await driver.wait(until.elementLocated(By.xpath('//*[@id="lastname"]'))).sendKeys('Test');
                await driver.wait(until.elementLocated(By.xpath('//*[@id="firstname"]'))).sendKeys('Test');
                await driver.wait(until.elementLocated(By.xpath('//*[@id="altname"]'))).sendKeys('Test');
                await driver.wait(until.elementLocated(By.xpath('//*[@id="decdt"]'))).sendKeys('Test');
                await driver.wait(until.elementLocated(By.xpath('//*[@id="city"]'))).sendKeys('Test');
                await driver.wait(until.elementLocated(By.xpath('//*[@id="ssn"]'))).sendKeys('Test');
                await driver.wait(until.elementLocated(By.xpath('//*[@id="zip"]'))).sendKeys('Test');
                await driver.wait(until.elementLocated(By.xpath('//*[@id="emailcontact"]'))).sendKeys('Test');

                let dropdown = await driver.findElement(By.id('state'));
                dropdown.sendKeys('AL');
                let dropdownReturnTo = await driver.findElement(By.id('returnedto'));
                dropdownReturnTo.sendKeys('Digital ');

                await driver.wait(until.elementLocated(By.xpath('//*[@type="search"]'))).sendKeys('718-375-2652');
                await driver.wait(until.elementLocated(By.xpath('//*[@type="submit"]'))).click();

                const verifyFileName = await driver.wait(until.elementLocated(By.xpath('//*[text()="Chadwick, Albert A. - FAKE"]'))).getText();
                assert.equal('Chadwick, Albert A. - FAKE', verifyFileName)
                const verifyContactName = await driver.wait(until.elementLocated(By.xpath('//*[text()="Mandel, Geri Sima"]'))).getText();
                assert.equal('Mandel, Geri Sima', verifyContactName)
                const verifyBuyerName = await driver.wait(until.elementLocated(By.xpath('//*[text()="Aaron Stoffel"]'))).getText();
                assert.equal('Aaron Stoffel', verifyBuyerName)
                const verifyLegalState = await driver.wait(until.elementLocated(By.xpath('//*[text()="TX"]'))).getText();
                assert.equal('TX', verifyLegalState)
                const verifyPhone = await driver.wait(until.elementLocated(By.xpath('//*[text()="718-375-2652"]'))).getText();
                assert.equal('718-375-2652', verifyPhone)
                await driver.wait(until.elementLocated(By.xpath('//*[text()="Chadwick, Albert A. - FAKE"]'))).click();



                await driver.wait(until.elementLocated(By.xpath('//*[text()="Show family tree "]'))).click();
                const contactName = await driver.wait(until.elementLocated(By.xpath('//*[@class="contact-name"]'))).getText();
                assert.equal('Albert A.', contactName)
                const relationship = await driver.wait(until.elementLocated(By.xpath('//*[@class="content"]'))).getText();
                assert.equal('self', relationship)

            await driver.quit();
        })

    })

})
