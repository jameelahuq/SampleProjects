var http = require('http');

var PORT = 8000;

var server = http.createServer(function(request, response){
  console.log('\n');
  console.log(new Date());
  console.log("url:", request.url);
  console.log("method:", request.method);
  console.log("statusCode:", request.statusCode);
  console.log("statusMessage:", request.statusMessage);

  switch(request.url) {
    case '/users':
    {
      response.statusCode = 404;
      response.write('<h1 style="color: mediumpurple">Nope</h1>');
      response.end("no data here:(");
      break;
    }
      case '/redirect':
      response.writeHead(302, {
        'Location': 'DARKSIDE'
      });
      //response.end('<body style="background-color: mediumpurple"></body>');
      break;
      default :
          //puts this HTML on the page providing no other response is viable
      response.end("It's THE DEFAULT!");
  }

  response.end("some text!");
  //console.log("response:", response);
});

server.listen(PORT, function() {
  //listen is an asynchronous method, it takes time to load
  //writing stuff below it means it might fire before this does
  console.log("inside listener");
});



console.log('end of file');
