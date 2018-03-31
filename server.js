const express = require('express');

const app = express();


app.use(
    express.static(__dirname + '/dist')
);


app.listen(3000, function () {
    console.log('express server is up on 3000')
});