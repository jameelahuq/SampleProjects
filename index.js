#!/user/bin/env node
'use strict';

var cheerio = require('cheerio');
var request = require('request');

var TPB_URL = 'https://thepirate.la/top/207'; //the url we're scrapping

request(TPB_URL, function(err, resp, body) {
  if (err || resp.statusCode !== 200) {
    throw new Error("Couldn't reach thepiarebay...It might be down :(");
  }

  console.log('Top 100 Movies from the PirateBay');
  console.log('----------------------------------\n');

  var $ = cheerio.load(body);
  $('#content .detName a').each(function(index, element) {
    console.log(index, $(this).text());
  });
});