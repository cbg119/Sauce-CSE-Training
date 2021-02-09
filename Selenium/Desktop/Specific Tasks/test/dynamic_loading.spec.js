describe("Specific Task - Dynamic Loading", function() {
    it("Dynamic Loading Test", function() {
        browser.url("/dynamic_loading/1")

        $("#start button").click()
        $("#finish h4").waitForDisplayed({ timeout: 6000 })
    })
})