const http = require('http')
const fs = require('fs');

const server = http.createServer( (req, res) => {
    if(req.url == '/'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        
        fs.readFile("pages/home.html", "utf8", (err, data) => {
            if(err) throw err;
            res.write(data);
            res.end();
        })
        
    }else if(req.url == '/about'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile("pages/about.html", "utf8", (err, data) => {
            if(err) throw err;
            res.write(data);
            res.end();
        })
    }else if(req.url == "/createfile"){
        res.writeHead(200, {'Content-TYpe': 'text/html'})
        const data = "<h1>New File</h1>";
        fs.appendFile("temp/html.html", data, (err) => {
            if(err) throw err;
            res.write("file created");
        })
        res.end();
    }else if(req.url == "/readfile"){
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        fs.readFile("temp/html.html", "utf8", (err, data) => {
            if(err) throw err;
            res.write(data);
            res.end();
        })

    }
    else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write("<h1>Page Not Found</h1>");
        res.end();        
    }
})

server.listen(3000)