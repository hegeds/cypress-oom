const http = require("http");
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
  switch (req.url) {
    case '/':
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(`
      <html>
        <body>
        <h1>HOME</h1>
        <button onclick="sendRequest()">API</button>
        <script>
        function sendRequest() {
          var xhttp = new XMLHttpRequest();
          xhttp.open('GET','http://httpbin.org/get')
          xhttp.send()
        }
        </script>
        </body>
      </html>`)
      break

    default:
      res.writeHead(404);
      res.end('Not found')
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

