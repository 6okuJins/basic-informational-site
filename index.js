const http = require('http');
const fs = require('fs');



const server = http.createServer((req, res) => {
  const callBack = (err, data) => {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
  }
  if (req.url === '/') {
    fs.readFile('index.html', callBack);
  } else if (req.url === '/about') {
    fs.readFile('about.html', callBack);
  } else if (req.url === '/contact-me') {
    fs.readFile('contact-me.html', callBack);
  } else {
    fs.readFile('404.html', callBack);
  }
  return res.end
});

server.listen(6969, () => {
  console.log('Listening on port 6969...')
});