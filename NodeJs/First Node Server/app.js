const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);   
    res.setHeader('Content-Type', 'text/html') ;
    res.write('<html>');
    res.write('<head><title>Learning NodeJs</title></head>');
    res.write('<body><h1>Hey there, I am learning NodeJs</h1></body>');
    res.write('</html>');
    res.end();
    // process.exit();
});

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});