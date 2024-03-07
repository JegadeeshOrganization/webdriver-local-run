let driver;

async function testSuccess(){
    this.driver.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed"}}'); 

}
async function testFailure(){
    this.driver.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed"}}'); 

}

module.exports={
    testSuccess,
    testFailure,
    driver
}