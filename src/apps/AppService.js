(function() {
    'use strict';
    angular.module('apps').service('appService', ['$q', AppService]);

    function AppService($q) {
        var apps = [
            {
                name: 'HUDdle<sup class="legal-sup">BETA</sup>',
                icon: 'ic-huddle',
                color: "#2196F3",
                colorLight: "#6AB8F7",
                colorDark: "#064271",
                description: 'HUDdle: Head Up Display for all cars. Information on your windshield',
                fullDescription: 'HUDdle is an app to put a digital Head Up Display (HUD) in any car: new or old.<br><br>Features:<ul><li>Fully customisable modular layout</li><li>Multiple modules (see below for current list)</li><li>Navigation detection notification</li></ul>Available Modules:<ul><li>Altimeter</li><li>Average trip speed</li><li>Battery percentage</li><li>Clock (digital)</li><li>Elapsed time</li><li>GPS accuracy</li><li>Maximum trip speed</li><li>Navigation distance<sup class="legal-sup">1</sup></li><li>Navigation icon<sup class="legal-sup">1</sup></li><li>Speedometer (digital)</li><li>Trip speed graph</li></ul>Subscription includes:<ol><li>Removes all ads</li><li>Removes 3 custom layout limit</li></ol>',
                legal: '<sup class="legal-sup">1</sup> Requires Google Maps',
                google: 'https://play.google.com/store/apps/details?id=co.aquaapps.huddle',
                amazon: 'https://www.amazon.com/AQUA-Apps-HUDdle/dp/B01LXBSRO6'
            },
            {
                name: 'Learn Basic Latin',
                icon: 'ic-latin',
                color: "#B41F23",
                colorLight: "#DE4145",
                colorDark: "#711316",
                description: 'Learn the basics of Latin grammar: questions, conjugations, declensions and more',
                fullDescription: 'Learn basic Latin! This app gives you the opportunity to learn the way Latin grammar works. With this skill, learning other languages such as Spanish, French, Italian and many others will become easier!<br><br>This course includes Latin grammar notes which include the 1st, 2nd and 3rd declension and all 4 conjugations.<br><br>Over 30 grammar notes included. Conjugate verbs easily with the conjugator tool',
                legal: '',
                google: 'https://play.google.com/store/apps/details?id=com.mra.one.free',
                amazon: 'http://www.amazon.com/AQUA-Apps-Learn-Basic-Latin/dp/B00E7QVRZA/'
            },
            {
                name: 'Convert',
                icon: 'ic-convert',
                color: "#469E4A",
                colorLight: "#71C074",
                colorDark: "#285A2A",
                description: 'Need a simple to use and lightweight unit converter? Download Convert now!',
                fullDescription: 'Need a simple to use and lightweight unit converter? Download Convert now! This Material Design app has over 20 converters with more to come soon<ul><li>Over 20 converters in 6 categories (basic, digital, electricity, engineering, waves, other)</li><li>Search through converters</li><li>Auto detect (beta<sup class="legal-sup">1</sup>): don\'t know exactly what unit you want to convert? Type it into auto detect, and let the app figure it out!</li><li>Text replace<sup class="legal-sup">2</sup>: when you\'re browsing the web, or having a conversation, simply highlight the text you want to convert, and press "Convert." If it\'s in an editable text field, you can even replace the text with the converted units. Never leave an app to convert a unit again</li><li>Material design</li><li>Tablet UI</li></ul>',
                legal: '<sup class="legal-sup">1</sup> This feature is currently being tested, and the reliability of detecting units cannot be guaranteed<br><sup class="legal-sup">2</sup> Available on Android 6.0 (Marshmallow) or newer',
                google: 'https://play.google.com/store/apps/details?id=co.aquaapps.convert',
                amazon: 'http://www.amazon.com/AQUA-Apps-Convert/dp/B01CMHECXY/'
            },
            {
                name: 'Squash',
                icon: 'ic-squash',
                color: "#FB8E25",
                colorLight: "#FCB570",
                colorDark: "#814002",
                description: 'Search for squash players in New Zealand and view their points, grade and matches',
                fullDescription: 'This is an Android™ app for viewing information for squash players and matches in New Zealand<ul><li>Search for players</li><li>View matches</li><li>Points calculator</li><li>Watchlist</li></ul>',
                legal: '',
                google: 'https://play.google.com/store/apps/details?id=com.aqualabs.isquash',
                amazon: ''
            }
        ];
        return { loadAllApps : function() { return $q.when(apps); } };
    }
})();
