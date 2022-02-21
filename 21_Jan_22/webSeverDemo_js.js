const http = require('http');
const hostname = 'localhost';
const port = 3000;
solan = 0;
const server = http.createServer((req, res) => { 
    solan++;
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'application/json');
    res.end( `{ "message" : "Hello World ${solan}" `
    + ` , "name" : "NNTu" `
    + ` , "age" : "45" `
    + ` , "address" : "Dist 6" `
    + ` }` );
});

server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});