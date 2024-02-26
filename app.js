const { Builder, until, By } = require("selenium-webdriver");
const assert = require('assert')


const example = async () => {
  let driver = new Builder().forBrowser("chrome").build();
  driver.manage().window().maximize();
  await driver.get("https://filemasterdev.enerlex.com/")
    await driver.manage().window().setRect({ width: 1202, height: 816 })
    await driver.findElement(By.name("userid")).click()
    await driver.findElement(By.name("userid")).sendKeys("uma_buyer")
    await driver.findElement(By.name("password")).click()
    await driver.findElement(By.name("password")).sendKeys("9i8pkGtrYP96M6zXBs9D")
    await driver.findElement(By.name("submit")).click()
    assert(await driver.findElement(By.css(".statcard-success:nth-child(2) > .statcard-number")).getText() == "1")
    assert(await driver.findElement(By.css(".statcard-danger:nth-child(2) > .statcard-number")).getText() == "3")
    assert(await driver.findElement(By.css(".statcard-warning:nth-child(2) > .statcard-number")).getText() == "30")
    await driver.findElement(By.linkText("New File")).click()
    await driver.findElement(By.id("filename")).sendKeys("Test")
    await driver.findElement(By.id("origin")).click()
    await driver.findElement(By.id("origin")).sendKeys("test")
    await driver.findElement(By.id("startdt")).click()
    await driver.findElement(By.css("tr:nth-child(3) > .day:nth-child(3)")).click()
    await driver.findElement(By.id("legalcounty")).click()
    await driver.findElement(By.id("legalcounty")).sendKeys("test")
    await driver.findElement(By.id("legalstate")).click()
    await driver.findElement(By.id("legalstate")).sendKeys("test")
    await driver.findElement(By.id("mmsuspamt")).click()
    await driver.findElement(By.id("mmsuspamt")).sendKeys("015")
    await driver.findElement(By.id("MMComment")).click()
    await driver.findElement(By.id("MMComment")).sendKeys("test")
    await driver.findElement(By.id("OnlineResearchDt")).click()
    await driver.findElement(By.css("tr:nth-child(4) > .day:nth-child(3)")).click()
    await driver.findElement(By.id("relationship")).click()
    await driver.findElement(By.id("relationship")).sendKeys("Self")
    await driver.findElement(By.id("ownership")).click()
    await driver.findElement(By.id("ownership")).sendKeys("25")
    await driver.findElement(By.id("lastname")).click()
    await driver.findElement(By.id("lastname")).sendKeys("M")
    await driver.findElement(By.id("firstname")).click()
    await driver.findElement(By.id("firstname")).sendKeys("U")
    await driver.findElement(By.id("filestatus")).click()
    // {
    //   const dropdown = await driver.findElement(By.id("filestatus"))
    //   await dropdown.findElement(By.xpath("//option[. = 'Litigation']")).click()
    // }
    await driver.findElement(By.id("returnedto")).click()
    // {
    //   const dropdown = await driver.findElement(By.id("returnedto"))
    //   await dropdown.findElement(By.xpath("//option[. = 'Steve']")).click()
    // }
    await driver.findElement(By.id("altname")).click()
    await driver.findElement(By.id("altname")).sendKeys("test")
    await driver.findElement(By.id("ssn")).click()
    await driver.findElement(By.id("ssn")).sendKeys("test")
    await driver.findElement(By.id("decdt")).click()
    await driver.findElement(By.id("decdt")).sendKeys("test")
    await driver.findElement(By.id("dob")).click()
    await driver.findElement(By.id("dob")).sendKeys("test")
    await driver.findElement(By.id("address")).click()
    await driver.findElement(By.id("address")).sendKeys("test")
    await driver.findElement(By.id("city")).click()
    await driver.findElement(By.id("city")).sendKeys("USA")
    await driver.findElement(By.id("state")).click()
    // {
    //   const dropdown = await driver.findElement(By.id("state"))
    //   await dropdown.findElement(By.xpath("//option[. = 'IL - Illinois']")).click()
    // }
    await driver.findElement(By.id("zip")).click()
    await driver.findElement(By.id("zip")).sendKeys("673469")
    await driver.findElement(By.id("areacode")).click()
    await driver.findElement(By.id("areacode")).sendKeys("111")
    await driver.findElement(By.id("prefix")).sendKeys("111")
    await driver.findElement(By.id("phoneno")).sendKeys("1111")
    await driver.findElement(By.id("phonedesc")).click()
    // {
    //   const dropdown = await driver.findElement(By.id("phonedesc"))
    //   await dropdown.findElement(By.xpath("//option[. = 'Relative']")).click()
    // }
    await driver.findElement(By.id("emailcontact")).click()
    await driver.findElement(By.id("emailcontact")).sendKeys("test")
    await driver.findElement(By.name("searchFor")).click()
    await driver.findElement(By.name("searchFor")).sendKeys("718-375-2652")
    await driver.findElement(By.css(".btn-outline-success")).click()
    await driver.findElement(By.linkText("Chadwick, Albert A. - FAKE")).click()
    await driver.findElement(By.linkText("Geri Sima")).click()
    await driver.findElement(By.linkText("Go to File View (without saving)")).click()
    await driver.findElement(By.linkText("Show family tree")).click()
    assert(await driver.findElement(By.css(".title")).getText() == "Albert A.")
    await driver.findElement(By.linkText("Log Out")).click()
  await driver.sleep(10000);

  console.log("==============");

  await driver.quit();
};

example();
