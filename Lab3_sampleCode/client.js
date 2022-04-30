const axios = require('axios');

const data = {
    data: 'O Hi this a test Car River Deer Car Bear and'
};

axios.post('http://127.0.0.1:3000/getWordLengthFrequency', data)
    .then((res) => {
        console.log(data);
        console.log(res.data);
    }).catch((err) => {
        console.error(err);
    });



