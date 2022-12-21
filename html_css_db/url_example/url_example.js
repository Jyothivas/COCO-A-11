const http = require('http');
const url = require('url');


http.createServer((req,resp) =>{
    resp.writeHead(200,{'content-type':'text/html'});
    resp.write('<h1>hello,karan</h1>');
    resp.write(`<h1>${emp_data}</h1>`);
    resp.end();
}).listen(3000);