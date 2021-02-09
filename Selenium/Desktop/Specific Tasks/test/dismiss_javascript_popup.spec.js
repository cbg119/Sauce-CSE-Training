let isAlertPresent = () => {
    try {
        return (browser.getAlertText() != null)
    } catch { return false };
}

describe("Dismiss JS Alert", function() {
    it("Chrome", function() {
        browser.url("/javascript_alerts")

        $("button[onclick='jsAlert()']").click()
        expect(isAlertPresent()).toBeTruthy()

        browser.dismissAlert()

        expect(isAlertPresent()).toBeFalsy()
    })
})