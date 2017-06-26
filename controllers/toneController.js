var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

exports.analyze_tone = function(req, res) {
  var tone_analyzer = new ToneAnalyzerV3({
    username: '6fcf60e6-d356-4aca-a829-5a9b6dcf9acd',
    password: '8rFAIsedQX7H',
    version_date: '2016-05-19'
  });

  var params = {
    text: req.body.text,
    tones: 'emotion'
  };

  tone_analyzer.tone(params, function(error, response) {
    if (error) {
      res.send(error);
    }
    else {
      map(response);
      var json = JSON.stringify(response);
      res.json(json);
    }
  });
};

var map = function(response) {
  response.document_tone.tone_categories.forEach(function(category) {
    sortTonesByRank(category.tones)
  });
  
  response.sentences_tone.forEach(function(sentance) {
    sentance.tone_categories.forEach(function(category) {
      sortTonesByRank(category.tones);
    });
  });
};

var sortTonesByRank = function(tones){
  tones.sort(function(toneA, toneB) {
    return toneB.score - toneA.score;
  });
};