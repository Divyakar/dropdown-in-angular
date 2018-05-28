var http = require('http');
var fs = require('fs');
// function onRequest(req, res) {
//     fs.readFile('./data.json', function (err, data) {
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         res.writeHead(200, { 'Content-Type': 'text/json' });
//         res.write(data);

//         if (err) {
//             res.writeHead(404, { 'Content-Type': 'text/html' });
//             res.write("404 Not Found");
//         }
//     })
// }


function onRequest(req, res) {
    if (req.method == 'GET') {
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200, { 'Context-Type': 'text/json' });
        fs.createReadStream('./data.json').pipe(res);
    }
    // if (err) {
    //     res.writeHead(404, { 'Content-Type': 'text/html' });
    //     res.write("404 Not Found");
    // }
}
http.createServer(onRequest).listen(5800);

console.log('Server is running!');

