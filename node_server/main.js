var http = require('http');
var request = require('request');

var PORT = 8000;

var server = http.createServer(function(req, res){
  console.log('\n');
  console.log(new Date());
  console.log("url:", req.url);
  console.log("method:", req.method);
  console.log("statusCode:", req.statusCode);
  //console.log("statusMessage:", req.statusMessage);

  switch(req.url) {
    case '/weather':
      request('http://api.wunderground.com/api/3a5cfa6be0748f06/conditions/q/IL/Crystal_Lake.json', function(error, response, body){
          console.log('error: ', error);
          console.log('response: ', Object.keys(response));
          console.log('body: ', body);

          res.end();
      });
      break;
    case '/users':
    {
      res.statusCode = 404;
      res.write('<h1 style="color: mediumpurple">Nope</h1>');
      res.end("no data here:(");
      break;
    }
      case '/redirect':
      res.writeHead(302, {
        'Location': 'DARKSIDE'
      });
      //response.end('<body style="background-color: mediumpurple"></body>');
      break;
      default :
          //puts this HTML on the page providing no other response is viable
      res.end("It's THE DEFAULT!");
  }
  res.end("some text!");
  //console.log("response:", response);
});

server.listen(PORT, function() {
  //listen is an asynchronous method, it takes time to load
  //writing stuff below it means it might fire before this does
  console.log("inside listener");
});



console.log('end of file');
