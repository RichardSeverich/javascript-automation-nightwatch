module.exports = {

    //Build Verification Testing
    tags: ["Smoke", "BVT"],

    before : function (browser) {
        browser.maximizeWindow();
        // Pages
		google = browser.page.page_google();
        // Sections
    },

    "Test 1: Verify google title": function () {
        google
            .navigate()
            .verifyTitle();
    },

    "Test 2: Verify search button' section": function () {
        google.search("Nighwatch");
    },

    after : function (browser) {
        browser
            .pause(EXPLICIT_WAIT_FIVE_SECONDS)
            .end();
    }
};
