const { Builder, By } = require("selenium-webdriver")
const assert = require("assert")

//describe() is used for a grouping of tests
describe("CSE Onboarding", function() {
    let driver
    this.timeout(30000)

    //beforeEach() is like the name implies: it is ran before each test case, or it()
    beforeEach(async function() {
        //This creates the driver object, specifically for the chrome browser.
        //This returned driver object is our interface for automating the browser.
        //We await this to, well, wait for the driver creation to finish
        driver = await new Builder().forBrowser("chrome").build()
    })

    //afterEach() is like the name implies: it is ran after each test case, or it()
    afterEach(async function() {
        //To ensure that our session is cleaned up, we must quit the driver
        await driver.quit()
    })

    //it() is used to define individual test cases. Generally,
    //you should only be testing one piece of functionality
    //per it()
    it("Basic Desktop Test", async function() {
        //The get() function is used to visit your URL
        await driver.get("http://the-internet.herokuapp.com/login")

        /*
        * There's a lot to unpack here.
        *
        * findElement() is used to, well, find elements. We find the elemented using a locator.
        * 
        * A locator can be many things - CSS selector, id, name, etc. We use the extracted By
        * class to clarify how we are using a locator. In this instance, we are finding an element
        * using By.id. This returns an element object, which we store in the user_field variable.
        * 
        * Here we use the element class's sendKeys() function to enter text in a field.
        */
        let user_field = driver.findElement(By.id("username"))
        await user_field.sendKeys("tomsmith")

        //Here we do the same thing as above
        let pass_field = driver.findElement(By.id("password"))
        await pass_field.sendKeys("SuperSecretPassword!")

        //Unfortunately the submit button does not have an id. However, the parent form, does.
        //The parent's unique ID is "login". We can specify the button inside of this like below:
        let submit_button = driver.findElement(By.css("#login button"))
        //We then click that button using click()
        await submit_button.click()

        //To ensure what we expect to see after a successful login is actually there,
        //we use an assertion. What might we expect to see after a successful website login?
        assert(await driver.findElement(By.css(".flash.success")).isDisplayed(), "Errror! Success Banner not found!")
    })
})