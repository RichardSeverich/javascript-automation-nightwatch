module.exports = {
    url: function getUrl () {
        return ("https://www.google.com/");
    },
    elements: {
        title: { 
            selector: "title" 
        },
        input_search: { 
            selector: "div[jscontroller='iDPoPb'] input" 
        },
        button_search: { 
            selector: "div[class='iblpc'] svg" 
        }        
    },
    commands: [{
        verifyTitle: function () {
            return this
                .waitForElementPresent("@title", EXPLICIT_WAIT_THIRTY_SECONDS)
                .assert.title("Google");
        },

        search: function (search_criteria) {
            return this
                .waitForElementVisible("@input_search", EXPLICIT_WAIT_THREE_SECONDS)
                .setValue("@input_search", search_criteria)
                .click("@button_search");
        },

        verifyTitleFail: function () {
            return this
                .waitForElementPresent("@title", EXPLICIT_WAIT_THREE_SECONDS)
                .assert.title("Nighwatch");
        }
    }]
};
