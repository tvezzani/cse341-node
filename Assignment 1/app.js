const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body><h1>Welcome to the server!</h1></body>');
        res.write('<body><h4>Enter a username below</h4></body>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">Enter</button></input></form></body>')
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            //Logging the data to the console
            console.log("Username: ", username);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }

    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<ul><li>Pastor Bob</li></ul>');
        res.write('<ul><li>Katy Perry</li></ul>');
        res.write('<ul><li>Karren</li></ul>');
        res.write('</html>');
        return res.end();
    }
});

server.listen(3000);