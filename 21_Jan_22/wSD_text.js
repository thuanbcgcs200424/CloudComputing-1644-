const http = require ( 'http' );
const hostname = 'localhost' ;
const port = 3000 ;
solan = 0;
const server = http.createServer(
(req, res) => {
solan++;
res.statusCode = 200 ;
res.setHeader('Content-Type' , 'text/plain');
res.end( ' Chao ban, gio WEB chi the thoi !!! ' + solan );
}
);
server.listen(port, hostname,
() => {
console .log( `Server running at
http://${hostname}:${port}/` );
}
);