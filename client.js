const axios = require('axios');

const data = {
    data: 'O Hi this a test Car River Deer Car Bear and'
};

var wordTable = new Array();

axios.post('https://intense-mesa-63125.herokuapp.com/getWordLengthFrequency', data)
    .then((res) => {
        const words = res.data.split(" ");

        // loop through all words
        for (var j = 0; j < (words.length - 1); j++) {
            // current selected word length
            var count = words[j];
            var wordLength = j + 1;

            // declare new Word and add to array
            wordTable[j] = new Word(wordLength, count);
        }

        // show results
        console.log(" ")
        console.log(data);
        console.log("response from server: " + res.data);
        console.table(wordTable);

    }).catch((err) => {
        console.error(err);
    });

// each Word has a length and count
function Word(wordLength, count) {
    this.wordLength = wordLength;
    this.count = count;
}