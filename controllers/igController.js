var request = require('request');
const clientId = 'f03b6b02c0a243afb3f5e67a6c1ec1a6';

exports.get_media = function(req, res) {
	//?max_id=[MAX_ID]
	request(`https://www.instagram.com/${req.body.user}/media/?size=L`, function(error, response, body) {
		var json = JSON.stringify(body);
		res.json(body);
	});
};

exports.analyze_media = function(req, res) {
	//todo
};