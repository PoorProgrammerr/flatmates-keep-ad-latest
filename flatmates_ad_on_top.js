// ==UserScript==
// @name         Flatmates Always on top ad
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://replace_it_with_your_ad_link/A12345
// @icon         https://www.google.com/s2/favicons?sz=64&domain=flatmates.com.au
// @grant        none
// ==/UserScript==




(function() {
    'use strict';

    // Select button with class "ButtonBase-sc-8g91a9-0 jREqA styles__activationToggle___Tid0S"
    const button1 = document.querySelector('.ButtonBase-sc-8g91a9-0.jREqA.styles__activationToggle___Tid0S');

    // Click on the button1
    if (button1) {
        button1.click();
        setTimeout(function() {
            // Select button with class "btn btn-small btn-block"
            const button2 = document.querySelector('button.btn.btn-small.btn-block');

            const button3 = document.querySelector('button.btn.btn-small.btn-block');

            // Click on the button2
            if (button2) {
                button2.click();
                setTimeout(function() {
                    // Click on the button2 again
                    if (button3) {
                        button3.click();
                        setTimeout(function() {
                            // Click on the button1 again
                            if (button1) {
                                button1.click();
                                // Sleep for 15 minutes before refreshing the page
                                setTimeout(function() {
                                    location.reload();
                                }, 900000); // 15 minutes in milliseconds
                            }
                        }, 3000); // 3 seconds in milliseconds
                    }
                }, 3000); // 3 seconds in milliseconds
            }
        }, 3000); // 3 seconds in milliseconds
    }
})();
