'use strict';

const NAME = 'Denis';

function say(phrase) {
    switch (phrase.toLowerCase()) {
        case 'hi':
        case 'bye':
            return phrase + ', ' + NAME + '!';
        default:
            return 'Have a nice day!';
    }
}

say('Hi');
