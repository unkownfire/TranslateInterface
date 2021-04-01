const express = require('express');
const path = require('path');
const request = require('request');
const cors = require('cors');
const app = express();
var bodyParser = require('body-parser')

app.options('*', cors()) // include before other routes
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/TranslateInterface'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/TranslateInterface/index.html'));
});

app.listen(process.env.PORT || 8080);

app.post('/api/translate', async function(req,res) {
  console.log(req.body);
  const options = {
    method: 'POST',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'accept-encoding': 'application/gzip',
      'x-rapidapi-key': 'b4f13165e9msh89f449e981ab866p187fb8jsn0734473c9a31',
      'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
      useQueryString: true
    },
    form: {q: req.body.q, source: req.body.source, target: req.body.target}
  };
  var tBody = ""
  request(options, function (error, response, body) {
	   if (error) throw new Error(error);
      res.set('Access-Control-Allow-Origin', 'http://localhost:4200')
	    console.log(body);
      res.send(body);
  });
  //
  //console.log(tBody);
  //res.send(tBody);
});
