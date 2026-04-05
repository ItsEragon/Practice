const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html') ;
        res.write('<html>');
        res.write('<head><title>Learning NodeJs</title></head>');
        res.write('<body>');
        res.write('<h1>Enter Your Details:</h1>')
        res.write('<form action="/submit" method="POST">');
        res.write('<label>Name: </label>')
        res.write('<input type="text" name="username" placeholder="Enter your name"/><br>')
        res.write('<label>Gender: </label>')
        res.write('<label for="male">Male</label>')
        res.write('<input type="radio" id="male" name="gender" value="male">')
        res.write('<label for="female">Female</label>')
        res.write('<input type="radio" id="female" name="gender" value="female"><br>')
        res.write('<input type="submit" value="submit">')
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } else if (req.url.toLowerCase() === "/submit" && req.method == "POST") {
        fs.writeFileSync('user.txt', 'ItsEragon');
        res.statusCode = 302;
        res.setHeader('Location', '/');
    }
    
});

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});