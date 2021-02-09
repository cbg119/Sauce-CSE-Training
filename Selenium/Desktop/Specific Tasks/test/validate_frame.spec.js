describe("Nested Frames", function() {
    it("Right frame", function() {
        browser.url("/nested_frames")

        browser.switchToFrame($("//frame[@name='frame-top']"))
        browser.switchToFrame($("//frame[@name='frame-right']"))
        expect($("body")).toHaveTextContaining("RIGHT")
    })
})