var express = require('express')
var app = express()


var bodyParser = require('body-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const SERVER_PORT = process.env.PORT || 3000;
const MAX_LENGTH_WORD = 10;

app.use(express.static(path.join(__dirname, 'frontend')));


app.post('/getWordLengthFrequency', function (req, res) {
    console.log("\npost requested received with data: ");

    // data from client
    var data = req.body.data;

    console.log(data);

    // create array with 0's
    var result = new Array(MAX_LENGTH_WORD);
    result.fill(0);

    // split all words and store into array
    const words = data.split(" ");

    // loop through all words
    for (var j = 0; j < words.length; j++) {

        // current selected word
        var word = words[j];
        // current word length
        var wordLength = word.length;
        // index of the wordlength is the length - 1
        var index = wordLength - 1;

        // check if word length is below the max length
        if (wordLength <= MAX_LENGTH_WORD) {
            // count of amount of words of the specified length
            var count = result[index];
            // update count with new word length
            result[index] = count + 1;
        }
    }

    // convert result into string
    var resultStr = "";
    for (var i = 0; i < MAX_LENGTH_WORD; i++) {
        resultStr = resultStr + result[i] + " ";
    }

    // send result to client
    console.log("\nsending response:");
    console.log(resultStr);
    res.send(resultStr);
    res.end();
})

app.listen(SERVER_PORT, () => {
    console.log("Server listening on port: " + SERVER_PORT);
})