const http = require('http');
const hostname = 'localhost';
const port = 3000;
solan = 0;
const server = http.createServer((req, res) => { 
    solan++;
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/html');
res.end( ` `
+ ` <H1> Hello World ${solan} </H1> `
+ `<img src="https://fridaycat.com.vn/wp-content/uploads/2021/04/meo-muop-giong-meo-pho-bien-tren-the-gioi.jpg"> `);
});

server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});