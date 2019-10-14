var HtmlReporter = require("nightwatch-html-reporter");

// Generate Date
var dateobj = new Date();
var month = dateobj.getMonth() + 1;
var day = dateobj.getDate();
var year = dateobj.getFullYear();
var hour = dateobj.getHours();
var minutes = dateobj.getMinutes();
var seconds = dateobj.getSeconds();
var time = hour  + "" + minutes + "" + seconds;
var datetime = day + "-" + month + "-" + year + "-" + time;

var reporter = new HtmlReporter({
    /* True or False.  If true the generated html will be opened in your browser after the test run. */
    openBrowser: false,

    /* The directory you've set nightwatch to store your reports. On the CLI this determines where we 
    read reports from, but on this interface it determines where the generated report will be saved. */
    reportsDirectory: __dirname + "/reports/",

    /* Boolean.  If true we append the last suite name tothe report filename. */
    separateReportPerSuite: false,

    /* The filename that the html report will be saved as. */
    reportFilename: "Report-" + datetime + ".html",

    /* The theme that will be used to generate the html report. This should match a directory under the lib/themes directory. */
    themeName: "default",

    /* Relative path to custom theme. When this is given, `themeName` will be ignored. */
    //customTheme: 'relative/path/to/theme.pug',

    /* If true then only errors will be shown in the report. */
    hideSuccess: false,

    /* If true we append a times tamp to the end of the generated report filename */
    uniqueFilename: false,

    /* If true we convert screen shot paths from absolute paths to relative to output file. */
    relativeScreenshots: true
});
module.exports = {
    write : function (results, options, done) {
        reporter.fn(results, done);
    }
}
