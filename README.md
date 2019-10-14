


# Nightwatch
Nightwatch is an automated testing framework for web applications and websites, written in Node.js and using the W3C WebDriver API (formerly Selenium WebDriver. It is a complete browser (End-to-End) testing solution which aims to simplify the process of setting up Continuous Integration and writing automated tests.

## Prerequisites 🚀

1. Install Windows 10    
2. Install Node.js version 8.9.4.
3. Install Java Development Kit (Java 8).
4. Install IExplorer version 11 of x64bits.
5. Install git version 2.15.1.
6. Install Google Chrome 73.0.3683.86_chrome_installer 32 bits
   In this repositorie there is a installer: javascript-automation-nighwatch/installers/googlechrome/73.0.3683.86_chrome_installer 32 bits.exe

## Installation 🔧

1. Clone Repository: https://github.com/RichardSeverich/javascript-automation-nighwatch.git
2. Install Dependencies: npm install.

## Configuration ⚙️

1. Google Chrome
```
Disable Google Updates
*  Go to Windows start
*  Go to Run
*  Write services.msc
*  Write services.msc in the search box.
*  A list of the system services should appears.
*  In the list we have to search and disable the following services:
   Google Update Service (gupdate)
   Google Update Service (gupdatem)
* To disable the services we right click on them and stop them.
* If they are running Then we right click again and go to Properties.
* Then on the Startup type field, we select the option «Disabled«.
* In case there is any more Google Update service, we also disable it.
```
2. Firefox
```
Disable Firefox updates
* Select the “Menu” Menu Button button in the upper-right corner, then choose “Options“.
* Select “General” on the left panel.
* Scroll down to the “Firefox Updates” section.
* Select one of the following options as desired:
   Automatically install updates
   Check for updates, but let me choose whether to install them
   Never check for updates
* Check or uncheck the “Use a background service to install updates” option as desired.
```
3. Firefox
```
 Go the following page: https://heliumhq.com/docs/internet_explorer
```

4. Information about dependencies
    "chromedriver": "73.0.0" -> chromedriver 73.0.0  (Support Chrome73)
    "geckodriver": "1.11.0"  -> geckodriver  v0.20.0 (Support Firefox55-62)
    "iedriver": "3.14.0"      -> iedriver  3.14.0 (Support IE11)
    "nightwatch": "1.2.4"
    "selenium-server": "3.141.59" -> selenium-server Version: 3.141.59

## Usage (Execute Tests) ⚡️

1. Execute all tests: npm test
    
## Contributing 🖇️

1. Fork it!
2. Create your feature branch: `git checkout -b issue/001`
3. Commit your changes: `git commit -m '001: Add some feature'`
4. Push to the branch: `git push origin issue/001`
5. Submit a pull request.

## Credits ✒️

Richard Severich.

## License 📄
* Copyright (c) 2019 by Richard Severich, Inc.  All Rights Reserved.
* This software is the confidential and proprietary information of
* Richard Severich, Inc. ("Confidential Information").
* You may not disclose such Confidential Information, and may only
* use such Confidential Information in accordance with the terms of
* the license agreement you entered into with Richard Severich.
