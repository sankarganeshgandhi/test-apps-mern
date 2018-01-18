const _PORT_ = 8080;

const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send({ hi: 'there' });
});

var serverPort = process.env.PORT || _PORT_;
app.listen(serverPort);
console.log("server has been started at port #" + serverPort);
