


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
Disable Google Updater services
We must run the services.msc utility to see the list of system services.
To do this we go to Start -> Run and write services.msc.
In modern versions of windows, we simply go to the start menu and write
services.msc in the search box.

A list of the system services appears.
In the list we have to search and disable the following services:

Google Update Service (gupdate)

Google Update Service (gupdatem)

To disable the services we right click on them and stop them
if they are running Then we right click again and go to Properties.
In the Startup type field, we select the option «Disabled«.
In case there is any more Google Update service, we also disable it.

## Usage (Execute Tests) ⚡️

1. npm test                      : Execute all tests.
    
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
