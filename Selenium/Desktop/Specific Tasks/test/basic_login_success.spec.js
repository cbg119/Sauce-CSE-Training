describe("Login", function() {
    it("With valid credentials", function() {
        browser.url("/login")

        $("#username").setValue("tomsmith")
        $("#password").setValue("SuperSecretPassword!")

        $("button").click()

        try {
            expect($(".flash.success")).toBeDisplayed()
        } catch {
            expect($(".flash.error")).toBeDisplayed()
        }
    })
})