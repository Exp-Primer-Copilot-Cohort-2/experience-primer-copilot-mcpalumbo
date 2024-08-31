// Create web server
// Create a web server using the http module
// The server should listen on port 3000
// The server should respond to GET requests for the /comments endpoint
// The server should respond with a JSON string with the following data:
// {
//   "comments": [
//     "Comment 1",
//     "Comment 2",
//     "Comment 3"
//   ]
// }
// When the server receives a request, it should log the request method and request URL to the console
// When the server receives a request, it should log the response status code and the response data to the console
// When the server receives a request, it should log the number of comments in the response data to the console
// When the server receives a request, it should log the first comment in the response data to the console

const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Request method:', req.method);
  console.log('Request URL:', req.url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    comments: [
      'Comment 1',
      'Comment 2',
      'Comment 3'
    ]
  }));
  console.log('Response status code:', res.statusCode);
  console.log('Response data:', res.data);
  console.log('Number of comments:', res.data.comments.length);
  console.log('First comment:', res.data.comments[0]);
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});