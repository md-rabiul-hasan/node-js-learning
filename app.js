const http = require('http')

const server = http.createServer( (req, res) => {
    if(req.url == '/'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          data: 'Hello World!'
        }));
    }else if(req.url == '/login'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          data: 'Hello Login!'
        }));
    }else{
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            data: 'Page not found :)'
        }));          
    }
})

server.listen(3000)