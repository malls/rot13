(function() {
    'use strict';

    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var dictionary = {};

    //make a dictionary with each letter offset by 13
    var i = 13;
    while (i--) {
        dictionary[alphabet[i]] = alphabet[i + 13];
        dictionary[alphabet[i + 13]] = alphabet[i];
        dictionary[alphabet[i].toUpperCase()] = alphabet[i + 13].toUpperCase();
        dictionary[alphabet[i + 13].toUpperCase()] = alphabet[i].toUpperCase();
    }

    // given a string, return a new string with each letter replaced by its partner in the dictionary
    function rot13(str) {
        var newStr = '';
        for (var y = 0; y < str.length; y++) {
            if (dictionary[str[y]]) {
                newStr += dictionary[str[y]];
            } else {
                newStr += str[y];
            }
        }
        return newStr;
    }

    //browser or node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = rot13;
    } else if (typeof window !== 'undefined') {
        window.rot13 = rot13;
    }

})();