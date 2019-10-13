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
        verify_title: function (search_criteria) {
            return this
                .waitForElementVisible("@title", EXPLICIT_WAIT_THIRTY_SECONDS)
                .expect.element("@title").text.to.equal("Google");
        },
        search: function (search_criteria) {
            return this
                .waitForElementVisible("@input_search", EXPLICIT_WAIT_THREE_SECONDS)
                .setValue("@input_search", "nightwatch")
                .click("@button_search");
        }
    }]
};
