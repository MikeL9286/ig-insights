var express = require('express');
var bodyParser = require('body-parser');
var toneController = require(__dirname + '/controllers/toneController');
var igController = require(__dirname + '/controllers/igController');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.post('/analyze-tone', function(request, response) {
  toneController.analyze_tone(request, response);
});

app.post('/get-media', function(request, response) {
  igController.get_media(request, response);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});